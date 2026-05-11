import "./App.css";

function App() {
  return (
    <div className="app">

      {/* Navbar */}
      <nav className="navbar">
        <h1>Shreyansh Portfolio</h1>

        <ul>
          <li><a href="#about">About</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <img
          src="https://via.placeholder.com/150"
          alt="profile"
        />

        <h2>Hello, I'm Shreyansh Pandey</h2>

        <p>
          Computer Science Engineering Student | Software Developer
        </p>
      </section>

      {/* About */}
      <section id="about" className="section">
        <h2>About Me</h2>

        <p>
          I am a B.Tech in Computer Science Engineering student and
          Passionate about software development and web technologies.
        </p>
      </section>

      {/* Skills */}
      <section id="skills" className="section dark">
        <h2>Skills</h2>

        <div className="cards">

          <div className="card">
            <h3>Programming</h3>
            <p>Java, Python, C++, SQL, JavaScript</p>
          </div>

          <div className="card">
            <h3>Concepts</h3>
            <p>OOP, Data Structures, DBMS, SDLC, STLC, Debugging</p>
          </div>

          <div className="card">
            <h3>Database</h3>
            <p>SQL, PostgreSQL, Joins, Queries, Indexing</p>
          </div>

          <div className="card">
            <h3>Tools</h3>
            <p>Git, GitHub, VS Code, JDK</p>
          </div>

          <div className="card">
            <h3>Web / Backend</h3>
            <p>REST APIs, Client-Server Architecture</p>
          </div>

          <div className="card">
            <h3>Other</h3>
            <p>Linux Basics</p>
          </div>

        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="section">
        <h2>Projects</h2>

        <div className="cards">

          <div className="project-card">
            <h3>Krishak – Smart Agriculture Platform</h3>
            <p>Built using React and Python.</p>
          </div>

          <div className="project-card">
            <h3>Multi-threaded Chat Application</h3>
            <p>Real-time chat application using Java Sockets.</p>
          </div>

          <div className="project-card">
            <h3>Hotel Booking System</h3>
            <p>Hotel booking system using Java and SQL.</p>
          </div>

          <div className="project-card">
            <h3>AI Dashboard Disaster Management</h3>
            <p>AI-powered disaster management dashboard.</p>
          </div>

          <div className="project-card">
            <h3>Inventory Management System</h3>
            <p>Inventory management project using Python and SQL.</p>
          </div>

          <div className="project-card">
            <h3>Task Manager App</h3>
            <p>Task management and productivity application.</p>
          </div>

        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="section dark">
        <h2>Contact</h2>

        <p>Email: sp1256789@gmail.com</p>
        <p>Phone: 8318382913</p>
      </section>

    </div>
  );
}

export default App;