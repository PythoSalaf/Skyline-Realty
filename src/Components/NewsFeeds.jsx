import React from "react";
import Button from "./Button";

const NewsFeeds = () => {
  return (
    <div className="mt-8 py-5 w-full">
      <div className="bg-terciaryColor w-[96%] md:w-[94%] lg:w-[90%] mx-auto py-5 rounded-xl">
        <h2 className="text-center font-bold uppercase text-xl md:text-2xl">
          News letter
        </h2>
        <div className="py-6 flex items-center justify-center">
          <h2 className="text-center text-xl md:text-2xl">
            We help businesses customize, automate and scale up their <br /> ad
            production and delivery.
          </h2>
        </div>
        <div className="flex items-center justify-center flex-col w-full mx-auto">
          <input
            type="email"
            placeholder="Enter Your Email"
            className="w-[70%] md:w-[35%] px-2 h-9 rounded-lg text-lg text-black outline-none"
          />
          <Button
            btnStyle="my-4 bg-black text-white px-5 md:px-8 py-[5px] text-lg rounded-3xl"
            btnName="Subscribe"
          />
        </div>
      </div>
    </div>
  );
};

export default NewsFeeds;
