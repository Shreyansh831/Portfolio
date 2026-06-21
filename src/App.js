import "./App.css";

function App() {
  return (
    <div className="app">

      {/* Navbar */}
      <nav className="navbar">
        <h1 className="logo">Shreyansh Portfolio</h1>

        <ul>
          <li><a href="#about">About</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#certificates">Certificates</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>

      {/* Hero Section */}
      <section className="hero">

        <img
  src="/profile.jpg"
  alt="profile"
  className="profile-img"
/>
        />

        <h2>
          Hello, I'm <span>Shreyansh Pandey</span>
        </h2>

        <h3 className="typing">
          Java Developer | Python Developer | React Developer
        </h3>

        <p>
          Motivated Computer Science Engineering undergraduate
          passionate about software development, backend systems,
          databases, and modern web technologies.
        </p>

        <div className="hero-buttons">

          <a
            href="/resume.pdf"
            download
            className="btn"
          >
            Download Resume
          </a>

          <a
            href="https://github.com/shreyansh831"
            target="_blank"
            rel="noreferrer"
            className="btn secondary"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/shreyansh-pandey-543089274"
            target="_blank"
            rel="noreferrer"
            className="btn secondary"
          >
            LinkedIn
          </a>

        </div>

      </section>

      {/* About */}
      <section id="about" className="section">
        <h2>About Me</h2>

        <p>
          I am a B.Tech in Computer Science Engineering student and Passionate about software development and web technologies

        </p>
      </section>

      {/* Skills */}
      <section id="skills" className="section dark">
        <h2>Skills</h2>

        <div className="cards">

          <div className="card">
            <h3>Programming</h3>
            <p>
              Java, Python, C++, SQL, JavaScript
            </p>
          </div>

          <div className="card">
            <h3>Concepts</h3>
            <p>
              OOP, Data Structures, DBMS,
              SDLC, STLC, Debugging
            </p>
          </div>

          <div className="card">
            <h3>Database</h3>
            <p>
              SQL, PostgreSQL,
              Joins, Queries, Indexing
            </p>
          </div>

          <div className="card">
            <h3>Tools</h3>
            <p>
              Git, GitHub,
              VS Code, JDK
            </p>
          </div>

          <div className="card">
            <h3>Web / Backend</h3>
            <p>
              REST APIs,
              Client-Server Architecture
            </p>
          </div>

          <div className="card">
            <h3>Other</h3>
            <p>
              Linux Basics
            </p>
          </div>

        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="section">
        <h2>Projects</h2>

        <div className="cards">

          <div className="project-card">
            <h3>Krishak – Smart Agriculture Platform</h3>

            <p>
              Developed a web-based agriculture platform
              using React and Python.
            </p>
          </div>

          <div className="project-card">
            <h3>Multi-threaded Chat Application</h3>

            <p>
              Real-time client-server chat system
              using Java Sockets and multithreading.
            </p>
          </div>

          <div className="project-card">
            <h3>Hotel Booking System</h3>

            <p>
              Database-driven booking system
              using Java and SQL.
            </p>
          </div>

          <div className="project-card">
            <h3>AI Dashboard Disaster Management</h3>

            <p>
              AI-powered dashboard for
              disaster monitoring and management.
            </p>
          </div>

          <div className="project-card">
            <h3>Inventory Management System</h3>

            <p>
              CRUD-based inventory system
              using Python and SQL.
            </p>
          </div>

          <div className="project-card">
            <h3>Task Manager App</h3>

            <p>
              Productivity and task management application.
            </p>
          </div>

        </div>
      </section>

      {/* Certificates */}
      <section id="certificates" className="section dark">
        <h2>Certificates</h2>

        <div className="cards">

          <div className="card">
            <h3>YBI Foundation</h3>

            <p>
              AI & Machine Learning Internship
            </p>
          </div>

          <div className="card">
            <h3>Techno Hack</h3>

            <p>
              Python & Java Development
            </p>
          </div>

          <div className="card">
            <h3>Oracle Certification</h3>

            <p>
              Oracle AI Vector Search Certified Professional
            </p>
          </div>

          <div className="card">
            <h3>TCS Edge & Accenture</h3>

            <p>
              Career Growth Program
            </p>
          </div>

        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="section">
        <h2>Contact</h2>

        <div className="contact-box">

          <p>
            📧 Email:
            sp1256789@gmail.com
          </p>

          <p>
            📱 Phone:
            +91 8318382913
          </p>

          <p>
            📍 Location:
            Varanasi, Uttar Pradesh
          </p>

        </div>
      </section>

      {/* Footer */}
      <footer>
        © 2026 Shreyansh Pandey | All Rights Reserved
      </footer>

    </div>
  );
}

export default App;