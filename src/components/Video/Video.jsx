import React from "react";
import "./Video.scss";

const Video = ({ video }) => {
  const date = new Date(video.timestamp);

  const formattedDate = date.toLocaleDateString("en-US", {
    year: "2-digit",
    month: "numeric",
    day: "numeric",
  });

  return (
    <>
      <section className="video" id="video">
        <video
          className="video__image"
          src={video.video}
          poster={video.image}
          controls
        ></video>
        <div className="video__wrapper">
          <h1 className="video__title">{video.title}</h1>
          <div className="video__detail">
            <div className="video__detail-wrapper">
              <span className="video__detail-text video__detail-text--bold">
                By {video.channel}
              </span>
              <span className="video__detail-text">{formattedDate}</span>
            </div>
            <div className="video__detail-wrapper">
              <span className="video__detail-text">
                <img
                  src="../../../src/assets/images/Icons/views.svg"
                  alt="views icon"
                />
                {` ${video.views}`}
              </span>
              <span className="video__detail-text">
                <img
                  src="../../../src/assets/images/Icons/likes.svg"
                  alt="likes icon"
                />
                {` ${video.likes}`}
              </span>
            </div>
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
