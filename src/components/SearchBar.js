import React, { Component } from "react";

import { Paper, TextField } from "@material-ui/core";
class SearchBar extends Component {
  state = {
    searchTerm: " "
  };
  handleChange = event => {
    this.setState({
      searchTerm: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    const { searchTerm } = this.state;
    const { onFormSubmit } = this.props;
    console.log(searchTerm);
    onFormSubmit(searchTerm);
  };
  render() {
    return (
      <Paper elevation={6} style={{ padding: "25px" }}>
        <form onSubmit={this.handleSubmit}>
          <TextField
            fullWidth
            label="Search...."
            onChange={this.handleChange}
          />
        </form>
      </Paper>
    );
  }
}

export default SearchBar;
