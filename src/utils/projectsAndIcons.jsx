import React from "react";
import {
  DiJava,
  DiHtml5,
  DiCss3,
  DiJavascript1,
  DiNodejsSmall,
  DiMysql,
  DiReact,
  DiMongodb,
  DiBootstrap,
  DiFirebase,
} from "react-icons/di";

const i = [
  <DiJava id="java" color="#339999" />,
  <DiMongodb id="mongo" color="#3FA037" />,
  <DiBootstrap id="bootstrap" color="#563d7c" />,
  <DiFirebase id="firebase" color="#FF9800" />,
  <DiHtml5 id="html" color="#E44D26" />,
  <DiCss3 id="css" color="#1572B6" />,
  <DiJavascript1 id="javascript" color="#F0DB4F" />,
  <DiNodejsSmall id="nodejs" color="#83CD29" />,
  <DiMysql id="mysql" color="#00618A" />,
  <DiReact id="react" color="#61DAFB" />,
];
const ProjectList = [
  {
    id: "dsmeta",
    name: "DsMeta",
    type: "Link",
    link: "https://dsmeta-rco.netlify.app",
    techicons: [i[9], i[5], i[4], i[6], i[8], i[0]],
    descripition:
      "Sistema desenvolvido com Java(Spring Boot) no back-end, com disparo de mensagens via Twilio e front-end desenvolvido em React.",
    status: "Completo",
  },
  {
    id: "sisrepo",
    name: "SisRepo",
    type: "Code",
    link: "https://github.com/Romulo-Costa-De-Oliveira/SIS-REPO",
    techicons: [i[9], i[5], i[4], i[6], i[1], i[7]],
    descripition:
      "Cadastro de repositórios do GitHub separados por usuário. Front-End desenvolvido utilizando a biblioteca React.Js do Javascript e Back-End construído em Node.Js e MongoDB como database.",
    status: "Implementando o AuthContext...",
  },
  {
    id: "siscrm",
    name: "SisCrm",
    type: "Code",
    link: "https://github.com/Romulo-Costa-De-Oliveira/SIS-CRM",
    techicons: [i[9], i[5], i[4], i[6], i[3]],
    descripition:
      "Front-end desenvolvido em React.Js para cadastro gerenciamento de usuários fazendo bom uso dos Hooks e utilizando Authentication e FireStore Database do Firebase.",
    status: "Completo",
  },
  {
    id: "dsmovie",
    name: "DsMovie",
    link: "https://rcodsmovie.netlify.app",
    type: "Link",
    techicons: [i[9], i[5], i[4], i[6], i[8], i[0]],
    descripition:
      "Site para avaliação de filmes desenvolvido em React.js e API em Java(Spring Boot) com cadastro de avaliações em banco de dados.",
    status: "Completo",
  },
  {
    id: "cannisfood",
    name: "CannisFood",
    link: "https://github.com/Romulo-Costa-De-Oliveira/Cannis-Food",
    type: "Code",
    techicons: [i[9], i[2], i[4], i[6], i[1], i[7]],
    descripition:
      "E-commerce para venda de alimentos para pets, com cadastro de lojas parceiras e acompanhamento por meio do Google Maps.",
    status: "Finalizando gateway de pagamento...",
  },
];
export default ProjectList;
