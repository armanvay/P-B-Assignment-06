import React from "react";
import { FaInstagram, FaFacebookF, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#0b1120] text-gray-400 py-12 px-6 border-t border-purple-600/30">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <h2 className="text-white text-3xl font-bold mb-4">DigiTools</h2>
            <p className="max-w-xs leading-relaxed">
              Premium digital tools for creators, professionals, and businesses.
              Work smarter with our suite of powerful tools.
            </p>
          </div>

        
          <div>
            <h4 className="text-white font-semibold mb-4">Product</h4>
            <ul className="space-y-2">
              <li className="hover:text-purple-400 cursor-pointer transition">
                Features
              </li>
              <li className="hover:text-purple-400 cursor-pointer transition">
                Pricing
              </li>
              <li className="hover:text-purple-400 cursor-pointer transition">
                Templates
              </li>
              <li className="hover:text-purple-400 cursor-pointer transition">
                Integrations
              </li>
            </ul>
          </div>

         
          <div>
            <h4 className="text-white font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              <li className="hover:text-purple-400 cursor-pointer transition">
                About
              </li>
              <li className="hover:text-purple-400 cursor-pointer transition">
                Blog
              </li>
              <li className="hover:text-purple-400 cursor-pointer transition">
                Careers
              </li>
              <li className="hover:text-purple-400 cursor-pointer transition">
                Press
              </li>
            </ul>
          </div>

        
          <div>
            <h4 className="text-white font-semibold mb-4">Resources</h4>
            <ul className="space-y-2 mb-6">
              <li className="hover:text-purple-400 cursor-pointer transition">
                Documentation
              </li>
              <li className="hover:text-purple-400 cursor-pointer transition">
                Help Center
              </li>
            </ul>

            <h4 className="text-white font-semibold mb-4">Social Links</h4>
            <div className="flex gap-3">
              <div className="bg-white p-2 rounded-full text-black hover:bg-purple-500 hover:text-white transition cursor-pointer">
                <FaInstagram size={18} />
              </div>
              <div className="bg-white p-2 rounded-full text-black hover:bg-purple-500 hover:text-white transition cursor-pointer">
                <FaFacebookF size={18} />
              </div>
              <div className="bg-white p-2 rounded-full text-black hover:bg-purple-500 hover:text-white transition cursor-pointer">
                <FaTwitter size={18} />
              </div>
            </div>
          </div>
        </div>

        
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm">
          <p>© 2026 Digitools. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <span className="hover:text-white cursor-pointer transition">
              Privacy Policy
            </span>
            <span className="hover:text-white cursor-pointer transition">
              Terms of Service
            </span>
            <span className="hover:text-white cursor-pointer transition">
              Cookies
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
