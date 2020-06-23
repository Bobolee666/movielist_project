import React, { Component, Fragment } from "react";
import "./Lists.css";
import MovieItem from "./MovieItem";

export default class MovieList extends Component {
  render() {
    console.log(this.props);
    const { page, pageMovie, allMovie, likedMovies, blockedMovies, sortBy, order } = this.props;
    console.log("Page", page, pageMovie);
    console.log("allMovie:  ", allMovie);
    console.log("Liked:  ", likedMovies);
    console.log("blocked:  ", blockedMovies);
    return (
      <Fragment className="container">
        <div className="searchContainer">
          <a className="waves-effect waves-light btn">
            Title <i className="material-icons right"> arrow_downward </i>
          </a>
          <a className="waves-effect waves-light btn">
            Release Date <i className="material-icons right"> arrow_downward </i>
          </a>
          <a className="waves-effect waves-light btn">
            Vote Count <i className="material-icons right"> arrow_downward </i>
          </a>
          <a className="waves-effect waves-light btn">
            Vote Average <i className="material-icons right"> arrow_downward </i>
          </a>
        </div>
        <br />
        <hr />
        <div id="pageBar">
          <a class="btn-floating btn-large waves-effect waves-light " onClick={this.props.goPre}>
            &lt;
          </a>
          <p> Page {" " + page + "/500"} </p>
          <a class="btn-floating btn-large waves-effect waves-light " onClick={this.props.goNext}>
            &gt;
          </a>
        </div>
        <hr />
        <div className="movieList">
          {pageMovie.map((movie) => (
            <MovieItem
              key={movie.id}
              movie={movie}
              clickBlockBtn={this.props.clickBlockBtn}
              clickLikeBtn={this.props.clickLikeBtn}
            />
          ))}
        </div>
      </Fragment>
    );
  }
}
