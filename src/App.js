import React, { Component } from 'react';
import './App.css';
import Websites from './Components/Websites';
import Webapps from  './Components/Webapps';
import Webgames from './Components/Webgames';
import Header from './Components/Header';
import Skills from './Components/Skills';
import SkillsText from './Components/SkillsText';
import Footer from './Components/Footer';
import Mobile from './Components/Mobile';

class App extends Component {
  render() {
    const date = new Date();
    const year = date.getFullYear();
    return (
      <div className="App">
          <Header />
          <Services />
          <Projects />
          <Footer date={year} />
      </div>
    );
  }
}

class Services extends React.Component{ 
  state = {
    toolbox: false
  }
  componentDidMount() {
    if(window.location.href.includes('service-price')) {
      this.setState({toolbox: true})
    }
  }
  handleClick = () => {
    this.setState({toolbox: !this.state.toolbox});
  }
  render(){
    return(
      <section id="what-i-do" className="m-t p-b">
        <h1 className="title-h1 text-center">Technical consulting<br className="show-for-small" /> at its finest</h1>
        {this.state.toolbox ? <div><p className="description-p text-center wow fadeInDown"><a href="#footer">Get a free consultation now!</a></p><SkillsText /></div>: <div><p className="description-p text-center">A variety of services are available (if you don't see what you require, <a href="mailto:katie_acting@live.ca">ask us</a>!):</p><Skills /></div> }
        <div className="text-center mt-3">
          <a href="javascript:;" className="vector-button text-light p-3" style={{border: '1px solid transparent'}} onClick={this.handleClick}>{this.state.toolbox ? "See our services" : "See our prices" }</a>
        </div>
      </section>
    )
  }
}

class Projects extends React.Component {
  state = {
    section: 'websites',
    websites: true,
    webapps: false,
    webgames: false
  }
  handleClickWebsites = () => {
    this.setState({section: 'websites', websites: true, webapps: false, webgames: false, mobile: false});
  }
  handleClickWebapps = () => {
    this.setState({section: 'web apps', webapps: true, websites: false, webgames: false, mobile: false});
  }
  handleClickWebGames = () => {
    this.setState({section: 'games', webgames: true, websites: false, webapps: false, mobile: false});
  }
  handleClickMobile = () => {
    this.setState({section: 'mobile apps', mobile: true, webgames: false, websites: false, webapps: false})
  }
  render(){
    var projects;
    if (this.state.section === 'websites') {
      projects = <Websites />
    } else if (this.state.section === 'web apps') {
      projects = <Webapps />
    } else if (this.state.section === 'games') {
      projects = <Webgames />
    } else if (this.state.section === 'mobile apps') {
      projects = <Mobile />
    }
    return (
      <section id="projects" className="p-b custom-light-bg">
        <div className="text-center">
        <h1 className="title-h1 wow fadeIn p-t">Samples of our work</h1>
        <p className="description-p">*Please allow 10 seconds for web applications to wake from sleep</p>
        <div className="project-nav m-s-t">
          <button style={{background: this.state.websites ? 'lightblue' : '#916BB7'}} type="button" className="project-button" onClick={this.handleClickWebsites}>Websites</button>
          <button style={{background: this.state.webapps ? 'lightblue' : '#916BB7'}} type="button" className="project-button" onClick={this.handleClickWebapps}>Web Apps</button>
          <button style={{background: this.state.webgames ? 'lightblue' : '#916BB7'}} type="button" className="project-button" onClick={this.handleClickWebGames}>Web Games</button>
          <button style={{background: this.state.mobile ? 'lightblue' : '#916BB7'}} type="button" className="project-button" onClick={this.handleClickMobile}>Mobile Apps</button>
        </div>
        </div>
        {projects}
      </section>
    )
  }
}

export default App;
