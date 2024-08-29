import React from 'react';

const ContactSection = () => {
  return (
    <section className="p-8 bg-gray-50 flex item-center justify-center">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start h-full">
        <div className="flex justify-center items-center">
          <iframe
            className="w-full h-[470px] border-0 rounded-lg shadow-md"
            src="https://lottie.host/embed/f29ebafa-11a1-487e-889b-2e7d0d8ad327/Xckm8xszs7.json"
            title="Contact Animation"
          ></iframe>
        </div>
        <div className="bg-white shadow-lg rounded-lg p-6">
          <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">Get in Touch</h1>
          <form
            id="contact-form"
            action="https://api.web3forms.com/submit"
            method="POST"
            className="grid grid-cols-1 gap-4"
          >
            <input type="hidden" name="access_key" value="ead77d98-db96-4573-8d49-cb3095684216" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="First Name"
                name="first_name"
                required
                className="p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-500"
              />
              <input
                type="text"
                placeholder="Last Name"
                name="last_name"
                required
                className="p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-500"
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="email"
                placeholder="Email Address"
                name="email"
                required
                className="p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-500"
              />
              <input
                type="tel"
                placeholder="Phone No."
                name="phone"
                required
                className="p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-500"
              />
            </div>
            <div className="col-span-1">
              <textarea
                name="message"
                cols="60"
                rows="6"
                placeholder="Message"
                required
                className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-500"
              ></textarea>
            </div>
            <div className="text-center">
              <input
                type="submit"
                value="Send"
                className="p-3 w-full bg-yellow-500 text-white rounded-md hover:bg-yellow-600 transition-all duration-300"
              />
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
