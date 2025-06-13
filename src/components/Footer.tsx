import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin, } from 'lucide-react';
import rupplogo from '../assets/rupplogo-removebg-preview.png';

// Telegram SVG icon as a React component
const TelegramIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" {...props}>
    <path d="M21.944 2.506a1.5 1.5 0 0 0-1.633-.217L2.9 10.07a1.5 1.5 0 0 0 .13 2.77l4.44 1.73 2.03 6.09a1.5 1.5 0 0 0 2.67.27l2.13-3.19 4.16 3.06a1.5 1.5 0 0 0 2.36-.89l3.01-15.01a1.5 1.5 0 0 0-.786-1.404zM9.57 17.13l-1.44-4.33 7.47-6.7-6.03 7.97zm2.93 2.34l-1.13-3.39 2.18-2.6 2.13 1.57-3.18 4.42zm7.13-1.02l-4.16-3.06 5.13-7.13-1.97 10.19z" fill="currentColor"/>
  </svg>
); 

export default function Footer() {
  return (
    <footer className="bg-rupp-dark text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* University Info */}
          <div>
            <div className="flex items-center mb-6">
              <img 
                src={rupplogo}
                alt="RUPP Logo" 
                className="h-20 w-20"
              />
              <div>
                <h3 className="text-lg font-bold">| RUPP</h3>
                <p className="text-sm text-gray-400">Scholarship Portal</p>
              </div>
            </div>
            <p className="text-gray-400 mb-4">
              Royal University of Phnom Penh - Cambodia's leading institution for higher education, research, and innovation since 1960.
            </p>
            <div className="flex space-x-4">
              <a href="https://facebook.com/rupp.edu.kh" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="https://twitter.com/rupp_cambodia" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="https://instagram.com/rupp_cambodia" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="https://linkedin.com/school/royal-university-of-phnom-penh" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="https://t.me/rupp_iro" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <TelegramIcon className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/#scholarships" className="text-gray-400 hover:text-white transition-colors">
                  Browse Scholarships
                </Link>
              </li>
              <li>
                <Link to="/how-to-apply" className="text-gray-400 hover:text-white transition-colors">
                  How to Apply
                </Link>
              </li>
              <li>
                <Link to="/eligibility" className="text-gray-400 hover:text-white transition-colors">
                  Eligibility Requirements
                </Link>
              </li>
              <li>
                <Link to="/timeline" className="text-gray-400 hover:text-white transition-colors">
                  Application Timeline
                </Link>
              </li>
              <li>
                <Link to="/success-stories" className="text-gray-400 hover:text-white transition-colors">
                  Success Stories
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Support</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/faq" className="text-gray-400 hover:text-white transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <a href="/application-help" className="text-gray-400 hover:text-white transition-colors">
                  Application Help
                </a>
              </li>
              <li>
                <a href="/financial-aid" className="text-gray-400 hover:text-white transition-colors">
                  Financial Aid Office
                </a>
              </li>
              <li>
                <a href="/student-services" className="text-gray-400 hover:text-white transition-colors">
                  Student Services
                </a>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-white transition-colors">
                  Contact IRO
                </Link>
              </li>
            </ul>
          </div>

          {/* IRO Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-6">IRO Contact</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-rupp-gold mt-0.5 flex-shrink-0" />
                <div className="text-gray-400">
                  <p>#219A, Second Floor, Building A</p>
                  <p>Russian Federation Boulevard</p>
                  <p>Teuk Laak 1, Toul Kork</p>
                  <p>Phnom Penh, Cambodia</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-rupp-gold flex-shrink-0" />
                <a href="tel:+85523880772" className="text-gray-400 hover:text-white transition-colors">
                  +855 23 880 772
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-rupp-gold flex-shrink-0" />
                <a href="mailto:iroffice@rupp.edu.kh" className="text-gray-400 hover:text-white transition-colors">
                  iroffice@rupp.edu.kh
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <TelegramIcon className="h-5 w-5 text-rupp-gold flex-shrink-0" />
                <a href="https://t.me/rupp_iro" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                  @rupp_iro
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2025 Royal University of Phnom Penh. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                Accessibility
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}