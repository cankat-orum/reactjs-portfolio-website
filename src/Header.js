import React from "react";
import { FaGithubSquare, FaLinkedin, FaTwitterSquare } from "react-icons/fa";
import "./Header.css";

function Header() {
  return (
    <div className="Header">
      <header>
        <nav>
          <div className="nav-left">
            <ul>
              <li>
                <p>ABOUT ME</p>
              </li>
              <li>
                <p>MY PROJECTS</p>
              </li>
              <li>
                <p>CONTACT ME</p>
              </li>
            </ul>
          </div>
          <div className="nav-right">
            <ul>
              <li>
                <a className="react-icons" href="/">
                  <FaGithubSquare />
                </a>
              </li>
              <li>
                <a className="react-icons" href="/">
                  <FaLinkedin />
                </a>
              </li>
              <li>
                <a className="react-icons" href="/">
                  <FaTwitterSquare />
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    </div>
  );
}

export default Header;
