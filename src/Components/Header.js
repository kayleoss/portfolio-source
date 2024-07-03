import React from 'react';
import {Link} from 'react-router-dom';

const Header = () => (
  <div>
    <header id="header">
      <div className="container">
        <div className="row">
          <div className="col-sm-7"></div>
          <div className="col-sm-5 m-t">
            <h1 className="main-h1 m-t">I'm Katie <span role="img" aria-label="waving hand">👋</span></h1>
            <p className="main-p m-t" alt="Katie Liu">Working as a full-stack developer and digital media enthusiast with experience in automated testing and UI/UX design. <br/><br /> I love building things, experimenting, and continuous learning.</p>
            <a href="#what-i-do" className="vector-button m-s-t text-white" title="See what I can do for your business">See more</a>
            {/* <p className="mt-3 mb-0"><Link to="/blog" className="legal-text block">Check out my blog</Link></p> */}
          </div>
        </div>
      </div>
    </header>
  </div>
  )

export default Header;
