import React from "react";
import AppBar from "../AppBar/AppBar";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div>
      <AppBar />
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
