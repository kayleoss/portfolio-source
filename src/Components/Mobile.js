import React from 'react';

class Mobile extends React.Component {

    handleHover = (e) => {
        e.target.style.opacity = 1;
      }
      handleLeave = (e) => {
        e.target.style.opacity = 0;
      }

    render() {
        return(
            <div className="container">
                <div className="row p-t">
                    <div className="col-sm-6">
                        <a target="_blank" rel="noopener noreferrer" href="https://github.com/kayleoss/tpsFrontEnd">
                            <div className="overlay" onMouseOver={this.handleHover} onMouseLeave={this.handleLeave}>
                                <h2 className="overlay-h1">ResoTPS Front End</h2>
                                <p>ResoTPS is a mobile app built with react native where users can get real time solutions to their problems and enter live chat sessions with members of authority.</p>
                            </div>
                            <img className="project-img" src={require('../assets/hackTPS.png')} alt="HackTPS Mobile App"/>
                        </a>
                    </div>
                    <div className="col-sm-6">
                        <a target="_blank" rel="noopener noreferrer" href="https://github.com/kayleoss/post-it">
                            <div className="overlay" onMouseOver={this.handleHover} onMouseLeave={this.handleLeave}>
                                <h2 className="overlay-h1">Post-It </h2>
                                <p>Post-It is a full-stack mobile app for bug reporting &amp; management. It uses a react native front end with a node &amp; express backend, with mongoDB as the database.</p>
                            </div>
                            <img className="project-img" src={require('../assets/post-it.jpg')} alt="post-it mobile app"/>
                        </a>
                    </div>
                </div>
            </div>
        )
    }
} 

export default Mobile;