import React from "react";
import Sidebar from "../Components/Sidebar";
import Headers from "../Components/Headers";
import Calendarpart from "../Components/Calendarpart";

const Calendar = () => {
  return (
    <div className="">
      <div className="flex bg-gray-100 overflow-hidden h-screen w-screen flex-row ">
        <Sidebar />
        <div className="p-4 pt-0 text-2xl font-semibold flex-1 h-screen overflow-y-scroll">
          <Headers />
          <div>
            <Calendarpart />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calendar;
