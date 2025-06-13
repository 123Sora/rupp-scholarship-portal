import sqlite3 from 'sqlite3';
import { promisify } from 'util';
import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Create database connection
const dbPath = path.join(__dirname, '..', 'database.sqlite');
const db = new sqlite3.Database(dbPath);

// Promisify database methods
export const dbRun = promisify(db.run.bind(db));
export const dbGet = promisify(db.get.bind(db));
export const dbAll = promisify(db.all.bind(db));

export async function initDatabase() {
  try {
    // Create tables
    await createTables();
    console.log('Database initialized successfully');
  } catch (error) {
    console.error('Database initialization failed:', error);
    throw error;
  }
}

async function createTables() {
  const createUsersTable = `
    CREATE TABLE IF NOT EXISTS users (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      email TEXT UNIQUE NOT NULL,
      password TEXT NOT NULL,
      role TEXT DEFAULT 'user' CHECK(role IN ('admin', 'user')),
      first_name TEXT,
      last_name TEXT,
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
      updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
    )
  `;

  const createScholarshipsTable = `
    CREATE TABLE IF NOT EXISTS scholarships (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      title TEXT NOT NULL,
      description TEXT NOT NULL,
      amount REAL NOT NULL,
      deadline DATE NOT NULL,
      category TEXT NOT NULL CHECK(category IN ('Academic Excellence', 'Need-Based', 'Research', 'Athletics', 'Community Service', 'International', 'Arts & Culture', 'STEM', 'Business', 'Healthcare')),
      eligibility TEXT NOT NULL,
      requirements TEXT NOT NULL,
      featured BOOLEAN DEFAULT FALSE,
      application_link TEXT,
      contact_email TEXT NOT NULL,
      max_recipients INTEGER DEFAULT 1,
      renewable BOOLEAN DEFAULT FALSE,
      gpa_requirement REAL,
      field_of_study TEXT,
      status TEXT DEFAULT 'active' CHECK(status IN ('active', 'inactive', 'expired')),
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
      updated_at DATETIME DEFAULT CURRENT_TIMESTAMP,
      created_by INTEGER,
      FOREIGN KEY (created_by) REFERENCES users(id)
    )
  `;

  const createApplicationsTable = `
    CREATE TABLE IF NOT EXISTS applications (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      scholarship_id INTEGER NOT NULL,
      user_id INTEGER NOT NULL,
      status TEXT DEFAULT 'pending' CHECK(status IN ('pending', 'approved', 'rejected', 'under_review')),
      application_data TEXT,
      submitted_at DATETIME DEFAULT CURRENT_TIMESTAMP,
      reviewed_at DATETIME,
      reviewed_by INTEGER,
      notes TEXT,
      FOREIGN KEY (scholarship_id) REFERENCES scholarships(id) ON DELETE CASCADE,
      FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,
      FOREIGN KEY (reviewed_by) REFERENCES users(id),
      UNIQUE(scholarship_id, user_id)
    )
  `;

  const createAuditLogsTable = `
    CREATE TABLE IF NOT EXISTS audit_logs (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      user_id INTEGER,
      action TEXT NOT NULL,
      table_name TEXT NOT NULL,
      record_id INTEGER,
      old_values TEXT,
      new_values TEXT,
      ip_address TEXT,
      user_agent TEXT,
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
      FOREIGN KEY (user_id) REFERENCES users(id)
    )
  `;

  await dbRun(createUsersTable);
  await dbRun(createScholarshipsTable);
  await dbRun(createApplicationsTable);
  await dbRun(createAuditLogsTable);

  // Create default admin user
  await createDefaultAdmin();
}

async function createDefaultAdmin() {
  try {
    const existingAdmin = await dbGet('SELECT COUNT(*) as count FROM users WHERE role = "admin"');
    if (existingAdmin.count === 0) {
      const bcrypt = await import('bcryptjs');
      const hashedPassword = await bcrypt.hash('admin123', 12);
      
      await dbRun(
        'INSERT INTO users (email, password, role, first_name, last_name) VALUES (?, ?, ?, ?, ?)',
        ['admin@university.edu', hashedPassword, 'admin', 'System', 'Administrator']
      );
      console.log('Default admin user created: admin@university.edu / admin123');
    }
  } catch (error) {
    console.error('Error creating default admin:', error);
  }
}

export { db };