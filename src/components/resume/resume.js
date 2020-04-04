import React, { Component } from "react";
export default class Header extends Component {
  render() {
    return (
      <React.Fragment>
        <section id="resume">
          <div className="row work">
            <div className="three columns header-col">
              <h1>
                <span>Experience</span>
              </h1>
            </div>
            <div className="nine columns main-col">
              <div className="row item">
                <div className="twelve columns">
                  <h3>CRADLE VSA </h3>
                  <p className="info">
                    Backend API Developer <span>•</span>{" "}
                    <em className="date">September 2019 - Present</em>
                  </p>
                  <p>
                    <ul style={{ listStyleType: "circle", marginLeft: "40px" }}>
                      <li>
                        Developed back-end REST API to expose endpoints consumed
                        by both web and android application using Flask
                        framework
                      </li>
                      <li>
                        Resolved over 50 bugs tickets and implemented over 10
                        features in the span of 8 months
                      </li>
                      <li>
                        Designed testing workflows to ensure that incoming
                        changes did not break existing functionalities
                      </li>
                      <li>
                        Managed deployment of code onto testing and production
                        servers
                      </li>
                    </ul>
                  </p>
                </div>
              </div>{" "}
              {/* item end */}
              <div className="row item">
                <div className="twelve columns">
                  <h3>Dometic</h3>
                  <p className="info">
                    Technical Support Specialist <span>•</span>{" "}
                    <em className="date">January 2019 - April 2019</em>
                  </p>
                  <p>
                    <ul style={{ listStyleType: "circle", marginLeft: "40px" }}>
                      <li>
                        Generated machine specification report using Belerc for
                        inventory{" "}
                      </li>
                      <li>
                        Compiled into Excel spreadsheet by scrapping HTML files
                        from report using Python and Regular Expression{" "}
                      </li>
                      <li>
                        Mapped and maintained location of all physical machines
                        in Visio
                      </li>
                      <li>
                        Accessed TeamViewer to provide internal and external end
                        user support
                      </li>
                      <li>
                        Built and deployed laptops and PCs that met company
                        standards
                      </li>
                    </ul>
                  </p>
                </div>
              </div>{" "}
              {/* item end */}
            </div>{" "}
            {/* main-col end */}
          </div>{" "}
          {/* End Work */}
          <div className="row education">
            <div className="three columns header-col">
              <h1>
                <span>Education</span>
              </h1>
            </div>
            <div className="nine columns main-col">
              <div className="row item">
                <div className="twelve columns">
                  <h3>Simon Fraser University</h3>
                  <p className="info">
                    Software System Major (Bachelor of Applied Science)
                    <span>•</span>{" "}
                    <em className="date">
                      September 2016 - Present (Expected graduation: April 2020)
                    </em>
                  </p>
                  <p>
                    This program provides the skills, knowledge and thought
                    processes necessary for professional software production,
                    while also providing a broad background of various computing
                    systems that graduates encounter in their careers.
                  </p>
                </div>
              </div>{" "}
              {/* item end */}
              <div className="row item">
                <div className="twelve columns">
                  <h3>Richmond High Secondary</h3>
                  <p className="info">
                    International Baccalaureate Diploma <span>•</span>{" "}
                    <em className="date">September 2011 - June 2016</em>
                  </p>
                  <p>
                    A two-year programme that helped me develop strong academic,
                    social and emotional characteristics. It also provided me a
                    smooth transition into university and perform well
                    academically.
                  </p>
                </div>
              </div>{" "}
              {/* item end */}
            </div>{" "}
            {/* main-col end */}
          </div>{" "}
          {/* End Education */}
          {/* Work
      ----------------------------------------------- */}
          <div className="row work">
            <div className="three columns header-col">
              <h1>
                <span>Extracurricular</span>
              </h1>
            </div>
            <div className="nine columns main-col">
              <div className="row item">
                <div className="twelve columns">
                  <h3>Richmond Public Library</h3>
                  <p className="info">
                    Computer Science Class Intructor <span>•</span>{" "}
                    <em className="date">March 2018 - May 2019</em>
                  </p>
                  <p>
                    <p>
                      <ul
                        style={{ listStyleType: "circle", marginLeft: "40px" }}
                      >
                        <li>
                          Planned and instructed a 6 week computer science crash
                          crouse with over 30 students
                        </li>
                        <li>
                          Created assignments for the whole class and answered
                          question in person and online through Slack
                        </li>
                      </ul>
                    </p>
                  </p>
                </div>
              </div>{" "}
              {/* item end */}
              <div className="row item">
                <div className="twelve columns">
                  <h3>University of British Columbia (UBC)</h3>
                  <p className="info">
                    NwHacks 2018, 2019, 2020<span>•</span>{" "}
                    <em className="date">January</em>
                  </p>
                  <p>
                    A 24 hour hackathon where teams of 2-5 people collaborate on
                    an application and compete against each other for prizes.
                  </p>
                </div>
              </div>{" "}
              {/* item end */}
            </div>{" "}
            {/* main-col end */}
          </div>{" "}
          {/* End Work */}
          {/* Skills
      ----------------------------------------------- */}
          <div className="row skill">
            <div className="three columns header-col">
              <h1>
                <span>Skills</span>
              </h1>
            </div>
            <div className="nine columns main-col">
              <p>
                I am well versed in backend API development and actively
                contributing to projects everyday to broaden my knowledge on
                various technologies as well as getting my feet wet with
                frontend frameworks like React.
              </p>
              <div className="bars">
                <ul className="skills">
                  <li>
                    <span className="bar-expand python" />
                    <em>Python</em>
                  </li>
                  <li>
                    <span className="bar-expand java" />
                    <em>Java</em>
                  </li>
                  <li>
                    <span className="bar-expand java" />
                    <em>SQL</em>
                  </li>
                  <li>
                    <span className="bar-expand html5" />
                    <em>HTML5</em>
                  </li>
                  <li>
                    <span className="bar-expand react" />
                    <em>React</em>
                  </li>
                  <li>
                    <span className="bar-expand jquery" />
                    <em>Javascript</em>
                  </li>
                  <li>
                    <span className="bar-expand html5" />
                    <em>LaTeX</em>
                  </li>
                  <li>
                    <span className="bar-expand html5" />
                    <em>Markdown</em>
                  </li>
                </ul>
              </div>
              {/* end skill-bars */}
            </div>{" "}
            {/* main-col end */}
          </div>{" "}
          {/* End skills */}
        </section>
      </React.Fragment>
    );
  }
}
