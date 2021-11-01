import React, { useState, useEffect } from "react";

export default function Skills() {
  const [skills, setSkills] = useState([
    "SQL",
    "java",
    "HTML",
    "CSS",
    "jQuery",
    "JS",
  ]);

  useEffect(() => {
    setSkills([...skills]);
  }, []);

  return (
    <div className="container">
      <div className="mainCont">
        <img className="mainIcon" src="https://img.icons8.com/ios-glyphs/30/000000/source-code.png" />
        <h2>Skills</h2>
      </div>
      <ul className="skillList">
        <li>..</li>
        {/* <li>{skills.map((item, i))}</li> */}
      </ul>
      <hr />
    </div>
  );
}
