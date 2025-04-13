import React from "react";
import { MdMessage } from "react-icons/md";
import { IoIosNotificationsOutline } from "react-icons/io";
import { useAuth } from "../context/useAuth";

const NavBar = () => {
  const { user } = useAuth();
  const name = user?.name || "John Doe";
  console.log(name, "name in navbar");
  return (
    <div className="flex flex-row items-center justify-between w-full h-16 bg-gray-800 text-white px-4">
      <h1>FastCart</h1>
      <input
        type="search"
        placeholder="search"
        className="border  border-gray-400 px-4 py-1 rounded-full w-1/4"
      />
      <div className="flex flex-row justify-center items-center gap-4">
        <MdMessage className="text-2xl cursor-pointer" />
        <IoIosNotificationsOutline className="text-2xl cursor-pointer" />
        <div className="flex flex-row justify-center items-center gap-2">
          <div className="bg-green-300 rounded-full w-10 h-10 flex justify-center items-center text-lg font-bold">
            {name[0]}
          </div>
          <h1 className="text-sm font-medium">{name}</h1>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
