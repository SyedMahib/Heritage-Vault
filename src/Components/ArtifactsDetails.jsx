import React, { use, useEffect, useState } from "react";
import { CiHeart } from "react-icons/ci";
import { useLoaderData } from "react-router";
import { AuthContext } from "../Provider/AuthContext";
import Swal from "sweetalert2";
import { FaHeart } from "react-icons/fa";

const ArtifactsDetails = () => {
  const artifactData = useLoaderData();

  const {
    _id,
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
    adderEmail,
  } = artifactData;

  const { user } = use(AuthContext);

  const [likeCount, setLikeCount] = useState(artifactData.likeCount || 0);

  const [isLiked, setIsLiked] = useState(() => {
    return user.email && artifactData.likedByEmails?.includes(user.email);
  });

  useEffect(() => {
    setLikeCount(artifactData.likeCount || 0);
    setIsLiked(user.email && artifactData.likedByEmails?.includes(user.email));
  }, [user, artifactData]);

  const handleLike = () => {
    setIsLiked(!isLiked);
    fetch(`https://a-11-server-side-peach.vercel.app/artifacts/like/${_id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ userEmail: user.email }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          setLikeCount(data.newLikeCount);
          setIsLiked(data.action === "liked");
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: data.message,
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
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
          <h1 className="text-3xl font-bold text-[#1F1F1F]">{artifactName}</h1>
          <span className="inline-block mt-2 px-3 py-1 text-sm font-bold bg-[#4B6587] text-white rounded-full">
            {artifactType}
          </span>
        </div>
        <div className="flex items-center badge py-7 rounded-2xl bg-blue-100">
          <button
            onClick={handleLike}
            className="cursor-pointer"
          >
            {
              isLiked ? (
                <FaHeart size={20} color="red"/>
              ) : (
                <CiHeart size={25}/>
              )
            }
          </button>
          <span className="ml-2 text-base font-semibold">{likeCount}</span>
        </div>
      </div>

      <p className="text-[#5A5A5A] text-lg mb-6 font-medium">{shortDescription}</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-gray-600">
        <div>
          <h3 className="font-bold text-[#1F1F1F]">Historical Context</h3>
          <p className="mt-2 text-[#5A5A5A] font-medium">{historicalContext}</p>
        </div>

        <div>
          <h3 className="font-bold text-[#1F1F1F]">Artifact Details</h3>
          <ul className="mt-2 space-y-2">
            <li className="text-[#5A5A5A] font-medium">
              <strong>Created At:</strong> {createdAt}
            </li>
            <li className="text-[#5A5A5A] font-medium">
              <strong>Discovered At:</strong> {discoveredAt}
            </li>
            <li className="text-[#5A5A5A] font-medium">
              <strong>Discovered By:</strong> {discoveredBy}
            </li>
            <li className="text-[#5A5A5A] font-medium">
              <strong>Current Location:</strong> {presentLocation}
            </li>
          </ul>
        </div>

        <div className="md:col-span-2">
          <h3 className="font-bold text-[#1F1F1F]">Submitted By</h3>
          <ul className="mt-2 space-y-1">
            <li>
              <strong>Name:</strong> {addedBy}
            </li>
            <li>
              <strong>Email:</strong> {adderEmail}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ArtifactsDetails;
