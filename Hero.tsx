
import React from 'react';
import { ArrowDown } from 'lucide-react';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-cream-100 to-cream-200 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-32 h-32 border-2 border-charcoal-600 rotate-45"></div>
        <div className="absolute top-40 right-32 w-24 h-24 border-2 border-charcoal-500 rotate-12"></div>
        <div className="absolute bottom-32 left-32 w-40 h-40 border-2 border-charcoal-700 -rotate-12"></div>
      </div>

      <div className="container mx-auto px-4 text-center relative z-10 pt-20">
        <h1 className="text-5xl md:text-7xl font-bold text-charcoal-900 mb-6 leading-tight font-playfair">
          Your Space. <br />
          <span className="text-charcoal-700">Your Style.</span> <br />
          Our Craft.
        </h1>
        
        <p className="text-xl md:text-2xl text-charcoal-600 mb-8 max-w-3xl mx-auto leading-relaxed font-inter">
          We design interiors and furniture that are custom-made, functional, and beautiful.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <button 
            onClick={() => scrollToSection('portfolio')}
            className="bg-charcoal-800 text-cream-100 px-8 py-4 rounded-lg font-semibold hover:bg-charcoal-900 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 font-inter"
          >
            View Our Work
          </button>
          <button 
            onClick={() => scrollToSection('contact')}
            className="bg-cream-100 text-charcoal-800 px-8 py-4 rounded-lg font-semibold hover:bg-cream-50 transition-all duration-300 border-2 border-charcoal-800 shadow-lg hover:shadow-xl transform hover:-translate-y-1 font-inter"
          >
            Book Free Consultation
          </button>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="text-charcoal-400" size={32} />
        </div>
      </div>
    </section>
  );
};

export default Hero;
