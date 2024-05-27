import React from "react";
import "./products.css";
import DataTable from "../../Components/dataTable/DataTable";
import { products } from "../../data";
import Headers from "../../Components/Headers";
import Sidebar from "../../Components/Sidebar";
import { Link } from "react-router-dom";

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
    type: "int",
  },
];

const Products = () => {

  return (
    <div className="">
      <div className="flex bg-gray-100 overflow-hidden h-screen w-screen flex-row ">
        <Sidebar />
        <div className="p-4 pt-0 text-2xl font-semibold flex-1 h-screen overflow-y-scroll">
          <Headers props={true}/>
          <div className="products">
            <div className="flex items-center p-2">
              <h1 className="uppercase text-3xl text-slate-500">Products</h1>
              <Link to={"/addproduct"}
                className="bg-green-300 p-1 px-4 hover:bg-green-200 text-black duration-150 rounded ml-4 font-medium text-sm"
              >
                Add Product
              </Link>
              <Link to={"/"}
                className="bg-green-300 p-1 px-4 hover:bg-green-200 text-black duration-150 rounded ml-4 font-medium text-sm"
              >
                Manage Categories
              </Link>
            </div>
            <DataTable slug="products" columns={columns} rows={products} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
