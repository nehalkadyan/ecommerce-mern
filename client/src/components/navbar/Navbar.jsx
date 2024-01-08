import React, { useState } from "react";
import logo from "./store_logo.png";
import { IoCartSharp } from "react-icons/io5";
import { GrMenu } from "react-icons/gr";
import { IoMdClose } from "react-icons/io";

console.log(logo);

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMenuIconOpened, setIsMenuIconOpened] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    setIsMenuIconOpened(!isMenuIconOpened);
  };

  return (
    <nav className="w-full h-[80px] flex justify-between px-6 md:px-8 lg:px-12  items-center border-b border-neutral-200">
      <div>
        <img className="h-20 w-56" src={logo} alt="logo" />
      </div>

      <ul className="hidden md:flex items-center gap-8 text-medium font-medium">
        <li className="cursor-pointer">Home</li>
        <li className="cursor-pointer">About</li>
        <li className="cursor-pointer">Products</li>
        <li className="cursor-pointer">Contact</li>
        <li className="px-4 py-2 rounded bg-slate-900 text-white cursor-pointer">
          Login
        </li>
        <li className="text-3xl cursor-pointer">
          <IoCartSharp />
        </li>
      </ul>

      {/*  Mobile Navigation*/}
      <div className="md:hidden">
        <div className="flex items-center">
          <button className="text-3xl cursor-pointer" onClick={toggleMenu}>
            {isMenuIconOpened ? <IoMdClose /> : <GrMenu />}
          </button>
        </div>

        {isMenuOpen && (
          <ul className="absolute top-[80px] left-0 w-full bg-white text-medium font-medium">
            <li className="p-4 border-b cursor-pointer">Home</li>
            <li className="p-4 border-b cursor-pointer">About</li>
            <li className="p-4 border-b cursor-pointer">Products</li>
            <li className="p-4 border-b cursor-pointer">Contact</li>
            <li className="p-4 border-b cursor-pointer">Login</li>
            <li className="p-4 text-3xl cursor-pointer">
              <IoCartSharp />
            </li>
          </ul>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
