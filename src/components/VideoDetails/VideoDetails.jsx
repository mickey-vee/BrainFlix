import React from "react";
import "./VideoDetails.scss";
import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const api = "56371e22-50ed-4918-a370-af4616c10a37";

const VideoDetails = () => {
  const { id } = useParams();
  const [details, setDetails] = useState(
    "84e96018-4022-434e-80bf-000ce4cd12b8"
  );

  useEffect(() => {
    const fetchDetails = async () => {
      const videoId = id || "84e96018-4022-434e-80bf-000ce4cd12b8";
      const response = await axios.get(
        `https://unit-3-project-api-0a5620414506.herokuapp.com/videos/${videoId}?api_key=${api}`
      );
      setDetails(response.data);
    };
    fetchDetails();
  }, [id]);

  const date = new Date(details.timestamp);

  const formattedDate = date.toLocaleDateString("en-US", {
    year: "2-digit",
    month: "numeric",
    day: "numeric",
  });

  return (
    <>
      <div className="video__wrapper">
        <h1 className="video__title">{details.title}</h1>
        <div className="video__detail">
          <div className="video__detail-wrapper">
            <span className="video__detail-text video__detail-text--bold">
              By {details.channel}
            </span>
            <span className="video__detail-text">{formattedDate}</span>
          </div>
          <div className="video__detail-wrapper">
            <span className="video__detail-text">
              <img
                src="../../../src/assets/images/Icons/views.svg"
                alt="views icon"
              />
              {` ${details.views}`}
            </span>
            <span className="video__detail-text">
              <img
                src="../../../src/assets/images/Icons/likes.svg"
                alt="likes icon"
              />
              {` ${details.likes}`}
            </span>
          </div>
        </div>
        <div>
          <p className="video__description">{details.description}</p>
          {/* 
          <p className="video__comment-number">{comments.length} Comments</p> */}
        </div>
      </div>
    </>
  );
};

export default VideoDetails;
