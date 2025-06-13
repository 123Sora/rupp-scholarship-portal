import { useState, useEffect } from 'react';
import { scholarshipsAPI } from '../services/api';
import ScholarshipFilters from '../components/ScholarshipFilters';
import ScholarshipList from '../components/ScholarshipList';
import type { FilterState } from '../types';
import toast from 'react-hot-toast';
import rupplogo from '../assets/rupplogo-removebg-preview.png';

export default function ScholarshipsPage() {
  const [scholarships, setScholarships] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [filters, setFilters] = useState<FilterState>({
    search: '',
    category: 'All',
    minAmount: 0,
    maxAmount: 50000,
    deadlineRange: 'All',
  });
  const [isFiltersOpen, setIsFiltersOpen] = useState(false);

  useEffect(() => {
    fetchScholarships();
  }, []);

  const fetchScholarships = async () => {
    try {
      setLoading(true);
      const response = await scholarshipsAPI.getAll();
      const data = response.data as { data: any[] };
      setScholarships(data.data);
    } catch (error) {
      toast.error('Failed to fetch scholarships');
    } finally {
      setLoading(false);
    }
  };
 
  const toggleFilters = () => {
    setIsFiltersOpen(!isFiltersOpen);
  };

  // if (loading) {
  //   return (
  //     <div className="flex items-center justify-center min-h-screen">
  //       <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-rupp-red"></div>
  //     </div>
  //   );
  // }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-rupp-red text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            {/* <div className="flex justify-center">
              <img 
                src={rupplogo}
                alt="RUPP Logo" 
                className="h-56 w-60"
              />
            </div> */}
            <h1 className="text-4xl font-bold mb-4">Available Scholarships</h1>
            <p className="text-xl text-red-100 max-w-3xl mx-auto">
              Explore all scholarship opportunities available at Royal University of Phnom Penh
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <ScholarshipFilters
          filters={filters}
          onFiltersChange={setFilters}
          isOpen={isFiltersOpen}
          onToggle={toggleFilters}
          totalResults={scholarships.length}
        />
        
        <ScholarshipList
          scholarships={scholarships}
          filters={filters}
        />
      </div>
    </div>
  );
}