import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Home from "./components/Home";
import Destination from "./components/Destination";
import Crew from "./components/Crew";
import Technology from "./components/Technology";

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
  {
    path: "/crew",
    element: <Crew />,
  },
  {
    path: "/technology",
    element: <Technology />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);