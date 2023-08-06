import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  Link,
  Outlet,
  RouterProvider,
} from "react-router-dom";

import Login from "./Pages/Login";

import Page404 from "./Pages/Page404";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />}>
        

        <Route index element={<Login />} />
        <Route path="*" element={<Page404 />} />
      </Route>
    )
  );

  return (
    <div className="">
      <RouterProvider router={router} />
    </div>
  );
}

const Root = () => {
  return (
    <>
      {/* <div>
        <Link to="/" className="text-blue-700">Welcome</Link>
        <Link to="/name" className="text-blue-700">Name</Link>
      </div> */}

      <div>
        <Outlet />
      </div>
    </>
  );
};

export default App;
