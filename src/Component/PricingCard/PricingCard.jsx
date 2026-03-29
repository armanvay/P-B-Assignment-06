import React from "react";
import { FaCheck } from "react-icons/fa"; 

const PricingSection = () => {
  return (
    <div className="flex flex-wrap justify-center gap-6 p-10  mb-30 mt-10 ">
      <div className="bg-white border h-105 border-gray-200 p-8 rounded-3xl shadow-sm w-full max-w-[350px]">
        <h3 className="text-xl font-bold text-gray-800">Starter</h3>
        <p className="text-gray-500 mb-6">Perfect for getting started</p>
        <div className="mb-6">
          <span className="text-4xl font-extrabold">$0</span>
          <span className="text-gray-500">/Month</span>
        </div>
        <ul className="space-y-4 mb-8 text-gray-600">
          <li className="flex items-center gap-2 text-green-500">
            <FaCheck size={14} /> Access to 10 free tools
          </li>
          <li className="flex items-center gap-2 text-green-500">
            <FaCheck size={14} /> Basic templates
          </li>
          <li className="flex items-center gap-2 text-green-500">
            <FaCheck size={14} /> Community support
          </li>
        </ul>
        <button className="w-full bg-purple-600 text-white py-3 rounded-2xl font-semibold hover:bg-purple-700 transition">
          Get Started Free
        </button>
      </div>

      <div className="relative  h-105 bg-gradient-to-br from-purple-600 via-violet-600 to-indigo-600 text-white p-8 rounded-3xl shadow-xl w-full max-w-[350px] scale-105">
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-yellow-300 text-black text-xs font-bold px-3 py-1 rounded-full uppercase">
          Most Popular
        </div>
        <h3 className="text-xl font-bold mt-2">Pro</h3>
        <p className="opacity-80 mb-6">Best for professionals</p>
        <div className="mb-6">
          <span className="text-4xl font-extrabold">$29</span>
          <span className="opacity-90">/Month</span>
        </div>
        <ul className="space-y-4 mb-8">
          <li className="flex items-center gap-2">
            <FaCheck size={14} /> Access to all premium tools
          </li>
          <li className="flex items-center gap-2">
            <FaCheck size={14} /> Unlimited templates
          </li>
          <li className="flex items-center gap-2">
            <FaCheck size={14} /> Priority support
          </li>
          <li className="flex items-center gap-2">
            <FaCheck size={14} /> Cloud sync
          </li>
        </ul>
        <button className="w-full bg-white text-purple-700 py-3 rounded-2xl font-bold hover:bg-gray-100 transition">
          Start Pro Trial
        </button>
      </div>

      <div className="bg-white border h-105 border-gray-200 p-8 rounded-3xl shadow-sm w-full max-w-[350px]">
        <h3 className="text-xl font-bold text-gray-800">Enterprise</h3>
        <p className="text-gray-500 mb-6">For teams and businesses</p>
        <div className="mb-6">
          <span className="text-4xl font-extrabold">$99</span>
          <span className="text-gray-500">/Month</span>
        </div>
        <ul className="space-y-4 mb-8 text-gray-600">
          <li className="flex items-center gap-2 text-green-500">
            <FaCheck size={14} /> Everything in Pro
          </li>
          <li className="flex items-center gap-2 text-green-500">
            <FaCheck size={14} /> Team collaboration
          </li>
          <li className="flex items-center gap-2 text-green-500">
            <FaCheck size={14} /> Custom integrations
          </li>
          <li className="flex items-center gap-2 text-green-500">
            <FaCheck size={14} /> Dedicated support
          </li>
        </ul>
        <button className="w-full mb-5 bg-purple-600 text-white py-3 rounded-2xl font-semibold hover:bg-purple-700 transition">
          Contact Sales
        </button>
      </div>
    </div>
  );
};

export default PricingSection;
