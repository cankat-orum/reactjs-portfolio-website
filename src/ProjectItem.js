import React from "react";
import ItemImg from "./img/index-bg.jpg";
import "./ProjectItem.css";

function ProjectItem({
  title,
  desc,
  itemSrc,
  techSrc01,
  techSrc02,
  techSrc03,
  linkSrc01,
  linkSrc02,
  linkSrc03,
  linkHref01,
  linkHref02,
  linkHref03,
}) {
  return (
    <div className="ProjectItem">
      <img className="thumbnail" src={itemSrc}></img>
      <div className="project-info">
        <div className="techs-used">
          <img
            className="tech-img"
            src={techSrc01}
            style={techSrc01 == null ? srcStyle : {}}
          ></img>
          <img
            className="tech-img"
            src={techSrc02}
            style={techSrc02 == null ? srcStyle : {}}
          ></img>
          <img
            className="tech-img"
            src={techSrc03}
            style={techSrc03 == null ? srcStyle : {}}
          ></img>
        </div>
        <h5 className="project-title">{title}</h5>
        <p className="project-desc">{desc}</p>
        <div className="links">
          <a href={linkHref01} target="_blank">
            <img
              className="link-img"
              src={linkSrc01}
              style={linkSrc01 == null ? srcStyle : {}}
            ></img>
          </a>
          <a href={linkHref02} target="_blank">
            <img
              className="link-img"
              src={linkSrc02}
              style={linkSrc02 == null ? srcStyle : {}}
            ></img>
          </a>
          <a href={linkHref03} target="_blank">
            <img
              className="link-img"
              src={linkSrc03}
              style={linkSrc03 == null ? srcStyle : {}}
            ></img>
          </a>
        </div>
      </div>
    </div>
  );
}

let srcStyle = {
  display: "none",
};

export default ProjectItem;
