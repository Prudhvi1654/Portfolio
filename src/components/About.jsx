function About() {
  return (
    <section className="section reveal" id="about">
      <h2>About Me!!</h2>
      <div className="about-grid">
        <div className="about-item">
          <h3>Education</h3>
          <div className="education-item">
            <div className="education-year">2023 - Now</div>
            <div className="education-school">Kakinada Institute of Engineering and Technology for Women</div>
            <div className="education-detail">Artificial Intelligence and Machine Learning</div>
          </div>
        </div>
        
        <div className="about-item">
          <h3>Contact Info</h3>
          <div className="contact-info">
            <strong>📍</strong> <span>Kakinada</span>
          </div>
          <a href="https://www.linkedin.com/in/prudhvi-poojitha-aa15092b3/" target="_blank" rel="noopener noreferrer" className="contact-info contact-link">
            <strong>💼</strong> <span>LinkedIn</span>
          </a>
          <a href="https://github.com/Prudhvi1654" target="_blank" rel="noopener noreferrer" className="contact-info contact-link">
            <strong>📷</strong> <span>Github</span>
          </a>
          <a href="mailto:prudhvi.1008@gmail.com" className="contact-info contact-link">
            <strong>✉️</strong> <span>prudhvi.1008@gmail.com</span>
          </a>
        </div>
      </div>
      
      <div className="experience-section" style={{marginTop: '40px'}}>
        <h3 style={{color: '#c2a4ff', marginBottom: '16px'}}>Experience</h3>
        <div className="experience-item">
          <div className="experience-period">2024 - Present</div>
          <div className="experience-title">Frontend Developer Intern — Company / Project</div>
          <div className="experience-description">Worked on building responsive UI components using React, implemented animations and accessibility improvements, and collaborated with design to ship features.</div>
        </div>

        <div className="experience-item">
          <div className="experience-period">2023 - 2024</div>
          <div className="experience-title">Student / Research Assistant — AI & ML Projects</div>
          <div className="experience-description">Contributed to machine learning experiments, data preprocessing, and created visualization dashboards to present results to stakeholders.</div>
        </div>

        <p style={{marginTop: '16px', color: '#aaa'}}>For full and up-to-date experience details, see my LinkedIn: <a href="https://www.linkedin.com/in/prudhvi-poojitha-aa15092b3/" target="_blank" rel="noopener noreferrer" className="contact-link">LinkedIn profile</a>.</p>
      </div>
    </section>
  );
}

export default About;