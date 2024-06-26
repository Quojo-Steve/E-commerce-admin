import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { AiOutlineLeft } from "react-icons/ai";
import {
  HiViewGrid,
  HiOutlineCube,
  HiOutlineShoppingCart,
  HiOutlineUsers,
  HiOutlineDocumentText,
  HiOutlineAnnotation,
  HiCalendar,
  HiOutlineLogout,
  HiOutlineQuestionMarkCircle,
} from "react-icons/hi";
import logo from "../images/twitter.png";

const Sidebar = () => {
  const [open, setOpen] = useState(false);
  const [dashboard, setDashboard] = useState(false);
  const [item, setItem] = useState(false);
  const [customer, setCustomer] = useState(false);
  const [review, setReview] = useState(false);
  const [orders, setOrders] = useState(false);
  const [calendar, setCalendar] = useState(false);
  const [faq, setFaq] = useState(false);
  const [transaction, setTransaction] = useState(false);

  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/") {
      setDashboard(true);
    }
  }, [location.pathname]);

  useEffect(() => {
    if (
      location.pathname === "/products" ||
      location.pathname.startsWith("/product/") ||
      location.pathname === "/addproduct"
    ) {
      setItem(true);
    }
  }, [location.pathname]);

  useEffect(() => {
    if (
      location.pathname === "/reviews" ||
      location.pathname.startsWith("/review/")
    ) {
      setReview(true);
    }
  }, [location.pathname]);

  useEffect(() => {
    if (location.pathname === "/customers") {
      setCustomer(true);
    }
  }, [location.pathname]);

  useEffect(() => {
    if (location.pathname === "/orders") {
      setOrders(true);
    }
  }, [location.pathname]);

  useEffect(() => {
    if (location.pathname === "/calendar") {
      setCalendar(true);
    }
  }, [location.pathname]);

  useEffect(() => {
    if (location.pathname === "/transactions") {
      setTransaction(true);
    }
  }, [location.pathname]);

  useEffect(() => {
    if (location.pathname === "/faq") {
      setFaq(true);
    }
  }, [location.pathname]);

  return (
    <div>
      <div
        className={`${
          open ? "w-56" : "w-20"
        } duration-300 h-screen p-2 pt-8 bg-[#38d39f] relative`}
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
            className={`cursor-pointer duration-500 h-10 w-10 ml-2 -mb-3 ${
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
        <ul className="pt-6 mb-7">
          <li className="duration-300">
            <Link
              to={"/"}
              className={`${dashboard ? "bg-gray-50" : "hover:bg-gray-50"} ${
                !open ? "flex-col" : "flex-row"
              } text-gray-800 font-bold text-sm flex items-center gap-x-4 cursor-pointer p-2 rounded-md  duration-300 mb-2`}
            >
              <HiViewGrid size={20} />
              <span
                className={`${
                  !open ? "text-[10px]" : "text-base"
                } duration-300 origin-left`}
              >
                Dashboard
              </span>
            </Link>
            <Link
              to={"/products"}
              className={`${item ? "bg-gray-50" : "hover:bg-gray-50"} ${
                !open ? "flex-col" : "flex-row"
              } text-gray-800 font-bold text-sm flex items-center gap-x-4 cursor-pointer p-2 rounded-md duration-300 mb-2`}
            >
              <HiOutlineCube size={20} />
              <span
                className={`${
                  !open ? "text-xs" : "text-base"
                } duration-300 origin-left`}
              >
                Products
              </span>
            </Link>
            <Link
              to={"/orders"}
              className={`${orders ? "bg-gray-50" : "hover:bg-gray-50"} ${
                !open ? "flex-col" : "flex-row"
              } text-gray-800 font-bold text-sm flex items-center gap-x-4 cursor-pointer p-2 hover:bg-gray-50 rounded-md duration-300 mb-2`}
            >
              <HiOutlineShoppingCart size={20} />
              <span
                className={`${
                  !open ? "text-xs" : "text-base"
                } duration-300 origin-left`}
              >
                Orders
              </span>
            </Link>
            <Link
              to={"/customers"}
              className={`${customer ? "bg-gray-50" : "hover:bg-gray-50"} ${
                !open ? "flex-col" : "flex-row"
              } text-gray-800 font-bold text-sm flex items-center gap-x-4 cursor-pointer p-2 rounded-md duration-300 mb-2`}
            >
              <HiOutlineUsers size={20} />
              <span
                className={`${
                  !open ? "text-xs" : "text-base"
                } duration-300 origin-left`}
              >
                Customers
              </span>
            </Link>
            <Link
              to={"/transactions"}
              className={`text-gray-800 ${
                transaction ? "bg-gray-50" : "hover:bg-gray-50"
              } ${
                !open ? "flex-col" : "flex-row"
              } font-bold text-sm flex items-center gap-x-4 cursor-pointer p-2 hover:bg-gray-50 rounded-md duration-300 mb-2`}
            >
              <HiOutlineDocumentText size={20} />
              <span
                className={`${
                  !open ? "text-[10px]" : "text-base"
                } duration-300 origin-left`}
              >
                Transactions
              </span>
            </Link>
            <Link
              to={"/reviews"}
              className={`text-gray-800 ${
                review ? "bg-gray-50" : "hover:bg-gray-50"
              } ${
                !open ? "flex-col" : "flex-row"
              } font-bold text-sm flex items-center gap-x-4 cursor-pointer p-2 hover:bg-gray-50 rounded-md duration-300 mb-2`}
            >
              <HiOutlineAnnotation size={20} />
              <span
                className={`${
                  !open ? "text-xs" : "text-base"
                } duration-300 origin-left`}
              >
                Reviews
              </span>
            </Link>
          </li>
        </ul>
        <ul className="pt-2 flex flex-col gap-0.5 border-t border-neutral-700">
          <li className="duration-300">
            <Link
              to={"/calendar"}
              className={`${calendar ? "bg-gray-50" : "hover:bg-gray-50"} ${
                !open ? "flex-col" : "flex-row"
              } text-gray-800 font-bold text-sm flex items-center gap-x-4 cursor-pointer p-2 rounded-md duration-300 mb-2`}
            >
              <HiCalendar size={20} />
              <span
                className={`${
                  !open ? "text-xs" : "text-base"
                } duration-300 origin-left`}
              >
                Calendar
              </span>
            </Link>
            <Link
              to={"/faq"}
              className={`${faq ? "bg-gray-50" : "hover:bg-gray-50"} ${
                !open ? "flex-col" : "flex-row"
              } text-gray-800 font-bold text-sm flex items-center gap-x-4 cursor-pointer p-2 rounded-md duration-300 mb-2`}
            >
              <HiOutlineQuestionMarkCircle size={20} />
              <span
                className={`${
                  !open ? "text-xs" : "text-base"
                } duration-300 origin-left`}
              >
                FAQs
              </span>
            </Link>
            <Link
              to={"/"}
              className={`${
                !open ? "flex-col" : "flex-row"
              } text-red-500 font-bold text-sm flex items-center gap-x-4 cursor-pointer p-2 hover:bg-gray-50 rounded-md duration-300`}
            >
              <HiOutlineLogout size={20} />
              <span
                className={`${
                  !open ? "text-xs" : "text-base"
                } duration-300 origin-left`}
              >
                Logout
              </span>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
