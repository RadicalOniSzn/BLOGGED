import React, { useState } from "react";
import { Link } from "react-router-dom";

const ChooseCategory = () => {
  const [activeCat, setActiveCat] = useState("All");

  const catData = [
    { id: 1, title: "All" },
    { id: 2, title: "Politics" },
    { id: 3, title: "Technology" },
    { id: 4, title: "Business" },
    { id: 5, title: "Culture" },
    { id: 6, title: "Science" },
  ];

  return (
    <div className="w-full px-4 md:px-8 py-6">
      
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <h2 className="text-xl md:text-2xl font-semibold">Choose Category</h2>

        
        <div className="flex flex-wrap md:flex-nowrap gap-2 overflow-x-auto no-scrollbar">
          {catData.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCat(cat.title)}
              className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition 
                ${
                  cat.title === activeCat
                    ? "bg-blue-600 text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
            >
              <Link>{cat.title}</Link>
            </button>
          ))}
        </div>
      </div>

      
      <div className="mt-6">
        {activeCat === "All" && <div>all content</div>}
        {activeCat === "Politics" && <div>politics content</div>}
        {activeCat === "Technology" && <div>technology content</div>}
        {activeCat === "Business" && <div>business content</div>}
        {activeCat === "Culture" && <div>culture content</div>}
        {activeCat === "Science" && <div>science content</div>}
      </div>
    </div>
  );
};

export default ChooseCategory;
