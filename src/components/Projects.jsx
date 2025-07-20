import React, { useState, useEffect } from 'react';
import '../styles/projects.css';
import { FaMapMarkerAlt } from 'react-icons/fa';

const projectData = [
  {
    name: 'Worm Attack',
    location: { top: '20%', left: '40%' },
    description: 'Simulated a self-replicating worm that propagated in a sandboxed network.',
  },
  {
    name: 'Virus Injection',
    location: { top: '60%', left: '70%' },
    description: 'Developed a test virus payload to evaluate antivirus defenses.',
  },
  {
    name: 'API Exploit',
    location: { top: '35%', left: '25%' },
    description: 'Exploited API misconfigurations to extract sensitive data.',
  },
  {
    name: 'XSS Demo',
    location: { top: '50%', left: '50%' },
    description: 'Built a demo site vulnerable to reflected and stored XSS for awareness training.',
  }
];

const Projects = () => {
  const [activeProject, setActiveProject] = useState(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setActiveProject(0); // Auto-open first project
    }, 1500); // Delay for effect
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="project-map">
      <h2 className="project-heading">$ <span className="blink">_</span> Projects Map</h2>

      <div className="map-container three-d-map">
        <div className="grid-overlay"></div>

        {projectData.map((project, index) => (
          <div
            key={index}
            className="map-pin"
            style={project.location}
            onClick={() => setActiveProject(index)}
          >
            <FaMapMarkerAlt className="pin-icon" />

            {activeProject === index && (
              <div className="project-popup">
                <h4>{project.name}</h4>
                <p>{project.description}</p>
                <button onClick={() => setActiveProject(null)}>Close</button>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
