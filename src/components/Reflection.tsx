import React from 'react';
import { AlertCircle, Lightbulb, Settings, Brain } from 'lucide-react';

const Reflection: React.FC = () => {
  const challenges = [
    { title: "Reaching digitally excluded women", description: "Overcoming barriers to digital access" },
    { title: "Securing reliable partners", description: "Building trust with local organizations" },
    { title: "Designing for low-bandwidth environments", description: "Creating lightweight, accessible solutions" }
  ];

  const lessons = [
    { title: "Start with small pilot and iterate", description: "Test assumptions before scaling" },
    { title: "Build trust in the community", description: "Engage local leaders and influencers" },
    { title: "Simplify tech for maximum accessibility", description: "Prioritize usability over complexity" }
  ];

  const decisions = [
    { title: "Focus on mobile-first design", description: "Leveraging widespread mobile adoption" },
    { title: "Partner with trusted local organizations", description: "Building on existing community trust" }
  ];

  return (
    <section id="reflection" className="py-24 bg-gradient-to-b from-indigo-50 to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-100 to-pink-100 rounded-full px-6 py-2 mb-6">
            <Brain className="h-5 w-5 text-purple-600" />
            <span className="text-purple-700 font-medium">Learning Phase</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Reflection</h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Key insights, challenges, and learnings from the entrepreneurial journey.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {/* Challenges Faced */}
          <div className="bg-white rounded-3xl shadow-xl p-8 border border-gray-100 hover:shadow-2xl transition-shadow">
            <div className="flex items-center mb-8">
              <div className="p-4 bg-gradient-to-br from-red-500 to-pink-500 rounded-2xl shadow-lg">
                <AlertCircle className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 ml-4">Challenges Faced</h3>
            </div>
            <div className="space-y-6">
              {challenges.map((challenge, index) => (
                <div key={index} className="group">
                  <div className="flex items-start">
                    <div className="w-3 h-3 bg-gradient-to-r from-red-400 to-pink-400 rounded-full mt-2 mr-4 flex-shrink-0 group-hover:scale-125 transition-transform"></div>
                    <div>
                      <h4 className="text-gray-900 font-semibold mb-1">{challenge.title}</h4>
                      <p className="text-gray-600 text-sm">{challenge.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Lessons Learned */}
          <div className="bg-white rounded-3xl shadow-xl p-8 border border-gray-100 hover:shadow-2xl transition-shadow">
            <div className="flex items-center mb-8">
              <div className="p-4 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-2xl shadow-lg">
                <Lightbulb className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 ml-4">Lessons Learned</h3>
            </div>
            <div className="space-y-6">
              {lessons.map((lesson, index) => (
                <div key={index} className="group">
                  <div className="flex items-start">
                    <div className="w-3 h-3 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full mt-2 mr-4 flex-shrink-0 group-hover:scale-125 transition-transform"></div>
                    <div>
                      <h4 className="text-gray-900 font-semibold mb-1">{lesson.title}</h4>
                      <p className="text-gray-600 text-sm">{lesson.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Key Decisions */}
          <div className="bg-white rounded-3xl shadow-xl p-8 border border-gray-100 hover:shadow-2xl transition-shadow">
            <div className="flex items-center mb-8">
              <div className="p-4 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-2xl shadow-lg">
                <Settings className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 ml-4">Key Decisions</h3>
            </div>
            <div className="space-y-6">
              {decisions.map((decision, index) => (
                <div key={index} className="group">
                  <div className="flex items-start">
                    <div className="w-3 h-3 bg-gradient-to-r from-blue-400 to-indigo-400 rounded-full mt-2 mr-4 flex-shrink-0 group-hover:scale-125 transition-transform"></div>
                    <div>
                      <h4 className="text-gray-900 font-semibold mb-1">{decision.title}</h4>
                      <p className="text-gray-600 text-sm">{decision.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Reflection Summary */}
        <div className="bg-gradient-to-r from-purple-600 via-indigo-600 to-teal-600 rounded-3xl p-1 shadow-2xl">
          <div className="bg-white rounded-3xl p-8 md:p-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Key Takeaways</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-3">What Worked Well</h4>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-green-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Community-centered approach to research
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-green-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Iterative design process with user feedback
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-green-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Focus on mobile accessibility
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-3">Areas for Improvement</h4>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-orange-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Earlier engagement with potential partners
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-orange-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    More comprehensive market analysis
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-orange-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Deeper technical feasibility assessment
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reflection;