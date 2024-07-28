import React, { useEffect, useState } from "react";
import "./Upload.scss";
import Nav from "../../../src/components/Nav/Nav.jsx";
import { Link } from "react-router-dom";
import axios from "axios";

const Upload = () => {
  const [video, setVideo] = useState("");
  const [input, setInput] = useState({
    title: "",
    description: "",
    image: "",
  });

  useEffect(() => {
    const fetchVideo = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/video`);
        const videoImage = response.data[0].image;
        setVideo(videoImage);
        setInput({
          title: input.title,
          description: input.description,
          image: videoImage,
        });
      } catch (error) {
        console.error(error);
      }
    };
    fetchVideo();
  }, []);

  const handleClick = async () => {
    try {
      await axios.post("http://localhost:8080/video", {
        title: input.title,
        description: input.description,
        image: input.image,
      });
      alert("Video has been uploaded");
    } catch (error) {
      console.error(error);
    }
  };

  const test = (event) => {
    const { name, value } = event.target;
    setInput({
      ...input,
      [name]: value,
    });
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
                name="title"
                value={input.title}
                onChange={test}
              />
              <label className="upload__label" htmlFor="upload">
                ADD A VIDEO DESCRIPTION
              </label>
              <textarea
                className="upload__text"
                id="upload"
                name="description"
                rows="6"
                cols="30"
                placeholder="Add a description to your video"
                value={input.description}
                onChange={test}
              />
            </div>
          </form>
        </div>
        <div className="upload__buttons">
          <Link to={"/"} className="link-wrapper">
            <button className="cancel-button">
              <span className="cancel-button__text">CANCEL</span>
            </button>
            <button
              className="upload__submit"
              id="upload-video"
              onClick={handleClick}
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
