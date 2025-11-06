import React, { useState } from "react";
import { BsArrowLeft } from "react-icons/bs";

const Navbar = () => {
  const [open, setOpen] = useState(true);

  return (
    <div className="flex">
      <div
        className={`bg-indigo-950 h-screen p-5 pt-8 relative transition-all duration-300 ${
          open ? "w-72" : "w-20"
        }`}
      >
        <BsArrowLeft
          className={`bg-white text-indigo-950 text-3xl rounded-full absolute -right-3 top-9 border border-indigo-950 cursor-pointer transition-transform duration-300 ${
            !open && "rotate-180"
          }`}
          onClick={() => setOpen(!open)}
        />
      </div>

      <div className="p-7 flex-1">
        <h1 className="text-2xl font-semibold text-black">Home Page</h1>
      </div>
    </div>
  );
};

export default Navbar;