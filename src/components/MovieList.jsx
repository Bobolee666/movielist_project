import React, { Component, Fragment } from "react";
import "./MovieList.css";
import MovieItem from "./MovieItem";

export default class MovieList extends Component {
  state = {
    page: 500,
    allMovie: [],
    pageMovie: [],
    likedMovie: [],
    blockedMovies: [],
  };
  componentDidMount = () => {
    const { page } = this.state;

    const list = [];
    fetch(
      "https://api.themoviedb.org/3/discover/movie?api_key=87dabc6e2725920a54ec3b03e8f64cc8" +
        "&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=" +
        page
    )
      .then((res) => res.json())
      .then((data) =>
        data.results.map((item) => {
          list.push(this.createOneItem(item));
        })
      )
      .then(
        this.setState({
          pageMovie: list,
        })
      );
  };

  createOneItem = (item) => {
    return {
      id: item.id,
      title: item.original_title,
      backgroundPicture: item.poster_path,
      isLike: false,
      isBlock: false,
      releaseDate: item.release_date,
      voteCount: item.vote_count,
      voteAve: item.vote_average,
      description: item.overview,
    };
  };
  render() {
    const { page, pageMovie } = this.state;
    console.log(page, pageMovie);

    return (
      <Fragment>
        <button>Vote</button>
        <button></button>
        <hr />
        <div id="pageBar">
          <button
            onClick={() => this.setState({ page: page === 0 ? 500 : page - 1 })}
          >
            &lt;
          </button>
          <p> Page {" " + page + "/500"}</p>
          <button
            onClick={() => this.setState({ page: page === 500 ? 0 : page + 1 })}
          >
            &gt;
          </button>
        </div>

        <hr />
        <div id="movieList">
          {pageMovie.map((movie) => (
            <MovieItem movie={movie} />
          ))}
        </div>
      </Fragment>
    );
  }
}
