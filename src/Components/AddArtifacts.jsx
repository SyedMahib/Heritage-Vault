import React, { use } from "react";
import { AuthContext } from "../Provider/AuthContext";
import Swal from "sweetalert2";
import { useNavigate } from "react-router";

const AddArtifacts = () => {
  const { user } = use(AuthContext);

  const navigate = useNavigate();

  const handleAddArtifacts = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const newArtifact = Object.fromEntries(formData.entries());

    // send it to db

    fetch("http://localhost:3000/artifacts", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newArtifact)
    })
    .then((res) => res.json())
    .then((data) => {
        if(data.insertedId){
            Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Artifacts added successfully !",
            showConfirmButton: false,
            timer: 1500,
          });
          navigate("/allArtifacts");
        }
    })
  };

  return (
    <div className="container mx-auto">
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
              //   value={formData.artifactName}
              //   onChange={handleChange}
              className="mt-1 w-full border rounded-md px-3 py-2"
              required
            />
          </div>

          <div>
            <label className="block font-medium text-gray-700">
              Artifact Image URL
            </label>
            <input
              type="url"
              name="artifactImage"
              //   value={formData.artifactImage}
              //   onChange={handleChange}
              className="mt-1 w-full border rounded-md px-3 py-2"
              required
            />
          </div>

          <div>
            <label className="block font-medium text-gray-700">
              Artifact Type
            </label>
            <select
              name="artifactType"
              //   value={formData.artifactType}
              //   onChange={handleChange}
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
              //   value={formData.createdAt}
              //   onChange={handleChange}
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
              //   value={formData.discoveredAt}
              //   onChange={handleChange}
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
              //   value={formData.discoveredBy}
              //   onChange={handleChange}
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
              //   value={formData.presentLocation}
              //   onChange={handleChange}
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
              //   value={formData.shortDescription}
              //   onChange={handleChange}
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
              //   value={formData.historicalContext}
              //   onChange={handleChange}
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
          className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition"
        >
          Add Artifact
        </button>
      </form>
    </div>
  );
};

export default AddArtifacts;
