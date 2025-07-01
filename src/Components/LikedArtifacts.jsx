import React, { use, useEffect, useState } from "react";
import { AuthContext } from "../Provider/AuthContext";
import { Link } from "react-router";
import Loader from "./Loader";

const LikedArtifacts = () => {
  const { user, axiosSecure } = use(AuthContext);
  const [likedArtifacts, setLikedArtifacts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    axiosSecure
      .get(`/artifacts/likedByUser?email=${user.email}`)
      .then((res) => {
        setLikedArtifacts(res.data);
        setLoading(false);
      });
  }, [user?.email, axiosSecure]);

  if (loading) {
    return (
      <div className="text-center p-5 text-lg">
        <Loader></Loader>
      </div>
    );
  }

  if (likedArtifacts.length === 0) {
    return (
      <div className="text-center p-5 min-h-[calc(100vh-295px)]">
        <h2 className="text-xl font-semibold min-h-screen">
          No Liked Artifacts Yet!
        </h2>
        <p className="mt-2 text-gray-600">
          Go explore and like some amazing heritage artifacts to see them here.
        </p>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-4 py-8 bg-[#f7f1e2] pb-[100px]">
      <h1 className="text-4xl md:text-5xl font-extrabold text-center text-gray-900 mb-12 relative">
        My Liked Artifacts
        <span className="block w-24 h-1 bg-[#A37854] mx-auto mt-4 rounded-full"></span>
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {likedArtifacts.map((artifact) => (
          <div
            key={artifact._id}
            className="bg-white rounded-xl shadow-lg overflow-hidden transition-transform transform hover:scale-105 duration-300 border border-[#A37854] mb-3 flex flex-col"
          >
            {artifact.artifactImage && (
              <img
                src={artifact.artifactImage}
                alt={artifact.artifactName}
                className="w-full h-48 object-cover"
              />
            )}

            {/* Card content wrapper */}
            <div className="p-6 flex flex-col flex-1">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                {artifact.artifactName}
              </h3>
              <p className="text-gray-700 mb-4 text-base line-clamp-3">
                {artifact.shortDescription}
              </p>

              <div className="space-y-2 text-gray-800 text-sm">
                <p>
                  <span className="font-semibold text-[#A37854]">Likes:</span>{" "}
                  {artifact.likeCount || 0}
                </p>
                <p>
                  <span className="font-semibold text-[#A37854]">
                    Added By:
                  </span>{" "}
                  {artifact.addedBy || "N/A"}
                </p>
              </div>

              {/* Push button to bottom */}
              <div className="mt-auto pt-6 text-right">
                <Link
                  to={`/artifacts/${artifact._id}`}
                  className="bg-[#A37854] hover:bg-[#8a623e] text-white font-bold py-2 px-4 rounded-full transition-colors duration-200"
                >
                  View Details
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LikedArtifacts;

// transition-transform transform hover:scale-105 duration-300
