import React from "react";
import Sidebar from "../Components/Sidebar";
import { Chart, ArcElement, Tooltip, Legend } from "chart.js";
// import { Pie } from "react-chartjs-2";
import Headers from "../Components/Headers";
import Stats from "../Components/Stats";
import TransactionCharts from "../Components/TransactionCharts";
import BuyerProfileChart from "../Components/BuyerProfileChart";

Chart.register(ArcElement, Tooltip, Legend);

const Dashboard = () => {

  return (
    <div className="flex bg-gray-100">
      <Sidebar />
      <div className="p-4 pt-0 text-2xl font-semibold flex-1 h-screen ">
        <Headers />
        <div className="flex flex-col gap-4">
          <Stats />
          <div className="flex flex-row gap-4 w-full ">
            <TransactionCharts />
            <BuyerProfileChart />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
