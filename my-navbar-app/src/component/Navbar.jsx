import React, { useState } from "react";
import logo from "../assets/logo.png";
import linkedin from "../assets/linkedin.png";
import youtube from "../assets/youtube.png";
import instagram from "../assets/instagram.png";
import facebook from "../assets/facebook.png";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="w-full flex items-center justify-between px-4 sm:px-8 md:px-12 py-4 bg-white relative">

      {/* LOGO */}
      <img src={logo} alt="logo" className="w-[141px] h-[70px] object-contain" />

      {/* RIGHT SECTION */}
      <div className="flex flex-col gap-[10px]">

        {/* ICONS */}
        <div className="flex gap-[20px] sm:gap-[28px] self-end">
          <img src={linkedin} className="w-6 h-6 cursor-pointer" />
          <img src={youtube} className="w-6 h-6 cursor-pointer" />
          <img src={instagram} className="w-6 h-6 cursor-pointer" />
          <img src={facebook} className="w-6 h-6 cursor-pointer -ml-1 sm:ml-0" />
        </div>

        {/* DESKTOP MENU */}
        <div className="hidden md:flex items-center gap-[40px] text-gray-800 font-medium">

          <span className="cursor-pointer">Home</span>
          <span className="cursor-pointer">About us</span>
          <span className="cursor-pointer">News</span>
          <span className="cursor-pointer">Donation</span>

          <button className="bg-blue-600 text-white px-5 py-2 rounded-[15px] whitespace-nowrap">
            Contact Us
          </button>

        </div>

        {/* MOBILE MENU BUTTON */}
        <button
          className="md:hidden text-2xl self-end"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>

      </div>

      {/* MOBILE DROPDOWN */}
      {open && (
        <div className="absolute top-[90px] left-0 w-full bg-white shadow-md flex flex-col items-center gap-4 py-4 md:hidden">

          <span>Home</span>
          <span>About us</span>
          <span>News</span>
          <span>Donation</span>

          <button className="bg-blue-600 text-white px-5 py-2 rounded-[15px]">
            Contact Us
          </button>

        </div>
      )}

    </div>
  );
};

export default Navbar;