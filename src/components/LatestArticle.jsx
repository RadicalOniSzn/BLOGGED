import React from "react";

const LatestArticle = () => {
  return (
    <div className="flex justify-between h-full w-full py-45 px-[2rem]  ">
      <div className="nav-left">
        <h2 className="text-2xl font-semibold">Latest Articles</h2>
      </div>

      <div className="nav-right">
        <button className="text-gray-600 text-xs bg-gray-100 px-4 py-1 rounded-full font-medium hover:bg-blue-600 hover:text-white transition">
          All
        </button>
        <button className="text-gray-600 text-xs bg-gray-100 px-4 py-1 rounded-full font-medium hover:bg-blue-600 hover:text-white transition">
          Politics
        </button>
        <button className="text-gray-600 text-xs bg-gray-100 px-4 py-1 rounded-full font-medium hover:bg-blue-600 hover:text-white transition">
          Technology
        </button>
        <button className="text-gray-600 text-xs bg-gray-100 px-4 py-1 rounded-full font-medium hover:bg-blue-600 hover:text-white transition">
          Business
        </button>
        <button className="text-gray-600 text-xs bg-gray-100 px-4 py-1 rounded-full font-medium hover:bg-blue-600 hover:text-white transition">
          Culture
        </button>
        <button className="text-gray-600 text-xs bg-gray-100 px-4 py-1 rounded-full font-medium hover:bg-blue-600 hover:text-white transition">
          Science
        </button>


      </div>
    </div>
  );
};

export default LatestArticle;
