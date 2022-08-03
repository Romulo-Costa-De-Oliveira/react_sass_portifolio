import { Link } from "react-router-dom";

const ProjectsRedirection = () => {
  return (
    <section className="projects-container">
      <h2>Projetos</h2>
      <p>
        Clique no botão abaixo para visualizar uma lista de projetos pessoais,
        desenvolvidos com algumas das tecnologias mais usadas do mercado.
      </p>
      <Link to="/projects" className="btn">
        Ver Projetos
      </Link>
    </section>
  );
};

export default ProjectsRedirection;
