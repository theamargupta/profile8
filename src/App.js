import About from "components/About";
import Contact from "components/Contact";
import Footer from "components/Footer";
import Hero from "components/Home";
import Navbar from "components/Nav";
import Projects from "components/Projects";

// App component
const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
};

export default App;
