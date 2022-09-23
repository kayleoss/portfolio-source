import React from 'react';
import Websites from './Websites';
// import Webapps from  './Webapps';
import Webgames from './Webgames';
import Mobile from './Mobile';

export default class Projects extends React.Component {
    state = {
      section: 'Websites',
    }
    handleClick = (item) => {
      this.setState({section: item})
    }
    render(){
      let projects;
  
      switch(this.state.section) {
        case 'Websites':
          projects = <Websites />;
          break;
        case 'Web Games':
          projects = <Webgames />
          break;
        case 'Mobile Apps':
          projects = <Mobile />
          break;
        default: 
          projects = <Websites />
      }
  
      const items = ['Websites', 'Web Games', 'Mobile Apps'];
      return (
        <section id="projects" className="pb-5">
          <div className="text-center">
            <h1 className="title-h1 wow fadeIn p-t">Development projects</h1>
            <p className="description-p">Source code for projects available on my <a href="https://github.com/kayleoss" target="_blank" rel="noopener noreferrer">github</a></p>
            <div className="project-nav m-s-t">
              {items.map(item => {
                return (
                  <button
                    key={items.indexOf(item)}
                    style={{background: this.state.section === item ? 'lightblue' : '#916BB7'}} 
                    type="button" 
                    className="project-button" 
                    onClick={() => this.handleClick(item)}>
                      {item}
                    </button>
                )
              })}
            </div>
          </div>
          {projects}
        </section>
      )
    }
  }