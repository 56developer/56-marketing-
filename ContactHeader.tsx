
import React from 'react';

const ContactHeader = () => {
  return (
    <div className="text-center mb-16">
      <div className="flex items-center justify-center gap-4 mb-4">
        <img 
          src="/lovable-uploads/379db320-206b-4f18-9171-92b03e899970.png" 
          alt="Maa Sachchiyay Interior Solutions Logo" 
          className="h-16 w-auto"
        />
        <h2 className="text-4xl md:text-5xl font-bold text-charcoal-900 font-playfair">
          Let's <span className="text-charcoal-700">Connect</span>
        </h2>
      </div>
      <p className="text-xl text-charcoal-600 max-w-2xl mx-auto leading-relaxed font-inter">
        Ready to transform your space? Get in touch for a free consultation 
        and let's bring your vision to life.
      </p>
    </div>
  );
};

export default ContactHeader;
