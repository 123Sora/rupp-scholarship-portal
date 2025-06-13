import { CheckCircle, GraduationCap, DollarSign, Users, Award, BookOpen } from 'lucide-react';

export default function EligibilityPage() {
  const generalRequirements = [
    {
      icon: <GraduationCap className="h-6 w-6 text-blue-600" />,
      title: 'Academic Standing',
      description: 'Maintain minimum GPA requirements and be enrolled in an accredited institution.',
      details: [
        'Minimum GPA varies by scholarship (typically 2.5-3.8)',
        'Full-time or part-time enrollment as specified',
        'Good academic standing with your institution',
        'Satisfactory academic progress'
      ]
    },
    {
      icon: <Users className="h-6 w-6 text-green-600" />,
      title: 'Citizenship & Residency',
      description: 'Meet citizenship or residency requirements for the specific scholarship.',
      details: [
        'U.S. citizenship or permanent residency (for most scholarships)',
        'International student status (for international scholarships)',
        'State residency requirements (for state-specific awards)',
        'Valid documentation required'
      ]
    },
    {
      icon: <DollarSign className="h-6 w-6 text-purple-600" />,
      title: 'Financial Need',
      description: 'Demonstrate financial need through required documentation.',
      details: [
        'Complete FAFSA (Free Application for Federal Student Aid)',
        'Provide tax returns and financial statements',
        'Document family income and assets',
        'Show unmet financial need'
      ]
    },
    {
      icon: <BookOpen className="h-6 w-6 text-orange-600" />,
      title: 'Field of Study',
      description: 'Be enrolled in or planning to enroll in eligible academic programs.',
      details: [
        'Specific majors or fields of study',
        'Undergraduate or graduate level requirements',
        'Professional program enrollment',
        'Research focus areas'
      ]
    }
  ];

  const categoryRequirements = [
    {
      category: 'Academic Excellence',
      requirements: [
        'High GPA (typically 3.5 or higher)',
        'Standardized test scores',
        'Academic honors and awards',
        'Leadership in academic organizations'
      ],
      color: 'bg-blue-100 text-blue-800'
    },
    {
      category: 'Need-Based',
      requirements: [
        'Demonstrated financial need',
        'FAFSA completion',
        'Income documentation',
        'First-generation college student status (sometimes)'
      ],
      color: 'bg-green-100 text-green-800'
    },
    {
      category: 'Research',
      requirements: [
        'Research experience or proposal',
        'Faculty mentor support',
        'Graduate student status (often)',
        'Publication or presentation experience'
      ],
      color: 'bg-purple-100 text-purple-800'
    },
    {
      category: 'Community Service',
      requirements: [
        'Documented volunteer hours',
        'Community leadership roles',
        'Impact statements',
        'References from community organizations'
      ],
      color: 'bg-pink-100 text-pink-800'
    },
    {
      category: 'International',
      requirements: [
        'International student status',
        'English proficiency (TOEFL/IELTS)',
        'Cultural exchange participation',
        'Valid student visa'
      ],
      color: 'bg-indigo-100 text-indigo-800'
    },
    {
      category: 'Athletics',
      requirements: [
        'NCAA eligibility',
        'Athletic performance standards',
        'Team participation',
        'Coach recommendation'
      ],
      color: 'bg-orange-100 text-orange-800'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-green-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Eligibility Requirements</h1>
            <p className="text-xl text-green-100 max-w-3xl mx-auto">
              Understand the requirements and qualifications needed to apply for different types of scholarships.
            </p>
            <p className="text-lg text-green-200 mt-4 font-khmer">
              យល់ដឹងអំពីលក្ខខណ្ឌ និងគុណវុឌ្ឍិដែលត្រូវការសម្រាប់ដាក់ពាក្យសុំអាហារូបករណ៍
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* General Requirements */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">General Requirements</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {generalRequirements.map((req, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-8 border border-gray-200">
                <div className="flex items-start space-x-4 mb-6">
                  <div className="flex-shrink-0">
                    {req.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{req.title}</h3>
                    <p className="text-gray-600">{req.description}</p>
                  </div>
                </div>
                <ul className="space-y-2">
                  {req.details.map((detail, detailIndex) => (
                    <li key={detailIndex} className="flex items-start space-x-3">
                      <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700 text-sm">{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Category-Specific Requirements */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Category-Specific Requirements</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categoryRequirements.map((category, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6 border border-gray-200">
                <div className="mb-4">
                  <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${category.color}`}>
                    {category.category}
                  </span>
                </div>
                <ul className="space-y-3">
                  {category.requirements.map((req, reqIndex) => (
                    <li key={reqIndex} className="flex items-start space-x-3">
                      <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700 text-sm">{req}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Eligibility Checker */}
        <div className="bg-blue-50 border border-blue-200 rounded-xl p-8 mb-16">
          <div className="text-center">
            <Award className="h-12 w-12 text-blue-600 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-blue-900 mb-4">Check Your Eligibility</h3>
            <p className="text-blue-700 mb-6 max-w-2xl mx-auto">
              Use our scholarship search tool to find opportunities that match your specific qualifications and background.
            </p>
            <a
              href="/#scholarships"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors inline-flex items-center space-x-2"
            >
              <span>Browse Scholarships</span>
            </a>
          </div>
        </div>

        {/* Important Notes */}
        <div className="bg-white rounded-xl shadow-lg p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Important Notes</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold text-gray-900 mb-3">Before Applying:</h4>
              <ul className="space-y-2 text-gray-700">
                <li>• Read all eligibility requirements carefully</li>
                <li>• Ensure you meet minimum qualifications</li>
                <li>• Gather required documentation</li>
                <li>• Check application deadlines</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-3">Common Disqualifiers:</h4>
              <ul className="space-y-2 text-gray-700">
                <li>• Incomplete applications</li>
                <li>• Missing required documents</li>
                <li>• Not meeting GPA requirements</li>
                <li>• Late submissions</li>
              </ul>
            </div>
          </div>
          
          <div className="mt-8 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
            <p className="text-yellow-800 font-medium">
              <strong>Remember:</strong> Each scholarship has unique requirements. Always read the specific eligibility criteria for each opportunity you're interested in.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}