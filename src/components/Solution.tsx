import React from 'react';
import { Lightbulb, BookOpen, Users, DollarSign, ShoppingBag, MapPin, Handshake, Globe, Star, Zap } from 'lucide-react';

const Solution: React.FC = () => {
  const features = [
    { icon: BookOpen, title: "Online business and digital skills courses", color: "from-blue-500 to-indigo-500" },
    { icon: Users, title: "Mentorship matching", color: "from-purple-500 to-pink-500" },
    { icon: DollarSign, title: "Access to micro-loans via fintech partners", color: "from-green-500 to-emerald-500" },
    { icon: ShoppingBag, title: "Marketplace for women-made products", color: "from-orange-500 to-red-500" }
  ];

  const implementationSteps = [
    { icon: MapPin, title: "Pilot in Accra with 50 women", description: "Start with focused group in urban area" },
    { icon: Handshake, title: "Partner with NGOs and fintech companies", description: "Build strategic partnerships" },
    { icon: Globe, title: "Expand regionally", description: "Scale across Ghana and West Africa" }
  ];

  const usps = [
    { title: "All-in-one empowerment platform", description: "Complete ecosystem for women entrepreneurs" },
    { title: "Culturally tailored for Ghana", description: "Designed with local context and needs" },
    { title: "Scalable to other African markets", description: "Framework adaptable across regions" }
  ];

  return (
    <section id="solution" className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-yellow-100 to-orange-100 rounded-full px-6 py-2 mb-6">
            <Zap className="h-5 w-5 text-orange-600" />
            <span className="text-orange-700 font-medium">Innovation Phase</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Solution</h2>
        </div>

        {/* Solution Statement */}
        <div className="bg-gradient-to-r from-purple-600 via-indigo-600 to-teal-600 rounded-3xl p-1 mb-16 shadow-2xl">
          <div className="bg-white rounded-3xl p-8 md:p-12">
            <div className="flex items-start">
              <div className="p-4 bg-gradient-to-br from-purple-500 to-indigo-500 rounded-2xl shadow-lg mr-6">
                <Lightbulb className="h-8 w-8 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Solution Statement</h3>
                <p className="text-xl text-gray-700 leading-relaxed">
                  A Digital Empowerment Hub providing online training, mentorship, micro-loans, 
                  and an e-commerce platform for women entrepreneurs.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {/* Features */}
          <div className="bg-white rounded-3xl shadow-xl p-8 border border-gray-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Key Features</h3>
            <div className="space-y-6">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start group hover:transform hover:scale-105 transition-all duration-200">
                  <div className={`p-3 bg-gradient-to-br ${feature.color} rounded-xl shadow-lg mr-4 group-hover:shadow-xl transition-shadow`}>
                    <feature.icon className="h-6 w-6 text-white" />
                  </div>
                  <span className="text-gray-700 text-lg leading-relaxed pt-2">{feature.title}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Implementation Plan */}
          <div className="bg-white rounded-3xl shadow-xl p-8 border border-gray-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Implementation Plan</h3>
            <div className="space-y-6">
              {implementationSteps.map((step, index) => (
                <div key={index} className="group">
                  <div className="flex items-start mb-3">
                    <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-teal-500 to-cyan-500 rounded-full flex items-center justify-center mr-4 shadow-lg group-hover:shadow-xl transition-shadow">
                      <span className="text-white font-bold text-sm">{index + 1}</span>
                    </div>
                    <div className="flex items-center">
                      <step.icon className="h-6 w-6 text-teal-600 mr-3" />
                      <span className="text-gray-900 font-semibold text-lg">{step.title}</span>
                    </div>
                  </div>
                  <p className="text-gray-600 ml-14 text-sm">{step.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Unique Selling Points */}
          <div className="bg-white rounded-3xl shadow-xl p-8 border border-gray-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Unique Selling Points</h3>
            <div className="space-y-6">
              {usps.map((usp, index) => (
                <div key={index} className="group">
                  <div className="flex items-start mb-3">
                    <Star className="h-6 w-6 text-yellow-500 mr-4 mt-1 flex-shrink-0 group-hover:text-yellow-400 transition-colors" />
                    <div>
                      <h4 className="text-gray-900 font-semibold text-lg mb-1">{usp.title}</h4>
                      <p className="text-gray-600 text-sm">{usp.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Solution Architecture */}
        <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-3xl p-8 md:p-12 border border-indigo-100">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Platform Architecture</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow text-center">
                <div className={`w-16 h-16 bg-gradient-to-br ${feature.color} rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg`}>
                  <feature.icon className="h-8 w-8 text-white" />
                </div>
                <h4 className="font-semibold text-gray-900 text-sm leading-tight">{feature.title}</h4>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solution;