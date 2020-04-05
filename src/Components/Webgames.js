import React from 'react';
import Site from './Site';
import {webGamesData} from './data.js';

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
          {
                  webGamesData.map(item => {
                      return (
                        <Site
                          {...item}
                          mouseOverAction={this.handleHover}
                          mouseLeaveAction={this.handleLeave}
                        />
                      )
                  })
                }
          </div>
        </div>
        )
    }
}

export default Webgames;
