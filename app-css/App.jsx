import React from "react";
import "./App.css";

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
      </section>
    </main>
  );
}
