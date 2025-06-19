import React from 'react';

const Contact = () => {
  return (
    <div className="min-h-screen bg-[#b9b9b9] dark:bg-[#222222] flex items-center justify-center px-4 py-10">
      <div className="backdrop-blur-md bg-[#d1d1d1] dark:bg-[#000] border border-[#273f4f] rounded-2xl shadow-2xl p-10 w-full max-w-5xl">
        <h2 className="text-4xl font-bold dark:text-white text-[#273f4f] text-center mb-10">Get in Touch with <span className="text-red-400 dark:text-[#1dcd9f]">NeoElectronix</span></h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Info Section */}
          <div className="text-black dark:text-white space-y-6">
            <div>
              <h3 className="text-2xl font-semibold">Contact Info</h3>
              <p className="text-[#273f4f] dark:text-[#bebebe]">Have a question or need support? We're here to help you with your electronics journey.</p>
            </div>
            <div>
              <p><strong>📍 Address:</strong> 06 Khatima, Uttarakhand, India</p>
              <p><strong>📧 Email:</strong> NeoElectronix123@gmail.com</p>
              <p><strong>📞 Phone:</strong> +91 6396 096 431</p>
            </div>
          </div>

          {/* Form Section */}
          <form className="space-y-6">
            <div>
              <label className="block text-[#273f4f] dark:text-white mb-1">Your Name</label>
              <input type="text" placeholder="John Doe" className="w-full px-4 py-2 bg-white/20 border border-[#273f4f] text-white rounded-xl placeholder-[#8d8d8d]  focus:outline-none focus:ring-2 focus:ring-blue-500" />
            </div>
            <div>
              <label className="block text-[#273f4f] dark:text-white mb-1">Email Address</label>
              <input type="email" placeholder="john@example.com" className="w-full px-4 py-2 bg-white/20 border border-[#273f4f] text-white rounded-xl placeholder-[#8d8d8d]  focus:outline-none focus:ring-2 focus:ring-blue-500" />
            </div>
            <div>
              <label className="block text-[#273f4f] dark:text-white mb-1">Your Message</label>
              <textarea rows="4" placeholder="Type your message..." className="w-full px-4 py-2 bg-white/20 border border-[#273f4f] text-[#273f4f] dark:text-white rounded-xl placeholder-[#8d8d8d] focus:outline-none focus:ring-2 focus:ring-blue-500"></textarea>
            </div>
            <button type="submit" className="w-full bg-gradient-to-r from-red-500 to-purple-500 text-white font-semibold py-2 rounded-xl hover:opacity-90 transition-all duration-300">
              Send Message 🚀
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;