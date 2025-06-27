/* filepath: d:\portfolio\src\components\Skills.jsx */
import React from 'react'
import './Skills.css'

const Skills = () => {
  const skills = [
    { name: 'HTML', icon: '/src/assets/html.png', level: 90 },
    { name: 'CSS', icon: '/src/assets/css.png', level: 85 },
    { name: 'JavaScript', icon: '/src/assets/javascript.png', level: 80 },
    { name: 'Python', icon: '/src/assets/python.png', level: 75 },
    { name: 'Node.js', icon: '/src/assets/nodejs.png', level: 70 },
    { name: 'MongoDB', icon: '/src/assets/mongodb.png', level: 65 },
    { name: 'UI/UX', icon: '/src/assets/uiux.png', level: 80 },
    { name: 'Power BI', icon: '/src/assets/powerbi.jpeg', level: 70 }
  ]

  return (
    <section id="skills" className="skills">
      <div className="container">
        <h2 className="section-title">Skills & Technologies</h2>
        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div key={skill.name} className="skill-card" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="skill-icon">
                <img src={skill.icon} alt={skill.name} />
              </div>
              <h3>{skill.name}</h3>
              <div className="skill-progress">
                <div 
                  className="skill-progress-bar"
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
              <span className="skill-percentage">{skill.level}%</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills