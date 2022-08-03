import React from "react";
import ProjectList from "../../utils/projectsAndIcons";
import { AiOutlinePlus } from "react-icons/ai";
import "../../styles/components/projectscontainer.sass";

const projects = ProjectList;

const ProjectsContainer = () => {
  return (
    <div id="projects-content">
      <section className="projects-container">
        <h2>Projetos</h2>
        <div className="projects-grid">
          {projects.map((project) => (
            <div className="project-card" id={project.id} key={project.id}>
              <div className="project-info">
                <h3>{project.name}</h3>
                <p>{project.descripition}</p>
                <small>Status: {project.status}</small>
              </div>

              <div className="tech-info-view">
                <div className="tech">
                  {project.techicons.map((tech) => (
                    <div className="techicon" id={tech.id} key={tech.id}>
                      {tech}
                    </div>
                  ))}
                </div>
                <a className="view-btn" href={project.link}>
                  {project.type}
                </a>
              </div>
            </div>
          ))}
        </div>
        <a
          className="btn-plus"
          href="https://github.com/Romulo-Costa-De-Oliveira?tab=repositories"
        >
          <AiOutlinePlus />
        </a>
      </section>
    </div>
  );
};

export default ProjectsContainer;
