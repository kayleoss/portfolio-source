import React from 'react';
import Site from './Site';

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
          <div className="row">
            <Site 
              href="https://evening-escarpment-34767.herokuapp.com" 
              title="ConquerKill" 
              description="Battle other players, earn coins, buy & equip weapons, and train your stats. I used a cool algorithm to determine the winner of each battle, taking into consideration the players' stats as well as luck. Built with Node, Express & MongoDB. Frontend with EJS, CSS, JS, & Materialize framework." 
              mouseOverAction={this.handleHover}
              mouseLeaveAction={this.handleLeave}
              imgSrc="conquer.png"
              imgAlt="ConquerKill image thumbnail preview of the game, showing player cards and the option to fight other players online." 
            />
          </div>
        </div>
        )
    }
}

export default Webgames;
