import React from "react";
import Button from "./Button";
import FeatureCard from "./FeatureCard";

const FeaturedProperty = () => {
  const FeatureList = [
    "all",
    "apartments",
    "bungalow",
    "house",
    "office",
    "smart home",
    "villa",
  ];
  return (
    <div className="w-full my-12 ">
      <div className="w-[96%]  md:w-[94%] lg:w-[90%] mx-auto ">
        <h2 className="text-center  text-2xl md:text-3xl lg:text-4xl font-semibold ">
          Discover The Latest Properties
        </h2>
        <h4 className="text-center my-3 text-base md:text-lg font-semibold ">
          Find a property that's right for you.
        </h4>
        <div className="flex flex-wrap items-center justify-center gap-3 mt-[2rem] w-[95%]  md:w-[90%] lg:w-[80%] mx-auto ">
          {FeatureList.map((list, index) => (
            <Button
              btnName={list}
              key={index}
              btnStyle=" text-[17px] md:text-[20px]  py-[5px] shadow-semiCustom   w-fit px-4 capitalize rounded-xl"
            />
          ))}
        </div>
        <div className="mt-10">
          <FeatureCard />
        </div>
      </div>
    </div>
  );
};

export default FeaturedProperty;
