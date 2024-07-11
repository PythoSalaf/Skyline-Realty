import { IoMdSwap } from "react-icons/io";
import { IoSearch, IoBedOutline } from "react-icons/io5";
import { FaRegBookmark } from "react-icons/fa";
import { FaLocationDot, FaShower } from "react-icons/fa6";
import { LiaVectorSquareSolid } from "react-icons/lia";
import Button from "./Button";
import { useNavigate } from "react-router-dom";
const FeatureCard = ({
  address,
  beds,
  baths,
  sqft,
  price,
  image,
  id,
  location,
}) => {
  const navigate = useNavigate();
  return (
    <div className="shadow-primaryCustom bg-white rounded-2xl w-[90%] mx-auto md:mx-0 md:w-full p-3 ">
      <div className="relative w-full">
        <img src={image} alt={`icon-${id}`} className="h-[200px] w-full" />
        <div className="w-full px-4 flex items-center justify-between  bottom-[10px] absolute  ">
          <h4 className="w-full text-lg md:text-xl font-sans text-white">
            #{price}
          </h4>
          <div className="flex gap-3 items-center justify-end  w-full">
            <div className="bg-black rounded-full w-8 h-8 flex items-center opacity-75 cursor-pointer text-white justify-center">
              <IoMdSwap />
            </div>
            <div className="bg-black rounded-full w-8 h-8 flex opacity-75 cursor-pointer items-center text-white justify-center">
              <FaRegBookmark />
            </div>
            <div className="bg-black rounded-full w-8 h-8 flex opacity-75 cursor-pointer items-center text-white justify-center">
              <IoSearch />
            </div>
          </div>
        </div>
      </div>
      <h2>{address} </h2>
      <div className=" flex items-center py-2 gap-x-1">
        <FaLocationDot />
        <h3>{location}</h3>
      </div>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-1">
          <IoBedOutline />
          <p className="font-semibold text-base md:text-lg">Beds {beds}</p>
        </div>
        <div className="flex items-center gap-1">
          <FaShower />
          <p className="font-semibold text-base md:text-lg">Baths {baths}</p>
        </div>
        <div className="flex items-center gap-1">
          <LiaVectorSquareSolid />
          <p className="font-semibold text-base md:text-lg">SqFt {sqft}</p>
        </div>
      </div>
      <div className="w-full flex items-center justify-center mt-10">
        <Button
          btnName="View Details"
          btnStyle="bg-black w-full text-white py-1 rounded-2xl hover:bg-primary"
          btnHandle={() => navigate(`/${id}/details`)}
        />
      </div>
    </div>
  );
};

export default FeatureCard;
