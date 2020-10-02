import React from "react";
import PItem from "./ProjectItem";
import "./Projects.css";
import styled from "styled-components";
import itemSrc from "./img/index-bg.jpg";

export const Grid = styled.div``;

export const Row = styled.div`
  display: flex;
`;

export const Col = styled.div`
  flex: ${(props) => props.size};
`;

function Projects() {
  return (
    <div id="Projects">
      <h2 className="projects-section-title">My Projects</h2>
      <Grid>
        <Row>
          <Col size={1}>
            <PItem
              title="Bildir"
              desc="Please kill me"
              itemSrc={itemSrc}
              techSrc01={itemSrc}
              techSrc02={itemSrc}
              linkSrc03={itemSrc}
              linkHref03="https://github.com/JohnCut/budged_app"
            />
          </Col>
          <Col size={1}>
            <PItem title="Bildir" desc="Please kill me" itemSrc={itemSrc} />
          </Col>
        </Row>
        <Row>
          <Col size={1}>
            <PItem title="Bildir" desc="Please kill me" itemSrc={itemSrc} />
          </Col>
          <Col size={1}>
            <PItem title="Bildir" desc="Please kill me" itemSrc={itemSrc} />
          </Col>
        </Row>
      </Grid>
    </div>
  );
}

export default Projects;
