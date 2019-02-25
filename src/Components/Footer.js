import React from 'react';
// import {Link} from 'react-router-dom';

const Footer = () => (
    <div>
      <footer id="footer" className="p-t p-b">
        <div className="container">
          <h1 className="main-h1 text-center">Let's Work Together!</h1>
          <div className="row p-t">
            <div className="col-sm-4">
              <h2 className="overlay-h1 p-b">Contact Info</h2>
              <p className="main-p">Email: <a href="mailto:katie_business@live.ca">kliu@qaconsultants.com</a></p>
              <p className="main-p">LinkedIn: <a href="https://www.linkedin.com/in/katie-liu-26046a110/" target="_blank" rel="noopener noreferrer">Katie Liu</a></p>
              <p className="main-p">Github: <a href="https://www.github.com/kayleoss" target="_blank" rel="noopener noreferrer">kayleoss</a></p>
            </div>
            <div className="col-sm-4">
              <h2 className="overlay-h1 p-b">Social Life</h2>
              <p className="main-p"><a href="https://instagram.com/kayleoss" rel="noopener noreferrer" target="_blank">Follow Me On Instagram <i className="fa fa-instagram"></i></a></p>
              <p className="main-p"><a href="https://www.facebook.com/april.del.7" rel="noopener noreferrer" target="_blank">Add Me On Facebook <i className="fa fa-facebook"></i></a></p>
              <p className="main-p"><a href="https://ca.linkedin.com/in/katie-liu-26046a110" rel="noopener noreferrer" target="_blank">Find Me On LinkedIn <i className="fa fa-linkedin"></i></a></p>
              {/* <p className="main-p"><Link to="/blog">What I Have To Say <i className="fa fa-book"></i></Link></p> */}
            </div>
            <div className="col-sm-4">
              <h2 className="overlay-h1 p-b">Get A Quote</h2>
              <form id="cta-form" action="https://formspree.io/katie_acting@live.ca" method="POST">
                <input type="text" name="name" placeholder="Your Name" required />
                <input type="email" name="email" placeholder="Email Address" required />
                <textarea name="message" placeholder="Tell Me About Your Project, Idea, etc"></textarea><br/>
                <div className="text-center">
                  <button type="submit" className="project-button">Send</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </footer>
      <section id="copyright">
        <p>Designed &amp; Built By Katie Liu &copy; All Rights Reserved 2018</p>
      </section>
    </div>
)

export default Footer;
