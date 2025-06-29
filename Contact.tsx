
import React from 'react';
import ContactHeader from './contact/ContactHeader';
import ContactInfo from './contact/ContactInfo';
import ContactForm from './contact/ContactForm';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-cream-100">
      <div className="container mx-auto px-4">
        <ContactHeader />

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <ContactInfo />
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default Contact;
