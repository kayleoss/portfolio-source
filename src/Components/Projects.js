import React from 'react';
import Websites from './Websites';
// import Webapps from  './Webapps';
import Webgames from './Webgames';
import Mobile from './Mobile';

export default class Projects extends React.Component {
    render(){
      const items = ['Websites', 'Web Games', 'Mobile Apps'];
      return (
        <section id="projects" className="mt-md-5 pt-5 pt-md-0 pb-5">
          <div className="text-center">
            <h1 className="title-h1 wow fadeIn p-t mt-sm-5">Development projects</h1>
            <p className="description-p">I have worked on a variety of projects, from websites, to web applications and games, to mobile applications.</p>
            {/* <p className="description-p">Source code for projects available on my <a href="https://github.com/kayleoss" target="_blank" rel="noopener noreferrer">github</a></p> */}
          </div>
          <Websites />
        </section>
      )
    }
  }