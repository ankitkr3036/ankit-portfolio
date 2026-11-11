import { createRoot } from "react-dom/client";
import React, { useEffect, useState } from "react";
import "./styles.css";

const projects = [
  {
    title: "Smart Study Planner",
    category: "Productivity",
    description:
      "A web-based study planner that helps students organize daily tasks, manage deadlines, track progress, and improve productivity.",
    tech: ["React", "JavaScript", "CSS", "LocalStorage"],
    github: "https://github.com/ankitkr3036/Smart-study-planner",
    demo: "#",
    icon: "📚",
  },
  {
    title: "Attention AI",
    category: "Artificial Intelligence",
    description:
      "An AI-based attention monitoring project designed to analyze attention levels and provide useful insights through intelligent monitoring.",
    tech: ["Python", "AI", "Machine Learning"],
    github: "https://github.com/ankitkr3036/AttentionAI",
    demo: "#",
    icon: "🤖",
  },
];

const skills = [
  {
    title: "Programming Languages",
    items: ["C", "C++", "Python", "JavaScript"],
  },
  {
    title: "Frontend Development",
    items: ["HTML", "CSS", "React"],
  },
  {
    title: "Database",
    items: ["MySQL", "SQL"],
  },
  {
    title: "Tools & Core Subjects",
    items: ["Git", "GitHub", "VS Code", "DSA", "OOP", "DBMS", "OS", "Computer Networks"],
  },
];

const navItems = [
  "Home",
  "About",
  "Skills",
  "Projects",
  "Education",
  "Contact",
];

function App() {
  const [theme, setTheme] = useState(
    () => localStorage.getItem("portfolio-theme") || "dark"
  );

  const [menuOpen, setMenuOpen] = useState(false);
  const [contactStatus, setContactStatus] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Files in Vite's public folder are served from BASE_URL.
  const profileImageUrl = `${import.meta.env.BASE_URL}profilepic.jpeg`;
  const resumeUrl = `${import.meta.env.BASE_URL}Resume%20BTech_CSE1.pdf`;

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("portfolio-theme", theme);
  }, [theme]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.12 }
    );

    document.querySelectorAll(".reveal").forEach((element) => {
      observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  const toggleTheme = () => {
    setTheme((current) => (current === "dark" ? "light" : "dark"));
  };

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="portfolio">
      {/* NAVBAR */}
      <header className="navbar">
        <a href="#home" className="logo" onClick={closeMenu}>
        </a>

        <button
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
        >
          ☰
        </button>

        <nav className={menuOpen ? "nav-links active" : "nav-links"}>
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              onClick={closeMenu}
            >
              {item}
            </a>
          ))}
        </nav>

        <button className="theme-toggle" onClick={toggleTheme}>
          {theme === "dark" ? "☀️ Light" : "🌙 Dark"}
        </button>
      </header>

      <main>
        {/* HOME */}
        <section id="home" className="hero section">
          <div className="hero-content reveal">
            <p className="eyebrow">
              <span className="status-dot"></span>
              AVAILABLE FOR OPPORTUNITIES
            </p>

            <h1>
              Hi, I'm <span>Ankit Kumar</span>
              <br />
              Software Developer
            </h1>

            <p className="hero-description">
              I build responsive web applications and practical software
              solutions. I enjoy solving problems, learning new technologies,
              and creating useful digital experiences.
            </p>

            <div className="hero-buttons">
              <a href="#projects" className="btn btn-primary">
                Explore Projects ↗
              </a>

              <a href="#contact" className="btn btn-outline">
                Contact Me
              </a>
            </div>

            <div className="social-links">
              <a
                href="https://github.com/ankitkr3036"
                target="_blank"
                rel="noreferrer"
              >
                GitHub ↗
              </a>

              <a
                href="https://www.linkedin.com/in/ankit-kumar-2840b1308"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn ↗
              </a>

              <a href="mailto:beastankitpra@gmail.com">
                Email ↗
              </a>
            </div>
          </div>

          <div className="hero-image reveal">
            <div className="image-glow"></div>

            <img
              src={profileImageUrl}
              alt="Ankit Kumar"
              className="profile-photo"
              loading="eager"
              onError={() => {
                console.error("Profile photo could not load:", profileImageUrl);
              }}
              style={{
                display: "block",
                position: "relative",
                zIndex: 2,
                width: "min(310px, 82%)",
                height: "360px",
                objectFit: "cover",
                objectPosition: "center",
                borderRadius: "18px",
              }}
            />

            <div className="floating-card">
              <span>💻</span>
              <div>
                <strong>Software Developer</strong>
                <small>Building & Learning</small>
              </div>
            </div>
          </div>
        </section>

        {/* ABOUT */}
        <section id="about" className="section">
          <div className="section-heading reveal">
            <p className="eyebrow">GET TO KNOW ME</p>
            <h2>About Me</h2>
            <p>Turning ideas into useful digital experiences.</p>
          </div>

          <div className="about-card reveal">
            <div className="about-text">
              <h3>I'm Ankit Kumar</h3>
              <p>
                I am a Computer Science and Engineering student pursuing
                B.Tech (2023–2027). I am interested in software development,
                web technologies, and problem-solving.
              </p>
              <p>
                I enjoy building projects that solve real-world problems.
                My goal is to become a skilled Software Developer and
                contribute to meaningful products.
              </p>
              <div className="resume-buttons">
                <a
                  href={resumeUrl}
                  className="btn btn-primary"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Resume ↗
                </a>

                <a
                  href={resumeUrl}
                  className="btn btn-outline"
                  download="Ankit_Kumar_Resume.pdf"
                >
                  Download Resume ↓
                </a>
              </div>
            </div>

            <div className="about-stats">
              <div className="stat">
                <h3>7.87</h3>
                <p>CGPA / 10</p>
              </div>
              <div className="stat">
                <h3>2023–27</h3>
                <p>B.Tech CSE</p>
              </div>
              <div className="stat">
                <h3>2</h3>
                <p>Featured Projects</p>
              </div>
            </div>
          </div>
        </section>

        {/* SKILLS */}
        <section id="skills" className="section">
          <div className="section-heading reveal">
            <p className="eyebrow">MY TECHNICAL TOOLKIT</p>
            <h2>Skills & Technologies</h2>
            <p>Technologies and concepts I work with.</p>
          </div>

          <div className="skills-grid">
            {skills.map((skill, index) => (
              <div className="skill-card reveal" key={skill.title}>
                <div className="skill-number">
                  {String(index + 1).padStart(2, "0")}
                </div>
                <h3>{skill.title}</h3>
                <div className="skill-tags">
                  {skill.items.map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* PROJECTS */}
        <section id="projects" className="section">
          <div className="section-heading reveal">
            <p className="eyebrow">WHAT I'VE BUILT</p>
            <h2>Featured Projects</h2>
            <p>Selected projects showcasing my development skills.</p>
          </div>

          <div className="projects-grid">
            {projects.map((project, index) => (
              <article className="project-card reveal" key={project.title}>
                <div className="project-top">
                  <div className="project-icon">{project.icon}</div>
                  <span className="project-count">
                    PROJECT 0{index + 1}
                  </span>
                </div>

                <p className="project-category">{project.category}</p>
                <h3>{project.title}</h3>
                <p className="project-description">
                  {project.description}
                </p>

                <div className="project-tech">
                  {project.tech.map((tech) => (
                    <span key={tech}>{tech}</span>
                  ))}
                </div>

                <div className="project-links">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                  >
                    GitHub ↗
                  </a>

                  {project.demo !== "#" && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Live Demo ↗
                    </a>
                  )}
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* EDUCATION */}
        <section id="education" className="section">
          <div className="section-heading reveal">
            <p className="eyebrow">MY BACKGROUND</p>
            <h2>Education & Certifications</h2>
          </div>

          <div className="timeline">
            <div className="timeline-item reveal">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <span>2023 – 2027</span>
                <h3>B.Tech in Computer Science & Engineering</h3>
                <p>Bihar Engineering University, Patna</p>
                <p>CGPA: 7.87 / 10</p>
              </div>
            </div>

            <div className="timeline-item reveal">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <span>2025</span>
                <h3>Cisco AICTE Virtual Internship</h3>
                <p>Virtual Internship Program</p>
              </div>
            </div>

            <div className="timeline-item reveal">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <span>Training</span>
                <h3>Web Development Training</h3>
                <p>Internshala</p>
              </div>
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="section">
          <div className="section-heading reveal">
            <p className="eyebrow">LET'S CONNECT</p>
            <h2>Get In Touch</h2>
            <p>Have an opportunity or an interesting idea? Let's talk.</p>
          </div>

          <div className="contact-card reveal">
            <div className="contact-info">
              <h3>Let's work together.</h3>
              <p>
                I am open to Software Developer, SDE, and Web Development
                opportunities.
              </p>

              <a href="mailto:beastankitpra@gmail.com">
                ✉ beastankitpra@gmail.com
              </a>

              <a
                href="https://github.com/ankitkr3036"
                target="_blank"
                rel="noreferrer"
              >
                GitHub ↗
              </a>

              <a
                href="https://www.linkedin.com/in/ankit-kumar-2840b1308"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn ↗
              </a>
            </div>

            <form
              className="contact-form"
              onSubmit={async (e) => {
                e.preventDefault();

                const form = e.currentTarget;
                setIsSubmitting(true);
                setContactStatus("");

                try {
                  const response = await fetch(
                    "https://formsubmit.co/ajax/beastankitpra@gmail.com",
                    {
                      method: "POST",
                      headers: {
                        "Content-Type": "application/json",
                        Accept: "application/json",
                      },
                      body: JSON.stringify({
                        name: form.name.value,
                        email: form.email.value,
                        message: form.message.value,
                        _subject: "New Portfolio Contact Message",
                      }),
                    }
                  );

                  const result = await response.json();

                  if (!response.ok || String(result.success).toLowerCase() !== "true") {
                    throw new Error(result.message || "Message could not be sent.");
                  }

                  setContactStatus("Message sent successfully! Thank you for contacting me.");
                  form.reset();
                } catch (error) {
                  console.error("Contact form error:", error);
                  setContactStatus(
                    error.message ||
                      "Message could not be sent. Check your internet connection and FormSubmit email activation."
                  );
                } finally {
                  setIsSubmitting(false);
                }
              }}
            >
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                required
              />

              <input
                type="email"
                name="email"
                placeholder="Your Email"
                required
              />

              <textarea
                name="message"
                placeholder="Your Message"
                rows="5"
                required
              ></textarea>

              <button
                type="submit"
                className="btn btn-primary"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Sending..." : "Send Message ↗"}
              </button>

              {contactStatus && (
                <p className="form-status" role="status">
                  {contactStatus}
                </p>
              )}
            </form>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="footer">
        <a href="#home" className="logo">
          Ankit Kumar<span>.</span>
        </a>

        <p>Designed & Built by Ankit Kumar</p>

        <p>© {new Date().getFullYear()} All Rights Reserved.</p>
      </footer>
    </div>
  );
}

export default App;
const root = createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
