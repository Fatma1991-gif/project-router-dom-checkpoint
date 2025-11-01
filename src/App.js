import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MovieList from "./MovieList";
import MovieDescription from "./MovieDescription";
import "./App.css"
function App() {
  return (
    <div className="App" >
    <Router>
      <Routes>
        <Route path="/" element={<MovieList />} />
        <Route path="/movie/:id" element={<MovieDescription />} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;

