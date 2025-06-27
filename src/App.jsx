import React, { useState, useEffect } from 'react'
import Header from './components/Header'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Resume from './components/Resume'
import Footer from './components/Footer'
import Certifications from './components/Certifications'
import './App.css'
import { ThemeProvider } from './contexts/ThemeContext'
import FloatingParticles from './components/FloatingParticles';

function App() {
  const [activeSection, setActiveSection] = useState('about')

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['about', 'skills', 'projects','certifications', 'resume']
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element && scrollPosition >= element.offsetTop && scrollPosition < element.offsetTop + element.offsetHeight) {
          setActiveSection(section)
          break
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <ThemeProvider>
      <div className="App">
        <FloatingParticles 
          particleCount={60}
          particleColor="#64ffda"
          particleSize={3}
          speed={0.3}
        />
        <Header activeSection={activeSection} />
        <main>
          <About />
          <Skills />
          <Projects />
          <Certifications />
          <Resume />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  )
}

export default App
