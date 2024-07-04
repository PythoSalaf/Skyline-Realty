import React, { useState } from "react";
import { motion } from "framer-motion";
import Button from "./Button";
import FeatureCard from "./FeatureCard";
import { Properties } from "./DummyData";

const FeaturedProperty = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const FeatureList = [
    "all",
    "apartments",
    "bungalow",
    "house",
    "office",
    "smart home",
    "villa",
  ];

  const filteredProperties =
    selectedCategory === "all"
      ? Properties
      : Properties.filter((property) => property.category === selectedCategory);

  const Grid = () => {
    return (
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-7">
        {filteredProperties.map((data, index) => (
          <AnimatedFeatureCard key={data.id} index={index} {...data} />
        ))}
      </div>
    );
  };

  const AnimatedFeatureCard = ({ index, ...props }) => {
    const variants = {
      hidden: { opacity: 0, scale: 0.9 },
      visible: { opacity: 1, scale: 1 },
    };

    const transition = {
      duration: 0.6,
      delay: index * 0.3,
    };

    return (
      <motion.div
        initial="hidden"
        animate="visible"
        variants={variants}
        transition={transition}
      >
        <FeatureCard {...props} />
      </motion.div>
    );
  };

  return (
    <div className="w-full my-12">
      <div className="w-[96%] md:w-[94%] lg:w-[90%] mx-auto">
        <h2 className="text-center text-2xl md:text-3xl lg:text-4xl font-semibold">
          Discover The Latest Properties
        </h2>
        <h4 className="text-center my-3 text-base md:text-lg font-semibold">
          Find a property that's right for you.
        </h4>
        <div className="flex flex-wrap items-center justify-center gap-3 mt-[2rem] w-[95%] md:w-[90%] lg:w-[80%] mx-auto">
          {FeatureList.map((list, index) => (
            <Button
              key={index}
              btnName={list}
              btnStyle={`text-[17px] md:text-[20px] py-[5px] shadow-semiCustom w-fit px-4 capitalize rounded-xl ${
                selectedCategory === list ? "bg-primary text-white" : ""
              }`}
              btnHandle={() => setSelectedCategory(list)}
            />
          ))}
        </div>
        <div className="mt-10 w-full">
          {filteredProperties.length > 0 ? (
            <Grid />
          ) : (
            <div className="text-center w-full col-span-full">
              <p className="text-lg font-semibold text-red-600">
                No properties available in this category.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default FeaturedProperty;
