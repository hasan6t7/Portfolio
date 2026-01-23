import { useEffect } from "react";
import Container from "../../Hooks/Container";
import SectionTitle from "../../Hooks/SectionTitle/SectionTitle";
import { motion } from "framer-motion";
import { FaCode } from "react-icons/fa";

// AOS
import AOS from "aos";
import "aos/dist/aos.css";

const About = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <div id="about" className="min-h-screen mt-16 md:mt-0 overflow-hidden">
      <SectionTitle title={"About Me"} />

      <div className="mt-10">
        <Container>
          <div
            className="flex flex-col items-center md:flex-row-reverse gap-10 md:gap-6"
            data-aos="fade-up"
          >
            {/* LEFT */}
            <div className="w-full md:w-3/5">
              <h1 className="text-[#F2F2F2] text-xl md:text-3xl font-bold mb-4">
                Personal Info
              </h1>

              <p className="text-[#B0B0B0] mb-6 leading-relaxed text-sm sm:text-base">
                Hello! I’m{" "}
                <span className="text-[#06b6d4] font-semibold">
                  Md. Hasanujjaman
                </span>
                , a passionate{" "}
                <span className="text-[#06b6d4] font-semibold">
                  MERN Stack Developer
                </span>{" "}
                from Rajshahi, Bangladesh. My journey started with curiosity
                about how websites work, leading me to learn HTML, CSS,
                JavaScript, and React, later expanding into Node.js and MongoDB.
                <br />
                <br />
                Outside of coding, I love badminton, photography, sketching,
                and instrumental music. I believe in continuous learning and
                building impactful products.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-3 font-bold text-[#828282] text-sm">
                  <h3>
                    Name:{" "}
                    <span className="text-[#F2F2F2]">
                      Md. Hasanujjaman
                    </span>
                  </h3>
                  <h3>
                    Age: <span className="text-[#F2F2F2]">22</span>
                  </h3>
                  <h3>
                    Address:{" "}
                    <span className="text-[#F2F2F2]">Rajshahi</span>
                  </h3>
                </div>

                <div className="space-y-3 font-bold text-[#828282] text-sm">
                  <h3>
                    Phone:{" "}
                    <span className="text-[#F2F2F2]">
                      +880 1785 4343 67
                    </span>
                  </h3>
                  <h3>
                    Email:{" "}
                    <span className="text-[#F2F2F2] break-all">
                      hasan.hasanujjaman4368@gmail.com
                    </span>
                  </h3>
                  <h3>
                    Languages:{" "}
                    <span className="text-[#F2F2F2]">
                      Bangla, English (Basic), Hindi (Basic)
                    </span>
                  </h3>
                </div>
              </div>
            </div>

            {/* RIGHT – VISUAL */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative w-full md:w-2/5 flex justify-center"
            >
              <div className="relative w-[70%] sm:w-[80%] md:w-[90%] max-w-md aspect-square">
                {/* Rings */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0 rounded-full border border-cyan-500/20"
                />
                <motion.div
                  animate={{ rotate: -360 }}
                  transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-6 sm:inset-8 rounded-full border border-blue-500/20"
                />
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-12 sm:inset-16 rounded-full border border-purple-500/20"
                />

                {/* Glow */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-cyan-500/10 via-blue-500/10 to-purple-500/10 blur-3xl animate-pulse" />

                {/* Floating Symbols */}
                {[
                  {
                    text: "</>",
                    pos: "top-4 left-4 sm:top-8 sm:left-8",
                    color: "text-cyan-400/50",
                    delay: 0,
                  },
                  {
                    text: "{ }",
                    pos: "top-4 right-4 sm:top-8 sm:right-8",
                    color: "text-blue-400/50",
                    delay: 0.5,
                  },
                  {
                    text: "[ ]",
                    pos: "bottom-4 left-4 sm:bottom-8 sm:left-8",
                    color: "text-purple-400/50",
                    delay: 1,
                  },
                  {
                    text: "( )",
                    pos: "bottom-4 right-4 sm:bottom-8 sm:right-8",
                    color: "text-pink-400/50",
                    delay: 1.5,
                  },
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    animate={{
                      opacity: [0.3, 1, 0.3],
                      scale: [0.8, 1.2, 0.8],
                      y: [0, -10, 0],
                    }}
                    transition={{
                      duration: 3,
                      delay: item.delay,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className={`absolute ${item.pos} text-2xl sm:text-3xl md:text-4xl font-bold font-mono ${item.color}`}
                  >
                    {item.text}
                  </motion.div>
                ))}

                {/* Center Icon */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.div
                    animate={{ scale: [1, 1.1, 1], rotate: [0, 180, 360] }}
                    transition={{
                      duration: 10,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    <div className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 bg-gradient-to-br from-cyan-500 via-blue-500 to-purple-600 rounded-full flex items-center justify-center shadow-2xl">
                      <FaCode className="text-4xl sm:text-5xl md:text-6xl text-white" />
                    </div>
                  </motion.div>
                </div>

                {/* Orbit Dots */}
                {[...Array(6)].map((_, index) => (
                  <motion.div
                    key={index}
                    animate={{ rotate: 360 }}
                    transition={{
                      duration: 14 + index * 2,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                    className="absolute inset-0"
                  >
                    <div className="absolute top-0 left-1/2 w-2 h-2 bg-cyan-400 rounded-full blur-sm -translate-x-1/2" />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default About;
