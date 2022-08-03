import React from "react";

import "../../styles/components/maincontent.sass";
import AboutContainer from "../AboutContainer";
import ProjectsRedirection from "../ProjectsRedirect";
import TechnologiesContainer from "../TecnologiesContainer";

const MainContent = () => {
  return (
    <main id="main-content">
      <AboutContainer />
      <TechnologiesContainer />
      <ProjectsRedirection />
    </main>
  );
};

export default MainContent;
