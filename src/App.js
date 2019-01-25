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
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Blog from './Components/Blog';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div>
              <Route exact path="/" component={Main} />
              <Route path="/blog" component={Blog} />
            <Footer />
          </div>
        </Router>
      </div>
    );
  }
}

const Main = () => (
  <div>
    <Header />
    <Services />
    <Projects />
  </div>
)

class Services extends React.Component{ 
  state = {
    toolbox: false
  }
  handleClick = () => {
    this.setState({toolbox: !this.state.toolbox});
  }
  render(){
    return(
      <section id="what-i-do" className="m-t p-b">
        <h1 className="title-h1 wow fadeInDown text-center">Here's How I Can Help</h1>
        {this.state.toolbox ? <div><p className="description-p text-center wow fadeInDown">Here's What's In My Toolbox:</p><SkillsText /></div>: <div><p className="description-p text-center wow fadeInDown">What I Can Do For Your Business:</p><Skills /></div> }
        <div className="text-center m-s-t" style={{width: '100%'}}>
          <a className="vector-button-2" onClick={this.handleClick}>{this.state.toolbox ? <img style={{width: '100%'}} src={require('./assets/cta-button-katie.png')} alt="Click this button to see what Katie Liu can do for you!"/> : <img style={{width: '100%'}} src={require('./assets/skills-button.png')} alt="Click this button to see all of Katie Liu's skills!"/> }</a>
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
      <section id="projects" className="p-b">
        <div className="text-center">
        <h1 className="title-h1 wow fadeIn p-t">Recent Projects</h1>
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
