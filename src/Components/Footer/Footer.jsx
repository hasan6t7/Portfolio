import {
  FaLinkedin,
  FaGithub,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import Container from "../../Hooks/Container";

const Footer = () => {
  return (
    <footer className="bg-[#111111] text-[#b3b3b3] py-12">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 text-sm md:text-base">
          {/* About / Logo */}

          {/* Projects */}
          <div className="">
            <h3 className="text-[#06b6d4] font-semibold mb-3">Projects</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://work-syncc.web.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#06b6d4] transition-colors duration-200"
                >
                  Work-Sync
                </a>
              </li>
              <li>
                <a
                  href="https://e-services-02.web.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#06b6d4] transition-colors duration-200"
                >
                  E-Services
                </a>
              </li>
              <li>
                <a
                  href="https://roomie-fi.web.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#06b6d4] transition-colors duration-200"
                >
                  Roomie-Fi
                </a>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div className="">
            <h3 className="text-[#06b6d4] font-semibold mb-3">Social Media</h3>
            <ul className="flex flex-col gap-2">
              <li>
                <a
                  href="https://www.linkedin.com/in/hasanujjaman/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-[#06b6d4] transition-colors duration-200"
                >
                  <FaLinkedin /> LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/hasan6t7"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-[#06b6d4] transition-colors duration-200"
                >
                  <FaGithub /> GitHub
                </a>
              </li>
              <li>
                <a
                  href="mailto:hasan.hasanujjaman@gmail.com"
                  className="flex items-center gap-2 hover:text-[#06b6d4] transition-colors duration-200"
                >
                  <SiGmail /> Gmail
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div className="">
            <h3 className="text-[#06b6d4] font-semibold mb-3">Legal</h3>
            <ul className="space-y-2">
              <li className="hover:text-[#06b6d4] cursor-pointer transition-colors duration-200">
                Terms of Use
              </li>
              <li className="hover:text-[#06b6d4] cursor-pointer transition-colors duration-200">
                Privacy Policy
              </li>
              <li className="hover:text-[#06b6d4] cursor-pointer transition-colors duration-200">
                Cookie Policy
              </li>
            </ul>
          </div>
          <div className="flex flex-col items-start ">
            <h2 className="text-2xl md:text-3xl font-bold text-[#06b6d4] mb-2">
              Md. Hasanujjaman
            </h2>
            <p className="mb-3">Full Stack Web Developer</p>

            <p className="flex items-center gap-2 hover:text-[#06b6d4] transition-colors duration-200">
              <FaMapMarkerAlt className="text-[#06b6d4]" /> Chapainawabganj,
              Rajshahi
            </p>
            <p className="flex items-center gap-2 mb-1 hover:text-[#06b6d4] transition-colors duration-200">
              <FaEnvelope className="text-[#06b6d4]" />{" "}
              hasan.hasanujjaman4368@gmail.com
            </p>
          </div>
        </div>
      </Container>

      {/* Bottom */}
      <div className="mt-10 border-t border-gray-800 pt-6 text-center text-sm text-[#828282]">
        © {new Date().getFullYear()} Md. Hasanujjaman. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
