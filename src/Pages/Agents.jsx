import React from "react";
import { AgentCard, Button } from "../Components";
import { AgentsData } from "../Components/DummyData";

const Agents = () => {
  return (
    <div className="w-full mt-[4rem] py-9 mx-auto bg-terciaryColor">
      <div className="w-[96%] md:w-[94%] lg:w-[90%] mx-auto">
        <h2 className="text-2xl md:text-3xl lg:text-4xl">Agents Around You</h2>
        <div className="my-6 w-full flex items-center gap-x-8">
          <input
            type="text"
            placeholder="Search for agent"
            className="w-[65%] h-10 px-3 rounded-2xl outline-none text-lg"
          />
          <Button
            btnName="Search"
            btnStyle="bg-black text-white px-6 py-[6px] text-lg md:text-xl rounded-2xl"
          />
        </div>
        <div className="mt-16 grid grid-cols-1 place-items-center md:place-content-start sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-7 ">
          {AgentsData.map((items) => (
            <AgentCard key={items.id} {...items} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Agents;
