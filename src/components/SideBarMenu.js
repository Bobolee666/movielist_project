import React, { Component } from "react";
import "./SideBarMenu.css";
import { Link } from "react-router-dom";
// import HomePage from "./HomePage";
// import MovieList from "./MovieList";
// import LikeList from "./LikeList";
// import BlockList from "./BlockList";

class Menu extends Component {
  render() {
    var visibility = "hidden";

    if (this.props.visible) {
      visibility = "visible";
    }
    return (
      <>
        <div id="flyoutMenu" className={visibility}>
          <div onClick={this.props.handleHomeClick}>
            <i className="small material-icons cyan-text">clear</i>
          </div>
          <div className="menuItem">
            <Link to="/">Home Page</Link>
          </div>
          <div className="menuItem">
            <Link to="/movieslist">Movies</Link>
          </div>
          <div className="menuItem">
            <Link to="/likedlist">Liked Movies</Link>
          </div>
          <div className="menuItem">
            <Link to="/blockedlist">Blocked Movies</Link>
          </div>
        </div>
      </>
    );
  }
}

export default Menu;
