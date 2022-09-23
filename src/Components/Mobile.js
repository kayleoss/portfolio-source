import React from 'react';
import Site from './Site';
import {mobileData} from './data.js';

class Mobile extends React.Component {

    handleHover = (e) => {
        e.target.style.opacity = 1;
      }
      handleLeave = (e) => {
        e.target.style.opacity = 0;
      }

    render() {
        return(
            <div className="container">
                <div className="row">
                {
                  mobileData.map(item => {
                    if (mobileData.length < 2) {
                      return (
                        <Site
                          {...item}
                          key={mobileData.indexOf(item)}
                          mouseOverAction={this.handleHover}
                          mouseLeaveAction={this.handleLeave}
                          colClass="col-sm-6 offset-md-3 p-t"
                        />
                      )
                    } else {
                      return (
                        <Site 
                          {...item}
                          key={mobileData.indexOf(item)}
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

export default Mobile;
