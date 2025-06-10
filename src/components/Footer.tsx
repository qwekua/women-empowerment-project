import React from 'react';
import { Mail, Linkedin, Github, Heart } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-indigo-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="mb-8">
            <h3 className="text-3xl font-bold mb-2 bg-gradient-to-r from-purple-400 to-teal-400 bg-clip-text text-transparent">
              Enoch Acquah Adomanu
            </h3>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-teal-500 mx-auto rounded-full mb-6"></div>
            <p className="text-gray-300 text-lg mb-2">
              ENT 110: Introduction to Venture Creation
            </p>
            <p className="text-gray-400 flex items-center justify-center">
              Women Empowerment Initiative
              <Heart className="h-4 w-4 ml-2 text-red-400" />
            </p>
          </div>
          
          <div className="flex justify-center space-x-8 mb-12">
            <a 
              href="#" 
              className="p-4 bg-gradient-to-br from-gray-700 to-gray-600 rounded-2xl text-gray-300 hover:text-white hover:from-purple-600 hover:to-indigo-600 transition-all duration-300 hover:scale-110 shadow-lg"
            >
              <Mail className="h-6 w-6" />
            </a>
            <a 
              href="#" 
              className="p-4 bg-gradient-to-br from-gray-700 to-gray-600 rounded-2xl text-gray-300 hover:text-white hover:from-blue-600 hover:to-cyan-600 transition-all duration-300 hover:scale-110 shadow-lg"
            >
              <Linkedin className="h-6 w-6" />
            </a>
            <a 
              href="#" 
              className="p-4 bg-gradient-to-br from-gray-700 to-gray-600 rounded-2xl text-gray-300 hover:text-white hover:from-gray-600 hover:to-gray-500 transition-all duration-300 hover:scale-110 shadow-lg"
            >
              <Github className="h-6 w-6" />
            </a>
          </div>
          
          <div className="border-t border-gray-700 pt-8">
            <p className="text-gray-400 text-sm leading-relaxed max-w-2xl mx-auto">
              © 2024 Enoch Acquah Adomanu. This website showcases my entrepreneurial journey 
              for academic purposes as part of ENT 110 coursework. Built with passion for women empowerment.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;