import React from "react";
import { FaCircleUser } from "react-icons/fa6";

const Comment = ({ data }) => {
  const { name, text, replies } = data;
  return (
    <div className="flex shadow-sm bg-gray-200 p-2 rounded-lg my-2">
      <span>
        <FaCircleUser size={25} />
      </span>
      <div className="px-3">
        <p className="font-bold">{name}</p>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default Comment;
