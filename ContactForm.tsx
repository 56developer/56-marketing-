
import React, { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for your inquiry! We will get back to you soon.');
  };

  return (
    <div className="bg-cream-200 rounded-2xl p-8 border border-cream-300" id="send-message">
      <h3 className="text-2xl font-bold text-charcoal-900 mb-6 font-playfair">Send us a Message</h3>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-charcoal-800 mb-2 font-inter">
            Your Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            required
            className="w-full px-4 py-3 border border-cream-400 rounded-lg focus:ring-2 focus:ring-charcoal-600 focus:border-transparent transition-all font-inter bg-cream-50"
            placeholder="Enter your full name"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-charcoal-800 mb-2 font-inter">
            Email Address
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
            className="w-full px-4 py-3 border border-cream-400 rounded-lg focus:ring-2 focus:ring-charcoal-600 focus:border-transparent transition-all font-inter bg-cream-50"
            placeholder="Enter your email"
          />
        </div>

        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-charcoal-800 mb-2 font-inter">
            Phone Number
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            className="w-full px-4 py-3 border border-cream-400 rounded-lg focus:ring-2 focus:ring-charcoal-600 focus:border-transparent transition-all font-inter bg-cream-50"
            placeholder="Enter your phone number"
          />
        </div>

        <div>
          <label htmlFor="service" className="block text-sm font-medium text-charcoal-800 mb-2 font-inter">
            Service Interested In
          </label>
          <select
            id="service"
            name="service"
            value={formData.service}
            onChange={handleInputChange}
            className="w-full px-4 py-3 border border-cream-400 rounded-lg focus:ring-2 focus:ring-charcoal-600 focus:border-transparent transition-all font-inter bg-cream-50"
          >
            <option value="">Select a service</option>
            <option value="interior-design">Interior Design</option>
            <option value="custom-furniture">Custom Furniture</option>
            <option value="both">Both Services</option>
            <option value="bulk-order">Bulk Order</option>
          </select>
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-charcoal-800 mb-2 font-inter">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            rows={4}
            className="w-full px-4 py-3 border border-cream-400 rounded-lg focus:ring-2 focus:ring-charcoal-600 focus:border-transparent transition-all font-inter bg-cream-50"
            placeholder="Tell us about your project..."
          />
        </div>

        <button
          type="submit"
          className="w-full bg-charcoal-800 text-cream-100 py-3 rounded-lg font-semibold hover:bg-charcoal-900 transition-colors duration-300 shadow-lg hover:shadow-xl font-inter"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
