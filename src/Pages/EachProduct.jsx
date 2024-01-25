import React from 'react'
import { useParams } from 'react-router-dom'
import Sidebar from '../Components/Sidebar';
import Headers from '../Components/Headers';

const EachProduct = () => {
    const {id} = useParams();
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
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default EachProduct
