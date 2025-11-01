// components/Testimonials.jsx
import React from "react";
import "./Testimonials.css";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Natcom Ltd Supervisor",
      role: "Internship Mentor",
      feedback:
        "Working with Leonce was a pleasure. He’s resourceful, proactive, and always eager to learn new technologies. His dedication during his internship at Natcom was outstanding.",
      image: "../src/assets/img4.png",
    },
    {
      name: "iDebate Bootcamp Trainer",
      role: "Public Speaking Coach",
      feedback:
        "Leonce combines strong technical skills with great communication and teamwork. His growth mindset makes him a valuable asset in any collaborative environment.",
      image: "../src/assets/img1.png",
    },
    {
      name: "Class Representative, ALX SE Program",
      role: "Peer",
      feedback:
        "A dependable teammate and a natural problem solver. Leonce always motivates others and contributes innovative ideas to every project.",
      image: "../src/assets/img2.png",
    },
  ];

  return (
    <section id="testimonials" className="testimonials-section">
      <div className="container">
        <h2>What People Say About Me</h2>
        <p className="intro">
          Here’s what mentors, teammates, and connections have shared about working with me.
        </p>

        <div className="testimonials-grid">
          {testimonials.map((t, index) => (
            <div className="testimonial-card" key={index}>
              <img src={t.image} alt={t.name} className="avatar" />
              <p className="feedback">“{t.feedback}”</p>
              <h3>{t.name}</h3>
              <span>{t.role}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
