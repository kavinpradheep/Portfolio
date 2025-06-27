/* filepath: d:\portfolio\src\components\About.jsx */
import React from 'react'
import './About.css'

const About = () => {
  const socialLinks = [
    { icon: '⚡', label: 'GitHub', url: 'https://github.com' },
    { icon: '💼', label: 'LinkedIn', url: 'https://linkedin.com' },
    { icon: '✉️', label: 'Email', url: 'mailto:kavinpradheep8@gmail.com' },
  ];

  return (
    <section id="about" className="about">
      <div className="container">
        <div className="about-content">
          <div className="about-text">
            <h2 className="section-title">About Me</h2>
            <p className="about-description">
              Hello and welcome! I'm based in the vibrant city of Erode 
              and have over a year of experience in web development. 
              I'm passionate about creating visually appealing and 
              functional websites that are in tune with the latest 
              trends and technologies. My work focuses on delivering 
              exceptional user experiences, with a keen eye for detail 
              in every project.
            </p>
            <div className="stats">
              <div className="stat">
                <h3>10+</h3>
                <p>Projects Completed</p>
              </div>
              <div className="stat">
                <h3>8+</h3>
                <p>Technologies</p>
              </div>
            </div>
            <div className="about-social">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  className="about-social-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="about-social-icon">{link.icon}</span>
                  {link.label}
                </a>
              ))}
            </div>
          </div>
          <div className="about-image">
            <div className="image-container">
              <img src="/src/assets/kavin.jpeg" alt="Kavin Pradheep S T" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About