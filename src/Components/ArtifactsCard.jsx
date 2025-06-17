import React from "react";
import { motion } from "framer-motion"; // Assuming you have framer-motion installed for animations
import { Link } from "react-router";

const ArtifactsCard = ({ artifact }) => {
  const cardVariants = {
    initial: { scale: 1 },
    hover: {
      scale: 1.05,
      boxShadow: "0 10px 20px rgba(0,0,0,0.15)", // Subtle shadow for depth
      transition: { duration: 0.3 }
    }
  };

  const imageVariants = {
    hover: {
      scale: 1.1, // Slightly zoom in the image
      filter: "brightness(0.8)", // Darken the image slightly
      transition: { duration: 0.3 }
    }
  };

  return (
    <motion.div
      className="bg-[#E6D3B3] rounded-xl shadow-lg overflow-hidden border border-[#A37854] flex flex-col h-full"
      variants={cardVariants}
      whileHover="hover"
      initial="initial"
    >
      <div className="relative overflow-hidden">
        <motion.img
          src={artifact.artifactImage}
          alt={artifact.artifactName}
          className="w-full h-64 object-cover object-center"
          variants={imageVariants}
        />
        {/* Optional: Add an overlay on hover */}
        <motion.div
          className="absolute inset-0 bg-[#C8A97E] opacity-0"
          variants={{ hover: { opacity: 0.2 } }}
          transition={{ duration: 0.3 }}
        />
      </div>

      <div className="p-6 flex flex-col flex-grow">
        <h2 className="text-2xl font-bold text-[#66503F] mb-2 truncate">
          {artifact.artifactName}
        </h2>
        <p className="text-[#8E7E6F] text-sm mb-4 line-clamp-3 flex-grow">
          {artifact.shortDescription}
        </p>

        <div className="mt-auto"> {/* Pushes the button to the bottom */}
          <Link to={`/artifacts/${artifact._id}`}>
            <motion.button
              className="w-full bg-[#C8A97E] text-white py-3 rounded-lg font-semibold text-[#66503F] hover:bg-[#A37854] transition-colors"
              whileTap={{ scale: 0.95 }}
            >
              View Details
            </motion.button>
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default ArtifactsCard;
