import React from "react";
import Sidebar from "../Components/Sidebar";
import Headers from "../Components/Headers";
import Stats from "../Components/Stats";
import TransactionCharts from "../Components/TransactionCharts";
import BuyerProfileChart from "../Components/BuyerProfileChart";
import RecentOrders from "../Components/RecentOrders";
import PopularProducts from "../Components/PopularProducts";


const Dashboard = () => {
  return (
    <div className="">
      <div className="flex bg-gray-100 overflow-hidden h-screen w-screen flex-row ">
        <Sidebar />
        <div className="p-4 pt-0 text-2xl font-semibold flex-1 h-screen overflow-y-scroll">
          <Headers />
          <div className="flex flex-col gap-4 flex-wrap">
            <Stats />
            <div className="flex flex-row gap-4 w-full flex-wrap ">
              <TransactionCharts />
              <BuyerProfileChart />
            </div>
            <div className="flex flex-row gap-4 w-full flex-wrap">
              <RecentOrders />
              <PopularProducts />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
