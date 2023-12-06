import React from "react";
import Sidebar from "./Sidebar";

import { Outlet } from "react-router-dom";

const Body = () => {
  return (
    <div className="flex flex-col-reverse gap-5 md:flex md:flex-row mx-auto md:gap-0">
      <Sidebar />
      <Outlet />
    </div>
  );
};

export default Body;
