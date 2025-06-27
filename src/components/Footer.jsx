import React from 'react'
import './Footer.css'

const Footer = () => {
  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Tools', href: '#tools' },
    { name: 'Certifications', href: '#certifications' },
    { name: 'Projects', href: '#projects' }
  ]

  const contactInfo = [
    {
      icon: '📧',
      label: 'Email:',
      value: 'kavinpradheep8@gmail.com',
      link: 'mailto:kavinpradheep8@gmail.com'
    },
    {
      icon: '📱',
      label: 'Phone : ',
      value: '6369960824',
      link: 'tel:+916369960824'
    },
    {
      icon: '📍',
      label: 'Location:',
      value: ' Tiruppur, India',
      link: null
    }
  ]

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section footer-brand">
            <h3 className="footer-logo">Kavin Pradheep</h3>
            <p className="footer-tagline">
              Full Stack Developer & UI/UX Enthusiast
            </p>
            <p className="footer-description">
              Passionate about creating innovative web solutions and bringing ideas to life through clean, efficient code.
            </p>
          </div>

          <div className="footer-section footer-navigation">
            <h4 className="footer-heading">Navigation</h4>
            <ul className="footer-links">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="footer-link">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-section footer-contact">
            <h4 className="footer-heading">Get In Touch</h4>
            <div className="contact-info">
              {contactInfo.map((item) => (
                <div key={item.label} className="contact-item">
                  <span className="contact-icon">{item.icon}</span>
                  <div className="contact-details">
                    <span className="contact-label">{item.label}</span>
                    {item.link ? (
                      <a href={item.link} className="contact-value">
                        {item.value}
                      </a>
                    ) : (
                      <span className="contact-value">{item.value}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-divider"></div>
          <div className="footer-bottom-content">
            <p className="copyright">
              © {new Date().getFullYear()} Kavin Pradheep. All rights reserved.
            </p>
            <p className="footer-note">
              Designed & Built with ❤️ using React & Modern CSS
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
