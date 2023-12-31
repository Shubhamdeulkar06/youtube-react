import React from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../utils/appSlice";
import { useSearchParams } from "react-router-dom";
import CommentContainer from "./CommentContainer";
import LiveChat from "./LiveChat";

const WatchPage = () => {
  const [serachParams] = useSearchParams();
  // console.log(serachParams.get("v"));
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(closeMenu());
  }, []);

  return (
    <div className="flex flex-col gap-2 md:gap-4 w-full">
      <div className=" px-0 md:px-5 md:pl-36 flex flex-col md:flex-row w-full">
        <div className="hidden md:block w-full">
          <iframe
            width="1100"
            height="600"
            src={"https://www.youtube.com/embed/" + serachParams.get("v")}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
        <div className=" max-w-full max-h-full  md:hidden">
          <iframe
            className="w-full h-72"
            src={"https://www.youtube.com/embed/" + serachParams.get("v")}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          ></iframe>
        </div>
        <div className="mx-4 my-2 md:w-full ">
          <LiveChat />
        </div>
      </div>
      <div className="w-full">
        <CommentContainer />
      </div>
    </div>
  );
};

export default WatchPage;
