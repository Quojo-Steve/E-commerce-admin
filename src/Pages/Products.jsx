import React, { useState,useEffect } from "react";
import Sidebar from "../Components/Sidebar";
import Headers from "../Components/Headers";
import { Box } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { tokens } from "../theme";
import { mockDataInvoices } from "../data/mockData";
import { useTheme } from "@mui/material";
import "./addproducts.css"
import {AiOutlineClose} from 'react-icons/ai'



const Products = () => {
  const [addProduct, setAddProduct] = useState(false);
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  useEffect(()=>{
    setAddProduct(false);
  },[]);

  const show = () =>{
    setAddProduct(true)
  }

  const close = () =>{
    setAddProduct(false)
  }

  const columns = [
    { field: "id", headerName: "ID", flex: 0.5 },
    {
      field: "name",
      headerName: "Name",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "phone",
      headerName: "Phone Number",
      flex: 1,
    },
    {
      field: "email",
      headerName: "Email",
      flex: 1,
    },
    {
      field: "date",
      headerName: "Date",
      flex: 1,
    },
  ];

  return (
    <div className="flex bg-gray-100 overflow-hidden h-screen w-screen flex-row">
      <Sidebar />
      <div className="p-4 pt-0 text-2xl font-semibold flex-1 h-screen overflow-y-scroll">
        <Headers />
        <div className="flex items-center p-2">
          <h1 className="uppercase text-3xl text-slate-500">Products</h1>
          <button
            className="bg-green-300 p-1 px-4 hover:bg-green-200 duration-150 rounded ml-4 font-medium text-sm"
            onClick={show}
          >
            Add Product
          </button>
        </div>
        <Box
          height="75vh"
          sx={{
            "& .MuiDataGrid-root": {
              backgroundColor: colors.greenAccent[700],
              border: "none",
            },
            "& .MuiDataGrid-cell": {
              borderBottom: "none",
            },
            "& .name-column--cell": {
              color: colors.greenAccent[300],
            },
            "& .MuiDataGrid-columnHeaders": {
              backgroundColor: colors.greenAccent[700],
              borderBottom: "none",
            },
            "& .MuiDataGrid-virtualScroller": {
              backgroundColor: colors.primary[400],
            },
            "& .MuiDataGrid-footerContainer": {
              borderTop: "none",
              backgroundColor: colors.greenAccent[700],
            },
            "& .MuiCheckbox-root": {
              color: `${colors.greenAccent[200]} !important`,
            },
            "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
              color: `${colors.grey[100]} !important`,
            },
          }}
        >
          <DataGrid
            rows={mockDataInvoices}
            columns={columns}
            slots={{ Toolbar: GridToolbar }}
            slotProps={{
              toolbar: {
                showQuickFilter: true,
                quickFilterProps: { debounceMs: 500 },
              },
            }}
            // checkboxSelection
            // disableRowSelectionOnClick
            // disableDensitySelector
            // disableColumnSelector
          />
        </Box>
      </div>
      <div className={`${addProduct ? "back" : "hidden"}`}>
      <div className="content">
        <h4>Game Over!</h4>
        <p>The correct word was: <b>rainbow</b></p>
        <button className="play-again bg-green-300">Play Again</button>
      </div>
      <AiOutlineClose className='text-white text-4xl absolute top-0 right-0 cursor-pointer' onClick={close} />
    </div>
    </div>
  );
};

export default Products;
