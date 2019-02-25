import React from 'react';

const Footer = (props) => (
    <div>
      <footer id="footer" className="p-t p-b">
        <div className="container">
          <h1 className="main-h1 text-center">Get a free consultation!</h1>
          <div className="row">
            <div className="col-sm-6 offset-md-3 mt-3">
              <form id="cta-form" action="https://formspree.io/katie_acting@live.ca" method="POST">
                <input type="text" name="name" placeholder="Your Name" required />
                <input type="email" name="email" placeholder="Email Address" required className="mt-3"/>
                <textarea name="message" placeholder="Tell Us About Your Project, Idea, etc" className="mt-3"></textarea><br/>
                <div className="text-center">
                  <button type="submit" className="vector-button text-light no-border mt-3 pl-3 pr-3 pt-1 pb-1">Send</button>
                </div>
              </form>
            </div>
            <div className="col-sm-4 mt-5">
              <h2 className="overlay-h1 p-b">24/7 Support</h2>
              <p className="main-p">Email: <a href="mailto:katie_business@live.ca">kliu@qaconsultants.com</a></p>
              <p className="main-p">Phone: <a href="tel:6476321715" target="_blank" rel="noopener noreferrer">1 (647)-632-1715</a></p>
            </div>
            <div className="col-sm-4 mt-5">
              <h2 className="overlay-h1 p-b">Social Life</h2>
              <p className="main-p"><a href="https://instagram.com/thekdlgroup" rel="noopener noreferrer" target="_blank">Follow Us On Instagram <i className="fa fa-instagram"></i></a></p>
              <p className="main-p"><a href="https://www.facebook.com/april.del.7" rel="noopener noreferrer" target="_blank">Add Our Founder On Facebook <i className="fa fa-facebook"></i></a></p>
              <p className="main-p"><a href="https://ca.linkedin.com/in/katie-liu-26046a110" rel="noopener noreferrer" target="_blank">Find Our Founder On LinkedIn <i className="fa fa-linkedin"></i></a></p>
            </div>
            <div className="col-sm-4 mt-5">
              <h2 className="overlay-h1 p-b">About Us</h2>
              <p className="main-p">Founded by the passionate web developer Katie Liu in 2016, we pride ourselves in delivering top quality web and technical services at affordable prices.</p>
            </div>
          </div>
        </div>
      </footer>
      <section id="copyright">
        <p>KDL Group &copy; All Rights Reserved {props.date}</p>
      </section>
    </div>
)

export default Footer;
