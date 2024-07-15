import React from "react";
import "./Upload.scss";
import Nav from "../../../src/components/Nav/Nav.jsx";

const Upload = ({ video }) => {
  return (
    <>
      <Nav />
      <div className="upload">
        <h1 className="upload__title">Upload Video</h1>
        <p className="upload__subtitle">VIDEO THUMBNAIL</p>
        <img className="upload__image" src={video.image} alt="" />
        <form id="form" className="form__wrapper">
          <div className="form__input-wrapper">
            <label className="form__label" htmlFor="">
              TITLE YOUR VIDEO
            </label>
            <input
              className="form__text"
              type="text"
              placeholder="Add a title to your video"
            ></input>
            <label className="form__label" htmlFor="form">
              ADD A VIDEO DESCRIPTION
            </label>
            <textarea
              className="form__text"
              id="form"
              name="user_comment"
              rows="6"
              cols="30"
              placeholder="Add a description to your video"
            ></textarea>
          </div>

          <div className="form__button">
            <button type="submit" className="form__submit" id="add-comment">
              {" "}
              <img
                src="./src/assets/images/Icons/publish.svg"
                alt="Upload Image"
                className="upload-image"
              />{" "}
              <span className="form__button-text">PUBLISH</span>
            </button>
          </div>
        </form>
        <button className="cancel-button">
          <span className="cancel-button__text">CANCEL</span>
        </button>
      </div>
    </>
  );
};

export default Upload;
