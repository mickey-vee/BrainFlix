import React from "react";
import "./Comments.scss";

const Comments = ({ video }) => {
  return (
    <>
      <div className="form-comments">
        <div className="comments">
          {video.comments.map((comment) => (
            <div key={comment.id} className="comments__section">
              <div className="comments__image"></div>
              <div className="comments__wrapper">
                <div className="comments__name-date-wrapper">
                  <div className="comments__name-date">{comment.name}</div>
                  <div className="comments__name-date comments__name-date--color">
                    {comment.timestamp}
                  </div>
                </div>
                <p className="comments__text">{comment.comment}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Comments;
