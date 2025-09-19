import React from "react";
import { Link } from "react-router-dom";

const Card = ({ image, category, date, title, description, author }) => {
  return (
    <div className="bg-white rounded-2xl shadow hover:shadow-lg transition duration-300 flex flex-col">
      
      <img
        src={image}
        alt={title}
        className="rounded-t-2xl w-full h-48 md:h-60 lg:h-72 object-cover"
      />

      <div className="flex flex-col flex-grow p-4">
        <div className="flex justify-between items-center mb-3">
          <Link
            
            
            className={`text-xs px-3 py-1 rounded-full font-medium transition ${
              categoryColors[category] || "bg-gray-100 text-gray-600"
            }`}
          >
            {category}
          </Link>

          <div className="flex items-center gap-2 text-gray-500 text-xs">
            <img src="./Vector@2x.png" alt="calendar" className="w-4 h-4" />
            <p>{date}</p>
          </div>
        </div>

        <h3 className="text-lg font-bold mb-2">{title}</h3>

        <p className="text-sm text-gray-600 flex-grow">{description}</p>

        <div className="flex justify-between items-center text-sm text-gray-500 mt-4">
          <span>By {author}</span>
          <Link to="/" className="text-blue-600 font-medium hover:underline">
            Read More
          </Link>
        </div>
      </div>
    </div>
  );
};


const categoryColors = {
  Featured: "bg-blue-100 text-blue-600 hover:bg-blue-200",
  Politics: "bg-green-100 text-green-600 hover:bg-red-200",
  Business: "bg-orange-100 text-orange-600 hover:bg-green-200",
  Science: "bg-purple-100 text-purple-600 hover:bg-purple-200",
  Culture: "bg-yellow-100 text-yellow-600 hover:bg-yellow-200",
  Technology: "bg-pink-100 text-pink-600 hover:bg-pink-200",
};

const CardGrid = () => {
  const data = [
    {
      image: "/Image (1).png",
      category: "Featured",
      date: "June 12, 2023",
      title: "Global Tech Leaders Gather For Annual Innovation",
      description:
        "Industry titans from Silicon Valley to Tokyo converged at this year's Global Tech Summit to discuss emerging trends.",
      author: "Micheal Chen",
    },
    {
      image: "./Imagee.png",
      category: "Politics",
      date: "July 20, 2023",
      title:
        "West African Nations Debate Climate Policy Climate Change Policies Face New Challenges in Developing Countries ...",
      description: "Governments in West Africa face new challenges...",
      author: "Aisha Bello",
    },
    {
      image: "/Image (1).png",
      category: "Business",
      date: "Aug 5, 2023",
      title: "Stock Markets Rally Amidst Tech Boom",
      description: "Investors worldwide are optimistic...",
      author: "John Doe",
    },
    {
      image: "/Image (1).png",
      category: "Science",
      date: "Sep 1, 2023",
      title: "AI Shaping the Future of Education",
      description: "Educators explore AI-driven solutions...",
      author: "Sarah Lin",
    },
    {
      image: "/Image (1).png",
      category: "Culture",
      date: "Sep 10, 2023",
      title: "Global Summit on Renewable Energy",
      description: "Nations commit to green energy transitions...",
      author: "Carlos Vega",
    },
    {
      image: "/Image (1).png",
      category: "Technology",
      date: "Sep 15, 2023",
      title: "Breakthrough in Cancer Research",
      description: "Scientists announce promising new treatment...",
      author: "Dr. Emma Ross",
    },

    // repeat or fetch dynamically
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 my-10 px-4">
      {data.map((card, index) => (
        <Card key={index} {...card} />
      ))}
    </div>
  );
};

export default CardGrid;
