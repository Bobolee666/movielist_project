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
            <Link to="/" onClick={this.props.handleHomeClick}>
              Home Page
            </Link>
          </div>
          <div className="menuItem">
            <Link to="/movieslist" onClick={this.props.handleHomeClick}>
              Movies
            </Link>
          </div>
          <div className="menuItem">
            <Link to="/likedlist" onClick={this.props.handleHomeClick}>
              Liked Movies
            </Link>
          </div>
          <div className="menuItem">
            <Link to="/blockedlist" onClick={this.props.handleHomeClick}>
              Blocked Movies
            </Link>
          </div>
        </div>
      </>
    );
  }
}

export default Menu;
