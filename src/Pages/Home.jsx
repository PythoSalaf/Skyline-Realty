import React from "react";
import {
  CustomerReview,
  DreamApartment,
  FeaturedProperty,
  Hero,
  NewsFeeds,
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
      <NewsFeeds />
    </div>
  );
};

export default Home;
