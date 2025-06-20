import React from "react";
import FeaturedArtifacts from "../Components/FeaturedArtifacts";
import Banner from "../Components/Banner";
import Testimonials from "../Components/Testimonials";
import Counter from "../Components/Counter";

const Home = () => {
  return (
    <div className="bg-[#f7f1e2]">
      <header>
        <Banner></Banner>
      </header>
      <main>
        <FeaturedArtifacts></FeaturedArtifacts>
        <Testimonials></Testimonials>
        <Counter></Counter>
      </main>
    </div>
  );
};

export default Home;
