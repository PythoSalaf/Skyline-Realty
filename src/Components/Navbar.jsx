import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FiSearch } from "react-icons/fi";
import { IoMdMenu, IoMdClose } from "react-icons/io";

import { Logo } from "../Assets";
import Button from "./Button";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <div className="bg-white w-full h-[70px] flex items-center">
      <div className="flex items-center  justify-between w-[96%]  md:w-[94%] lg:w-[90%] mx-auto ">
        <Link to="/" className="flex items-center gap-[2px] md:gap-1">
          <img
            src={Logo}
            alt="logo"
            className="w-10 h-10 md:w-11 md:h-11 lg:w-14 lg:h-14"
          />
          <h2 className="text-blue-600 font-semibold text-[22px] md:text-[26px] lg:text-3xl">
            <span className="text-primary">Sky</span>Realty
          </h2>
        </Link>
        <ul className="hidden md:flex items-center md:gap-2 lg:gap-4 ">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/">Listing</NavLink>
          </li>
          <li>
            <NavLink to="/">Agents</NavLink>
          </li>
          <li>
            <NavLink to="/">Properties</NavLink>
          </li>
          <li>
            <NavLink to="/">Blog</NavLink>
          </li>
        </ul>
        <div className="hidden md:flex items-center gap-8">
          <div className="flex items-center gap-1">
            <FiSearch />
            <p>search</p>
          </div>
          <Button
            btnName="Login"
            btnStyle="bg-primary text-white px-6 py-[6px] rounded-lg text-lg"
          />
        </div>
        <div
          className="block md:hidden bg-primary p-[6px] text-white rounded-full cursor-pointer "
          onClick={() => setToggle(!toggle)}
        >
          {toggle ? (
            <IoMdClose className="w-6 h-6" />
          ) : (
            <IoMdMenu className="w-6 h-6" />
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
