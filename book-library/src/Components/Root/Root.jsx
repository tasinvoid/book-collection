import React from "react";
import Header from "../Header";
import { Outlet } from "react-router";
import Footer from "../Footer";

const Root = () => {
  return (
    <div className="mx-2 my-5">
      <Header></Header>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Root;
