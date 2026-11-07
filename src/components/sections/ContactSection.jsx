import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

const ContactSection = () => {
  const form = useRef();
  const [loading, setLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        'service_tjuetuy',     // ✅ সার্ভিস আইডি[cite: 9]
        'template_91dytsq',    // ✅ টেমপ্লেট আইডি[cite: 11]
        form.current,
        '5aHXR9T1uM3aZCy-U'    // ✅ আপনার পাবলিক কী[cite: 12]
      )
      .then(
        (result) => {
          alert('Message sent successfully! 🚀');
          e.target.reset();
          setLoading(false);
        },
        (error) => {
          alert('Failed to send message: ' + error.text);
          setLoading(false);
        }
      );
  };

  return (
    <section id="contact" className="py-16 flex flex-col items-center justify-center">
      <div className="w-full max-w-lg bg-[#18181b] text-white rounded-2xl shadow-xl p-8 border border-gray-800">
        <form ref={form} onSubmit={sendEmail} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">Name</label>
            <input
              type="text"
              name="user_name"
              required
              placeholder="Your name"
              className="w-full px-4 py-3 rounded-lg bg-[#27272a] text-white border border-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">Email</label>
            <input
              type="email"
              name="user_email"
              required
              placeholder="Your email address"
              className="w-full px-4 py-3 rounded-lg bg-[#27272a] text-white border border-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">Message</label>
            <textarea
              name="message"
              required
              rows="4"
              placeholder="Write your message..."
              className="w-full px-4 py-3 rounded-lg bg-[#27272a] text-white border border-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all resize-none"
            ></textarea>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-indigo-600 text-white font-semibold py-3 px-6 rounded-lg hover:bg-indigo-700 transition-colors shadow-md disabled:bg-gray-600 cursor-pointer"
          >
            {loading ? 'Sending...' : 'Send Message'}
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactSection;