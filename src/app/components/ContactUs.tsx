"use client";

import { useState } from "react";

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  return (
    <section className="flex items-center justify-between py-16 px-4 bg-gray-100" id="contact">
      {/* Left Side - Earth GIF */}
      <div className="w-1/2">
        <img
          src="/earth.gif" // Replace with your Earth gif URL
          alt="Revolving Earth"
          className="w-full h-auto rounded-lg shadow-lg"
        />
      </div>

      {/* Right Side - Contact Form */}
      <div className="w-1/2 p-8 bg-white shadow-lg rounded-lg">
        <h2 className="text-3xl font-bold text-teal-800 mb-6 text-center">Contact Us</h2>
        <form>
          <div className="mb-4">
            <label htmlFor="name" className="block text-lg font-medium text-gray-700">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              placeholder="Enter your name"
              className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-400"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-lg font-medium text-gray-700">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              placeholder="Enter your email"
              className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-400"
              required
            />
          </div>
          <div className="mb-6">
            <label htmlFor="message" className="block text-lg font-medium text-gray-700">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              placeholder="Write your message"
              className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-400"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 bg-teal-600 text-white font-semibold rounded-lg hover:bg-teal-700 transition duration-300"
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  );
}
