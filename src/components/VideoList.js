import React from "react";
import { Grid } from "@material-ui/core";
import VideoItem from "./VideoItem";
export default function VideoList(props) {
  const listOfVideos = props.videos.map(video => {
    return (
      <VideoItem
        key={video.id}
        onVideoSelect={props.onVideoSelect}
        video={video}
      />
    );
  });
  return <Grid>{listOfVideos}</Grid>;
}
