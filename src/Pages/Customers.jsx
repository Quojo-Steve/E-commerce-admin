import { mockDataContacts } from "../data/mockData";
import Headers from "../Components/Headers";
import Sidebar from "../Components/Sidebar";
import DataTable from "../Components/dataTable/DataTable";

const Contacts = () => {
  const columns = [
    // { field: "id", headerName: "ID", flex: 0.5 },
    { field: "customerId", headerName: "Customer ID" },
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
        <Headers props={true}/>
        <div className="flex items-center p-2">
          <h1 className="uppercase text-3xl text-slate-500">Customers</h1>
        </div>
        <DataTable slug="products" columns={columns} rows={mockDataContacts} />
      </div>
    </div>
  );
};

export default Contacts;
