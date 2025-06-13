import { useState } from 'react';
import Hero from '../components/Hero';
import ScholarshipFilters from '../components/ScholarshipFilters';
import ScholarshipList from '../components/ScholarshipList';
import { scholarships } from '../data/scholarships';
import type { FilterState } from '../types';

export default function HomePage() {
  const [filters, setFilters] = useState<FilterState>({
    search: '',
    category: 'All',
    minAmount: 0,
    maxAmount: 50000,
    deadlineRange: 'All',
  });

  const [isFiltersOpen, setIsFiltersOpen] = useState(false);
  const [showFilters, setShowFilters] = useState(false);

  const handleSearchClick = () => {
    setShowFilters(true);
    // Scroll to scholarships section
    document.getElementById('scholarships')?.scrollIntoView({ 
      behavior: 'smooth' 
    });
  };

  const toggleFilters = () => {
    setIsFiltersOpen(!isFiltersOpen);
  };

  const filterScholarships = (scholarships: any[], filters: FilterState) => {
    return scholarships.filter((scholarship) => {
      // Search filter
      if (filters.search) {
        const searchTerm = filters.search.toLowerCase();
        const matchesSearch = 
          scholarship.title.toLowerCase().includes(searchTerm) ||
          scholarship.description.toLowerCase().includes(searchTerm) ||
          scholarship.category.toLowerCase().includes(searchTerm) ||
          scholarship.eligibility.some((req: string) => req.toLowerCase().includes(searchTerm)) ||
          (scholarship.fieldOfStudy && scholarship.fieldOfStudy.some((field: string) => field.toLowerCase().includes(searchTerm)));
        
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

  return (
    <>
      <Hero onSearchClick={handleSearchClick} />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <section id="scholarships">
          {showFilters && (
            <ScholarshipFilters
              filters={filters}
              onFiltersChange={setFilters}
              isOpen={isFiltersOpen}
              onToggle={toggleFilters}
              totalResults={filteredScholarships.length}
            />
          )}
          
          <ScholarshipList
            scholarships={filteredScholarships}
            filters={filters}
          />
        </section>
      </div>
    </>
  );
}