import { Enjoy, Get, Search, Visit } from "../Assets";
import Button from "./Button";

const Steps = () => {
  const Step = [
    {
      id: 1,
      title: "Search",
      sub_title: "Your location",
      image: Search,
    },
    {
      id: 2,
      title: "Visit",
      sub_title: "Appertment",
      image: Visit,
    },
    {
      id: 3,
      title: "Get your",
      sub_title: "Dream house",
      image: Get,
    },
    {
      id: 4,
      title: "Enjoy Your",
      sub_title: "Appertment",
      image: Enjoy,
    },
  ];
  return (
    <div className="w-full bg-white my-10  md:mt-14">
      <div className="w-[96%]  md:w-[94%] lg:w-[90%] mx-auto flex gap-y-10 md:gap-y-0 md:gap-x-5 flex-col md:flex-row items-start justify-between">
        <div className="w-full bg-[#ffe0ce] rounded-2xl ">
          <div className="w-[80%] mx-auto py-10 lg:py-20">
            <h2 className="text-center font-bold text-xl md:text-2xl lg:text-3xl capitalize">
              Simple & easy way to find your dream Appertment
            </h2>
            <p className="mt-7 mb-14 text-lg md:text-xl lg:text-2xl">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
            <Button
              btnName="Get Started"
              btnStyle="px-5 py-2 text-base  md:text-lg rounded-xl text-white bg-black"
            />
          </div>
        </div>
        <div className="w-full  grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          {Step.map((item) => (
            <div
              className="w-full bg-[#fbeee6] rounded-2xl py-6 lg:py-8"
              key={item.id}
            >
              <div className="w-[80%] mx-auto ">
                <img src={item.image} alt="s" />
                <h3 className="font-bold text-xl mt-6 mb-3 md:text-2xl lg:text-3xl">
                  {item.title}
                </h3>
                <h3 className="font-bold text-xl  md:text-2xl lg:text-3xl">
                  {item.sub_title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Steps;
