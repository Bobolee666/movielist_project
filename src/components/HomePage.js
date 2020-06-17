import React, { Component } from "react";
import "./HomePage.css";

export default class Home extends Component {
  handleHomeClick = () => {
    alert("close this shit and fuck off");
  };

  render() {
    return (
      <div className="container">
        <div className="card-panel light-blue lighten-3 center">
          <h1 id="title" onClick={this.handleHomeClick}>
            Movies List Menu{" "}
          </h1>
          <h5> Welcome!this is da awesome home page </h5>{" "}
        </div>{" "}
      </div>
    );
  }
}
