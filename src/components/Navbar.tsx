"use client";
import { useState } from "react";
import { FaPhone, FaBars, FaTimes } from "react-icons/fa";
import Image from "next/image";
import logo from "../assets/logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="">
      <div className="flex items-center justify-between py-5">
        {/* Logo */}
        <div className="w-[20%] flex justify-start">
          <Image src={logo} alt="logo" width={30} height={30} className="w-[30px] h-[30px]" />
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex md:w-[60%] justify-center items-center gap-10 lg:gap-20">
          {["SERVICES", "WORK", "NOTES", "EXPERIENCE"].map((item) => (
            <p key={item} className="text-sm font-medium cursor-pointer hover:text-orange-600 transition-all">
              {item}
            </p>
          ))}
        </div>

        {/* Contact */}
        <div className="hidden md:flex w-[20%] justify-end items-center">
          <p className="text-md font-semibold flex gap-2 items-center">
            +91 9761915425 <span className="text-orange-500"><FaPhone /></span>
          </p>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu}>
            {isOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden flex flex-col gap-4 pb-5">
          {["SERVICES", "WORK", "NOTES", "EXPERIENCE"].map((item) => (
            <p key={item} className="text-sm font-medium px-2">
              {item}
            </p>
          ))}
          <p className="text-md font-semibold flex gap-2 items-center px-2">
            +91 9761915425 <span className="text-orange-500"><FaPhone /></span>
          </p>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
