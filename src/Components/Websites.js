import React from 'react';
import Site from './Site';
import {websiteData} from './data.js';

export default class Websites extends React.Component{

    handleHover = (e) => {
      e.target.style.opacity = 1;
    }
    handleLeave = (e) => {
      e.target.style.opacity = 0;
    }

    render(){
        return (
            <div className="container">
              <div className="row">
                {
                  websiteData.map(item => {
                      return (
                        <Site
                          key={websiteData.indexOf(item)}
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
