import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import "./layout.css";
import AppSettingsHandler from "./AppSettingsHandler";

const Layout = () => {
  return (
    <>
      <AppSettingsHandler />
      <div className="wrapper">
        <Header />
        <div className="containerLayout">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default Layout;
