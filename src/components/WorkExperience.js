// WorkExperience.js
import React from 'react';
import './WorkExperience.css'; // Add a new CSS file for styling

function WorkExperience() {
  return (
    <section className="work-experience-section" id="work-experience">
      <h2>Work Experience</h2>
      <div className="work-experience-content">
        <h3>Infoway Group</h3>
        <p>Location: Chennai</p>
        <p>Date: 3rd June 2024</p>
        <p>
          Website: <a href="https://www.infowaygroup.com/" target="_blank" rel="noopener noreferrer">www.infowaygroup.com</a>
        </p>
        <ul>
          <li>Integrated a Learning Management System (LMS) with a Human Resource Management System (HRMS) and implemented Twilio API for SMS communication.</li>
          <li>Contributed to system design, development, and API integration using JavaScript, HTML, CSS, and React.js technologies.</li>
          <li>Performed testing and quality assurance to ensure system reliability and performance.</li>
          <li>Prepared comprehensive documentation and conducted user training sessions.</li>
          <li>Enhanced full-stack development skills and problem-solving abilities through hands-on project experience.</li>
        </ul>
      </div>
    </section>
  );
}

export default WorkExperience;
