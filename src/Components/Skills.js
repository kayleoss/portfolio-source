import React from 'react';

const Skills = () => (
    <div className="container">
      <div className="row p-t wow slideInLeft">
          <div className="col-sm-4">
            <img src={require('../assets/design-icon-2.png')} style={{width:'100%'}} alt="Katie Liu can help with design, prototyping, and custom artwork!"/>
            <h2 className="description-h m-t text-center">UI/UX Design &amp; Prototyping</h2>
          </div>
          <div className="col-sm-4">
            <img src={require('../assets/code-icon-2.png')} style={{width:'100%'}} alt="Katie Liu can help with development, coding, hosting and domain setup!"/>
            <h2 className=" description-h m-t text-center">Full Stack Web Development</h2>
          </div>
          <div className="col-sm-4">
            <img src={require('../assets/marketing-icon-2.png')} style={{width:'100%'}} alt="Katie Liu can help with development, coding, hosting and domain setup!"/>
            <h2 className=" description-h m-t text-center">Digital Marketing &amp; Product Management</h2>
          </div>
      </div>
    </div>
  )


export default Skills;