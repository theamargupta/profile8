import workingEmoji from "assets/working-emoji.c5325f52b5be329995a5.png";
import aboutImg from "assets/about-img.62b47e7f183d4b4e9feb.webp";
import text2 from "assets/text2.3d5aa6ba2d0632bb4e0572631c3f9dc2.svg";
const About = () => {
  return (
    <section class="about" id="about">
    <div class="container">
      <div class="about-content">
        <div class="img-side">
          <img src={workingEmoji} alt="emoji" class="work-emoji" />
          <img src={aboutImg} alt="mee" class="img-side__main-img" />
          <span>
            <img src={text2} alt="text" />
          </span>
        </div>
        <div class="text-side">
          <h3>About me</h3>
          <h4>
            A dedicated Front-end Developer <br /> based in Delhi,
            India 📍
          </h4>
          <p>
            As a Junior Front-End Developer, I possess an impressive
            arsenal of skills in HTML, CSS, JavaScript, React, Tailwind,
            and SCSS. I excel in designing and maintaining responsive
            websites that offer a smooth user experience. My expertise
            lies in crafting dynamic, engaging interfaces through writing
            clean and optimized code and utilizing cutting-edge
            development tools and techniques. I am also a team player who
            thrives in collaborating with cross-functional teams to
            produce outstanding web applications.
          </p>
        </div>
      </div>
    </div>
  </section>
  );
};

export default About;
