import { Link } from "react-router-dom";

const ProjectsRedirection = () => {
  return (
    <section className="projects-container">
      <h2>Projetos</h2>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inventore at
        rem fugit provident dolorum exercitationem, ducimus quisquam ratione
        cumque reiciendis accusamus totam, veniam iusto numquam distinctio.
        Dignissimos labore aspernatur pariatur?
      </p>
      <Link to="/projects" className="btn">
        Ver Projetos
      </Link>
    </section>
  );
};

export default ProjectsRedirection;
