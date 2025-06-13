import { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle, Search, Mail } from 'lucide-react';
// import rupplogo from '../assets/rupplogo-removebg-preview.png';
import iro from '../assets/iro.png';

// Telegram SVG icon as a React component
const TelegramIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" {...props}>
    <path d="M21.944 2.506a1.5 1.5 0 0 0-1.633-.217L2.9 10.07a1.5 1.5 0 0 0 .13 2.77l4.44 1.73 2.03 6.09a1.5 1.5 0 0 0 2.67.27l2.13-3.19 4.16 3.06a1.5 1.5 0 0 0 2.36-.89l3.01-15.01a1.5 1.5 0 0 0-.786-1.404zM9.57 17.13l-1.44-4.33 7.47-6.7-6.03 7.97zm2.93 2.34l-1.13-3.39 2.18-2.6 2.13 1.57-3.18 4.42zm7.13-1.02l-4.16-3.06 5.13-7.13-1.97 10.19z" fill="currentColor"/>
  </svg>
);

export default function FAQPage() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);
  const [searchTerm, setSearchTerm] = useState('');

  const faqs = [
    {
      category: 'General Information',
      questions: [
        {
          question: 'What is the IRO at RUPP?',
          answer: 'The International Relations Office (IRO) at Royal University of Phnom Penh facilitates international communication, promotes student exchange programs, and provides advising services for scholarships and admissions to universities abroad. We also work to enhance international collaboration through joint programs and research initiatives.'
        },
        {
          question: 'How can I apply for scholarships through IRO?',
          answer: 'You can apply for scholarships by browsing our scholarship database, checking eligibility requirements, and submitting your application through our online portal. Each scholarship has specific requirements and deadlines. Contact our office for personalized guidance.'
        },
        {
          question: 'What services does IRO provide?',
          answer: 'IRO provides international student support, scholarship guidance, study abroad program coordination, partnership development with international institutions, cultural exchange initiatives, and assistance with admission processes for universities abroad.'
        },
        {
          question: 'When should I start my scholarship application process?',
          answer: 'We recommend starting your scholarship search and application process at least 12 months before you need funding. Many international scholarships have early deadlines, and starting early gives you time to prepare strong applications and gather required documents.'
        }
      ]
    },
    {
      category: 'Scholarship Eligibility',
      questions: [
        {
          question: 'What are the general eligibility requirements for RUPP scholarships?',
          answer: 'General requirements include being enrolled at RUPP, maintaining good academic standing (usually GPA 3.0 or higher), demonstrating financial need or academic merit depending on the scholarship type, and meeting specific criteria for each scholarship program.'
        },
        {
          question: 'Can international students apply for RUPP scholarships?',
          answer: 'Yes, we have several scholarships specifically for international students, as well as some that are open to both domestic and international students. Check the specific eligibility requirements for each scholarship program.'
        },
        {
          question: 'Do I need to demonstrate financial need?',
          answer: 'Some scholarships are need-based and require financial documentation, while others are merit-based focusing on academic achievement, leadership, or other criteria. Each scholarship clearly states whether financial need is a requirement.'
        },
        {
          question: 'Are there scholarships for graduate students?',
          answer: 'Yes, many scholarships are available for graduate students, including research-focused scholarships, teaching assistantships, and international exchange programs. Some are specifically designed for Master\'s and PhD students.'
        }
      ]
    },
    {
      category: 'Application Process',
      questions: [
        {
          question: 'What documents do I need for scholarship applications?',
          answer: 'Common required documents include academic transcripts, letters of recommendation from faculty, personal statement or research proposal, CV/resume, language proficiency certificates (for international programs), and financial documentation if required.'
        },
        {
          question: 'How long does the application review process take?',
          answer: 'Review times vary by scholarship but typically take 2-4 months after the application deadline. You will be notified by email regardless of the decision. Some competitive scholarships may take longer due to multiple review stages.'
        },
        {
          question: 'Can I apply for multiple scholarships simultaneously?',
          answer: 'Yes, you can and should apply for multiple scholarships to increase your chances of receiving funding. Each scholarship requires a separate application, so ensure you meet the requirements for each one and tailor your applications accordingly.'
        },
        {
          question: 'What happens after I submit my application?',
          answer: 'After submission, you\'ll receive a confirmation email. Your application will be reviewed by the scholarship committee. Some scholarships may require interviews or additional documentation. We\'ll keep you updated throughout the process.'
        }
      ]
    },
    {
      category: 'International Programs',
      questions: [
        {
          question: 'Does RUPP offer study abroad opportunities?',
          answer: 'Yes, RUPP has partnerships with universities worldwide offering student exchange programs, joint degree programs, and short-term study opportunities. Contact IRO for information about available programs and application procedures.'
        },
        {
          question: 'How can I get help with applications to foreign universities?',
          answer: 'IRO provides comprehensive support including university selection guidance, application assistance, scholarship identification, visa support, and pre-departure orientation. Schedule a consultation with our advisors for personalized assistance.'
        },
        {
          question: 'Are there English language requirements for international programs?',
          answer: 'Most international programs require English proficiency demonstrated through TOEFL, IELTS, or equivalent tests. Minimum scores vary by program and destination country. IRO can help you understand specific requirements and prepare for these tests.'
        },
        {
          question: 'What support is available for international students at RUPP?',
          answer: 'We provide orientation programs, academic advising, cultural integration support, assistance with visa and immigration matters, housing guidance, and ongoing support throughout your studies at RUPP.'
        }
      ]
    }
  ];

  const filteredFAQs = faqs.map(category => ({
    ...category,
    questions: category.questions.filter(
      faq =>
        faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
        faq.answer.toLowerCase().includes(searchTerm.toLowerCase())
    )
  })).filter(category => category.questions.length > 0);

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-rupp-blue text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              {/* <img 
                src={rupplogo}
                alt="RUPP Logo" 
                className="h-32 w-40"
              /> */}
                <img 
                src={iro}
                alt="IRO RUPP Logo" 
                className="h-32 w-52"
              />
            </div>
            <HelpCircle className="h-16 w-16 mx-auto mb-6 text-blue-200" />
            <h1 className="text-4xl font-bold mb-4">Frequently Asked Questions</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Find answers to common questions about RUPP scholarships, IRO services, and international programs.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Search */}
        <div className="mb-12">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search FAQs..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rupp-blue focus:border-transparent"
            />
          </div>
        </div>

        {/* FAQ Categories */}
        <div className="space-y-8">
          {filteredFAQs.map((category, categoryIndex) => (
            <div key={categoryIndex}>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">{category.category}</h2>
              <div className="space-y-4">
                {category.questions.map((faq, faqIndex) => {
                  const globalIndex = categoryIndex * 100 + faqIndex;
                  return (
                    <div key={faqIndex} className="bg-white rounded-lg shadow-md border border-gray-200">
                      <button
                        onClick={() => toggleFAQ(globalIndex)}
                        className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                      >
                        <span className="font-semibold text-gray-900">{faq.question}</span>
                        {openFAQ === globalIndex ? (
                          <ChevronUp className="h-5 w-5 text-gray-500 flex-shrink-0" />
                        ) : (
                          <ChevronDown className="h-5 w-5 text-gray-500 flex-shrink-0" />
                        )}
                      </button>
                      {openFAQ === globalIndex && (
                        <div className="px-6 pb-4">
                          <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {filteredFAQs.length === 0 && (
          <div className="text-center py-12">
            <HelpCircle className="h-12 w-12 text-gray-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-700 mb-2">No FAQs found</h3>
            <p className="text-gray-500">Try adjusting your search terms or browse all categories.</p>
          </div>
        )}

        {/* Contact Section */}
        <div className="mt-16 bg-white rounded-xl shadow-lg p-8 border border-gray-200">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Still Have Questions?</h3>
            <p className="text-gray-600 mb-6">
              Can't find the answer you're looking for? The IRO team is here to help.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:iroffice@rupp.edu.kh"
                className="bg-rupp-red hover:bg-red-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors flex items-center justify-center space-x-2"
              >
                <Mail className="h-4 w-4" />
                <span>Email IRO</span>
              </a>
              <a
                href="https://t.me/rupp_iro"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-rupp-blue hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors flex items-center justify-center space-x-2"
              >
                <TelegramIcon className="h-4 w-4" />
                <span>Telegram Support</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}