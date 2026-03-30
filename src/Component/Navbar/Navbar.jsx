import React from "react";
import { FaCartPlus } from "react-icons/fa6";

const Navbar = ({ cards }) => {
  return (
    <nav className="max-w-11/12 mx-auto flex items-center justify-between px-8 py-5 border-b border-gray-100 bg-white">
      <div className="text-3xl font-bold bg-gradient-to-r from-purple-600 via-violet-600 to-indigo-600 bg-clip-text text-transparent">
        DigiTools
      </div>

      <div className="hidden md:flex items-center gap-8 text-gray-700 font-medium">
        <a href="#" className="hover:text-purple-600 transition-colors">
          Products
        </a>
        <a href="#" className="hover:text-purple-600 transition-colors">
          Features
        </a>
        <a href="#" className="hover:text-purple-600 transition-colors">
          Pricing
        </a>
        <a href="#" className="hover:text-purple-600 transition-colors">
          Testimonials
        </a>
        <a href="#" className="hover:text-purple-600 transition-colors">
          FAQ
        </a>
      </div>

      <div className="flex items-center gap-6">
        <div>
          <div className=" text-gray-700 ">
            <div className="flex items-center gap-2 ">
              <FaCartPlus className="text-2xl hover:text-purple-600 transition-colors" />{" "}
              <span className=" font-bold bg-red-500  absolute -mt-10 ml-4 p-1 h-5 w-5 rounded-full ">
                <span className="text-[13px] ml-1 text-white absolute font-bold -mt-1">{cards.length === 0 ? "0" : cards.length}</span>
              </span>
            </div>
          </div>
        </div>

        <a
          href="#"
          className="text-gray-700 hover:text-purple-600 font-medium transition-colors"
        >
          Login
        </a>

        <button className="cursor-pointer bg-gradient-to-r from-purple-600 via-violet-600 to-indigo-600  text-white px-6 py-2.5 rounded-full font-semibold transition-colors">
          Get Started
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
