import React from "react";
import logo from "../assets/images/youtube-logo-2.jpg";
import menuIcon from "../assets/images/hamburger-menu-svgrepo-com.svg";
import userIcon from "../assets/images/user-icon.png";
import searchIcon from "../assets/images/search-interface-symbol.png";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoLogoYoutube } from "react-icons/io";
import { FiSearch } from "react-icons/fi";
const Header = () => {
  const dispatch = useDispatch();
  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };
  return (
    <div className="flex justify-between items-center md:grid grid-flow-col p-5 shadow-lg">
      <div className="flex gap-4 md:col-span-1 items-center">
        <span className="hidden md:block cursor-pointer active:bg-gray-400 hover:bg-gray-300 rounded-full">
          <GiHamburgerMenu
            size={30}
            onClick={() => toggleMenuHandler()}
            style={{ fill: "black", margin: 10, cursor: "pointer" }}
          />
        </span>
        <a href="/">
          <span className="flex items-center gap-2">
            <IoLogoYoutube size={30} style={{ fill: "red" }} />
            YouTube
          </span>
        </a>
      </div>
      <div className="hidden col-span-10 md:flex justify-center items-center">
        <input
          className="w-[50%] border border-black border-r-0 rounded-l-full pl-4 p-2 focus:outline-blue-600"
          type="text"
          name="search"
          placeholder="Search"
          id=""
        />
        <button className=" rounded-r-full border border-black p-2 bg-gray-300 border-l-0">
          <img className="h-6" src={searchIcon} alt="search icon" />
        </button>
      </div>
      <div className="md:hidden ">
        <FiSearch size={30} />
      </div>
      <div className=" hidden col-span-1 md:flex justify-center items-center">
        <img className="h-8" src={userIcon} alt="user" />
      </div>
    </div>
  );
};

export default Header;
