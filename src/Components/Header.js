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
            <p className="main-p m-t wow fadeIn" alt="Katie Liu">I develop web applications, web games, mobile apps, &amp; automation scripts.<br/><br/>Want to turn your idea into reality? I'm here to help! I've got chops in many stages of the product: Design, Development, Testing, and Marketing.</p>
            <a href="#what-i-do" className="vector-button m-s-t" title="See what I can do for your business"><img src={require('../assets/cta-button-katie.png')} alt="Katie Liu can perform a variety of web services for your company." style={{width: '100%'}}/></a>
            <p className="mt-3"><Link to="/blog" className="legal-text block">Read what I have to say...</Link></p>
          </div>
        </div>
      </div>
    </header>
  </div>
  )

export default Header;
