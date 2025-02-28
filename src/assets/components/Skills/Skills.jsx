import  { useEffect, useRef } from "react";
import "./Skills.css";

const skillsData = [
  { skill: "REACTJS", progress: 80 },
  { skill: "JAVASCRIPT", progress: 75 },
  { skill: "TYPESCRIPT", progress: 65 },
  { skill: "CSS", progress: 60 },
  { skill: "TAILWINDCSS", progress: 80 },
  { skill: "PHOTOSHOP", progress: 70 },
  { skill: "REACTJS", progress: 70 },
  { skill: "HTML", progress: 45 },
  { skill: "UI DESIGN", progress: 45 },
  { skill: "UX DESIGN", progress: 45 },
];

const Skills = () => {
  const progressBarsRef = useRef([]);

  useEffect(() => {
    // Animate progress bars on mount
    progressBarsRef.current.forEach((bar) => {
      if (bar) {
        bar.style.width = bar.getAttribute("data-progress") + "%";
      }
    });
  }, []);

  return (
    <div className="skills-container" id="skills">
      <h2>Professional Skills</h2>
      <div className="skills-background">
        {skillsData.map((skill, index) => (
          <div key={index} className="skill-item">
            <div className="name-perc">
            <div className="skill-name">{skill.skill}</div>
            <div className="progress-percentage">{skill.progress}%</div>
            </div>
            <div className="progress-bar">
              <div
                ref={(el) => (progressBarsRef.current[index] = el)}
                className="progress-bar-fill"
                data-progress={skill.progress}
                style={{ width: "0%" }} // Start at 0% for animation
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;