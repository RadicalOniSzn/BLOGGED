import React from "react";
import { Link } from "react-router-dom";

const LatestArticle = () => {
  return (
    <div className="flex justify-between h-full w-full pt-45  px-[2rem]  ">
      <div className="nav-left">
        <h2 className="text-2xl font-semibold">Latest Articles</h2>
      </div>

      <div className="nav-right">
        <Link className="text-gray-600 text-xs bg-gray-100 px-4 py-1 rounded-full font-medium hover:bg-blue-600 hover:text-white transition">
          All
        </Link>
        <Link className="text-gray-600 text-xs bg-gray-100 px-4 py-1 rounded-full font-medium hover:bg-blue-600 hover:text-white transition">
          Politics
        </Link>
        <Link className="text-gray-600 text-xs bg-gray-100 px-4 py-1 rounded-full font-medium hover:bg-blue-600 hover:text-white transition">
          Technology
        </Link>
        <Link className="text-gray-600 text-xs bg-gray-100 px-4 py-1 rounded-full font-medium hover:bg-blue-600 hover:text-white transition">
          Business
        </Link>
        <Link className="text-gray-600 text-xs bg-gray-100 px-4 py-1 rounded-full font-medium hover:bg-blue-600 hover:text-white transition">
          Culture
        </Link>
        <Link className="text-gray-600 text-xs bg-gray-100 px-4 py-1 rounded-full font-medium hover:bg-blue-600 hover:text-white transition">
          Science
        </Link>
      </div>
    </div>
  );
};

export default LatestArticle;
