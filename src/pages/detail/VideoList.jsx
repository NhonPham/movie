import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import tmdbApi from "../../api/tmdbApi";
import Video from "./Video";
const VideoList = (props) => {
  const { id } = props;

  const { category } = useParams();
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const getVideos = async () => {
      const response = await tmdbApi.getVideos(category, id);
      setVideos(response.results.slice(0, 5));
    };
    getVideos();
  }, [category, id]);

  return (
    <>
      {videos.map((item, index) => (
        <Video key={index} item={item} />
      ))}
    </>
  );
};

export default VideoList;
