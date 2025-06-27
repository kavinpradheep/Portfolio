import React from 'react'
import './Projects.css'

const Projects = () => {
  const projects = [
    {
      title: 'Tic-Tac-Toe Game',
      description: 'A browser-based Tic Tac Toe game using HTML, CSS, and JavaScript. Two players alternate turns marking "X" or "O" on a 3x3 grid. JavaScript handles the game logic, checking for wins or draws.',
      technologies: ['HTML', 'CSS', 'JavaScript'],
      github: 'https://github.com/kavinpradheep/Tic-Tac-Toe-Game-.git',
      live: '#',
      category: 'Game Development'
    },
    {
      title: 'Certificate Generator',
      description: 'A ReactJS-based certificate generator that allows users to input details like name, course, and date to create custom certificates. Features PDF download functionality and customizable templates.',
      technologies: ['React', 'JavaScript', 'CSS', 'PDF Generation'],
      github: 'https://github.com/kavinpradheep/Certificate-Generator.git',
      live: '#',
      category: 'Web Application'
    },
    {
      title: 'YouTube Frontend Clone',
      description: 'A pixel-perfect YouTube frontend clone using HTML and CSS that replicates the layout and design of YouTube\'s homepage. Features responsive interface with video thumbnails, sidebar navigation, and modern UI components.',
      technologies: ['HTML', 'CSS', 'Responsive Design', 'UI/UX'],
      github: 'https://github.com/kavinpradheep/Youtube-clone-project.git',
      live: '#',
      category: 'Frontend Clone'
    },
    {
      title: 'Personal Portfolio',
      description: 'A modern, responsive personal portfolio website built with React. Features smooth animations, dark/light theme toggle, interactive sections, and optimized performance. Showcases projects, skills, and professional experience.',
      technologies: ['React', 'CSS3', 'JavaScript', 'Responsive Design', 'Animations'],
      github: 'https://github.com/kavinpradheep/portfolio',
      live: '#',
      category: 'Portfolio'
    },
    {
      title: 'Weather App',
      description: 'A dynamic weather application that provides real-time weather information for any city worldwide. Features current weather conditions, 5-day forecast, and beautiful weather animations with API integration.',
      technologies: ['JavaScript', 'HTML', 'CSS', 'Weather API', 'Fetch API'],
      github: 'https://github.com/kavinpradheep/weather-app',
      live: '#',
      category: 'Web Application'
    },
    {
      title: 'Task Management System',
      description: 'A comprehensive task management application with CRUD operations, priority levels, due dates, and category filtering. Built with modern JavaScript and local storage for data persistence.',
      technologies: ['JavaScript', 'HTML', 'CSS', 'Local Storage', 'DOM Manipulation'],
      github: 'https://github.com/kavinpradheep/task-manager',
      live: '#',
      category: 'Productivity Tool'
    },
    {
      title: 'Restaurant Landing Page',
      description: 'An elegant restaurant landing page featuring modern design, smooth scrolling, image galleries, menu sections, and contact forms. Fully responsive with CSS Grid and Flexbox layout.',
      technologies: ['HTML', 'CSS', 'JavaScript', 'Responsive Design', 'CSS Grid'],
      github: 'https://github.com/kavinpradheep/restaurant-landing',
      live: '#',
      category: 'Landing Page'
    },
    {
      title: 'Calculator App',
      description: 'A feature-rich calculator application with standard arithmetic operations, memory functions, and keyboard support. Clean interface with smooth animations and comprehensive error handling.',
      technologies: ['JavaScript', 'HTML', 'CSS', 'Mathematical Operations'],
      github: 'https://github.com/kavinpradheep/calculator',
      live: '#',
      category: 'Utility App'
    },
    {
      title: 'E-commerce Product Showcase',
      description: 'A modern e-commerce product showcase with product filtering, search functionality, shopping cart, and responsive design. Features product details modal and smooth transitions throughout.',
      technologies: ['React', 'JavaScript', 'CSS', 'State Management', 'Responsive Design'],
      github: 'https://github.com/kavinpradheep/ecommerce-showcase',
      live: '#',
      category: 'E-commerce'
    }
  ]

  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2 className="section-title">Featured Projects</h2>
        <p className="section-subtitle">Explore my latest work and creative projects</p>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={project.title} className="project-card" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="project-header">
                <div className="project-category">{project.category}</div>
                <h3>{project.title}</h3>
                <div className="project-links">
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-link github">
                    <span>GitHub</span>
                  </a>
                  {project.live !== '#' && (
                    <a href={project.live} target="_blank" rel="noopener noreferrer" className="project-link live">
                      <span>Live Demo</span>
                    </a>
                  )}
                </div>
              </div>
              <p className="project-description">{project.description}</p>
              <div className="project-technologies">
                {project.technologies.map((tech) => (
                  <span key={tech} className="tech-tag">{tech}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
