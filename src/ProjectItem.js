import React from "react";
import ItemImg from "./img/index-bg.jpg";
import PlayStore from "./img/playstore.png";
import Github from "./img/github.png";
import "./ProjectItem.css";

function ProjectItem() {
  return (
    <div className="ProjectItem">
      <div className="project-item-img">
        <img className="info-img" src={ItemImg} />
      </div>
      <div className="project-item-info">
        <p></p>
        <p></p>
        <ul className="project-links">
          <li>
            <img className="playstore-icon" src={PlayStore}></img>
          </li>
          <li>
            <img className="github-icon" src={Github}></img>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default ProjectItem;
