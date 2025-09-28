import React from 'react';

const Contact = ({ contact }) => {
  return (
    <section id="contact" className="py-20 border-t border-gray-700">
      <h2 className="text-4xl font-bold mb-6 text-center">Narahubung</h2>
      <div className="text-center">
        <p className="text-lg text-gray-300">Email: <a href={`mailto:${contact.email}`} className="text-blue-400 hover:text-blue-300">{contact.email}</a></p>
        <p className="text-lg text-gray-300">Telepon: {contact.phone}</p>
        <p className="text-lg text-gray-300">
          LinkedIn: <a href={contact.social.linkedin} className="text-blue-400 hover:text-blue-300">Profil LinkedIn</a>
        </p>
        <p className="text-lg text-gray-300">
          GitHub: <a href={contact.social.github} className="text-blue-400 hover:text-blue-300">Profil GitHub</a>
        </p>
      </div>
    </section>
  );
};

export default Contact;