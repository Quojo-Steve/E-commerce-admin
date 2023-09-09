import React from "react";
import Sidebar from "../Components/Sidebar";
import Headers from "../Components/Headers";
import { Box } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { tokens } from "../theme";
import { mockDataContacts } from "../data/mockData";
import { useTheme } from "@mui/material";

const Products = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const columns = [
    { field: "id", headerName: "ID", flex: 0.5 },
    { field: "registrarId", headerName: "Registrar ID" },
    {
      field: "name",
      headerName: "Name",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "age",
      headerName: "Age",
      type: "number",
      headerAlign: "left",
      align: "left",
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
      field: "address",
      headerName: "Address",
      flex: 1,
    },
    {
      field: "city",
      headerName: "City",
      flex: 1,
    },
  ];

  return (
    <div className="flex bg-gray-100 overflow-hidden h-screen w-screen flex-row">
      <Sidebar />
      <div className="p-4 pt-0 text-2xl font-semibold flex-1 h-screen overflow-y-scroll">
        <Headers />
        <div className="flex items-center p-2">
        <h1>Products</h1>
        <button className="bg-green-300 p-1 px-4 hover:bg-green-200 duration-150 rounded ml-4 font-medium text-sm">Add Product</button>
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
            rows={mockDataContacts}
            columns={columns}
            components={{ Toolbar: GridToolbar }}
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
    </div>
  )
}

export default Products
