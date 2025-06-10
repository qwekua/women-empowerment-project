import React from 'react';
import { Zap, Code, RefreshCw, Image, Palette, Monitor, Smartphone } from 'lucide-react';

const Prototype: React.FC = () => {
  const milestones = [
    { 
      icon: Zap, 
      title: "Conducted empathy interviews", 
      description: "Gathered insights from 25+ women entrepreneurs",
      color: "from-yellow-500 to-orange-500"
    },
    { 
      icon: Code, 
      title: "Developed low-fidelity prototype", 
      description: "Created initial wireframes and user flows",
      color: "from-blue-500 to-indigo-500"
    },
    { 
      icon: RefreshCw, 
      title: "Iterated based on feedback", 
      description: "Refined design through multiple feedback cycles",
      color: "from-green-500 to-teal-500"
    }
  ];

  return (
    <section id="prototype" className="py-24 bg-gradient-to-b from-white to-indigo-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-indigo-100 to-purple-100 rounded-full px-6 py-2 mb-6">
            <Palette className="h-5 w-5 text-indigo-600" />
            <span className="text-indigo-700 font-medium">Design Phase</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Prototype</h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Development process and key milestones in creating our Digital Empowerment Hub prototype.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
          {/* Key Milestones */}
          <div>
            <h3 className="text-3xl font-bold text-gray-900 mb-10">Key Milestones</h3>
            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <div key={index} className="flex items-start group">
                  <div className={`flex-shrink-0 w-16 h-16 bg-gradient-to-br ${milestone.color} rounded-2xl flex items-center justify-center mr-6 shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110`}>
                    <milestone.icon className="h-8 w-8 text-white" />
                  </div>
                  <div className="pt-2">
                    <h4 className="text-xl font-bold text-gray-900 mb-2">{milestone.title}</h4>
                    <p className="text-gray-600 text-lg leading-relaxed">{milestone.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Prototype Visualization */}
          <div className="bg-gradient-to-br from-gray-50 to-indigo-50 rounded-3xl p-12 text-center border-2 border-dashed border-indigo-200 shadow-xl">
            <div className="mb-8">
              <Image className="h-24 w-24 text-indigo-400 mx-auto mb-6" />
              <h4 className="text-2xl font-bold text-gray-800 mb-3">Initial Diagram</h4>
              <p className="text-gray-600 text-lg">
                Placeholder for prototype image - add when site is generated
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-indigo-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Smartphone className="h-6 w-6 text-white" />
                </div>
                <div className="font-bold text-gray-900 mb-2">Mobile App</div>
                <div className="text-sm text-gray-600">User Interface Design</div>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-12 h-12 bg-gradient-to-br from-teal-500 to-cyan-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Monitor className="h-6 w-6 text-white" />
                </div>
                <div className="font-bold text-gray-900 mb-2">Web Platform</div>
                <div className="text-sm text-gray-600">Admin Dashboard</div>
              </div>
            </div>
          </div>
        </div>

        {/* Design Process */}
        <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 border border-gray-100">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Design Process</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-red-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                <span className="text-white font-bold text-2xl">1</span>
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">Research & Empathy</h4>
              <p className="text-gray-600">Understanding user needs through interviews and surveys</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                <span className="text-white font-bold text-2xl">2</span>
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">Ideation & Design</h4>
              <p className="text-gray-600">Creating wireframes and low-fidelity prototypes</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-teal-500 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                <span className="text-white font-bold text-2xl">3</span>
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">Test & Iterate</h4>
              <p className="text-gray-600">Gathering feedback and refining the solution</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Prototype;