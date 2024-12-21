import React from "react";
import Header from "./components/user/Header";
import Navbar from "./components/user/Navbar";
import Slider from "./components/user/Slider";
import Contant from "./components/user/Contant";
import Artical from "./components/user/Artical";
import Footer from "./components/user/Footer";
import Login from "./components/user/Login";
import ForgetPassword from "./components/user/ForgetPassword";

const Layout = () => {
  return (
    <>
      <Header />
      <Navbar />
      <Slider />
      <Contant />
      <Artical />
      <Footer />
      <Login />
      <ForgetPassword />
    </>
  );
};
export default Layout;
