import React from "react";
import "./NextVideos.scss";

const NextVideo = ({ videoData }) => {
  const handleClick = (video) => {
    console.log(video);
  };

  return (
    <>
      <div className="next-video">
        <h2 className="next-video__text">NEXT VIDEOS</h2>
        {videoData.map((video) => (
          <div
            onClick={() => handleClick(video)}
            className="next-video__card"
            key={video.id}
          >
            <img
              className="next-video__image"
              src={video.image}
              alt={video.title}
            />
            <div className="next-video__details">
              <h3 className="next-video__title">{video.title}</h3>
              <h3 className="next-video__author">{video.channel}</h3>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default NextVideo;
