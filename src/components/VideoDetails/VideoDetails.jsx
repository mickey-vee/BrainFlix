import React from "react";
import "./VideoDetails.scss";

const VideoDetails = ({ videoData }) => {
  const date = new Date(videoData.timestamp);

  const formattedDate = date.toLocaleDateString("en-US", {
    year: "2-digit",
    month: "numeric",
    day: "numeric",
  });

  if (videoData.comments) {
    return (
      <>
        <div className="video__wrapper">
          <h1 className="video__title">{videoData.title}</h1>
          <div className="video__detail">
            <div className="video__detail-wrapper">
              <span className="video__detail-text video__detail-text--bold">
                By {videoData.channel}
              </span>
              <span className="video__detail-text">{formattedDate}</span>
            </div>
            <div className="video__detail-wrapper">
              <span className="video__detail-text">
                <img
                  src="../../../src/assets/images/Icons/views.svg"
                  alt="views icon"
                />
                {` ${videoData.views}`}
              </span>
              <span className="video__detail-text">
                <img
                  src="../../../src/assets/images/Icons/likes.svg"
                  alt="likes icon"
                />
                {` ${videoData.likes}`}
              </span>
            </div>
          </div>
          <div>
            <p className="video__description">{videoData.description}</p>
            <p className="video__comment-number">
              {videoData.comments.length} Comments
            </p>
          </div>
        </div>
      </>
    );
  }
};

export default VideoDetails;
