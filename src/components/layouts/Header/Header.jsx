import React, { useState, useEffect } from "react";
import logo from "../../images/Mauro q.h.png";
import "./_header.scss";
import { Link as ScrollLink } from "react-scroll";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={`App ${isDarkMode ? 'dark-mode' : ''}`}>
      <header className={`container-logo ${isScrolled ? "scrolled" : ""}`}>
        <img className="logo" src={logo} alt="Logo" />
        <nav className="container-links">
          <ul className="links">
            <li>
              <ScrollLink to="main" smooth={true} duration={500}>
                Inicio
              </ScrollLink>
            </li>
            <li>
              <ScrollLink to="about-me" smooth={true} duration={500}>
                Sobre Mi
              </ScrollLink>
            </li>
            <li>
              <ScrollLink to="projects" smooth={true} duration={500}>
                Proyectos
              </ScrollLink>
            </li>
            <button className="toggle-dark-mode" onClick={toggleDarkMode}>
              <FontAwesomeIcon icon={isDarkMode ? faSun : faMoon} />
            </button>
          </ul>
        </nav>
      </header>
    </div>
  );
}

export default Header;
