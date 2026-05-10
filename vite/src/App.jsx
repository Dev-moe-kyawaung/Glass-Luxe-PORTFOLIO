import React from "react";

const projects = [
  {
    title: "E-Commerce Platform",
    period: "01/2018 - present",
    desc: "Full-stack application with real-time inventory management and payment gateway integration.",
    tech: "React, Node.js, MongoDB, Redis, AWS",
    link: "https://github.com/Moe-KyawAung/ecommerce",
  },
  {
    title: "AI-Powered Analytics Dashboard",
    period: "01/2022 - present",
    desc: "Real-time data visualization with ML predictions and automated PDF report export.",
    tech: "Python, FastAPI, React, PostgreSQL, Docker",
    link: "https://github.com/Moe-KyawAung/analytics-dashboard",
  },
];

const skills = [
  "Kotlin",
  "Jetpack",
  "Firebase",
  "REST APIs",
  "Clean Architecture",
  "UI/UX",
  "Debugging",
  "GitHub",
];

const certs = [
  "C Programming Certification Course",
  "Computer Vision using Python Certification Course",
  "Cyber Security Certification Course",
  "CSS Certification Course",
  "Growth Hacking Certification Course",
  "Google Shopping Ads Certification Course",
  "AWS Certified Solutions Architect - Professional",
  "Google Cloud Professional Cloud Architect",
  "Kubernetes Certified Application Developer (CKAD)",
];

export default function App() {
  return (
    <main className="page">
      <section className="hero">
        <div className="hero-top">
          <span className="badge">Android Developer</span>
          <span className="badge subtle">Premium Pro Max</span>
        </div>

        <div className="hero-grid">
          <div className="hero-content">
            <h1>Moe Kyaw Aung</h1>
            <p className="role">Kotlin • Jetpack • Firebase • REST APIs</p>
            <p className="summary">
              Android Developer based in Tachileik, Myanmar, with nearly two years of experience
              building reliable, secure, and user-friendly Android applications.
            </p>

            <div className="contact">
              <a href="mailto:moekyawaung@engineer.com">moekyawaung@engineer.com</a>
              <a href="tel:+959889000889">+959889000889</a>
              <a href="https://www.linkedin.com/in/moe-kyaw-aung-2653093a1" target="_blank" rel="noopener">LinkedIn</a>
            </div>

            <div className="actions">
              <a className="primary" href="https://github.com/Dev-moe-kyawaung/" target="_blank" rel="noopener">GitHub</a>
              <a className="secondary" href="https://gravatar.com/moekyawaung2026" target="_blank" rel="noopener">Gravatar</a>
            </div>
          </div>

          <div className="hero-card">
            <div className="glass-panel">
              <p className="mini-label">Profile Snapshot</p>
              <ul>
                <li>Location: Tachileik, Myanmar</li>
                <li>DoB: 05.07.2000</li>
                <li>Role: Android Developer</li>
                <li>Focus: Secure and scalable mobile apps</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section-grid">
        <article className="card">
          <h2>Experience</h2>
          <h3>Android Developer</h3>
          <p className="muted">(Freelance / Company / Self-Projects)</p>
          <p className="period">2023 – Present</p>
          <ul>
            <li>Developed and maintained Android applications with focus on performance and usability.</li>
            <li>Implemented clean UI designs and ensured smooth user experiences.</li>
            <li>Debugged and optimized applications to improve stability and efficiency.</li>
            <li>Worked with APIs and integrated third-party libraries.</li>
            <li>Followed best practices for secure and scalable Android development.</li>
          </ul>
        </article>

        <article className="card">
          <h2>Education</h2>
          <h3>Bachelor of Computer Science</h3>
          <p className="muted">University of Computer Studies, Yangon</p>
          <p className="period">2014 - 2018</p>
        </article>

        <article className="card">
          <h2>Projects</h2>
          {projects.map((p) => (
            <div className="project" key={p.title}>
              <div className="project-head">
                <h3>{p.title}</h3>
                <span>{p.period}</span>
              </div>
              <p>{p.desc}</p>
              <p className="tech"><strong>Tech Stack:</strong> {p.tech}</p>
              <a href={p.link} target="_blank" rel="noopener">GitHub</a>
            </div>
          ))}
        </article>
      </section>

      <section className="section-grid bottom">
        <article className="card">
          <h2>Skills</h2>
          <div className="chips">
            {skills.map((s) => (
              <span key={s}>{s}</span>
            ))}
          </div>
        </article>

        <article className="card">
          <h2>Certifications</h2>
          <ul>
            {certs.map((c) => (
              <li key={c}>{c}</li>
            ))}
          </ul>
        </article>
      </section>
    </main>
  );
}
