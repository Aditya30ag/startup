import "./App.css";
import React from "react";
import { createBrowserRouter,RouterProvider} from "react-router-dom";
import LandingPage from "./components/Welcome";
import AboutPage from "./components/About";
import ContactPage from "./components/Contact";

function App() {
  const router=createBrowserRouter([
    {
      path:"/",
      element:<><LandingPage/></>
    },
    {
      path:"/about",
      element:<><AboutPage/></>
    },{
      path:"/contact",
      element:<><ContactPage/></>
    }
  ])

  return (
    <>
    <RouterProvider router={router}/>
    </>
  );
}

export default App;
