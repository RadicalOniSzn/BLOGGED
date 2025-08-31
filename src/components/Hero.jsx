import React from "react";

const Hero = () => {
  return (
    <div className="h-[80vh] w-full my-10 mx-4">
      <button className="bg-blue-100 text-xs text-blue-600 px-4 py-1 rounded-full font-medium hover:bg-blue-200 transition">
        Featured
      </button>

      <h1 className="text-4xl max-w-[65%] font-semibold py-4">
        The Future of Artificial Intelligence in Modern Healthcare
      </h1>

      <div className="flex justify-normal pb-5">
        <div>
          <p className="text-gray-500 text-xs pr-[10px]">By Sarah Johnson </p>
        </div>
        <div>
          <img src="./Vector@2x.png" alt="" className="w-[16px] h-[16px] "/>
        </div>
        <div><p className="text-gray-500 text-xs px-[12px]"> June 15, 2023</p></div>
      </div>

      <div className="flex w-[100%] gap-[4%]">
        <div className="">
          <img src="./Image (6).png" alt="" />
        </div>
        <div className="max-w-[45%]">
          <p className="pb-5 text-gray-500" >
            Artificial intelligence is revolutionizing healthcare delivery
            across the globe, enabling earlier disease detection, more precise
            treatments, and improved patient outcomes. Recent breakthroughs in
            machine learning algorithms have shown promising results in
            diagnostic accuracy that sometimes surpass human capabilities.{" "}
            <br />
          </p>{" "}
          <p className="py-[2rem] text-gray-500">
            However, as these technologies become more integrated into clinical
            workflows, important questions about ethics, data privacy, and the
            future role of healthcare professionals remain at the forefront of
            discussions.
          </p>
          <button className="bg-blue-600 text-white text-sm px-5 py-2 rounded-md font-medium hover:bg-blue-700 transition">
            Read Full Article
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
