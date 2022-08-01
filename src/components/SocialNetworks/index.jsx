import React from "react";
import { FaLinkedinIn, FaGithub, FaFacebook } from "react-icons/fa";
import "../../styles/components/socialnetworks.sass";

const socialNetworks = [
  {
    name: "linkedin",
    href: "https://www.linkedin.com/in/romulo-costa-912242220/",
    icon: <FaLinkedinIn />,
  },
  {
    name: "github",
    href: "https://github.com/Romulo-Costa-De-Oliveira",
    icon: <FaGithub />,
  },
  {
    name: "facebook",
    href: "https://www.facebook.com/profile.php?id=100002216410171",
    icon: <FaFacebook />,
  },
];

const SocialNetworks = () => {
  return (
    <section id="social-networks">
      {socialNetworks.map((network) => (
        <a
          href={network.href}
          className="social-btn"
          id={network.name}
          key={network.name}
        >
          {network.icon}
        </a>
      ))}
    </section>
  );
};

export default SocialNetworks;
