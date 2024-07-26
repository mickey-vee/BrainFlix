import React from "react";
import "./NextVideos.scss";
import { Link, useParams } from "react-router-dom";

const NextVideo = ({ defaultVideoId, nextVideo }) => {
  let { id } = useParams();

  if (!id) {
    id = defaultVideoId;
  }

  return (
    <div className="next-video">
      <h2 className="next-video__text">NEXT VIDEOS</h2>
      {nextVideo
        .filter((video) => video.id !== id)
        .map((video) => (
          <Link to={`/video/${video.id}`} key={video.id}>
            <div className="next-video__card">
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
        ))}
    </div>
  );
};

export default NextVideo;
