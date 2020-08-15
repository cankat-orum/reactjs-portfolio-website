import React from "react";
import PItem from "./ProjectItem";
import "./Projects.css";

function Projects() {
  return (
    <div className="Projects">
      <h2 className="projects-section-title">My Projects</h2>
      <PItem title="Bildir" desc="Please kill me" />
      <PItem title="budged" desc="I am serious" />
    </div>
  );
}

export default Projects;
