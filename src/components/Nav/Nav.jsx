import React from "react";
import "./Nav.scss";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <>
      <nav className="nav" id="nav">
        <div>
          <Link to="/">
            <img
              className="nav__logo"
              src="./src/assets/images/Logo/BrainFlix-logo.svg"
              alt="BrainFlix Logo"
            />
          </Link>
        </div>
        <div className="nav__wrapper">
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
            <div className="nav__avatar-mobile"></div>
          </div>
          <Link to="/upload">
            <button className="nav__button">
              <img
                src="./src/assets/images/Icons/upload.svg"
                alt="Upload Image"
                className="upload-image"
              />

              <span className="nav__button-text">UPLOAD</span>
            </button>{" "}
          </Link>
          <div className="nav__avatar-tablet"></div>
        </div>
      </nav>
    </>
  );
};

export default Nav;
