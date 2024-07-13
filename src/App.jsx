import React, { useState } from "react";
import Nav from "./components/Nav/Nav";
import Video from "./components/Video/Video";
import NextVideo from "./components/NextVideo/NextVideos";
import Form from "./components/Form/Form";
import videoData from "./data/video-details.json";
import Comments from "./components/Comments/Comments";

const App = () => {
  const [currentVideo, setCurrentVideo] = useState(videoData[0]);

  const handleVideoSelect = (video) => {
    setCurrentVideo(video);
  };

  return (
    <div>
      <Nav />
      <Video video={currentVideo} />
      <Form />
      <Comments video={currentVideo} />
      <NextVideo
        videoData={videoData}
        onVideoSelect={handleVideoSelect}
        currentVideo={currentVideo}
      />
    </div>
  );
};

export default App;
