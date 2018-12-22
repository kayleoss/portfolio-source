import React from 'react';
import Site from './Site';

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
                <div className="row">
                    <Site 
                        href="https://github.com/kayleoss/tpsFrontEnd" 
                        title="ResoTPS Front End" 
                        description="ResoTPS is a mobile app built with react native where users can get real time solutions to their problems and enter live chat sessions with members of authority." 
                        mouseOverAction={this.handleHover}
                        mouseLeaveAction={this.handleLeave}
                        imgSrc="hackTPS.png"
                        imgAlt="HackTPS mobile app preview, displaying various screens of the app, including online chat and categories." 
                    />
                    <Site 
                        href="https://github.com/kayleoss/post-it" 
                        title="Post-It" 
                        description="Post-It is a full-stack mobile app for bug reporting &amp; management. It uses a react native front end with a node &amp; express backend, with mongoDB as the database." 
                        mouseOverAction={this.handleHover}
                        mouseLeaveAction={this.handleLeave}
                        imgSrc="post-it.jpg"
                        imgAlt="post-it mobile app image preview." 
                    />
                </div>
            </div>
        )
    }
} 

export default Mobile;