
import React from 'react';

const Portfolio = () => {
  const portfolioItems = [
    {
      id: 1,
      title: "Modern Living Room",
      category: "Interior Design",
      image: "https://images.unsplash.com/photo-1721322800607-8c38375eef04?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 2,
      title: "Custom Dining Set",
      category: "Custom Furniture",
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 3,
      title: "Office Workspace",
      category: "Commercial Design",
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 4,
      title: "Modular Storage",
      category: "Custom Furniture",
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    }
  ];

  return (
    <section id="portfolio" className="py-20 bg-cream-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-charcoal-900 mb-4 font-playfair">
            Our <span className="text-charcoal-700">Portfolio</span>
          </h2>
          <p className="text-xl text-charcoal-600 max-w-2xl mx-auto leading-relaxed font-inter">
            Take a look at some of our recent projects and custom creations. 
            Each piece tells a unique story of craftsmanship and design.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {portfolioItems.map((item) => (
            <div key={item.id} className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-cream-300">
              <div className="aspect-[4/3] overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <h3 className="text-xl font-bold mb-2 font-playfair">{item.title}</h3>
                <p className="text-cream-200 font-inter">{item.category}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-charcoal-800 text-cream-100 px-8 py-3 rounded-lg font-semibold hover:bg-charcoal-900 transition-colors duration-300 shadow-lg font-inter">
            View All Projects
          </button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
