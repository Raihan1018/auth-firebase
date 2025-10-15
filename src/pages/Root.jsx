import React from "react";
import Header from "../components/Header";
import { Outlet } from "react-router-dom";

const Root = () => {
  return (
    <div className="container mx-auto max-w-screen-lg">
      <Header />

      <div className="flex justify-center items-center min-h-[100vh]">
        <Outlet />
      </div>
    </div>
  );
};

export default Root;
