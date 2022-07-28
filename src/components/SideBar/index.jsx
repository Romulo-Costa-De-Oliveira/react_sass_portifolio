import React from "react";
import SocialNetworks from "../SocialNetworks";
import Avatar from "../../assets/eu.jpeg";
import InformationContainer from "../InformationContainer";

import "../../styles/components/sidebar.sass";

const SideBar = () => {
  return (
    <aside id="sidebar">
      <img src={Avatar} alt="Romulo Costa" />
      <p className="title">Desenvolvedor</p>
      <SocialNetworks />
      <InformationContainer />
      <a className="btn" href="#">
        Download Currículo
      </a>
    </aside>
  );
};

export default SideBar;
