import React, { memo } from "react";
import "../styles/footer.scss";
import { IoArrowUp } from "react-icons/io5";

import { Github } from "@icons-pack/react-simple-icons";
import { Linkedin } from "@icons-pack/react-simple-icons";

const Footer = memo(({ handleScroll }) => {
  return (
    <footer className="footer-section">
      <div className="footer-contents">
        <button onClick={() => handleScroll()} className="topButton">
          <IoArrowUp />
        </button>
        <a href="https://www.linkedin.com/in/mahmoud-cali-115ba1211/">
          <Linkedin color="#000" size={30} />
        </a>
        <a href="https://github.com/Mahmoudcali02">
          <Github color="#000" size={30} />
        </a>
      </div>
    </footer>
  );
});

export default Footer;
