import React from "react";
import "./Comments.scss";

const Comments = ({ comments }) => {
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
