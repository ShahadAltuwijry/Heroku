import React from "react";
import "./style.css";

export default function Skills() {
  return (
    <div className="container">
      <div className="mainCont">
        <img
          className="mainIcon"
          src="https://img.icons8.com/ios-glyphs/30/000000/source-code.png"
        />
        <h2>Skills</h2>
      </div>
      <ul className="skillList">
        <li>SQL</li>
        <li>java</li>
        <li>HTML</li>
        <li>CSS</li>
        <li>jQuery</li>
        <li>JS</li>
      </ul>
      <hr />
    </div>
  );
}
