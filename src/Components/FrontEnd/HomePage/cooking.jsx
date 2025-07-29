import React from "react";

const Cooking = () => {
  return (
    <>
      <div className="bg-black text-white px-6 py-12 md:py-10 md:px-35">
        <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center justify-between gap-10">
          {/* Left Image Content */}
          <div className="relative mb-10 md:mb-0">
            <div className="bg-black w-[280px] h-[280px] md:w-[460px] md:h-[650px] flex items-center justify-center overflow-hidden">
              <img
                src="https://i.ibb.co/0p0PsTZ1/Chef-s-1.jpg"
                alt="Cooking man"
                className="object-cover w-full h-full scale-140"
              />
            </div>
          </div>
          {/* Left Text Content */}
          <div className="text-center md:text-left max-w-xl pl-20">
            <p className="text-amber-600 tracking-widest uppercase text-lg">
              C&nbsp;O&nbsp;O&nbsp;K&nbsp;&nbsp;W&nbsp;I&nbsp;T&nbsp;H&nbsp;&nbsp;U&nbsp;S
            </p>

            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Cooking together with<br className="hidden md:block" />
              <span className="text-[#fff]">the expert. </span>
            </h1>
            <p className="text-gray-300 mb-8 md:text-sm">
              Join hands-on cooking sessions guided by professional chefs who bring years of culinary experience to your kitchen. Whether you're a beginner or looking to master advanced techniques, our experts will walk you through every step — from ingredient selection to final plating. You'll learn secret tips, time-saving hacks, and authentic recipes that make your cooking stand out.
            </p>
            <p className="text-gray-300 mb-8 md:text-sm">
               Experience the joy of creating delicious dishes together, ask questions in real-time, and gain confidence in your cooking skills with personalized guidance from the best in the field.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <button className="bg-amber-700 hover:bg-amber-800 text-white px-6 py-3 rounded-full font-semibold transition md:w-50 md:h-20">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cooking;
