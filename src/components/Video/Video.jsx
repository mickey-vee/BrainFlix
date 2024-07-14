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
          controls
        ></video>
      </section>
    </>
  );
};

export default Video;
