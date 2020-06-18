import React from "react";
import "./App.css";
import MovieList from "./components/MovieList.jsx";
import HomePage from "./components/HomePage";
import LikeList from "./components/LikeList";
import BlockList from "./components/BlockList";

function App() {
  return (
    <div className="App">
      <MovieList />
      <HomePage />
      <LikeList />
      <BlockList />
    </div>
  );
}

export default App;
