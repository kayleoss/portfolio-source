import React from 'react';

class Webgames extends React.Component{

    handleHover = (e) => {
      e.target.style.opacity = 1;
    }
    handleLeave = (e) => {
      e.target.style.opacity = 0;
    }

    render(){
        return(
        <div className="container">
          <div className="row p-t">
            <div className="col-sm-6">
              <a target="_blank" rel="noopener noreferrer" href="https://evening-escarpment-34767.herokuapp.com">
                <div className="overlay" onMouseOver={this.handleHover} onMouseLeave={this.handleLeave}>
                  <h2 className="overlay-h1">ConquerKill</h2>
                  <p>Battle other players, earn coins, buy & equip weapons, and train your stats. I used a cool algorithm to determine the winner of each battle, taking into consideration the players' stats as well as luck. Built with Node, Express & MongoDB. Frontend with EJS, CSS, JS, & Materialize framework.</p>
                </div>
                <img className="project-img" src={require('../assets/conquer.png')} alt="ConquerKill"/>
              </a>
            </div>
            <div className="col-sm-6"></div>
          </div>
        </div>
        )
    }
}

export default Webgames;
