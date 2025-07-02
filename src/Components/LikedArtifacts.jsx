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
      .get(`/artifacts/likedByUser?email=${user?.email}`)
      .then((res) => {
        setLikedArtifacts(res.data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [user?.email, axiosSecure]);

  if (loading) {
    return (
      <div className="text-center p-5 text-lg">
        <Loader />
      </div>
    );
  }

  const handleViewClick = () => {
    window.scrollTo(0, 0);
  };

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

      <div className="overflow-x-auto">
        <table className="min-w-full bg-white rounded-lg overflow-hidden shadow-lg">
          <thead className="bg-[#A37854] text-white">
            <tr>
              <th className="py-3 px-4 text-left">Image</th>
              <th className="py-3 px-4 text-left">Title</th>
              <th className="py-3 px-4 text-left">Location Founded</th>
              <th className="py-3 px-4 text-left">Added By</th>
              <th className="py-3 px-4 text-left">Likes</th>
              <th className="py-3 px-4 text-left">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {likedArtifacts.map((artifact) => (
              <tr
                key={artifact._id}
                className="hover:bg-[#f7f1e2] transition-colors"
              >
                <td className="py-4 px-4">
                  {artifact.artifactImage && (
                    <img
                      src={artifact.artifactImage}
                      alt={artifact.artifactName}
                      className="w-16 h-16 object-cover rounded"
                    />
                  )}
                </td>
                <td className="py-4 px-4 font-medium text-gray-900">
                  {artifact.artifactName}
                </td>
                <td className="py-4 px-4 font-medium text-gray-900">
                  {artifact.foundingLocation}
                </td>
                <td className="py-4 px-4 text-gray-700">
                  {artifact.addedBy || "N/A"}
                </td>
                <td className="py-4 px-4 text-gray-700">
                  {artifact.likeCount || 0}
                </td>
                <td className="py-4 px-4">
                  <Link
                   onClick={handleViewClick}
                    to={`/artifacts/${artifact._id}`}
                    className="bg-[#A37854] hover:bg-[#8a623e] text-white font-medium py-2 px-5 rounded text-sm transition-all duration-300 ease-in-out hover:scale-105"
                  >
                    View
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default LikedArtifacts;
