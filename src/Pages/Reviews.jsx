import React from "react";
import Sidebar from "../Components/Sidebar";
import Headers from "../Components/Headers";
import { Link } from "react-router-dom";
import "./Page.css";

const Reviews = () => {
  return (
    <div className="">
      <div className="flex bg-gray-100 overflow-hidden h-screen w-screen flex-row ">
        <Sidebar />
        <div className="p-4 pt-0 text-2xl font-semibold flex-1 h-screen overflow-y-scroll">
          <Headers />
          <div className="flex flex-col gap-4 flex-wrap">
            <div className="flex lg:gap-6 gap-2 md:gap-4 w-full flex-wrap">
                <BoxWrapper>
                  <div className="rounded-full h-16 w-16 flex items-center justify-center bg-sky-900/5">
                    <img
                      src="https://store.sony.com.au/on/demandware.static/-/Sites-sony-master-catalog/default/dw1b537bbb/images/PLAYSTATION5W/PLAYSTATION5W.png"
                      alt="item"
                    />
                  </div>
                  <div className="pl-4">
                    <strong className="text-lg text-gray-700 font-semibold truncate-overflow">
                      Playstation 5 Digital Edition
                    </strong>
                    <span className="text-xs text-gray-500 font-light truncate-overflow">
                      The game was lagging
                    </span>
                  </div>
                </BoxWrapper>
                <BoxWrapper>
                  <div className="rounded-full h-16 w-16 flex items-center justify-center bg-sky-900/5">
                    <img
                      src="https://store.sony.com.au/on/demandware.static/-/Sites-sony-master-catalog/default/dw1b537bbb/images/PLAYSTATION5W/PLAYSTATION5W.png"
                      alt="item"
                    />
                  </div>
                  <div className="pl-4">
                    <strong className="text-lg text-gray-700 font-semibold truncate-overflow">
                      Playstation 5 Digital Edition
                    </strong>
                    <span className="text-xs text-gray-500 font-light truncate-overflow">
                      The game was lagging
                    </span>
                  </div>
                </BoxWrapper>
                <BoxWrapper>
                  <div className="rounded-full h-16 w-16 flex items-center justify-center bg-sky-900/5">
                    <img
                      src="https://store.sony.com.au/on/demandware.static/-/Sites-sony-master-catalog/default/dw1b537bbb/images/PLAYSTATION5W/PLAYSTATION5W.png"
                      alt="item"
                    />
                  </div>
                  <div className="pl-4">
                    <strong className="text-lg text-gray-700 font-semibold truncate-overflow">
                      Playstation 5 Digital Edition
                    </strong>
                    <span className="text-xs text-gray-500 font-light truncate-overflow">
                      The game was lagging
                    </span>
                  </div>
                </BoxWrapper>
                <BoxWrapper>
                  <div className="rounded-full h-16 w-16 flex items-center justify-center bg-sky-900/5">
                    <img
                      src="https://store.sony.com.au/on/demandware.static/-/Sites-sony-master-catalog/default/dw1b537bbb/images/PLAYSTATION5W/PLAYSTATION5W.png"
                      alt="item"
                    />
                  </div>
                  <div className="pl-4">
                    <strong className="text-lg text-gray-700 font-semibold truncate-overflow">
                      Playstation 5 Digital Edition
                    </strong>
                    <span className="text-xs text-gray-500 font-light truncate-overflow">
                      The game was lagging
                    </span>
                  </div>
                </BoxWrapper>
                <BoxWrapper>
                  <div className="rounded-full h-16 w-16 flex items-center justify-center bg-sky-900/5">
                    <img
                      src="https://store.sony.com.au/on/demandware.static/-/Sites-sony-master-catalog/default/dw1b537bbb/images/PLAYSTATION5W/PLAYSTATION5W.png"
                      alt="item"
                    />
                  </div>
                  <div className="pl-4">
                    <strong className="text-lg text-gray-700 font-semibold truncate-overflow">
                      Playstation 5 Digital Edition
                    </strong>
                    <span className="text-xs text-gray-500 font-light truncate-overflow">
                      The game was lagging
                    </span>
                  </div>
                </BoxWrapper>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reviews;

function BoxWrapper({ children }) {
  return (
    <Link to={'/review/1'} className="bg-white rounded-sm p-4 flex-1 border border-gray-200 flex items-center">
      {children}
    </Link>
  );
}
