import {
  DiHtml5,
  DiCss3,
  DiJsBadge,
  DiNodejsSmall,
  DiMysql,
  DiReact,
} from "react-icons/di";

import "../../styles/components/technologiescontainer.sass";

const technologies = [
  {
    id: "html",
    name: "HTML5",
    description:
      "HTML5 (Hypertext Markup Language, versão 5) é uma linguagem de marcação para a World Wide Web e é uma tecnologia chave da Internet, originalmente proposto por Opera Software. É a quinta versão da linguagem HTML.",
    icon: <DiHtml5 />,
  },
  {
    id: "css",
    name: "CSS3",
    description:
      "CSS é uma linguagem de estilo, também conhecida como folhas de estilo em cascata. É usada para personalização visual de um site. Ou seja, elas servem para otimizar o conteúdo das páginas e permitir uma apresentação mais amigável para o usuário.",
    icon: <DiCss3 />,
  },
  {
    id: "js",
    name: "JavaScript",
    description:
      "JavaScript é uma linguagem de programação interpretada estruturada, de script em alto nível com tipagem dinâmica fraca e multiparadigma.",
    icon: <DiJsBadge />,
  },
  {
    id: "node",
    name: "Node.js",
    description:
      "Node.js é um software de código aberto, multiplataforma, baseado no interpretador V8 do Google e que permite a execução de códigos JavaScript fora de um navegador web.",
    icon: <DiNodejsSmall />,
  },
  {
    id: "mysql",
    name: "MySQL",
    description:
      "O MySQL é um sistema de gerenciamento de banco de dados, que utiliza a linguagem SQL como interface. É atualmente um dos sistemas de gerenciamento de bancos de dados mais populares da Oracle Corporation.",
    icon: <DiMysql />,
  },
  {
    id: "react",
    name: "React",
    description:
      "O React é uma biblioteca JavaScript de código aberto com foco em criar interfaces de usuário em páginas web. É mantido pelo Facebook, Instagram, outras empresas e uma comunidade de desenvolvedores individuais.",
    icon: <DiReact />,
  },
];

const TechnologiesContainer = () => {
  return (
    <section className="technologies-container">
      <h2>Tecnologias</h2>
      <div className="technologies-grid">
        {technologies.map((tech) => (
          <div className="technology-card" id={tech.id} key={tech.id}>
            {tech.icon}
            <div className="technology-info">
              <h3>{tech.name}</h3>
              <p>{tech.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TechnologiesContainer;
