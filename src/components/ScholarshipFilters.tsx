import { Search, Filter, X } from 'lucide-react';
import type { FilterState, ScholarshipCategory } from '../types';

interface ScholarshipFiltersProps {
  filters: FilterState;
  onFiltersChange: (filters: FilterState) => void;
  isOpen: boolean;
  onToggle: () => void;
  totalResults: number;
}

// Changed categories to degree levels
const categories: (ScholarshipCategory | 'All')[] = [
  'All',
  'Bachelor',
  'Master',
  'PhD',
  'Diploma',
  'Certificate',
  'Short Course',
  'Exchange',
  'Internship',
];

export default function ScholarshipFilters({
  filters,
  onFiltersChange,
  isOpen,
  onToggle,
  totalResults,
}: ScholarshipFiltersProps) {
  const handleSearchChange = (search: string) => {
    onFiltersChange({ ...filters, search });
  };

  const handleCategoryChange = (category: ScholarshipCategory | 'All') => {
    onFiltersChange({ ...filters, category });
  };

  const handleAmountChange = (type: 'min' | 'max', value: string) => {
    const numValue = value === '' ? 0 : parseInt(value);
    if (type === 'min') {
      onFiltersChange({ ...filters, minAmount: numValue });
    } else {
      onFiltersChange({ ...filters, maxAmount: numValue });
    }
  };

  const handleDeadlineChange = (deadlineRange: FilterState['deadlineRange']) => {
    onFiltersChange({ ...filters, deadlineRange });
  };

  const clearFilters = () => {
    onFiltersChange({
      search: '',
      category: 'All',
      minAmount: 0,
      maxAmount: 50000,
      deadlineRange: 'All',
    });
  };

  const hasActiveFilters =
    filters.search !== '' ||
    filters.category !== 'All' ||
    filters.minAmount > 0 ||
    filters.maxAmount < 50000 ||
    filters.deadlineRange !== 'All';

  return (
    <div className="bg-white shadow-lg rounded-xl p-6 mb-8">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-3">
          <Search className="h-5 w-5 text-gray-600" />
          <h2 className="text-lg font-semibold text-gray-900">Find Scholarships</h2>
          <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-sm font-medium">
            {totalResults} results
          </span>
        </div>
        <button
          onClick={onToggle}
          className="lg:hidden flex items-center space-x-2 text-gray-600 hover:text-gray-900 px-3 py-2 rounded-lg hover:bg-gray-100"
        >
          <Filter className="h-4 w-4" />
          <span>Filters</span>
        </button>
      </div>

      {/* Search Bar */}
      <div className="mb-6">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
          <input
            type="text"
            placeholder="Search scholarships by name, description, or keywords..."
            value={filters.search}
            onChange={(e) => handleSearchChange(e.target.value)}
            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
      </div>

      {/* Advanced Filters */}
      <div className={`${isOpen ? 'block' : 'hidden lg:block'}`}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Category Filter */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Category
            </label>
            <select
              value={filters.category}
              onChange={(e) => handleCategoryChange(e.target.value as ScholarshipCategory | 'All')}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              {categories.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </div>

          {/* Amount Range */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Min Amount
            </label>
            <input
              type="number"
              placeholder="$0"
              value={filters.minAmount === 0 ? '' : filters.minAmount}
              onChange={(e) => handleAmountChange('min', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Max Amount
            </label>
            <input
              type="number"
              placeholder="$50,000"
              value={filters.maxAmount === 50000 ? '' : filters.maxAmount}
              onChange={(e) => handleAmountChange('max', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>

          {/* Deadline Filter */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Deadline
            </label>
            <select
              value={filters.deadlineRange}
              onChange={(e) => handleDeadlineChange(e.target.value as FilterState['deadlineRange'])}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="All">All Deadlines</option>
              <option value="This Month">This Month</option>
              <option value="Next 3 Months">Next 3 Months</option>
              <option value="This Year">This Year</option>
            </select>
          </div>
        </div>

        {/* Clear Filters */}
        {hasActiveFilters && (
          <div className="mt-6 flex justify-center">
            <button
              onClick={clearFilters}
              className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 px-4 py-2 rounded-lg hover:bg-gray-100 transition-colors"
            >
              <X className="h-4 w-4" />
              <span>Clear all filters</span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
}