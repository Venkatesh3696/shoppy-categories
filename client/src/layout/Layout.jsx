import React from "react";
import NavBar from "../components/NavBar";
import SideBar from "../components/SideBar";

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col w-screen h-screen bg-gray-200">
      <NavBar />
      <div className="flex flex-row w-full h-full bg-gray-200">
        <SideBar />
        {children}
      </div>
    </div>
  );
};

export default Layout;
