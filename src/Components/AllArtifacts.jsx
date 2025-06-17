import React, { useEffect, useState } from "react";
import ArtifactsCard from "./ArtifactsCard";

const AllArtifacts = () => {
  const [allArtifacts, setAllArtifacts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState("");
  const [onSearch, setOnSearch] = useState(""); // To trigger fetch on button click/enter

  useEffect(() => {
    const fetchArtifacts = async () => {
      setLoading(true);
      setError(null);

      let url = `http://localhost:3000/artifacts`;
      if (onSearch) {
        url = `${url}?search=${encodeURIComponent(onSearch)}`;
      }
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      setAllArtifacts(data);

      setLoading(false);
    };

    fetchArtifacts();
  }, [onSearch]); // Re-fetch whenever triggerSearch changes

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    setOnSearch(search); // Update triggerSearch to re-run useEffect
  };

  if (loading) {
    return <div className="text-center p-8">Loading artifacts...</div>;
  }

  if (error) {
    return <div className="text-center p-8 text-red-600">Error: {error}</div>;
  }

  return (
    <div className="bg-[#E6D3B3]">
      <div className="container mx-auto p-4">
        <h1 className="text-4xl md:text-5xl font-extrabold text-center text-gray-900 mb-8 relative">
          All Artifacts
          <span className="block w-24 h-1 bg-blue-600 mx-auto mt-4 rounded-full"></span>
        </h1>

        <div className="flex justify-center mb-8">
          <form onSubmit={handleSearchSubmit} className="flex w-full max-w-md">
            <input
              type="text"
              placeholder="Search by Artifact Name..."
              className="flex-grow p-3 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={search}
              onChange={handleSearchChange}
            />
            <button
              type="submit"
              className="bg-blue-600 text-white px-6 py-3 rounded-r-md hover:bg-blue-700 transition-colors"
            >
              Search
            </button>
          </form>
        </div>

        {allArtifacts.length === 0 ? (
          <div className="text-center text-gray-600 text-lg">
            No artifacts found matching your search.
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-10">
            {allArtifacts.map((artifact) => (
              <ArtifactsCard
                key={artifact._id}
                artifact={artifact}
              ></ArtifactsCard>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default AllArtifacts;
