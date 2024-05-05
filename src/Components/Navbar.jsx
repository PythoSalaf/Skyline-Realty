import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FiSearch } from "react-icons/fi";
import { IoMdMenu, IoMdClose } from "react-icons/io";

import { Logo } from "../Assets";
import Button from "./Button";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <div className="bg-white w-full h-[70px] flex items-center fixed top-0">
      <div className="flex items-center  justify-between w-[96%]  md:w-[94%] lg:w-[90%] mx-auto ">
        <Link to="/" className="flex items-center gap-[2px] md:gap-1">
          <img
            src={Logo}
            alt="logo"
            className="w-10 h-10 md:w-11 md:h-11 lg:w-14 lg:h-14"
          />
          <h2 className="text-[#1192ce] font-semibold text-[24px] md:text-[27px] lg:text-3xl">
            <span className="text-primary">Sky</span>Realty
          </h2>
        </Link>
        <ul className="hidden md:flex items-center md:gap-3 lg:gap-4 ">
          <li>
            <NavLink
              to="/"
              className="font-semibold md:text-lg lg:text-2xl hover:text-blue-600"
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/"
              className="font-semibold md:text-lg lg:text-2xl hover:text-blue-600"
            >
              Listing
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/"
              className="font-semibold md:text-lg lg:text-2xl hover:text-blue-600"
            >
              Agents
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/"
              className="font-semibold md:text-lg lg:text-2xl hover:text-blue-600"
            >
              Properties
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/"
              className="font-semibold md:text-lg lg:text-2xl hover:text-blue-600"
            >
              Blog
            </NavLink>
          </li>
        </ul>
        <div className="hidden md:flex items-center md:gap-5 lg:gap-8">
          <div className="flex items-center md:gap-1 lg:gap-2">
            <FiSearch className="md:w-5 lg:w-6 md:h-5 lg:h-6" />
            <p className="capitalize font-semibold md:text-lg lg:text-xl">
              search
            </p>
          </div>
          <Button
            btnName="Login"
            btnStyle="bg-primary text-white px-6 py-[6px] rounded-lg md:text-lg lg:text-xl"
          />
        </div>
        <div
          className="block md:hidden bg-primary p-[6px] text-white rounded-full hover:bg-black cursor-pointer "
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
