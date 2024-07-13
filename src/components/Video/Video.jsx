import React from "react";
import "./Video.scss";

const Video = ({ video }) => {
  return (
    <>
      <section className="video" id="video">
        <video
          className="video__image"
          src={video.video}
          poster={video.image}
        ></video>
        <div className="video__wrapper">
          <h1 className="video__title">{video.title}</h1>
          <div className="video__detail">
            <span className="video__detail-text video__detail-text--bold">
              By {video.channel}
            </span>
            <span className="video__detail-text">{video.views} views</span>
            <span className="video__detail-text">{video.timestamp}</span>
            <span className="video__detail-text">{video.likes} likes</span>
          </div>
          <div>
            <p className="video__description">{video.description}</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Video;
