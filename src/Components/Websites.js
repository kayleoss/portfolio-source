import React from 'react';

class Websites extends React.Component{

    handleHover = (e) => {
      e.target.style.opacity = 1;
    }
    handleLeave = (e) => {
      e.target.style.opacity = 0;
    }

    render(){
        return (
            <div className="container">
              <div className="row p-t">
                <div className="col-sm-6">
                  <a href="http://katieliu.s3-website.ca-central-1.amazonaws.com/" target="_blank" rel="noopener noreferrer">
                    <div className="overlay"onMouseOver={this.handleHover} onMouseLeave={this.handleLeave}>
                      <h2 className="overlay-h1">Jonas's Web</h2>
                      <p>I built a 2-page website template for Jonas's Web with HTML, CSS, LESS, JavaScript, &amp; jQuery. I utliized Codekit to compile &amp; process my LESS and JavaScript files.</p>
                    </div>
                    <img className="project-img" src={require('../assets/jonas.png')} alt="A website template for Jonas's web"/>
                  </a>
                </div>
                <div className="col-sm-6">
                  <a href="https://mavencare.com/sunlife-care" target="_blank" rel="noopener noreferrer">
                    <div className="overlay" onMouseOver={this.handleHover} onMouseLeave={this.handleLeave}>
                      <h2 className="overlay-h1">Mavencare &amp; Sun Life</h2>
                      <p>I built Mavencare's Sun Life and Referral landing pages using HTML, CSS, JavaScript, Handlebars, Node, and implemented AJAX form submission that creates a lead in the company-wide portal.</p>
                    </div>
                    <img className="project-img" src={require('../assets/mavencare-sunlife.png')} alt="Katie Liu Worked On Mavencare's Sunlife Landing Page"/>
                  </a>
                </div>
              </div>
              <div className="row p-t">
                <div className="col-sm-6">
                  <a href="https://mavencare.com/senior-care-massachusetts" target="_blank" rel="noopener noreferrer">
                    <div className="overlay"onMouseOver={this.handleHover} onMouseLeave={this.handleLeave}>
                      <h2 className="overlay-h1">Mavencare Senior Care</h2>
                      <p>Following the product designer's prototypes, I built Mavencare's new Boston, Toronto, and NYC landers using HTML, CSS, JS, Node, and handlebars.</p>
                    </div>
                    <img className="project-img" src={require('../assets/mavencare.png')} alt="Katie Liu Worked On Mavencare's New Landing Pages"/>
                  </a>
                </div>
                <div className="col-sm-6">
                  <a  href="http://paintballnation.ca/" target="_blank" rel="noopener noreferrer">
                    <div className="overlay" onMouseOver={this.handleHover} onMouseLeave={this.handleLeave}>
                      <h2 className="overlay-h1">Paintball Nation</h2>
                      <p>I customized Paintball Nation's existing WordPress theme, fixed dead links, worked on responsiveness, and rearranged/updated content.</p>
                    </div>
                    <img className="project-img" src={require('../assets/pbn.png')} alt="Katie Liu Worked On Paintball Nation's WordPress Theme"/>
                  </a>
                </div>
              </div>
              <div className="row p-t">
                <div className="col-sm-6">
                  <a href="https://katieliu.github.io/index" target="_blank" rel="noopener noreferrer">
                    <div className="overlay" onMouseOver={this.handleHover} onMouseLeave={this.handleLeave}>
                      <h2 className="overlay-h1">NLanding Website Template</h2>
                      <p>I built a 5+ page website template using HTML, CSS, JavaScript and jQuery.</p>
                    </div>
                    <img className="project-img" src={require('../assets/nlanding.png')} alt="Katie Liu Worked On A Web Template for NLanding"/>
                  </a>
                </div>
              </div>
            </div>
        )
    }
}

export default Websites;
