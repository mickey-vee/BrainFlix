import React, { useEffect, useState } from "react";
import "./NextVideos.scss";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

const api = "56371e22-50ed-4918-a370-af4616c10a37";

const NextVideo = () => {
  const { id } = useParams();
  const [nextVideo, setNextVideo] = useState([]);

  useEffect(() => {
    const fetchVideo = async () => {
      const response = await axios.get(
        `https://unit-3-project-api-0a5620414506.herokuapp.com/videos?api_key=${api}`
      );
      setNextVideo(response.data);
    };
    fetchVideo();
  }, [id]);

  const currentVideoId = id || "84e96018-4022-434e-80bf-000ce4cd12b8";

  return (
    <div className="next-video">
      <h2 className="next-video__text">NEXT VIDEOS</h2>
      {nextVideo
        .filter((video) => video.id !== currentVideoId)
        .map((video) => {
          return (
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
          );
        })}
    </div>
  );
};

export default NextVideo;
