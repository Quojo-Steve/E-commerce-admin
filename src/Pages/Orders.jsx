import React, { useState } from "react";
import { format } from "date-fns";
import { Link } from "react-router-dom";
import { HiOutlineSearch } from "react-icons/hi";
import { getOrderStatus } from "../lib/helpers";
import Headers from "../Components/Headers";
import Sidebar from "../Components/Sidebar";

const recentOrderData = [
  {
    id: "1",
    product_id: "4324",
    customer_id: "23143",
    customer_name: "Shirley A. Lape",
    order_date: "2022-05-17T03:24:00",
    order_total: "$435.50",
    current_order_status: "PLACED",
    shipment_address: "Cottage Grove, OR 97424",
  },
  {
    id: "2",
    product_id: "7453",
    customer_id: "96453",
    customer_name: "Ryan Carroll",
    order_date: "2022-05-14T05:24:00",
    order_total: "$96.35",
    current_order_status: "CONFIRMED",
    shipment_address: "Los Angeles, CA 90017",
  },
  {
    id: "3",
    product_id: "5434",
    customer_id: "65345",
    customer_name: "Mason Nash",
    order_date: "2022-05-17T07:14:00",
    order_total: "$836.44",
    current_order_status: "SHIPPED",
    shipment_address: "Westminster, CA 92683",
  },
  {
    id: "4",
    product_id: "9854",
    customer_id: "87832",
    customer_name: "Luke Parkin",
    order_date: "2022-05-16T12:40:00",
    order_total: "$334.50",
    current_order_status: "SHIPPED",
    shipment_address: "San Mateo, CA 94403",
  },
  {
    id: "5",
    product_id: "8763",
    customer_id: "09832",
    customer_name: "Anthony Fry",
    order_date: "2022-05-14T03:24:00",
    order_total: "$876.00",
    current_order_status: "OUT_FOR_DELIVERY",
    shipment_address: "San Mateo, CA 94403",
  },
  {
    id: "6",
    product_id: "5627",
    customer_id: "97632",
    customer_name: "Ryan Carroll",
    order_date: "2022-05-14T05:24:00",
    order_total: "$96.35",
    current_order_status: "DELIVERED",
    shipment_address: "Los Angeles, CA 90017",
  },
  {
    id: "7",
    product_id: "5627",
    customer_id: "97632",
    customer_name: "Ryan Carroll",
    order_date: "2022-05-14T05:24:00",
    order_total: "$96.35",
    current_order_status: "DELIVERED",
    shipment_address: "Los Angeles, CA 90017",
  },
  {
    id: "8",
    product_id: "5627",
    customer_id: "97632",
    customer_name: "Ryan Carroll",
    order_date: "2022-05-14T05:24:00",
    order_total: "$96.35",
    current_order_status: "DELIVERED",
    shipment_address: "Los Angeles, CA 90017",
  },
  {
    id: "9",
    product_id: "5627",
    customer_id: "97632",
    customer_name: "Ryan Carroll",
    order_date: "2022-05-14T05:24:00",
    order_total: "$96.35",
    current_order_status: "DELIVERED",
    shipment_address: "Los Angeles, CA 90017",
  },
  {
    id: "10",
    product_id: "5627",
    customer_id: "97632",
    customer_name: "Ryan Carroll",
    order_date: "2022-05-14T05:24:00",
    order_total: "$96.35",
    current_order_status: "DELIVERED",
    shipment_address: "Los Angeles, CA 90017",
  },
  {
    id: "11",
    product_id: "5627",
    customer_id: "97632",
    customer_name: "Ryan Carroll",
    order_date: "2022-05-14T05:24:00",
    order_total: "$96.35",
    current_order_status: "DELIVERED",
    shipment_address: "Los Angeles, CA 90017",
  },
];
const Orders = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredOrders = recentOrderData.filter((order) =>
    Object.values(order)
      .join(" ")
      .toLowerCase()
      .includes(searchTerm.toLowerCase())
  );

  return (
    <div className="flex bg-gray-100 overflow-hidden h-screen w-screen flex-row">
      <Sidebar />
      <div className="p-4 pt-0 text-2xl font-semibold flex-1 h-screen overflow-y-scroll">
        <Headers props={true} />
        <div className="flex items-center p-2">
          <h1 className="uppercase text-3xl text-slate-500">Recent Orders</h1>
        </div>
        <div className="bg-white px-4 pt-3 pb-4 rounded-sm border border-gray-200 flex-1 h-[75vh] overflow-y-scroll">
          <div className={`relative`}>
            <HiOutlineSearch
              fontSize={20}
              className={`text-gray-400 absolute top-1/2 -translate-y-1/2 left-3`}
            />
            <input
              type="text"
              placeholder="Search..."
              className={`text-sm focus:outline-none active:outline-none h-10 w-[18rem] border-b-2 border-gray-300 rounded-sm pl-11 pr-4 focus:border-blue-600`}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>{" "}
          <div className="border-x border-gray-200 rounded-sm mt-3">
            <table className="w-full text-gray-700">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Order ID</th>
                  <th>Customer Name</th>
                  <th>Order Date</th>
                  <th>Order Total</th>
                  <th>Shipping Address</th>
                  <th>Order Status</th>
                </tr>
              </thead>
              <tbody>
                {filteredOrders.map((order) => (
                  <tr key={order.id}>
                    <td>{order.id}</td>
                    <td>
                      <Link to={`/order/${order.product_id}`}>
                        #{order.product_id}
                      </Link>
                    </td>
                    <td>
                      <Link to={`/customer/${order.customer_id}`}>
                        {order.customer_name}
                      </Link>
                    </td>
                    <td>{format(new Date(order.order_date), "dd MMM yyyy")}</td>
                    <td>{order.order_total}</td>
                    <td>{order.shipment_address}</td>
                    <td>{getOrderStatus(order.current_order_status)}</td>
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

export default Orders;
