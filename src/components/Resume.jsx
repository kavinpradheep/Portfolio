import React from 'react'
import './Resume.css'

const Resume = () => {
  return (
    <section id="resume" className="resume">
      <div className="container">
        <h2 className="section-title">Resume</h2>
        <div className="resume-content">
          <p>Download my resume to learn more about my experience and qualifications.</p>
          <a href="/RESUME (KAVIN).pdf" download className="download-btn">
            <span>Download Resume</span>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 16L7 11L8.4 9.6L11 12.2V4H13V12.2L15.6 9.6L17 11L12 16Z" fill="currentColor"/>
              <path d="M5 20V18H19V20H5Z" fill="currentColor"/>
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}

export default Resume
