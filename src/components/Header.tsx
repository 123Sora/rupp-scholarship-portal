import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Search, Menu, X, User, LogOut, Settings } from 'lucide-react';
import { userAuth } from '../contexts/AuthContext';
import LogoutModal from './LogoutModal';
import rupplogo from '../assets/rupplogo-removebg-preview.png';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const [showLogoutModal, setShowLogoutModal] = useState(false);
  const { user, isAdmin } = userAuth();
  const navigate = useNavigate();

  const handleSearchClick = () => {
    navigate('/#scholarships');
    setIsMenuOpen(false);
  };

  const handleLogoutClick = () => {
    setShowLogoutModal(true);
    setIsUserMenuOpen(false);
  };

  return (
    <>
      <header className="bg-white shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center">
              <img 
                src={rupplogo} 
                alt="RUPP Logo" 
                className="h-20 w-20 mt-3 " 
              />
              <div>
                <h1 className="text-xl font-bold text-rupp-red">| RUPP</h1>
                <p className="text-xs text-rupp-blue">Scholarship Portal</p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <Link to="/" className="text-gray-700 hover:text-rupp-red font-medium transition-colors">
                Home
              </Link>
              <Link to="/scholarships" className="text-gray-700 hover:text-rupp-red font-medium transition-colors">
                Scholarships
              </Link>
              <Link to="/how-to-apply" className="text-gray-700 hover:text-rupp-red font-medium transition-colors">
                How to Apply
              </Link>
              <Link to="/contact" className="text-gray-700 hover:text-rupp-red font-medium transition-colors">
                Contact IRO
              </Link>
              
              {user ? (
                <div className="relative">
                  <button
                    onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
                    className="flex items-center space-x-2 text-gray-700 hover:text-rupp-red font-medium transition-colors"
                  >
                    <User className="h-4 w-4" />
                    <span>{user.firstName}</span>
                  </button>
                  
                  {isUserMenuOpen && (
                    <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-1">
                      <div className="px-4 py-2 border-b border-gray-200">
                        <p className="text-sm font-medium text-gray-900">{user.firstName} {user.lastName}</p>
                        <p className="text-xs text-gray-600">{user.email}</p>
                        <p className="text-xs text-rupp-blue font-medium capitalize">{user.role}</p>
                      </div>
                      {isAdmin && (
                        <Link
                          to="/admin"
                          onClick={() => setIsUserMenuOpen(false)}
                          className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        >
                          <Settings className="h-4 w-4 mr-2" />
                          Admin Dashboard
                        </Link>
                      )}
                      <button
                        onClick={handleLogoutClick}
                        className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      >
                        <LogOut className="h-4 w-4 mr-2" />
                        Logout
                      </button>
                    </div>
                  )}
                </div>
              ) : (
                <div className="flex items-center space-x-4">
                  <Link
                    to="/login"
                    className="text-gray-700 hover:text-rupp-red font-medium transition-colors"
                  >
                    Login
                  </Link>
                  <Link
                    to="/register"
                    className="bg-rupp-red text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors"
                  >
                    Register
                  </Link>
                </div>
              )}
              
              <button
                onClick={handleSearchClick}
                className="bg-rupp-blue text-white px-4 py-2 rounded-lg hover:bg-blue-800 transition-colors flex items-center space-x-2"
              >
                <Search className="h-4 w-4" />
                <span>Search</span>
              </button>
            </nav>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-lg text-gray-600 hover:text-gray-900 hover:bg-gray-100"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden py-4 border-t border-gray-200">
              <nav className="flex flex-col space-y-3">
                <Link 
                  to="/" 
                  onClick={() => setIsMenuOpen(false)}
                  className="text-gray-700 hover:text-rupp-red font-medium py-2"
                >
                  Home
                </Link>
                <Link 
                  to="/#scholarships" 
                  onClick={() => setIsMenuOpen(false)}
                  className="text-gray-700 hover:text-rupp-red font-medium py-2"
                >
                  Scholarships
                </Link>
                <Link 
                  to="/how-to-apply" 
                  onClick={() => setIsMenuOpen(false)}
                  className="text-gray-700 hover:text-rupp-red font-medium py-2"
                >
                  How to Apply
                </Link>
                <Link 
                  to="/contact" 
                  onClick={() => setIsMenuOpen(false)}
                  className="text-gray-700 hover:text-rupp-red font-medium py-2"
                >
                  Contact IRO
                </Link>
                
                {user ? (
                  <div className="border-t border-gray-200 pt-3 mt-3">
                    <div className="mb-3">
                      <p className="text-sm font-medium text-gray-900">{user.firstName} {user.lastName}</p>
                      <p className="text-xs text-gray-600">{user.email}</p>
                      <p className="text-xs text-rupp-blue font-medium capitalize">{user.role}</p>
                    </div>
                    {isAdmin && (
                      <Link
                        to="/admin"
                        onClick={() => setIsMenuOpen(false)}
                        className="flex items-center text-gray-700 hover:text-rupp-red font-medium py-2"
                      >
                        <Settings className="h-4 w-4 mr-2" />
                        Admin Dashboard
                      </Link>
                    )}
                    <button
                      onClick={() => {
                        setIsMenuOpen(false);
                        setShowLogoutModal(true);
                      }}
                      className="flex items-center text-gray-700 hover:text-rupp-red font-medium py-2"
                    >
                      <LogOut className="h-4 w-4 mr-2" />
                      Logout
                    </button>
                  </div>
                ) : (
                  <div className="border-t border-gray-200 pt-3 mt-3 space-y-3">
                    <Link
                      to="/login"
                      onClick={() => setIsMenuOpen(false)}
                      className="block text-gray-700 hover:text-rupp-red font-medium py-2"
                    >
                      Login
                    </Link>
                    <Link
                      to="/register"
                      onClick={() => setIsMenuOpen(false)}
                      className="block bg-rupp-red text-white px-4 py-3 rounded-lg hover:bg-red-700 transition-colors text-center"
                    >
                      Register
                    </Link>
                  </div>
                )}
                
                <button
                  onClick={handleSearchClick}
                  className="bg-rupp-blue text-white px-4 py-3 rounded-lg hover:bg-blue-800 transition-colors flex items-center justify-center space-x-2 mt-4"
                >
                  <Search className="h-4 w-4" />
                  <span>Search Scholarships</span>
                </button>
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Logout Modal */}
      {showLogoutModal && (
        <LogoutModal onClose={() => setShowLogoutModal(false)} />
      )}
    </>
  );
}