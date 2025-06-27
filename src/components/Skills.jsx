/* filepath: d:\portfolio\src\components\Skills.jsx */
import React from 'react'
import './Skills.css'

const Skills = () => {
  const skills = [
    'HTML',
    'CSS', 
    'UI/UX Design',
    'Data Analytics',
    'MySQL',
    'Python',
    'ReactJs',
    'MongoDB',
    'Java',
  ]

  const tools = [
    'Git',
    'Figma',
    'PowerBI',
    'Illustrator'
  ]

  return (
    <section id="skills" className="skills">
      <div className="container">
        <h2 className="section-title">Skills & Tools</h2>
        
        <div className="skills-tools-container">
          <div className="skills-section">
            <h3 className="subsection-title">Skills</h3>
            <div className="skills-grid">
              {skills.map((skill, index) => (
                <div key={skill} className="skill-card" style={{ animationDelay: `${index * 0.1}s` }}>
                  <span>{skill}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="tools-section">
            <h3 className="subsection-title">Tools</h3>
            <div className="skills-grid">
              {tools.map((tool, index) => (
                <div key={tool} className="skill-card" style={{ animationDelay: `${(index + skills.length) * 0.1}s` }}>
                  <span>{tool}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills
