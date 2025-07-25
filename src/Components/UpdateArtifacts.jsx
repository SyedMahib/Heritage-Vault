import React, { use } from "react";
import { AuthContext } from "../Provider/AuthContext";
import { useLoaderData, useNavigate } from "react-router";
import Swal from "sweetalert2";
import axios from "axios";

const UpdateArtifacts = () => {
  const {
    _id,
    artifactName,
    artifactImage,
    artifactType,
    historicalContext,
    shortDescription,
    createdAt,
    discoveredAt,
    discoveredBy,
    presentLocation,
    foundingLocation,
  } = useLoaderData();

  const { user, axiosSecure } = use(AuthContext);

  const navigate = useNavigate();

  const handleUpdateArtifact = async (e) => {
    e.preventDefault();
    const form = e.target;
    const imageFile = form.image.files[0];

    // Upload to ImgBB
    const formData = new FormData();
    formData.append("image", imageFile);

    let uploadedImageUrl = artifactImage; // fallback to old image

    try {
      if (imageFile) {
        const res = await axios.post(
          `https://api.imgbb.com/1/upload?key=${
            import.meta.env.VITE_IMGBB_API_KEY
          }`,
          formData
        );
        uploadedImageUrl = res.data.data.url;
      }
    } catch (err) {
      Swal.fire({
        icon: "error",
        title: "Image upload failed",
        text: err.message,
      });
      return;
    }

    const UpdateArtifacts = {
      artifactName: form.artifactName.value,
      artifactImage: uploadedImageUrl,
      artifactType: form.artifactType.value,
      historicalContext: form.historicalContext.value,
      shortDescription: form.shortDescription.value,
      createdAt: form.createdAt.value,
      discoveredAt: form.discoveredAt.value,
      discoveredBy: form.discoveredBy.value,
      presentLocation: form.presentLocation.value,
      foundingLocation: form.foundingLocation.value,
      addedBy: user.displayName,
      adderEmail: user.email,
    };

    axiosSecure
      .put(`/artifacts/${_id}`, UpdateArtifacts)
      .then((res) => {
        if (res.data.modifiedCount) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Artifact updated successfully!",
            showCancelButton: false,
            timer: 1500,
          });
          navigate(`/artifacts/${_id}`);
        } else {
          Swal.fire({
            position: "top-end",
            icon: "info",
            title: "No changes detected for update.",
            showConfirmButton: true,
          });
        }
      })
      .catch((err) => {
        Swal.fire({
          position: "top-end",
          icon: "error",
          title: `${err.message}`,
          showCancelButton: false,
          timer: 2000,
        });
      });
  };

  return (
    <div className="container mx-auto mb-8">
      <form
        onSubmit={handleUpdateArtifact}
        className="max-w-3xl mx-auto p-6 bg-white shadow-xl rounded-2xl mt-10 space-y-6"
      >
        <h2 className="text-2xl font-bold text-gray-800">Update Artifact</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block font-medium text-gray-700">
              Artifact Name
            </label>
            <input
              type="text"
              name="artifactName"
              defaultValue={artifactName}
              className="mt-1 w-full border rounded-md px-3 py-2"
              required
            />
          </div>

          <div>
            <label className="block font-medium text-gray-700">
              Artifact Image URL
            </label>
            <input
              type="file"
              name="image"
              accept="image/*"
              className="file-input file-input-bordered w-full"
              // not required: allow fallback to old image
            />
          </div>

          <div>
            <label className="block font-medium text-gray-700">
              Artifact Type
            </label>
            <select
              name="artifactType"
              defaultValue={artifactType}
              className="mt-1 w-full border rounded-md px-3 py-2"
            >
              <option value="Tools">Tools</option>
              <option value="Weapons">Weapons</option>
              <option value="Documents">Documents</option>
              <option value="Writings">Writings</option>
              <option value="Others">Others</option>
            </select>
          </div>

          <div>
            <label className="block font-medium text-gray-700">
              Created At
            </label>
            <input
              type="text"
              defaultValue={createdAt}
              name="createdAt"
              placeholder="e.g. 100 BC"
              className="mt-1 w-full border rounded-md px-3 py-2"
              required
            />
          </div>

          <div>
            <label className="block font-medium text-gray-700">
              Discovered At
            </label>
            <input
              type="text"
              defaultValue={discoveredAt}
              name="discoveredAt"
              placeholder="e.g. 1799"
              className="mt-1 w-full border rounded-md px-3 py-2"
              required
            />
          </div>

          <div>
            <label className="block font-medium text-gray-700">
              Discovered By
            </label>
            <input
              type="text"
              defaultValue={discoveredBy}
              name="discoveredBy"
              className="mt-1 w-full border rounded-md px-3 py-2"
              required
            />
          </div>

          <div>
            <label className="block font-medium text-gray-700">
              Founded In
            </label>
            <input
              type="text"
              defaultValue={foundingLocation}
              name="foundingLocation"
              placeholder="e.g. Baghdad, Iraq"
              className="mt-1 w-full border rounded-md px-3 py-2"
              required
            />
          </div>

          <div className="md:col-span-2">
            <label className="block font-medium text-gray-700">
              Present Location
            </label>
            <input
              type="text"
              defaultValue={presentLocation}
              name="presentLocation"
              className="mt-1 w-full border rounded-md px-3 py-2"
              required
            />
          </div>

          <div className="md:col-span-2">
            <label className="block font-medium text-gray-700">
              Short Description
            </label>
            <textarea
              name="shortDescription"
              defaultValue={shortDescription}
              className="mt-1 w-full border rounded-md px-3 py-2"
              rows={2}
              required
            />
          </div>

          <div className="md:col-span-2">
            <label className="block font-medium text-gray-700">
              Historical Context
            </label>
            <textarea
              name="historicalContext"
              defaultValue={historicalContext}
              className="mt-1 w-full border rounded-md px-3 py-2"
              rows={3}
              required
            />
          </div>

          <div className="md:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block font-medium text-gray-700">
                Added By
              </label>
              <input
                type="text"
                name="addedBy"
                value={user.displayName}
                readOnly
                className="mt-1 w-full bg-gray-100 border rounded-md px-3 py-2"
              />
            </div>
            <div>
              <label className="block font-medium text-gray-700">
                Adder Email
              </label>
              <input
                type="email"
                name="adderEmail"
                value={user.email}
                readOnly
                className="mt-1 w-full bg-gray-100 border rounded-md px-3 py-2"
              />
            </div>
          </div>
        </div>

        <button
          type="submit"
          className="bg-[#A37854] text-white px-6 py-2 rounded-md hover:bg-[#8a623e] transition-all duration-300 ease-in-out hover:scale-105"
        >
          Update Artifact
        </button>
      </form>
    </div>
  );
};

export default UpdateArtifacts;
