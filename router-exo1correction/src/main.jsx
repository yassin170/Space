import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Products from './components/Products';
import Details from "./components/Details";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Products />,
  },
  {
    path: '/details/:id',
    element: <Details />
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);