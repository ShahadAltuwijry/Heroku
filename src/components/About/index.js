import React from "react";
import "./style.css";
export default function About() {
  return (
    <div className="main">
      <div className="mainCont">
        <img
          className="mainIcon"
          src="https://img.icons8.com/ios-glyphs/30/000000/gender-neutral-user.png"
        />

        <h2 className="about">About</h2>
      </div>
      {/*fix the css */}
      <div className="mainContent">
        <p>
          Over the past 20 years I have continuously challenged myself with new
          languages, frameworks and methodologies. My core languages have always
          been html, css & javascript but I have also worked as a full stack php
          developer building both bespoke CMS solutions and small business
          applications. My current role at IAG is Senior Front End Developer (or
          Senior Software Engineer as IAG prefer to label us) and have been
          developing with React and Redux for the past 4 years.
        </p>
        <hr />
      </div>
    </div>
  );
}
