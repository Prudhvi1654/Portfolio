import GlowCard from "./GlowCard";

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
      
      <hr className="section-sep" />

      <div className="experience-section" style={{marginTop: '24px'}}>
        <h3 className="section-subtitle">Experience</h3>
        {/* Single experience entry copied from LinkedIn */}
        <div style={{marginTop: '12px'}}>
          <GlowCard>
            <div className="experience-item">
              <div className="experience-period">Jun 2025 - Jul 2025 · 2 mos</div>
              <div className="experience-title">Front-end development intern — Cognifyz Technologies · Internship</div>
              <div className="experience-description" style={{marginTop: '8px'}}>
                📌 Working on front-end development tasks assigned by Cognifyz. 📌 Gaining hands-on experience in HTML, CSS, JavaScript, and responsive web design. 📌 Submitting tasks through video demonstrations and project uploads. 📌 Promoting work via LinkedIn using #cognifyz #cognifyzTech #cognifyzTechnologies.
              </div>
              <div className="experience-description" style={{marginTop: '10px', fontWeight: 600, color: '#c2a4ff'}}>
                Skills: Front-End Development · HTML · Cascading Style Sheets (CSS) · JavaScript · Responsive Web Design
              </div>
            </div>
          </GlowCard>
        </div>
      </div>
    </section>
  );
}

export default About;