import React, { Component } from "react";

export default class LikeList extends Component {
  render() {
    const { likedMovies } = this.props;
    return (
      <div id="likeMovie">
        {/* {likedMovies.map((movie) => (
              <
                key={movie.id}
                movie={movie}
                clickBlockBtn={this.props.clickBlockBtn}
                clickLikeBtn={this.props.clickLikeBtn}
              /> */}
      </div>
    );
  }
}
