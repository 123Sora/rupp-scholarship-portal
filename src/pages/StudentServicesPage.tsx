import { Users, Heart, BookOpen, Briefcase, Home, Utensils, Shield, Headphones } from 'lucide-react';
import rupplogo from '../assets/rupplogo-removebg-preview.png';

export default function StudentServicesPage() {
  const services = [
    {
      icon: <BookOpen className="h-8 w-8 text-rupp-blue" />,
      title: 'Academic Support',
      description: 'Comprehensive academic assistance and tutoring services',
      details: [
        'Tutoring and study groups',
        'Academic advising',
        'Study skills workshops',
        'Writing center support',
        'Math and science help',
        'Language learning assistance'
      ]
    },
    {
      icon: <Heart className="h-8 w-8 text-red-600" />,
      title: 'Health & Wellness',
      description: 'Physical and mental health support for student wellbeing',
      details: [
        'Campus health clinic',
        'Counseling services',
        'Mental health support',
        'Wellness programs',
        'Health insurance guidance',
        'Emergency medical assistance'
      ]
    },
    {
      icon: <Briefcase className="h-8 w-8 text-green-600" />,
      title: 'Career Services',
      description: 'Career development and job placement assistance',
      details: [
        'Career counseling',
        'Resume and CV writing',
        'Interview preparation',
        'Job search assistance',
        'Internship placement',
        'Alumni networking events'
      ]
    },
    {
      icon: <Home className="h-8 w-8 text-purple-600" />,
      title: 'Housing Services',
      description: 'On-campus and off-campus housing assistance',
      details: [
        'Dormitory placement',
        'Housing applications',
        'Roommate matching',
        'Off-campus housing listings',
        'Housing contracts',
        'Maintenance requests'
      ]
    },
    {
      icon: <Utensils className="h-8 w-8 text-orange-600" />,
      title: 'Dining Services',
      description: 'Campus dining options and meal plan management',
      details: [
        'Meal plan options',
        'Campus restaurants',
        'Dietary accommodations',
        'Food allergies support',
        'Catering services',
        'Nutrition counseling'
      ]
    },
    {
      icon: <Shield className="h-8 w-8 text-indigo-600" />,
      title: 'Campus Safety',
      description: '24/7 security and safety services for all students',
      details: [
        'Campus security patrol',
        'Emergency response',
        'Safety escorts',
        'Lost and found',
        'Incident reporting',
        'Safety education programs'
      ]
    }
  ];

  const emergencyContacts = [
    {
      service: 'Campus Security',
      phone: '+855 23 880 775',
      available: '24/7'
    },
    {
      service: 'Health Center',
      phone: '+855 23 880 776',
      available: 'Mon-Fri 8:00 AM - 6:00 PM'
    },
    {
      service: 'Counseling Services',
      phone: '+855 23 880 777',
      available: 'Mon-Fri 9:00 AM - 5:00 PM'
    },
    {
      service: 'Student Emergency Line',
      phone: '+855 23 880 778',
      available: '24/7'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-purple-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            {/* <div className="flex justify-center">
              <img 
                src={rupplogo}
                alt="RUPP Logo" 
                className="h-48 w-56"
              />
            </div> */}
            <Users className="h-16 w-16 mx-auto mb-6 text-purple-200" />
            <h1 className="text-4xl font-bold mb-4">Student Services</h1>
            <p className="text-xl text-purple-100 max-w-3xl mx-auto">
              Comprehensive support services to enhance your university experience and academic success
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Services Grid */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6 border border-gray-200 hover:shadow-xl transition-shadow">
                <div className="flex items-center space-x-3 mb-4">
                  {service.icon}
                  <h3 className="text-xl font-bold text-gray-900">{service.title}</h3>
                </div>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.details.map((detail, detailIndex) => (
                    <li key={detailIndex} className="flex items-start space-x-2">
                      <div className="bg-blue-100 rounded-full p-0.5 mt-1.5">
                        <div className="w-2 h-2 bg-rupp-blue rounded-full"></div>
                      </div>
                      <span className="text-gray-700 text-sm">{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Emergency Contacts */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Emergency Contacts</h2>
          <div className="bg-red-50 border border-red-200 rounded-xl p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {emergencyContacts.map((contact, index) => (
                <div key={index} className="bg-white rounded-lg p-4 border border-red-200">
                  <h3 className="font-semibold text-red-900 mb-2">{contact.service}</h3>
                  <p className="text-red-800 font-medium">{contact.phone}</p>
                  <p className="text-red-700 text-sm">{contact.available}</p>
                </div>
              ))}
            </div>
            <div className="mt-6 text-center">
              <p className="text-red-800 font-medium">
                🚨 For life-threatening emergencies, call 119 (Police) or 118 (Medical)
              </p>
            </div>
          </div>
        </div>

        {/* Student Support Hours */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Service Hours</h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center border-b border-gray-200 pb-2">
                <span className="font-medium text-gray-900">Student Services Center</span>
                <span className="text-gray-700">Mon-Fri 7:30 AM - 5:00 PM</span>
              </div>
              <div className="flex justify-between items-center border-b border-gray-200 pb-2">
                <span className="font-medium text-gray-900">Academic Advising</span>
                <span className="text-gray-700">Mon-Fri 8:00 AM - 4:30 PM</span>
              </div>
              <div className="flex justify-between items-center border-b border-gray-200 pb-2">
                <span className="font-medium text-gray-900">Career Services</span>
                <span className="text-gray-700">Mon-Fri 9:00 AM - 5:00 PM</span>
              </div>
              <div className="flex justify-between items-center border-b border-gray-200 pb-2">
                <span className="font-medium text-gray-900">Health Center</span>
                <span className="text-gray-700">Mon-Fri 8:00 AM - 6:00 PM</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="font-medium text-gray-900">Campus Security</span>
                <span className="text-green-600 font-bold">24/7</span>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Headphones className="h-5 w-5 text-rupp-blue" />
                <div>
                  <p className="font-medium text-gray-900">Student Services Hotline</p>
                  <p className="text-gray-700">+855 23 880 779</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Users className="h-5 w-5 text-rupp-blue" />
                <div>
                  <p className="font-medium text-gray-900">Student Services Center</p>
                  <p className="text-gray-700">Building C, Ground Floor</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <BookOpen className="h-5 w-5 text-rupp-blue" />
                <div>
                  <p className="font-medium text-gray-900">Academic Support</p>
                  <p className="text-gray-700">academicsupport@rupp.edu.kh</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Heart className="h-5 w-5 text-rupp-blue" />
                <div>
                  <p className="font-medium text-gray-900">Counseling Services</p>
                  <p className="text-gray-700">counseling@rupp.edu.kh</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Get Help */}
        <div className="bg-gradient-to-r from-rupp-blue to-purple-600 text-white rounded-xl p-8 text-center">
          <h3 className="text-2xl font-bold mb-4">Need Help?</h3>
          <p className="text-lg mb-6 text-blue-100">
            Our student services team is here to support you throughout your academic journey
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:studentservices@rupp.edu.kh"
              className="bg-white text-rupp-blue hover:bg-gray-100 px-6 py-3 rounded-lg font-semibold transition-colors"
            >
              Contact Student Services
            </a>
            <a
              href="tel:+85523880779"
              className="bg-rupp-gold hover:bg-yellow-600 text-rupp-dark px-6 py-3 rounded-lg font-semibold transition-colors"
            >
              Call Support Hotline
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}