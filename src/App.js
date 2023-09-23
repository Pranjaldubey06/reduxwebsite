//import logo from './logo.svg';
import "./App.css";
import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Outlet,
  Route,
  RouterProvider,
} from "react-router-dom";
//import Navbar from './components/Navbar';
//import Banner from'./Home/Banner';
//import Footer from"./components/Footer";
//import FooterTop from './components/FooterTop';
import Home1 from "./pages/Home1";
//import Products from "./Home/Products";
import { productsData } from "./api/api";
import Signin from "./Home/Signin";
import Ragistration from "./Home/Ragistration";
import Cart from "./pages/Cart";
import Profile from "./pages/Profile";


const Layout = () => {
  return (
    <div>
      {/* <Navbar/> */}
      <Outlet />
      {/* <FooterTop/>*/}
      {/*<Footer/>*/}
    </div>
  );
};
function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route index element={<Home1 />} loader={productsData}></Route>
        <Route path="/Signin" element={<Signin />}></Route>
        <Route path="/Ragistration" element={<Ragistration />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
      
        <Route path="/profile" element={<Profile/>}></Route>
      </Route>
    )
  );
  return (
    <div className="font-bodyFont bg-gray-100">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}
export default App;
