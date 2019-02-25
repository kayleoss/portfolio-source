import React from 'react';

const Skills = () => (
    <div className="container">
      <div className="row p-t">
          <div className="col-sm-4">
            <img src={require('../assets/design-icon-2.png')} style={{width:'100%'}} alt="Katie Liu can help with design, prototyping, and custom artwork!"/>
            <h2 className="description-h m-t text-center"><strong>UI/UX Design &amp; Prototyping</strong></h2>
            <p className="mt-3">We design logos, wireframes, prototypes, and blueprints. Our designers are both artistic <em>and</em> technical - so our wireframes and prototype designs come with easy yet beautiful implementations!</p>
          </div>
          <div className="col-sm-4">
            <img src={require('../assets/code-icon-2.png')} style={{width:'100%'}} alt="Katie Liu can help with development, coding, hosting and domain setup!"/>
            <h2 className=" description-h m-t text-center"><strong>Website &amp; App Development</strong></h2>
            <p className="mt-3">We build 100% custom websites and HTML templates, although we also work with Wordpress when it's requested. We also deliver complex website application projects that require a backend and database.</p>
          </div>
          <div className="col-sm-4">
            <img src={require('../assets/marketing-icon-2.png')} style={{width:'100%'}} alt="Katie Liu can help with development, coding, hosting and domain setup!"/>
            <h2 className=" description-h m-t text-center"><strong>Digital Marketing, Testing, and More</strong></h2>
            <p className="mt-3">We'll help your company get off the ground with google analytics and adwords - as well as test each page for SEO, accessibility, responsiveness to different screen sizes, and make sure everything works the way it's intended.</p>
          </div>
      </div>
    </div>
  )


export default Skills;