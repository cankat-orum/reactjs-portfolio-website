import React from "react";
import Header from "./Header";
import AboutMe from "./AboutMe";
import Projects from "./Projects";
import "./App.css";

function App() {
  return (
    <div className="App">
      <AboutMe />
      <Projects />
      <footer></footer>
    </div>
  );
}

export default App;
