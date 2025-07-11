import React from "react";
import FeaturedArtifacts from "../Components/FeaturedArtifacts";
import Banner from "../Components/Banner";
import Testimonials from "../Components/Testimonials";
import Counter from "../Components/Counter";
import Gallery from "../Components/Gallery";
import OurGoal from "../Components/OurGoal";
import NewsLetterSection from "../Components/NewsLetterSection";
import ArtifactMap from "../Components/ArtifactMap";

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
        <ArtifactMap></ArtifactMap>
        <Testimonials></Testimonials>
        <NewsLetterSection></NewsLetterSection>
      </main>
    </div>
  );
};

export default Home;
