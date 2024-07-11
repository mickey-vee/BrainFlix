import React from "react";
import videoData from "../../data/video-details.json";

const commentArray = videoData.map((commentArray) => commentArray);
console.log(commentArray);

const Comments = () => {
  return (
    <>
      <div className="form-comments"></div>
      {videoData.map((video) => {
        <div className="comments__wrapper">
          <div className="comments__old-image"></div>
          <div className="comments__old-wrapper">
            <div className="comments__name-date">video.timestamp</div>
            <p className="comments__old-text">video.comments</p>
          </div>
        </div>;
      })}
    </>
  );
};

export default Comments;
