import { useState } from 'react';

function Skills() {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  
  const softwares = [
    { name: "HTML", icon: "HTML", url: "https://developer.mozilla.org/en-US/docs/Web/HTML" },
    { name: "CSS", icon: "CSS", url: "https://developer.mozilla.org/en-US/docs/Web/CSS" },
    { name: "JavaScript", icon: "JS", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
    { name: "React", icon: "⚛", url: "https://react.dev/" },
    { name: "Python", icon: "Py", url: "https://www.python.org/" },
    { name: "Flask", icon: "Fl", url: "https://flask.palletsprojects.com/" },
    { name: "MongoDB", icon: "DB", url: "https://www.mongodb.com/" },
    { name: "OpenCV", icon: "CV", url: "https://opencv.org/" },
    { name: "Node.js", icon: "Nd", url: "https://nodejs.org/" },
    { name: "GitHub", icon: "GH", url: "https://github.com/" },
    { name: "AWS", icon: "AWS", url: "https://aws.amazon.com/" }
  ];

  return (
    <section className="section reveal" id="skills">
      <h2 className="techstack-title">
        <span className="techstack-my">MY</span>
        <span className="techstack-text">TECHSTACK</span>
      </h2>
      <div className="software-grid">
        {softwares.map((software, index) => (
          <a 
            key={index} 
            href={software.url} 
            target="_blank" 
            rel="noopener noreferrer"
            className="software-item hover-glow"
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <div 
              className="software-icon" 
              style={{
                transform: hoveredIndex === index ? 'scale(1.15) rotate(12deg)' : 'scale(1) rotate(0deg)',
              }}
            >
              {software.icon}
            </div>
            <div className="software-name">{software.name}</div>
          </a>
        ))}
      </div>
    </section>
  );
}

export default Skills;