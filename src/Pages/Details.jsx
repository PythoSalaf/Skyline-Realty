// import React from "react";

// const Details = () => {
//   return (
//     <div className="mt-[4rem] bg-terciaryColor py-5">
//       <div className="w-[96%] md:w-[94%] lg:w-[90%] mx-auto">
//         <h2>Details</h2>
//       </div>
//     </div>
//   );
// };

// export default Details;

import React from "react";
import Slider from "react-slick";
import { Link, useParams } from "react-router-dom";
import { Properties } from "../Components/DummyData";

const Details = () => {
  const { id } = useParams();
  console.log(id, "IDS");
  const property = Properties.find((p) => p.id === parseInt(id));

  if (!property) {
    return <div>Property not found</div>;
  }

  const settings = {
    customPaging: function (i) {
      return (
        <Link>
          <img
            src={property.image[i]}
            className=" object-cover"
            alt={`property-thumbnail-${i}`}
          />
        </Link>
      );
    },
    dots: true,
    dotsClass: "slick-dots custom-thumb",
    infinite: true,
    // variableWidth: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="mt-[4rem] bg-terciaryColor py-5 ">
      <div className="w-[96%] md:w-[94%] lg:w-[90%] mx-auto">
        {/* <h1 className="text-3xl font-bold mb-4">{property.address}</h1> */}
        <Slider {...settings}>
          {property.image.map((image, index) => (
            <div key={index}>
              <img
                src={image}
                className="w-full h-96 mb-6 object-cover"
                alt={`property-${index}`}
              />
            </div>
          ))}
        </Slider>
        <div className="mt-[5rem]">
          <p>
            <strong>Beds:</strong> {property.beds}
          </p>
          <p>
            <strong>Baths:</strong> {property.baths}
          </p>
          <p>
            <strong>Sqft:</strong> {property.sqft}
          </p>
          <p>
            <strong>Type:</strong> {property.type}
          </p>
          <p>
            <strong>Price:</strong> ${property.price}
          </p>
          <p>
            <strong>Location:</strong> {property.location}
          </p>
          <p>
            <strong>City:</strong> {property.city}
          </p>
          <p>
            <strong>State:</strong> {property.state}
          </p>
          <p>
            <strong>Zip:</strong> {property.zip}
          </p>
          <p>
            <strong>Category:</strong> {property.category}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Details;
