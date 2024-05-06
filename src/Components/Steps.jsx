const Steps = () => {
  return (
    <div className="w-full bg-white mt-9 md:mt-12">
      <div className="w-[96%]  md:w-[94%] lg:w-[90%] mx-auto flex gap-y-10 md:gap-y-0 md:gap-x-5 flex-col md:flex-row items-start justify-between">
        <div className="w-full bg-[#ffe0ce] h-20"></div>
        <div className="w-full  grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="w-full h-10 bg-yellow-500"></div>
          <div className="w-full h-10 bg-orange-600"></div>
          <div className="w-full h-10 bg-purple-800"></div>
          <div className="w-full h-10 bg-black"></div>
        </div>
      </div>
    </div>
  );
};

export default Steps;
