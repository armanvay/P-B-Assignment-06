import React from 'react';
import accont from"../../assets/user.png"
import pakers from "../../assets/package.png"
import roket from "../../assets/rocket.png"

const Step = () => {
    return (
      <section className="bg-gray-100 py-20 mt-30">
        <div className="max-w-6xl mx-auto px-4">
          {/* Heading */}
          <div className="text-center mb-14">
            <h1 className="text-5xl font-bold text-gray-900">
              Get Started In 3 Steps
            </h1>
            <p className="text-gray-500 mt-3">
              Start using premium digital tools in minutes, not hours.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="relative hover:shadow-2xl transition-all bg-white rounded-2xl shadow-sm border p-10 text-center">
              <span className="absolute top-4 right-4 bg-gradient-to-r from-purple-600 via-violet-600 to-indigo-600 text-white text-sm w-8 h-8 rounded-full flex items-center justify-center">
                01
              </span>

              <img
                src={accont}
                alt="Create Account Icon"
                className="w-16 h-16 mx-auto mb-6  p-4 rounded-full bg-[#4F39F630]"
              />

              <h2 className="text-2xl font-semibold mb-3">Create Account</h2>
              <p className="text-gray-500">
                Sign up for free in seconds. No credit card required to get
                started.
              </p>
            </div>

            <div className="relative hover:shadow-2xl transition-all bg-white rounded-2xl shadow-sm border p-10 text-center">
              <span className="absolute top-4 right-4 bg-gradient-to-r from-purple-600 via-violet-600 to-indigo-600 text-white text-sm w-8 h-8 rounded-full flex items-center justify-center">
                02
              </span>

              <img
                src={pakers}
                alt="Choose Products Icon"
                className="w-16 h-16 mx-auto mb-6  p-4 rounded-full bg-[#4F39F630]"
              />

              <h2 className="text-2xl font-semibold mb-3">Choose Products</h2>
              <p className="text-gray-500">
                Browse our catalog and select the tools that fit your needs.
              </p>
            </div>

            <div className="relative shadow-xl hover:shadow-2xl transition-all bg-white rounded-sm border p-10 text-center">
              <span className="absolute top-4 right-4 bg-gradient-to-r from-purple-600 via-violet-600 to-indigo-600 text-white text-sm w-8 h-8 rounded-full flex items-center justify-center">
                03
              </span>

              <img
                src={roket}
                alt="Start Creating Icon"
                className="w-16 h-16 mx-auto mb-6  p-4 rounded-full bg-[#4F39F630]"
              />

              <h2 className="text-2xl font-semibold mb-3">Start Creating</h2>
              <p className="text-gray-500">
                Download and start using your premium tools immediately.
              </p>
            </div>
          </div>
        </div>
      </section>
    );
};

export default Step;