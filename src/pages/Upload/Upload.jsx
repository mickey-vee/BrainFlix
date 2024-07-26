import React from "react";
import "./Upload.scss";
import Nav from "../../../src/components/Nav/Nav.jsx";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const api = "56371e22-50ed-4918-a370-af4616c10a37";

const Upload = () => {
  const [video, setVideo] = useState([]);

  useEffect(() => {
    const fetchVideo = async () => {
      try {
        const response = await axios.get(
          `https://unit-3-project-api-0a5620414506.herokuapp.com/videos/?api_key=${api}`
        );
        setVideo(response.data[0].image);
      } catch (error) {
        console.error(error);
      }
    };
    fetchVideo();
  }, []);

  const handleClick = () => {
    const postVideo = async () => {
      try {
        const response = await axios.post("http://localhost:8080/video", {
          title: "test123",
          description: "test123",
        });
        response();
      } catch (error) {
        console.error(error);
      }
    };
    postVideo();
  };

  return (
    <>
      <Nav />
      <div className="upload">
        <h1 className="upload__title">Upload Video</h1>
        <div className="upload__main-wrapper">
          <div className="upload__desktop-wrapper">
            <p className="upload__subtitle">VIDEO THUMBNAIL</p>
            <img className="upload__image" src={video} alt="" />
          </div>
          <form id="form" className="upload__wrapper">
            <div className="upload__input-wrapper">
              <label className="form__label" htmlFor="">
                TITLE YOUR VIDEO
              </label>
              <input
                className="upload__text"
                type="text"
                placeholder="Add a title to your video"
              ></input>
              <label className="upload__label" htmlFor="upload">
                ADD A VIDEO DESCRIPTION
              </label>
              <textarea
                className="upload__text"
                id="upload"
                name="user_comment"
                rows="6"
                cols="30"
                placeholder="Add a description to your video"
              ></textarea>
            </div>
          </form>
        </div>
        <div className="upload__buttons">
          <button className="cancel-button">
            <span className="cancel-button__text">CANCEL</span>
          </button>
          <Link to={"/"} className="link-wrapper">
            <button
              className="upload__submit"
              id="upload-video"
              onClick={() => {
                handleClick;
                alert("Video has been uploaded");
              }}
            >
              <img
                src="./src/assets/images/Icons/publish.svg"
                alt="Upload Image"
                className="upload-image"
              />
              <span className="upload__button-text">PUBLISH</span>
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Upload;
