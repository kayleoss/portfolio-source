import React from 'react';
import Websites from './Websites';
import Webapps from  './Webapps';
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
        case 'Web Apps':
          projects = <Webapps />;
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
  
      const items = ['Websites', 'Web Apps', 'Web Games', 'Mobile Apps'];
      return (
        <section id="projects" className="p-b">
          <div className="text-center">
            <h1 className="title-h1 wow fadeIn p-t">Recent Projects</h1>
            <p className="description-p">*Please allow 10 seconds for web applications to wake from sleep</p>
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