import React from "react";
import ItemImg from "./img/index-bg.jpg";
import "./ProjectItem.css";

function ProjectItem({ title, desc }) {
  return (
    <div className="ProjectItem">
      <img className="thumbnail" src={ItemImg}></img>
      <div className="project-info">
        <div className="links"></div>
        <h5 className="project-title">{title}</h5>
        <p className="project-desc">{desc}</p>
        <div className="techs-used"></div>
      </div>
    </div>
  );
}

export default ProjectItem;
