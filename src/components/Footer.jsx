import linkedin from "assets/linkedin.svg";

import github from "assets/github.svg";
const Footer = () => {
  return (
    <footer>
      <div class="mx-auto max-w-[107rem] px-16">
        <div class="footerc">
          <h3>Copyright © 2023. All rights are reserved</h3>
          <div class="footerc__socials">
            <a
              aria-label="linkedin"
              target="_blank"
              rel="noreferrer"
              href="https://www.linkedin.com/in/theamargupta/"
              style={{ background: "#fff", padding: "2px" }}
            >
              <img src={linkedin} alt="skill-icon" />
            </a>
            <a
              aria-label="github"
              target="_blank"
              rel="noreferrer"
              href="https://github.com/theamargupta"
              style={{ background: "#fff", padding: "2px" }}
            >
              <img src={github} alt="skill-icon" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
