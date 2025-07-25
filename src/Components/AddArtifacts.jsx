import React, { use } from "react";
import { AuthContext } from "../Provider/AuthContext";
import Swal from "sweetalert2";
import { useNavigate } from "react-router";
import axios from "axios";

const AddArtifacts = () => {
  const { user, axiosSecure } = use(AuthContext);

  const navigate = useNavigate();

  const handleAddArtifacts = async (e) => {
    e.preventDefault();
    const form = e.target;
    const imageFile = form.image.files[0];

    // Step 1: Upload image to ImgBB
    const formData = new FormData();
    formData.append("image", imageFile);

    let uploadedImageUrl = "";
    try {
      const res = await axios.post(
        `https://api.imgbb.com/1/upload?key=${
          import.meta.env.VITE_IMGBB_API_KEY
        }`,
        formData
      );
      uploadedImageUrl = res.data.data.url;
    } catch (err) {
      Swal.fire({
        icon: "error",
        title: "Image upload failed",
        text: err.message,
      });
      return;
    }

    // Step 2: Construct artifact object
    const newArtifact = {
      artifactName: form.artifactName.value,
      artifactImage: uploadedImageUrl,
      artifactType: form.artifactType.value,
      createdAt: form.createdAt.value,
      discoveredAt: form.discoveredAt.value,
      discoveredBy: form.discoveredBy.value,
      foundingLocation: form.foundingLocation.value,
      presentLocation: form.presentLocation.value,
      shortDescription: form.shortDescription.value,
      historicalContext: form.historicalContext.value,
      addedBy: user.displayName,
      adderEmail: user.email,
    };

    // Step 3: Send to backend
    axiosSecure
      .post("/Artifacts", newArtifact)
      .then((res) => {
        if (res.data.insertedId) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Artifacts added successfully!",
            showConfirmButton: false,
            timer: 1500,
          });
          navigate("/allArtifacts");
        }
      })
      .catch((err) => {
        Swal.fire({
          position: "top-end",
          icon: "error",
          title: `${err.message}`,
          showConfirmButton: false,
          timer: 1500,
        });
      });
  };

  return (
    <div className="container mx-auto mb-8">
      <form
        onSubmit={handleAddArtifacts}
        className="max-w-3xl mx-auto p-6 bg-white shadow-xl rounded-2xl mt-10 space-y-6"
      >
        <h2 className="text-2xl font-bold text-gray-800">Add New Artifact</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block font-medium text-gray-700">
              Artifact Name
            </label>
            <input
              type="text"
              name="artifactName"
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
              required
            />
          </div>

          <div>
            <label className="block font-medium text-gray-700">
              Artifact Type
            </label>
            <select
              name="artifactType"
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
          Add Artifact
        </button>
      </form>
    </div>
  );
};

export default AddArtifacts;
