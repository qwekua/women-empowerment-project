import React from 'react';
import { CheckCircle2, Rocket, TrendingUp, Target, Calendar, Users2 } from 'lucide-react';

const Conclusion: React.FC = () => {
  const currentStatus = [
    { text: "High-fidelity prototype completed", icon: CheckCircle2 },
    { text: "Initial NGO partnerships explored", icon: Users2 },
    { text: "Preparing for pilot launch in Q3", icon: Calendar }
  ];

  const futurePlans = [
    { text: "Launch Accra pilot", icon: Target },
    { text: "Gather user feedback and iterate", icon: TrendingUp },
    { text: "Seek additional funding and scale to rural areas", icon: Rocket }
  ];

  return (
    <section id="conclusion" className="py-24 bg-gradient-to-b from-purple-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-green-100 to-teal-100 rounded-full px-6 py-2 mb-6">
            <Rocket className="h-5 w-5 text-green-600" />
            <span className="text-green-700 font-medium">Launch Phase</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Conclusion</h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Current progress and roadmap for scaling the Digital Empowerment Hub across Ghana.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Current Prototype Status */}
          <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-3xl p-8 border border-green-100 shadow-xl hover:shadow-2xl transition-shadow">
            <div className="flex items-center mb-8">
              <div className="p-4 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl shadow-lg">
                <CheckCircle2 className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-green-800 ml-4">Current Prototype Status</h3>
            </div>
            <div className="space-y-6">
              {currentStatus.map((status, index) => (
                <div key={index} className="flex items-start group">
                  <div className="p-2 bg-green-100 rounded-xl mr-4 group-hover:bg-green-200 transition-colors">
                    <status.icon className="w-6 h-6 text-green-600" />
                  </div>
                  <span className="text-green-700 text-lg pt-1">{status.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Future Plans */}
          <div className="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-3xl p-8 border border-purple-100 shadow-xl hover:shadow-2xl transition-shadow">
            <div className="flex items-center mb-8">
              <div className="p-4 bg-gradient-to-br from-purple-500 to-indigo-500 rounded-2xl shadow-lg">
                <Rocket className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-purple-800 ml-4">Future Plans</h3>
            </div>
            <div className="space-y-6">
              {futurePlans.map((plan, index) => (
                <div key={index} className="flex items-start group">
                  <div className="p-2 bg-purple-100 rounded-xl mr-4 group-hover:bg-purple-200 transition-colors">
                    <plan.icon className="w-6 h-6 text-purple-600" />
                  </div>
                  <span className="text-purple-700 text-lg pt-1">{plan.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Impact Metrics */}
        <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 border border-gray-100 mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Expected Impact</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                <span className="text-white font-bold text-2xl">50+</span>
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Women Entrepreneurs</h4>
              <p className="text-gray-600">Initial pilot program participants</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-teal-500 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                <span className="text-white font-bold text-2xl">5+</span>
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Partner Organizations</h4>
              <p className="text-gray-600">NGOs and fintech collaborations</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                <span className="text-white font-bold text-2xl">3</span>
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Regions</h4>
              <p className="text-gray-600">Planned expansion areas</p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-indigo-600 to-teal-600 rounded-3xl transform rotate-1"></div>
          <div className="relative bg-gradient-to-r from-purple-600 via-indigo-600 to-teal-600 rounded-3xl p-8 md:p-12 text-white shadow-2xl">
            <div className="text-center">
              <h3 className="text-3xl font-bold mb-6">Ready to Make an Impact</h3>
              <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
                Join us in empowering women entrepreneurs across Ghana and beyond.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-purple-600 px-8 py-4 rounded-2xl font-bold hover:bg-gray-100 transition-all duration-300 hover:scale-105 shadow-lg">
                  Partner With Us
                </button>
                <button className="border-2 border-white text-white px-8 py-4 rounded-2xl font-bold hover:bg-white hover:text-purple-600 transition-all duration-300 hover:scale-105">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Conclusion;