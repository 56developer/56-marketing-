
import React from 'react';
import { Users, Book, Circle, User } from 'lucide-react';

const WhyChooseUs = () => {
  const features = [
    {
      icon: User,
      title: "Custom Approach",
      description: "Every design is tailored to your personality, lifestyle, and specific requirements."
    },
    {
      icon: Book,
      title: "Quality Materials",
      description: "We use only the finest materials and work with trusted suppliers for lasting results."
    },
    {
      icon: Circle,
      title: "Affordable Pricing",
      description: "Competitive rates without compromising on quality or service excellence."
    },
    {
      icon: Users,
      title: "Expert Team",
      description: "Skilled designers and craftsmen with passion for creating exceptional spaces."
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-cream-200 to-cream-300">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-charcoal-900 mb-4 font-playfair">
            Why Choose <span className="text-charcoal-700">Us?</span>
          </h2>
          <p className="text-xl text-charcoal-600 max-w-2xl mx-auto leading-relaxed font-inter">
            We combine creativity, quality, and affordability to deliver spaces 
            that exceed your expectations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <div key={index} className="bg-cream-50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 text-center border border-cream-300">
              <div className="bg-cream-300 rounded-full p-4 w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                <feature.icon className="text-charcoal-700" size={32} />
              </div>
              <h3 className="text-xl font-bold text-charcoal-900 mb-4 font-playfair">{feature.title}</h3>
              <p className="text-charcoal-600 leading-relaxed font-inter">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-cream-50 rounded-2xl p-8 shadow-lg max-w-4xl mx-auto border border-cream-300">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-charcoal-900 mb-4 font-playfair">Our Promise to You</h3>
            <p className="text-charcoal-600 text-lg leading-relaxed font-inter">
              From the initial consultation to the final installation, we ensure every detail 
              is perfect. Your satisfaction is our priority, and we stand behind our work 
              with comprehensive support and warranties.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
