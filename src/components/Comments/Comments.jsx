import React, { useState, useEffect } from "react";
import "./Comments.scss";
import axios from "axios";
import { useParams } from "react-router-dom";

const api = "56371e22-50ed-4918-a370-af4616c10a37";

const Comments = () => {
  const { id } = useParams();
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const fetchComments = async () => {
      const videoId = id || "84e96018-4022-434e-80bf-000ce4cd12b8";
      const response = await axios.get(
        `https://unit-3-project-api-0a5620414506.herokuapp.com/videos/${videoId}?api_key=${api}`
      );
      setComments(response.data.comments);
    };
    fetchComments();
  }, [id]);

  const sortedComments = comments.sort((a, b) => b.timestamp - a.timestamp);

  return (
    <div className="form-comments">
      <div className="comments">
        {sortedComments.map((comment) => {
          const date = new Date(comment.timestamp);
          const formattedDate = date.toLocaleDateString("en-US", {
            year: "2-digit",
            month: "numeric",
            day: "numeric",
          });

          return (
            <div key={comment.id} className="comments__section">
              <div className="comments__image"></div>
              <div className="comments__wrapper">
                <div className="comments__name-date-wrapper">
                  <div className="comments__name-date">{comment.name}</div>
                  <div className="comments__name-date comments__name-date--color">
                    {formattedDate}
                  </div>
                </div>
                <p className="comments__text">{comment.comment}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Comments;
