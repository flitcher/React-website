import React, { Component } from "react";
export default class ContactUs extends Component {
  render() {
    let contactData = this.props.contactData;
    return (
      <React.Fragment>
        <section id="contact">
          <div className="row section-head">
            <div className="two columns header-col">
              <h1>
                <span>Get In Touch.</span>
              </h1>
            </div>
            <div className="ten columns">
              <p className="lead">
                <h2>(Work in Progress)</h2>
                Feel free to send me a message for any questions or inquiries
                and I will get back to you at my earliest convenience!
              </p>
            </div>
          </div>
          <div className="row">
            <div className="eight columns">
              {/* form */}
              <form action method="post" id="contactForm" name="contactForm">
                <fieldset>
                  <div>
                    <label htmlFor="contactName">
                      Name <span className="required">*</span>
                    </label>
                    <input
                      type="text"
                      // defaultValue
                      size={35}
                      id="contactName"
                      name="contactName"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="contactEmail">
                      Email <span className="required">*</span>
                    </label>
                    <input
                      type="text"
                      size={35}
                      id="contactEmail"
                      name="contactEmail"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="contactSubject">Subject</label>
                    <input
                      type="text"
                      size={35}
                      id="contactSubject"
                      name="contactSubject"
                    />
                  </div>
                  <div>
                    <label htmlFor="contactMessage">
                      Message <span className="required">*</span>
                    </label>
                    <textarea
                      cols={50}
                      rows={15}
                      id="contactMessage"
                      name="contactMessage"
                      required
                    />
                  </div>
                  <div>
                    <button className="submit" type="submit" form="contactForm">
                      Submit
                    </button>
                    <span id="image-loader">
                      <img alt="" src="images/loader.gif" />
                    </span>
                  </div>
                </fieldset>
              </form>{" "}
              {/* Form End */}
              {/* contact-warning */}
              <div id="message-warning">
                {" "}
                Please try again later. In the meantime you can contact me at
                <a href="https://www.linkedin.com/in/kawaisim/" />{" "}
              </div>
              {/* contact-success */}
              <div id="message-success">
                <i className="fa fa-check" />
                Your message was sent, thank you!
                <br />
              </div>
            </div>
          </div>
        </section>{" "}
      </React.Fragment>
    );
  }
}
