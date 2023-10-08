import React, { useState } from "react";
import "./products.css";
import DataTable from "../../Components/dataTable/DataTable";
import Add from "../../Components/add/Add";
import { products } from "../../data";
import Headers from "../../Components/Headers";
import Sidebar from "../../Components/Sidebar";

const columns = [
  { field: "id", headerName: "ID", width: 90 },
  {
    field: "img",
    headerName: "Image",
    width: 100,
    renderCell: (params) => {
      return <img src={params.row.img || "/noavatar.png"} alt="" />;
    },
  },
  {
    field: "title",
    type: "string",
    headerName: "Name",
    width: 250,
  },
  {
    field: "price",
    type: "string",
    headerName: "Price",
    width: 200,
  },
  {
    field: "inStock",
    headerName: "In Stock",
    width: 150,
    type: "boolean",
  },
];

const Products = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="">
      <div className="flex bg-gray-100 overflow-hidden h-screen w-screen flex-row ">
        <Sidebar />
        <div className="p-4 pt-0 text-2xl font-semibold flex-1 h-screen overflow-y-scroll">
          <Headers />
          <div className="products">
            <div className="info">
              <h1>Products</h1>
              <button onClick={() => setOpen(true)}>Add New Products</button>
            </div>
            <DataTable slug="products" columns={columns} rows={products} />
            {open && <Add slug="product" columns={columns} setOpen={setOpen} />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
