import React, { Component } from "react";
import { Grid } from "@material-ui/core";
import youtube from "./api/youtube";
import SearchBar from "./components/SearchBar";
import VideoDetail from "./components/VideoDetail";
class App extends Component {
  handleSubmit = async SearchTerm => {
    const response = await youtube.get("search", {
      params: {
        part: "snippet",
        maxResults: 5,
        key: "AIzaSyApd3NMWiWyjhZL_yAd7NiIpcz7pPBf-Ec",
        q: SearchTerm
      }
    });
    console.log(response.data.items);
  };

  render() {
    return (
      <Grid justify="center" container spacing={10}>
        <Grid item xs={12}>
          <Grid container spacing={10}>
            <Grid item xs={12}>
              <SearchBar onFormSubmit={this.handleSubmit} />
            </Grid>
            <Grid item xs={8}>
              <VideoDetail />
            </Grid>
            <Grid item xs={4}>
              {/* Video List */}
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    );
  }
}

export default App;
