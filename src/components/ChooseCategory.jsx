import React, { useState, useEffect } from "react";
import Card from "./Card";

const catData = [
  { id: 1, title: "All" },
  { id: 2, title: "Politics" },
  { id: 3, title: "Technology" },
  { id: 4, title: "Business" },
  { id: 5, title: "Culture" },
  { id: 6, title: "Science" },
];

const ChooseCategory = () => {
  const [activeCat, setActiveCat] = useState("All");
  const [cards, setCards] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // simple client-side cache to avoid re-importing repeatedly
  const cacheRef = React.useRef({});

  useEffect(() => {
    const fetchCategoryData = async () => {
      setLoading(true);
      setError("");
      try {
        const catKey = activeCat.toLowerCase();
        if (cacheRef.current[catKey]) {
          setCards(cacheRef.current[catKey].slice(0, 6));
          setLoading(false);
          return;
        }

        let module;
        switch (activeCat) {
          case "Politics":
            module = await import("../data/politics");
            break;
          case "Technology":
            module = await import("../data/technology");
            break;
          case "Business":
            module = await import("../data/business");
            break;
          case "Culture":
            module = await import("../data/culture");
            break;
          case "Science":
            module = await import("../data/science");
            break;
          case "All":
          default:
            // import all and combine
            const [
              politics,
              technology,
              business,
              culture,
              science,
            ] = await Promise.all([
              import("../data/politics"),
              import("../data/technology"),
              import("../data/business"),
              import("../data/culture"),
              import("../data/science"),
            ]);
            module = { default: [...politics.default, ...technology.default, ...business.default, ...culture.default, ...science.default] };
            break;
        }

        const items = module.default || [];

        

        cacheRef.current[catKey] = items;
        setCards(items.slice(0, 6));
      } catch (err) {
        console.error("Error loading category data:", err);
        setError("Failed to load articles. Try again.");
        setCards([]);
      } finally {
        setLoading(false);
      }
    };

    fetchCategoryData();
  }, [activeCat]);

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
              {cat.title}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-6">
        {loading && (
          <p className="text-gray-500 text-center py-10">Loading articles...</p>
        )}

        {error && <p className="text-red-500 text-center py-4">{error}</p>}

        {!loading && !error && (
          <>
            {cards.length === 0 ? (
              <p className="text-gray-500 text-center py-10">No articles found for {activeCat}.</p>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 my-6">
                {cards.map((card) => (
                  <Card key={card.id} {...card} />
                ))}
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default ChooseCategory;
