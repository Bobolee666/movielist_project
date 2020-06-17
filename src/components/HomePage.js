import React, { Component } from "react";
import "./HomePage.css";
import SideBarMenu from "./SideBarMenu";

export default class Home extends Component {
  state = {
    visible: false,
  };

  toggleMenu() {
    this.setState({
      visible: !this.state.visible,
    });
  }
  handleHomeClick(e) {
    e.preventDefault();
    this.toggleMenu();
    console.log("clicked");
  }

  render() {
    return (
      <div className="container">
        <div className="card-panel light-blue lighten-3 center">
          <h1 id="title" onClick={(e) => this.handleHomeClick(e)}>
            Movies List Menu
          </h1>
          <h5> Welcome!this is da awesome home page </h5>
        </div>
        <SideBarMenu onClick={(e) => this.handleHomeClick(e)} menuVisibility={this.state.visible} />
      </div>
    );
  }
}
