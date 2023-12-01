import React from "react";
import logo from "../assets/images/youtube-logo-2.jpg";
import menuIcon from "../assets/images/hamburger-menu-svgrepo-com.svg";
import userIcon from "../assets/images/user-icon.png";
import searchIcon from "../assets/images/search-interface-symbol.png";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
const Header = () => {
  const dispatch = useDispatch();
  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };
  return (
    <div className="grid grid-flow-col p-5 shadow-lg">
      <div className="flex col-span-1  items-center">
        <img
          className="hidden md:block h-10 mx-2 cursor-pointer active:bg-gray-400 hover:bg-gray-300 rounded-full"
          src={menuIcon}
          alt="menu"
          onClick={() => toggleMenuHandler()}
        />
        <a href="/">
          <img className="h-8 " src={logo} alt="logo" />
        </a>
      </div>
      <div className="col-span-10 flex justify-center items-center">
        <input
          className="w-[50%] border border-black border-r-0 rounded-l-full pl-4 p-2 focus:outline-blue-600"
          type="text"
          name="search"
          placeholder="Search"
          id=""
        />
        <button className="rounded-r-full border border-black p-2 bg-gray-300 border-l-0">
          <img className="h-6" src={searchIcon} alt="search icon" />
        </button>
      </div>
      <div className="col-span-1 flex justify-center items-center">
        <img className="h-8" src={userIcon} alt="user" />
      </div>
    </div>
  );
};

export default Header;
