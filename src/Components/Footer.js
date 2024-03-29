import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => (
  <div>
    <footer id="footer" className="p-t p-b">
      <div className="container">
        <h1 className="main-h1 text-center">Contact Me</h1>
        <div className="row p-t">
          <div className="offset-sm-4"></div>
          <div className="col-sm-4">
            <h2 className="overlay-h1 p-b">Social</h2>
            <p className="main-p"><a href="https://www.linkedin.com/in/katie-duo-l-26046a110/" rel="noopener noreferrer" target="_blank">Find me on LinkedIn <i className="fa fa-linkedin"></i></a></p>
            <p className="main-p"><a href="https://www.github.com/kayleoss" target="_blank" rel="noopener noreferrer">Check out my Github <i className="fa fa-github"></i></a></p>
            <p className="main-p"><Link to="/blog">Read my tech blog <i className="fa fa-book"></i></Link></p>
          </div>
          <div className="col-sm-4">
            <h2 className="overlay-h1 p-b">Send a message</h2>
            <form id="cta-form" action="https://formspree.io/katie_acting@live.ca" method="POST">
              <input type="text" name="name" placeholder="Your Name" required />
              <input type="email" name="email" placeholder="Your Email Address" required />
              <textarea name="message" placeholder="Your Message"></textarea><br />
              <div className="text-center">
                <button type="submit" className="border pl-5 pr-5 projects-bg rounded text-light">Send</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </footer>
    <section id="copyright">
      <p>Designed &amp; built by Katie &copy; All Rights Reserved</p>
    </section>
  </div>
)

export default Footer;
