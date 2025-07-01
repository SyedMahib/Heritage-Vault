import React, { useEffect, useState } from "react";
import ArtifactsCard from "./ArtifactsCard";
import Loader from "./Loader";

const AllArtifacts = () => {
  const [allArtifacts, setAllArtifacts] = useState([]);
  const [displayedArtifacts, setDisplayedArtifacts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedLocation, setSelectedLocation] = useState("all");

  useEffect(() => {
    const fetchArtifacts = async () => {
      try {
        setLoading(true);
        setError(null);
        
        const url = `https://a-11-server-side-peach.vercel.app/artifacts`;
        const response = await fetch(url);
        
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
        
        const data = await response.json();
        setAllArtifacts(data);
        setDisplayedArtifacts(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchArtifacts();
  }, []);

  // User wil get unique locations for dropdown
  const uniqueLocations = ["all", ...new Set(allArtifacts.map(artifact => 
    artifact.foundingLocation.split(",")[0].trim()
  ))].filter(Boolean);


  useEffect(() => {
    let results = [...allArtifacts];
    
    // Applying location filter
    if (selectedLocation !== "all") {
      results = results.filter(artifact => 
        artifact.foundingLocation.toLowerCase().includes(selectedLocation.toLowerCase())
      );
    }
    
    // This is the search filter
    if (searchQuery) {
      results = results.filter(artifact =>
        artifact.artifactName.toLowerCase().includes(searchQuery.toLowerCase()) ||
        artifact.foundingLocation.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }
    
    setDisplayedArtifacts(results);
  }, [allArtifacts, searchQuery, selectedLocation]);

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleLocationChange = (e) => {
    setSelectedLocation(e.target.value);
  };


  if (loading) return <div className="text-center p-8 min-h-screen"><Loader /></div>;
  if (error) return <div className="text-center p-8 text-red-600">Error: {error}</div>;

  return (
    <div className="bg-[#f7f1e2] min-h-screen">
      <div className="container mx-auto px-4 py-8">
        {/* Title Section */}
        <div className="mb-8 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900">
            All Artifacts
          </h1>
          <span className="block w-16 sm:w-24 h-1 bg-[#A37854] mx-auto mt-4 rounded-full"></span>
        </div>

        {/* Filter Options */}
        <div className="mb-8">
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 w-full">

            {/* Search filter */}

            <div className="w-full sm:flex-1 max-w-2xl">
              <input
                type="text"
                placeholder="Search artifacts by name or location..."
                className="w-full p-3 border border-gray-300 bg-white rounded-md focus:outline-none focus:ring-1 focus:ring-[#A37854] text-sm sm:text-base shadow-sm"
                value={searchQuery}
                onChange={handleSearch}
              />
            </div>

            {/* Location Filter  */}

            <select
              value={selectedLocation}
              onChange={handleLocationChange}
              className="w-full sm:w-auto p-3 border border-gray-300 bg-white rounded-md focus:outline-none focus:ring-1 focus:ring-[#A37854] text-sm sm:text-base shadow-sm"
            >
              <option value="all">All Locations</option>
              {uniqueLocations.filter(loc => loc !== "all").map((location, index) => (
                <option key={index} value={location}>
                  {location}
                </option>
              ))}
            </select>
          </div>
        </div>


        {selectedLocation !== "all" && (
          <div className="mb-4 text-center">
            <p className="text-lg font-medium text-[#A37854]">
              Showing artifacts from: <span className="font-bold">{selectedLocation}</span>
            </p>
          </div>
        )}

        {/* Artifacts Grid */}
        {displayedArtifacts.length === 0 ? (
          <div className="text-center text-gray-600 text-lg py-16">
            {searchQuery ? (
              <p>No artifacts found matching "{searchQuery}"{selectedLocation !== "all" ? ` in ${selectedLocation}` : ""}.</p>
            ) : selectedLocation !== "all" ? (
              <p>No artifacts found from {selectedLocation}.</p>
            ) : (
              <p>No artifacts available.</p>
            )}
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {displayedArtifacts.map((artifact) => (
              <ArtifactsCard key={artifact._id} artifact={artifact} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default AllArtifacts;