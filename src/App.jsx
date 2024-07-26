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

const VideoPage = ({ defaultVideoId }) => {
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
        console.log(response.data);
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
    <>
      <Nav defaultVideoId={videoId} />
      <Video videoData={videoData} />
      <div className="content-wrapper">
        <div className="detail-form">
          <VideoDetails videoData={videoData} defaultVideoId={videoId} />
          <Form />
          <Comments defaultVideoId={videoId} comments={commentData} />
        </div>
        <NextVideo defaultVideoId={videoId} nextVideo={nextVideo} />
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
