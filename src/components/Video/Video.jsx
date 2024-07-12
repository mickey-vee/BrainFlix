import React from "react";
import "./Video.scss";

const Video = () => {
  return (
    <>
      <section className="video" id="video">
        <video
          className="video__image"
          src=""
          poster="./src/assets/images/Images/Upload-video-preview.jpg"
        ></video>
        <div className="video__wrapper">
          <h1 className="video__title">
            The Future of Artificial Intelligence
          </h1>
          <div className="video__detail">
            <span className="video__detail-text video__detail-text--bold">
              By aiden
            </span>
            <span className="video__detail-text">Views</span>
            <span className="video__detail-text">Date</span>
            <span className="video__detail-text">Likes</span>
          </div>
          <div>
            <p className="video__description">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit
              natus consequatur quaerat, ipsa at quisquam, sapiente quasi
              distinctio, recusandae laboriosam aperiam quam omnis officiis quas
              nulla possimus commodi dolor perspiciatis.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Video;
