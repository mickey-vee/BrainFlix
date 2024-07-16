import React from "react";
import "./NextVideos.scss";
import { Link } from "react-router-dom";

const NextVideo = ({ videoData, onVideoSelect, currentVideo }) => {
  const handleClick = (video) => {
    onVideoSelect(video);
  };

  return (
    <div className="next-video">
      <h2 className="next-video__text">NEXT VIDEOS</h2>
      {videoData
        .filter((video) => video.id !== currentVideo.id)
        .map((video) => {
          return (
            <Link to={`/video/${video.id}`} key={video.id}>
              <div
                onClick={() => handleClick(video)}
                className="next-video__card"
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
            </Link>
          );
        })}
    </div>
  );
};

export default NextVideo;
