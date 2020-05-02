import React, { Component } from "react";
import Header from "./components/header/header";
import About from "./components/about/about";
import Footer from "./components/footer/footer";
import Resume from "./components/resume/resume";
import Portfolio from "./components/portfolio/portfolio";
import resumeData from "./resumeData";
import contactData from "./contactData";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header resumeData={resumeData} />
        <About contactData={contactData} />
        <Portfolio />
        <Resume />
        <Footer />
      </div>
    );
  }
}

export default App;
