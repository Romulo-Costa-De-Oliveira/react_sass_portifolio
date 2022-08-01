import React from "react";
import {
  DiHtml5,
  DiCss3,
  DiJsBadge,
  DiNodejsSmall,
  DiMysql,
  DiReact,
} from "react-icons/di";
import "../../styles/components/projectscontainer.sass";

const projects = [
  { id: "html", name: "HTML5", icon: <DiHtml5 /> },
  { id: "css", name: "CSS3", icon: <DiCss3 /> },
  { id: "js", name: "JavaScript", icon: <DiJsBadge /> },
  { id: "node", name: "Node.js", icon: <DiNodejsSmall /> },
  { id: "mysql", name: "MySQL", icon: <DiMysql /> },
  { id: "react", name: "React", icon: <DiReact /> },
];

const ProjectsContainer = () => {
  return (
    <div id="projects-content">
      {/* <section className="technologies-container">
        <h2>Projetos</h2>
        <div className="technologies-grid">
          {projects.map((tech) => (
            <div className="technology-card" id={tech.id} key={tech.id}>
              {tech.icon}
              <div className="technology-info">
                <h3>{tech.name}</h3>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
              </div>
            </div>
          ))}
        </div>
      </section> */}
      <section className="projects-container">
        <h2>Projetos</h2>
        <div className="projects-grid">
          <div className="project-card">
            <div className="project-info">
              <h3>nome</h3>
              <p>
                Lorem Lorem ipsum dolor sit amet consectetur, adipisicing
                elit.ipsum dolor sit amet consectetur, adipisicing elit.Lorem
                ipsum dolor sit amet consectetur, adipisicing elit.V
              </p>
            </div>
            <div className="tech-info-view">
              <div className="tech">
                <DiHtml5 color="#E44D26" />
                <DiNodejsSmall />
                <DiReact />
              </div>
              
              <a className="view-btn" href="">baixar</a>
            </div>
          </div>

          <div className="project-card">
            <div className="project-info">
              <h3>nome</h3>
              <p>
                Lorem Lorem ipsum dolor sit amet consectetur, adipisicing
                elit.ipsum dolor sit amet consectetur, adipisicing elit.Lorem
                ipsum dolor sit amet consectetur, adipisicing elit.V
              </p>
            </div>
            <div className="tech-info-view">
              <div className="tech">
                <DiHtml5 color="#E44D26" />
                <DiNodejsSmall />
                <DiReact />
              </div>
              
              <a className="view-btn" href="">baixar</a>
            </div>
          </div>

          <div className="project-card">
            <div className="project-info">
              <h3>nome</h3>
              <p>
                Lorem Lorem ipsum dolor sit amet consectetur, adipisicing
                elit.ipsum dolor sit amet consectetur, adipisicing elit.Lorem
                ipsum dolor sit amet consectetur, adipisicing elit.V
              </p>
            </div>
            <div className="tech-info-view">
              <div className="tech">
                <DiHtml5 color="#E44D26" />
                <DiNodejsSmall />
                <DiReact />
              </div>
              
              <a className="view-btn" href="">baixar</a>
            </div>
          </div>

          <div className="project-card">
            <div className="project-info">
              <h3>nome</h3>
              <p>
                Lorem Lorem ipsum dolor sit amet consectetur, adipisicing
                elit.ipsum dolor sit amet consectetur, adipisicing elit.Lorem
                ipsum dolor sit amet consectetur, adipisicing elit.V
              </p>
            </div>
            <div className="tech-info-view">
              <div className="tech">
                <DiHtml5 color="#E44D26" />
                <DiNodejsSmall />
                <DiReact />
              </div>
              
              <a className="view-btn" href="">baixar</a>
            </div>
          </div>

          <div className="project-card">
            <div className="project-info">
              <h3>nome</h3>
              <p>
                Lorem Lorem ipsum dolor sit amet consectetur, adipisicing
                elit.ipsum dolor sit amet consectetur, adipisicing elit.Lorem
                ipsum dolor sit amet consectetur, adipisicing elit.V
              </p>
            </div>
            <div className="tech-info-view">
              <div className="tech">
                <DiHtml5 color="#E44D26" />
                <DiNodejsSmall />
                <DiReact />
              </div>
              
              <a className="view-btn" href="">baixar</a>
            </div>
          </div>
        </div>
      </section>
      
    </div>
  );
};

export default ProjectsContainer;
