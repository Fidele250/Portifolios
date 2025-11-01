// components/Portfolio.jsx
import React from "react";
import "./Portfolio.css";

const Portfolio = () => {
  // Example project data (you can replace these later)
  const projects = [
    {
      title: "Quizify App",
      description: "An interactive quiz web application built with Flask, HTML, and CSS.",
      image: "../src/assets/img5.png",
      link: "https://leopromus.github.io/Quiz4All/"
    },
    {
      title: "Piano ui",
      description: "A personal portfolio built using React and Vite showcasing my work and skills.",
      image: "../src/assets/piano.png",
      link: "https://leopromus.github.io/responsive-piano-project/"
    },
    {
      title: "Cyber Awareness Campaign",
      description: "A web platform to promote cybersecurity awareness and safe online practices.",
      image: "../src/assets/cyber.png",
      link: "#"
    }
    
  ];

  return (
    <section id="portfolio" className="portfolio-section">
      <div className="container">
        <h2>My Portfolio</h2>
        <p className="intro">
          A selection of projects that highlight my skills, creativity, and
          dedication to continuous learning.
        </p>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <div className="project-card" key={index}>
              <img src={project.image} alt={project.title} className="project-image" />
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <a href={project.link} target="_blank" rel="noopener noreferrer" className="btn">
                View Project
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
