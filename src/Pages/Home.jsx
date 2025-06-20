import React from "react";
import FeaturedArtifacts from "../Components/FeaturedArtifacts";
import Banner from "../Components/Banner";
import Testimonials from "../Components/Testimonials";
import Counter from "../Components/Counter";
import Gallery from "../Components/Gallery";
import OurGoal from "../Components/OurGoal";

const Home = () => {
  return (
    <div className="bg-[#f7f1e2]">
      <header>
        <Banner></Banner>
      </header>
      <main>
        <FeaturedArtifacts></FeaturedArtifacts>
        <OurGoal></OurGoal>
        <Counter></Counter>
        <Gallery></Gallery>
        <Testimonials></Testimonials>
      </main>
    </div>
  );
};

export default Home;
