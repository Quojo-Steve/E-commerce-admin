import React from "react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const TransactionCharts = () => {
  const data = [
    {
      name: "Jan",
      Expense: 4000,
      Income: 2400,
    },
    {
      name: "Feb",
      Expense: 1000,
      Income: 2400,
    },
    {
      name: "Mar",
      Expense: 7000,
      Income: 2900,
    },
    {
      name: "Apr",
      Expense: 4000,
      Income: 9400,
    },
    {
      name: "May",
      Expense: 6000,
      Income: 2800,
    },
    {
      name: "Jun",
      Expense: 1000,
      Income: 2600,
    },
    {
      name: "Jul",
      Expense: 1000,
      Income: 1400,
    },
    {
      name: "Aug",
      Expense: 4000,
      Income: 2400,
    },
    {
      name: "Sep",
      Expense: 4000,
      Income: 2400,
    },
    {
      name: "Oct",
      Expense: 4000,
      Income: 2400,
    },
    {
      name: "Nov",
      Expense: 4000,
      Income: 2400,
    },
    {
      name: "Dec",
      Expense: 4000,
      Income: 2400,
    },
  ];
  return (
    <div className="h-[22rem] bg-white p-4 rounded-sm border border-gray-200 flex flex-col flex-1">
      <strong className="text-gray-700 text-base font-medium">Transactions</strong>
      <div className="w-full mt-3 flex-1 text-xs">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            width={500}
            height={300}
            data={data}
            margin={{ top: 20, right: 10, left: -10, bottom: 0 }}
          >
            <CartesianGrid strokeDasharray="3 3 0 0" vertical={false} />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="Income" fill="#0ea5e9" />
            <Bar dataKey="Expense" fill="#ea588c" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default TransactionCharts;
