import { useState } from 'react';
import data from './assets/json/data.json';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Navbar from './components/Navbar';
import { Route,  Router,  RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import ErrorPage from "./components/Error";



function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
      errorElement: <ErrorPage />,
    },
    {
      path: "/about",
      element: <About />,
      errorElement: <ErrorPage />,
    },
    {
      path: "/contact",
      element: <Contact />,
      errorElement: <ErrorPage />,
    },
  ]);


  return (
    <div className='h-screen w-screen flex justify-center items-center'>
      <Navbar />
      <RouterProvider router={router}></RouterProvider>
      {data.map(function () {
          return ;
        })}
    </div>
  )
}

export default App
