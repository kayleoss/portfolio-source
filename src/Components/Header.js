import React from 'react';
import {Link} from 'react-router-dom';

const Header = () => (
  <div>
    <header id="header">
      <div className="container">
        <div className="row">
          <div className="col-sm-7"></div>
          <div className="col-sm-5 m-t">
            <h1 className="main-h1 wow fadeInDown m-t">Hey, I'm Katie <span role="img" aria-label="waving hand">👋</span></h1>
            <p className="main-p m-t wow fadeIn" alt="Katie Liu">I'm an experienced full-time software developer who sometimes takes contract projects on the side.<br/><br/>I can help you with websites, mobile apps, automation systems, and more.</p>
            <a href="#what-i-do" className="vector-button m-s-t" title="See what I can do for your business"><img src={require('../assets/cta-button-katie.png')} alt="Katie Liu can perform a variety of web services for your company." style={{width: '100%'}}/></a>
            <p className="mt-3"><Link to="/blog" className="legal-text block">Check out my blog</Link></p>
          </div>
        </div>
      </div>
    </header>
  </div>
  )

export default Header;
