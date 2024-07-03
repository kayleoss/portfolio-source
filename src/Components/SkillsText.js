import React from 'react';

const SkillsText = () => (
    <div className="container">
      <div className="row pt-3">
        <div className="col-sm-4">
          <h2 className="label-h1">Automation:</h2>
          <ul className="jobdesc-list">
            <li>Selenium Webdriver</li>
            <li>Robot Framework</li>
            <li>Windows Task Scheduler</li>
          </ul>
        </div>
        <div className="col-sm-4">
          <h2 className="label-h1">Development:</h2>
          <ul className="jobdesc-list">
            <li>HTML5</li>
            <li>CSS3/SASS</li>
            <li>JavaScript, jQuery, AJAX</li>
            <li>React</li>
            <li>VueJS</li>
            <li>Node.js</li>
            <li>Python</li>
            <li>Django</li>
          </ul>
        </div>
        <div className="col-sm-4">
          <h2 className="label-h1">Tools:</h2>
          <ul className="jobdesc-list">
            <li>Git</li>
            <li>WordPress</li>
            <li>Github</li>
            <li>Bitbucket</li>
            <li>Azure Devops</li>
            <li>Jira</li>
            <li>Office 365</li>
            <p>Power Platform</p>
          </ul>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-4">
          <h2 className="label-h1">Databases:</h2>
          <ul className="jobdesc-list">
            <li>MongoDB</li>
            <li>MySQL</li>
            <li>PostgreSQL</li>
            <li>Microsoft Access</li>
            <li>Microsoft Dataverse</li>
          </ul>
        </div>
        {/* <div className="col-sm-4">
          <h2 className="label-h1">Product/Business:</h2>
          <ul>
            <li>Agile/Kanban</li>
            <li>Jira</li>
            <li>Slack</li>
            <li>Acceptance criteria</li>
            <li>Capacity management</li>
          </ul>
        </div> */}
        <div className="col-sm-4">
          <h2 className="label-h1">Design:</h2>
          <ul className="jobdesc-list">
            <li>Sketch App</li>
            <li>Adobe Illustrator</li>
            <li>Adobe Photoshop</li>
            <li>Adobe inDesign</li>
            <li>Procreate</li>
            <li>inVision</li>
          </ul>
        </div>
      </div>
    </div>
  )

  export default SkillsText;
