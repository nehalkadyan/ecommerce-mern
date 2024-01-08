import React from "react";

const HeroSection = () => {
  return (
    <header className="flex flex-col md:flex-row items-center justify-between p-8">
      <div className="md:w-1/2 md:text-left md:p-8 ">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Shoey Marketplace
        </h1>
        <p className="text-lg md:text-xl mb-6">
          Put Your Best Foot Forward with Our Trendsetting Shoes.
        </p>

        <button className="px-4 py-2 rounded bg-slate-900 text-white cursor-pointer">
          Shop Now
        </button>
      </div>

      <div className="md:w-1/2">
        <img
          className="md:p-6 "
          src="https://images.pexels.com/photos/609771/pexels-photo-609771.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="poster"
        />
      </div>
    </header>
  );
};

export default HeroSection;
