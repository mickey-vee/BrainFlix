import React from "react";
import "./NextVideos.scss";
import videoData from "../../data/video-details.json";

const commentsArray = videoData.comments;
console.log(commentsArray);

const NextVideo = () => {
  return (
    <>
      <h2 className="next-video__text">NEXT VIDEOS</h2>
      {videoData.map((video) => (
        <div className="next-video__card" key={video.id}>
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
    </>
  );
};

export default NextVideo;

/* from array need to get title, channel, image for next videos  */

/* "title": "Beyond the Horizon",
"channel": "Emmett Wilson",
"image": "https://unit-3-project-api-0a5620414506.herokuapp.com/images/image4.jpg", */
