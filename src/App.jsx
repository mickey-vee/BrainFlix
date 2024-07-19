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

const api = "56371e22-50ed-4918-a370-af4616c10a37";

const VideoPage = () => {
  const { id } = useParams();

  const currentVideo = videoData.find(
    (video) => video.id === id || "84e96018-4022-434e-80bf-000ce4cd12b8"
  );

  return (
    <>
      <Nav />
      <Video />
      <div className="content-wrapper">
        <div className="detail-form">
          <VideoDetails video={currentVideo} />
          <Form />
          <Comments />
        </div>
        <NextVideo />
      </div>
    </>
  );
};

const App = () => {
  const [currentVideo, setCurrentVideo] = useState(videoData[0]);
  const { id } = useParams();

  useEffect(() => {
    const fetchVideo = async () => {
      try {
        const response = await axios.get(
          `https://unit-3-project-api-0a5620414506.herokuapp.com/videos?api_key=${api}`
        );
        setCurrentVideo(response.data);
      } catch (error) {}
    };
    fetchVideo();
  }, [id]);

  if (!currentVideo.length) {
    return <>Loading...</>;
  }

  const defaultVideo = currentVideo[0].id;
  console.log(defaultVideo);

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
