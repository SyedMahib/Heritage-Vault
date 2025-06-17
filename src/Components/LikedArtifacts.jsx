import React, { use, useEffect, useState } from "react";
import { AuthContext } from "../Provider/AuthContext";

const LikedArtifacts = () => {
  const { user, axiosSecure } = use(AuthContext);
  const [likedArtifacts, setLikedArtifacts] = useState([]);
  const [loading, setLoading] = useState(true);
  //   const [error, setError] = useState(null);

  // console.log(likedArtifacts);

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
      <div className="text-center p-5 text-lg">Loading liked artifacts...</div>
    );
  }

  if (likedArtifacts.length === 0) {
    return (
      <div className="text-center p-5">
        <h2 className="text-xl font-semibold">No Liked Artifacts Yet!</h2>
        <p className="mt-2 text-gray-600">
          Go explore and like some amazing heritage artifacts to see them here.
        </p>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6 text-center">
        My Liked Artifacts
      </h1>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-300 rounded-lg shadow-md">
          <thead>
            <tr className="bg-gray-100 text-left text-gray-600 uppercase text-sm leading-normal">
              <th className="py-3 px-6 border-b border-gray-300">
                Artifact Name
              </th>
              <th className="py-3 px-6 border-b border-gray-300">
                Description
              </th>
              <th className="py-3 px-6 border-b border-gray-300">Likes</th>
              <th className="py-3 px-6 border-b border-gray-300">Added By</th>
              {/* Add more table headers as needed for other artifact properties */}
            </tr>
          </thead>
          <tbody className="text-gray-700 text-sm font-light">
            {likedArtifacts.map((artifact) => (
              <tr
                key={artifact._id}
                className="border-b border-gray-200 hover:bg-gray-50"
              >
                <td className="py-3 px-6 whitespace-nowrap">
                  {artifact.artifactName}
                </td>
                <td className="py-3 px-6">{artifact.shortDescription}</td>
                <td className="py-3 px-6">{artifact.likeCount || 0}</td>
                <td className="py-3 px-6">{artifact.addedBy || "N/A"}</td>
                {/* Add more table cells for other artifact properties */}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default LikedArtifacts;
