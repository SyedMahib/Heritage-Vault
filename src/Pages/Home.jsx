import React from "react";
import FeaturedArtifacts from "../Components/FeaturedArtifacts";
import Banner from "../Components/Banner";
import Testimonials from "../Components/Testimonials";
import Counter from "../Components/Counter";
import Gallery from "../Components/Gallery";

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
        <Gallery></Gallery>
      </main>
    </div>
  );
};

export default Home;
