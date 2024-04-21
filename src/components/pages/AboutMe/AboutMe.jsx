import React, { useEffect, useRef } from "react";
import "./_aboutMe.scss";
import gsap from "gsap";
function AboutMe() {
  const images = [
    {
      id: 1,
      imageUrl: "/src/components/images/JS.png",
      title: "JavaScript",
    },
    {
      id: 2,
      imageUrl: "/src/components/images/React.png",
      title: "React",
    },
    {
      id: 3,
      imageUrl: "/src/components/images/Angular.png",
      title: "Angular",
    },
    {
      id: 4,
      imageUrl: "/src/components/images/html.png",
      title: "Html",
    },
    {
      id: 5,
      imageUrl: "/src/components/images/css.png",
      title: "Css",
    },
    {
      id: 6,
      imageUrl: "/src/components/images/SASS.png",
      title: "Sass",
    },
    {
      id: 7,
      imageUrl: "/src/components/images/NextJs.png",
      title: "NextJs",
    },
    {
      id: 8,
      imageUrl: "/src/components/images/TS.png",
      title: "TypeScript",
    },
    {
      id: 9,
      imageUrl: "/src/components/images/php.png",
      title: "PHP",
    },
    {
      id: 10,
      imageUrl: "/src/components/images/sql.png",
      title: "SQL",
    },
    {
      id: 11,
      imageUrl: "/src/components/images/Node.png",
      title: "NodeJs",
    },
    {
      id: 12,
      imageUrl: "/src/components/images/Github.png",
      title: "GitHub",
    },
    {
      id: 13,
      imageUrl: "/src/components/images/MongoDb.png",
      title: "MongoDB",
    },
    {
      id: 14,
      imageUrl: "/src/components/images/symfony.png",
      title: "Symfony",
    },
  ];

  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;

    function handleScroll() {
      const scrollTop = window.scrollY;
      const windowHeight = window.innerHeight;
      const containerTop = container.offsetTop;

      // Calcula la distancia entre la parte superior del contenedor y el borde superior de la ventana
      const distanceFromTop = containerTop - scrollTop;

      // Aplica animaciones en función de la dirección del scroll
      if (distanceFromTop <= windowHeight * 0.5) {
        gsap.to(container, {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power4.out",
        });
      } else {
        gsap.to(container, {
          opacity: 0,
          y: 100,
          duration: 1,
          ease: "power4.out",
        });
      }
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="container-aboutMe" id="about-me" ref={containerRef}>
      <div className="info-container-title">
        <h1>Sobre mi.</h1>
        <div />
        <div className="container-img">
          <img
            className="aboutmeImg"
            src="/src/components/images/AboutMeImg.png"
            alt="aboutme"
          />
          <div className="text-container">
            <h2 className="subtitle">
              Mi nombre completo es Mauro Quintana Hernandez.Desde mi infancia,
              descubrí no solo mi afinidad por pasar tiempo frente al ordenador,
              sino también mi curiosidad innata por comprender el porqué de las
              cosas y cómo se estructuraban.
            </h2>
            <h2 className="subtitle">
              Esta fascinación fue lo que me impulsó hacia el mundo del
              desarrollo. Me distingo por mi simpatía y mi habilidad para
              resolver problemas de cualquier índole. Considero que el trabajo
              en equipo es fundamental y forma parte integral de mi día a día.
              Actualmente, me desempeño como freelancer con el objetivo de
              adquirir la máxima experiencia posible y crecer constantemente en
              mi desarrollo profesional. Ubicado en Madrid, España📍.
            </h2>
          </div>
        </div>
      </div>
      <div className="container-skills-title">
        <h1 className="skills-title">Habilidades</h1>
      </div>
      <div className="container-skills-img">
        <ul className="list-skills">
          {images.map((image) => (
            <li key={image.id}>
              <div className="card">
                <div className="card-inner">
                  <div className="card-front">
                    <img src={image.imageUrl} alt={image.title} />
                  </div>
                  <div className="card-back">
                    <h2>{image.title}</h2>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div className="container-aptitudes">
        <div className="aptitudes">
          <h3>Idiomas</h3>
          <div className="progress-bar">
            <div className="progress espanol" style={{ width: "80%" }}>
              Español (100%)
            </div>
          </div>
          <div className="progress-bar">
            <div className="progress ingles" style={{ width: "70%" }}>
              Inglés (90%)
            </div>
          </div>
          <div className="progress-bar">
            <div className="progress frances" style={{ width: "40%" }}>
              Francés (40%)
            </div>
          </div>
        </div>
        <div className="aptitudes">
          <h3>Habilidades Sociales</h3>
          <div className="progress-bar">
            <div className="progress javascript" style={{ width: "80%" }}>
              Comunicación (100%)
            </div>
          </div>
          <div className="progress-bar">
            <div className="progress react" style={{ width: "80%" }}>
              Trabajo en Equipo (100%)
            </div>
          </div>
          <div className="progress-bar">
            <div className="progress react" style={{ width: "70%" }}>
              Resolucion de problemas (90%)
            </div>
          </div>
        </div>
      </div>

      <div className="container-formacion-title ">
        <h1 className="formacion-title">Formación</h1>
      </div>
      <div className="container-formacion-img">
        <img
          className="formacionImg"
          src="https://www.todoenlaces.com/wp-content/uploads/job-manager-uploads/featured_image/2023/08/LOGOTIPO_UPGRADE-01.png"
          alt="formacion"
        />
        <h2>Bootcamp Desarrollo FullStack de 6 meses de duración (2023)</h2>
      </div>
    </div>
  );
}

export default AboutMe;
