import React from "react";
import "./Comments.scss";
import videoData from "../../data/video-details.json";

const Comments = () => {
  return (
    <>
      <div className="comments__wrapper">
        <div className="comments__image"></div>
        <div className="comments__form-box">
          <form id="form" className="form">
            <label className="comments__label" for="comment">
              JOIN THE CONVERSATION
            </label>
            <textarea
              className="comments__text"
              id="comment"
              name="user_comment"
              rows="6"
              cols="30"
              placeholder="Add a new comment"
            ></textarea>

            <div className="comments__button">
              <button
                type="submit"
                className="comments__submit"
                id="add-comment"
              >
                COMMENT
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Comments;
