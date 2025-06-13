import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import {Calendar, Users, Award, ExternalLink, Mail, ArrowLeft, CheckCircle, Clock, FileText, GraduationCap, Star} from 'lucide-react';
import { scholarships } from '../data/scholarships';
import { userAuth } from '../contexts/AuthContext';
import ApplicationModal from '../components/ApplicationModal';
import toast from 'react-hot-toast';

// Telegram SVG icon as a React component
const TelegramIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" {...props}>
    <path d="M21.944 2.506a1.5 1.5 0 0 0-1.633-.217L2.9 10.07a1.5 1.5 0 0 0 .13 2.77l4.44 1.73 2.03 6.09a1.5 1.5 0 0 0 2.67.27l2.13-3.19 4.16 3.06a1.5 1.5 0 0 0 2.36-.89l3.01-15.01a1.5 1.5 0 0 0-.786-1.404zM9.57 17.13l-1.44-4.33 7.47-6.7-6.03 7.97zm2.93 2.34l-1.13-3.39 2.18-2.6 2.13 1.57-3.18 4.42zm7.13-1.02l-4.16-3.06 5.13-7.13-1.97 10.19z" fill="currentColor"/>
  </svg>
);

export default function ScholarshipDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { user } = userAuth();
  const [scholarship, setScholarship] = useState<any>(null);
  const [showApplicationModal, setShowApplicationModal] = useState(false);

  useEffect(() => {
    const found = scholarships.find(s => s.id === id);
    if (found) {
      setScholarship(found);
    } else {
      navigate('/');
    }
  }, [id, navigate]);

  if (!scholarship) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  const formatAmount = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
    }).format(amount);
  };

  const formatDeadline = (deadline: string) => {
    return new Date(deadline).toLocaleDateString('en-US', {
      month: 'long',
      day: 'numeric',
      year: 'numeric',
    });
  };

  const isDeadlineSoon = (deadline: string) => {
    const deadlineDate = new Date(deadline);
    const today = new Date();
    const timeDiff = deadlineDate.getTime() - today.getTime();
    const daysDiff = Math.ceil(timeDiff / (1000 * 3600 * 24));
    return daysDiff <= 30;
  };

  const getCategoryColor = (category: string) => {
    const colors = {
      'Bachelor': 'bg-blue-100 text-blue-800',
      'Master': 'bg-green-100 text-green-800',
      'PhD': 'bg-purple-100 text-purple-800',
      'Diploma': 'bg-orange-100 text-orange-800',
      'Certificate': 'bg-pink-100 text-pink-800',
      'Short Course': 'bg-indigo-100 text-indigo-800',
      'Exchange': 'bg-red-100 text-red-800',
      'Internship': 'bg-teal-100 text-teal-800',
      // fallback
      'All': 'bg-gray-100 text-gray-800'
    };
    return colors[category as keyof typeof colors] || 'bg-gray-100 text-gray-800';
  };

  const handleApplyClick = () => {
    if (!user) {
      toast.error('Please login to apply for scholarships');
      navigate('/login');
      return;
    }
    setShowApplicationModal(true);
  };

  const handleTelegramContact = () => {
    const message = `Hello! I'm interested in the ${scholarship.title} scholarship. Could you please provide more information?`;
    const telegramUrl = `https://t.me/scholarshipportal?text=${encodeURIComponent(message)}`;
    window.open(telegramUrl, '_blank');
  };

  // Category-specific scholarship info
  const renderScholarshipInfo = () => {
    switch (scholarship.category) {
      case 'Exchange':
        return (
          <>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">📣 {scholarship.title} 📣</h2>
            <p className="mb-4">
              The International Relations Office of the Royal University of Phnom Penh wishes to disseminate the call for applications for the <b>{scholarship.title}</b> at {scholarship.location || 'the host university'}, from {scholarship.period || 'date TBD'}.
            </p>
            <p className="mb-4">
              The benefits and expenses are mentioned in the poster or announcement.
            </p>
            <h3 className="font-semibold text-gray-800 mt-4 mb-2">📌 Eligibility:</h3>
            <ul className="list-disc pl-6 mb-4">
              <li>Be second to fourth-year students at any faculty of RUPP</li>
              <li>Have good behaviour and conduct, and be able to work autonomously</li>
              <li>Must avoid having a conflicting schedule between class and program</li>
            </ul>
            <h3 className="font-semibold text-gray-800 mt-4 mb-2">📝 For nomination, please send us your:</h3>
            <ol className="list-decimal pl-6 mb-4">
              <li>Academic transcript</li>
              <li>Enrolment certificate</li>
              <li>One-page motivation letter stating your interests</li>
              <li>Up-to-date comprehensive resumé</li>
              <li>Passport’s information page</li>
              <li>Language proficiency proof (if any)</li>
            </ol>
            <p className="text-red-700 font-semibold">‼️ University’s Deadline: {scholarship.deadline ? formatDeadline(scholarship.deadline) : 'TBD'}</p>
          </>
        );
      case 'Master':
        return (
          <>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Scholarship for Master's Degree at Sogang University 2026</h2>
            <p className="mb-4">
              The Royal University of Phnom Penh (RUPP) has the great honour to announce the call for applications for the Master's Degree Scholarship Program in various fields at Sogang University, Republic of Korea, in collaboration with Jesuit Service-Cambodia.
            </p>
            <h3 className="font-semibold text-gray-800 mt-4 mb-2">ELIGIBILITY:</h3>
            <ul className="list-disc pl-6 mb-4">
              <li>Be an ongoing fourth-year student at RUPP in 2024-2025, OR recently graduated from RUPP</li>
              <li>Possess good academic performance with a GPA of 3.00 or higher</li>
              <li>Have a good command of the English language of at least IELTS 6.0</li>
              <li>Be under 35 years of age</li>
            </ul>
            <h3 className="font-semibold text-gray-800 mt-4 mb-2">BENEFITS:</h3>
            <p className="mb-4">
              The scholarship will cover all expenses, including airfare, tuition, insurance, living expenses, books, and incidental costs.
            </p>
            <h3 className="font-semibold text-gray-800 mt-4 mb-2">REQUIRED DOCUMENTS:</h3>
            <ul className="list-disc pl-6 mb-4">
              <li>Sogang University Scholarship Application Form</li>
              <li>A copy of the family book</li>
              <li>A copy of a valid passport</li>
              <li>Original academic qualification documents (transcripts, diploma, degree, awards)</li>
              <li>Language proficiency proof (TOPIK, TOEFL, IELTS or equivalent; if any)</li>
              <li>Two recommendation letters with signature: academic and personal</li>
              <li>Two personally written essays in English (max 1000 words each)</li>
              <li>Other documents deemed necessary for the application</li>
            </ul>
            <h3 className="font-semibold text-gray-800 mt-4 mb-2">APPLICATION PROCEDURE & DEADLINE:</h3>
            <p>
              Submit all required documents to the Sogang Scholarship Committee via email at <a href="mailto:sogangscholarship@gmail.com" className="text-blue-600 underline">sogangscholarship@gmail.com</a> by 05:00 PM, Saturday, {scholarship.deadline ? formatDeadline(scholarship.deadline) : 'TBD'}.
            </p>
            <p className="mt-2">
              Please refer to the Application Package at <a href="http://gradsch.sogang.ac.kr" className="text-blue-600 underline" target="_blank" rel="noopener noreferrer">http://gradsch.sogang.ac.kr</a>
            </p>
          </>
        );
      default:
        return (
          <>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">About This Scholarship</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              {scholarship.description}
            </p>
          </>
        );
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <button
            onClick={() => navigate('/')}
            className="flex items-center text-gray-600 hover:text-gray-900 mb-4 transition-colors"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Scholarships
          </button>
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
            <div className="flex-1">
              <div className="flex items-center space-x-3 mb-3">
                <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${getCategoryColor(scholarship.category)}`}>
                  {scholarship.category}
                </span>
                {scholarship.featured && (
                  <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm font-medium flex items-center">
                    <Star className="h-3 w-3 mr-1" />
                    Featured
                  </span>
                )}
              </div>
              <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-2">
                {scholarship.title}
              </h1>
              <p className="text-xl text-gray-600 font-khmer">
                អាហារូបករណ៍សម្រាប់និស្សិត | Scholarship for Students
              </p>
            </div>
            <div className="mt-6 lg:mt-0 lg:ml-8">
              <div className="bg-green-50 border border-green-200 rounded-xl p-6 text-center">
                <div className="text-3xl font-bold text-green-600 mb-1">
                  {formatAmount(scholarship.amount)}
                </div>
                <div className="text-sm text-green-700">
                  {scholarship.renewable ? 'Renewable Award' : 'One-time Award'}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Description */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              {renderScholarshipInfo()}
            </div>

            {/* Eligibility Requirements */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <CheckCircle className="h-6 w-6 text-green-600 mr-3" />
                Eligibility Requirements
              </h2>
              <div className="space-y-4">
                {scholarship.eligibility.map((req: string, index: number) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="bg-green-100 rounded-full p-1 mt-0.5">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                    </div>
                    <span className="text-gray-700">{req}</span>
                  </div>
                ))}
              </div>
              {scholarship.gpaRequirement && (
                <div className="mt-6 bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                  <div className="flex items-center">
                    <GraduationCap className="h-5 w-5 text-yellow-600 mr-2" />
                    <span className="font-semibold text-yellow-800">
                      Minimum GPA Required: {scholarship.gpaRequirement}
                    </span>
                  </div>
                </div>
              )}
            </div>

            {/* Application Requirements */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <FileText className="h-6 w-6 text-blue-600 mr-3" />
                Application Requirements
              </h2>
              <div className="space-y-4">
                {scholarship.requirements.map((req: string, index: number) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="bg-blue-100 rounded-full p-1 mt-0.5">
                      <FileText className="h-4 w-4 text-blue-600" />
                    </div>
                    <span className="text-gray-700">{req}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Field of Study */}
            {scholarship.fieldOfStudy && (
              <div className="bg-white rounded-xl shadow-lg p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Eligible Fields of Study</h2>
                <div className="flex flex-wrap gap-2">
                  {scholarship.fieldOfStudy.map((field: string, index: number) => (
                    <span
                      key={index}
                      className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium"
                    >
                      {field}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Quick Info */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Quick Information</h3>
              <div className="space-y-4">
                <div className="flex items-center text-sm">
                  <Calendar className="h-4 w-4 text-gray-400 mr-3" />
                  <div>
                    <div className="font-medium text-gray-900">Application Deadline</div>
                    <div className={`${isDeadlineSoon(scholarship.deadline) ? 'text-red-600 font-semibold' : 'text-gray-600'}`}>
                      {formatDeadline(scholarship.deadline)}
                      {isDeadlineSoon(scholarship.deadline) && (
                        <span className="ml-2 text-red-500">⚠️ Soon!</span>
                      )}
                    </div>
                  </div>
                </div>
                <div className="flex items-center text-sm">
                  <Users className="h-4 w-4 text-gray-400 mr-3" />
                  <div>
                    <div className="font-medium text-gray-900">Recipients</div>
                    <div className="text-gray-600">{scholarship.maxRecipients} students</div>
                  </div>
                </div>
                <div className="flex items-center text-sm">
                  <Award className="h-4 w-4 text-gray-400 mr-3" />
                  <div>
                    <div className="font-medium text-gray-900">Award Type</div>
                    <div className="text-gray-600">
                      {scholarship.renewable ? 'Renewable' : 'One-time'}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Take Action</h3>
              <div className="space-y-3">
                <button
                  onClick={handleApplyClick}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors flex items-center justify-center space-x-2"
                >
                  <ExternalLink className="h-4 w-4" />
                  <span>Apply Now</span>
                </button>
                <a
                  href={`mailto:${scholarship.contactEmail}?subject=Inquiry about ${scholarship.title}&body=Hello,%0D%0A%0D%0AI am interested in learning more about the ${scholarship.title} scholarship. Could you please provide additional information?%0D%0A%0D%0AThank you.`}
                  className="w-full border border-gray-300 hover:border-gray-400 text-gray-700 hover:text-gray-900 px-6 py-3 rounded-lg font-semibold transition-colors flex items-center justify-center space-x-2"
                >
                  <Mail className="h-4 w-4" />
                  <span>Email Contact</span>
                </a>
                <button
                  onClick={handleTelegramContact}
                  className="w-full bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors flex items-center justify-center space-x-2"
                >
                  <TelegramIcon className="h-4 w-4" />
                  <span>Contact via Telegram</span>
                </button>
              </div>
            </div>

            {/* Contact Information */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Contact Information</h3>
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <Mail className="h-4 w-4 text-gray-400 mt-1" />
                  <div>
                    <div className="font-medium text-gray-900">Email</div>
                    <a
                      href={`mailto:${scholarship.contactEmail}`}
                      className="text-blue-600 hover:text-blue-800 text-sm"
                    >
                      {scholarship.contactEmail}
                    </a>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <TelegramIcon className="h-4 w-4 text-gray-400 mt-1" />
                  <div>
                    <div className="font-medium text-gray-900">Telegram</div>
                    <button
                      onClick={handleTelegramContact}
                      className="text-blue-600 hover:text-blue-800 text-sm"
                    >
                      @scholarshipportal
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Deadline Warning */}
            {isDeadlineSoon(scholarship.deadline) && (
              <div className="bg-red-50 border border-red-200 rounded-xl p-6">
                <div className="flex items-center space-x-3">
                  <Clock className="h-5 w-5 text-red-600" />
                  <div>
                    <div className="font-semibold text-red-800">Deadline Approaching!</div>
                    <div className="text-red-700 text-sm">
                      Don't miss this opportunity. Apply before {formatDeadline(scholarship.deadline)}.
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Application Modal */}
      {showApplicationModal && (
        <ApplicationModal
          scholarship={scholarship}
          onClose={() => setShowApplicationModal(false)}
        />
      )}
    </div>
  );
}