import React, { Component } from "react";
import LikedItem from "./LikedItem";

export default class LikeList extends Component {
  render() {
    const { likedMovies, clickBlockBtn, clickLikeBtn } = this.props;
    return (
      <div id="likeMovie">
        {likedMovies.map((movie) => (
          <LikedItem
            key={movie.id}
            movie={movie}
            clickBlockBtn={clickBlockBtn}
            clickLikeBtn={clickLikeBtn}
          />
        ))}
      </div>
    );
  }
}
