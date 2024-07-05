import React from 'react';
import Site from './Site';
import {websiteData} from './data.js';

export default class Websites extends React.Component{

    render(){
        return (
            <div className="container mb-5">
              <div className="row mb-5">
                {
                  websiteData.map(item => {
                      return (
                        <Site
                          key={websiteData.indexOf(item)}
                          {...item}
                        />
                      )
                  })
                }
              </div>
              <p className="text-center mb-5 text-light">More projects available to view on <a href='https://github.com/kayleoss' target="_blank">github</a><br/> Check out my <a href='/blog'>blog</a></p>
            </div>
        )
    }
}
