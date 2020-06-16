import React from "react";
import { Switch, Route, Link } from "react-router-dom";
import HomePage from "./homePage";
import LikedList from "./likedList";
import BlockedList from "./blockedList";
import MovieList from "./movieList";
export default class App extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="side-bar">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/movies">Movie Lists</Link>
            </li>
            <li>
              <Link to="/like">Liked Lists</Link>
            </li>
            <li>
              <Link to="/block">Blocked List</Link>
            </li>
          </ul>
        </div>
        <div className="main-page">
          <Switch>
            <Route path="/movies" component={MovieList} />
            <Route path="/like" component={LikedList} />
            <Route path="/block" component={BlockedList} />
            <Route path="/" component={HomePage} />
          </Switch>
        </div>
      </div>
    );
  }
}
