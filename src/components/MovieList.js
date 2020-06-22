import React, { Component, Fragment } from "react";
import "./MovieList.css";
import MovieItem from "./MovieItem";

export default class MovieList extends Component {
  state = {
    page: 1,
    pageList: [],
    allMovie: [],
    pageMovie: [],
    likedMovie: [],
    blockedMovies: [],
  };
  componentDidMount = () => {
    this.loadPageContent();
  };

  loadPageContent = () => {
    const { page, pageList, allMovie } = this.state;

    if (pageList.includes(page)) {
      console.log("这里是if， allmovie shi", allMovie);
      this.setState({
        pageMovie: allMovie.slice((page - 1) * 10, 20 * page - 1),
      });
    } else {
      fetch(
        "https://api.themoviedb.org/3/discover/movie?api_key=87dabc6e2725920a54ec3b03e8f64cc8" +
          "&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=" +
          page
      )
        .then((res) => res.json())
        .then((data) => {
          const list = this.createItems(data.results);
          this.setState({
            pageList: [...pageList, page],
            pageMovie: list,
            allMovie: [...allMovie, ...list],
          });
        });
    }
  };

  createItems = (list) => {
    let result = list.map((item) => {
      return {
        id: item.id,
        title: item.original_title,
        picture: item.poster_path,
        isLike: false,
        isBlock: false,
        releaseDate: item.release_date,
        voteCount: item.vote_count,
        voteAve: item.vote_average,
        description: item.overview,
      };
    });
    return result;
  };
  goPre = () => {
    const { page } = this.state;
    this.setState(
      {
        page: page === 0 ? 500 : page - 1,
      },
      () => {
        this.loadPageContent();
      }
    );
  };
  goNext = () => {
    const { page } = this.state;
    this.setState(
      {
        page: page === 500 ? 0 : page + 1,
      },
      () => {
        this.loadPageContent();
      }
    );
  };
  clickLikeBtn = (id) => {
    const newList = this.state.allMovie;
    newList.map((item) => {
      if (item.id === id) {
        item.isLike = !item.isLike;
      }
    });
    this.setState({
      allMovie: newList,
    });
  };

  clickBlockBtn = (id) => {
    const { allMovie, blockedMovies, pageList } = this.state.allMovie;
    let blockedItem = allMovie.map((item) => {
      if (item.id === id) {
        item.isBlock = !item.isBlock;
        return item;
      }
    });
    this.setState({
      allMovie: allMovie,
      pageList: pageList.filter((item) => item.isBlock === false),
      blockedMovies: [...blockedMovies, blockedItem],
    });
  };
  render() {
    const { page, pageMovie, allMovie, pageList, tempMovies } = this.state;
    console.log("Page", page, pageMovie);
    console.log("allMovie:  ", allMovie);
    return (
      <Fragment>
        <div id="searchContainer">
          <a className="waves-effect waves-light btn">
            <i className="material-icons right"> arrow_upward </i>Title{" "}
          </a>{" "}
          <a className="waves-effect waves-light btn">
            <i className="material-icons right"> arrow_upward </i>Release Date{" "}
          </a>{" "}
          <a className="waves-effect waves-light btn">
            <i className="material-icons right"> arrow_upward </i>Vote Count{" "}
          </a>{" "}
          <a className="waves-effect waves-light btn">
            <i className="material-icons right"> arrow_upward </i>Vote Average{" "}
          </a>{" "}
        </div>
        <hr />
        <div id="pageBar">
          <button onClick={this.goPre}> &lt; </button>{" "}
          <p> Page {" " + page + "/500"} </p>{" "}
          <button onClick={this.goNext}> &gt; </button>{" "}
        </div>
        <hr />
        <div id="movieList">
          {" "}
          {pageMovie.map((movie) => (
            <MovieItem
              key={movie.id}
              movie={movie}
              clickBlockBtn={this.clickBlockBtn}
              clickLikeBtn={this.clickLikeBtn}
            />
          ))}{" "}
        </div>{" "}
      </Fragment>
    );
  }
}
