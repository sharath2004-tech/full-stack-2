function Projects() {
  const projects = [
    {
      title: "Corporate Expense Tracker with Role-Based Approval System",
      date: "Aug 2025",
      description: "Full-stack expense management system with JWT authentication and role-based access control.",
      technologies: ["React", "TypeScript", "Node.js", "Express", "MongoDB", "JWT"],
      highlights: [
        "Integrated Tesseract.js OCR to automatically extract receipt data, reducing manual entry time by 70%",
        "Implemented multi-currency support with real-time exchange rates for 6+ currencies",
        "Role-based access control for Admin, Manager, and Employee users"
      ],
      color: "#4A90E2"
    },
    {
      title: "Stock Market Forecasting using Machine Learning",
      date: "July 2025",
      description: "Interactive stock price prediction app with ML models and real-time financial data.",
      technologies: ["Python", "Streamlit", "Machine Learning", "OpenAI", "Ollama"],
      highlights: [
        "Developed candlestick chart visualizations for stock analysis",
        "Integrated Ollama and OpenAI chatbot for interactive query support",
        "Applied data preprocessing & feature engineering for large financial datasets"
      ],
      color: "#50C878"
    },
    {
      title: "YouTube Trending Video Analysis using Machine Learning",
      date: "July 2025",
      description: "Real-time trending video analysis and view count forecasting system.",
      technologies: ["Python", "Pandas", "Scikit-learn", "XGBoost", "Streamlit", "YouTube API"],
      highlights: [
        "Collected and processed real-time trending video data using YouTube Data API",
        "Implemented Linear Regression, Random Forest, and XGBoost models",
        "XGBoost achieved the highest accuracy for view count forecasting"
      ],
      color: "#FF6B6B"
    }
  ];

  const styles = {
    container: {
      padding: "40px 60px",
      maxWidth: "1200px",
      margin: "0 auto",
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      backgroundColor: "#f5f7fa"
    },
    header: {
      textAlign: "center",
      marginBottom: "50px"
    },
    title: {
      fontSize: "2.5rem",
      fontWeight: "700",
      color: "#2c3e50",
      marginBottom: "10px",
      letterSpacing: "-0.5px"
    },
    subtitle: {
      fontSize: "1.1rem",
      color: "#7f8c8d",
      fontWeight: "400"
    },
    projectsGrid: {
      display: "grid",
      gap: "30px"
    },
    projectCard: {
      backgroundColor: "white",
      borderRadius: "12px",
      padding: "30px",
      boxShadow: "0 4px 6px rgba(0,0,0,0.07), 0 1px 3px rgba(0,0,0,0.06)",
      transition: "transform 0.3s ease, box-shadow 0.3s ease",
      cursor: "pointer",
      border: "1px solid #e1e8ed"
    },
    projectHeader: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "flex-start",
      marginBottom: "15px",
      flexWrap: "wrap",
      gap: "10px"
    },
    projectTitle: {
      fontSize: "1.4rem",
      fontWeight: "600",
      color: "#2c3e50",
      margin: "0",
      flex: "1"
    },
    projectDate: {
      fontSize: "0.9rem",
      color: "#95a5a6",
      fontWeight: "500",
      padding: "5px 12px",
      backgroundColor: "#ecf0f1",
      borderRadius: "20px"
    },
    projectDescription: {
      fontSize: "1rem",
      color: "#555",
      lineHeight: "1.6",
      marginBottom: "20px"
    },
    techStack: {
      display: "flex",
      flexWrap: "wrap",
      gap: "8px",
      marginBottom: "20px"
    },
    techBadge: {
      padding: "5px 12px",
      borderRadius: "20px",
      fontSize: "0.85rem",
      fontWeight: "500",
      color: "white"
    },
    highlightsList: {
      listStyle: "none",
      padding: "0",
      margin: "0"
    },
    highlightItem: {
      padding: "10px 0 10px 25px",
      position: "relative",
      color: "#555",
      fontSize: "0.95rem",
      lineHeight: "1.5"
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <h1 style={styles.title}>My Projects</h1>
        <p style={styles.subtitle}>Recent work and achievements in software development and machine learning</p>
      </div>

      <div style={styles.projectsGrid}>
        {projects.map((project, index) => (
          <div 
            key={index}
            style={styles.projectCard}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-5px)";
              e.currentTarget.style.boxShadow = "0 10px 20px rgba(0,0,0,0.1), 0 3px 6px rgba(0,0,0,0.08)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "0 4px 6px rgba(0,0,0,0.07), 0 1px 3px rgba(0,0,0,0.06)";
            }}
          >
            <div style={styles.projectHeader}>
              <h2 style={styles.projectTitle}>{project.title}</h2>
              <span style={styles.projectDate}>{project.date}</span>
            </div>
            
            <p style={styles.projectDescription}>{project.description}</p>

            <div style={styles.techStack}>
              {project.technologies.map((tech, idx) => (
                <span 
                  key={idx}
                  style={{
                    ...styles.techBadge,
                    backgroundColor: project.color,
                    opacity: 0.9
                  }}
                >
                  {tech}
                </span>
              ))}
            </div>

            <ul style={styles.highlightsList}>
              {project.highlights.map((highlight, idx) => (
                <li 
                  key={idx}
                  style={styles.highlightItem}
                >
                  <span style={{
                    position: "absolute",
                    left: "0",
                    color: project.color,
                    fontWeight: "bold",
                    fontSize: "1.2rem"
                  }}>✓</span>
                  {highlight}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
