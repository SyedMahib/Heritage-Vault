import React, { use, useEffect, useState } from "react";
import { AuthContext } from "../Provider/AuthContext";
import Swal from "sweetalert2";
import { Link } from "react-router";

const MyArtifacts = () => {
  const { user, axiosSecure } = use(AuthContext);

  const [myArtifacts, setMyArtifacts] = useState([]);

  useEffect(() => {
    axiosSecure
      .get(`/myArtifacts?email=${user.email}`)
      .then((res) => {
        setMyArtifacts(res.data);
      })
      .catch((err) => {
        Swal.fire({
          position: "top-end",
          icon: "error",
          title: `${err.message}`,
          showConfirmButton: false,
          timer: 2000,
        });
      });
  }, [user, axiosSecure]);

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/artifacts/${id}`).then((res) => {
          if (res.data.deletedCount) {
            Swal.fire({
              title: "Deleted!",
              text: "Your artifact has been deleted.",
              icon: "success",
            });

            setMyArtifacts((prevArtifacts) =>
              prevArtifacts.filter((artifact) => artifact._id !== id)
            );
          } else {
            Swal.fire({
              title: "Failed!",
              text: "Could not delete the artifact.",
              icon: "error",
            });
          }
        })
        .catch((err) => {
           Swal.fire({
                title: "Error!",
                text: `${err.message}`,
                icon: "error",
            });
        })
      }
    });
  };

  return (
    <div className="p-4 md:p-8 bg-gray-50 min-h-screen">
      <h2 className="text-4xl font-extrabold text-center text-gray-800 my-8 md:my-12 tracking-wide">
        My Posted Artifacts
      </h2>
      {myArtifacts.length === 0 ? (
        <p className="text-center text-xl text-gray-600 p-8 bg-white rounded-lg shadow-md mx-auto max-w-lg">
          You haven't posted any artifacts yet. Start by adding a new one!
        </p>
      ) : (
        <div className="container mx-auto overflow-x-auto shadow-lg rounded-lg border border-gray-200">
          <table className="min-w-full bg-white divide-y divide-gray-200">
            <thead className="bg-gradient-to-r from-stone-700 to-stone-900 text-white">
              <tr>
                <th className="py-3 px-6 text-left text-xs font-medium uppercase tracking-wider">
                  Name
                </th>
                <th className="py-3 px-6 text-left text-xs font-medium uppercase tracking-wider">
                  Type
                </th>
                <th className="py-3 px-6 text-left text-xs font-medium uppercase tracking-wider">
                  Created At
                </th>
                <th className="py-3 px-6 text-left text-xs font-medium uppercase tracking-wider">
                  Discovered By
                </th>
                <th className="py-3 px-6 text-left text-xs font-medium uppercase tracking-wider">
                  Present Location
                </th>
                <th className="py-3 px-6 text-center text-xs font-medium uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {myArtifacts.map((artifact, index) => (
                <tr
                  key={artifact._id}
                  className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}
                >
                  <td className="py-4 px-6 text-sm text-gray-800 font-medium">
                    {artifact.artifactName}
                  </td>
                  <td className="py-4 px-6 text-sm text-gray-600">
                    {artifact.artifactType}
                  </td>
                  <td className="py-4 px-6 text-sm text-gray-600">
                    {artifact.createdAt}
                  </td>
                  <td className="py-4 px-6 text-sm text-gray-600">
                    {artifact.discoveredBy}
                  </td>
                  <td className="py-4 px-6 text-sm text-gray-600">
                    {artifact.presentLocation}
                  </td>
                  <td className="py-4 px-6 text-center">
                    <Link
                      to={`/updateArtifacts/${artifact._id}`}
                      className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-amber-600 hover:bg-amber-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-500 mr-3 transition duration-150 ease-in-out"
                    >
                      Update
                    </Link>
                    <button
                      onClick={() => handleDelete(artifact._id)}
                      className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 transition duration-150 ease-in-out"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default MyArtifacts;
