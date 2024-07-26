import React, { useState, useEffect } from "react";
import Upload from "./pages/Upload/Upload";
import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";
import axios from "axios";
import VideoPage from "./pages/VideoPage/VideoPage";

const MainPage = ({ defaultVideoId }) => {
  const { id } = useParams();
  const [videoId, setVideoId] = useState(defaultVideoId);
  const [commentData, setCommentData] = useState([]);
  const [videoData, setVideoData] = useState({});
  const [nextVideo, setnextVideo] = useState({});

  useEffect(() => {
    const fetchId = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/video`);
        const fetchedVideoId = response.data[0].id;
        setVideoId(fetchedVideoId);
        setnextVideo(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchId();
  }, []);

  useEffect(() => {
    const fetchData = async (id) => {
      try {
        const response = await axios.get(`http://localhost:8080/video/${id}`);
        setCommentData(response.data.comments);
        setVideoData(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    if (id || videoId) {
      const currentVideoId = id || videoId;
      fetchData(currentVideoId);
    }
  }, [id, videoId]);

  if (!videoId || !videoData) {
    return <div>Loading...</div>;
  }

  return (
    <VideoPage
      videoId={videoId}
      videoData={videoData}
      commentData={commentData}
      nextVideo={nextVideo}
    />
  );
};

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/video/:id" element={<MainPage />} />
        <Route path="/upload" element={<Upload />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
