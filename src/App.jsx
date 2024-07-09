import React from "react";
import ReactDOM from "react-dom/client";
import Nav from "./components/Nav/Nav";
import Video from "./components/Video/Video";
import MainWrapper from "./components/MainWrapper/MainWrapper";
import NextVideo from "./components/NextVideo/NextVideos";
import Comments from "./components/Comments/Comments";

ReactDOM.createRoot(document.getElementById("nav")).render(
  <React.StrictMode>
    <Nav />
  </React.StrictMode>
);

ReactDOM.createRoot(document.getElementById("video")).render(
  <React.StrictMode>
    <Video />
  </React.StrictMode>
);

ReactDOM.createRoot(document.getElementById("main__wrapper")).render(
  <React.StrictMode>
    <MainWrapper />
  </React.StrictMode>
);

ReactDOM.createRoot(document.getElementById("next-video")).render(
  <React.StrictMode>
    <NextVideo />
  </React.StrictMode>
);

ReactDOM.createRoot(document.getElementById("comments")).render(
  <React.StrictMode>
    <Comments />
  </React.StrictMode>
);
