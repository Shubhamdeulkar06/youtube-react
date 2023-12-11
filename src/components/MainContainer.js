import React from "react";
import ButtonList from "./ButtonList";
import VideoContainer from "./VideoContainer";

const MainContainer = () => {
  return (
    <div className="m-1 overflow-x-hidden ">
      <ButtonList />
      <VideoContainer />
    </div>
  );
};

export default MainContainer;
