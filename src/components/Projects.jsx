import React from 'react'
import './Projects.css'

const Projects = () => {
  const projects = [
    
    {
      title: 'Web Saver App',
      description: 'A simple Android app that allows users to save and open websites as app-like experiences using in-app WebView. Perfect for accessing frequently visited sites without cluttering the browser. Features clean UI, smooth performance, and works like an app browser for sites without official Android apps.',
      technologies: ['React Native', 'Expo', 'AsyncStorage', 'React Navigation', 'WebView'],
      github: 'https://github.com/kavinpradheep/WebSaverApp',
      live: 'https://drive.google.com/file/d/1MBGkvNorvmwGn2k9A0txTO21TN2fbV-E/view?usp=sharing',
      category: 'Mobile App'
    },
    {
      title: 'EventEase',
      description: 'A comprehensive event management web application developed as a team project to address issues faced by college clubs and associations in organizing and running events. Features event creation, management tools, and streamlined workflow for educational institutions.',
      technologies: ['HTML', 'CSS', 'JavaScript', 'Web Development', 'Team Collaboration'],
      github: 'https://github.com/kavinpradheep/EVENTEASE2',
      live: 'https://eventease-2.vercel.app/',
      category: 'Web Application'
    },
    {
      title: 'Aventuro\'25',
      description: 'Official website for the ISTE Club event Aventuro\'25, featuring both technical and non-technical events. Implemented an interactive platform with event registration system, schedule management, and enhanced participant engagement features.',
      technologies: ['HTML', 'CSS', 'JavaScript', 'Event Management', 'Interactive Design'],
      github: 'https://github.com/NKBharath/ISTE-AVENTURO-25',
      live: 'https://kec-aventuro25.netlify.app/',
      category: 'Event Platform'
    },
    {
      title: 'Web Saver App - UI/UX Design',
      description: 'A detailed UI/UX design for the Web Saver App, focusing on user-friendly navigation, intuitive interface, and seamless user experience. Includes wireframes, prototypes, and design system for consistent branding.',
      technologies: ['Figma', 'UI/UX Design', 'Prototyping', 'Wireframes', 'Design System'],
      github: 'https://github.com/kavinpradheep/WebSaverApp-UIUX',
      live: 'https://www.figma.com/design/pqtJWLc2oHN8nKhWFBOE9x/Untitled?node-id=0-1&p=f&t=bq7MOVLBDKQm3CuB-0',
      category: 'UI/UX Design'
    },
    {
      title: 'SkillX - UI/UX Design',
      description: 'A comprehensive UI/UX design for SkillX, a skill exchange platform showcased at the Product Expo. Features intuitive interface design, secure profile system, smart skill-matching, and responsive layout for peer-to-peer learning and collaboration.',
      technologies: ['Figma', 'UI/UX Design', 'Prototyping', 'Auto Layout', 'Design System'],
      github: 'https://github.com/kavinpradheep/Skill-X',
      live: 'https://www.figma.com/design/bfYQSe6ZI3Y08YRRGx271D/product_expo?node-id=0-1&t=RGYAK06qtLhwzm1Y-1',
      category: 'UI/UX Design'
    },
    {
      title: 'Online Quiz Platform - UI/UX Design',
      description: 'Interactive UI/UX design for an online quiz conducting platform with MERN stack architecture. Features admin controls for quiz creation, real-time player participation using unique codes, automated scoring, and dynamic leaderboards with responsive design.',
      technologies: ['Figma', 'UI/UX Design', 'Prototyping', 'Responsive Design', 'MERN Stack Design'],
      github: 'https://github.com/kavinpradheep/QuizCraft',
      live: 'https://www.figma.com/design/jJdcxkUbm5AtgyBcTWCdi5/MernStack?node-id=0-1&t=pPgSebDlx8ykZ2nL-1',
      category: 'UI/UX Design'
    },
    {
      title: 'BlinkIT Dashboard',
      description: 'A responsive and interactive dashboard designed for BlinkIT to deliver real-time insights into sales performance. The dashboard helped uncover areas of improvement across product categories, enabling data-driven decision-making for increased operational efficiency and strategic planning.',
      technologies: ['Power BI Desktop', 'DAX', 'Power Query', 'Data Analysis', 'Business Intelligence'],
      github: 'https://github.com/kavinpradheep/BLINKIT-SALES-ANALYSIS',
      live: 'https://app.powerbi.com/groups/me/reports/bd6c5711-3bd4-4d67-9e57-43a14a77a551/f0fe1b726cf4dcde8c05?experience=power-bi',
      category: 'Data Analysis'
    },
    {
      title: 'Bearing Fault Detection System',
      description: 'A comprehensive web application for detecting faults in bearing components using deep learning models. Features dual model analysis with LSTM and CNN-LSTM networks, real-time visualization, and comprehensive diagnostics for industrial applications.',
      technologies: ['Python', 'TensorFlow', 'Streamlit', 'MongoDB', 'Machine Learning', 'Deep Learning'],
      github: 'https://github.com/kavinpradheep/Bearing-Fault-Detection',
      live: 'https://bearing-fault-detection.streamlit.app/',
      category: 'Machine Learning'
    },
    {
    title: 'KEC Hostel Chatbot',
    description: 'An AI-powered chatbot built using LangChain and RAG to answer hostel-related queries. Integrated HuggingFace embeddings, ChromaDB, and Gemini LLM, and deployed via Streamlit for an interactive student experience.',
    technologies: ['Python', 'LangChain', 'HuggingFace', 'ChromaDB', 'Gemini LLM', 'Streamlit', 'RAG', 'NLP'],
    github: 'https://github.com/kavinpradheep/HostelChatbot',
    live: 'https://hostelchatbot.streamlit.app/',
    category: 'AI & NLP'
    },
    {
      title: 'Personal Portfolio',
      description: 'A modern, responsive personal portfolio website built with React. Features smooth animations, dark/light theme toggle, interactive sections, and optimized performance. Showcases projects, skills, and professional experience.',
      technologies: ['React', 'CSS3', 'JavaScript', 'Responsive Design', 'Animations'],
      github: 'https://github.com/kavinpradheep/portfolio',
      live: 'https://kavinpradheep.tech/',
      category: 'Portfolio'
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
