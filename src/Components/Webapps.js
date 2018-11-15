import React from 'react';


class Webapps extends React.Component {

  handleHover = (e) => {
    e.target.style.opacity = 1;
  }
  handleLeave = (e) => {
    e.target.style.opacity = 0;
  }

  render() {
    return (
      <div className="container">
        <div className="row p-t">
          <div className="col-sm-6">
            <a target="_blank"  href="http://recently-followed.s3-website-us-east-1.amazonaws.com/" rel="noopener noreferrer">
              <div className="overlay" onMouseOver={this.handleHover} onMouseLeave={this.handleLeave}>
                <h2 className="overlay-h1">Recently-Followed</h2>
                <p>Find out who your bae just followed on Instagram <span role="img" aria-label="winky face">😜</span> This app scrapes instagram data from online sources and stores it into MongoDB database where it calculates new people followed. Front-end: HTML5, CSS3, JS, jQuery, AJAX. Back-end: Node, Express.</p>
              </div>
              <img className="project-img" src={require('../assets/recentlyfollowed.png')} alt="Katie Liu Worked On A Project For Neshama Therapy" />
            </a>
          </div>
          <div className="col-sm-6">
            <a target="_blank" rel="noopener noreferrer">
              <div className="overlay" onMouseOver={this.handleHover} onMouseLeave={this.handleLeave}>
                <h2 className="overlay-h1">Neshama Receipt Generator</h2>
                <p>I built a web app for Neshama Therapy to generate word document RMT and acupuncture receipts and automatically email them to patients and the therapist (NodeJS, Express, API). If you would like to demo this private app, please email me directly.</p>
              </div>
              <img className="project-img" src={require('../assets/receipt.png')} alt="Katie Liu Worked On A Project For Neshama Therapy" />
            </a>
          </div>
        </div>
        <div className="row p-t">
          <div className="col-sm-6">
            <a href="https://peoplemanagerapp.herokuapp.com/" target="_blank" rel="noopener noreferrer">
              <div className="overlay" onMouseOver={this.handleHover} onMouseLeave={this.handleLeave}>
                <h2 className="overlay-h1">PeopleManager</h2>
                <p>People Manager is a website application where teams can visually analyze the demographics of their team members. Current demographics include gender and age, more to come! I built this web app with ReactJS, NodeJS, Express, and MongoDB.</p>
              </div>
              <img className="project-img" src={require('../assets/contact.png')} alt="PeopleManager lets you manage your people efficiently." />
            </a>
          </div>
          <div className="col-sm-6">
            <a target="_blank" rel="noopener noreferrer" href="https://limitless-crag-76563.herokuapp.com/">
              <div className="overlay" onMouseOver={this.handleHover} onMouseLeave={this.handleLeave}>
                <h2 className="overlay-h1">Dradry</h2>
                <p>Dradry is an anonymous discussion forum. Users can log in and create posts, comment on posts, see their profile and the newest posts, and browse posts by category. I built Dradry with NodeJS, Express, MongoDB, and EJS.</p>
              </div>
              <img className="project-img" src={require('../assets/dradry.png')} alt="Dradry is a deep discussion forum." />
            </a>
          </div>
        </div>
        <div className="row p-t">
          <div className="col-sm-6">
            <a href="https://facialdata.herokuapp.com/" target="_blank" rel="noopener noreferrer">
              <div className="overlay" onMouseOver={this.handleHover} onMouseLeave={this.handleLeave}>
                <h2 className="overlay-h1">Facial Analysis App</h2>
                <p>Upload an image containing a human's face and extract facial data like age, gender, and ethnicity! Using Node, Express, and the Face++ API. Frontend with EJS, JS, CSS & Materialize framework</p>
              </div>
              <img className="project-img" src={require('../assets/facial.png')} alt="Facial Analysis" />
            </a>
          </div>
          <div className="col-sm-6">
            <a target="_blank" rel="noopener noreferrer" href="https://evening-eyrie-92751.herokuapp.com/">
              <div className="overlay" onMouseOver={this.handleHover} onMouseLeave={this.handleLeave}>
                <h2 className="overlay-h1">PartyLocal</h2>
                <p>PartyLocal is an application for users to find parties around the GTA. Technologies used include NodeJS, MongoDB, and Express with an integrated Google Maps API.</p>
              </div>
              <img className="project-img" src={require('../assets/party.png')} alt="PartyLocal" />
            </a>
          </div>
        </div>
      </div>
    )
  }
}

export default Webapps;
