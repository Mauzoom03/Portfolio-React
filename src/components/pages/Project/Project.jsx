import React, { useEffect, useState } from "react";
import "./_project.scss";
import DemoUpcode from "../../images/CodeHUBAzulTransparente.png";
import VideoDemo from "../../images/Demo Upcode.mp4";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";
function Project() {
  const [showDemo, setShowDemo] = useState(false);

  const handleClick = () => {
    setShowDemo(!showDemo);
  };

  return (
    <div className="container-project" id="projects">
      <div className="text-container">
        <h1 className="title">Proyectos Profesionales</h1>
      </div>
      <div className="container-projects">
        <img className={`Demo ${showDemo ? "hidden" : ""}`} src={DemoUpcode} />
        <video
          className={`DemoVideo ${showDemo ? "" : "hidden"}`}
          src={VideoDemo}
          autoPlay
          loop
          muted
        ></video>
        <div className="container-description">
          <h2>
            UP CODE es una herramienta esencial para desarrolladores de frontend
            que simplifica la creación de elementos para aplicaciones y sitios
            web. Con UP CODE, puedes diseñar fácilmente formularios de contacto
            para tu negocio o personalizar el aspecto de tu blog en cuestión de
            minutos. La herramienta genera automáticamente el código necesario
            para implementar tus diseños.
          </h2>
          <div className="container-btn">
            <button className="btn" onClick={handleClick}>
              {showDemo ? "Ocultar Demo" : "Mostrar Demo"}
            </button>
            <button
              className="overlay-button"
              onClick={() =>
                (window.location.href = "https://upcode-app-front.vercel.app/")
              }
            >
              SitioWeb <FontAwesomeIcon icon={faExternalLinkAlt} />
            </button>
          </div>
          <h2 className="onprocess">
            "Tengo varios proyectos en desarrollo, algunos de los cuales aún no
            han sido subidos, y otros que están en proceso"
          </h2>
        </div>
      </div>
    </div>
  );
}

export default Project;
