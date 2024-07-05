import React from 'react';
import Websites from './Websites';

export default class Projects extends React.Component {
    state = {
      bgColor: 'rgb(28, 20, 36)',
      scrolledY: 0,
      bgScrollInc: []
    }
    componentDidMount() {
      window.addEventListener('scroll', this.handleScroll)
      const bgScrollInc = [
        {
          windowSize: window.innerHeight *0.9,
          color: '#391859'
        },
        {
          windowSize: window.innerHeight *2,
          color: '#006e4f'
        },
        {
          windowSize: window.innerHeight *2.5,
          color: '#abc200'
        },
        {
          windowSize: window.innerHeight *3,
          color: '#874601'
        },
        {
          windowSize: window.innerHeight *3.5,
          color: '#01153b'
        },
        {
          windowSize: window.innerHeight *4,
          color: '#3b0134'
        },
        {
          windowSize: window.innerHeight *4.5,
          color: 'rgb(28, 20, 36)'
        }
      ]
      this.setState({bgScrollInc})
    }
    handleScroll = () => {
      this.setState({scrolledY: document.documentElement.scrollTop})
      const y = this.state.scrolledY;
      const scrollCol = this.state.bgScrollInc;

      scrollCol.map((set) => {
        y > set.windowSize ? this.setState({bgColor: set.color}) : '';
      })
    }
    render(){
      return (
        <>
        <div className="slanted-border" style={{borderBottom: '100px solid ' + this.state.bgColor}}></div>
        <section id="projects" className="pt-5 pt-md-0 pb-5" style={{backgroundColor: this.state.bgColor}}>
          <div className="text-center">
            <h1 className="title-h1 wow fadeIn p-t text-light">Development projects</h1>
            <p className="description-p text-light">I have worked on a variety of projects, from websites, to web applications and games, to mobile applications.</p>
            {/* <p className="description-p">Source code for projects available on my <a href="https://github.com/kayleoss" target="_blank" rel="noopener noreferrer">github</a></p> */}
          </div>
          <Websites />
        </section>
        </>
      )
    }
  }