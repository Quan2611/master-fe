import {RouterProvider, createBrowserRouter} from 'react-router-dom'
import Layout from './Component/Layout';
import './App.css';
import { ConfigProvider} from 'antd'
import BookTable from './Pages/BookTable';
// import Login from './Pages/';
import Authentication from './Pages/Authentication'
import React from 'react';

const router = createBrowserRouter ([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/authentication",
        element: <Authentication />
      },
      {
        path: "/book-table",
        element: <BookTable />
      },
      // {
      //   path: "/login",
      //   element: <Login />
      // },
    ]
  },
  {
    path: "/authentication",
    element: <Authentication />
  },
  {
    path: "/book-table",
    element: <BookTable />
  },
  // {
  //   path: "/login",
  //   element: <Login />
  // },
])

function App() {
  return(
    <div className="dark container">
      <ConfigProvider 
      theme={{
        token:{
          colorPrimary: '#EA7C69',
        }
      }}
      >
        <RouterProvider router = {router}/>
      </ConfigProvider>
    </div>
  )
}

export default App;