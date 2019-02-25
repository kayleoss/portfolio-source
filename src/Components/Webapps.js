import React from 'react';
import Site from './Site';

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
        <div className="row">
          <Site
            href="http://recently-followed.s3-website-us-east-1.amazonaws.com/" 
            title="Recently-Followed" 
            description="Find out who your bae just followed on Instagram <span role='img' aria-label='winky face'>😜</span> This app checks their instagram profile, compares it with who they were following before and lets you know all the new people they followed!" 
            mouseOverAction={this.handleHover}
            mouseLeaveAction={this.handleLeave}
            imgSrc="recentlyfollowed.png"
            imgAlt="Katie Liu Worked On A Project For Neshama Therapy" 
          />
          <Site
            href="javascript:;" 
            warningText="Private - Unable To Demo"
            title="Neshama Receipt Generator" 
            description="KDL Group built a web app for Neshama Therapy to generate word document RMT and acupuncture receipts and automatically email them to patients and the therapist. If you would like to demo this private app, please email KDL Group directly." 
            mouseOverAction={this.handleHover}
            mouseLeaveAction={this.handleLeave}
            imgSrc="receipt.png"
            imgAlt="Katie Liu Worked On A Project For Neshama Therapy" 
          />
          {/* <Site
            href="https://peoplemanagerapp.herokuapp.com/" 
            title="PeopleManager" 
            description="People Manager is a website application where teams can visually analyze the demographics of their team members. Current demographics include gender and age, more to come! KDL Group built this web app with ReactJS, NodeJS, Express, and MongoDB." 
            mouseOverAction={this.handleHover}
            mouseLeaveAction={this.handleLeave}
            imgSrc="contact.png"
            imgAlt="PeopleManager lets you manage your people efficiently." 
          /> */}
          <Site
            href="https://facialdata.herokuapp.com/" 
            title="Facial Analysis App" 
            description="Upload an image containing a human's face and analyze facial data like age, gender, emotions and ethnicity!" 
            mouseOverAction={this.handleHover}
            mouseLeaveAction={this.handleLeave}
            imgSrc="facial.png"
            imgAlt="Image thumbnail of Facial Analysis App, showing a person's face being analyzed in terms of race, mood, and emotion." 
          />
          <Site
            href="https://limitless-crag-76563.herokuapp.com/" 
            title="Dradry" 
            description="Dradry is an anonymous discussion forum. Users can log in and create posts, comment on posts, see their profile and the newest posts, and browse posts by category." 
            mouseOverAction={this.handleHover}
            mouseLeaveAction={this.handleLeave}
            imgSrc="dradry.png"
            imgAlt="Dradry is a deep discussion forum." 
          />
          {/* <Site
            href="https://evening-eyrie-92751.herokuapp.com/" 
            title="PartyLocal" 
            description="PartyLocal is an application for users to find parties around the GTA. Technologies used include NodeJS, MongoDB, and Express with an integrated Google Maps API." 
            mouseOverAction={this.handleHover}
            mouseLeaveAction={this.handleLeave}
            imgSrc="party.png"
            imgAlt="PartyLocal web app image thumbnail, showing various cards with party location and details info." 
          /> */}
        </div>
      </div>
    )
  }
}

export default Webapps;
