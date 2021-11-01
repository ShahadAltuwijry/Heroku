import React from "react";
import "./style.css";

export default function Profile() {
  return (
    <div className="main">
      <div className="pImg">
        <img
          className="pfp"
          src="https://cdn3.iconfinder.com/data/icons/social-messaging-productivity-6/128/profile-female-circle2-1024.png"
        />
      </div>
      {/*make the css for img and h2 & h3 ,img size & headings colors and text center + icons size and center */}
      <h2 className="name">Shahad Altuwijry</h2>
      <h3 className="job">Database Developer/Manager</h3>
      <hr />
      <div className="cont">
        <img
          className="icon"
          src="https://img.icons8.com/material-sharp/24/000000/worldwide-location.png"
        />
        <p className="location">Saudi Arabia, Al-qassim, Buraidah</p>
      </div>
      <div className="cont">
        <img
          className="icon"
          src="https://img.icons8.com/material-sharp/24/000000/email.png"
        />
        <p className="email">Shahadaltuwijry@gmail.com</p>
      </div>
      <hr />
      <div className="socialIcons">
        <a href="https://twitter.com/Shahadaltuwijry">
          <img
            className="icon"
            src="https://img.icons8.com/ios-glyphs/30/000000/twitter--v1.png"
          />
        </a>
        <a href="https://github.com/ShahadAltuwijry">
          <img
            className="icon"
            src="https://img.icons8.com/material-outlined/24/000000/github.png"
          />
        </a>
      </div>
    </div>
  );
}
