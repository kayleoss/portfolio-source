import React from 'react';
import Skills from './Skills';
import SkillsText from './SkillsText';

export default class Services extends React.Component {
    state = {
      toolbox: false
    }
    handleClick = () => {
      this.setState({toolbox: !this.state.toolbox});
    }
    render(){
      return(
        <section id="what-i-do" className="wow fadeInUp help-card col-lg-6 offset-lg-3 p-md-5 mb-md-5">
          <h1 className="title-h1 text-center">A little more about me</h1>
          {this.state.toolbox ? 
            <div><p className="description-p text-center">Some of the tools I use:</p><SkillsText /></div> : 
            <div><p className="description-p text-center">My professional experience:</p><Skills /></div> 
          }
          <div className="text-center mt-3 d-none d-md-block" style={{width: '100%'}}>
            <button type="button" className="vector-button light-shadow text-white" onClick={this.handleClick}>
              {this.state.toolbox ? 
              "See my experience" : 
              "See my skills" }
            </button>
          </div>
        </section>
      )
    }
  }