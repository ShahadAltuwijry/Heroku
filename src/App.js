// import logo from './logo.svg';
import React from "react";
import "./App.css";
import Profile from "./components/Profile";
import About from "./components/About";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Volunteer from "./components/Volunteer";

function App() {
  return (
    <div className="app">
      <div className="sideProfile">
        <div className="profile">
          <Profile />
        </div>
      </div>

      <div className="mainSection">
        <div className="sections">
          <About />
          <Volunteer />
          <Skills />
          <Education />
        </div>
      </div>
    </div>
  );
}

export default App;
