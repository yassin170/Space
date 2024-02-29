import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Home from "./components/Home";
import Destination from "./components/Destination";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement : <div>error 404</div>
  },
  {
    path: "/destination",
    element: <Destination />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);