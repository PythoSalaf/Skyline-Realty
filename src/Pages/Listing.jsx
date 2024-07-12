import React, { useState } from "react";
import { Button, FeatureCard } from "../Components";
import Properties from "../Components/DummyData";

const Listing = () => {
  const [searchLocation, setSearchLocation] = useState("");
  const [searchCity, setSearchCity] = useState("");
  const [searchState, setSearchState] = useState("");
  const [searchPrice, setSearchPrice] = useState("");
  const [searchType, setSearchType] = useState("");
  const [filteredProperties, setFilteredProperties] = useState(Properties);

  const handleSearch = () => {
    const filtered = Properties.filter((property) => {
      return (
        (searchLocation ? property.location.includes(searchLocation) : true) &&
        (searchCity ? property.city === searchCity : true) &&
        (searchState ? property.state === searchState : true) &&
        (searchPrice
          ? property.price <= parseInt(searchPrice.replace(/[^0-9]/g, ""))
          : true) &&
        (searchType ? property.type === searchType : true)
      );
    });
    setFilteredProperties(filtered);
  };

  return (
    <div className="mt-[4rem] w-full bg-white py-6">
      <div className="w-[96%] md:w-[94%] lg:w-[90%] mx-auto">
        <h2 className="font-bold text-2xl md:text-3xl lg:text-4xl">
          Find Property
        </h2>
        <div className="my-5 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-x-10 gap-y-4 lg:gap-y-0 bg-primary px-4 py-3 rounded-lg">
          <input
            type="text"
            placeholder="Enter location"
            className="px-3 text-lg h-9 lg:h-10 rounded-xl text-black outline-none"
            value={searchLocation}
            onChange={(e) => setSearchLocation(e.target.value)}
          />
          <select
            value={searchCity}
            onChange={(e) => setSearchCity(e.target.value)}
            className="bg-white text-black pl-[6px] text-lg pr-[6px] h-9 lg:h-10 rounded-lg cursor-pointer"
          >
            <option value="">Select City</option>
            <option value="osogbo">Osogbo</option>
            <option value="akure">Akure</option>
            <option value="ikirun">Ikirun</option>
            <option value="ibadan">Ibadan</option>
          </select>

          <select
            value={searchState}
            onChange={(e) => setSearchState(e.target.value)}
            className="bg-white text-black pl-[6px] pr-[6px] text-lg h-9 lg:h-10 rounded-lg cursor-pointer"
          >
            <option value="">Select State</option>
            <option value="Osun">Osun</option>
            <option value="Ondo">Ondo</option>
            <option value="Lagos">Lagos</option>
            <option value="Oyo">Oyo</option>
            <option value="Abia">Abia</option>
            <option value="Edo">Edo</option>
          </select>

          <select
            value={searchPrice}
            onChange={(e) => setSearchPrice(e.target.value)}
            className="bg-white text-black pl-[6px] pr-[6px] text-lg h-9 lg:h-10 rounded-lg cursor-pointer"
          >
            <option value="">Price Range</option>
            <option value="#100000">#100,000</option>
            <option value="#200000">#200,000</option>
            <option value="#300000">#300,000</option>
            <option value="#400000">#400,000</option>
            <option value="#500000">#500,000</option>
            <option value="#600000">#600,000</option>
          </select>
          <select
            value={searchType}
            onChange={(e) => setSearchType(e.target.value)}
            className="bg-white text-black pl-[6px] pr-[6px] text-lg h-9 lg:h-10 rounded-lg cursor-pointer"
          >
            <option value="">Apartment Type</option>
            <option value="Single Room">Single Room</option>
            <option value="A room selfcon">A room selfcon</option>
            <option value="Room and palor selfcon">
              Room and palor selfcon
            </option>
            <option value="Two bedroom flat">Two bedroom flat</option>
            <option value="Three bedroom flat">Three bedroom flat</option>
            <option value="Four bedroom flat">Four bedroom flat</option>
            <option value="Bungalo">Bungalo</option>
            <option value="Duplex">Duplex</option>
            <option value="Office">Office</option>
          </select>
          <Button
            btnName="Search"
            btnStyle="bg-black text-white text-lg md:text-xl rounded-2xl px-9 py-[6px]"
            btnHandle={handleSearch}
          />
        </div>
        {filteredProperties.length > 0 ? (
          <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-7">
            {filteredProperties.map((item) => (
              <FeatureCard {...item} key={item.id} />
            ))}
          </div>
        ) : (
          <div className="text-center text-xl text-red-500">
            No properties found. Please try different search criteria.
          </div>
        )}
      </div>
    </div>
  );
};

export default Listing;
