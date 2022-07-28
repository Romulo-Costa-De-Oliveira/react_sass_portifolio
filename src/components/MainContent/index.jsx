import React from "react";

import "../../styles/components/maincontent.sass";
import AboutContainer from "../AboutContainer";
import ProjectsContainer from "../ProjectsContainer";
import TechnologiesContainer from "../TecnologiesContainer";

const MainContent = () => {
  return (
    <main id="main-content">
      <AboutContainer />
      <TechnologiesContainer/>
      <ProjectsContainer/>
    </main>
  );
};

export default MainContent;
