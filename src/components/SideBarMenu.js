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
        <h4>
          <a href="#">Home</a>
        </h4>
        <h4>
          <a href="#">About</a>
        </h4>
        <h4>
          <a href="#">Contact</a>
        </h4>
        <h4>
          <a href="#">Search</a>
        </h4>
      </div>
    );
  }
}

export default Menu;
