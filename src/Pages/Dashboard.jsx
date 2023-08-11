import React, { useRef, useEffect } from "react";
import Sidebar from "../Components/Sidebar";
import { Bar } from "react-chartjs-2";
import { Chart } from "chart.js";

const Dashboard = () => {
  const chartRef = useRef(null);
  const data = {
    labels: ["January", "February", "March", "April", "May"],
    datasets: [
      {
        label: "Sales",
        data: [12, 19, 3, 5, 2],
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
      },
    ],
  };

  const options = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  useEffect(() => {
    // Destroy the previous chart instance before rendering a new one
    if (chartRef.current) {
      const chartInstance = new Chart(chartRef.current, {
        type: "bar",
        data: {
          datasets: [],
        },
      });
      chartInstance.destroy();
    }
  }, []);

  return (
    <div className="flex">
      <Sidebar />
      <div className="p-7 text-2xl font-semibold flex-1 h-screen">
        <Bar data={data} options={options} />
      </div>
    </div>
  );
};

export default Dashboard;
