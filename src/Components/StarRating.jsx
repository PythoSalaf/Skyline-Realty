import React from "react";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

const StarRating = ({ rating }) => {
  const fullStars = Math.floor(rating);
  const halfStar = rating - fullStars >= 0.5 ? 1 : 0;
  const emptyStars = 5 - fullStars - halfStar;

  return (
    <div style={{ display: "flex" }}>
      {[...Array(fullStars)].map((_, index) => (
        <FaStar key={index} color="#ffc107" />
      ))}
      {halfStar === 1 && <FaStarHalfAlt color="#ffc107" />}
      {[...Array(emptyStars)].map((_, index) => (
        <FaRegStar key={index + fullStars + halfStar} color="#ffc107" />
      ))}
    </div>
  );
};

export default StarRating;
