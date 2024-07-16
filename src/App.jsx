import React, { useState, useEffect } from "react";
import Nav from "./components/Nav/Nav";
import Video from "./components/Video/Video";
import VideoDetails from "./components/VideoDetails/VideoDetails";
import NextVideo from "./components/NextVideo/NextVideos";
import Form from "./components/Form/Form";
import videoData from "./data/video-details.json";
import Comments from "./components/Comments/Comments";
import Upload from "./pages/Upload/Upload";
import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";
import axios from "axios";

const VideoPage = ({ videoData, handleVideoSelect }) => {
  const { id } = useParams();
  const currentVideo =
    videoData.find((video) => video.id === id) || videoData[0];

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://unit-3-project-api-0a5620414506.herokuapp.com/videos?api_key=%3Cyour_api_key_here"
        );
        setVideos(response.data);
      } catch (e) {
        console.log(e);
      }
    };

    fetchData();
  }, []);

  return (
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
  );
};

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
            <VideoPage
              videoData={videoData}
              handleVideoSelect={handleVideoSelect}
            />
          }
        />
        <Route
          path="/video/:id"
          element={
            <VideoPage
              videoData={videoData}
              handleVideoSelect={handleVideoSelect}
            />
          }
        />
        <Route path="/upload" element={<Upload video={currentVideo} />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
