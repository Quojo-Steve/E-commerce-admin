import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  AiOutlineLeft,
  AiFillAudio,
  AiFillBank,
  AiFillCar,
} from "react-icons/ai";
import logo from "../images/twitter.png";

const Sidebar = () => {
  const [open, setOpen] = useState(true);
  const [dashboard, setDashboard] = useState(false);
  const [item, setItem] = useState(false);


  const location = useLocation();
  
  useEffect(() => {
    if (location.pathname === "/dashboard") {
      setDashboard(true);
    }
  }, [location.pathname]);

  useEffect(() => {
    if (location.pathname === "/newitems") {
      setItem(true);
    }
  }, [location.pathname]);

 

  return (
    <div>
      <div
        className={`${
          open ? "w-72" : "w-20"
        } duration-300 h-screen p-5 pt-8 bg-[#38d39f] relative`}
      >
        <AiOutlineLeft
          className={`absolute cursor-pointer rounded-full -right-3 top-9 w-7 p-1 bg-white border-2 border-[#38d39f] h-7 ${
            !open && "rotate-180"
          } `}
          onClick={() => {
            setOpen(!open);
          }}
        />
        <div className="flex gap-x-4 items-center">
          <img
            src={logo}
            alt=""
            className={`cursor-pointer duration-500 h-10 w-10 ${
              open && "rotate-[360deg]"
            }`}
          />
          <h1
            className={`text-white origin-left font-medium text-xl duration-300 ${
              !open && "scale-0"
            }`}
          >
            Admin
          </h1>
        </div>
        <ul className="pt-6">
          <li className="duration-300">
            <Link
              to={"/dashboard"}
              className={`${dashboard ? "bg-gray-50" : "hover:bg-gray-50"} text-gray-800 font-bold text-sm flex items-center gap-x-4 cursor-pointer p-2 rounded-md  duration-300 mb-3`}
            >
              <AiFillAudio size={25} />
              <span className={`${!open && "hidden"} origin-left duration-200`}>
                Dashboard
              </span>
            </Link>
            <Link
              to={"/newitems"}
              className={`${item ? "bg-gray-50" : "hover:bg-gray-50"} text-gray-800 font-bold text-sm flex items-center gap-x-4 cursor-pointer p-2 rounded-md duration-300 mb-3`}
            >
              <AiFillCar size={25} />
              <span className={`${!open && "hidden"} origin-left duration-200`}>
                Items
              </span>
            </Link>
            <Link
              to={"/"}
              className={`text-gray-800 font-bold text-sm flex items-center gap-x-4 cursor-pointer p-2 hover:bg-gray-50 rounded-md duration-300 mb-3`}
            >
              <AiFillBank size={25} />
              <span className={`${!open && "hidden"} origin-left duration-200`}>
                Dashboard
              </span>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
