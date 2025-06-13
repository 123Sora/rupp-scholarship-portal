import React, { useState } from 'react';
import { X, Eye, EyeOff, Loader2 } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import { useLanguage } from '../contexts/LanguageContext';

interface LoginModalProps {
  onClose: () => void;
}

export default function LoginModal({ onClose }: LoginModalProps) {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    phone: ''
  });
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const { login, register } = useAuth();
  const { t, language } = useLanguage();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      let success;
      if (isLogin) {
        success = await login(formData.email, formData.password);
      } else {
        success = await register(formData.name, formData.email, formData.password, formData.phone);
      }

      if (success) {
        onClose();
      } else {
        setError(t('Invalid credentials. Try demo@example.com / password', 'ព័ត៌មានមិនត្រឹមត្រូវ។ សាកល្បង demo@example.com / password'));
      }
    } catch (err) {
      setError(t('An error occurred. Please try again.', 'មានកំហុសកើតឡើង។ សូមព្យាយាមម្តងទៀត។'));
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg w-full max-w-md">
        <div className="flex justify-between items-center p-6 border-b">
          <h2 className={`text-xl font-bold ${language === 'kh' ? 'font-khmer' : ''}`}>
            {isLogin ? t('Login', 'ចូល') : t('Register', 'ចុះឈ្មោះ')}
          </h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          {!isLogin && (
            <div>
              <label className={`block text-sm font-medium text-gray-700 mb-1 ${language === 'kh' ? 'font-khmer' : ''}`}>
                {t('Full Name', 'ឈ្មោះពេញ')}
              </label>
              <input
                type="text"
                required={!isLogin}
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          )}

          <div>
            <label className={`block text-sm font-medium text-gray-700 mb-1 ${language === 'kh' ? 'font-khmer' : ''}`}>
              {t('Email', 'អ៊ីមែល')}
            </label>
            <input
              type="email"
              required
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="relative">
            <label className={`block text-sm font-medium text-gray-700 mb-1 ${language === 'kh' ? 'font-khmer' : ''}`}>
              {t('Password', 'លេខសម្ងាត់')}
            </label>
            <input
              type={showPassword ? 'text' : 'password'}
              required
              value={formData.password}
              onChange={(e) => setFormData({ ...formData, password: e.target.value })}
              className="w-full px-3 py-2 pr-10 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-8 text-gray-500 hover:text-gray-700"
            >
              {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
            </button>
          </div>

          {!isLogin && (
            <div>
              <label className={`block text-sm font-medium text-gray-700 mb-1 ${language === 'kh' ? 'font-khmer' : ''}`}>
                {t('Phone Number', 'លេខទូរសព្ទ')}
              </label>
              <input
                type="tel"
                required={!isLogin}
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          )}

          {error && (
            <p className={`text-red-600 text-sm ${language === 'kh' ? 'font-khmer' : ''}`}>
              {error}
            </p>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
          >
            {loading && <Loader2 className="h-4 w-4 animate-spin mr-2" />}
            {isLogin ? t('Login', 'ចូល') : t('Register', 'ចុះឈ្មោះ')}
          </button>

          <div className="text-center">
            <button
              type="button"
              onClick={() => {
                setIsLogin(!isLogin);
                setError('');
                setFormData({ name: '', email: '', password: '', phone: '' });
              }}
              className={`text-blue-600 hover:text-blue-800 text-sm ${language === 'kh' ? 'font-khmer' : ''}`}
            >
              {isLogin 
                ? t("Don't have an account? Register", "មិនមានគណនី? ចុះឈ្មោះ")
                : t("Already have an account? Login", "មានគណនីរួចហើយ? ចូល")
              }
            </button>
          </div>

          {isLogin && (
            <div className={`text-center text-xs text-gray-500 ${language === 'kh' ? 'font-khmer' : ''}`}>
              {t('Demo account:', 'គណនីសាកល្បង:')} demo@example.com / password
            </div>
          )}
        </form>
      </div>
    </div>
  );
}