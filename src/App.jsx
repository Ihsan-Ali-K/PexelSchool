import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Home from "./components/home/Home"
import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
} from "react-router-dom";
import About from "./components/about/About";
import Events from "./components/events/Events";
import Staff from "./components/staff/Staff";
import Gallery from "./components/gallery/Gallery";
import Contact from "./components/contact/Contact";
import Login from "./components/login/Login";
import Register from "./components/register/Register";
function App() {
  const Layout = () =>{
   return(
   <>
    <Navbar />
    <Outlet />
    <Footer />
    </>
   )
  }
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout /> ,
      children:[
        {
          path: "/",
          element: <Home />
        },
        {
          path: "/about",
          element: <About />
        },
        {
          path: "/events",
          element: <Events />
        },
        {
          path: "/staff",
          element: <Staff />
        },
        {
          path: "/gallery",
          element: <Gallery />
        }, {
          path: "/contact",
          element: <Contact />
        }
        , {
          path: "/login",
          element: <Login />
        }, {
          path: "/register",
          element: <Register />
        }
      ]
    },
  ]);
  return (
    <>
   
    <RouterProvider router={router} />
    
   
       </>
  )
}

export default App
