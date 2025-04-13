import React, { useState } from "react";
import { MdMessage } from "react-icons/md";
import { IoIosNotificationsOutline } from "react-icons/io";
import { useAuth } from "../context/useAuth";
import { useNavigate } from "react-router-dom";

const NavBar = () => {
  const { user, logout } = useAuth();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const name = user?.name || "John Doe";
  const navigate = useNavigate();

  const onClickLogout = async () => {
    console.log("logging out");
    await logout();
    navigate("/login");
  };

  return (
    <div className="flex justify-between items-center flex-wrap w-full h-16 bg-gray-800 text-white px-4">
      <h1 className="text-3xl ">FastCart</h1>
      <input
        type="search"
        placeholder="search"
        className="border  border-gray-400 px-4 py-1 rounded-full sm:w-1/6"
      />
      <div className="flex flex-row justify-center items-center w-fit gap-4 ">
        <MdMessage className="text-2xl cursor-pointer" />
        <IoIosNotificationsOutline className="text-2xl cursor-pointer" />
        <div className="flex flex-row justify-center items-center gap-2">
          <div className="bg-green-300 rounded-full w-10 h-10 flex justify-center items-center text-lg font-bold">
            {name[0]}
          </div>
          <h1 className="text-sm font-medium">{name}</h1>
        </div>
        <div>
          <button
            onClick={() => setDropdownOpen(!dropdownOpen)}
            className="hover:text-gray-300 flex items-center gap-1"
          >
            Profile
            <span className="text-sm">▼</span>
          </button>

          {dropdownOpen && (
            <ul className="absolute top-10 right-0 bg-white text-black shadow-lg rounded w-40 py-2 z-50">
              <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                Dashboard
              </li>
              <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                Settings
              </li>
              <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                <button className="cursor-pointer" onClick={onClickLogout}>
                  Logout
                </button>
              </li>
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default NavBar;
