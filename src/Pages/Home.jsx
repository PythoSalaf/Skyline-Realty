import React from "react";
import { Button } from "../Components";

const Home = () => {
  return (
    <div className="w-full bg-[#fff7f0] py-8 mt-[4rem] h-[80vh]">
      <div className="w-[96%]  md:w-[94%] lg:w-[90%] mx-auto flex gap-y-5 md:gap-y-0 md:gap-x-5 flex-col md:flex-row items-start justify-between">
        <div className="w-full ">
          <h1 className="font-bold text-2xl md:text-3xl lg:text-4xl ">
            Find your perfect home with us. <br /> Where you'll love to live
          </h1>
          <p className="text-lg font-semibold mt-6 mb-10 md:text-[22px]">
            Our personalized approach ensures you'll love where you live. <br />{" "}
            From luxurious estates to cozy apartments, <br /> we guide you every
            step of the way.
          </p>
          <div className="bg-white h-32 rounded-xl  w-[98%] mx-auto py-2 ">
            <div className="flex items-center justify-between w-[90%] mx-auto ">
              <Button
                btnName="Buy"
                btnStyle="bg-black rounded-lg text-white hover:bg-primary px-8 py-[6px]"
              />
              <Button
                btnName="Sell"
                btnStyle="bg-black rounded-lg text-white hover:bg-primary px-8 py-[6px]"
              />
              <Button
                btnName="Rent"
                btnStyle="bg-black rounded-lg text-white hover:bg-primary px-8 py-[6px]"
              />
            </div>
          </div>
        </div>
        <div className=" w-full"></div>
      </div>
    </div>
  );
};

export default Home;
