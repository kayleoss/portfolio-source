import React from 'react';
import Site from './Site';

class Websites extends React.Component{

    handleHover = (e) => {
      e.target.style.opacity = 1;
    }
    handleLeave = (e) => {
      e.target.style.opacity = 0;
    }

    render(){
        return (
            <div className="container">
              <div className="row">
                <Site 
                  href="http://neshamatherapy.com" 
                  title="Neshama Therapy" 
                  description="KDL Group built Neshama Therapy's new website, complete with a discussion hub and an e-commerce page using PHP, MySQL, HTML, CSS, SCSS, JS, and Ajax." 
                  mouseOverAction={this.handleHover}
                  mouseLeaveAction={this.handleLeave}
                  imgSrc="neshama.png"
                  imgAlt="Neshama therapy's website image thumbnail"
                />
                <Site 
                  href="https://mavencare.com/sunlife-care" 
                  title="Mavencare &amp; Sun Life" 
                  description="KDL Group built Mavencare's Sun Life and Referral landing pages using HTML, CSS, JavaScript, Handlebars, Node, and implemented AJAX form submission that creates a lead in the company-wide portal." 
                  mouseOverAction={this.handleHover}
                  mouseLeaveAction={this.handleLeave}
                  imgSrc="mavencare-sunlife.png"
                  imgAlt="Katie Liu Worked On Mavencare's Sunlife Landing Page"
                />
                <Site 
                  href="https://mavencare.com/senior-care-massachusetts" 
                  title="Mavencare Senior Care" 
                  description="Following the product designer's prototypes, KDL Group built Mavencare's new Boston, Toronto, and NYC landers using HTML, CSS, JS, Node, and handlebars." 
                  mouseOverAction={this.handleHover}
                  mouseLeaveAction={this.handleLeave}
                  imgSrc="mavencare.png"
                  imgAlt="Katie Liu Worked On Mavencare's New Landing Pages"
                />
                <Site 
                  href="http://paintballnation.ca/" 
                  title="Paintball Nation" 
                  description="KDL Group customized Paintball Nation's existing WordPress theme, fixed dead links, worked on responsiveness, and rearranged/updated content." 
                  mouseOverAction={this.handleHover}
                  mouseLeaveAction={this.handleLeave}
                  imgSrc="pbn.png"
                  imgAlt="Katie Liu Worked On Paintball Nation's WordPress Theme"
                />
                <Site 
                  href="https://katieliu.github.io/index" 
                  title="NLanding Website Template" 
                  description="KDL Group built a 5+ page website template using HTML, CSS, JavaScript and jQuery." 
                  mouseOverAction={this.handleHover}
                  mouseLeaveAction={this.handleLeave}
                  imgSrc="nlanding.png"
                  imgAlt="Katie Liu Worked On A Web Template for NLanding"
                />
              </div>
            </div>
        )
    }
}

export default Websites;
