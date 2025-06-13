import { HelpCircle, FileText, CheckCircle, Clock, Mail, Phone, Users } from 'lucide-react';
import iro from '../assets/iro.png';

// Telegram SVG icon as a React component
const TelegramIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" {...props}>
    <path d="M21.944 2.506a1.5 1.5 0 0 0-1.633-.217L2.9 10.07a1.5 1.5 0 0 0 .13 2.77l4.44 1.73 2.03 6.09a1.5 1.5 0 0 0 2.67.27l2.13-3.19 4.16 3.06a1.5 1.5 0 0 0 2.36-.89l3.01-15.01a1.5 1.5 0 0 0-.786-1.404zM9.57 17.13l-1.44-4.33 7.47-6.7-6.03 7.97zm2.93 2.34l-1.13-3.39 2.18-2.6 2.13 1.57-3.18 4.42zm7.13-1.02l-4.16-3.06 5.13-7.13-1.97 10.19z" fill="currentColor"/>
  </svg>
); 


export default function ApplicationHelpPage() {
  const helpSections = [
    {
      icon: <FileText className="h-8 w-8 text-rupp-blue" />,
      title: 'Application Assistance',
      description: 'Get help with completing your scholarship applications',
      services: [
        'Application form guidance',
        'Essay writing support',
        'Document preparation help',
        'Application review services'
      ]
    },
    {
      icon: <CheckCircle className="h-8 w-8 text-green-600" />,
      title: 'Eligibility Check',
      description: 'Verify your eligibility for specific scholarships',
      services: [
        'Eligibility assessment',
        'Requirement clarification',
        'Academic standing verification',
        'Documentation requirements'
      ]
    },
    {
      icon: <Clock className="h-8 w-8 text-orange-600" />,
      title: 'Deadline Management',
      description: 'Stay on track with application deadlines',
      services: [
        'Deadline reminders',
        'Application timeline planning',
        'Priority scholarship identification',
        'Submission tracking'
      ]
    },
    {
      icon: <Users className="h-8 w-8 text-purple-600" />,
      title: 'One-on-One Counseling',
      description: 'Personal guidance from IRO advisors',
      services: [
        'Individual consultation sessions',
        'Personalized scholarship matching',
        'Application strategy development',
        'Interview preparation'
      ]
    }
  ];

  const commonQuestions = [
    {
      question: 'How do I know which scholarships I\'m eligible for?',
      answer: 'Schedule a consultation with our IRO advisors who will review your academic profile, financial situation, and career goals to identify suitable scholarships.'
    },
    {
      question: 'What documents do I need for most scholarship applications?',
      answer: 'Common documents include academic transcripts, letters of recommendation, personal statement, CV/resume, and financial documentation. Specific requirements vary by scholarship.'
    },
    {
      question: 'How far in advance should I start my application?',
      answer: 'We recommend starting at least 3-6 months before the deadline to allow time for document preparation, essay writing, and review.'
    },
    {
      question: 'Can you help me write my personal statement?',
      answer: 'Yes, our advisors provide guidance on structuring and writing compelling personal statements that highlight your strengths and goals.'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-rupp-blue text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            {/* <div className="flex justify-center mb-6">
              <img 
                src={iro}
                alt="IRO RUPP Logo" 
                className="h-32 w-48"
              />
            </div> */}
            <HelpCircle className="h-16 w-16 mx-auto mb-6 text-blue-200" />
            <h1 className="text-4xl font-bold mb-4">Application Help</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Get personalized assistance with your scholarship applications from our IRO team
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Help Services */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Our Support Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {helpSections.map((section, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-8 border border-gray-200">
                <div className="flex items-center space-x-4 mb-6">
                  {section.icon}
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">{section.title}</h3>
                    <p className="text-gray-600">{section.description}</p>
                  </div>
                </div>
                <ul className="space-y-3">
                  {section.services.map((service, serviceIndex) => (
                    <li key={serviceIndex} className="flex items-start space-x-3">
                      <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{service}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Common Questions */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Frequently Asked Questions</h2>
          <div className="space-y-6">
            {commonQuestions.map((qa, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6 border border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{qa.question}</h3>
                <p className="text-gray-700">{qa.answer}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Contact for Help */}
        <div className="bg-white rounded-xl shadow-lg p-8 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Need Personal Assistance?</h3>
          <p className="text-gray-600 mb-8">
            Schedule a consultation with our IRO advisors for personalized scholarship guidance
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <a
              href="mailto:iroffice@rupp.edu.kh?subject=Scholarship Application Help"
              className="bg-rupp-red hover:bg-red-700 text-white px-6 py-4 rounded-lg font-semibold transition-colors flex items-center justify-center space-x-2"
            >
              <Mail className="h-5 w-5" />
              <span>Email IRO</span>
            </a>
            <a
              href="tel:+85523880772"
              className="bg-rupp-blue hover:bg-blue-700 text-white px-6 py-4 rounded-lg font-semibold transition-colors flex items-center justify-center space-x-2"
            >
              <Phone className="h-5 w-5" />
              <span>Call IRO</span>
            </a>
            <a
              href="https://t.me/rupp_iro"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-rupp-gold hover:bg-yellow-600 text-rupp-dark px-6 py-4 rounded-lg font-semibold transition-colors flex items-center justify-center space-x-2"
            >
              <TelegramIcon className="h-5 w-5" />
              <span>Telegram</span>
            </a>
          </div>
          
          <div className="mt-8 p-4 bg-blue-50 border border-blue-200 rounded-lg">
            <p className="text-blue-800 font-medium">
              <strong>Office Hours:</strong> Monday-Friday 7:30 AM - 5:00 PM | Saturday 8:00 AM - 12:00 PM
            </p>
            <p className="text-blue-700 text-sm mt-1">
              Walk-in consultations welcome or schedule an appointment for guaranteed availability
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}