import React from "react";
import PItem from "./ProjectItem";
import "./Projects.css";
import styled from "styled-components";

export const Grid = styled.div``;

export const Row = styled.div`
  display: flex;
`;

export const Col = styled.div`
  flex: ${(props) => props.size};
`;

function Projects() {
  return (
    <div className="Projects">
      <h2 className="projects-section-title">My Projects</h2>
      <Grid>
        <Row>
          <Col size={1}>
            <PItem title="Bildir" desc="Please kill me" />
          </Col>
          <Col size={1}>
            <PItem title="Bildir" desc="Please kill me" />
          </Col>
        </Row>
        <Row>
          <Col size={1}>
            <PItem title="Bildir" desc="Please kill me" />
          </Col>
          <Col size={1}>
            <PItem title="Bildir" desc="Please kill me" />
          </Col>
        </Row>
      </Grid>
    </div>
  );
}

export default Projects;
