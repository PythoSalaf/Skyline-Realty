import React from "react";
import { DreamApartment, FeaturedProperty, Hero, Steps } from "../Components";

const Home = () => {
  return (
    <div>
      <Hero />
      <Steps />
      <FeaturedProperty />
      <DreamApartment />
    </div>
  );
};

export default Home;
