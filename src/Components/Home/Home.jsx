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
            <h2 className="text-transparent bg-clip-text bg-gradient-to-r from-[#06b6d4] via-[#ffffff] to-[#06b6d4] bg-[length:200%_auto] animate-gradient-move font-bold text-3xl md:text-6xl">
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
          {/* right side */}
          <div className="relative flex items-center justify-center w-[350px] h-[350px] md:w-[700px] md:h-[520px]">
            {/* soft glow background */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-cyan-500/25 to-blue-600/25 blur-2xl"></div>

            {/* static ring */}
            <div className="absolute inset-6 rounded-full border border-cyan-400/40"></div>

            {/* --- Tech Nodes --- */}

            {/* Top - Next.js */}
            <span className="absolute top-0 left-1/2 -translate-x-1/2 text-xs px-3 py-1 rounded-full bg-[#0b1220] border border-cyan-400/40 text-cyan-400">
              Next.js
            </span>

            {/* Top Right - React (NEW) */}
            <span className="absolute top-[15%] right-[15%] text-xs px-3 py-1 rounded-full bg-[#0b1220] border border-[#61dafb]/40 text-[#61dafb]">
              React.js
            </span>
            <span className="absolute top-[15%] left-[15%] text-xs px-3 py-1 rounded-full bg-[#0b1220] border border-[#61dafb]/40 text-[#61dafb]">
              Redux
            </span>

            {/* Right - Node.js */}
            <span className="absolute right-0 top-1/2 -translate-y-1/2 text-xs px-3 py-1 rounded-full bg-[#0b1220] border border-green-400/40 text-green-400">
              Node.js
            </span>

            {/* Bottom Right - Express (NEW) */}
            <span className="absolute bottom-[15%] right-[15%] text-xs px-3 py-1 rounded-full bg-[#0b1220] border border-gray-400/40 text-gray-200">
              Express.js
            </span>
            <span className="absolute bottom-[15%] left-[15%] text-xs px-3 py-1 rounded-full bg-[#0b1220] border border-gray-400/40 text-gray-200">
              Mongoose
            </span>

            {/* Bottom - TypeScript */}
            <span className="absolute bottom-0 left-1/2 -translate-x-1/2 text-xs px-3 py-1 rounded-full bg-[#0b1220] border border-blue-400/40 text-blue-400">
              TypeScript
            </span>

            {/* Left - MongoDB */}
            <span className="absolute left-0 top-1/2 -translate-y-1/2 text-xs px-3 py-1 rounded-full bg-[#0b1220] border border-emerald-400/40 text-emerald-400">
              MongoDB
            </span>

            {/* profile image */}
            <div className="relative z-10 w-[200px] h-[200px] md:w-[360px] md:h-[360px] rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 p-[3px]">
              <img
                src="https://i.ibb.co.com/BHr0k5mq/md-hasanujjaman.jpg"
                alt="Hasanujjaman Hasan"
                className="w-full h-full rounded-full object-cover bg-[#0b1220]"
              />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Home;
