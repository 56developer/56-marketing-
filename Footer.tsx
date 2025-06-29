
import React from 'react';
import { MessageCircle, Phone, User } from 'lucide-react';

const Footer = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handlePhoneClick = () => {
    window.open('tel:+919849964927', '_self');
  };

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent("Hi! I'm interested in your interior design and custom furniture services.");
    window.open(`https://wa.me/919849964927?text=${message}`, '_blank');
  };

  return (
    <footer className="bg-charcoal-900 text-cream-100 py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <div className="text-2xl font-bold mb-4 font-playfair">
              <span className="text-cream-300">Maa Sachchiyay</span> Interior Solutions
            </div>
            <p className="text-cream-200 mb-6 leading-relaxed font-inter">
              Creating beautiful, functional spaces and custom furniture. 
              Your vision, our craftsmanship - together we build dreams.
            </p>
            <div className="flex space-x-4">
              <button 
                onClick={handleWhatsAppClick}
                className="bg-cream-300 hover:bg-cream-400 p-3 rounded-full transition-colors"
              >
                <MessageCircle size={20} className="text-charcoal-900" />
              </button>
              <button 
                onClick={handlePhoneClick}
                className="bg-charcoal-600 hover:bg-charcoal-500 p-3 rounded-full transition-colors"
              >
                <Phone size={20} />
              </button>
              <a href="#" className="bg-charcoal-600 hover:bg-charcoal-500 p-3 rounded-full transition-colors">
                <User size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-cream-300 font-playfair">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#home" onClick={() => scrollToSection('home')} className="text-cream-200 hover:text-cream-300 transition-colors font-inter">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" onClick={() => scrollToSection('about')} className="text-cream-200 hover:text-cream-300 transition-colors font-inter">
                  About
                </a>
              </li>
              <li>
                <a href="#services" onClick={() => scrollToSection('services')} className="text-cream-200 hover:text-cream-300 transition-colors font-inter">
                  Services
                </a>
              </li>
              <li>
                <a href="#portfolio" onClick={() => scrollToSection('portfolio')} className="text-cream-200 hover:text-cream-300 transition-colors font-inter">
                  Portfolio
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-cream-300 font-playfair">Services</h3>
            <ul className="space-y-2">
              <li>
                <span className="text-cream-200 font-inter">Interior Design</span>
              </li>
              <li>
                <span className="text-cream-200 font-inter">Custom Furniture</span>
              </li>
              <li>
                <span className="text-cream-200 font-inter">Commercial Design</span>
              </li>
              <li>
                <span className="text-cream-200 font-inter">Bulk Orders</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-charcoal-600 mt-8 pt-8 text-center">
          <p className="text-cream-300 font-inter">
            © 2024 Maa Sachchiyay Interior Solutions. All rights reserved. | Crafted with passion in Hyderabad, India
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
