import React, { useState } from "react";
import { FaPhone } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { MdAccessTimeFilled, MdEmail } from "react-icons/md";

const ContactUs = () => {
  const [submitStatus, setSubmitStatus] = useState(null);

  return (
    <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-5xl font-bold text-[#1F1F1F]">
          Contact Us
        </h2>
        <span className="block w-[200px] h-1 bg-[#A37854] mx-auto mt-4 rounded-full"></span>
        <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto">
          Have questions about our artifacts? Reach out to our team.
        </p>
      </div>


      {submitStatus === "success" && (
        <div className="mb-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded">
          Thank you! Your message has been sent successfully.
        </div>
      )}
      {submitStatus === "error" && (
        <div className="mb-6 p-4 bg-red-100 border border-red-400 text-red-700 rounded">
          Error submitting your message. Please try again later.
        </div>
      )}

      <div className="bg-white shadow-lg rounded-lg overflow-hidden border border-[#A37854]/20">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="p-8">

            {/* Main form section */}
            <form
              onSubmit={async (e) => {
                e.preventDefault();
                const form = e.target;
                try {
                  const status = await fetch(form.action, {
                    method: "POST",
                    body: new FormData(form),
                    headers: { Accept: "application/json" },
                  });
                  if (status.ok) {
                    setSubmitStatus("success");
                    form.reset();
                  } else {
                    throw new Error("Form submission failed");
                  }
                } catch (error) {
                  setSubmitStatus(error.message);
                }
              }}
              action="https://formspree.io/f/xbllpzgn"
              method="POST"
              className="space-y-6"
            >
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-[#A37854] focus:border-[#A37854]"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-[#A37854] focus:border-[#A37854]"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-gray-700"
                >
                  Subject
                </label>
                <select
                  id="subject"
                  name="subject"
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-[#A37854] focus:border-[#A37854]"
                >
                  <option>General Inquiry</option>
                  <option>Artifact Donation</option>
                  <option>Research Collaboration</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-[#A37854] focus:border-[#A37854]"
                  placeholder="Your message here..."
                ></textarea>
              </div>

              <div>
                <button
                  type="submit"
                  className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[#A37854] hover:bg-[#8a6a4a] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#A37854]"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>

          {/* Info section */}
          <div className="bg-[#F5F0E8] p-8 flex flex-col justify-center">
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="flex-shrink-0 bg-[#A37854] p-2 rounded-full">
                  <FaLocationDot />
                </div>
                <div className="ml-3">
                  <h3 className="text-sm font-medium text-gray-900">Address</h3>
                  <p className="text-sm text-gray-600">
                    123 Heritage Lane, Cairo
                  </p>
                </div>
              </div>

                <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="flex-shrink-0 bg-[#A37854] p-2 rounded-full">
                  <FaPhone />
                </div>
                </div>
                <div className="ml-3">
                  <h3 className="text-sm font-medium text-gray-900">Phone</h3>
                  <p className="text-sm text-gray-600">+8801310339171</p>
                </div>
              </div>

               <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="flex-shrink-0 bg-[#A37854] p-2 rounded-full">
                  <MdEmail />
                </div>
                </div>
                <div className="ml-3">
                  <h3 className="text-sm font-medium text-gray-900">Email</h3>
                  <p className="text-sm text-gray-600">contact@heritagevault.com</p>
                </div>
              </div>

               <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="flex-shrink-0 bg-[#A37854] p-2 rounded-full">
                  <MdAccessTimeFilled />
                </div>
                </div>
                <div className="ml-3">
                  <h3 className="text-sm font-medium text-gray-900">Hours</h3>
                  <p className="text-sm text-gray-600">Monday - Friday: 9AM - 5PM<br />Saturday: 10AM - 4PM<br />Sunday: Closed</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


export default ContactUs;
