import React, { useEffect, useState } from "react";
import searchIcon from "../assets/images/search-interface-symbol.png";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoLogoYoutube } from "react-icons/io";
import { FiSearch } from "react-icons/fi";
import { FaCircleUser } from "react-icons/fa6";
import { YOUTUBE_SEARCH_API } from "../utils/constant";
import { cacheResults } from "../utils/searchSlice";

const Header = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  const dispatch = useDispatch();

  const searchCache = useSelector((store) => store.search);

  useEffect(() => {
    // api call after 200ms
    const timer = setTimeout(() => {
      if (searchCache[searchQuery]) {
        setSuggestions(searchCache[searchQuery]);
      } else {
        getSearchSuggestion();
      }
      // getSearchSuggestion();
    }, 200);

    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  const getSearchSuggestion = async () => {
    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const json = await data.json();
    setSuggestions(json[1]);

    // update to cache
    dispatch(
      cacheResults({
        [searchQuery]: json[1],
      })
    );
  };

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };
  return (
    <div className="relative">
      <div className="flex justify-between md:grid grid-flow-col p-5 shadow-lg max-w-full">
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
        <div className=" col-span-10 md:flex flex-col ">
          <div className="hidden  md:flex justify-center items-center">
            <input
              className="w-[50%] border border-black border-r-0 rounded-l-full pl-4 p-2 focus:outline-blue-600"
              type="text"
              name="search"
              placeholder="Search"
              id=""
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onFocus={() => setShowSuggestions(true)}
              onBlur={() => setShowSuggestions(false)}
            />
            <button className=" rounded-r-full border border-black p-2 bg-gray-300 border-l-0">
              <img className="h-6" src={searchIcon} alt="search icon" />
            </button>
          </div>
        </div>
        {/* search for mobile */}

        <div className=" md:hidden ">
          <div className="flex items-center w-full justify-end">
            <input
              className=" w-[70%]"
              type="text"
              name="search"
              placeholder="Search"
              id=""
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onFocus={() => setShowSuggestions(true)}
              onBlur={() => setShowSuggestions(false)}
            />

            <button>
              <FiSearch size={30} />
            </button>
          </div>
        </div>

        <div className=" hidden col-span-1 md:flex justify-center items-center cursor-pointer">
          <FaCircleUser size={30} />
        </div>
      </div>
      {showSuggestions && (
        <div className=" w-full  bg-black text-white md:w-[38%] md:bg-gray-500  absolute top-14 left-0 md:top-16 md:left-[34%] rounded-lg z-50">
          <ul className="w-full">
            {suggestions.map((suggestion) => (
              <li
                key={suggestion}
                className="flex gap-3 items-center px-5 py-1 shadow-sm hover:bg-gray-400 "
              >
                <FiSearch /> <span>{suggestion}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Header;
