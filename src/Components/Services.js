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
        <section id="what-i-do" className="m-t p-b">
          <h1 className="title-h1 wow fadeInDown text-center">Here's How I Can Help</h1>
          {this.state.toolbox ? 
            <div><p className="description-p text-center wow fadeInDown">Here's What's In My Toolbox:</p><SkillsText /></div> : 
            <div><p className="description-p text-center wow fadeInDown">What I Can Do For Your Business:</p><Skills /></div> 
          }
          <div className="text-center mt-5 d-none d-md-block" style={{width: '100%'}}>
            <a className="vector-button-2" onClick={this.handleClick}>
              {this.state.toolbox ? 
              <img style={{width: '100%'}} src={require('../assets/cta-button-katie.png')} alt="Click this button to see what Katie Liu can do for you!"/> : 
              <img style={{width: '100%'}} src={require('../assets/skills-button.png')} alt="Click this button to see all of Katie Liu's skills!"/> }
            </a>
          </div>
        </section>
      )
    }
  }