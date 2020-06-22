import React, { Component } from "react";
const API_KEY = "76177c7fb779da86955a3e56aab3bcec";

export default class MovieList extends Component {
  state = {
    movies: [],
  };

  componentDidMount() {
    fetch(
      "https://api.themoviedb.org/3/discover/movie?api_key=" + API_KEY + "&language=en-US&region=US"
    )
      .then((res) => res.json())
      .then((data) =>
        this.setState({
          movies: data.results,
        })
      );
  }

  render() {
    console.log(this.state.movies);
    return <div>MOVIES</div>;
  }
}
