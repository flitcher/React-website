import React, { Component } from "react";
export default class Header extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <React.Fragment>
        <header id="home">
          <nav id="nav-wrap">
            <a className="mobile-btn" href="#nav-wrap" title="Show navigation">
              Show navigation
            </a>
            <a className="mobile-btn" href="#" title="Hide navigation">
              Hide navigation
            </a>
            <ul id="nav" className="nav">
              <li className="current">
                <a className="smoothscroll" href="#home">
                  Home
                </a>
              </li>
              <li>
                <a className="smoothscroll" href="#about">
                  About
                </a>
              </li>
              <li>
                <a className="smoothscroll" href="#resume">
                  Resume
                </a>
              </li>
              <li>
                <a className="smoothscroll" href="#portfolio">
                  Works
                </a>
              </li>
            </ul>{" "}
            {/* end #nav */}
          </nav>{" "}
          {/* end #nav-wrap */}
          <div className="row banner">
            <div className="banner-text">
              <h1 className="responsive-headline">{resumeData.name}</h1>
              <h3>{resumeData.role}.</h3>
              <hr />
              <ul className="social">
                <li>
                  <a
                    href="https://www.linkedin.com/in/kawaisim/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fa fa-linkedin" />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.instagram.com/kquinn.s/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fa fa-instagram" />
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/flitcher"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fa fa-github" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <p className="scrolldown">
            <a className="smoothscroll" href="#about">
              <i className="icon-down-circle" />
            </a>
          </p>
        </header>
      </React.Fragment>
    );
  }
}
