
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-cream-200/95 backdrop-blur-sm z-50 shadow-sm border-b border-cream-300">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <img 
              src="/lovable-uploads/379db320-206b-4f18-9171-92b03e899970.png" 
              alt="Maa Sachchiyay Interior Solutions Logo" 
              className="h-12 w-auto"
            />
            <div className="text-2xl font-bold text-charcoal-900 font-playfair">
              <span className="text-charcoal-700">Maa Sachchiyay</span> Interior Solutions
            </div>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="#home" onClick={() => scrollToSection('home')} className="text-charcoal-700 hover:text-charcoal-900 transition-colors font-medium font-inter">Home</a>
            <a href="#about" onClick={() => scrollToSection('about')} className="text-charcoal-700 hover:text-charcoal-900 transition-colors font-medium font-inter">About</a>
            <a href="#services" onClick={() => scrollToSection('services')} className="text-charcoal-700 hover:text-charcoal-900 transition-colors font-medium font-inter">Services</a>
            <a href="#portfolio" onClick={() => scrollToSection('portfolio')} className="text-charcoal-700 hover:text-charcoal-900 transition-colors font-medium font-inter">Portfolio</a>
            <a href="#contact" onClick={() => scrollToSection('contact')} className="text-charcoal-700 hover:text-charcoal-900 transition-colors font-medium font-inter">Contact</a>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-charcoal-900"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-cream-300">
            <div className="flex flex-col space-y-4 pt-4">
              <a href="#home" onClick={() => scrollToSection('home')} className="text-charcoal-700 hover:text-charcoal-900 transition-colors font-medium font-inter">Home</a>
              <a href="#about" onClick={() => scrollToSection('about')} className="text-charcoal-700 hover:text-charcoal-900 transition-colors font-medium font-inter">About</a>
              <a href="#services" onClick={() => scrollToSection('services')} className="text-charcoal-700 hover:text-charcoal-900 transition-colors font-medium font-inter">Services</a>
              <a href="#portfolio" onClick={() => scrollToSection('portfolio')} className="text-charcoal-700 hover:text-charcoal-900 transition-colors font-medium font-inter">Portfolio</a>
              <a href="#contact" onClick={() => scrollToSection('contact')} className="text-charcoal-700 hover:text-charcoal-900 transition-colors font-medium font-inter">Contact</a>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
