import waving from "assets/waving.1bae5fcfb51082b5c2b4.png";
import html from "assets/html.6e7b1b463015c056aeb9a624c8dc2876.svg";
import css3 from "assets/css3.9cecabbf6ce67609c48bc4f280a11002.svg";
import javascript from "assets/javascript.de4c2594613e34b15666206bbede7327.svg";
import react from "assets/react.afac9c43724070bf6674f2692b7356a9.svg";
import tailwind from "assets/tailwind.79614a5f61617ba49a0891494521226b.svg";
import materialui from "assets/materialui.svg";
import linkedin from "assets/linkedin.svg";
import github from "assets/github.svg";
import redux from "assets/redux.svg";

const HeroText = ({ title, description, linkedinURL, githubURL }) => {
  return (
    <div className="hero-text">
      <h1>{title}</h1>
      <img src={waving} alt="waving_hand" />
      <p>{description}</p>
      <span>
        <a
          aria-label="linkedin"
          rel="noreferrer"
          target="_blank"
          href={linkedinURL}
        >
          <img src={linkedin} alt="skill-icon" />
        </a>
        <a
          aria-label="github"
          rel="noreferrer"
          target="_blank"
          href={githubURL}
        >
          <img src={github} alt="skill-icon" />
        </a>
      </span>
    </div>
  );
};

const TechStack = ({ technologies }) => {
  return (
    <div className="logos">
      <ul>
        {technologies.map((technology, index) => (
          <li key={index}>
            <img
              src={technology.icon}
              title={technology.title}
              alt="skill-icon"
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

const Hero = () => {
  const techStack = [
    { icon: html, title: "HTML5" },
    { icon: css3, title: "CSS3" },
    { icon: javascript, title: "JavaScript" },
    { icon: react, title: "React" },
    { icon: redux, title: "Redux" },
    { icon: tailwind, title: "Tailwind CSS" },
    { icon: materialui, title: "Material Ui" },
  ];

  return (
    <section id="home" className="hero">
      <div class="mx-auto max-w-[107rem] px-16">
        <div className="content">
          <div className="hero-main">
            <HeroText
              title="Front-End React Developer"
              description="Hi, I'm Amar Gupta. A passionate Front-end React Developer based in Delhi, India. 📍"
              linkedinURL="https://www.linkedin.com/in/theamargupta/"
              githubURL="https://github.com/theamargupta"
            />
            <div className="hero-img"></div>
          </div>
          <div className="skills">
            <p>Tech Stack</p>
            <TechStack technologies={techStack} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
