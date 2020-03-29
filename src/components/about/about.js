import React, { Component } from "react";
export default class About extends Component {
  render() {
    let contactData = this.props.contactData;
    return (
      <React.Fragment>
        <section id="about">
          <div className="row">
            <div className="three columns">
              <img className="profile-pic" src="images/profilepic.jpg" alt="" />
            </div>
            <div className="nine columns main-col">
              <h2>About Me</h2>
              <p>{contactData.description}</p>
              <div className="row">
                <div className="columns contact-details">
                  <h2>Contact Details</h2>
                  <p className="address">
                    <span>{contactData.name}</span>
                    <br />
                    <span>
                      {contactData.location}
                      <br />
                      {contactData.location2}
                    </span>
                    <br />
                    <span>{contactData.number}</span>
                    <br />
                    <span>{contactData.email}</span>
                  </p>
                </div>
                <div className="columns download">
                  <p>
                    <a href="#" className="button">
                      <i className="fa fa-download" />
                      Download Resume
                    </a>
                  </p>
                </div>
              </div>{" "}
              {/* end row */}
            </div>{" "}
            {/* end .main-col */}
          </div>
        </section>{" "}
      </React.Fragment>
    );
  }
}
