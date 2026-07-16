function Projects() {
  const experiences = [
    {
  title: "AI Daily News Summarizer",
  description:
    "AI-powered web application that summarizes lengthy news articles using Ollama and the Qwen2.5 model with a React frontend and Flask backend.",
  tech: [
    "React",
    "Flask",
    "Python",
    "Ollama",
    "Qwen2.5",
    "LoRA"
  ],
  github: "https://github.com/Prudhvi1654/DailyNewsSummarizer",
  live: "https://daily-news-summarizer.vercel.app/",
  image: "/images/news-summarizer.png"
},
    {
      period: "May 2025 - June",
      title: "Cartoonify an Image ",
      description:
        "Developed a web-based image processing application that converts normal images into cartoon-style visuals using OpenCV techniques such as edge detection, color quantization, and image smoothing. Built the backend with Python and Flask and designed a simple, user-friendly frontend using HTML and CSS. This project strengthened my understanding of computer vision concepts and backend–frontend integration.",
      link: "#" // Add your Cartoonify project link here if available
    },
    {
      period: "July 2025 - August",
      title: "AI Chatbot",
      description:
        "Built an AI-powered chatbot application using Flask as the backend and Gemini API for generating intelligent responses. Implemented MongoDB to store chat history and user data. Designed a responsive frontend using HTML, CSS, and JavaScript to ensure smooth user interaction. This project improved my skills in API integration, database handling, and full-stack application flow.",
      link: "https://github.com/sasidharbmms/Chatbot-AI-one"
    }
  ];

  return (
    <section id="experience" className="section reveal">
      <h2>Projects</h2>
      {experiences.map((exp, index) => (
        <a 
          key={index} 
          href={exp.link} 
          target="_blank" 
          rel="noopener noreferrer"
          className="experience-item hover-glow"
          style={{ textDecoration: 'none', color: 'inherit', display: 'block' }}
        >
          <div className="experience-period">{exp.period}</div>
          <div className="experience-title">{exp.title}</div>
          <div className="experience-description">{exp.description}</div>
        </a>
      ))}
    </section>
  );
}

export default Projects;