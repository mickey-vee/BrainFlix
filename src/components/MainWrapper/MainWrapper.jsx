import React from "react";
import "./MainWrapper.scss";

const MainWrapper = () => {
  return (
    <>
      <div className="main__details">
        <span className="main__detail-text main__detail-text--bold">
          By aiden
        </span>
        <span className="main__detail-text">Views</span>
        <span className="main__detail-text">Date</span>
        <span className="main__detail-text">Likes</span>
      </div>
    </>
  );
};

export default MainWrapper;
