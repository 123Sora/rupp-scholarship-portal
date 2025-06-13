import type { Scholarship } from '../types';

export const scholarships: Scholarship[] = [
  {
    id: '1',
    title: 'Chula-AUN Summer Camp 2025',
    description: 'The International Relations Office of the Royal University of Phnom Penh wishes to disseminate the call for applications for the 2025 AUN Summer Camp at Chulalongkorn University, Thailand, from 21 June to 03 July 2025. 🇹🇭 The benefits and expenses are mentioned in the poster.',
    amount: 0,
    deadline: '2025-05-05',
    category: 'Exchange',
    eligibility: [
      'Be second to fourth-year students at any faculty of RUPP',
      'Have good behaviour and conduct, and be able to work autonomously',
      'Must avoid having a conflicting schedule between class and program'
    ],
    requirements: [
      'Academic transcript',
      'Enrolment certificate',
      'One-page motivation letter stating your interests',
      'Up-to-date comprehensive resumé',
      'Passport’s information page',
      'Language proficiency proof (if any)'
    ],
    featured: true,
    applicationLink: '#apply',
    contactEmail: 'iro@rupp.edu.kh',
    maxRecipients: 2,
    renewable: false,
    fieldOfStudy: ['All Majors']
  },
  {
    id: '2',
    title: 'UNAIR-AUN Summer Camp 2025',
    description: 'The International Relations Office of the Royal University of Phnom Penh wishes to disseminate the call for applications for the 2025 AUN Summer Camp at Universitas Airlangga, Indonesia, from 11 to 25 August 2025; 11-13 Online and 15-25 Onsite. 🇮🇩 Students may follow the recruitment procedure through the announcement paper. As a core member of the ASEAN University Network (AUN), we are requested to nominate up to two (02) students.',
    amount: 0,
    deadline: '2025-07-01',
    category: 'Exchange',
    eligibility: [
      'Be second to fourth-year students at any faculty of RUPP',
      'Good behaviour and conduct',
      'Able to work autonomously',
      'No conflicting schedule between class and program'
    ],
    requirements: [
      'Academic transcript',
      'Enrolment certificate',
      'Motivation letter',
      'Resume',
      'Passport’s information page',
      'Language proficiency proof (if any)'
    ],
    featured: false,
    applicationLink: '#apply',
    contactEmail: 'iro@rupp.edu.kh',
    maxRecipients: 2,
    renewable: false,
    fieldOfStudy: ['All Majors']
  },
  {
    id: '3',
    title: "Master's Degree at Sogang University 2026",
    description: "The Royal University of Phnom Penh (RUPP) has the great honour to announce the call for applications for the Master's Degree Scholarship Program in Mathematics, Chemistry, Life Science, Physics, Electronic Engineering, Chemical and Biomolecular Engineering, Computer Science and Engineering, Mechanical Engineering, and Semiconductor Engineering at Sogang University, Republic of Korea, in collaboration with Jesuit Service-Cambodia.",
    amount: 0,
    deadline: '2025-07-05',
    category: 'Master',
    eligibility: [
      'Be an ongoing fourth-year student at RUPP in 2024-2025, OR recently graduated from RUPP',
      'Possess good academic performance with a GPA of 3.00 or higher',
      'Have a good command of the English language of at least IELTS 6.0',
      'Be under 35 years of age'
    ],
    requirements: [
      'Sogang University Scholarship Application Form',
      'A copy of the family book',
      'A copy of a valid passport',
      'Original academic qualification documents (transcripts, diploma, degree, awards)',
      'Language proficiency proof (TOPIK, TOEFL, IELTS or equivalent; if any)',
      'Two recommendation letters with signature: academic and personal',
      'Two personally written essays in English (max 1000 words each)',
      'Other documents deemed necessary for the application'
    ],
    featured: true,
    applicationLink: '#apply',
    contactEmail: 'sogangscholarship@gmail.com',
    maxRecipients: 5,
    renewable: false,
    gpaRequirement: 3.0,
    fieldOfStudy: [
      'Mathematics',
      'Chemistry',
      'Life Science',
      'Physics',
      'Electronic Engineering',
      'Chemical and Biomolecular Engineering',
      'Computer Science and Engineering',
      'Mechanical Engineering',
      'Semiconductor Engineering'
    ]
  },
  {
    id: '4',
    title: 'AEON 1% Club Foundation Scholarship',
    description: 'The AEON 1% Club Foundation Scholarship supports outstanding Cambodian students with financial need to pursue their undergraduate studies. The scholarship covers tuition fees and provides a monthly stipend.',
    amount: 1200,
    deadline: '2025-06-15',
    category: 'Bachelor',
    eligibility: [
      'Cambodian nationality',
      'Currently enrolled in a Bachelor’s degree program',
      'Demonstrated financial need',
      'Good academic standing (GPA 3.0 or above)',
      'Active participation in community service'
    ],
    requirements: [
      'Completed application form',
      'Academic transcripts',
      'Proof of enrollment',
      'Recommendation letter from university',
      'Personal statement (500 words)',
      'Proof of community service'
    ],
    featured: true,
    applicationLink: '#apply',
    contactEmail: 'aeon1@aeon.info',
    maxRecipients: 10,
    renewable: true,
    gpaRequirement: 3.0,
    fieldOfStudy: ['All Majors']
  },
  {
    id: '5',
    title: 'Presidential Excellence Scholarship',
    description: 'Our most prestigious award recognizing outstanding academic achievement, leadership, and community involvement. Recipients receive full tuition coverage and additional stipends.',
    amount: 45000,
    deadline: '2024-02-15',
    category: 'Bachelor',
    eligibility: [
      'Minimum GPA of 3.8',
      'Full-time enrollment',
      'Demonstrated leadership experience',
      'Community service involvement'
    ],
    requirements: [
      'Complete scholarship application',
      'Submit academic transcripts',
      'Provide three letters of recommendation',
      'Write personal statement (500 words)',
      'Attend scholarship interview'
    ],
    featured: true,
    applicationLink: '#apply',
    contactEmail: 'scholarships@university.edu',
    maxRecipients: 25,
    renewable: true,
    gpaRequirement: 3.8,
    fieldOfStudy: ['All Majors']
  },
  {
    id: '6',
    title: 'STEM Innovation Grant',
    description: 'Supporting the next generation of scientists, engineers, and technology leaders. This scholarship provides funding for tuition and research opportunities.',
    amount: 30000,
    deadline: '2024-03-01',
    category: 'Bachelor',
    eligibility: [
      'STEM major (Science, Technology, Engineering, Mathematics)',
      'Minimum GPA of 3.5',
      'Research project proposal',
      'Faculty mentor support'
    ],
    requirements: [
      'Complete online application',
      'Submit research proposal (1000 words)',
      'Provide faculty mentor letter',
      'Submit academic transcripts',
      'Present research poster'
    ],
    featured: true,
    applicationLink: '#apply',
    contactEmail: 'stem-scholarships@university.edu',
    maxRecipients: 50,
    renewable: true,
    gpaRequirement: 3.5,
    fieldOfStudy: ['Computer Science', 'Engineering', 'Mathematics', 'Biology', 'Chemistry', 'Physics']
  },
  {
    id: '7',
    title: 'Community Impact Scholarship',
    description: 'Recognizing students who have made significant contributions to their communities through volunteer work and social initiatives.',
    amount: 15000,
    deadline: '2024-02-28',
    category: 'Bachelor',
    eligibility: [
      'Minimum 200 hours of community service',
      'GPA of 3.0 or higher',
      'Demonstrated community leadership',
      'Essay on community impact'
    ],
    requirements: [
      'Complete application form',
      'Submit community service documentation',
      'Write impact essay (750 words)',
      'Provide two community references',
      'Submit academic transcripts'
    ],
    featured: false,
    applicationLink: '#apply',
    contactEmail: 'community@university.edu',
    maxRecipients: 75,
    renewable: false,
    gpaRequirement: 3.0
  },
  {
    id: '8',
    title: 'International Student Excellence Award',
    description: 'Supporting outstanding international students in their academic journey and cultural exchange experience.',
    amount: 25000,
    deadline: '2024-01-31',
    category: 'Bachelor',
    eligibility: [
      'International student status',
      'Minimum GPA of 3.6',
      'Cultural exchange participation',
      'English proficiency certification'
    ],
    requirements: [
      'Complete international student application',
      'Submit TOEFL/IELTS scores',
      'Provide academic transcripts (translated)',
      'Write cultural exchange essay',
      'Submit financial need documentation'
    ],
    featured: true,
    applicationLink: '#apply',
    contactEmail: 'international@university.edu',
    maxRecipients: 40,
    renewable: true,
    gpaRequirement: 3.6
  },
  {
    id: '9',
    title: 'Business Leadership Scholarship',
    description: 'Developing the next generation of business leaders through academic support and mentorship opportunities.',
    amount: 20000,
    deadline: '2024-03-15',
    category: 'Bachelor',
    eligibility: [
      'Business or Economics major',
      'Minimum GPA of 3.4',
      'Leadership experience',
      'Internship or work experience'
    ],
    requirements: [
      'Submit business school application',
      'Provide resume and cover letter',
      'Submit academic transcripts',
      'Write leadership essay (600 words)',
      'Complete case study analysis'
    ],
    featured: false,
    applicationLink: '#apply',
    contactEmail: 'business-scholarships@university.edu',
    maxRecipients: 60,
    renewable: true,
    gpaRequirement: 3.4,
    fieldOfStudy: ['Business Administration', 'Economics', 'Finance', 'Marketing', 'Management']
  },
  {
    id: '10',
    title: 'First-Generation College Student Support',
    description: 'Providing financial assistance and mentorship to students who are the first in their families to attend college.',
    amount: 18000,
    deadline: '2024-02-20',
    category: 'Bachelor',
    eligibility: [
      'First-generation college student',
      'Demonstrated financial need',
      'Minimum GPA of 2.8',
      'Full-time enrollment commitment'
    ],
    requirements: [
      'Complete FAFSA application',
      'Submit family background documentation',
      'Write personal statement (500 words)',
      'Provide high school transcripts',
      'Submit two personal references'
    ],
    featured: false,
    applicationLink: '#apply',
    contactEmail: 'firstgen@university.edu',
    maxRecipients: 100,
    renewable: true,
    gpaRequirement: 2.8
  },
  {
    id: '11',
    title: 'Athletic Achievement Scholarship',
    description: 'Supporting student-athletes who excel both on the field and in the classroom.',
    amount: 22000,
    deadline: '2024-01-30',
    category: 'Bachelor',
    eligibility: [
      'NCAA Division I athlete',
      'Minimum GPA of 3.2',
      'Team captain or leadership role',
      'Coach recommendation required'
    ],
    requirements: [
      'Submit athletic scholarship application',
      'Provide athletic performance statistics',
      'Submit academic transcripts',
      'Obtain coach recommendation letter',
      'Complete sports medicine clearance'
    ],
    featured: false,
    applicationLink: '#apply',
    contactEmail: 'athletics@university.edu',
    maxRecipients: 80,
    renewable: true,
    gpaRequirement: 3.2
  },
  {
    id: '12',
    title: 'Research Innovation Fellowship',
    description: 'Funding advanced research projects that have the potential to make significant contributions to their field.',
    amount: 35000,
    deadline: '2024-03-10',
    category: 'PhD',
    eligibility: [
      'Graduate student status',
      'Minimum GPA of 3.7',
      'Research proposal approval',
      'Faculty advisor agreement'
    ],
    requirements: [
      'Submit detailed research proposal',
      'Provide faculty advisor letter',
      'Submit academic transcripts',
      'Present preliminary research findings',
      'Complete ethics training certification'
    ],
    featured: true,
    applicationLink: '#apply',
    contactEmail: 'research@university.edu',
    maxRecipients: 30,
    renewable: false,
    gpaRequirement: 3.7
  }
];