import React, { useState } from 'react';
import SectionWrapper from './SectionWrapper';
import { SOCIALS, CONTACT_DETAILS } from '../constants';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // In a real app, you would handle form submission here (e.g., send to an API endpoint)
    setStatus('Message sent successfully! (Demo)');
    setFormData({ name: '', email: '', message: '' });
    setTimeout(() => setStatus(''), 5000);
  };

  return (
    <SectionWrapper id="contact" title="Get in Touch" subtitle="Let's Connect and Collaborate">
      <div className="grid md:grid-cols-2 gap-12">
        <div className="bg-gray-800 p-8 rounded-lg">
          <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
          <p className="text-gray-400 mb-8">
            Have a project in mind or just want to say hi? Feel free to reach out. I'm always open to discussing new ideas and opportunities.
          </p>
          <div className="space-y-6">
            {CONTACT_DETAILS.map((detail, index) => (
              <div key={index} className="flex items-center gap-4">
                <div className="flex-shrink-0">{detail.icon}</div>
                <p className="text-gray-300">{detail.text}</p>
              </div>
            ))}
          </div>
          <h4 className="text-xl font-semibold text-white mt-10 mb-4">Follow Me</h4>
          <div className="flex space-x-4">
            {SOCIALS.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.name}
                className="text-gray-400 hover:text-teal-400 transition-colors duration-300 p-3 rounded-full bg-gray-700 hover:bg-gray-600"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
        <div className="bg-gray-800 p-8 rounded-lg">
          <h3 className="text-2xl font-bold text-white mb-6">Send Me a Message</h3>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="sr-only">Name</label>
              <input type="text" name="name" id="name" placeholder="Your Name" value={formData.name} onChange={handleChange} required className="w-full bg-gray-700 text-white border border-gray-600 rounded-md p-3 focus:ring-teal-400 focus:border-teal-400 transition" />
            </div>
            <div>
              <label htmlFor="email" className="sr-only">Email</label>
              <input type="email" name="email" id="email" placeholder="Your Email" value={formData.email} onChange={handleChange} required className="w-full bg-gray-700 text-white border border-gray-600 rounded-md p-3 focus:ring-teal-400 focus:border-teal-400 transition" />
            </div>
            <div>
              <label htmlFor="message" className="sr-only">Message</label>
              <textarea name="message" id="message" rows={5} placeholder="Your Message" value={formData.message} onChange={handleChange} required className="w-full bg-gray-700 text-white border border-gray-600 rounded-md p-3 focus:ring-teal-400 focus:border-teal-400 transition"></textarea>
            </div>
            <div>
              <button type="submit" className="w-full px-6 py-3 bg-teal-400 text-gray-900 font-bold rounded-md hover:bg-teal-500 transition-colors duration-300 shadow-lg">
                Send Message
              </button>
            </div>
            {status && <p className="text-center text-teal-400 mt-4">{status}</p>}
          </form>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Contact;