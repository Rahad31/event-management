import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./Components/Root/Root";
import AuthProvider from "./Components/Provider/Provider";
import Register from "./Components/Register/Register";
import Login from "./Components/Login/Login";
import Home from "./Components/Home/Home";
import Eventdetails from "./Components/Eventdetails/Eventdetails";
import Bookings from "./Components/Bookings/Bookings";
import PrivateRoute from "./Components/privateroute/PrivateRoute";
import Profile from "./Components/Profile/Profile";
import Serviceprovided from "./Components/ServiceProvided/Serviceprovided";
PrivateRoute;
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/Servicecard/:id",
        loader: () => fetch("../public/event.json"),
        element: (
          <PrivateRoute>
            <Eventdetails></Eventdetails>
          </PrivateRoute>
        ),
      },
      {
        path: "/Service",
        loader: () => fetch("../public/event.json"),
        element: (
          <PrivateRoute>
            <Serviceprovided></Serviceprovided>
          </PrivateRoute>
        ),
      },
      {
        path: "/bookings",
        loader: () => fetch("../public/event.json"),
        element: (
          <PrivateRoute>
            <Bookings></Bookings>
          </PrivateRoute>
        ),
      },
      {
        path: "/profile",

        element: (
          <PrivateRoute>
            <Profile></Profile>
          </PrivateRoute>
        ),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
