// import React from "react";
// import Button from "./Button";
// // import "../assets/css/buttonList.css";

// const ButtonList = () => {
//   const list = [
//     "All",
//     "Live",
//     "Game",
//     "Valorant",
//     "Cricket",
//     "Music",
//     "cooking",
//     "cooking",
//     "cooking",
//     "cooking",
//     "cooking",
//     "cooking",
//     "cooking",
//     "cooking",
//     "cooking",
//     "cooking",
//     "cooking",
//     "cooking",
//     "cooking",
//     "cooking",
//   ];
//   return (
//     <div className="flex overflow-x-auto">
//       {list.map((item) => (
//         <Button key={item} name={item} />
//       ))}
//     </div>
//   );
// };

// export default ButtonList;

import React, { useRef } from "react";
import Button from "./Button";
import "../assets/css/buttonList.css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const ButtonList = () => {
  const listRef = useRef(null);

  const handleScroll = (direction) => {
    const container = listRef.current;

    if (container) {
      const scrollAmount = 400; // Adjust as needed
      if (direction === "left") {
        container.scrollLeft -= scrollAmount;
      } else {
        container.scrollLeft += scrollAmount;
      }
    }
  };

  const list = [
    "All",
    "Live",
    "Game",
    "Valorant",
    "Cricket",
    "Music",
    "Cooking",
  ];

  return (
    <div className="relative">
      <div className="flex hide-scrollbar scroll-smooth mx-5" ref={listRef}>
        <div className="flex space-x-4 px-7 py-3 ">
          {list.map((item) => (
            <Button key={item} name={item} />
          ))}
        </div>
      </div>
      <div className="">
        <button
          className="absolute top-2 left-[-10] p-3 active:bg-gray-400 hover:bg-gray-300 rounded-full"
          onClick={() => handleScroll("left")}
        >
          <FaChevronLeft />
        </button>
        <button
          className="absolute top-2 right-0 p-3 active:bg-gray-400 hover:bg-gray-300 rounded-full"
          onClick={() => handleScroll("right")}
        >
          <FaChevronRight />
        </button>
      </div>
    </div>
  );
};

export default ButtonList;
