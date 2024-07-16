import React from "react";
import "./Upload.scss";
import Nav from "../../../src/components/Nav/Nav.jsx";

const Upload = ({ video }) => {
  return (
    <>
      <Nav />
      <div className="upload">
        <h1 className="upload__title">Upload Video</h1>
        <div className="upload__main-wrapper">
          <div className="upload__desktop-wrapper">
            <p className="upload__subtitle">VIDEO THUMBNAIL</p>
            <img className="upload__image" src={video.image} alt="" />
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
          <button type="submit" className="upload__submit" id="add-comment">
            {" "}
            <img
              src="./src/assets/images/Icons/publish.svg"
              alt="Upload Image"
              className="upload-image"
            />{" "}
            <span className="upload__button-text">PUBLISH</span>
          </button>
        </div>
      </div>
    </>
  );
};

export default Upload;
