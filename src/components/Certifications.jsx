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
      certificateUrl: '/assets/mongodb-certificate.pdf',
      description:
        'Demonstrates expertise in building and deploying applications using MongoDB. Validates knowledge in schema design, CRUD operations, indexing, aggregation, and performance tuning.',
      skills: ['MongoDB', 'CRUD Operations', 'Aggregation', 'Indexing', 'Schema Design']
    },
    {
      id: 2,
      title: 'Privacy and Security in Online Social Media',
      issuer: 'NPTEL (IIT)',
      date: 'April 2024',
      expiryDate: 'N/A',
      icon: '🔐',
      badge: 'Completed',
      certificateUrl: '/assets/nptel-privacy-security-certificate.pdf',
      description:
        'Covers privacy, security, and policy concerns related to online social platforms. Includes encryption, anonymity, data leaks, and digital forensics.',
      skills: ['Privacy', 'Security', 'Digital Forensics', 'Online Social Media']
    },
    {
      id: 3,
      title: 'Design & Implementation of Human-Computer Interfaces',
      issuer: 'NPTEL (IIT)',
      date: 'October 2024',
      expiryDate: 'N/A',
      icon: '🧠',
      badge: 'Completed',
      certificateUrl: '/assets/nptel-hci-certificate.pdf',
      description:
        'Explores usability, interaction design, and techniques to create user-centered systems. Evaluates HCI models and UI implementation approaches.',
      skills: ['HCI', 'Usability', 'Interaction Design', 'User-Centered Design']
    }
  ];

  return (
    <section id="certifications" className="certifications">
      <div className="container">
        <h2 className="section-title">Certifications</h2>
        <p className="section-subtitle">
          Professional certifications and achievements
        </p>
        
        <div className="certifications-grid">
          {certifications.map((cert, index) => (
            <div key={index} className="certification-card">
              <div className="certification-icon">
                {cert.icon || '🏆'}
              </div>
              <h3>{cert.title}</h3>
              <p className="certification-issuer">{cert.issuer}</p>
              {cert.date && <p className="certification-date">{cert.date}</p>}
              {cert.certificateUrl && (
                <a
                  href={cert.certificateUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="certification-link"
                >
                  View Certificate
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Certifications