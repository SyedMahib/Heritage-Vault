import React from "react";
import { motion } from "framer-motion"; 
import { Link } from "react-router";

const ArtifactsCard = ({ artifact }) => {
  const cardVariants = {
    initial: { scale: 1 },
    hover: {
      scale: 1.05,
      boxShadow: "0 10px 20px rgba(0,0,0,0.15)", 
      transition: { duration: 0.3 }
    }
  };

  const imageVariants = {
    hover: {
      scale: 1.1, 
      filter: "brightness(0.8)", 
      transition: { duration: 0.3 }
    }
  };

  const handleDetailsClick = () => {
    window.scrollTo(0, 0);
  };

  return (
    <motion.div
      className="bg-white rounded-xl shadow-lg overflow-hidden border border-[#A37854] flex flex-col h-full"
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
        
        <motion.div
          className="absolute inset-0 bg-[#C8A97E] opacity-0"
          variants={{ hover: { opacity: 0.2 } }}
          transition={{ duration: 0.3 }}
        />
      </div>

      <div className="p-6 flex flex-col flex-grow">
        <h2 className="text-2xl font-bold text-[#1F1F1F] mb-2 truncate">
          {artifact.artifactName}
        </h2>
        <p className="text-[#5A5A5A] text-sm mb-4 line-clamp-3 flex-grow font-medium">
          {artifact.shortDescription}
        </p>

        <div className="mt-auto">
          <Link onClick={handleDetailsClick} to={`/artifacts/${artifact._id}`}>
            <motion.button
              className="w-full bg-[#A37854] text-white py-3 rounded-lg font-semibold hover:bg-[#8a623e] transition-colors"
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
