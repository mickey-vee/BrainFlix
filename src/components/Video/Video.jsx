import React, { useState, useEffect } from "react";
import "./Video.scss";
import axios from "axios";
import { useParams } from "react-router-dom";

const api = "56371e22-50ed-4918-a370-af4616c10a37";

const Video = () => {
  const { id } = useParams();
  const [currentVideo, setCurrentVideo] = useState([]);

  useEffect(() => {
    const fetchVideo = async () => {
      const videoId = id || "84e96018-4022-434e-80bf-000ce4cd12b8";
      try {
        const response = await axios.get(
          `https://unit-3-project-api-0a5620414506.herokuapp.com/videos/${videoId}?api_key=${api}`
        );
        setCurrentVideo(response.data);
      } catch (error) {
        console.log(error);
      }
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
