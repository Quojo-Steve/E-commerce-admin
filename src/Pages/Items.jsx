import React from 'react'
import Sidebar from "../Components/Sidebar";

const Items = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="p-7 text-2xl font-semibold flex-1 h-screen">Pages</div>
    </div>
  )
}

export default Items
