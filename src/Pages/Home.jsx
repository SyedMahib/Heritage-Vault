import React from "react";
import FeaturedArtifacts from "../Components/FeaturedArtifacts";
import Banner from "../Components/Banner";

const Home = () => {
  return (
    <div className="bg-[#f7f1e2]">
      <header>
        <Banner></Banner>
      </header>
      <main>
        <FeaturedArtifacts></FeaturedArtifacts>
      </main>
    </div>
  );
};

export default Home;
