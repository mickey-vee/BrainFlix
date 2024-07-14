import React from "react";
import "./Form.scss";

const Form = () => {
  return (
    <>
      <div className="form">
        <div className="form__image"></div>
        <div className="form__form-box">
          <form id="form" className="form__wrapper">
            <label className="form__label" htmlFor="form">
              JOIN THE CONVERSATION
            </label>
            <textarea
              className="form__text"
              id="form"
              name="user_comment"
              rows="6"
              cols="30"
              placeholder="Add a new comment"
            ></textarea>

            <div className="form__button">
              <button type="submit" className="form__submit" id="add-comment">
                {" "}
                <img
                  src="./src/assets/images/Icons/add_comment.svg"
                  alt="Upload Image"
                  className="upload-image"
                />{" "}
                <span className="form__button-text">COMMENT</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Form;
