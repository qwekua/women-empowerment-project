import React, { useState } from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Journey from './components/Journey';
import Solution from './components/Solution';
import Prototype from './components/Prototype';
import Reflection from './components/Reflection';
import Conclusion from './components/Conclusion';
import Footer from './components/Footer';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      <Navigation isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <Hero />
      <Journey />
      <Solution />
      <Prototype />
      <Reflection />
      <Conclusion />
      <Footer />
    </div>
  );
}

export default App;