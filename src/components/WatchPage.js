import React from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../utils/appSlice";
import { useSearchParams } from "react-router-dom";

const WatchPage = () => {
  const [serachParams] = useSearchParams();
  console.log(serachParams.get("v"));
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(closeMenu());
  }, []);

  return (
    <div className=" px-1 md:px-5">
      <div className="hidden md:block">
        <iframe
          width="1300"
          height="600"
          src={"https://www.youtube.com/embed/" + serachParams.get("v")}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </div>
      <div className=" max-w-full max-h-full my-2 md:hidden">
        <iframe
          className="w-full h-72"
          src={"https://www.youtube.com/embed/" + serachParams.get("v")}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default WatchPage;
