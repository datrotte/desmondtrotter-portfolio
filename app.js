function Nav() {
  const [active, setActive] = React.useState("intro");

  React.useEffect(() => {
    const handleScroll = () => {
      const sections = ["intro", "skills", "experience", "projects", "contact"];
      const scrollPos = window.scrollY + window.innerHeight / 3;

      for (let id of sections) {
        const section = document.getElementById(id);
        if (section) {
          if (
            scrollPos >= section.offsetTop &&
            scrollPos < section.offsetTop + section.offsetHeight
          ) {
            setActive(id);
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav>
      <ul>
        <li><a className={active === "intro" ? "active" : ""} href="#intro">Home</a></li>
        <li><a className={active === "skills" ? "active" : ""} href="#skills">Skills</a></li>
        <li><a className={active === "experience" ? "active" : ""} href="#experience">Experience</a></li>
        <li><a className={active === "projects" ? "active" : ""} href="#projects">Projects</a></li>
        <li><a className={active === "contact" ? "active" : ""} href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
}

function App() {
  return (
    <div>
      <Nav />

      {/* Floating shapes */}
      <div className="shape red" style={{top: '50px', left: '10%'}}></div>
      <div className="shape yellow" style={{top: '200px', left: '80%'}}></div>
      <div className="shape black" style={{top: '400px', left: '30%'}}></div>

      {/* Intro */}
      <header id="intro">
        <img src="headshot.jpg" alt="Desmond Trotter Headshot" />
        <div className="intro-text">
          <h1>Desmond Trotter</h1>
          <p>Computer Information Systems Student | Cloud | DevOps | Full-Stack | Project Management</p>
          <a className="resume-link" href="resume.pdf" download>
            Download Resume
          </a>
        </div>
      </header>

      {/* Skills */}
      <section id="skills" className="skills">
        <h2>Skills</h2>
        <div>
          <span className="skill-badge">Cloud Computing</span>
          <span className="skill-badge">DevOps</span>
          <span className="skill-badge">Full-Stack Web Dev</span>
          <span className="skill-badge">Data Analysis</span>
          <span className="skill-badge">Project Management</span>
          <span className="skill-badge">Entrepreneurship</span>
        </div>
      </section>

      {/* Experience */}
      <section id="experience" className="experience">
        <h2>Work Experience</h2>

        <div className="job-card">
          <h3>Cloud Solutions Intern - TechCorp</h3>
          <p><em>June 2024 – August 2024</em></p>
          <ul>
            <li>Designed automated cloud deployment pipelines using AWS and Terraform.</li>
            <li>Implemented CI/CD processes with GitHub Actions and Docker.</li>
            <li>Collaborated with cross-functional teams to improve system reliability.</li>
          </ul>
        </div>

        <div className="job-card">
          <h3>Full-Stack Developer - Startup Inc.</h3>
          <p><em>Jan 2023 – May 2024</em></p>
          <ul>
            <li>Built responsive React + Node.js web applications for clients.</li>
            <li>Integrated REST APIs and database management using SQL and MongoDB.</li>
            <li>Optimized front-end performance for faster page load and UX improvements.</li>
          </ul>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="projects">
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
      <section id="contact" className="contact">
        <h2>Contact</h2>
        <p>Email: desmond.trotter@example.com</p>
        <p>LinkedIn: <a href="https://linkedin.com/in/desmondtrotter" target="_blank">linkedin.com/in/desmondtrotter</a></p>
        <p>GitHub: <a href="https://github.com/datrotte" target="_blank">github.com/datrotte</a></p>
      </section>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
