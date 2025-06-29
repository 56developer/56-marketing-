import React from 'react';
import { Book, Circle, User } from 'lucide-react';

const Retailers = () => {
  const scrollToContactForm = () => {
    const element = document.getElementById('send-message');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-20 bg-charcoal-900 text-cream-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 font-playfair">
            For <span className="text-cream-300">Retailers</span>
          </h2>
          <p className="text-xl text-cream-200 max-w-2xl mx-auto leading-relaxed font-inter">
            Partner with us for bulk furniture orders and custom solutions for your retail space.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <div>
            <h3 className="text-3xl font-bold mb-6 text-cream-300 font-playfair">Bulk Custom Furniture</h3>
            <p className="text-lg text-cream-200 mb-8 leading-relaxed font-inter">
              We specialize in creating custom furniture solutions for shop owners and retailers. 
              Whether you need display units, seating, storage solutions, or complete store fixtures, 
              we deliver quality craftsmanship at competitive bulk pricing.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-cream-300 rounded-full p-2 flex-shrink-0">
                  <Book className="text-charcoal-900" size={20} />
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-2 text-cream-100 font-playfair">Fully Customizable</h4>
                  <p className="text-cream-200 font-inter">Tailored designs to match your brand and space requirements.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-cream-300 rounded-full p-2 flex-shrink-0">
                  <Circle className="text-charcoal-900" size={20} />
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-2 text-cream-100 font-playfair">Bulk Pricing</h4>
                  <p className="text-cream-200 font-inter">Competitive rates for large orders and commercial projects.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-cream-300 rounded-full p-2 flex-shrink-0">
                  <User className="text-charcoal-900" size={20} />
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-2 text-cream-100 font-playfair">Dedicated Support</h4>
                  <p className="text-cream-200 font-inter">Personal project manager for seamless execution and delivery.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-cream-300 to-cream-400 rounded-2xl p-8 text-charcoal-900">
            <h3 className="text-2xl font-bold mb-6 font-playfair">Get a Bulk Quote</h3>
            <p className="mb-6 leading-relaxed font-inter">
              Ready to transform your retail space? Contact us for a custom quote 
              tailored to your specific needs and budget.
            </p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center gap-2">
                <Circle size={8} className="fill-current" />
                <span className="font-inter">Free consultation and space planning</span>
              </li>
              <li className="flex items-center gap-2">
                <Circle size={8} className="fill-current" />
                <span className="font-inter">3D visualization of your project</span>
              </li>
              <li className="flex items-center gap-2">
                <Circle size={8} className="fill-current" />
                <span className="font-inter">Flexible payment terms</span>
              </li>
              <li className="flex items-center gap-2">
                <Circle size={8} className="fill-current" />
                <span className="font-inter">Installation and setup support</span>
              </li>
            </ul>
            <button 
              onClick={scrollToContactForm}
              className="bg-charcoal-900 text-cream-100 px-6 py-3 rounded-lg font-semibold hover:bg-charcoal-800 transition-colors shadow-lg font-inter"
            >
              Request Bulk Quote
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Retailers;
