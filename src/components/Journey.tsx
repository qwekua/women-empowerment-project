import React from 'react';
import { AlertTriangle, Users, TrendingDown, CheckCircle, Search, BarChart3 } from 'lucide-react';

const Journey: React.FC = () => {
  const painPoints = [
    "Limited digital and business education",
    "Cultural norms discouraging entrepreneurship", 
    "Lack of funding and market access"
  ];

  const validatedData = [
    "Survey with local women entrepreneurs",
    "PESTLE and empathy map insights showing widespread need"
  ];

  return (
    <section id="journey" className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-100 to-indigo-100 rounded-full px-6 py-2 mb-6">
            <Search className="h-5 w-5 text-purple-600" />
            <span className="text-purple-700 font-medium">Discovery Phase</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Entrepreneurial Journey
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Overview of my venture journey in the course, identifying challenges and opportunities 
            in women empowerment across Ghana.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {/* Problem Statement */}
          <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-2xl p-8 border border-red-100/50 shadow-lg hover:shadow-xl transition-shadow">
            <div className="flex items-center mb-6">
              <div className="p-3 bg-gradient-to-br from-red-500 to-orange-500 rounded-xl shadow-lg">
                <AlertTriangle className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-red-800 ml-4">Problem Statement</h3>
            </div>
            <p className="text-red-700 leading-relaxed text-lg">
              Many women in Ghana lack access to mentorship, digital literacy, and entrepreneurial 
              opportunities due to systemic barriers.
            </p>
          </div>

          {/* Pain Points */}
          <div className="bg-gradient-to-br from-orange-50 to-yellow-50 rounded-2xl p-8 border border-orange-100/50 shadow-lg hover:shadow-xl transition-shadow">
            <div className="flex items-center mb-6">
              <div className="p-3 bg-gradient-to-br from-orange-500 to-yellow-500 rounded-xl shadow-lg">
                <TrendingDown className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-orange-800 ml-4">Pain Points</h3>
            </div>
            <ul className="space-y-4">
              {painPoints.map((point, index) => (
                <li key={index} className="text-orange-700 flex items-start text-lg">
                  <div className="w-2 h-2 bg-gradient-to-r from-orange-400 to-yellow-400 rounded-full mt-3 mr-4 flex-shrink-0"></div>
                  {point}
                </li>
              ))}
            </ul>
          </div>

          {/* Validated Data */}
          <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8 border border-green-100/50 shadow-lg hover:shadow-xl transition-shadow">
            <div className="flex items-center mb-6">
              <div className="p-3 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl shadow-lg">
                <BarChart3 className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-green-800 ml-4">Validated Data</h3>
            </div>
            <ul className="space-y-4">
              {validatedData.map((data, index) => (
                <li key={index} className="text-green-700 flex items-start text-lg">
                  <CheckCircle className="w-6 h-6 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                  {data}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Journey Timeline */}
        <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 border border-gray-100">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Research Journey</h3>
          <div className="flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0 md:space-x-8">
            <div className="flex-1 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-indigo-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <Search className="h-8 w-8 text-white" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Problem Identification</h4>
              <p className="text-gray-600 text-sm">Identified systemic barriers facing women entrepreneurs</p>
            </div>
            <div className="hidden md:block w-12 h-0.5 bg-gradient-to-r from-purple-300 to-indigo-300"></div>
            <div className="flex-1 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">User Research</h4>
              <p className="text-gray-600 text-sm">Conducted surveys and empathy mapping with target users</p>
            </div>
            <div className="hidden md:block w-12 h-0.5 bg-gradient-to-r from-indigo-300 to-teal-300"></div>
            <div className="flex-1 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-teal-500 to-green-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <BarChart3 className="h-8 w-8 text-white" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Data Validation</h4>
              <p className="text-gray-600 text-sm">Analyzed findings and validated market opportunity</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Journey;