// components/Stacks.jsx
import React from "react";
import "./Stacks.css";

const Stacks = () => {
  const stacks = [
    { name: "HTML5", icon: "🌐", level: "Advanced" },
    { name: "CSS3", icon: "🎨", level: "Advanced" },
    { name: "JavaScript (ES6+)", icon: "⚡", level: "Intermediate" },
    { name: "React.js", icon: "⚛️", level: "Intermediate" },
    { name: "Node.js", icon: "🟢", level: "Intermediate" },
    { name: "Express.js", icon: "🚀", level: "Intermediate" },
    { name: "Python", icon: "🐍", level: "Intermediate" },
    { name: "Flask", icon: "🔥", level: "Intermediate" },
    { name: "Git & GitHub", icon: "🧩", level: "Proficient" },
    { name: "Networking (CCNA)", icon: "🌐", level: "Proficient" },
  ];

  return (
    <section id="stacks" className="stacks-section">
      <div className="container">
        <h2>My Tech Stacks</h2>
        <p className="intro">
          Here are the technologies and tools I use to design, build, and deploy projects
          efficiently across web, mobile, and backend systems.
        </p>

        <div className="stacks-grid">
          {stacks.map((stack, index) => (
            <div className="stack-card" key={index}>
              <div className="icon">{stack.icon}</div>
              <h3>{stack.name}</h3>
              <p>{stack.level}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stacks;
