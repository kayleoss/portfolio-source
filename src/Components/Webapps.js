import React from 'react';
import Site from './Site';
import { webAppData } from './data.js';

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
              if (webAppData.length < 2) {
                <Site
                  {...item}
                  key={webAppData.indexOf(item)}
                  mouseOverAction={this.handleHover}
                  mouseLeaveAction={this.handleLeave}
                  colClass="col-sm-6 offset-md-3"
                />
              } else {
                return (
                  <Site
                    {...item}
                    key={webAppData.indexOf(item)}
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
