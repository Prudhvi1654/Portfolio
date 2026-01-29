import { useState, useRef } from 'react';

function Header() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const headerRef = useRef(null);

  const handleMouseMove = (e) => {
    if (headerRef.current) {
      const rect = headerRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      
      // Calculate movement (increase for more noticeable effect)
      const deltaX = (e.clientX - centerX) / 15;
      const deltaY = (e.clientY - centerY) / 15;
      
      setMousePosition({ x: deltaX, y: deltaY });
    }
  };

  const handleMouseLeave = () => {
    setMousePosition({ x: 0, y: 0 });
  };

  return (
    <header 
      className="header"
      id="header"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      ref={headerRef}
    >
      <div className="header-container">
        <div 
          className="header-image" 
          style={{
            transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`,
            transition: 'transform 0.2s ease-out'
          }}
        >
          <img 
            src="https://image2url.com/r2/default/images/1769590423007-725b0061-4ca9-4e60-aac1-e23e4df3569b.png" 
            alt="Profile"
            className="profile-img"
          />
          {/* Yellow circle background */}
          <div className="yellow-circle"></div>
          
          {/* Decorative dots - 15 dots total */}
          <div className="dot dot-yellow dot-1"></div>
          <div className="dot dot-blue dot-2"></div>
          <div className="dot dot-yellow dot-3"></div>
          <div className="dot dot-blue dot-4"></div>
          <div className="dot dot-yellow dot-5"></div>
          <div className="dot dot-blue dot-6"></div>
          <div className="dot dot-yellow dot-7"></div>
          <div className="dot dot-blue dot-8"></div>
          <div className="dot dot-yellow dot-9"></div>
          <div className="dot dot-blue dot-10"></div>
          <div className="dot dot-yellow dot-11"></div>
          <div className="dot dot-blue dot-12"></div>
          <div className="dot dot-yellow dot-13"></div>
          <div className="dot dot-blue dot-14"></div>
          <div className="dot dot-yellow dot-15"></div>
        </div>
        
        <div className="header-content">
          <h1>
            Frontend<br/>
            <span className="highlight">Developer</span>
          </h1>
          <p>I'm a B.Tech Computer Science student specializing in AI & ML, with a strong interest in full-stack web development. I focus on building real, working applications, including image-processing web apps and AI-powered chatbots using Python, Flask, MongoDB, and modern front-end technologies.
            I've completed internships in front-end development and AWS cloud computing, where I worked on responsive UI, debugging, and real-world development workflows. Currently, I'm strengthening my JavaScript, React, and backend skills while building production-ready projects and looking for opportunities to grow as a full-stack developer through hands-on engineering work.</p>
        </div>
      </div>
    </header>
  );
}

export default Header;
