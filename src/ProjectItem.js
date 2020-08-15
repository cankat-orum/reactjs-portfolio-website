import React from "react";
import ItemImg from "./img/index-bg.jpg";
import "./ProjectItem.css";

function ProjectItem() {
  return (
    <div className="ProjectItem">
      <img className="thumbnail" src={ItemImg}></img>
      <div className="project-info">
        <div className="links"></div>
        <h5 className="project-title">Bildir App</h5>
        <p className="project-desc">
          This project is a mobile app built with Flutter
        </p>
        <div className="techs-used"></div>
      </div>
    </div>
  );
}

export default ProjectItem;
