import React from 'react';
import '../styles/skill.css';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const skills = [
  { name: 'HTML', percent: 95 },
  { name: 'CSS', percent: 90 },
  { name: 'JavaScript', percent: 85 },
  { name: 'React.js', percent: 80 },
  { name: 'Cyber Security', percent: 75 },
  { name: 'API Pentesting', percent: 70 },
];

const Skills = () => {
  return (
    <section className="skills-section">
      {/* Terminal-style heading */}
      <div className="skills-heading">
        <span>$</span> Skills
      </div>

      {/* Optional terminal-like intro (mobile friendly) */}
      <div className="terminal-skill">
        <div className="terminal-header">Terminal Output</div>
        <div className="terminal-content">
          <div><span className="cmd">> show skills</span></div>
          <div className="output">✔ Loaded 6 core skills successfully</div>
        </div>
      </div>

      <div className="skills-content">
        {/* Progress Bar Skills */}
        <div className="progress-bars">
          {skills.map((skill, index) => (
            <div key={index} className="skill-bar">
              <div className="skill-name">{skill.name}</div>
              <div className="bar-container">
                <div
                  className="bar-fill"
                  style={{ '--percent': `${skill.percent}%` }}
                >
                  <span className="percent-label">{skill.percent}%</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Circular Meter Skills */}
        <div className="circular-meters">
          {skills.slice(0, 4).map((skill, index) => (
            <div key={index} className="meter">
              <div className="circle">
                <CircularProgressbar
                  value={skill.percent}
                  text={`${skill.percent}%`}
                  styles={buildStyles({
                    pathColor: '#00ffcc',
                    textColor: '#00ffcc',
                    trailColor: 'rgba(255, 255, 255, 0.1)',
                    textSize: '16px',
                  })}
                />
              </div>
              <div className="label">
                {skill.name}
                <span className="percent">{skill.percent}%</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
