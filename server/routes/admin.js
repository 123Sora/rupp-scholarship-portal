import express from 'express';
import { body, validationResult } from 'express-validator';
import { pool } from '../config/database.js';
import { authenticateToken, requireAdmin, logActivity } from '../middleware/auth.js';

const router = express.Router();

// Apply authentication and admin requirement to all routes
router.use(authenticateToken);
router.use(requireAdmin);
router.use(logActivity);

// Get dashboard statistics
router.get('/dashboard', async (req, res) => {
  try {
    const [scholarshipStats] = await pool.execute(`
      SELECT 
        COUNT(*) as total_scholarships,
        COUNT(CASE WHEN status = 'active' THEN 1 END) as active_scholarships,
        COUNT(CASE WHEN featured = 1 THEN 1 END) as featured_scholarships,
        SUM(CASE WHEN status = 'active' THEN amount ELSE 0 END) as total_funding
      FROM scholarships
    `);

    const [applicationStats] = await pool.execute(`
      SELECT 
        COUNT(*) as total_applications,
        COUNT(CASE WHEN status = 'pending' THEN 1 END) as pending_applications,
        COUNT(CASE WHEN status = 'approved' THEN 1 END) as approved_applications,
        COUNT(CASE WHEN status = 'rejected' THEN 1 END) as rejected_applications
      FROM applications
    `);

    const [userStats] = await pool.execute(`
      SELECT 
        COUNT(*) as total_users,
        COUNT(CASE WHEN role = 'admin' THEN 1 END) as admin_users
      FROM users
    `);

    const [recentApplications] = await pool.execute(`
      SELECT 
        a.id, a.status, a.submitted_at,
        s.title as scholarship_title,
        u.first_name, u.last_name, u.email
      FROM applications a
      JOIN scholarships s ON a.scholarship_id = s.id
      JOIN users u ON a.user_id = u.id
      ORDER BY a.submitted_at DESC
      LIMIT 10
    `);

    res.json({
      success: true,
      data: {
        scholarships: scholarshipStats[0],
        applications: applicationStats[0],
        users: userStats[0],
        recentApplications
      }
    });
  } catch (error) {
    console.error('Dashboard error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to fetch dashboard data'
    });
  }
});

// Get all scholarships for admin
router.get('/scholarships', async (req, res) => {
  try {
    const { page = 1, limit = 20, status, category } = req.query;

    let query = `
      SELECT s.*, u.first_name as created_by_name, u.last_name as created_by_lastname,
             COUNT(a.id) as application_count
      FROM scholarships s
      LEFT JOIN users u ON s.created_by = u.id
      LEFT JOIN applications a ON s.id = a.scholarship_id
      WHERE 1=1
    `;
    
    const params = [];

    if (status) {
      query += ' AND s.status = ?';
      params.push(status);
    }

    if (category) {
      query += ' AND s.category = ?';
      params.push(category);
    }

    query += ' GROUP BY s.id ORDER BY s.created_at DESC';

    const offset = (page - 1) * limit;
    query += ' LIMIT ? OFFSET ?';
    params.push(parseInt(limit), offset);

    const [scholarships] = await pool.execute(query, params);

    // Parse JSON fields
    const formattedScholarships = scholarships.map(scholarship => ({
      ...scholarship,
      eligibility: JSON.parse(scholarship.eligibility),
      requirements: JSON.parse(scholarship.requirements),
      field_of_study: scholarship.field_of_study ? JSON.parse(scholarship.field_of_study) : null
    }));

    res.json({
      success: true,
      data: formattedScholarships
    });
  } catch (error) {
    console.error('Get admin scholarships error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to fetch scholarships'
    });
  }
});

// Create scholarship
router.post('/scholarships', [
  body('title').trim().isLength({ min: 1, max: 255 }),
  body('description').trim().isLength({ min: 1 }),
  body('amount').isNumeric({ min: 0 }),
  body('deadline').isISO8601(),
  body('category').isIn(['Academic Excellence', 'Need-Based', 'Research', 'Athletics', 'Community Service', 'International', 'Arts & Culture', 'STEM', 'Business', 'Healthcare']),
  body('eligibility').isArray({ min: 1 }),
  body('requirements').isArray({ min: 1 }),
  body('contact_email').isEmail(),
  body('max_recipients').optional().isInt({ min: 1 }),
  body('renewable').optional().isBoolean(),
  body('featured').optional().isBoolean(),
  body('gpa_requirement').optional().isNumeric({ min: 0, max: 4 }),
  body('field_of_study').optional().isArray()
], async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        success: false,
        message: 'Validation failed',
        errors: errors.array()
      });
    }

    const {
      title, description, amount, deadline, category, eligibility, requirements,
      contact_email, max_recipients = 1, renewable = false, featured = false,
      gpa_requirement, field_of_study, application_link
    } = req.body;

    const [result] = await pool.execute(`
      INSERT INTO scholarships (
        title, description, amount, deadline, category, eligibility, requirements,
        contact_email, max_recipients, renewable, featured, gpa_requirement,
        field_of_study, application_link, created_by
      ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `, [
      title, description, amount, deadline, category,
      JSON.stringify(eligibility), JSON.stringify(requirements),
      contact_email, max_recipients, renewable, featured, gpa_requirement,
      field_of_study ? JSON.stringify(field_of_study) : null,
      application_link, req.user.id
    ]);

    res.status(201).json({
      success: true,
      message: 'Scholarship created successfully',
      data: { id: result.insertId }
    });
  } catch (error) {
    console.error('Create scholarship error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to create scholarship'
    });
  }
});

// Update scholarship
router.put('/scholarships/:id', [
  body('title').optional().trim().isLength({ min: 1, max: 255 }),
  body('description').optional().trim().isLength({ min: 1 }),
  body('amount').optional().isNumeric({ min: 0 }),
  body('deadline').optional().isISO8601(),
  body('category').optional().isIn(['Academic Excellence', 'Need-Based', 'Research', 'Athletics', 'Community Service', 'International', 'Arts & Culture', 'STEM', 'Business', 'Healthcare']),
  body('eligibility').optional().isArray({ min: 1 }),
  body('requirements').optional().isArray({ min: 1 }),
  body('contact_email').optional().isEmail(),
  body('status').optional().isIn(['active', 'inactive', 'expired'])
], async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        success: false,
        message: 'Validation failed',
        errors: errors.array()
      });
    }

    const { id } = req.params;
    const updates = req.body;

    // Build dynamic update query
    const fields = [];
    const values = [];

    Object.keys(updates).forEach(key => {
      if (key === 'eligibility' || key === 'requirements' || key === 'field_of_study') {
        fields.push(`${key} = ?`);
        values.push(JSON.stringify(updates[key]));
      } else {
        fields.push(`${key} = ?`);
        values.push(updates[key]);
      }
    });

    if (fields.length === 0) {
      return res.status(400).json({
        success: false,
        message: 'No valid fields to update'
      });
    }

    values.push(id);

    const [result] = await pool.execute(
      `UPDATE scholarships SET ${fields.join(', ')} WHERE id = ?`,
      values
    );

    if (result.affectedRows === 0) {
      return res.status(404).json({
        success: false,
        message: 'Scholarship not found'
      });
    }

    res.json({
      success: true,
      message: 'Scholarship updated successfully'
    });
  } catch (error) {
    console.error('Update scholarship error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to update scholarship'
    });
  }
});

// Delete scholarship
router.delete('/scholarships/:id', async (req, res) => {
  try {
    const { id } = req.params;

    const [result] = await pool.execute(
      'DELETE FROM scholarships WHERE id = ?',
      [id]
    );

    if (result.affectedRows === 0) {
      return res.status(404).json({
        success: false,
        message: 'Scholarship not found'
      });
    }

    res.json({
      success: true,
      message: 'Scholarship deleted successfully'
    });
  } catch (error) {
    console.error('Delete scholarship error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to delete scholarship'
    });
  }
});

// Get applications
router.get('/applications', async (req, res) => {
  try {
    const { page = 1, limit = 20, status, scholarship_id } = req.query;

    let query = `
      SELECT 
        a.id, a.status, a.submitted_at, a.reviewed_at, a.notes,
        s.title as scholarship_title, s.amount,
        u.first_name, u.last_name, u.email,
        reviewer.first_name as reviewer_first_name,
        reviewer.last_name as reviewer_last_name
      FROM applications a
      JOIN scholarships s ON a.scholarship_id = s.id
      JOIN users u ON a.user_id = u.id
      LEFT JOIN users reviewer ON a.reviewed_by = reviewer.id
      WHERE 1=1
    `;
    
    const params = [];

    if (status) {
      query += ' AND a.status = ?';
      params.push(status);
    }

    if (scholarship_id) {
      query += ' AND a.scholarship_id = ?';
      params.push(scholarship_id);
    }

    query += ' ORDER BY a.submitted_at DESC';

    const offset = (page - 1) * limit;
    query += ' LIMIT ? OFFSET ?';
    params.push(parseInt(limit), offset);

    const [applications] = await pool.execute(query, params);

    res.json({
      success: true,
      data: applications
    });
  } catch (error) {
    console.error('Get applications error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to fetch applications'
    });
  }
});

// Update application status
router.put('/applications/:id', [
  body('status').isIn(['pending', 'approved', 'rejected', 'under_review']),
  body('notes').optional().trim()
], async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        success: false,
        message: 'Validation failed',
        errors: errors.array()
      });
    }

    const { id } = req.params;
    const { status, notes } = req.body;

    const [result] = await pool.execute(
      'UPDATE applications SET status = ?, notes = ?, reviewed_at = NOW(), reviewed_by = ? WHERE id = ?',
      [status, notes || null, req.user.id, id]
    );

    if (result.affectedRows === 0) {
      return res.status(404).json({
        success: false,
        message: 'Application not found'
      });
    }

    res.json({
      success: true,
      message: 'Application status updated successfully'
    });
  } catch (error) {
    console.error('Update application error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to update application'
    });
  }
});

export default router;