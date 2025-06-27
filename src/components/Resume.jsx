import React from 'react'
import './Resume.css'

const Resume = () => {
  const handleDownload = () => {
    // Create a link element and trigger download
    const link = document.createElement('a')
    link.href = '/assets/Kavin_Resume_FS&UI.pdf'
    link.download = 'Kavin_Resume_FS&UI.pdf'
    link.click()
  }

  const handleView = () => {
    // Open resume in new tab - fixed the double .pdf extension
    window.open('/assets/Kavin_Resume_FS&UI.pdf', '_blank')
  }

  return (
    <section id="resume" className="resume">
      <div className="container">
        <div className="resume-header">
          <h2 className="section-title">My Resume</h2>
          <p className="section-subtitle">
            Download or view my complete professional resume
          </p>
        </div>
        
        <div className="resume-content">
          <div className="resume-preview">
            <div className="resume-card">
              <div className="resume-icon">
                📄
              </div>
              <h3>Professional Resume</h3>
              <p>Complete overview of my skills, experience, and achievements</p>
              
              <div className="resume-actions">
                <button onClick={handleView} className="btn-primary">
                  View Resume
                </button>
                <button onClick={handleDownload} className="btn-secondary">
                  Download PDF
                </button>
              </div>
            </div>
          </div>
          
          <div className="resume-highlights">
            <h3>What's Inside</h3>
            <ul className="highlights-list">
              <li>
                <span className="highlight-icon">🎯</span>
                Professional Experience & Projects
              </li>
              <li>
                <span className="highlight-icon">🛠️</span>
                Technical Skills & Technologies
              </li>
              <li>
                <span className="highlight-icon">🎓</span>
                Education & Certifications
              </li>
              <li>
                <span className="highlight-icon">🏆</span>
                Achievements & Awards
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Resume
