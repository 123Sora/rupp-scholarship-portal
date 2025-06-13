import { Search, Award, Users, DollarSign } from 'lucide-react';
import rupplogo from '../assets/rupp.png';


interface HeroProps {
  onSearchClick: () => void;
}

export default function Hero({ onSearchClick }: HeroProps) {
  return (
    <section id="home" className="bg-gradient-to-br from-rupp-red via-red-700 to-rupp-blue text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center max-w-4xl mx-auto">
          <div className="flex justify-center mb-8">
            <img 
              src={rupplogo}
              alt="RUPP Logo" 
              className="h-28 w-28"
            />
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Royal University of Phnom Penh
            <span className="text-rupp-gold block">Scholarship Portal</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-red-100 leading-relaxed">
            Discover scholarship opportunities at Cambodia's premier university. 
            Excellence in education, research, and innovation since 1960.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <button
              onClick={onSearchClick}
              className="bg-rupp-gold hover:bg-yellow-600 text-rupp-dark px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              <Search className="h-5 w-5" />
              <span>Find Scholarships</span>
            </button>
            <a
              href="#scholarships"
              className="border-2 border-white text-white hover:bg-white hover:text-rupp-red px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Browse All Awards
            </a>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="flex items-center justify-center mb-4">
                <div className="bg-rupp-gold p-3 rounded-full">
                  <DollarSign className="h-6 w-6 text-rupp-dark" />
                </div>
              </div>
              <div className="text-3xl font-bold mb-2">$2.4M</div>
              <div className="text-red-200">Available Funding</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="flex items-center justify-center mb-4">
                <div className="bg-rupp-gold p-3 rounded-full">
                  <Award className="h-6 w-6 text-rupp-dark" />
                </div>
              </div>
              <div className="text-3xl font-bold mb-2">150+</div>
              <div className="text-red-200">Active Scholarships</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="flex items-center justify-center mb-4">
                <div className="bg-rupp-gold p-3 rounded-full">
                  <Users className="h-6 w-6 text-rupp-dark" />
                </div>
              </div>
              <div className="text-3xl font-bold mb-2">5,000+</div>
              <div className="text-red-200">Students Helped</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}