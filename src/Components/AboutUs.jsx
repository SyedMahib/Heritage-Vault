import React from "react";
import { FaGlobe, FaHistory, FaUsers, FaBook } from "react-icons/fa";
import preservation from "../assets/preservation.jpg";
import logo from "../assets/logo.png";

const AboutUs = () => {
  const teamMembers = [
    {
      id: 1,
      name: "Dr. Sarah Johnson",
      role: "Chief Archaeologist",
      bio: "Specializing in Near Eastern archaeology with 15 years of field experience.",
      image: "https://i.ibb.co/sDyKSJf/dr-sarah.jpg",
    },
    {
      id: 2,
      name: "Ahmed Al-Farsi",
      role: "Digital Preservation Specialist",
      bio: "Expert in 3D scanning and digital archiving of cultural artifacts.",
      image: "https://i.ibb.co/bg94Sw5D/Digital-Preservation-Specialist.webp",
    },
    {
      id: 3,
      name: "Maria Chen",
      role: "Historical Researcher",
      bio: "Focuses on contextualizing artifacts within their historical periods.",
      image: "https://i.ibb.co/7xfh8PvV/Historical-Researcher.jpg",
    },
    {
      id: 4,
      name: "Syed Mahib",
      role: "Web Developer",
      bio: "Built the digital platform to make our collection accessible worldwide.",
      image: "https://i.ibb.co/M5Zq0PCk/Mahib.jpg",
    },
  ];

  return (
    <div className="bg-[#f7f1e2] min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold text-[#3a2c1a] mb-6">
            About Heritage Vault
          </h1>
          <div className="w-24 h-1 bg-[#A37854] mx-auto mb-8"></div>
          <p className="text-xl text-[#5a4a3a] max-w-3xl mx-auto">
            Preserving humanity's shared heritage through digital innovation and
            scholarly research.
          </p>
        </div>

        {/* Mission Section */}
        <div className="mb-20">
          <div className="bg-white rounded-xl shadow-lg p-8 md:p-10">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8">
                <FaGlobe className="text-6xl text-[#A37854] mb-6" />
                <h2 className="text-3xl font-bold text-[#3a2c1a] mb-4">
                  Our Mission
                </h2>
                <p className="text-lg text-[#5a4a3a] mb-6">
                  To digitize, preserve, and make accessible the world's
                  cultural artifacts for education, research, and public
                  enjoyment.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-[#A37854] mr-2">•</span>
                    <span>
                      Create accurate digital records of cultural heritage
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#A37854] mr-2">•</span>
                    <span>Support academic research and public education</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#A37854] mr-2">•</span>
                    <span>
                      Promote cross-cultural understanding through shared
                      history
                    </span>
                  </li>
                </ul>
              </div>
              <div className="md:w-1/2">
                <img
                  src={preservation}
                  alt="Team working on artifact preservation"
                  className="rounded-lg shadow-md w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center text-[#3a2c1a] mb-12">
            Our Team
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member) => (
              <div
                key={member.id}
                className="bg-white rounded-xl shadow-lg overflow-hidden"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-[#3a2c1a] mb-1">
                    {member.name}
                  </h3>
                  <p className="text-[#A37854] font-medium mb-3">
                    {member.role}
                  </p>
                  <p className="text-[#5a4a3a]">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* History Section */}
        <div className="bg-white rounded-xl shadow-lg p-8 md:p-10 mb-20">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold text-[#3a2c1a] mb-6">
                Our Story
              </h2>
              <p className="text-[#5a4a3a] mb-6">
                Founded in 2015, Heritage Vault began as a university project to
                digitally preserve artifacts at risk from conflict and climate
                change. What started as a small database has grown into an
                internationally recognized resource used by researchers,
                educators, and history enthusiasts worldwide.
              </p>
              <p className="text-[#5a4a3a]">
                We partner with museums, archaeological teams, and cultural
                organizations to create high-quality digital records of
                artifacts, ensuring their preservation for future generations
                regardless of physical circumstances.
              </p>
            </div>
            <div>
              <img
                src={logo}
                alt="Heritage Vault founding team"
                className="rounded-lg shadow-md w-full h-auto"
              />
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-[#3a2c1a] mb-6">
            Join Our Mission
          </h2>
          <p className="text-xl text-[#5a4a3a] max-w-3xl mx-auto mb-8">
            Whether you're a researcher, educator, or simply passionate about
            cultural heritage, there are many ways to get involved.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-[#A37854] text-white px-8 py-3 rounded-md hover:bg-[#8a623e] transition-colors">
              Contact Us
            </button>
            <button className="border border-[#A37854] text-[#A37854] px-8 py-3 rounded-md hover:bg-[#f0e6d6] transition-colors">
              Volunteer
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
