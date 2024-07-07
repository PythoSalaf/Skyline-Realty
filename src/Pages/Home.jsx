import React from "react";
import {
  CustomerReview,
  DreamApartment,
  FeaturedProperty,
  Hero,
  Steps,
} from "../Components";

const Home = () => {
  return (
    <div>
      <Hero />
      <Steps />
      <FeaturedProperty />
      {/* <DreamApartment /> */}
      <CustomerReview />
    </div>
  );
};

export default Home;
