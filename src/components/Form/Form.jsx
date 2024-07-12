import React from "react";
import "./Form.scss";

const Form = () => {
  return (
    <>
      <div className="form__wrapper">
        <div className="form__image"></div>
        <div className="form__form-box">
          <form id="form" className="form">
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
                COMMENT
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Form;
