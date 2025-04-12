import React from "react";

const NavBar = () => {
  const name = "John Doe"; // Replace with actual user name or state management
  return (
    <div className="flex flex-row items-center justify-between w-full h-16 bg-gray-800 text-white px-4">
      <h1>FastCart</h1>
      <input type="search" />
      <h1>M</h1>
      <h1>M</h1>
      <div>
        <h1>{name[0]}</h1>
        <h1>{name}</h1>
      </div>
    </div>
  );
};

export default NavBar;
