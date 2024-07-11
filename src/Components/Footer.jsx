import React from "react";
import { Link } from "react-router-dom";
import { CiFacebook } from "react-icons/ci";
import { BsTwitterX } from "react-icons/bs";
import { FaInstagram, FaLinkedin } from "react-icons/fa";
import { Logo } from "../Assets";
const Footer = () => {
  return (
    <div className="w-full bg-secondary mt-11 py-5">
      <div className="w-[96%] md:w-[94%] lg:w-[90%] mx-auto ">
        <div className="place-content-center grid grid-cols-1 md:grid-cols-2 gap-y-10 md:gap-y-0 lg:grid-cols-4">
          <div>
            <Link to="/" className="flex items-center gap-[2px] md:gap-1">
              <img
                src={Logo}
                alt="logo"
                className="w-8 h-8 md:w-9 md:h-9 lg:w-11 lg:h-11 "
              />
              <h2 className="text-[#1192ce] font-semibold text-[20px] md:text-[23px] lg:text-2xl">
                <span className="text-primary">Sky</span>Realty
              </h2>
            </Link>
            <p className="my-2 text-base md:text-lg font-semibold ">
              59 Bervely Hill Ave, Brooklyn Town, <br /> New York, NY 5630, CA,
              US
            </p>
            <p className="text-base md:text-lg font-semibold">
              +(123) 456-7890
            </p>
            <p className="my-2 text-base md:text-lg font-semibold">
              info@mail.com
            </p>
            <div className="flex items-center gap-x-4">
              <CiFacebook className="w-6 h-6 md:w-8 md:h-8" />
              <BsTwitterX className="w-5 h-5 md:w-6 md:h-6" />
              <FaLinkedin className="w-5 h-5 md:w-7 md:h-7" />
              <FaInstagram className="w-5 h-5 md:w-7 md:h-7" />
            </div>
          </div>
          <div>
            <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold ">
              Features
            </h2>
            <div className="flex items-start flex-col">
              <Link to="/" className="font-semibold text-base md:text-lg">
                Home
              </Link>
              <Link to="/about" className="font-semibold text-base md:text-lg">
                About
              </Link>
              <Link
                to="/contact"
                className="font-semibold text-base md:text-lg"
              >
                Contact
              </Link>
              <Link to="search" className="font-semibold text-base md:text-lg">
                Search
              </Link>
            </div>
          </div>
          <div>
            <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold">
              Information
            </h2>
            <div className="flex items-start flex-col">
              <Link
                to="/listing"
                className="font-semibold text-base md:text-lg"
              >
                Listing
              </Link>
              <Link
                to="/property"
                className="font-semibold text-base md:text-lg"
              >
                Property
              </Link>
              <Link
                to="/agent-list"
                className="font-semibold text-base md:text-lg"
              >
                Agent List
              </Link>
              <Link
                to="/agent-profile"
                className="font-semibold text-base md:text-lg"
              >
                Agent Profile
              </Link>
            </div>
          </div>
          <div>
            <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold">
              Documentation
            </h2>
            <div className="flex items-start flex-col">
              <Link to="/blog" className="font-semibold text-base md:text-lg">
                Blog
              </Link>
              <Link to="/faq" className="font-semibold text-base md:text-lg">
                FAQ
              </Link>
              <Link to="/policy" className="font-semibold text-base md:text-lg">
                Privacy Policy
              </Link>
              <Link
                to="/licence"
                className="font-semibold text-base md:text-lg"
              >
                Lincence
              </Link>
            </div>
          </div>
        </div>
        <p className="my-8 font-semibold text-lg md:text-xl">
          © 2024. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
