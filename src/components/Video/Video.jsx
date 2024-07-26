import React from "react";
import "./Video.scss";

const Video = ({ videoData }) => {
  return (
    <section className="video" id="video">
      <video
        className="video__image"
        src={videoData.video}
        poster={videoData.image}
        controls
      ></video>
    </section>
  );
};

export default Video;
