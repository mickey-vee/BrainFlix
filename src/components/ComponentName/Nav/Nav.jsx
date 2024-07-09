import React from "react";
import "./Nav.scss";

const NavContent = () => {
  return (
    <>
      <div>
        <a href="./index.html">
          <img
            className="nav__logo"
            src="./src/assets/images/Logo/BrainFlix-logo.svg"
            alt="BrainFlix Logo"
          />
        </a>
      </div>

      <div className="nav__search-bar">
        <form className="nav__form">
          <input
            className="nav__form-box"
            type="text"
            name="search"
            id="search"
            placeholder="Search"
          />
        </form>
        <div className="nav__avatar"></div>
      </div>
      <button className="nav__button">
        <img
          src="./src/assets/images/Icons/upload.svg"
          alt="Upload Image"
          className="upload-image"
        />
        <span className="nav__button-text">UPLOAD</span>
      </button>
    </>
  );
};

export default NavContent;
