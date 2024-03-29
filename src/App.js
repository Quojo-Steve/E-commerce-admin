import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  Outlet,
  RouterProvider,
} from "react-router-dom";
import Login from "./Pages/Login";
import Page404 from "./Pages/Page404";
import Dashboard from "./Pages/Dashboard";
import Products from "./Pages/products/Products";
import Customers from "./Pages/Customers"
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import Orders from "./Pages/Orders";
import Calendar from "./Pages/Calendar";
import Faq from "./Pages/Faq";
import Addproduct from "./Pages/Addproduct";
import EachProduct from "./Pages/EachProduct";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />}>
        <Route path="login" element={<Login />} />
        <Route path="*" element={<Page404 />} />
        <Route index element={<Dashboard />} />
        <Route path="products" element={<Products />} />
        <Route path="product/:id" element={<EachProduct />} />
        <Route path="addproduct" element={<Addproduct />} />
        <Route path="customers" element={<Customers />} />
        <Route path="orders" element={<Orders />} />
        <Route path="calendar" element={<Calendar />} />
        <Route path="faq" element={<Faq />} />

      </Route>
    )
  );

  return (
    <div className="">
      <RouterProvider router={router} />
      <ToastContainer />
    </div>
  );
}

const Root = () => {
  // const location = useLocation();

  // const showSidebarPaths = ["/dashboard", "/name"];
  return (
    <>
      {/* {showSidebarPaths.includes(location.pathname) && (
        <div className="flex">
          <div className={`w-72 h-screen bg-green-500 `}>
            Sidebar
          </div>
        </div>
      )} */}

      <div>
        <Outlet />
      </div>
    </>
  );
};

export default App;
