import { Hero1 } from "../Assets";
import Button from "./Button";

const Hero = () => {
  return (
    <div className="w-full bg-[#fff7f0] py-8 mt-[4rem] ">
      <div className="w-[96%]  md:w-[94%] lg:w-[90%] mx-auto flex gap-y-10 md:gap-y-0 md:gap-x-5 flex-col md:flex-row items-start justify-between">
        <div className="w-full ">
          <h1 className="font-bold text-2xl md:text-3xl lg:text-4xl ">
            Find your perfect home with us. <br /> Where you'll love to live
          </h1>
          <p className="text-lg font-semibold mt-6 mb-10 md:text-[22px]">
            Our personalized approach ensures you'll love where you live. <br />{" "}
            From luxurious estates to cozy apartments, <br /> we guide you every
            step of the way.
          </p>
          <div className="bg-white rounded-xl w-[95%] md:w-[90%] mx-auto md:mx-0 py-4 ">
            <div className="flex items-start justify-between w-[95%] mx-auto ">
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
            <div className="w-[94%] mx-auto mt-8 flex flex-col gap-y-5">
              <input
                type="text"
                placeholder="City/Street"
                className="border border-[#d6d6d6] w-full h-[45px] rounded-xl px-4 "
              />
              <input
                type="text"
                placeholder="City/Street"
                className="border border-[#d6d6d6] w-full h-[45px] rounded-xl px-4 "
              />
              <input
                type="text"
                placeholder="City/Street"
                className="border border-[#d6d6d6] w-full h-[45px] rounded-xl px-4 "
              />
            </div>
            <div className=" flex items-center justify-center mt-6">
              <Button
                btnName="Search"
                btnStyle="w-[60%]  bg-primary text-white py-[6px] rounded-lg text-lg md:text-xl"
              />
            </div>
          </div>
        </div>
        <div className=" w-full">
          <img src={Hero1} alt="" className="w-full " />
        </div>
      </div>
    </div>
  );
};

export default Hero;
