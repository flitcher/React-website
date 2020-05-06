import React, { Component } from "react";
import Chip from "@material-ui/core/Chip";

export default class Header extends Component {
  render() {
    return (
      <React.Fragment>
        <section id="portfolio">
          <div className="row">
            <div className="twelve columns collapsed">
              <h1>Check Out Some of My Works.</h1>
              {/* portfolio-wrapper */}
              <div
                id="portfolio-wrapper"
                className="bgrid-quarters s-bgrid-thirds cf"
              >
                <div className="columns portfolio-item">
                  <div className="item-wrap">
                    <a href="#modal-03" stitle>
                      <img alt="" src="images/portfolio/cradle.png" />
                      <div className="overlay">
                        <div className="portfolio-item-meta">
                          <h5>CRADLE VSA</h5>
                          <p>Medical System</p>
                        </div>
                      </div>
                      <div className="link-icon">
                        <i className="icon-plus" />
                      </div>
                    </a>
                  </div>
                </div>{" "}
                {/* item end */}
                <div className="columns portfolio-item">
                  <div className="item-wrap">
                    <a href="#modal-02" title>
                      <img alt="" src="images/portfolio/website.png" />
                      <div className="overlay">
                        <div className="portfolio-item-meta">
                          <h5>Website portfolio</h5>
                          <p>Webdesign</p>
                        </div>
                      </div>
                      <div className="link-icon">
                        <i className="icon-plus" />
                      </div>
                    </a>
                  </div>
                </div>{" "}
                {/* item end */}
                <div className="columns portfolio-item">
                  <div className="item-wrap">
                    <a href="#modal-01" stitle>
                      <img alt="" src="images/portfolio/library.jpg" />
                      <div className="overlay">
                        <div className="portfolio-item-meta">
                          <h5>CS Foundation</h5>
                          <p>Teaching</p>
                        </div>
                      </div>
                      <div className="link-icon">
                        <i className="icon-plus" />
                      </div>
                    </a>
                  </div>
                </div>{" "}
                {/* item end */}
              </div>{" "}
              {/* portfolio-wrapper end */}
            </div>{" "}
            {/* twelve columns end */}
            {/* Modal Popup
	      --------------------------------------------------------------- */}
            <div id="modal-01" className="popup-modal mfp-hide">
              <img
                className="scale-with-grid"
                src="images/portfolio/cs.png"
                alt=""
              />
              <div className="description-box">
                <h4>CS Foundations</h4>
                <p>
                  A 6 week crash course taught in Richmond Public Library on the
                  fundamentals of data structures and algorithms geared towards
                  high-school students
                </p>
                <span className="categories">
                  <i className="fa fa-tag">Tags</i>
                  <p>
                    <Chip label="Java"></Chip>
                    <Chip label="Teaching"></Chip>
                  </p>
                </span>
              </div>
              <div className="link-box">
                <a href="https://github.com/CSFoundations">Details</a>
                <a className="popup-modal-dismiss">Close</a>
              </div>
            </div>
            {/* modal-01 End */}
            <div id="modal-02" className="popup-modal mfp-hide">
              <img
                className="scale-with-grid"
                src="images/portfolio/modals/m-console.jpg"
                alt=""
              />
              <div className="description-box">
                <h4>Website portfolio</h4>
                <p>
                  A personal webpage that showcases my experience, projects, and
                  information.
                </p>
                <span className="categories">
                  <i className="fa fa-tag" />
                  <p>
                    <Chip label="JavaScript"></Chip>
                    <Chip label="CSS"></Chip>
                    <Chip label="HTML"></Chip>
                  </p>
                </span>
              </div>
              <div className="link-box">
                <a href="https://quintinsim.herokuapp.com/">Details</a>
                <a className="popup-modal-dismiss">Close</a>
              </div>
            </div>
            {/* modal-02 End */}
            <div id="modal-03" className="popup-modal mfp-hide">
              <img
                className="scale-with-grid"
                src="images/portfolio/cradle.png"
                alt="cradle"
              />
              <div className="description-box">
                <h4>CRADLE VSA</h4>
                <p>
                  React front-end web application, android application and
                  Python back-end web server for the Cradle VSA System, a
                  technological health care system to improve maternal care and
                  reduce preventable maternal deaths in Ugandan villages.
                </p>
                <span className="categories">
                  <i className="fa fa-tag" />
                  <p className="">
                    <Chip label="React"></Chip>
                    <Chip label="Python"></Chip>
                    <Chip label="Android"></Chip>
                    <Chip label="MySQL"></Chip>
                  </p>
                </span>
              </div>
              <div className="link-box">
                <a href="http://cradle.eastus.cloudapp.azure.com/">Details</a>
                <a className="popup-modal-dismiss">Close</a>
              </div>
            </div>
            {/* modal-03 End */}
          </div>{" "}
        </section>
      </React.Fragment>
    );
  }
}
