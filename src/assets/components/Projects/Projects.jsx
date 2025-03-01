
import { useCallback } from 'react'; // For memoized link handlers
import project1 from '../../images/project1.png';
import project2 from '../../images/project2.png';
import project3 from '../../images/project3.png';
import project4 from '../../images/project4.png';
import project5 from '../../images/project5.png';
import project6 from '../../images/project6.png';
import './Projects.css';

const projects = [
  {
    id: 1,
    title: "E-commerce Website",
    description: "A responsive online store built with React and Node.js, featuring dynamic product listings and a seamless shopping experience.",
    image: project1,
    technologies: ["React", "Node.js", "CSS"],
    link: "https://example.com",
    github: "https://github.com/issamboumanjel",
  },
  {
    id: 2,
    title: "Currency Converter",
    description: "A simple, real-time currency converter built using Vanilla JS, HTML, and CSS for quick and easy currency conversions.",
    image: project2,
    technologies: ["Vanilla Js", "Html", "CSS"],
    link: "https://example.com",
    github: "https://github.com/issamboumanjel",
  },
  {
    id: 3,
    title: "Weather APP",
    description: "A React-based weather app that provides real-time weather updates using a Weather API, with a clean and responsive design.",
    image: project3,
    technologies: ["React", "CSS"],
    link: "https://example.com",
    github: "https://github.com/issamboumanjel",
  },
  {
    id: 4,
    title: "University Website",
    description: "A modern, responsive university platform built with React and Tailwind CSS, showcasing programs and campus information.",
    image: project4,
    technologies: ["React", "Tailwind CSS"],
    link: "https://example.com",
    github: "https://github.com/issamboumanjel",
  },
  {
    id: 5,
    title: "Coffe Website",
    description: "A visually appealing coffee shop website built with React and Node.js, featuring a dynamic menu and interactive design.",
    image: project5,
    technologies: ["React", "Node.js", "CSS"],
    link: "https://example.com",
    github: "https://github.com/issamboumanjel",
  },
  {
    id: 6,
    title: "Quiz APP",
    description: "An interactive quiz application built with React and Node.js, offering dynamic questions and real-time scoring.",
    image: project6,
    technologies: ["React", "Node.js", "CSS"],
    link: "https://example.com",
    github: "https://github.com/issamboumanjel",
  },
];

const Projects = () => {
  const handleLinkClick = useCallback((url) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  }, []);

  return (
    <div className="projects-page" id="projects">
      <h1>My Projects</h1>
      <div className="projects-grid">
        {projects.map((project) => (
          <div key={project.id} className="project-card">
            <img
              src={project.image}
              alt={`${project.title} screenshot`}
              loading="lazy" // Improve performance
            />
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="technologies">
              {project.technologies.map((tech, index) => (
                <span key={index}>{tech}</span>
              ))}
            </div>
            <div className="cardlinks">
              <a
                href={project.link}
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick(project.link);
                }}
                aria-label={`View live demo of ${project.title}`}
              >
                Live Demo
              </a>
              <a
                href={project.github}
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick(project.github);
                }}
                aria-label={`View GitHub repository for ${project.title}`}
              >
                GitHub
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;