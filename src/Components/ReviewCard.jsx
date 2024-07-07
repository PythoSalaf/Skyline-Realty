import React from "react";
import { FaQuoteLeft } from "react-icons/fa";

const ReviewCard = ({ avater, name, review, job }) => {
  return (
    <div className="bg-terciaryColor w-[90%] mx-auto md:w-[90%] flex items-center py-3 rounded-2xl">
      <div className=" justify-center w-[240px] md:w-[85%] h-[350px] flex items-center mx-auto flex-col">
        <div className="flex items-center justify-center mx-auto  text-white mb-[-17px]">
          <FaQuoteLeft className=" bg-terciaryColor  px-1  text-4xl" />
        </div>
        <div className="border-[4px] border-white rounded-xl p-2">
          <h4 className="mb-10 mt-1 text-lg ">{review}</h4>
        </div>
        <div className="border-[4px] rounded-full flex items-center h-24 w-24 justify-center mx-auto mt-[-50px] border-white ">
          <img
            src={avater}
            alt="profile-icon"
            className="w-full h-full rounded-full flex items-center justify-center"
          />
        </div>
        <h3 className="text-center text-lg  uppercase">{name}</h3>
        <p className="text-center text-base">{job}</p>
      </div>
    </div>
  );
};

export default ReviewCard;
