import React, { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/chatSlice";
import { generateRandomMessage, generateRandomName } from "../utils/helper";
import { IoSend } from "react-icons/io5";

const LiveChat = () => {
  const [liveMessage, setLiveMessage] = useState("");
  const dispatch = useDispatch();
  const chatMessages = useSelector((store) => store.chat.messages);
  useEffect(() => {
    const i = setInterval(() => {
      dispatch(
        addMessage({
          name: generateRandomName(),
          message: generateRandomMessage() + " 🚀",
        })
      );
    }, 500);
    return () => clearInterval(i);
  }, []);
  return (
    <>
      <div className="w-full md:h-[590px]  border border-black bg-gray-300 rounded-lg overflow-y-scroll flex flex-col-reverse">
        {/* <h1 className="bg-green-300 p-2 rounded-lg  ">Live chat</h1> */}
        <div className=" w-full flex flex-col-reverse">
          {chatMessages.map((chat, i) => (
            <ChatMessage key={i} name={chat.name} message={chat.message} />
          ))}
        </div>
      </div>
      <form
        className="w-full p-2 flex justify-center"
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(
            addMessage({
              name: "shubham Deulkar",
              message: liveMessage,
            })
          );
          setLiveMessage("");
        }}
      >
        <input
          type="text"
          className="w-96 py-1 px-3 bg-gray-300 rounded-full"
          value={liveMessage}
          placeholder="chat"
          onChange={(e) => setLiveMessage(e.target.value)}
        />
        <span className="p-2 ml-1 hover:bg-gray-400 rounded-full">
          <IoSend />
        </span>
      </form>
    </>
  );
};

export default LiveChat;
