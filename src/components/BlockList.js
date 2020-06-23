import React, { Component } from "react";
import BlockedItem from "./BlockedItem";
import "./Lists.css";

export default class BlockList extends Component {
  render() {
    const { blockedMovies, clickBlockBtn, clickLikeBtn } = this.props;
    return (
      <div className="blockedMovie">
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
