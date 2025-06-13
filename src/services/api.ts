import axios from 'axios';

const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:3001/api';

// Create axios instance
const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add auth token to requests
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    if (!config.headers) {
      config.headers = {};
    }
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Handle auth errors
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      localStorage.removeItem('token');
      localStorage.removeItem('user');
      window.location.href = '/login';
    }
    return Promise.reject(error);
  }
);

// Auth API
export const authAPI = {
  login: (email: string, password: string) =>
    api.post('/auth/login', { email, password }),
  
  register: (userData: {
    email: string;
    password: string;
    firstName: string;
    lastName: string;
  }) => api.post('/auth/register', userData),
  
  getCurrentUser: () => api.get('/auth/me'),
};

// Scholarships API
export const scholarshipsAPI = {
  getAll: (params?: any) => api.get('/scholarships', { params }),
  
  getById: (id: string) => api.get(`/scholarships/${id}`),
  
  apply: (id: string, applicationData: any) =>
    api.post(`/scholarships/${id}/apply`, { applicationData }),
};

// Admin API
export const adminAPI = {
  getDashboard: () => api.get('/admin/dashboard'),
  
  getScholarships: (params?: any) => api.get('/admin/scholarships', { params }),
  
  createScholarship: (data: any) => api.post('/admin/scholarships', data),
  
  updateScholarship: (id: string, data: any) =>
    api.put(`/admin/scholarships/${id}`, data),
  
  deleteScholarship: (id: string) => api.delete(`/admin/scholarships/${id}`),
  
  getApplications: (params?: any) => api.get('/admin/applications', { params }),
  
  updateApplication: (id: string, data: any) =>
    api.put(`/admin/applications/${id}`, data),
};

export default api;