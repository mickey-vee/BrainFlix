import React, { useState } from "react";
import Nav from "./components/Nav/Nav";
import Video from "./components/Video/Video";
import VideoDetails from "./components/VideoDetails/VideoDetails";
import NextVideo from "./components/NextVideo/NextVideos";
import Form from "./components/Form/Form";
import videoData from "./data/video-details.json";
import Comments from "./components/Comments/Comments";
import Upload from "./pages/Upload/Upload";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  const [currentVideo, setCurrentVideo] = useState(videoData[0]);

  const handleVideoSelect = (video) => {
    setCurrentVideo(video);
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <div>
              <Nav />
              <Video video={currentVideo} />
              <div className="content-wrapper">
                <div className="detail-form">
                  <VideoDetails video={currentVideo} />
                  <Form />
                  <Comments video={currentVideo} />
                </div>
                <NextVideo
                  videoData={videoData}
                  onVideoSelect={handleVideoSelect}
                  currentVideo={currentVideo}
                />
              </div>
            </div>
          }
        />
        <Route
          path={`/${currentVideo.id}`}
          element={
            <div>
              <Nav />
              <Video video={currentVideo} />
              <div className="content-wrapper">
                <div className="detail-form">
                  <VideoDetails video={currentVideo} />
                  <Form />
                  <Comments video={currentVideo} />
                </div>
                <NextVideo
                  videoData={videoData}
                  onVideoSelect={handleVideoSelect}
                  currentVideo={currentVideo}
                />
              </div>
            </div>
          }
        />

        <Route path="Upload" element={<Upload video={currentVideo} />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
