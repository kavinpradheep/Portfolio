import React, { useEffect, useRef, useState } from 'react';

const FloatingParticles = ({ 
  particleCount = 50, 
  particleSize = 2,
  speed = 0.5 
}) => {
  const canvasRef = useRef(null);
  const animationRef = useRef(null);
  const particlesRef = useRef([]);
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  // Detect theme changes
  useEffect(() => {
    const detectTheme = () => {
      const backgroundColor = window.getComputedStyle(document.body).backgroundColor;
      const rgb = backgroundColor.match(/\d+/g);
      if (rgb) {
        const brightness = (parseInt(rgb[0]) * 299 + parseInt(rgb[1]) * 587 + parseInt(rgb[2]) * 114) / 1000;
        setIsDarkTheme(brightness < 128);
      }
    };

    detectTheme();
    const observer = new MutationObserver(detectTheme);
    observer.observe(document.body, { attributes: true, attributeFilter: ['class', 'style'] });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const createParticles = () => {
      const particles = [];
      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * speed,
          vy: (Math.random() - 0.5) * speed,
          size: Math.random() * particleSize + 1,
          opacity: Math.random() * 0.5 + 0.2
        });
      }
      particlesRef.current = particles;
    };

    const updateParticles = () => {
      particlesRef.current.forEach(particle => {
        particle.x += particle.vx;
        particle.y += particle.vy;

        // Wrap around screen edges
        if (particle.x < 0) particle.x = canvas.width;
        if (particle.x > canvas.width) particle.x = 0;
        if (particle.y < 0) particle.y = canvas.height;
        if (particle.y > canvas.height) particle.y = 0;
      });
    };

    const drawParticles = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      const lightColor = '#2563eb'; // Blue for light theme
      const darkColor = '#64ffda';  // Cyan for dark theme
      const currentColor = isDarkTheme ? darkColor : lightColor;
      
      particlesRef.current.forEach(particle => {
        // Main particle with strong visibility
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        
        // High contrast fill
        const opacity = Math.max(particle.opacity, 0.8);
        ctx.fillStyle = `${currentColor}${Math.floor(opacity * 255).toString(16).padStart(2, '0')}`;
        ctx.fill();
        
        // Add contrasting outline
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.strokeStyle = isDarkTheme ? '#ffffff40' : '#00000040';
        ctx.lineWidth = 1;
        ctx.stroke();
      });
    };

    const animate = () => {
      updateParticles();
      drawParticles();
      animationRef.current = requestAnimationFrame(animate);
    };

    resizeCanvas();
    createParticles();
    animate();

    window.addEventListener('resize', () => {
      resizeCanvas();
      createParticles();
    });

    return () => {
      cancelAnimationFrame(animationRef.current);
      window.removeEventListener('resize', resizeCanvas);
    };
  }, [particleCount, particleSize, speed, isDarkTheme]);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: -1
      }}
    />
  );
};

export default FloatingParticles;
