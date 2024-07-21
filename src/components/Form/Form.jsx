import React, { useEffect, useState } from "react";
import "./Form.scss";
import CommentIcon from "../../assets/images/Icons/add_comment.svg";
import axios from "axios";
import { useParams } from "react-router-dom";

const api = "56371e22-50ed-4918-a370-af4616c10a37";

const Form = ({ defaultVideoId }) => {
  const { id } = useParams();
  const [comment, setComment] = useState("");

  const handleClick = async (event) => {
    event.preventDefault();
    const videoId = id || defaultVideoId;

    try {
      const response = await axios.post(
        `https://unit-3-project-api-0a5620414506.herokuapp.com/videos/${videoId}/comments?api_key=${api}`,
        {
          name: "Guest",
          comment: comment,
        }
      );
      console.log(response.data);
      setComment("");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="form">
      <div className="form__image"></div>
      <div className="form__form-box">
        <form id="form" className="form__wrapper">
          <div className="form__input-wrapper">
            <label className="form__label" htmlFor="user_comment">
              JOIN THE CONVERSATION
            </label>
            <textarea
              className="form__text"
              id="user_comment"
              name="user_comment"
              rows="6"
              cols="30"
              placeholder="Add a new comment"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
            ></textarea>
          </div>

          <div className="form__button">
            <button
              type="submit"
              className="form__submit"
              id="add-comment"
              onClick={handleClick}
            >
              <img
                src={CommentIcon}
                alt="Upload Image"
                className="upload-image"
              />
              <span className="form__button-text">COMMENT</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;
