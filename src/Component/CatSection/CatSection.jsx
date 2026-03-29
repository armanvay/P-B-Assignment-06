import React from 'react';

const CatSection = () => {
  return (
    <section className="bg-gradient-to-r from-purple-600 via-violet-600 to-indigo-600 py-20 px-4 text-center text-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold mb-6">
          Ready To Transform Your Workflow?
        </h2>

        <p className="text-lg opacity-90 mb-10 max-w-2xl mx-auto leading-relaxed">
          Join thousands of professionals who are already using Digitools to
          work smarter. Start your free trial today.
        </p>

        <div className="flex flex-wrap justify-center gap-4 mb-8">
          <button className="bg-white cursor-pointer text-purple-600 font-semibold px-8 py-3 rounded-full hover:bg-gray-100 transition duration-300">
            Explore Products
          </button>
          <button className="border-2 cursor-pointer border-white/50 text-white font-semibold px-8 py-3 rounded-full hover:bg-white/10 transition duration-300">
            View Pricing
          </button>
        </div>

        <p className="text-sm opacity-80">
          14-day free trial • No credit card required • Cancel anytime
        </p>
      </div>
    </section>
  );
};

export default CatSection;