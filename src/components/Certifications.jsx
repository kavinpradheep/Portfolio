import React from 'react'
import './Certifications.css'

const Certifications = () => {
  const certifications = [
    {
      id: 1,
      title: 'MongoDB Associate Developer Examination',
      issuer: 'MongoDB Inc.',
      date: 'May 2022',
      expiryDate: 'May 2025',
      icon: '🍃',
      badge: 'Active',
      credentialId: 'MDB-DEV-2022-006',
      description: 'Validates ability to build applications using MongoDB and demonstrates proficiency in MongoDB development.',
      skills: ['MongoDB', 'Aggregation', 'Indexing', 'Schema Design']
    }
  ];

  return (
    <section id="certifications" className="certifications">
      <div className="container">
        <div className="certifications-header">
          <h2 className="section-title">My Certifications</h2>
          <p className="section-subtitle">
            Professional certifications and credentials that validate my expertise 
            in various technologies and platforms.
          </p>
        </div>
        
        <div className="certifications-grid">
          {certifications.map((cert) => (
            <div key={cert.id} className="certification-card">
              <div className="cert-image">
                <div className="cert-badge">{cert.badge}</div>
                <div className="cert-icon">{cert.icon}</div>
              </div>
              
              <div className="cert-content">
                <div className="cert-header">
                  <h3 className="cert-title">{cert.title}</h3>
                  <p className="cert-issuer">{cert.issuer}</p>
                </div>
                
                <p className="cert-description">{cert.description}</p>
                
                <div className="cert-dates">
                  <div className="cert-date">
                    <span className="date-label">Issued:</span>
                    <span className="date-value">{cert.date}</span>
                  </div>
                  <div className="cert-expiry">
                    <span className="date-label">Expires:</span>
                    <span className="date-value">{cert.expiryDate}</span>
                  </div>
                </div>
                
                <div className="cert-skills">
                  {cert.skills.map((skill, index) => (
                    <span key={index} className="skill-tag">{skill}</span>
                  ))}
                </div>
                
                <div className="cert-footer">
                  <div className="credential-info">
                    <span className="credential-label">Credential ID:</span>
                    <span className="credential-id">{cert.credentialId}</span>
                  </div>
                  <a href="#" className="cert-action">Verify</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Certifications