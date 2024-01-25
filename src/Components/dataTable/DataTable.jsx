import React from "react";
import {
  DataGrid,
  GridToolbar,
} from "@mui/x-data-grid";
import "./dataTable.css";
import {AiTwotoneEdit, AiFillDelete} from 'react-icons/ai'
import { Link } from "react-router-dom";

const DataTable = (props) => {

  const handleDelete = (id) => {
    // delete the item
    // mutation.mutate(id)
  };

  const actionColumn = {
    field: "action",
    headerName: "Action",
    width: 200,
    renderCell: (params) => {
      return (
        <div className="action">
          <Link to={`/product/${params.row.id}`}>
            <AiTwotoneEdit width={50} height={50}/>
          </Link>
          <div className="delete" onClick={handleDelete}>
            <AiFillDelete className="text-red-600"/>
          </div>
        </div>
      );
    },
  };

  return (
    <div className="dataTable">
      <DataGrid
        slots={{ toolbar: GridToolbar }}
        slotProps={{
          toolbar: {
            showQuickFilter: true,
            quickFilterProps: { debounceMs: 500 },
          },
        }}
        // components={{
        //   Toolbar: GridToolbar,
        // }}
        // pageSizeOptions={[5]}
        className="dataGrid"
        rows={props.rows}
        columns={[...props.columns, actionColumn]}
        pageSize={10}
        rowsPerPageOptions={[5, 10, 20]}
        components={{
          Toolbar: GridToolbar,
        }}
        // checkboxSelection
        disableRowSelectionOnClick
        disableColumnFilter
        disableDensitySelector
        disableColumnSelector
      />
    </div>
  );
};

export default DataTable;
