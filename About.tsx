
import React from 'react';
import { Users, Book } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-cream-100">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-charcoal-900 mb-8 font-playfair">
            About <span className="text-charcoal-700">Maa Sachchiyay Interior Solutions</span>
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="text-left">
              <p className="text-lg text-charcoal-600 mb-6 leading-relaxed font-inter">
                We are a passionate team of interior designers and craftsmen dedicated to transforming spaces 
                into personalized havens that reflect each client's unique personality and lifestyle.
              </p>
              
              <p className="text-lg text-charcoal-600 mb-6 leading-relaxed font-inter">
                From cozy homes to dynamic offices, we believe every space tells a story. Our approach combines 
                creativity with functionality, ensuring that beauty never compromises practicality.
              </p>
              
              <div className="flex items-center gap-4 mb-4">
                <Users className="text-charcoal-700" size={24} />
                <span className="text-charcoal-800 font-medium font-inter">Dedicated Design Team</span>
              </div>
              
              <div className="flex items-center gap-4">
                <Book className="text-charcoal-700" size={24} />
                <span className="text-charcoal-800 font-medium font-inter">Custom-Focused Approach</span>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-to-br from-cream-200 to-cream-300 rounded-2xl p-8 shadow-lg">
                <div className="bg-cream-50 rounded-lg p-6 shadow-md border border-cream-300">
                  <h3 className="text-2xl font-bold text-charcoal-900 mb-4 font-playfair">Our Promise</h3>
                  <p className="text-charcoal-700 leading-relaxed font-inter">
                    Quality craftsmanship, personalized service, and designs that stand the test of time. 
                    Every project is a collaboration between your vision and our expertise.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
