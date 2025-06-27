import React from 'react'
import './Certifications.css'

const Certifications = () => {
  const certifications = [
    {
      id: 1,
      title: 'MongoDB Associate Developer Certification',
      issuer: 'MongoDB Inc.',
      date: 'January 2025',
      expiryDate: 'January 2028',
      icon: '🍃',
      badge: 'Certified',
      credentialId: 'MDBwkl9sft01p',
      description:
        'Demonstrates expertise in building and deploying applications using MongoDB. Validates knowledge in schema design, CRUD operations, indexing, aggregation, and performance tuning.',
      skills: ['MongoDB', 'CRUD Operations', 'Aggregation', 'Indexing', 'Schema Design']
    },
    {
      id: 2,
      title: 'Oracle Cloud Infrastructure 2024 Certified Foundations Associate',
      issuer: 'Oracle',
      date: 'January 2025',
      expiryDate: 'N/A',
      icon: '☁️',
      badge: 'Certified',
      credentialId: '316521152OCI2024FNDCFA',
      description:
        'Validates foundational knowledge of Oracle Cloud Infrastructure services, security, architecture, and core concepts essential for cloud adoption.',
      skills: ['OCI', 'Cloud Fundamentals', 'Security', 'Infrastructure Services']
    },
    {
      id: 3,
      title: 'Privacy and Security in Online Social Media',
      issuer: 'NPTEL (IIT)',
      date: 'April 2024',
      expiryDate: 'N/A',
      icon: '🔐',
      badge: 'Completed',
      credentialId: 'NPTEL24CS04S1255401182',
      description:
        'Covers privacy, security, and policy concerns related to online social platforms. Includes encryption, anonymity, data leaks, and digital forensics.',
      skills: ['Privacy', 'Security', 'Digital Forensics', 'Online Social Media']
    },
    {
      id: 4,
      title: 'Design & Implementation of Human-Computer Interfaces',
      issuer: 'NPTEL (IIT)',
      date: 'October 2024',
      expiryDate: 'N/A',
      icon: '🧠',
      badge: 'Completed',
      credentialId: 'NPTEL24CS126S851001696',
      description:
        'Explores usability, interaction design, and techniques to create user-centered systems. Evaluates HCI models and UI implementation approaches.',
      skills: ['HCI', 'Usability', 'Interaction Design', 'User-Centered Design']
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
                  {cert.expiryDate !== 'N/A' && (
                    <div className="cert-expiry">
                      <span className="date-label">Expires:</span>
                      <span className="date-value">{cert.expiryDate}</span>
                    </div>
                  )}
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
