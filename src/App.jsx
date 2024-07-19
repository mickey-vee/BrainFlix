import React, { useState, useEffect } from "react";
import Nav from "./components/Nav/Nav";
import Video from "./components/Video/Video";
import VideoDetails from "./components/VideoDetails/VideoDetails";
import NextVideo from "./components/NextVideo/NextVideos";
import Form from "./components/Form/Form";
import Comments from "./components/Comments/Comments";
import Upload from "./pages/Upload/Upload";
import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";
import axios from "axios";

const api = "56371e22-50ed-4918-a370-af4616c10a37";

const VideoPage = () => {
  const [videoId, setVideoId] = useState();

  useEffect(() => {
    const fetchId = async () => {
      try {
        const response = await axios.get(
          `https://unit-3-project-api-0a5620414506.herokuapp.com/videos?api_key=${api}`
        );
        const fetchedVideoId = response.data[0].id;
        setVideoId(fetchedVideoId);
      } catch (error) {
        console.log(error);
      }
    };
    fetchId();
  }, []);

  const defaultVideoId = videoId;

  if (!defaultVideoId) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Nav defaultVideoId={defaultVideoId} />
      <Video defaultVideoId={defaultVideoId} />
      <div className="content-wrapper">
        <div className="detail-form">
          <VideoDetails defaultVideoId={defaultVideoId} />
          <Form />
          <Comments defaultVideoId={defaultVideoId} />
        </div>
        <NextVideo defaultVideoId={defaultVideoId} />
      </div>
    </>
  );
};

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<VideoPage />} />
        <Route path="/video/:id" element={<VideoPage />} />
        <Route path="/upload" element={<Upload />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
