import jwt from 'jsonwebtoken';
import { dbGet } from '../config/database.js';

export const authenticateToken = async (req, res, next) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (!token) {
    return res.status(401).json({ 
      success: false, 
      message: 'Access token required' 
    });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET || 'your-secret-key');
    
    // Verify user still exists and is active
    const user = await dbGet(
      'SELECT id, email, role, first_name, last_name FROM users WHERE id = ?',
      [decoded.userId]
    );

    if (!user) {
      return res.status(401).json({ 
        success: false, 
        message: 'Invalid token - user not found' 
      });
    }

    req.user = user;
    next();
  } catch (error) {
    return res.status(403).json({ 
      success: false, 
      message: 'Invalid or expired token' 
    });
  }
};

export const requireAdmin = (req, res, next) => {
  if (req.user.role !== 'admin') {
    return res.status(403).json({ 
      success: false, 
      message: 'Admin access required' 
    });
  }
  next();
};

export const logActivity = async (req, res, next) => {
  const originalSend = res.send;
  
  res.send = function(data) {
    // Log successful operations
    if (res.statusCode < 400 && req.user) {
      const action = `${req.method} ${req.route?.path || req.path}`;
      const ipAddress = req.ip || req.connection.remoteAddress;
      const userAgent = req.get('User-Agent');
      
      // Log to audit table (implement as needed)
      console.log(`User ${req.user.id} performed: ${action} from ${ipAddress}`);
    }
    
    originalSend.call(this, data);
  };
  
  next();
};

// Rate limiting for sensitive operations
export const sensitiveRateLimit = (windowMs = 15 * 60 * 1000, max = 5) => {
  const attempts = new Map();
  
  return (req, res, next) => {
    const key = req.ip;
    const now = Date.now();
    
    if (!attempts.has(key)) {
      attempts.set(key, []);
    }
    
    const userAttempts = attempts.get(key);
    const recentAttempts = userAttempts.filter(time => now - time < windowMs);
    
    if (recentAttempts.length >= max) {
      return res.status(429).json({
        success: false,
        message: 'Too many attempts. Please try again later.'
      });
    }
    
    recentAttempts.push(now);
    attempts.set(key, recentAttempts);
    
    next();
  };
};