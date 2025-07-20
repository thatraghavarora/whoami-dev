// src/components/Profile.js
import React, { useEffect, useState } from 'react';
import '../styles/profile.css';

const terminalLines = [
  'Initializing system...',
  'Loading assets...',
  'Connecting to portfolio...',
  'Welcome to Raghav Arora\'s Terminal!',
  '',
  '👨‍💻 Name: Raghav Arora',
  '💼 Profession: Web Developer | Cybersecurity Enthusiast',
  '🌐 Skills: Web Pentesting, API Pentesting, Frontend Dev, WordPress, Freelance Security',
  '📫 Email: raghavarora930@gmail.com',
  '🚀 Portfolio Launch: Successful!',
  '',
  '>> Your journey to my world begins here...',
];

const Profile = () => {
  const [displayedLines, setDisplayedLines] = useState([]);
  const [currentLine, setCurrentLine] = useState(0);
  const [showSplitScreen, setShowSplitScreen] = useState(false);

  useEffect(() => {
    if (currentLine < terminalLines.length) {
      const timeout = setTimeout(() => {
        setDisplayedLines((prev) => [...prev, terminalLines[currentLine]]);
        setCurrentLine((prev) => prev + 1);
      }, 500);
      return () => clearTimeout(timeout);
    } else {
      // After typing ends, trigger layout change after 1s
      const delaySplit = setTimeout(() => {
        setShowSplitScreen(true);
      }, 1000);
      return () => clearTimeout(delaySplit);
    }
  }, [currentLine]);

  return (
    <section className={`profile-section ${showSplitScreen ? 'split' : 'full-terminal'}`}>
      <div className={`terminal-box ${showSplitScreen ? 'slide-left' : ''}`}>
        <div className="terminal-header">~/terminal — hacker-mode</div>
        <div className="terminal-body">
          {displayedLines.map((line, idx) => (
            <div key={idx}>
              <span className="cmd">$ </span>
              <span className="output">{line}</span>
            </div>
          ))}
          {currentLine < terminalLines.length && (
            <div>
              <span className="cmd">$ </span>
              <span className="blink">█</span>
            </div>
          )}
        </div>
      </div>
      <div className={`profile-image ${showSplitScreen ? 'slide-in' : 'hidden'}`}>
        <img src="https://www.shutterstock.com/image-photo/dnipro-ukraine-31-jan-2024-600nw-2432138019.jpg" alt="Raghav Arora" />
      </div>
    </section>
  );
};

export default Profile;
