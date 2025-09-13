import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="w-full px-4 my-10 lg:my-16">
      
      <Link className="bg-blue-100 text-xs md:text-sm text-blue-600 px-4 py-1 rounded-full font-medium hover:bg-blue-200 transition">
        Featured
      </Link>

     
      <h1 className="text-2xl sm:text-3xl lg:text-4xl max-w-full lg:max-w-[65%] font-semibold py-4">
        The Future of Artificial Intelligence in Modern Healthcare
      </h1>

      
      <div className="flex flex-wrap items-center text-xs sm:text-sm text-gray-500 pb-5 gap-2">
        <p>By Sarah Johnson</p>
        <img src="./Vector@2x.png" alt="" className="w-4 h-4" />
        <p className="px-2 sm:px-3">June 15, 2023</p>
      </div>

      
      <div className="flex flex-col lg:flex-row gap-6 lg:gap-[4%] w-full">
        
        <div className=" w-full lg:w-[50%]">
          <img
            src="./Image (6).png"
            alt=""
            className="w-full h-auto rounded-lg object-cover"
          />
        </div>

        
        <div className=" w-full lg:w-[45%]">
          <p className="pb-5 text-gray-500 text-sm sm:text-base">
            Artificial intelligence is revolutionizing healthcare delivery
            across the globe, enabling earlier disease detection, more precise
            treatments, and improved patient outcomes. Recent breakthroughs in
            machine learning algorithms have shown promising results in
            diagnostic accuracy that sometimes surpass human capabilities.
          </p>
          <p className="py-6 text-gray-500 text-sm sm:text-base">
            However, as these technologies become more integrated into clinical
            workflows, important questions about ethics, data privacy, and the
            future role of healthcare professionals remain at the forefront of
            discussions.
          </p>
          <Link className="bg-blue-600 text-white text-sm px-5 py-2 rounded-md font-medium hover:bg-blue-700 transition">
            Read Full Article
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
