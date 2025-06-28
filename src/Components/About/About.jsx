import Container from "../../Hooks/Container";
import SectionTitle from "../../Hooks/SectionTitle/SectionTitle";
import me1 from "../../assets/me1.jpg";
import me2 from "../../assets/me2.jpg";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";

import { EffectCards } from "swiper/modules";
import Education from "../Education/Education";

// Import AOS for scroll animation
import { useEffect } from "react";
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
    <div id="about" className="min-h-screen">
      <SectionTitle title={"About Me"}></SectionTitle>
      <div className="mt-10">
        <Container>
          <div
            className="flex flex-col-reverse items-center md:flex-row gap-14 md:gap-5"
            data-aos="fade-up"
          >
            {/* Left side: Personal Info */}
            <div className="w-full md:w-3/5">
              <h1 className="text-[#F2F2F2] text-xl md:text-3xl font-bold mb-4">
                Personal Info
              </h1>
              <p className="text-[#B0B0B0] mb-6 leading-relaxed">
                Hello! I’m <span className="text-[#70FF00] font-semibold">Md. Hasanujjaman</span>,
                a passionate <span className="text-[#70FF00] font-semibold"> MERN Stack Developer</span> from Rajshahi, Bangladesh.
                My journey started with curiosity about how websites work, leading me to learn HTML, CSS, JavaScript, and React, later expanding into Node.js and MongoDB.
                I enjoy building clean, interactive, and responsive websites that solve real-world problems and help businesses grow.
                <br />
                <br />
                Outside of coding, I love playing badminton, exploring photography, sketching, and listening to instrumental music while coding.
                I believe in continuous learning and strive to improve every day while building projects that positively impact people.
              </p>
              <div className="lg:grid lg:grid-cols-6">
                <div className="lg:space-y-4 font-bold lg:col-span-2 mr-5 text-[#828282]">
                  <h3>
                    Name:{" "}
                    <span className="text-[#F2F2F2]">Md. Hasanujjaman</span>
                  </h3>
                  <h3>
                    Age: <span className="text-[#F2F2F2]">22</span>
                  </h3>
                  <h3>
                    Address: <span className="text-[#F2F2F2]">Rajshahi</span>
                  </h3>
                </div>
                <div className="lg:space-y-4 font-bold lg:col-span-4 text-[#828282]">
                  <h3>
                    Phone:{" "}
                    <span className="text-[#F2F2F2]">+880 1785 4343 67</span>
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

            {/* Right side: Swiper */}
            <div className="w-3/4 md:w-1/3">
              <Swiper
                effect={"cards"}
                grabCursor={true}
                modules={[EffectCards]}
                className="mySwiper"
              >
                <SwiperSlide>
                  <img
                    className="rounded-md h-[350px] w-full "
                    src={me1}
                    alt="Md. Hasanujjaman Portfolio Photo 1"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    className="rounded-md h-[350px] w-full "
                    src={me2}
                    alt="Md. Hasanujjaman Portfolio Photo 2"
                  />
                </SwiperSlide>
              </Swiper>
            </div>
          </div>

          {/* Education */}
          <div data-aos="fade-up" className="mt-12">
            <Education></Education>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default About;
