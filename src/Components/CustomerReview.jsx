import React from "react";
import Slider from "react-slick";
import ReviewCard from "./ReviewCard";
import { CustomerReviews } from "./DummyData";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "flex",
        alignItems: "center",
        justifyItems: "center",
        background: "#fbc2a1",
        borderRadius: "50%",
        padding: "5px",
        width: "30px",
        height: "30px",
      }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "flex",
        alignItems: "center",
        justifyItems: "center",
        background: "#fbc2a1",
        borderRadius: "50%",
        padding: "5px",
        width: "30px",
        height: "30px",
      }}
      onClick={onClick}
    />
  );
}

const CustomerReview = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    initialSlide: 0,
    autoplaySpeed: 3000,
    cssEase: "linear",
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          arrows: false,
          dots: true,
          draggable: true,
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="w-full my-7 overflow-x-hidden py-9  ">
      <div className="w-[96%] md:w-[94%] lg:w-[99%] mx-auto">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-8 text-center">
          Customer Reviews
        </h2>
        <div className="w-[84%] gap-x-11 relative mx-auto  mt-4 ">
          <Slider {...settings}>
            {CustomerReviews.map((review) => (
              <div key={review.id}>
                <ReviewCard {...review} />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default CustomerReview;
