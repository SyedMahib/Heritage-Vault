import AOS from "aos";
import { React, useEffect } from "react";
import "aos/dist/aos.css";
import Gif from "../assets/Gif.gif"
import { Link } from "react-router";
// import goal from "../assets/Goal.png"

const OurGoal = () => {
 useEffect(() => {
  AOS.init({
    duration: 800,
    once: false,
    offset: 200,
    anchorPlacement: "top-bottom",
  });
}, []);

  return (
    <section className="py-16 text-gray-800">
      <div className="max-w-6xl mx-auto px-4 md:flex md:items-center md:gap-10">
        {/* Optional Image or Illustration */}
        <div className="md:w-1/2 mb-8 md:mb-0" data-aos="fade-up"  data-aos-delay="700">
          <img
            src={Gif}
            alt="Artifact preservation"
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>

        {/* Text Content */}
        <div
          className="md:w-1/2 text-center md:text-left"
          data-aos="fade-up"
          data-aos-delay="700"
        >
          <h2 className="text-3xl md:text-5xl text-[#1F1F1F] font-bold mb-4">Our Goal</h2>
          <p className="text-lg mb-4 leading-relaxed text-[#5A5A5A] font-medium">
            At the heart of our mission is the commitment to preserve and
            document humanity's historical treasures. We aim to make rare
            artifacts accessible to researchers, educators, and curious minds
            worldwide.
          </p>
          <p className="text-lg mb-6 text-[#5A5A5A] font-medium">
            By combining technology with cultural heritage, we ensure that every
            artifact tells its story — protected, understood, and passed on to
            future generations.
          </p>

          {/* Bullet Points */}
          <ul className="list-disc list-inside mb-6 space-y-2 text-gray-700 font-medium">
            <li>We Preserve</li>
            <li>We Educate</li>
            <li>We Connect</li>
          </ul>

          {/* Call to Action Button */}
          <Link to={`/allArtifacts`}
            className="bg-[#A37854] hover:bg-[#8a623e] text-white font-semibold py-3 px-8 rounded transition-colors duration-300"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Explore the Collection
          </Link>
        </div>
      </div>
    </section>
  );
};

export default OurGoal;
