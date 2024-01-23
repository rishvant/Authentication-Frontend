import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Login from './components/Register.jsx'
import Register from './components/Login.jsx'
import Dashboard from './components/Dashboard.jsx'
import { ToastContainer } from 'react-toastify'

const router = createBrowserRouter([
  {
    path: "/",
    element:<App></App>
  },
  {
    path: "/login",
    element: <Register></Register>
  },
  {
    path: "/register",
    element: <Login></Login>
  },
  {
    path: "/dashboard",
    element:<Dashboard></Dashboard>
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
    <ToastContainer />
  </React.StrictMode>,
)