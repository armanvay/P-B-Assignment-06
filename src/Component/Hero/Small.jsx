import React from 'react';

const Small = () => {
    return (
      <div>
        <section className="bg-gradient-to-r from-purple-600 via-violet-600 to-indigo-600  py-6 mb-10">
          <div className="max-w-7xl mx-auto grid md:grid-cols-5 gap-8 text-center text-white">
            <div>
              <h3 className="text-4xl font-bold">50K+</h3>
              <p className="text-purple-200 mt-1">Active Users</p>
            </div>
            <div className="hidden md:flex items-center max-sm:hidden justify-center">
              <div className="h-16 w-[1px] bg-purple-300/50"></div>
            </div>
            <div>
              <h3 className="text-4xl font-bold">200+</h3>
              <p className="text-purple-200 mt-1">Premium Tools</p>
            </div>
            <div className="hidden md:flex items-center justify-center max-sm:hidden">
              <div className="h-16 w-[1px] bg-purple-300/50"></div>
            </div>
            <div>
              <h3 className="text-4xl font-bold">4.9</h3>
              <p className="text-purple-200 mt-1">Rating</p>
            </div>
          </div>
        </section>
      </div>
    );
};

export default Small;