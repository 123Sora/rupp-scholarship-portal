import { Calendar, Clock, AlertTriangle, CheckCircle } from 'lucide-react';

export default function TimelinePage() {
  const timeline = [
    {
      month: 'January - February',
      title: 'Research & Planning Phase',
      description: 'Begin your scholarship search and start planning your applications.',
      tasks: [
        'Research available scholarships',
        'Create a scholarship tracking spreadsheet',
        'Start gathering required documents',
        'Request transcripts from your school'
      ],
      color: 'bg-blue-500'
    },
    {
      month: 'March - April',
      title: 'Application Preparation',
      description: 'Prepare your application materials and start writing essays.',
      tasks: [
        'Write personal statements and essays',
        'Request letters of recommendation',
        'Complete FAFSA if required',
        'Prepare portfolio or work samples'
      ],
      color: 'bg-green-500'
    },
    {
      month: 'May - June',
      title: 'Application Submission',
      description: 'Submit your completed applications before deadlines.',
      tasks: [
        'Review and finalize all applications',
        'Submit applications early',
        'Follow up on missing documents',
        'Keep copies of all submissions'
      ],
      color: 'bg-purple-500'
    },
    {
      month: 'July - August',
      title: 'Follow-up & Additional Applications',
      description: 'Follow up on submitted applications and apply for fall scholarships.',
      tasks: [
        'Check application status',
        'Apply for fall semester scholarships',
        'Prepare for interviews if required',
        'Send thank you notes to recommenders'
      ],
      color: 'bg-orange-500'
    },
    {
      month: 'September - October',
      title: 'Fall Application Cycle',
      description: 'Focus on scholarships with fall deadlines and next year planning.',
      tasks: [
        'Submit fall deadline applications',
        'Start planning for next year',
        'Update your resume and achievements',
        'Research new scholarship opportunities'
      ],
      color: 'bg-red-500'
    },
    {
      month: 'November - December',
      title: 'Year-End & Planning',
      description: 'Complete final applications and plan for the upcoming year.',
      tasks: [
        'Submit year-end applications',
        'Organize documents for next year',
        'Reflect on achievements and goals',
        'Start early research for next cycle'
      ],
      color: 'bg-indigo-500'
    }
  ];

  const deadlineTypes = [
    {
      type: 'Early Deadlines',
      period: 'October - December',
      description: 'Many prestigious scholarships have early deadlines.',
      icon: <AlertTriangle className="h-6 w-6 text-red-600" />,
      color: 'border-red-200 bg-red-50'
    },
    {
      type: 'Spring Deadlines',
      period: 'January - March',
      description: 'Peak scholarship application season.',
      icon: <Clock className="h-6 w-6 text-yellow-600" />,
      color: 'border-yellow-200 bg-yellow-50'
    },
    {
      type: 'Rolling Deadlines',
      period: 'Year-round',
      description: 'Applications accepted throughout the year.',
      icon: <CheckCircle className="h-6 w-6 text-green-600" />,
      color: 'border-green-200 bg-green-50'
    }
  ];

  const tips = [
    'Start your scholarship search at least 12 months before you need funding',
    'Create a calendar with all important deadlines',
    'Set reminders 2-4 weeks before each deadline',
    'Submit applications at least 1 week before the deadline',
    'Keep a backup of all application materials',
    'Follow up if you don\'t receive confirmation within a week'
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-purple-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Application Timeline</h1>
            <p className="text-xl text-purple-100 max-w-3xl mx-auto">
              Plan your scholarship applications throughout the year with our comprehensive timeline guide.
            </p>
            <p className="text-lg text-purple-200 mt-4 font-khmer">
              រៀបចំផែនការដាក់ពាក្យសុំអាហារូបករណ៍ពេញមួយឆ្នាំ
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Deadline Types */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Types of Deadlines</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {deadlineTypes.map((deadline, index) => (
              <div key={index} className={`border-2 rounded-xl p-6 ${deadline.color}`}>
                <div className="flex items-center space-x-3 mb-4">
                  {deadline.icon}
                  <h3 className="text-lg font-bold text-gray-900">{deadline.type}</h3>
                </div>
                <p className="font-semibold text-gray-800 mb-2">{deadline.period}</p>
                <p className="text-gray-700">{deadline.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Annual Timeline */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Annual Application Timeline</h2>
          <div className="space-y-8">
            {timeline.map((period, index) => (
              <div key={index} className="flex flex-col lg:flex-row items-start lg:items-center space-y-4 lg:space-y-0 lg:space-x-8">
                <div className="flex-shrink-0">
                  <div className={`w-4 h-4 rounded-full ${period.color}`}></div>
                </div>
                <div className="flex-1 bg-white rounded-xl shadow-lg p-6 border border-gray-200">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-1">{period.title}</h3>
                      <p className="text-sm font-medium text-gray-600">{period.month}</p>
                    </div>
                    <Calendar className="h-6 w-6 text-gray-400 mt-2 lg:mt-0" />
                  </div>
                  <p className="text-gray-700 mb-4">{period.description}</p>
                  <ul className="space-y-2">
                    {period.tasks.map((task, taskIndex) => (
                      <li key={taskIndex} className="flex items-start space-x-3">
                        <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700 text-sm">{task}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Timeline Tips */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Timeline Management Tips</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {tips.map((tip, index) => (
              <div key={index} className="flex items-start space-x-3">
                <div className="bg-blue-100 rounded-full p-1 mt-0.5">
                  <CheckCircle className="h-4 w-4 text-blue-600" />
                </div>
                <span className="text-gray-700">{tip}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Current Opportunities */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl p-8 text-center">
          <h3 className="text-2xl font-bold mb-4">Don't Wait - Start Today!</h3>
          <p className="text-lg mb-6 text-blue-100">
            The best time to start your scholarship search is now. Browse our current opportunities and begin your application journey.
          </p>
          <a
            href="/#scholarships"
            className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors inline-flex items-center space-x-2"
          >
            <span>View Current Scholarships</span>
          </a>
        </div>
      </div>
    </div>
  );
}