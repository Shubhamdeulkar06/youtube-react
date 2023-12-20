import React from "react";
import { FaCircleUser } from "react-icons/fa6";
const ChatMessage = ({ name, message }) => {
  return (
    <div className="p-2 shadow-lg">
      <p className="flex items-center text-xs md:text-sm">
        <span>
          <FaCircleUser size={20} />
        </span>
        <span className="font-bold mx-2">{name}</span>
        <span>{message}</span>
      </p>
    </div>
  );
};

export default ChatMessage;
