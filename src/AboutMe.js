import React from "react";
import Header from "./Header";
import { StickyContainer, Sticky } from "react-sticky";
import "./AboutMe.css";

function AboutMe() {
  return (
    <div className="AboutMe">
      <StickyContainer>
        <Sticky>
          {({ style }) => (
            <header style={{ ...style }}>
              <Header />
            </header>
          )}
        </Sticky>
      </StickyContainer>
    </div>
  );
}

export default AboutMe;
