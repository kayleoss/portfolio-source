import React from 'react';

const Header = () => (
  <div>
    <header id="header" className="pb-5">
      <div className="container">
        <div className="row">
          <div className="col-sm-8 offset-md-2 pt-5">
            <h1 className="main-h1 wow fadeInDown p-t"><span role="img" aria-label="waving hand">👋</span> Need a website?</h1>
            <p className="main-p m-t wow fadeInDown" data-wow-delay="0.7s" alt="Katie Liu">The KDL group offers custom built websites, web applications, automation scripting, emails, testing and more.<br/><br/>With years of experience under our belt working with a variety of businesses in different industries, we're sure we can tackle all your technical needs.</p>
            <a href="#what-i-do" className="vector-button m-s-t p-3 text-light wow fadeIn" data-wow-delay="1.2s" title="See what we can do for your business">
              See what we offer
            </a>
            <a href="#footer" className="vector-button p-3 text-light ml-3 wow fadeIn" data-wow-delay="1.4s" title="First consultation free">Get a free consult</a>
          </div>
        </div>
      </div>
    </header>
  </div>
  )

export default Header;
