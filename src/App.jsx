import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
// import ScrollUpButton from "./Components/ScrollUpBtn/ScrollUpBtn";
import MySkills from "./Components/MySkills/MySkills";
import Projects from "./Components/Projects/Projects";
import Education from "./Components/Education/Education";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <div className="md:px-9">
          <Home />
          <About />
          {/* Education */}
          <div data-aos="fade-up" className="mt-12">
            <Education />
          </div>
          <MySkills />
          <Projects />
          <Contact />
        </div>
        {/* <ScrollUpButton /> */}
        <Footer />
      </Router>
     
    </>
  );
}

export default App;
