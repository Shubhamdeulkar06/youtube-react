import React from "react";

const VideoCard = ({ info }) => {
  //   console.log(info);
  const { snippet, statistics } = info;
  const { channelTitle, thumbnails, title } = snippet;
  return (
    <div className="shadow-xl p-5 md:p-2 m-0 md:m-2 max-w-full md:w-[315px]">
      <img
        className="rounded-lg"
        src={thumbnails?.maxres?.url}
        alt="thumbnail"
      />
      <ul>
        <li className="whitespace-nowrap overflow-hidden text-ellipsis font-bold py-2">
          {title}
        </li>
        <li className="text-md">{channelTitle}</li>
        <li>{statistics.viewCount} Views</li>
      </ul>
    </div>
  );
};

export default VideoCard;
