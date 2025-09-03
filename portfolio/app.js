function App() {
  return (
    <div>
      {/* Intro */}
      <header>
        <h1>Jane Doe</h1>
        <p>Computer Information Systems Student | Cloud | DevOps | Full-Stack</p>
        <a className="resume-link" href="Desmond_Trotter.pdf" download>
          Download Resume
        </a>
      </header>

      {/* Experience */}
      <section className="experience">
        <h2>Experience & Skills</h2>
        <ul>
          <li>☁️ Cloud Computing (AWS, Azure, GCP)</li>
          <li>⚙️ DevOps (CI/CD, Docker, Kubernetes)</li>
          <li>🌐 Full-Stack Development (React, Node.js, SQL)</li>
          <li>📊 Data Analysis (Python, R, Power BI)</li>
          <li>📂 Project Management (Agile, Scrum, Kanban)</li>
          <li>💡 Entrepreneurship & Leadership</li>
        </ul>
      </section>

      {/* Projects */}
      <section className="projects">
        <h2>Projects</h2>
        <div className="project-card">
          <h3>Cloud Deployment Automation</h3>
          <p>Automated infrastructure deployment using Terraform and GitHub Actions.</p>
        </div>
        <div className="project-card">
          <h3>Full-Stack Web App</h3>
          <p>React + Node.js application with secure authentication and REST APIs.</p>
        </div>
        <div className="project-card">
          <h3>Data Analytics Dashboard</h3>
          <p>Interactive dashboard built with Python & Power BI for real-time insights.</p>
        </div>
      </section>

      {/* Contact */}
      <section className="contact">
        <h2>Contact</h2>
        <p>Email: jane.doe@example.com</p>
        <p>LinkedIn: <a href="https://linkedin.com/in/janedoe" target="_blank">linkedin.com/in/janedoe</a></p>
        <p>GitHub: <a href="https://github.com/janedoe" target="_blank">github.com/janedoe</a></p>
      </section>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
