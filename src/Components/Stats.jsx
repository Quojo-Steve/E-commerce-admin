import React from "react";
import { IoBagHandle, IoPieChart, IoPeople, IoCart } from "react-icons/io5";

const Stats = () => {
  return (
    <div className="flex lg:gap-4 gap-1 md:gap-3 w-full flex-wrap">
      <BoxWrapper>
        <div className="rounded-full h-12 w-12 flex items-center justify-center bg-sky-500">
          <IoBagHandle className="text-2xl text-white" />
        </div>
        <div className="pl-4">
          <span className="text-sm text-gray-500 font-light">Total Sales</span>
          <div className="flex items-center">
            <strong className=" text-xl text-gray-700 font-semibold">
              $90191.32
            </strong>
            <span className=" text-sm text-green-500 pl-2">+213</span>
          </div>
        </div>
      </BoxWrapper>
      <BoxWrapper>
        <div className="rounded-full h-12 w-12 flex items-center justify-center bg-orange-600">
          <IoPieChart className="text-2xl text-white" />
        </div>
        <div className="pl-4">
          <span className="text-sm text-gray-500 font-light">Total Expenses</span>
          <div className="flex items-center">
            <strong className=" text-xl text-gray-700 font-semibold">
              $90191.32
            </strong>
            <span className=" text-sm text-green-500 pl-2">+213</span>
          </div>
        </div>
      </BoxWrapper>
      <BoxWrapper>
        <div className="rounded-full h-12 w-12 flex items-center justify-center bg-yellow-400">
          <IoPeople className="text-2xl text-white" />
        </div>
        <div className="pl-4">
          <span className="text-sm text-gray-500 font-light">Total Customers</span>
          <div className="flex items-center">
            <strong className=" text-xl text-gray-700 font-semibold">
              $90191.32
            </strong>
            <span className=" text-sm text-green-500 pl-2">+213</span>
          </div>
        </div>
      </BoxWrapper>
      <BoxWrapper>
        <div className="rounded-full h-12 w-12 flex items-center justify-center bg-green-600">
          <IoCart className="text-2xl text-white" />
        </div>
        <div className="pl-4">
          <span className="text-sm text-gray-500 font-light">Total Orders</span>
          <div className="flex items-center">
            <strong className=" text-xl text-gray-700 font-semibold">
              $90191.32
            </strong>
            <span className=" text-sm text-green-500 pl-2">+213</span>
          </div>
        </div>
      </BoxWrapper>
    </div>
  );
};

export default Stats;

function BoxWrapper({ children }) {
  return (
    <div className="bg-white rounded-sm p-4 flex-1 border border-gray-200 flex items-center">
      {children}
    </div>
  );
}
