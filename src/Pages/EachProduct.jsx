import React from "react";
import { useParams } from "react-router-dom";
import Sidebar from "../Components/Sidebar";
import Headers from "../Components/Headers";
import { products } from "../data";
import { Link } from "react-router-dom";
import "./EachProduct.css";
import {
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const EachProduct = () => {
  const { id } = useParams();
  const product = products.find((product) => product.id === parseInt(id));
  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div>
      <div className="">
        <div className="flex bg-gray-100 overflow-hidden h-screen w-screen flex-row ">
          <Sidebar />
          <div className="p-4 pt-0 text-2xl font-semibold flex-1 h-screen overflow-y-scroll">
            <Headers />
            <div className="products">
              <div className="flex items-center p-2">
                <h1 className="uppercase text-3xl text-slate-500">Product</h1>
              </div>
              <div className="flex w-full justify-between bg-white h-full p-3">
                <div className="w-1/2">
                  <div className="flex items-center">
                    <img src={product.img} alt="" className="w-36 h-32" />
                    <Link
                      to={`/updateproduct/${product.id}`}
                      className="bg-green-300 p-1 px-4 w-fit h-fit hover:bg-green-200 text-black duration-150 rounded ml-4 font-medium text-sm"
                    >
                      Update Product
                    </Link>
                  </div>
                  <p>{product.title}</p>
                  <div className="flex">
                    <p className="font-semibold text-lg">Price: </p>
                    <p className="font-medium text-lg ml-4">{product.price}</p>
                  </div>
                  <div className="flex">
                    <p className="font-semibold text-lg">Category: </p>
                    <p className="font-medium text-lg ml-4 capitalize">
                      {product.category}
                    </p>
                  </div>
                  <div className="flex">
                    <p className="font-semibold text-lg">Producer: </p>
                    <p className="font-medium text-lg ml-4 capitalize">
                      {product.producer}
                    </p>
                  </div>
                  <div className="flex">
                    <p className="font-semibold text-lg">Color: </p>
                    <p className="font-medium text-lg ml-4 capitalize">
                      {product.color}
                    </p>
                  </div>
                  <div className="flex">
                    <span
                      className={`${
                        product.inStock === 0
                          ? "text-red-500"
                          : product.inStock > 50
                          ? "text-green-500"
                          : "text-orange-500"
                      } font-semibold text-lg`}
                    >
                      In Stock:
                    </span>
                    <p className="font-medium text-lg ml-4">
                      {product.inStock === 0 ? "Out of Stock" : product.inStock}
                    </p>
                  </div>
                  <hr className="hr-thick mr-5 mt-3" />
                  {product.chart && (
                    <div className="chart">
                      <ResponsiveContainer width="100%" height="100%">
                        <LineChart
                          width={700}
                          height={700}
                          data={product.chart.data}
                          margin={{
                            top: 5,
                            right: 30,
                            left: 0,
                            bottom: 5,
                          }}
                        >
                          <XAxis
                            dataKey="name"
                            tick={{ fontSize: 12 }}
                            interval={0}
                            tickCount={product.chart.data.length}
                          />
                          <YAxis tick={{ fontSize: 12 }} />
                          <Tooltip />
                          <Legend />
                          {product.chart.dataKeys.map((dataKey) => (
                            <Line
                              type="monotone"
                              dataKey={dataKey.name}
                              stroke={dataKey.color}
                            />
                          ))}
                        </LineChart>
                      </ResponsiveContainer>
                    </div>
                  )}
                </div>
                <div className="w-1/2">
                  <div className="activities">
                    <h1>Latest Activities</h1>
                    {product.activities && (
                      <ul>
                        {product.activities.map((activity) => (
                          <li key={activity.text}>
                            <div>
                              <p className="text-xl">{activity.text}</p>
                              <time>{activity.time}</time>
                            </div>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EachProduct;
