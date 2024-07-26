import React from "react";
import Nav from "../../components/Nav/Nav";
import Video from "../../components/Video/Video";
import VideoDetails from "../../components/VideoDetails/VideoDetails";
import Form from "../../components/Form/Form";
import Comments from "../../components/Comments/Comments";
import NextVideo from "../../components/NextVideo/NextVideos";

const VideoPage = ({ videoId, videoData, commentData, nextVideo }) => {
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

export default VideoPage;
