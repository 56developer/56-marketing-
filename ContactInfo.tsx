
import React from 'react';
import { Phone, MessageCircle, User } from 'lucide-react';

const ContactInfo = () => {
  const handleWhatsAppClick = () => {
    const message = encodeURIComponent("Hi! I'm interested in your interior design and custom furniture services. Can we discuss my project?");
    window.open(`https://wa.me/919849964927?text=${message}`, '_blank');
  };

  const handlePhoneClick = () => {
    window.open('tel:+919849964927', '_self');
  };

  return (
    <div className="space-y-8">
      <div>
        <h3 className="text-2xl font-bold text-charcoal-900 mb-6 font-playfair">Get in Touch</h3>
        <p className="text-charcoal-600 text-lg mb-8 leading-relaxed font-inter">
          We're here to help you create the perfect space. Reach out to us 
          through any of the following methods:
        </p>
      </div>

      <div className="space-y-6">
        <div className="flex items-center gap-4">
          <div className="bg-cream-300 rounded-full p-3">
            <Phone className="text-charcoal-700" size={24} />
          </div>
          <div>
            <h4 className="font-semibold text-charcoal-900 font-playfair">Phone</h4>
            <button 
              onClick={handlePhoneClick}
              className="text-charcoal-600 font-inter hover:text-charcoal-800 transition-colors"
            >
              +91 98499 64927
            </button>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="bg-green-100 rounded-full p-3">
            <MessageCircle className="text-green-600" size={24} />
          </div>
          <div>
            <h4 className="font-semibold text-charcoal-900 font-playfair">WhatsApp</h4>
            <p className="text-charcoal-600 font-inter">Quick responses on WhatsApp</p>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="bg-charcoal-200 rounded-full p-3">
            <User className="text-charcoal-800" size={24} />
          </div>
          <div>
            <h4 className="font-semibold text-charcoal-900 font-playfair">Location</h4>
            <p className="text-charcoal-600 font-inter">Hyderabad, India</p>
          </div>
        </div>
      </div>

      <button 
        onClick={handleWhatsAppClick}
        className="bg-green-500 text-white px-8 py-4 rounded-lg font-semibold hover:bg-green-600 transition-colors duration-300 flex items-center gap-3 shadow-lg hover:shadow-xl font-inter"
      >
        <MessageCircle size={24} />
        Chat on WhatsApp
      </button>
    </div>
  );
};

export default ContactInfo;
