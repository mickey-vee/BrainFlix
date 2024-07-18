import React, { useState, useEffect } from "react";
import "./Video.scss";
import axios from "axios";
import { useParams } from "react-router-dom";

const urlMaker = (videoId) => {
  return `https://unit-3-project-api-0a5620414506.herokuapp.com/videos/${videoId}?api_key=%3Cyour_api_key_here`;
};

const getVideo = async (videoId) => {
  const url = urlMaker(videoId);
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

const Video = () => {
  const { id } = useParams();
  const [currentVideo, setCurrentVideo] = useState(
    "84e96018-4022-434e-80bf-000ce4cd12b8"
  );

  useEffect(() => {
    const fetchVideo = async () => {
      const videoId = id || "84e96018-4022-434e-80bf-000ce4cd12b8";
      const fetchedVideo = await getVideo(videoId);
      setCurrentVideo(fetchedVideo);
    };
    fetchVideo();
  }, [id]);

  return (
    <section className="video" id="video">
      <video
        className="video__image"
        src={currentVideo.video}
        poster={currentVideo.image}
        controls
      ></video>
    </section>
  );
};

export default Video;
