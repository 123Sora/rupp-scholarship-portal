import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send, Building } from 'lucide-react';
import toast from 'react-hot-toast';
import irologo from '../assets/iro.png'; 

// Telegram SVG icon as a React component
const TelegramIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" {...props}>
    <path d="M21.944 2.506a1.5 1.5 0 0 0-1.633-.217L2.9 10.07a1.5 1.5 0 0 0 .13 2.77l4.44 1.73 2.03 6.09a1.5 1.5 0 0 0 2.67.27l2.13-3.19 4.16 3.06a1.5 1.5 0 0 0 2.36-.89l3.01-15.01a1.5 1.5 0 0 0-.786-1.404zM9.57 17.13l-1.44-4.33 7.47-6.7-6.03 7.97zm2.93 2.34l-1.13-3.39 2.18-2.6 2.13 1.57-3.18 4.42zm7.13-1.02l-4.16-3.06 5.13-7.13-1.97 10.19z" fill="currentColor"/>
  </svg>
);

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Simulate form submission
    setTimeout(() => {
      toast.success('Message sent successfully! The IRO will get back to you soon.');
      setFormData({ name: '', email: '', subject: '', message: '' });
      setLoading(false);
    }, 1000);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactMethods = [
    {
      icon: <Mail className="h-6 w-6" />,
      title: 'Email',
      description: 'Send us an email anytime',
      contact: 'iroffice@rupp.edu.kh',
      action: 'mailto:iroffice@rupp.edu.kh',
      color: 'bg-rupp-blue text-white'
    },
    {
      icon: <Phone className="h-6 w-6" />,
      title: 'Phone',
      description: 'Call us during working hours',
      contact: '+855 23 880 772',
      action: 'tel:+85523880772',
      color: 'bg-rupp-red text-white'
    },
    {
      icon: <TelegramIcon className="h-6 w-6" />,
      title: 'Telegram',
      description: 'Chat with us on Telegram',
      contact: '@rupp_iro',
      action: 'https://t.me/rupp_iro',
      color: 'bg-rupp-blue text-white'
    },
    {
      icon: <Building className="h-6 w-6" />,
      title: 'Visit IRO Office',
      description: 'Come to our office',
      contact: '#219A, Building A, RUPP',
      action: '#',
      color: 'bg-rupp-gold text-rupp-dark'
    }
  ];

  const officeHours = [
    { day: 'Monday - Friday', hours: '7:30 AM - 5:00 PM' },
    { day: 'Saturday', hours: '8:00 AM - 12:00 PM' },
    { day: 'Sunday', hours: 'Closed' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-rupp-dark text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <img 
                src={irologo}
                alt="IRO RUPP Logo" 
                className="h-24 w-40"
              />
            </div>
            <h1 className="text-4xl font-bold mb-4">Contact IRO Office</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              International Relations Office - Royal University of Phnom Penh
            </p>
            <p className="text-lg text-gray-400 mt-4">
              Your gateway to international education opportunities and scholarships
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-200">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Send us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rupp-blue focus:border-transparent"
                    placeholder="Enter your full name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rupp-blue focus:border-transparent"
                    placeholder="Enter your email address"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                    Subject *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rupp-blue focus:border-transparent"
                  >
                    <option value="">Select a subject</option>
                    <option value="scholarship-inquiry">Scholarship Inquiry</option>
                    <option value="application-help">Application Help</option>
                    <option value="international-programs">International Programs</option>
                    <option value="student-exchange">Student Exchange</option>
                    <option value="admission-abroad">Admission Abroad</option>
                    <option value="partnership">Partnership Opportunities</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rupp-blue focus:border-transparent"
                    placeholder="Enter your message here..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-rupp-red hover:bg-red-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
                >
                  {loading ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <Send className="h-4 w-4" />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Contact Methods */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {contactMethods.map((method, index) => (
                <a
                  key={index}
                  href={method.action}
                  target={method.action.startsWith('http') ? '_blank' : undefined}
                  rel={method.action.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className={`${method.color} rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow`}
                >
                  <div className="mb-4">
                    {method.icon}
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{method.title}</h3>
                  <p className="text-sm mb-2 opacity-90">{method.description}</p>
                  <p className="font-medium">{method.contact}</p>
                </a>
              ))}
            </div>

            {/* IRO Information */}
            <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">About IRO</h3>
              <p className="text-gray-700 mb-4">
                The International Relations Office (IRO) at RUPP facilitates international communication, 
                promotes student exchange, and offers advising services for scholarships and admissions 
                to universities abroad.
              </p>
              <div className="space-y-2 text-sm text-gray-600">
                <p>• International student support</p>
                <p>• Scholarship guidance</p>
                <p>• Study abroad programs</p>
                <p>• Partnership development</p>
                <p>• Cultural exchange initiatives</p>
              </div>
            </div>

            {/* Office Hours */}
            <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-200">
              <div className="flex items-center space-x-3 mb-4">
                <div className="bg-rupp-gold p-2 rounded-lg">
                  <Clock className="h-5 w-5 text-rupp-dark" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900">Office Hours</h3>
              </div>
              <div className="space-y-2">
                {officeHours.map((schedule, index) => (
                  <div key={index} className="flex justify-between items-center">
                    <span className="text-gray-700">{schedule.day}</span>
                    <span className="text-gray-900 font-medium">{schedule.hours}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Location */}
            <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Location</h3>
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-rupp-red mt-1 flex-shrink-0" />
                <div className="text-gray-700">
                  <p className="font-medium">#219A, Second Floor, Building A</p>
                  <p>Russian Federation Boulevard</p>
                  <p>Teuk Laak 1, Toul Kork</p>
                  <p>Phnom Penh, Cambodia</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}