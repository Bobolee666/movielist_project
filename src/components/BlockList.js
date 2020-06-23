import React, { Component } from "react";
import BlockedItem from "./BlockedItem";

export default class BlockList extends Component {
  render() {
    const { blockedMovies, clickBlockBtn, clickLikeBtn } = this.props;
    return (
      <div id="likeMovie">
        {blockedMovies.map((movie) => (
          <BlockedItem
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
