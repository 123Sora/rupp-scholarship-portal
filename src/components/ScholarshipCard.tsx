import { Link } from 'react-router-dom';
import { Calendar, Users, Award, Mail, Eye } from 'lucide-react';
import type { Scholarship } from '../types';

interface ScholarshipCardProps {
  scholarship: Scholarship;
  featured?: boolean;
}

export default function ScholarshipCard({ scholarship, featured = false }: ScholarshipCardProps) {
  const formatAmount = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
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
      'All': 'bg-yellow-100 text-yellow-800',
    };
    return colors[category as keyof typeof colors] || 'bg-gray-100 text-gray-800';
  };

  return (
    <div className={`bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden ${
      featured ? 'border-2 border-yellow-400 transform hover:-translate-y-2' : 'border border-gray-200 hover:-translate-y-1'
    }`}>
      {featured && (
        <div className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-yellow-900 px-4 py-2 text-center font-semibold">
          <Award className="inline h-4 w-4 mr-2" />
          Featured Scholarship
        </div>
      )}
      
      <div className="p-6">
        <div className="flex items-start justify-between mb-4">
          <div className="flex-1">
            <h3 className="text-xl font-bold text-gray-900 mb-2 line-clamp-2">
              {scholarship.title}
            </h3>
            <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${getCategoryColor(scholarship.category)}`}>
              {scholarship.category}
            </span>
          </div>
          <div className="text-right ml-4">
            <div className="text-2xl font-bold text-green-600">
              {formatAmount(scholarship.amount)}
            </div>
            {scholarship.renewable && (
              <div className="text-sm text-gray-600">Renewable</div>
            )}
          </div>
        </div>

        <p className="text-gray-600 mb-4 line-clamp-3">
          {scholarship.description}
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
          <div className="flex items-center text-sm text-gray-600">
            <Calendar className="h-4 w-4 mr-2 flex-shrink-0" />
            <span className={isDeadlineSoon(scholarship.deadline) ? 'text-red-600 font-semibold' : ''}>
              Due: {formatDeadline(scholarship.deadline)}
              {isDeadlineSoon(scholarship.deadline) && (
                <span className="ml-1 text-red-500">⚠️</span>
              )}
            </span>
          </div>
          <div className="flex items-center text-sm text-gray-600">
            <Users className="h-4 w-4 mr-2 flex-shrink-0" />
            <span>{scholarship.maxRecipients} recipients</span>
          </div>
        </div>

        <div className="mb-6">
          <h4 className="font-semibold text-gray-900 mb-2">Key Requirements:</h4>
          <ul className="text-sm text-gray-600 space-y-1">
            {scholarship.eligibility.slice(0, 3).map((req, index) => (
              <li key={index} className="flex items-start">
                <span className="text-green-500 mr-2 flex-shrink-0">•</span>
                {req}
              </li>
            ))}
            {scholarship.eligibility.length > 3 && (
              <li className="text-blue-600 font-medium">
                +{scholarship.eligibility.length - 3} more requirements
              </li>
            )}
          </ul>
        </div>

        <div className="flex flex-col sm:flex-row gap-3">
          <Link
            to={`/scholarship/${scholarship.id}`}
            className="flex-1 bg-blue-700 hover:bg-blue-800 text-white px-4 py-3 rounded-lg font-semibold text-center transition-colors flex items-center justify-center space-x-2"
          >
            <Eye className="h-4 w-4" />
            <span>View Details</span>
          </Link>
          <a
            href={`mailto:${scholarship.contactEmail}?subject=Inquiry about ${scholarship.title}`}
            className="border border-gray-300 hover:border-gray-400 text-gray-700 hover:text-gray-900 px-4 py-3 rounded-lg font-semibold text-center transition-colors flex items-center justify-center space-x-2"
          >
            <Mail className="h-4 w-4" />
            <span>Contact</span>
          </a>
        </div>
      </div>
    </div>
  );
}