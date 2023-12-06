import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  MdHomeFilled,
  MdOutlineSlowMotionVideo,
  MdSubscriptions,
  MdOutlineVideoLibrary,
  MdHistory,
  MdOutlineWatchLater,
} from "react-icons/md";
import { LuThumbsUp } from "react-icons/lu";
import { HiMiniSignal } from "react-icons/hi2";
import { IoMdMusicalNote } from "react-icons/io";
import { SiYoutubegaming } from "react-icons/si";
import { FaCircleUser } from "react-icons/fa6";

const Sidebar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
  // early return
  if (!isMenuOpen) return null;
  return (
    <div className=" md:block p-5  w-52  shadow-slate-800 mr-2 ">
      <ul className=" cursor-pointer border-b-2 border-gray-400 px-2 py-5 hidden md:block">
        <li className="px-2 py-1 mb-2 hover:bg-gray-300 active:bg-gray-400 rounded-lg">
          <Link to="/" className="flex justify-start gap-4 items-center">
            <MdHomeFilled size={30} />
            <span>Home</span>
          </Link>
        </li>
        <li className="px-2 py-1 flex justify-start gap-4 items-center  mb-2 hover:bg-gray-300 active:bg-gray-400 rounded-lg">
          <MdOutlineSlowMotionVideo size={30} />
          Shorts
        </li>
        <li className="px-2 py-1 flex justify-start gap-4 items-center  mb-2 hover:bg-gray-300 active:bg-gray-400 rounded-lg">
          <MdSubscriptions size={30} />
          Subscriptions
        </li>
        <li className="px-2 py-1 flex justify-start gap-4 items-center  mb-2 hover:bg-gray-300 active:bg-gray-400 rounded-lg">
          <MdOutlineVideoLibrary size={30} />
          Library
        </li>
        <li className="px-2 py-1 flex justify-start gap-4 items-center  mb-2 hover:bg-gray-300 active:bg-gray-400 rounded-lg">
          <LuThumbsUp size={30} />
          Liked
        </li>
      </ul>

      <ul className="cursor-pointer border-b-2 border-gray-400 py-5 px-2 hidden md:block">
        <li className="px-2 py-1 flex justify-start gap-4 items-center  mb-2 hover:bg-gray-300 active:bg-gray-400 rounded-lg">
          <MdOutlineSlowMotionVideo size={30} />
          Your Channel
        </li>
        <li className="px-2 py-1 flex justify-start gap-4 items-center  mb-2 hover:bg-gray-300 active:bg-gray-400 rounded-lg">
          <MdHistory size={30} />
          History
        </li>
        <li className="px-2 py-1 flex justify-start gap-4 items-center  mb-2 hover:bg-gray-300 active:bg-gray-400 rounded-lg">
          <MdOutlineWatchLater size={30} />
          Watch later
        </li>
      </ul>
      <ul className="cursor-pointer border-b-2 border-gray-400 py-5 px-2 my-1 hidden md:block">
        <li className="px-2 py-1 flex justify-start gap-4 items-center  mb-2 hover:bg-gray-300 active:bg-gray-400 rounded-lg">
          <IoMdMusicalNote size={30} /> Music
        </li>
        <li className="px-2 py-1 flex justify-start gap-4 items-center  mb-2 hover:bg-gray-300 active:bg-gray-400 rounded-lg">
          <SiYoutubegaming size={30} /> Gaming
        </li>
        <li className="px-2 py-1 flex justify-start gap-4 items-center  mb-2 hover:bg-gray-300 active:bg-gray-400 rounded-lg">
          <HiMiniSignal size={30} /> Live
        </li>
      </ul>
      <ul className="cursor-pointer border-b-2 border-gray-400 py-5 px-2 my-1 hidden md:block">
        <li className="px-2 py-1 flex justify-start gap-4 items-center  mb-2 hover:bg-gray-300 active:bg-gray-400 rounded-lg">
          <IoMdMusicalNote size={30} /> Music
        </li>
        <li className="px-2 py-1 flex justify-start gap-4 items-center  mb-2 hover:bg-gray-300 active:bg-gray-400 rounded-lg">
          <SiYoutubegaming size={30} /> Gaming
        </li>
        <li className="px-2 py-1 flex justify-start gap-4 items-center  mb-2 hover:bg-gray-300 active:bg-gray-400 rounded-lg">
          <HiMiniSignal size={30} /> Live
        </li>
      </ul>
      {/* mobile bottom bar */}
      <div className="relative max-w-full md:hidden">
        <ul className="cursor-pointer py-2 grid grid-cols-5  fixed bottom-0 w-full left-0 bg-gray-200 text-sm">
          <li className="px-2 py-1 hover:bg-gray-300 active:bg-gray-400 rounded-lg">
            <Link to="/" className="flex  flex-col items-center">
              <MdHomeFilled size={30} />
              <span>Home</span>
            </Link>
          </li>
          <li className="px-2 py-1 flex  flex-col items-center  hover:bg-gray-300 active:bg-gray-400 rounded-lg">
            <MdOutlineSlowMotionVideo size={30} />
            Shorts
          </li>
          <li className="px-2 py-1 flex  flex-col items-center  hover:bg-gray-300 active:bg-gray-400 rounded-lg">
            <MdSubscriptions size={30} />
            Subscriptions
          </li>
          <li className="px-2 py-1 flex  flex-col items-center  hover:bg-gray-300 active:bg-gray-400 rounded-lg">
            <LuThumbsUp size={30} />
            Liked
          </li>
          <li className="px-2 py-1 flex  flex-col items-center  hover:bg-gray-300 active:bg-gray-400 rounded-lg">
            <FaCircleUser size={30} />
            You
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
