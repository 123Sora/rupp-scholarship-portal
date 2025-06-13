import { CheckCircle, FileText, Clock, Mail, AlertCircle } from 'lucide-react';

// Telegram SVG icon as a React component
const TelegramIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" {...props}>
    <path d="M21.944 2.506a1.5 1.5 0 0 0-1.633-.217L2.9 10.07a1.5 1.5 0 0 0 .13 2.77l4.44 1.73 2.03 6.09a1.5 1.5 0 0 0 2.67.27l2.13-3.19 4.16 3.06a1.5 1.5 0 0 0 2.36-.89l3.01-15.01a1.5 1.5 0 0 0-.786-1.404zM9.57 17.13l-1.44-4.33 7.47-6.7-6.03 7.97zm2.93 2.34l-1.13-3.39 2.18-2.6 2.13 1.57-3.18 4.42zm7.13-1.02l-4.16-3.06 5.13-7.13-1.97 10.19z" fill="currentColor"/>
  </svg>
);

export default function HowToApplyPage() {
  const steps = [
    {
      number: 1,
      title: 'Research Scholarships',
      description: 'Browse our comprehensive scholarship database to find opportunities that match your profile, academic interests, and financial needs.',
      details: [
        'Use our advanced search filters',
        'Read eligibility requirements carefully',
        'Note application deadlines',
        'Save scholarships to your favorites'
      ]
    },
    {
      number: 2,
      title: 'Prepare Required Documents',
      description: 'Gather all necessary documents before starting your application. Having everything ready will make the process smoother.',
      details: [
        'Academic transcripts',
        'Letters of recommendation',
        'Personal statement or essays',
        'Financial aid forms (if required)',
        'Portfolio or work samples (if applicable)'
      ]
    },
    {
      number: 3,
      title: 'Complete the Application',
      description: 'Fill out the scholarship application form completely and accurately. Take your time to provide thoughtful responses.',
      details: [
        'Fill all required fields',
        'Write compelling essays',
        'Double-check all information',
        'Upload required documents',
        'Review before submitting'
      ]
    },
    {
      number: 4,
      title: 'Submit Before Deadline',
      description: 'Submit your application well before the deadline to avoid any last-minute technical issues.',
      details: [
        'Submit at least 24 hours early',
        'Keep confirmation receipt',
        'Follow up if needed',
        'Track application status'
      ]
    }
  ];

  const tips = [
    {
      icon: <Clock className="h-6 w-6 text-blue-600" />,
      title: 'Start Early',
      description: 'Begin your scholarship search and application process at least 3-6 months before deadlines.'
    },
    {
      icon: <FileText className="h-6 w-6 text-green-600" />,
      title: 'Tailor Your Application',
      description: 'Customize your essays and responses for each scholarship to show genuine interest and fit.'
    },
    {
      icon: <CheckCircle className="h-6 w-6 text-purple-600" />,
      title: 'Proofread Everything',
      description: 'Have someone else review your application for grammar, spelling, and clarity before submitting.'
    },
    {
      icon: <Mail className="h-6 w-6 text-orange-600" />,
      title: 'Follow Instructions',
      description: 'Read and follow all application instructions carefully. Missing requirements can disqualify you.'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-blue-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">How to Apply for Scholarships</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Follow our step-by-step guide to successfully apply for scholarships and increase your chances of receiving financial aid.
            </p>
            <p className="text-lg text-blue-200 mt-4 font-khmer">
              តាមដានការណែនាំរបស់យើងដើម្បីដាក់ពាក្យសុំអាហារូបករណ៍ដោយជោគជ័យ
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Application Steps */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Application Process</h2>
          <div className="space-y-12">
            {steps.map((step) => (
              <div key={step.number} className="flex flex-col lg:flex-row items-start lg:items-center space-y-6 lg:space-y-0 lg:space-x-8">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold">
                    {step.number}
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{step.title}</h3>
                  <p className="text-gray-600 mb-4 text-lg">{step.description}</p>
                  <ul className="space-y-2">
                    {step.details.map((detail, detailIndex) => (
                      <li key={detailIndex} className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Tips Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Application Tips</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {tips.map((tip, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6 border border-gray-200">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    {tip.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{tip.title}</h3>
                    <p className="text-gray-600">{tip.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Important Notes */}
        <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-8 mb-16">
          <div className="flex items-start space-x-4">
            <AlertCircle className="h-6 w-6 text-yellow-600 flex-shrink-0 mt-1" />
            <div>
              <h3 className="text-lg font-semibold text-yellow-800 mb-3">Important Notes</h3>
              <ul className="space-y-2 text-yellow-700">
                <li>• Each scholarship has unique requirements - read them carefully</li>
                <li>• Deadlines are strictly enforced - late applications will not be considered</li>
                <li>• You can apply for multiple scholarships, but each requires a separate application</li>
                <li>• Keep copies of all submitted documents for your records</li>
                <li>• Contact us if you have questions about the application process</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div className="bg-white rounded-xl shadow-lg p-8 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Need Help?</h3>
          <p className="text-gray-600 mb-6">
            Our scholarship advisors are here to help you through the application process.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:scholarships@university.edu"
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors flex items-center justify-center space-x-2"
            >
              <Mail className="h-4 w-4" />
              <span>Email Support</span>
            </a>
            <a
              href="https://t.me/scholarshipportal"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors flex items-center justify-center space-x-2"
            >
              <TelegramIcon className="h-4 w-4" />
              <span>Telegram Support</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}