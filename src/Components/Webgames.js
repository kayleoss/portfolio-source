import React from 'react';
import Site from './Site';
import {webGamesData} from './data.js';

export default class Webgames extends React.Component{

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
                    if (webGamesData.length < 2) {
                      return (
                        <Site
                          {...item}
                          key={webGamesData.indexOf(item)}
                          mouseOverAction={this.handleHover}
                          mouseLeaveAction={this.handleLeave}
                          colClass="col-sm-6 offset-md-3 p-t"
                        />
                      )
                    } else {
                      return (
                        <Site
                          {...item}
                          key={webGamesData.indexOf(item)}
                          mouseOverAction={this.handleHover}
                          mouseLeaveAction={this.handleLeave}
                        />
                      )
                    }
                      
                  })
                }
          </div>
        </div>
        )
    }
}
