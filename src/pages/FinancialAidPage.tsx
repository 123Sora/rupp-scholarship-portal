// import ruppLogo from '../assets/rupplogo-removebg-preview.png';
import { DollarSign, Calculator, FileText, CreditCard, PiggyBank, GraduationCap } from 'lucide-react';

export default function FinancialAidPage() {
  const aidTypes = [
    {
      icon: <GraduationCap className="h-8 w-8 text-rupp-blue" />,
      title: 'Merit-Based Scholarships',
      description: 'Awards based on academic achievement, leadership, and extracurricular involvement',
      details: [
        'Academic excellence scholarships',
        'Leadership awards',
        'Research grants',
        'Special talent recognition'
      ]
    },
    {
      icon: <PiggyBank className="h-8 w-8 text-green-600" />,
      title: 'Need-Based Financial Aid',
      description: 'Financial assistance based on demonstrated economic need',
      details: [
        'Income-based grants',
        'Emergency financial assistance',
        'Work-study programs',
        'Payment plan options'
      ]
    },
    {
      icon: <CreditCard className="h-8 w-8 text-purple-600" />,
      title: 'Student Loans',
      description: 'Low-interest educational loans for qualified students',
      details: [
        'Government-backed loans',
        'Private education loans',
        'Flexible repayment terms',
        'Grace period options'
      ]
    },
    {
      icon: <Calculator className="h-8 w-8 text-orange-600" />,
      title: 'Payment Plans',
      description: 'Flexible payment options to make education more affordable',
      details: [
        'Monthly payment plans',
        'Semester payment options',
        'Family payment programs',
        'Employer tuition assistance'
      ]
    }
  ];

  const applicationSteps = [
    {
      step: 1,
      title: 'Complete FAFSA',
      description: 'Fill out the Free Application for Federal Student Aid to determine your eligibility for need-based aid.'
    },
    {
      step: 2,
      title: 'Submit Required Documents',
      description: 'Provide tax returns, bank statements, and other financial documentation as requested.'
    },
    {
      step: 3,
      title: 'Review Aid Package',
      description: 'Receive and review your financial aid offer, including grants, scholarships, and loan options.'
    },
    {
      step: 4,
      title: 'Accept Aid Offer',
      description: 'Accept the financial aid components you wish to receive and complete any additional requirements.'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-green-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            {/* <div className="flex justify-center">
              <img 
                src={ruppLogo}
                alt="RUPP Logo" 
                className="h-40 w-56"
              />
            </div> */}
            <DollarSign className="h-16 w-16 mx-auto mb-6 text-green-200" />
            <h1 className="text-4xl font-bold mb-4">Financial Aid Office</h1>
            <p className="text-xl text-green-100 max-w-3xl mx-auto">
              Making education affordable through comprehensive financial assistance programs
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Types of Financial Aid */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Types of Financial Aid</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {aidTypes.map((aid, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-8 border border-gray-200">
                <div className="flex items-center space-x-4 mb-6">
                  {aid.icon}
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">{aid.title}</h3>
                    <p className="text-gray-600">{aid.description}</p>
                  </div>
                </div>
                <ul className="space-y-3">
                  {aid.details.map((detail, detailIndex) => (
                    <li key={detailIndex} className="flex items-start space-x-3">
                      <div className="bg-green-100 rounded-full p-1 mt-0.5">
                        <DollarSign className="h-3 w-3 text-green-600" />
                      </div>
                      <span className="text-gray-700">{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Application Process */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Financial Aid Application Process</h2>
          <div className="space-y-8">
            {applicationSteps.map((step, index) => (
              <div key={index} className="flex items-start space-x-6">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-rupp-blue text-white rounded-full flex items-center justify-center text-xl font-bold">
                    {step.step}
                  </div>
                </div>
                <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-200 flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h3>
                  <p className="text-gray-700">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Important Information */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Important Deadlines</h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center border-b border-gray-200 pb-2">
                <span className="font-medium text-gray-900">FAFSA Priority Deadline</span>
                <span className="text-rupp-red font-bold">March 1</span>
              </div>
              <div className="flex justify-between items-center border-b border-gray-200 pb-2">
                <span className="font-medium text-gray-900">Scholarship Applications</span>
                <span className="text-rupp-red font-bold">February 15</span>
              </div>
              <div className="flex justify-between items-center border-b border-gray-200 pb-2">
                <span className="font-medium text-gray-900">Aid Verification Documents</span>
                <span className="text-rupp-red font-bold">June 30</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="font-medium text-gray-900">Loan Acceptance</span>
                <span className="text-rupp-red font-bold">August 1</span>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Required Documents</h3>
            <ul className="space-y-3">
              {[
                'Completed FAFSA form',
                'Tax returns (student and parents)',
                'Bank statements',
                'Investment records',
                'Social Security cards',
                'Driver\'s license or ID',
                'Verification worksheets (if selected)',
                'Loan entrance counseling completion'
              ].map((doc, index) => (
                <li key={index} className="flex items-start space-x-3">
                  <FileText className="h-4 w-4 text-rupp-blue mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">{doc}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Contact Financial Aid Office */}
        <div className="bg-white rounded-xl shadow-lg p-8 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Need Financial Aid Assistance?</h3>
          <p className="text-gray-600 mb-8">
            Our financial aid counselors are here to help you navigate the financial aid process
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
              <h4 className="font-semibold text-blue-900 mb-3">Financial Aid Office</h4>
              <div className="space-y-2 text-blue-800">
                <p>📧 financialaid@rupp.edu.kh</p>
                <p>📞 +855 23 880 773</p>
                <p>🏢 Building B, Room 105</p>
                <p>⏰ Mon-Fri: 8:00 AM - 4:30 PM</p>
              </div>
            </div>
            
            <div className="bg-green-50 border border-green-200 rounded-lg p-6">
              <h4 className="font-semibold text-green-900 mb-3">Emergency Financial Assistance</h4>
              <div className="space-y-2 text-green-800">
                <p>📧 emergency@rupp.edu.kh</p>
                <p>📞 +855 23 880 774</p>
                <p>🏢 Student Services Center</p>
                <p>⏰ Available 24/7 for emergencies</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}