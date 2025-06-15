import React, { useState } from "react";
import { CiHeart } from "react-icons/ci";
import { useLoaderData } from "react-router";

const ArtifactsDetails = () => {
  const [liked, setLiked] = useState(false);

  const {
    artifactImage,
    artifactName,
    artifactType,
    createdAt,
    discoveredAt,
    discoveredBy,
    historicalContext,
    presentLocation,
    shortDescription,
    addedBy,
    adderEmail
  } = useLoaderData();
//   console.log(artifact);

  const handleLike = () => {
    setLiked(!liked);
    // You can also send a POST request here to record the like
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-2xl shadow-lg my-10">
      <img
        src={artifactImage}
        alt={artifactName}
        className="w-full h-96 object-cover rounded-xl mb-6"
      />

      <div className="flex justify-between items-start mb-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-800">{artifactName}</h1>
          <span className="inline-block mt-2 px-3 py-1 text-sm font-bold bg-blue-100 text-blue-700 rounded-full">
            {artifactType}
          </span>
        </div>
        <button
          onClick={handleLike}
          className={`p-2 rounded-full transition-colors ${
            liked ? "bg-red-100 text-red-600" : "bg-gray-100 text-gray-500"
          }`}
        >
          <CiHeart fill={liked ? "currentColor" : "black"} size={25} />
        </button>
      </div>

      <p className="text-gray-700 text-lg mb-6">{shortDescription}</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-gray-600">
        <div>
          <h3 className="font-semibold text-gray-800">Historical Context</h3>
          <p className="mt-2">{historicalContext}</p>
        </div>

        <div>
          <h3 className="font-semibold text-gray-800">Artifact Details</h3>
          <ul className="mt-2 space-y-2">
            <li><strong>Created At:</strong> {createdAt}</li>
            <li><strong>Discovered At:</strong> {discoveredAt}</li>
            <li><strong>Discovered By:</strong> {discoveredBy}</li>
            <li><strong>Current Location:</strong> {presentLocation}</li>
          </ul>
        </div>

        <div className="md:col-span-2">
          <h3 className="font-semibold text-gray-800">Submitted By</h3>
          <ul className="mt-2 space-y-1">
            <li><strong>Name:</strong> {addedBy}</li>
            <li><strong>Email:</strong> {adderEmail}</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ArtifactsDetails;
