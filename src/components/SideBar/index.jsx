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
      <a
        className="btn"
        href="https://drive.google.com/file/d/1cJatD1GF4T_ZWj2XzoByCHXmRBhJUI05/view?usp=sharing"
      >
        Download Currículo
      </a>
    </aside>
  );
};

export default SideBar;
