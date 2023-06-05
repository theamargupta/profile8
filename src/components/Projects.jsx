import carRentalFull from "assets/car-rental-full.c58b37da333d73238fdd.webp";
import coindomFull from "assets/coindom-full.c5fef9ca2f47e52897f8.png";
import gymateHome from "assets/gymate-home.52d00d03c15713c601c4.webp";
import ecom from "assets/ecom.f10b3cdd799be85c19da.webp";
import { useState } from "react";
const ProjectItem = ({
  title,
  description,
  stack,
  codeLink,
  liveDemoLink,
  imageSrc,
  altText,
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  return (
    <div
      className="pro hovered pro__1"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="pro__img">
        <a target="_blank" href={liveDemoLink} rel="noreferrer">
          <img
            src={imageSrc}
            alt={altText}
            style={{ transform: "translateY(0%)" }}
            className={isHovered ? "scrolling-image" : ""}
          />
        </a>
      </div>
      <div className="pro__text">
        <h3>{title}</h3>
        <p>{description}</p>
        <div className="stack">
          {stack.map((tech, index) => (
            <p key={index}>{tech}</p>
          ))}
        </div>
        <div className="links">
          <a target="_blank" href={codeLink} rel="noreferrer">
            Code <i className="fa-brands fa-github"></i>
          </a>
          <a target="_blank" href={liveDemoLink} rel="noreferrer">
            Live Demo
            <i className="fa-solid fa-arrow-up-right-from-square link-icon"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="project">
      <div className="container">
        <div className="project-content">
          <p>portfolio</p>
          <h3>Each project is a unique piece of development 🧩</h3>
          <div className="projects-grid">
            {projects.map((project, index) => (
              <ProjectItem key={index} {...project} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
const projects = [
  {
    title: "Car Rental 🚗",
    description:
      "A car rental website is an online platform that allows users to rent cars for personal or business use. The website provides an interface for searching, comparing, and reserving cars.",
    stack: ["React", "SCSS"],
    codeLink: "https://github.com/theamargupta",
    liveDemoLink: "https://amargupta.tech",
    imageSrc: carRentalFull,
    altText: "website",
  },
  {
    title: "coindom 🪙",
    description:
      "Coindom is a crypto app that allows users to search for information about various cryptocurrencies in real-time.",
    stack: ["React", "SCSS"],
    codeLink: "https://github.com/theamargupta",
    liveDemoLink: "https://amargupta.tech",
    imageSrc: coindomFull,
    altText: "website",
  },
  {
    title: "gymate 🏋️",
    description:
      "A gym website is a comprehensive resource for fitness information, class schedules, membership options, and tools to help users achieve their fitness goals.",
    stack: ["React", "Tailwind CSS"],
    codeLink: "https://github.com/theamargupta",
    liveDemoLink: "https://amargupta.tech",
    imageSrc: gymateHome,
    altText: "website",
  },
  {
    title: "Raouf Ecommerce 🛒",
    description:
      "With a focus on simplicity and clean design, this store prioritizes user experience, making it easy for customers to find and purchase the products they need.",
    stack: ["React", "Vanila CSS"],
    codeLink: "https://github.com/theamargupta",
    liveDemoLink: "https://amargupta.tech",
    imageSrc: ecom,
    altText: "website",
  },
];
