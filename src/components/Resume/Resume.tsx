import React from 'react';
import './Resume.css';

const Resume: React.FC = () => {
  return (
    <section id="resume" className="resume-section">
      <div className="resume-content">
        <h2>Resume</h2>
        <div className="resume-download">
          <a href="/assets/resume.pdf" download className="download-button">
            Download Resume
          </a>
        </div>
      </div>
    </section>
  );
};

export default Resume; 