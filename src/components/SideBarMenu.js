import React, { Component } from "react";
import "./SideBarMenu.css";

class Menu extends Component {
  render() {
    var visibility = "hidden";

    if (this.props.menuVisibility) {
      visibility = "visible";
    }

    return (
      <div id="flyoutMenu" onClick={this.props.handleMouseDown} className={visibility}>
        <h5 className="menuItem">
          <a href="#">Home</a>
        </h5>
        <h5 className="menuItem">
          <a href="#">Movies</a>
        </h5>
        <h5 className="menuItem">
          <a href="#">Liked Movies</a>
        </h5>
        <h5 className="menuItem">
          <a href="#">Blocked Movies</a>
        </h5>
      </div>
    );
  }
}

export default Menu;
