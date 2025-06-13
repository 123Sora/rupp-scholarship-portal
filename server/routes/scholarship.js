import express from 'express';
import { body, query, validationResult } from 'express-validator';
import { pool } from '../config/database.js';
import { authenticateToken } from '../middleware/auth.js';

const router = express.Router();

// Get all scholarships (public)
router.get('/', [
  query('category').optional().isIn(['Academic Excellence', 'Need-Based', 'Research', 'Athletics', 'Community Service', 'International', 'Arts & Culture', 'STEM', 'Business', 'Healthcare']),
  query('search').optional().trim(),
  query('minAmount').optional().isNumeric(),
  query('maxAmount').optional().isNumeric(),
  query('page').optional().isInt({ min: 1 }),
  query('limit').optional().isInt({ min: 1, max: 100 })
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
      category,
      search,
      minAmount = 0,
      maxAmount = 999999,
      page = 1,
      limit = 20
    } = req.query;

    let query = `
      SELECT id, title, description, amount, deadline, category, eligibility, 
             requirements, featured, application_link, contact_email, 
             max_recipients, renewable, gpa_requirement, field_of_study, status
      FROM scholarships 
      WHERE status = 'active' AND deadline >= CURDATE()
    `;
    
    const params = [];

    if (category) {
      query += ' AND category = ?';
      params.push(category);
    }

    if (search) {
      query += ' AND (title LIKE ? OR description LIKE ? OR category LIKE ?)';
      const searchTerm = `%${search}%`;
      params.push(searchTerm, searchTerm, searchTerm);
    }

    query += ' AND amount BETWEEN ? AND ?';
    params.push(minAmount, maxAmount);

    // Add ordering
    query += ' ORDER BY featured DESC, deadline ASC';

    // Add pagination
    const offset = (page - 1) * limit;
    query += ' LIMIT ? OFFSET ?';
    params.push(parseInt(limit), offset);

    const [scholarships] = await pool.execute(query, params);

    // Get total count for pagination
    let countQuery = `
      SELECT COUNT(*) as total 
      FROM scholarships 
      WHERE status = 'active' AND deadline >= CURDATE()
    `;
    const countParams = [];

    if (category) {
      countQuery += ' AND category = ?';
      countParams.push(category);
    }

    if (search) {
      countQuery += ' AND (title LIKE ? OR description LIKE ? OR category LIKE ?)';
      const searchTerm = `%${search}%`;
      countParams.push(searchTerm, searchTerm, searchTerm);
    }

    countQuery += ' AND amount BETWEEN ? AND ?';
    countParams.push(minAmount, maxAmount);

    const [countResult] = await pool.execute(countQuery, countParams);
    const total = countResult[0].total;

    // Parse JSON fields
    const formattedScholarships = scholarships.map(scholarship => ({
      ...scholarship,
      eligibility: JSON.parse(scholarship.eligibility),
      requirements: JSON.parse(scholarship.requirements),
      field_of_study: scholarship.field_of_study ? JSON.parse(scholarship.field_of_study) : null
    }));

    res.json({
      success: true,
      data: formattedScholarships,
      pagination: {
        page: parseInt(page),
        limit: parseInt(limit),
        total,
        pages: Math.ceil(total / limit)
      }
    });
  } catch (error) {
    console.error('Get scholarships error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to fetch scholarships'
    });
  }
});

// Get single scholarship
router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;

    const [scholarships] = await pool.execute(
      `SELECT id, title, description, amount, deadline, category, eligibility, 
              requirements, featured, application_link, contact_email, 
              max_recipients, renewable, gpa_requirement, field_of_study, status
       FROM scholarships 
       WHERE id = ? AND status = 'active'`,
      [id]
    );

    if (scholarships.length === 0) {
      return res.status(404).json({
        success: false,
        message: 'Scholarship not found'
      });
    }

    const scholarship = scholarships[0];
    scholarship.eligibility = JSON.parse(scholarship.eligibility);
    scholarship.requirements = JSON.parse(scholarship.requirements);
    scholarship.field_of_study = scholarship.field_of_study ? JSON.parse(scholarship.field_of_study) : null;

    res.json({
      success: true,
      data: scholarship
    });
  } catch (error) {
    console.error('Get scholarship error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to fetch scholarship'
    });
  }
});

// Apply for scholarship
router.post('/:id/apply', authenticateToken, [
  body('applicationData').isObject()
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
    const { applicationData } = req.body;
    const userId = req.user.id;

    // Check if scholarship exists and is active
    const [scholarships] = await pool.execute(
      'SELECT id, deadline FROM scholarships WHERE id = ? AND status = "active"',
      [id]
    );

    if (scholarships.length === 0) {
      return res.status(404).json({
        success: false,
        message: 'Scholarship not found or inactive'
      });
    }

    const scholarship = scholarships[0];
    
    // Check if deadline has passed
    if (new Date(scholarship.deadline) < new Date()) {
      return res.status(400).json({
        success: false,
        message: 'Application deadline has passed'
      });
    }

    // Check if user has already applied
    const [existingApplications] = await pool.execute(
      'SELECT id FROM applications WHERE scholarship_id = ? AND user_id = ?',
      [id, userId]
    );

    if (existingApplications.length > 0) {
      return res.status(400).json({
        success: false,
        message: 'You have already applied for this scholarship'
      });
    }

    // Create application
    await pool.execute(
      'INSERT INTO applications (scholarship_id, user_id, application_data) VALUES (?, ?, ?)',
      [id, userId, JSON.stringify(applicationData)]
    );

    res.status(201).json({
      success: true,
      message: 'Application submitted successfully'
    });
  } catch (error) {
    console.error('Apply scholarship error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to submit application'
    });
  }
});

export default router;