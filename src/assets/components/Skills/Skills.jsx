
import { useEffect, useRef } from "react";
import "./Skills.css";

const skillsData = [
  { skill: "REACTJS", progress: 80 }, // Note: Duplicate "REACTJS" entry—fix if intentional
  { skill: "JAVASCRIPT", progress: 75 },
  { skill: "TYPESCRIPT", progress: 65 },
  { skill: "CSS", progress: 60 },
  { skill: "TAILWINDCSS", progress: 80 },
  { skill: "PHOTOSHOP", progress: 70 },
  { skill: "REACTJS", progress: 70 }, // Duplicate—consider removing or renaming
  { skill: "HTML", progress: 45 },
  { skill: "UI DESIGN", progress: 45 },
  { skill: "UX DESIGN", progress: 45 },
];

const Skills = () => {
  const progressBarsRef = useRef([]);
  const containerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            progressBarsRef.current.forEach((bar) => {
              if (bar) {
                const progress = bar.getAttribute("data-progress");
                bar.style.width = `${progress}%`;
              }
            });
            observer.unobserve(entry.target); // Stop observing once animated
          }
        });
      },
      { threshold: 0.5 } // Trigger when 50% of section is visible
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  return (
    <div className="skills-container" id="skills" ref={containerRef}>
      <h2>Professional Skills</h2>
      <div className="skills-background">
        {skillsData.map((skill, index) => (
          <div key={index} className="skill-item" role="progressbar" aria-valuenow={skill.progress} aria-valuemin="0" aria-valuemax="100" aria-label={`${skill.skill} skill level ${skill.progress}%`}>
            <div className="name-perc">
              <div className="skill-name">{skill.skill}</div>
              <div className="progress-percentage">{skill.progress}%</div>
            </div>
            <div className="progress-bar">
              <div
                ref={(el) => (progressBarsRef.current[index] = el)}
                className="progress-bar-fill"
                data-progress={skill.progress}
                style={{ width: "0%" }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;