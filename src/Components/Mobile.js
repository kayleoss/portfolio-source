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
                      return (
                        <Site 
                          {...item}
                          key={mobileData.indexOf(item)}
                          description={item.description}
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

export default Mobile;