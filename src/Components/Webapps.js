import React from 'react';
import Site from './Site';
import {webAppData} from './data.js';

export default class Webapps extends React.Component {

  handleHover = (e) => {
    e.target.style.opacity = 1;
  }
  handleLeave = (e) => {
    e.target.style.opacity = 0;
  }

  render() {
    return (
      <div className="container">
        <div className="row">
        {
          webAppData.map(item => {
              return (
                <Site 
                  {...item}
                  key={webAppData.indexOf(item)}
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
