import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router";

const FeaturedArtifacts = () => {
  const [featuredArtifacts, setFeaturedArtifacts] = useState([]);
  //   const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const featuredArtifactsData = () => {
    fetch("https://a-11-server-side-peach.vercel.app/artifacts/featured")
      .then((res) => res.json())
      .then((data) => {
        setFeaturedArtifacts(data);
      })
      .catch((err) => {
        setError(err.msg);
      });
  };

  useEffect(() => {
    featuredArtifactsData();
  }, []);

  if (error) {
    return <div className="text-center py-8 text-red-500">Error: {error}</div>;
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    hover: { scale: 1.03, boxShadow: "0 10px 20px rgba(0,0,0,0.2)" },
  };

  const imageVariants = {
    hover: { scale: 1.05 },
  };

  const overlayVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  return (
    <section className="container mx-auto px-2 md:px-4 py-12 mt-10">
      <h2 className="text-4xl md:text-5xl font-extrabold text-center text-gray-900 mb-12 relative">
        Featured Artifacts
        <span className="block w-24 h-1 bg-[#A37854] mx-auto mt-4 rounded-full"></span>
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {featuredArtifacts.map((artifact) => (
          <motion.div
            key={artifact._id}
            className="bg-white rounded-xl shadow-lg overflow-hidden border border-[#A37854] relative flex flex-col"
            whileHover="hover"
            variants={cardVariants}
          >
            <div className="relative overflow-hidden">
              {" "}
              {/* New wrapper for image and overlay */}
              <motion.img
                src={artifact.artifactImage}
                alt={artifact.artifactName}
                className="w-full h-60 object-cover"
                variants={imageVariants}
                transition={{ duration: 0.3 }}
              />
              {/* The Overlay */}
              <motion.div
                className="absolute inset-0 bg-black bg- flex items-center justify-center p-4 text-white text-center"
                variants={overlayVariants}
                initial="hidden"
                animate="hidden"
                whileHover="visible"
                transition={{ duration: 0.3 }}
              >
                <div>
                  <h4 className="text-lg font-bold mb-2">
                    {artifact.artifactName}
                  </h4>
                  <p className="text-sm line-clamp-3">
                    {artifact.historicalContext}
                  </p>
                </div>
              </motion.div>
            </div>

            <div className="p-6 flex flex-col flex-grow justify-between">
              <h3 className="text-2xl font-bold text-[#1F1F1F] mb-2 truncate">
                {artifact.artifactName}
              </h3>
              <p className="text-[#5A5A5A] text-sm font-medium mb-4 line-clamp-3">
                {artifact.shortDescription}
              </p>
              <div className="flex items-center justify-between mb-4">
                <span className="text-blue-600 font-semibold text-lg flex items-center">
                  ❤️{" "}
                  <span className="ml-1">{artifact.likeCount || 0} Likes</span>
                </span>
                <span className="text-white text-sm badge bg-[#4B6587] font-bold rounded-full">
                  {artifact.artifactType}
                </span>
              </div>
              <Link to={`/artifacts/${artifact._id}`}>
                <motion.button
                  className="w-full bg-[#A37854] text-white py-3 rounded-lg font-semibold hover:bg-[#8a623e] transition-colors mt-4"
                  whileTap={{ scale: 0.95 }}
                >
                  View Details
                </motion.button>
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedArtifacts;
