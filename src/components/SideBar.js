import React from "react";

export default class SideBar extends React.Component {
  render() {
    return (
      <div id="flyoutMenu" onMouseDown={this.props.handleMouseDown} className={visibility}>
        <h2>
          <a href="#">Home</a>
        </h2>
        <h2>
          <a href="#">About</a>
        </h2>
        <h2>
          <a href="#">Contact</a>
        </h2>
        <h2>
          <a href="#">Search</a>
        </h2>
      </div>
    );
  }
}
