import React, { useState } from "react";
import { BsArrowLeft, BsSearch } from "react-icons/bs";
import { AiFillEnvironment } from "react-icons/ai";
import { RiDashboardFill } from "react-icons/ri";


const Navbar = () => {
  const [open, setOpen] = useState(true);

  const Menus = [
    { title: "Dashboard" },
    { title: "Pages" },
    { title: "Media", spacing: true },
    {
      title: "Projects",
      submenu: true,
      submenuItems: [
        { title: "Submenu 1" },
        { title: "Submenu 2" },
        { title: "Submenu 3" },
        
      ],
    },
    
    { title: "Analytic" },
    { title: "Inbox" },
    { title: "Profile", spacing: true },
    { title: "Setting" },
    { title: "Logout" },
    
  ];

  return (
    <div className="flex">
      <div
        className={`bg-indigo-950 h-screen p-5 pt-8 relative transition-all duration-300 ${
          open ? "w-72" : "w-20"
        }`}>
        <BsArrowLeft
          className={`bg-white text-indigo-950 text-3xl rounded-full absolute -right-3 top-9 border border-indigo-950 cursor-pointer transition-transform duration-300 ${
            !open && "rotate-180"
          }`}
          onClick={() => setOpen(!open)}
        />
        <div className="inline-flex">
          <AiFillEnvironment
            className={`bg-amber-200 text-4xl rounded cursor-pointer float-left mr-2 duration-500  ${
              open && "rotate-360"
            }`}
          />
          <h1
            className={`text-white origin-left font-medium text-2xl duration-300 ${
              !open && "scale-0"
            }`}>
            Tailwind
          </h1>
        </div>
        <div
          className={`flex items-center rounded-md bg-amber-50 mt-5 py-2 transition-all duration-300 ${
            open ? "px-4" : "px-2.5"
          }`}>
          <BsSearch
            className={`text-black text-lg cursor-pointer transition-all duration-300 ${
              open ? "mr-3" : "mx-auto"
            }`}
          />
          {open && (
            <input
              type="search"
              placeholder="Search"
              className="flex-1 bg-transparent text-black text-sm placeholder-gray-500 py-2 focus:outline-none"
            />
          )}
        </div>
        <ul className="pt-2 ">
          {Menus.map((menu, index) => (
            <>
              <li
                key={index}
                className={`text-gray-300 text-sm flex items-center gap-x-4 cursor-pointer p-2 hover:bg-blue-700 rounded-md ${
                  menu.spacing ? "mt-9" : ""
                }`}>
                <span className="text-2xl block float-left">
                  <RiDashboardFill />
                </span>
                <span
                  className={`text-base font-medium flex-1 ${
                    !open ? "hidden" : ""
                  }`}>
                  {menu.title}
                </span>
              </li>
            </>
          ))}
        </ul>
      </div>

      <div className="p-7 flex-1">
        <h1 className="text-2xl font-semibold text-black">Home Page</h1>
      </div>
    </div>
  );
};

export default Navbar;