/* eslint-disable react/no-unescaped-entities */
import { useEffect } from "react";
import Container from "../../Hooks/Container";
import animation from "../../assets/Animation - 1702242995403.json";
import { useLottie } from "lottie-react";
import resume from "/hasanujjaman's__resume.pdf";
import { FaGithub, FaLinkedin } from "react-icons/fa"; // 🆕 social icons
import { Link } from "react-router-dom";

const Home = () => {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = resume;
    link.download = "hasanujjaman's__resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  useEffect(() => {
    const words = [
      "MERN Stack Developer",
      "Frontend Developer",
      "Full Stack Developer",
    ];
    let part = "";
    let i = 0;
    let offset = 0;
    let forwards = true;
    let skipCount = 0;
    const skipDelay = 15;
    const speed = 100;
    const text = document.getElementById("type-it");

    const interval = setInterval(() => {
      if (!text) return;

      if (forwards) {
        if (offset >= words[i].length) {
          skipCount++;
          if (skipCount === skipDelay) {
            forwards = false;
            skipCount = 0;
          }
        }
      } else {
        if (offset === 0) {
          forwards = true;
          i = (i + 1) % words.length;
        }
      }

      part = words[i].substr(0, offset);
      if (text) text.textContent = part;

      if (skipCount === 0) {
        if (forwards) {
          offset++;
        } else {
          offset--;
        }
      }
    }, speed);

    return () => clearInterval(interval);
  }, []);

  const options = {
    animationData: animation,
    loop: true,
  };

  const { View } = useLottie(options);

  return (
    <div id="home">
      <Container>
        <div className="flex flex-col md:flex-row justify-between mt-20 text-[#F2F2F2] items-center gap-10">
          {/* left side */}
          <div className="space-y-4">
            <h4 className="text-2xl md:text-4xl font-bold">Hi I'm</h4>
            <h2 className="text-[#06b6d4] font-bold text-3xl md:text-6xl">
              Md. Hasanujjaman
            </h2>
            <div>
              <div
                className="h-[24px] pb-10 font-bold text-xl"
                id="type-it"
              ></div>
            </div>
            <div className="text-[#828282]">
              “I am a passionate web developer, crafting responsive and
              user-friendly websites to bring <br /> ideas to life. This
              portfolio showcases my projects, skills, and journey in the world
              of web development.”
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <button
                  onClick={handleDownload}
                  className="btn font-bold bg-transparent text-[#06b6d4] flex items-center gap-3 border-2 px-3 rounded-md"
                >
                  Download Resume
                </button>
                <Link
                  to={
                    "https://drive.google.com/file/d/1pRs8Hrm2kNP9tcg8lCm7Jby43kyjV6-f/view?usp=sharing"
                  }
                  target="_blank"
                  className="btn font-bold bg-transparent text-[#06b6d4] flex items-center gap-3 border-2 px-3 rounded-md"
                >
                  Preview Resume
                </Link>
              </div>

              {/* 🆕 Social icons */}
              <div className="flex items-center gap-5 text-2xl px-2 mt-2">
                <a
                  href="https://github.com/hasan6t7"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#F2F2F2] hover:text-[#06b6d4] transition-colors duration-300"
                >
                  <FaGithub />
                </a>
                <a
                  href="https://www.linkedin.com/in/hasanujjaman-hasan"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#F2F2F2] hover:text-[#06b6d4] transition-colors duration-300"
                >
                  <FaLinkedin />
                </a>
              </div>
            </div>
          </div>

          {/* right side */}
          <div>{View}</div>
        </div>
      </Container>
    </div>
  );
};

export default Home;
