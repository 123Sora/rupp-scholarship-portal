import { Quote, GraduationCap, Award, Star } from 'lucide-react';

export default function SuccessStoriesPage() {
  const stories = [
    {
      name: 'Sarah Johnson',
      scholarship: 'Presidential Excellence Scholarship',
      amount: '$45,000',
      major: 'Computer Science',
      year: '2023',
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400',
      quote: 'This scholarship didn\'t just provide financial support - it opened doors to research opportunities and mentorship that shaped my entire academic journey.',
      story: 'Sarah was a first-generation college student who excelled in mathematics and programming. The Presidential Excellence Scholarship allowed her to focus on her studies without worrying about financial constraints. She went on to complete groundbreaking research in artificial intelligence and now works at a leading tech company.',
      achievements: [
        'Graduated Summa Cum Laude',
        'Published 3 research papers',
        'Internship at Google',
        'Founded coding club for underrepresented students'
      ]
    },
    {
      name: 'Marcus Rodriguez',
      scholarship: 'STEM Innovation Grant',
      amount: '$30,000',
      major: 'Biomedical Engineering',
      year: '2022',
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400',
      quote: 'The STEM Innovation Grant gave me the freedom to pursue my passion for medical device development and make a real impact in healthcare.',
      story: 'Marcus came from a low-income family but had a dream of developing medical devices to help underserved communities. The scholarship enabled him to conduct research on affordable diagnostic tools and complete internships at medical device companies.',
      achievements: [
        'Developed low-cost diagnostic device',
        'Patent pending on medical innovation',
        'Internship at Medtronic',
        'Volunteer medical missions abroad'
      ]
    },
    {
      name: 'Aisha Patel',
      scholarship: 'International Student Excellence Award',
      amount: '$25,000',
      major: 'International Business',
      year: '2023',
      image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=400',
      quote: 'As an international student, this scholarship made my American dream possible and helped me build bridges between cultures.',
      story: 'Aisha moved from India to pursue her education in the United States. The International Student Excellence Award not only provided financial support but also connected her with a network of international students and mentors who helped her navigate cultural challenges.',
      achievements: [
        'Dean\'s List all semesters',
        'President of International Student Association',
        'Internship at multinational corporation',
        'Fluent in 4 languages'
      ]
    },
    {
      name: 'David Chen',
      scholarship: 'Community Impact Scholarship',
      amount: '$15,000',
      major: 'Social Work',
      year: '2022',
      image: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=400',
      quote: 'This scholarship recognized my commitment to community service and empowered me to expand my impact even further.',
      story: 'David had already volunteered over 500 hours in his community before college. The Community Impact Scholarship allowed him to continue his service work while pursuing his degree in social work, leading to innovative community programs.',
      achievements: [
        'Founded youth mentorship program',
        '1000+ volunteer hours',
        'Community service award recipient',
        'Accepted to graduate school with full funding'
      ]
    },
    {
      name: 'Emily Thompson',
      scholarship: 'First-Generation College Student Support',
      amount: '$18,000',
      major: 'Education',
      year: '2023',
      image: 'https://images.pexels.com/photos/1181424/pexels-photo-1181424.jpeg?auto=compress&cs=tinysrgb&w=400',
      quote: 'Being the first in my family to attend college was daunting, but this scholarship provided both financial and emotional support.',
      story: 'Emily\'s parents never attended college, and she faced many challenges navigating higher education. The First-Generation College Student Support scholarship provided mentorship and resources that helped her succeed academically and personally.',
      achievements: [
        'First in family to graduate college',
        'Student mentor for first-gen students',
        'Teaching certification earned',
        'Hired as elementary school teacher'
      ]
    },
    {
      name: 'Jordan Williams',
      scholarship: 'Athletic Achievement Scholarship',
      amount: '$22,000',
      major: 'Kinesiology',
      year: '2022',
      image: 'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=400',
      quote: 'This scholarship allowed me to excel both on the field and in the classroom, proving that student-athletes can achieve greatness in all areas.',
      story: 'Jordan was a standout athlete who also maintained excellent grades. The Athletic Achievement Scholarship supported both his athletic and academic pursuits, leading to success in both areas and a career in sports medicine.',
      achievements: [
        'All-Conference athlete 3 years',
        'Academic All-American',
        'Team captain senior year',
        'Accepted to physical therapy program'
      ]
    }
  ];

  const stats = [
    { number: '2,500+', label: 'Students Supported', icon: <GraduationCap className="h-8 w-8" /> },
    { number: '$12M+', label: 'Total Awarded', icon: <Award className="h-8 w-8" /> },
    { number: '95%', label: 'Graduation Rate', icon: <Star className="h-8 w-8" /> },
    { number: '150+', label: 'Active Scholarships', icon: <Quote className="h-8 w-8" /> }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-green-600 to-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Success Stories</h1>
            <p className="text-xl text-green-100 max-w-3xl mx-auto">
              Discover how our scholarships have transformed lives and opened doors to incredible opportunities.
            </p>
            <p className="text-lg text-green-200 mt-4 font-khmer">
              រឿងរ៉ាវជោគជ័យរបស់និស្សិតដែលទទួលបានអាហារូបករណ៍
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Statistics */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Our Impact</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6 text-center border border-gray-200">
                <div className="flex justify-center mb-4 text-blue-600">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Success Stories */}
        <div className="space-y-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Student Success Stories</h2>
          
          {stories.map((story, index) => (
            <div key={index} className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-12`}>
              <div className="lg:w-1/3">
                <div className="relative">
                  <img
                    src={story.image}
                    alt={story.name}
                    className="w-full h-80 object-cover rounded-xl shadow-lg"
                  />
                  <div className="absolute -bottom-6 -right-6 bg-white rounded-xl shadow-lg p-4 border border-gray-200">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-green-600">{story.amount}</div>
                      <div className="text-sm text-gray-600">Scholarship Award</div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="lg:w-2/3">
                <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-200">
                  <div className="flex items-center space-x-4 mb-6">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900">{story.name}</h3>
                      <p className="text-gray-600">{story.major} • Class of {story.year}</p>
                      <p className="text-blue-600 font-medium">{story.scholarship}</p>
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <Quote className="h-8 w-8 text-blue-600 mb-4" />
                    <blockquote className="text-lg text-gray-700 italic leading-relaxed">
                      "{story.quote}"
                    </blockquote>
                  </div>
                  
                  <p className="text-gray-700 mb-6 leading-relaxed">{story.story}</p>
                  
                  <div>
                    <h4 className="font-semibold text-gray-900  mb-3">Key Achievements:</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {story.achievements.map((achievement, achievementIndex) => (
                        <div key={achievementIndex} className="flex items-center space-x-2">
                          <Star className="h-4 w-4 text-yellow-500 flex-shrink-0" />
                          <span className="text-gray-700 text-sm">{achievement}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl p-8 text-center">
          <h3 className="text-2xl font-bold mb-4">Your Success Story Starts Here</h3>
          <p className="text-lg mb-6 text-blue-100">
            Join thousands of students who have achieved their dreams with our scholarship support.
          </p>
          <a
            href="/#scholarships"
            className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors inline-flex items-center space-x-2"
          >
            <span>Apply for Scholarships</span>
          </a>
        </div>
      </div>
    </div>
  );
}