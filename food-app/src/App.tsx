import { RouterProvider, createBrowserRouter, redirect } from "react-router-dom";
import Layout from "../src/Component/Layout";
import { ConfigProvider } from "antd";
import "./App.css";
import "antd/dist/reset.css";
import BookTable from "./Pages/BookTable";
import Dashboard from "./Pages/Dashboard";
import Inventory from "./Pages/Inventory";
import Orders from "./Pages/Orders";
import Customers from "./Pages/Customers";
import Authentication from "./Pages/Authentication";
import Login from "./Pages/Login";
import {STORAGE_KEY as ADMIN_STORAGE_KEY} from "../src/redux/adminSlice"
import { STORAGE_ACCESS_TOKEN_KEY } from "./ultils/constants";
import Lodash from "lodash"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Dashboard />,
      },
      {
        path: "/inventory",
        element: <Inventory />,
      },
      {
        path: "/orders",
        element: <Orders />,
      },
      {
        path: "/customers",
        element: <Customers />,
      },
    ],
  },
  {
    path: "/management",
    element: <Layout />,
    loader: () => {
      const storageAdminData = JSON.parse(window.localStorage.getItem(ADMIN_STORAGE_KEY) || "{}")
      const token = window.localStorage.getItem(STORAGE_ACCESS_TOKEN_KEY)
      if (!Lodash.isEmpty(storageAdminData)  && token) {
        return null;
      } else {
        return redirect('/authentication');
      }
    },
    children: [
      {
        path: "/management",
        element: <Dashboard />,
      },
      {
        path: "/management/statistic",
        element: <Dashboard />,
      },
    ]
  },
  {
    path: "/authentication",
    element: <Authentication />,
  },
  {
    path: "/book-table",
    element: <BookTable />,
  },
  {
    path: "/login",
    element: <Login />,
  },
]);
function App() {
  return (
    <div className="dark container">
      <ConfigProvider
        theme={{
          token: {
            colorPrimary: "#EA7C69",
            colorBgContainer: "#1f1d2b",
            colorText: '#ffffff'
          },
        }}
      >
        <RouterProvider router={router} />
      </ConfigProvider>
    </div>
  );
}
export default App;