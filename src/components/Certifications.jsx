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
          {/* Internship Completion Letter Card */}
          <div className="certification-card">
            <div className="certification-icon">📄</div>
            <h3>Internship Completion Letter</h3>
            <p className="certification-issuer">Imagivite</p>
            <p className="certification-date">February 2026</p>
            <a
              href="/assets/Kavinpradheep_imagivite.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="certification-link"
            >
              View Letter
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Certifications