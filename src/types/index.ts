export interface Scholarship {
  id: string;
  title: string;
  description: string;
  amount: number;
  deadline: string;
  category: ScholarshipCategory;
  eligibility: string[];
  requirements: string[];
  featured: boolean;
  applicationLink: string;
  contactEmail: string;
  maxRecipients: number;
  renewable: boolean;
  gpaRequirement?: number;
  fieldOfStudy?: string[];
}

export type ScholarshipCategory =
  | 'Bachelor'
  | 'Master'
  | 'PhD'
  | 'Diploma'
  | 'Certificate'
  | 'Short Course'
  | 'Exchange'
  | 'Internship'
  | 'All';

export interface FilterState {
  search: string;
  category: ScholarshipCategory;
  minAmount: number;
  maxAmount: number;
  deadlineRange: 'All' | 'This Month' | 'Next 3 Months' | 'This Year';
}