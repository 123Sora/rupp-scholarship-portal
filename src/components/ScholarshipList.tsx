import type { Scholarship, FilterState } from '../types';
import ScholarshipCard from './ScholarshipCard';

interface ScholarshipListProps {
  scholarships: Scholarship[];
  filters: FilterState;
}

export default function ScholarshipList({ scholarships, filters }: ScholarshipListProps) {
  const filterScholarships = (scholarships: Scholarship[], filters: FilterState): Scholarship[] => {
    return scholarships.filter((scholarship) => {
      // Search filter
      if (filters.search) {
        const searchTerm = filters.search.toLowerCase();
        const matchesSearch = 
          scholarship.title.toLowerCase().includes(searchTerm) ||
          scholarship.description.toLowerCase().includes(searchTerm) ||
          scholarship.category.toLowerCase().includes(searchTerm) ||
          scholarship.eligibility.some(req => req.toLowerCase().includes(searchTerm)) ||
          (scholarship.fieldOfStudy && scholarship.fieldOfStudy.some(field => field.toLowerCase().includes(searchTerm)));
        
        if (!matchesSearch) return false;
      }

      // Category filter
      if (filters.category !== 'All' && scholarship.category !== filters.category) {
        return false;
      }

      // Amount filter
      if (scholarship.amount < filters.minAmount || scholarship.amount > filters.maxAmount) {
        return false;
      }

      // Deadline filter
      if (filters.deadlineRange !== 'All') {
        const deadlineDate = new Date(scholarship.deadline);
        const now = new Date();
        const timeDiff = deadlineDate.getTime() - now.getTime();
        const daysDiff = Math.ceil(timeDiff / (1000 * 3600 * 24));

        switch (filters.deadlineRange) {
          case 'This Month':
            if (daysDiff > 30) return false;
            break;
          case 'Next 3 Months':
            if (daysDiff > 90) return false;
            break;
          case 'This Year':
            if (daysDiff > 365) return false;
            break;
        }
      }

      return true;
    });
  };

  const filteredScholarships = filterScholarships(scholarships, filters);
  const featuredScholarships = filteredScholarships.filter(s => s.featured);
  const regularScholarships = filteredScholarships.filter(s => !s.featured);

  if (filteredScholarships.length === 0) {
    return (
      <div className="text-center py-12">
        <div className="text-gray-400 mb-4">
          <svg className="mx-auto h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
        </div>
        <h3 className="text-xl font-semibold text-gray-700 mb-2">No scholarships found</h3>
        <p className="text-gray-500">Try adjusting your search criteria or filters to find more opportunities.</p>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      {/* Featured Scholarships */}
      {featuredScholarships.length > 0 && (
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
            <span className="bg-yellow-400 text-yellow-900 px-3 py-1 rounded-full text-sm font-medium mr-3">
              Featured
            </span>
            Top Opportunities
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-12">
            {featuredScholarships.map((scholarship) => (
              <ScholarshipCard key={scholarship.id} scholarship={scholarship} featured />
            ))}
          </div>
        </div>
      )}

      {/* Regular Scholarships */}
      {regularScholarships.length > 0 && (
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            All Scholarships
            <span className="ml-3 text-lg font-normal text-gray-600">
              ({regularScholarships.length} available)
            </span>
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
            {regularScholarships.map((scholarship) => (
              <ScholarshipCard key={scholarship.id} scholarship={scholarship} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}