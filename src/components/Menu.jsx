import React from "react";
import { NavLink } from "react-router-dom";

const Menu = () => {
  const menus = [
    {
      menu_name: "Home",
      route: "/",
    },
    {
      menu_name: "Politics",
      route: "/politics",
    },
    {
      menu_name: "Technologies",
      route: "/technologies",
    },
    {
      menu_name: "Business",
      route: "/business",
    },
    {
      menu_name: "Culture",
      route: "/culture",
    },
  ];

  return (
    <div className="flex justify-between h-full w-full py-45 px-[2rem]  ">
      <div className="nav-left">
        <h2 className="text-2xl font-semibold">Choose Category</h2>
      </div>

      <div className="h-[86vh] w-[28%] my-10 mx-4 bg-white rounded-2xl">
        <img
          src="/Image (1).png"
          alt=""
          className="rounded-tl-2xl rounded-tr-2xl"
        />
        <div className="flex gap-[5rem] py-4 px-4">
          <Link className="bg-blue-100 text-xs text-blue-600 px-4 py-1 rounded-full font-medium hover:bg-blue-200 transition">
            Featured
          </Link>
          <div className="flex">
            <div>
              <img
                src="./Vector@2x.png"
                alt=""
                className="w-[16px] h-[16px] "
              />
            </div>
            <div>
              <p>June 12, 2023</p>
            </div>
          </div>
        </div>
        <h3 className="px-4 text-lg font-bold">
          Global Tech Leaders Gather For Annual Innovation
        </h3>
        <p className="px-4 py-4">
          Industry titans from Silicon Valley to Tokyo converged at this year's
          Global Tech Summit to discuss emerging{" "}
        </p>
        <div className="flex gap-[5rem] px-4 text-sm">
          <div>By Micheal Chen</div>
          <div>Read More</div>
        </div>
      </div>

      <div className="h-[86vh] w-[28%] my-10 mx-4 bg-white rounded-2xl">
        <img src={image} alt="" className="rounded-tl-2xl rounded-tr-2xl" />
        <div className="flex gap-[5rem] py-4 px-4">
          <Link className="bg-blue-100 text-xs text-blue-600 px-4 py-1 rounded-full font-medium hover:bg-blue-200 transition">
            {category}
          </Link>
          <div className="flex">
            <div>
              <img
                src="./Vector@2x.png"
                alt=""
                className="w-[16px] h-[16px] "
              />
            </div>
            <div>
              <p>{date}</p>
            </div>
          </div>
        </div>
        <h3 className="px-4 text-lg font-bold">{title}</h3>
        <p className="px-4 py-4">{description}</p>
        <div className="flex gap-[5rem] px-4 text-sm">
          <div>{author}</div>
          <div>Read More</div>
        </div>
      </div>

      <div className="nav-right flex flex-row gap-[4rem]">
        {menus.map((menu, index) => (
          <NavLink
            key={index}
            to={menu.route.startsWith("/") ? menu.route : `/${menu.route}`}
            className={({ isActive }) =>
              `text-xs bg-blue-400 px-4 py-1 ${
                isActive ? "text-yellow-600" : "text-black"
              }`
            }
          >
            {menu.menu_name}
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default Menu;
