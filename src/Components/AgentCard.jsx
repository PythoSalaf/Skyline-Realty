import React from "react";
import StarRating from "./StarRating";
import Button from "./Button";
import { useNavigate } from "react-router-dom";

const AgentCard = ({ image, name, rating, id }) => {
  const navigate = useNavigate();
  return (
    <div className="w-[70%] md:w-[250px] bg-white rounded-t-2xl">
      <img
        src={image}
        alt={`${id}-${name}`}
        className="rounded-t-2xl h-[250px] w-full"
      />
      <div className="w-[95%] mx-auto mt-2">
        <h2 className="text-lg md:text-xl font-semibold">{name} </h2>
        <div className="flex items-center  gap-x-5 py-3">
          <StarRating rating={rating} />
          <p className="text-lg">({rating} review)</p>
        </div>
      </div>
      <div className="w-full flex items-center justify-center text-white">
        <Button
          btnName="View Profile"
          btnStyle="py-1  bg-black w-full text-base md:text-lg"
          btnHandle={() => navigate(`/${id}/agent-detail`)}
        />
      </div>
    </div>
  );
};

export default AgentCard;
