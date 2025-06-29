
import React from 'react';
import { Book, Image } from 'lucide-react';

const Services = () => {
  return (
    <section id="services" className="py-20 bg-cream-200">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-charcoal-900 mb-4 font-playfair">
            Our <span className="text-charcoal-700">Services</span>
          </h2>
          <p className="text-xl text-charcoal-600 max-w-2xl mx-auto leading-relaxed font-inter">
            We specialize in creating beautiful, functional spaces and custom furniture 
            tailored to your specific needs and style preferences.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Interior Design */}
          <div className="bg-cream-50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-cream-300">
            <div className="text-center mb-6">
              <div className="bg-cream-300 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Book className="text-charcoal-700" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-charcoal-900 mb-4 font-playfair">Interior Design</h3>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-charcoal-700 rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-charcoal-600 font-inter">Residential interior design for homes and apartments</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-charcoal-700 rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-charcoal-600 font-inter">Commercial office and workspace design</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-charcoal-700 rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-charcoal-600 font-inter">Space planning and layout optimization</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-charcoal-700 rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-charcoal-600 font-inter">Color consultation and material selection</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-charcoal-700 rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-charcoal-600 font-inter">Lighting design and fixture selection</p>
              </div>
            </div>
          </div>

          {/* Custom Furniture */}
          <div className="bg-cream-50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-cream-300">
            <div className="text-center mb-6">
              <div className="bg-charcoal-200 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Image className="text-charcoal-800" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-charcoal-900 mb-4 font-playfair">Custom Furniture</h3>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-charcoal-800 rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-charcoal-600 font-inter">Bespoke furniture design and manufacturing</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-charcoal-800 rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-charcoal-600 font-inter">Re-designable and modular furniture solutions</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-charcoal-800 rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-charcoal-600 font-inter">Individual pieces and complete furniture sets</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-charcoal-800 rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-charcoal-600 font-inter">Commercial furniture for shops and offices</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-charcoal-800 rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-charcoal-600 font-inter">Bulk orders with custom specifications</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
