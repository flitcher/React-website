import React, { Component } from "react";
export default class About extends Component {
  render() {
    let contactData = this.props.contactData;
    return (
      <React.Fragment>
        <section id="about">
          <div className="row">
            <div className="three columns">
              <img className="profile-pic" src="images/profilepic.png" alt="" />
            </div>
            <div className="nine columns main-col">
              <h2>About Me</h2>
              <p>{contactData.description}</p>
              <div className="row">
                <div className="columns contact-details">
                  <h2>Contact Email</h2>
                  <p>kawaisim@hotmail.com</p>
                </div>
                <div className="columns download">
                  <p>
                    <a
                      href="https://www.dropbox.com/s/pqssoenpgsh6eb6/resume.pdf?dl=0"
                      className="button"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fa fa-download" />
                      Download Resume
                    </a>
                  </p>
                </div>
              </div>
              {/* end row */}
            </div>{" "}
            {/* end .main-col */}
          </div>
        </section>{" "}
      </React.Fragment>
    );
  }
}
