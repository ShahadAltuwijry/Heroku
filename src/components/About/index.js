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
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <hr />
      </div>
    </div>
  );
}
