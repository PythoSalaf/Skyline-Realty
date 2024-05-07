import { House1 } from "../Assets";
import { IoMdSwap } from "react-icons/io";
import { IoSearch, IoBedOutline } from "react-icons/io5";
import { FaRegBookmark } from "react-icons/fa";
import { FaLocationDot, FaShower } from "react-icons/fa6";
import { LiaVectorSquareSolid } from "react-icons/lia";
const FeatureCard = () => {
  return (
    <div className="shadow-primaryCustom bg-white rounded-2xl w-[90%] mx-auto md:mx-0 md:w-[300px] lg:w-[350px] p-3 ">
      <div className="relative w-full">
        <img src={House1} alt="" />
        <div className="w-full px-4 flex items-center justify-between  bottom-[10px] absolute  ">
          <h4 className="w-full text-lg md:text-xl text-white">#24,000</h4>
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
      <h2>155 Dalla Homestay</h2>
      <div className=" flex items-center gap-1">
        <FaLocationDot />
        <p>2612 Macarthur Boulevard, Oakland</p>
      </div>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-1">
          <IoBedOutline />
          <p>Beds 4</p>
        </div>
        <div className="flex items-center gap-1">
          <FaShower />
          <p>Baths 4</p>
        </div>
        <div className="flex items-center gap-1">
          <LiaVectorSquareSolid />
          <p>SqFt 4,000</p>
        </div>
      </div>
      <hr className="mt-3" />
    </div>
  );
};

export default FeatureCard;
