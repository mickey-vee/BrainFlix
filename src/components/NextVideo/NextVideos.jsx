import React from "react";
import "./NextVideos.scss";

const NextVideo = () => {
  return (
    <>
      <h2 class="next-video__text">NEXT VIDEOS</h2>
      <div class="next-video__card">
        <img
          class="next-video__image"
          src="https://unit-3-project-api-0a5620414506.herokuapp.com/images/image4.jpg"
          alt=""
        />
        <div class="next-video__details">
          <h3 class="next-video__title">Exploring Cities of Europe</h3>
          <h3 class="next-video__author">Ryan Hernandez</h3>
        </div>
      </div>
    </>
  );
};

export default NextVideo;

/* from array need to get title, channel, image for next videos  */

/* "title": "Beyond the Horizon",
"channel": "Emmett Wilson",
"image": "https://unit-3-project-api-0a5620414506.herokuapp.com/images/image4.jpg", */
