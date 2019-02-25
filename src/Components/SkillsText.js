import React from 'react';

const SkillsText = () => (
    <div className="container">
      <div className="row">
        <div className="col-sm-6">
          <table className="table vector-button text-light box-shadow border-bottom-purple">
            <tbody>
            <tr>
              <th>Development</th>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td className="p-3">HTML Email</td>
              <td className="p-3">
                <ul>
                  <li>1 custom coded HTML email</li>
                </ul>
              </td> 
              <td className="p-3"><span className="text-info price">$100</span></td>
            </tr>
            <tr>
              <td className="p-3">HTML Template</td>
              <td className="p-3">
                <ul>
                  <li>1 completely custom coded template page</li>
                </ul>
              </td> 
              <td className="p-3"><span className="text-info price">$300</span></td>
            </tr>
            <tr>
              <td className="p-3">Custom Static Website <br/><span className="text-danger">HOT!</span></td>
              <td className="p-3">
                <ul>
                  <li>5 custom pages</li>
                  <li>Free domain and hosting setup</li>
                </ul>
              </td> 
              <td className="p-3"><span className="text-success price">$1000</span></td>
            </tr>
            <tr>
              <td className="p-3">Custom WordPress theme <br/><span className="text-danger">HOT!</span></td>
              <td className="p-3">
                <ul>
                  <li>100% custom coded theme</li>
                  <li>Free domain and hosting setup</li>
                </ul>
              </td> 
              <td className="p-3"><span className="text-success price">$1000</span></td>
            </tr>
            <tr>
              <td className="p-3">Custom Web Application</td>
              <td className="p-3">
                <ul>
                  <li>Custom built application based on your needs<sup>*</sup>. (Please consult for more info)</li>
                </ul>
              </td> 
              <td className="p-3"><span className="text-info price">$2000+</span></td>
            </tr>
            </tbody>
          </table>
        </div>
        <div className="col-sm-6">
          <table className="table box-shadow bg-light custom-light-bg">
            <tbody>
            <tr>
              <td><strong>Web Design</strong></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td className="p-3">Wireframing<br/><span className="text-danger">HOT!</span></td>
              <td className="p-3">
                <ul>
                  <li>2 wireframe layouts</li>
                  <li>2 hour brainstorming session</li>
                </ul>
              </td> 
              <td className="p-3"><span className="text-success price">$300</span></td>
            </tr>
            <tr>
              <td className="p-3">Logos</td>
              <td className="p-3">
                <ul>
                  <li>2 logos</li>
                  <li>High res, svg, jpg, png format</li>
                  <li>Multiple sizes and colors</li>
                </ul>
              </td> 
              <td className="p-3"><span className="text-info price">$500</span></td>
            </tr>
            <tr>
              <td className="p-3">Mockups <br/><span className="text-danger">HOT!</span></td>
              <td className="p-3">
                <ul>
                  <li>1 high-res sketch file</li>
                  <li>inVision links</li>
                  <li>All assets provided as SVG/JPG/PNG</li>
                </ul>
              </td> 
              <td className="p-3"><span className="text-success price">$1000</span></td>
            </tr>
            </tbody>
          </table>
          <table className="table box-shadow bg-light mt-5 custom-light-bg">
            <tbody>
            <tr>
              <td><strong>Automation &amp; Testing</strong></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td className="p-3">Web Automation Script<br/><span className="text-danger">HOT!</span></td>
              <td className="p-3">
                <ul>
                  <li>1 customized script (Selenium Webdriver/Python)</li>
                  <li>Free consultation</li>
                </ul>
              </td> 
              <td className="p-3"><span className="text-success price">$300</span></td>
            </tr>
            <tr>
              <td className="p-3">QA functional testing<br/><span className="text-danger">HOT!</span></td>
              <td className="p-3">
                <ul>
                  <li>Manual functional testing of every page</li>
                  <li>Accessibility testing</li>
                  <li>Responsiveness testing</li>
                </ul>
              </td> 
              <td className="p-3"><span className="text-success price">$300+</span></td>
            </tr>
            <tr>
              <td className="p-3">Task Script<br/><span className="text-danger">HOT!</span></td>
              <td className="p-3">
                <ul>
                  <li>1 Python tasking automation script</li>
                  <li>Free consultation</li>
                </ul>
              </td> 
              <td className="p-3"><span className="text-info price">$300+</span></td>
            </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )

  export default SkillsText;
