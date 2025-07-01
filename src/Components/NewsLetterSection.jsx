import React, { useState } from "react";
import Swal from "sweetalert2";

const NewsLetterSection = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Subscribing email:", email);
    Swal.fire({
      title: "Subscribed Successfully!",
      icon: "success",
      draggable: true,
    });
    setEmail("");
  };

  return (
    <section className="bg-[#f7f1e2] py-16 md:px-8">
      {" "}
      
      <div className="container mx-auto text-center max-w-7xl p-10">
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
          Newsletter For More Subscribe
        </h2>
        <p className="text-base md:text-lg text-gray-700 mb-8 max-w-xl mx-auto">
          Be the first to know! Sign up for updates and special offers. Get
          early access to product launches, event news, and new features.
        </p>

        <form
          onSubmit={handleSubmit}
          className="flex flex-col sm:flex-row justify-center items-center gap-4"
        >
          <input
            type="email"
            placeholder="Email"
            className="w-full sm:w-2/3 md:w-1/2 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#A37854] bg-white text-gray-800"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button
            type="submit"
            className="w-full sm:w-auto bg-[#A37854] hover:bg-[#8a623e] text-white font-bold py-3 px-6 rounded-md transition-all duration-300 ease-in-out hover:scale-105 shadow-md"
          >
            Subscribe Now
          </button>
        </form>
      </div>
    </section>
  );
};

export default NewsLetterSection;
