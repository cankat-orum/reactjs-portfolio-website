import React from "react";
import { FaGithubSquare, FaLinkedin, FaTwitterSquare } from "react-icons/fa";
import "./Header.css";

function Header() {
  return (
    <div className="Header">
      <nav>
        <div className="nav-left">
          <ul className="nav-left-ul">
            <li>
              <p>
                <a href="/">ABOUT ME</a>
              </p>
            </li>
            <li>
              <p>
                <a href="#Projects">MY PROJECTS</a>
              </p>
            </li>
            <li>
              <p>CONTACT ME</p>
            </li>
          </ul>
        </div>
        <div className="nav-right">
          <ul className="nav-right-ul">
            <li>
              <a
                className="react-icons"
                target="_blank"
                href="https://github.com/JohnCut"
              >
                <FaGithubSquare />
              </a>
            </li>
            <li>
              <a
                className="react-icons"
                target="_blank"
                href="https://www.linkedin.com/in/cankat-orum/"
              >
                <FaLinkedin />
              </a>
            </li>
            <li>
              <a
                className="react-icons"
                target="_blank"
                href="https://twitter.com/selftaughtdiary"
              >
                <FaTwitterSquare />
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Header;
