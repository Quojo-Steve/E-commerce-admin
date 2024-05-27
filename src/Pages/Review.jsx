import React from "react";
import Sidebar from "../Components/Sidebar";
import Headers from "../Components/Headers";
import "./EachProduct.css";
import { products } from "../data";
import { useParams } from "react-router-dom";
import bg from "../images/bg.jpg";
import { IoSendSharp } from "react-icons/io5";

const Review = () => {
  const { id } = useParams();
  const product = products.find((product) => product.id === parseInt(id));
  if (!product) {
    return <div>No such review</div>;
  }

  return (
    <div className="flex bg-gray-100 overflow-hidden h-screen w-screen">
      <Sidebar />
      <div className="flex flex-col flex-1 h-screen">
        <Headers props={false} />
        <div className="flex-1 overflow-y-scroll p-4 pt-0 text-2xl font-semibold">
          <div className="products flex flex-col h-full">
            <div className="flex items-center p-2">
              <h1 className="uppercase text-3xl text-slate-500">Review</h1>
            </div>
            <div className="flex flex-col flex-grow bg-white p-3 relative">
              <div>
                <div className="w-full flex items-center gap-4">
                  <div className="flex items-center">
                    <img src={product.img} alt="" className="w-36 h-32" />
                  </div>
                  <div>
                    <p>{product.title}</p>
                    <p className="font-medium text-lg">
                      Average rating:{" "}
                      <span className="text-green-400">3.5</span>
                    </p>
                  </div>
                </div>
                <hr className="hr-thick mr-5 mt-3" />
                <div className="w-full flex items-center gap-4 mt-4 mb-1">
                  <div className="flex items-center">
                    <img src={bg} alt="" className="w-16 h-16 rounded-full" />
                  </div>
                  <div>
                    <p className="font-semibold text-xl">
                      Anne Marie{" "}
                      <span className="text-xs font-light">
                        21st June, 2000
                      </span>
                    </p>
                    <p className="font-medium text-lg">
                      Rating: <span className="text-green-400">3.5</span>
                    </p>
                  </div>
                </div>
                <div className="text-base text-justify font-medium">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Eveniet optio aspernatur neque quo similique non minima,
                  repudiandae, autem, maiores
                </div>
                <hr className="mr-5 mt-3" />
                <div className="text-base text-justify font-medium my-3">
                  <div className="font-semibold text-xl mb-2">
                    Reply{" "}
                    <span className="text-xs font-light">21st June, 2000</span>
                  </div>
                  No reply
                </div>
              </div>

              <div className="mt-4 flex gap-6">
                <input
                  type="text"
                  placeholder="Reply to this review"
                  className="border w-full p-2 text-lg font-normal"
                />
                <button className="bg-[#38d39f] text-white p-4 rounded-full shadow-lg hover:bg-[#3fbb92] focus:outline-none">
                  <IoSendSharp size={24} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
