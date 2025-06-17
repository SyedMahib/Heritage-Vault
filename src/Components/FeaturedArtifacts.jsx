import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router";


const FeaturedArtifacts = () => {
  const [featuredArtifacts, setFeaturedArtifacts] = useState([]);
  //   const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const featuredArtifactsData = () => {
    fetch("http://localhost:3000/artifacts/featured")
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

  return (
    <section className="container mx-auto px-4 py-12">
      <h2 className="text-4xl md:text-5xl font-extrabold text-center text-gray-900 mb-12 relative">
        Featured Artifacts
        <span className="block w-24 h-1 bg-blue-600 mx-auto mt-4 rounded-full"></span>
      </h2>

      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        initial="hidden"
        animate="visible"
        variants={{
          visible: {
            transition: {
              staggerChildren: 0.1, // Delay between each card's animation
            },
          },
        }}
      >
        {featuredArtifacts.map((artifact) => (
          <motion.div
            key={artifact._id}
            className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200"
            variants={cardVariants}
            whileHover="hover"
            viewport={{ once: true, amount: 0.3 }} // Animate when 30% of card is in view
          >
            <motion.img
              src={artifact.artifactImage}
              alt={artifact.artifactName}
              className="w-full h-60 object-cover"
              variants={imageVariants}
              transition={{ duration: 0.3 }}
            />
            <div className="p-6">
              <h3 className="text-2xl font-bold text-gray-800 mb-2 truncate">
                {artifact.artifactName}
              </h3>
              <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                {artifact.shortDescription}
              </p>
              <div className="flex items-center justify-between mb-4">
                <span className="text-blue-600 font-semibold text-lg flex items-center">
                  ❤️{" "}
                  <span className="ml-1">{artifact.likeCount || 0} Likes</span>
                </span>
                <span className="text-gray-500 text-sm">
                  {artifact.artifactType}
                </span>
              </div>
              <Link to={`/artifacts/${artifact._id}`}>
                <motion.button
                  className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                  whileTap={{ scale: 0.95 }}
                >
                  View Details
                </motion.button>
              </Link>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default FeaturedArtifacts;
