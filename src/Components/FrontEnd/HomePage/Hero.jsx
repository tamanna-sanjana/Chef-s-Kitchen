import React from 'react';

const Hero = () => {
  return (
    <div className="bg-[#2d3548] text-white px-6 py-12 md:py-20 md:px-45">
      <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center justify-between">
        {/* Left Text Content */}
        <div className="text-center md:text-left max-w-xl">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Cook anything <br className="hidden md:block" />
            <span className="text-[#fff]">with the experts</span>
          </h1>
          <p className="text-gray-300 mb-8 md:text-lg">
            From Pan to Plate — Master the Art, Savor the Heart.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <button className="bg-amber-700 hover:bg-amber-800 text-white px-6 py-3 rounded-full font-semibold transition md:w-50 md:h-20">
              Let's cook
            </button>
            <button className="border border-amber-800 hover:bg-amber-700 hover:text-white px-6 py-3 rounded-full font-semibold transition md:w-50 md:h-20">
              Explore now
            </button>
          </div>
        </div>

        {/* Right Image Content */}
        <div className="relative mb-10 md:mb-0">
          <div className="bg-[#f25b4e] rounded-full w-[280px] h-[280px] md:w-[360px] md:h-[350px] flex items-center justify-center overflow-hidden">
            <img
              src="https://i.ibb.co/G4dzG7T1/chef-preparing-food.jpg"
              alt="Cooking man"
              className="object-cover w-full h-full scale-140"
            />
          </div>

          {/* Floating Food Card */}
          <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 translate-y-1/2 bg-white rounded-xl shadow-lg p-2 flex items-center gap-2 w-45 sm:w-44 right-1">
            <img
              src="https://i.ibb.co/yFpM8bLW/images-13.jpg"
              alt="Food"
              className="w-12 h-12 rounded-md object-cover"
            />
            <p className="text-sm text-black font-medium">More than 500+
recipes.

</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
