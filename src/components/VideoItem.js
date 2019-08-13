import React, { Component } from "react";
import { Grid, Paper, Typography } from "@material-ui/core";
class VideoItem extends Component {
  render() {
    return (
      <div>
        <Grid item xs={12}>
          <Paper
            style={{ display: "flex", alignItems: "center" }}
            onClick={() => this.props.onVideoSelect(this.props.video)}
          >
            <img
              style={{ marginRight: "20ox" }}
              alt="thumbnail"
              src={this.props.video.snippet.thumbnails.medium.url}
            />
            <Typography variant="subtitle1">
              {" "}
              <b>{this.props.video.snippet.title}</b>
            </Typography>
          </Paper>
        </Grid>
      </div>
    );
  }
}

export default VideoItem;
