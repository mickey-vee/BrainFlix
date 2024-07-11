import React from "react";
import ReactDOM from "react-dom/client";
import Nav from "./components/Nav/Nav";
import Video from "./components/Video/Video";
import MainWrapper from "./components/MainWrapper/MainWrapper";
import NextVideo from "./components/NextVideo/NextVideos";
import Form from "./components/Form/Form";

const makeComponent = (elementId, Component) => {
  ReactDOM.createRoot(document.getElementById(elementId)).render(
    <React.StrictMode>
      <Component />
    </React.StrictMode>
  );
};

makeComponent("nav", Nav);
makeComponent("video", Video);
makeComponent("main__wrapper", MainWrapper);
makeComponent("next-video", NextVideo);
makeComponent("form", Form);
