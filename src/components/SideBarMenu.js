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
      <div id="flyoutMenu" className={visibility}>
        <div onClick={this.props.handleHomeClick}>
          <i className="small material-icons cyan-text">clear</i>
        </div>
        <div className="menuContent">
          <a className="menuItem" onClick={this.props.handleHomeClick}>
            <Link to="/">Home Page</Link>
          </a>
          <a className="menuItem" onClick={this.props.handleHomeClick}>
            <Link to="/movieslist">Movies</Link>
          </a>
          <a className="menuItem" onClick={this.props.handleHomeClick}>
            <Link to="/likedlist">Liked Movies</Link>
          </a>
          <a className="menuItem" onClick={this.props.handleHomeClick}>
            <Link to="/blockedlist">Blocked Movies</Link>
          </a>
        </div>
      </div>
    );
  }
}

export default Menu;
