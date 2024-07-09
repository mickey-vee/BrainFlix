import React from "react";
import "./Comments.scss";

const Comments = () => {
  return (
    <>
      <div class="comments__wrapper">
        <div class="comments__image"></div>
        <div class="comments__form-box">
          <form id="form" class="form">
            <label class="comments__label" for="comment">
              JOIN THE CONVERSATION
            </label>
            <textarea
              class="comments__text"
              id="comment"
              name="user_comment"
              rows="6"
              cols="30"
              placeholder="Add a new comment"
            ></textarea>

            <div class="comments__button">
              <button type="submit" class="comments__submit" id="add-comment">
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
