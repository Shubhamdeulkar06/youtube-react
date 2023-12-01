import React from "react";
import { useSelector } from "react-redux";

const Sidebar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
  // early return
  if (!isMenuOpen) return null;
  return (
    <div className="p-6 shadow-xl w-48 h-[100vh] shadow-slate-800 mr-2 ">
      <ul className="cursor-pointer border-b-2 border-gray-400 ">
        <li className="px-2 py-1">Home</li>
        <li className="px-2 py-1">Shorts</li>
        <li className="px-2 py-1">Subscriptions</li>
      </ul>
      <h1 className="font-bold mt-4">You</h1>
      <ul className="cursor-pointer border-b-2 border-gray-400 py-2">
        <li className="px-2 py-1">Your Channel</li>
        <li className="px-2 py-1">History</li>
        <li className="px-2 py-1">Watch later</li>
      </ul>
      <ul className="cursor-pointer border-b-2 border-gray-400 py-2">
        <li className="px-2 py-1">Music</li>
        <li className="px-2 py-1">Games</li>
        <li className="px-2 py-1">Live</li>
      </ul>
    </div>
  );
};

export default Sidebar;
