import React from "react";
import "./App.css";
import MovieList from "./components/MovieList.jsx";
import HomePage from "./components/HomePage";

function App() {
  return (
    <div className="App">
      <MovieList /> {/* <HomePage /> */}{" "}
    </div>
  );
}

export default App;
