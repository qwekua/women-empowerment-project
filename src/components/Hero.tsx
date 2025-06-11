import React from 'react';
import { Heart, Target, Users, ArrowDown } from 'lucide-react';

const Hero: React.FC = () => {
  const scrollToNext = () => {
    const element = document.getElementById('journey');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen pt-16 bg-gradient-to-br from-indigo-50 via-white to-purple-50 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-purple-200/30 to-indigo-200/30 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-teal-200/30 to-purple-200/30 rounded-full blur-3xl"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          {/* Icon cluster */}
          <div className="flex justify-center mb-8">
            <div className="flex items-center space-x-6">
              <div className="p-4 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-2xl shadow-lg transform rotate-3 hover:rotate-6 transition-transform duration-300">
                <Heart className="h-8 w-8 text-white" />
              </div>
              <div className="p-4 bg-gradient-to-br from-teal-500 to-cyan-600 rounded-2xl shadow-lg transform -rotate-3 hover:-rotate-6 transition-transform duration-300">
                <Target className="h-8 w-8 text-white" />
              </div>
              <div className="p-4 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl shadow-lg transform rotate-2 hover:rotate-6 transition-transform duration-300">
                <Users className="h-8 w-8 text-white" />
              </div>
            </div>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-8 leading-tight">
            Empowering Women for a
            <span className="block bg-gradient-to-r from-purple-600 via-indigo-600 to-teal-600 bg-clip-text text-transparent">
              Brighter Future
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto font-light">
            My Entrepreneurial Journey to Promote Women Empowerment
          </p>
          
          {/* Enhanced intro card */}
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl p-8 md:p-12 max-w-5xl mx-auto border border-white/20 mb-16">
            <div className="flex items-start space-x-4 mb-6">
              <div className="w-1 h-16 bg-gradient-to-b from-purple-500 to-teal-500 rounded-full"></div>
              <div className="text-left">
                <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                  I'm <span className="font-bold bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">Enock Acquah Adomanu</span>. 
                  This is my personal website for <span className="font-semibold text-indigo-700">ENT 110: Introduction to Venture Creation</span>. 
                  It showcases my entrepreneurial journey addressing the Grand Challenge of Women Empowerment 
                  through research, solution design, and prototyping.
                </p>
              </div>
            </div>
          </div>

          {/* Scroll indicator */}
          <button 
            onClick={scrollToNext}
            className="inline-flex items-center space-x-2 text-gray-600 hover:text-purple-600 transition-colors group"
          >
            <span className="text-sm font-medium">Explore My Journey</span>
            <ArrowDown className="h-5 w-5 group-hover:translate-y-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;