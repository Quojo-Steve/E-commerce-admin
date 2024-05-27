import React from "react";
import Sidebar from "../Components/Sidebar";
import Headers from "../Components/Headers";

const transactions = [
  { id: 1, user: "John Doe", amount: "$120.00", status: "Completed", date: "2024-05-01" },
  { id: 2, user: "Jane Smith", amount: "$75.50", status: "Pending", date: "2024-05-02" },
  { id: 3, user: "Emily Johnson", amount: "$50.00", status: "Completed", date: "2024-05-03" },
  { id: 4, user: "Michael Brown", amount: "$99.99", status: "Cancelled", date: "2024-05-04" },
  // Add more transactions as needed
];

const Transactions = () => {
  return (
    <div className="flex bg-gray-100 overflow-hidden h-screen w-screen">
      <Sidebar />
      <div className="flex flex-col flex-1 h-screen">
        <Headers props={false} />
        <div className="flex-1 overflow-y-scroll p-4 pt-0 text-2xl font-semibold">
          <div className="transactions flex flex-col h-full bg-white p-4 rounded-lg shadow-md">
            <div className="flex items-center justify-between p-2 border-b">
              <h1 className="uppercase text-3xl text-slate-500">Transactions</h1>
              <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-700">
                Add Transaction
              </button>
            </div>
            <table className="min-w-full mt-4">
              <thead>
                <tr>
                  <th className="px-4 py-2 border-b">ID</th>
                  <th className="px-4 py-2 border-b">User</th>
                  <th className="px-4 py-2 border-b">Amount</th>
                  <th className="px-4 py-2 border-b">Status</th>
                  <th className="px-4 py-2 border-b">Date</th>
                  <th className="px-4 py-2 border-b">Actions</th>
                </tr>
              </thead>
              <tbody>
                {transactions.map((transaction) => (
                  <tr key={transaction.id} className="hover:bg-gray-100">
                    <td className="px-4 py-2 border-b">{transaction.id}</td>
                    <td className="px-4 py-2 border-b">{transaction.user}</td>
                    <td className="px-4 py-2 border-b">{transaction.amount}</td>
                    <td className={`px-4 py-2 border-b ${transaction.status === 'Completed' ? 'text-green-500' : transaction.status === 'Pending' ? 'text-yellow-500' : 'text-red-500'}`}>
                      {transaction.status}
                    </td>
                    <td className="px-4 py-2 border-b">{transaction.date}</td>
                    <td className="px-4 py-2 border-b">
                      <button className="text-blue-500 hover:underline mr-2">View</button>
                      <button className="text-red-500 hover:underline">Delete</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Transactions;
