import Container from "../../Hooks/Container";
import SectionTitle from "../../Hooks/SectionTitle/SectionTitle";
import { NavLink } from "react-router-dom";
import { FaHtml5, FaCss3Alt, FaReact, FaNodeJs, FaJs, FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import { SiFirebase, SiExpress, SiMongodb, SiTailwindcss, SiAxios } from "react-icons/si";
import { motion } from "framer-motion";

const projectsData = [
  {
    title: "Work Sync",
    description: "Work Sync helps businesses manage employees efficiently — from payroll and attendance to performance tracking, all in one intuitive dashboard.",
    image: "https://i.ibb.co.com/spnpV7YK/work-sync.png",
    tech: ["html", "css", "javascript", "react", "firebase", "nodejs", "express", "mongodb", "tailwind"],
    liveLink: "https://work-syncc.web.app/",
    githubLink: "https://github.com/hasan6t7/work-sync-client",
  },
  {
    title: "E-Services",
    description: "E-Services is a digital service platform where users can explore and manage various online services. Create an account to add, edit, or manage products.",
    image: "https://i.ibb.co.com/Zp8jtsjS/e-services.png",
    tech: ["html", "css", "javascript", "react", "firebase", "nodejs", "express", "mongodb", "axios", "tailwind"],
    liveLink: "https://e-services-02.web.app/",
    githubLink: "https://github.com/hasan6t7/e-services",
  },
  {
    title: "Roomie-Fi",
    description: "Roomie-Fi helps you manage roommate finding and bookings effortlessly. Explore available services, track your schedules, and enjoy instant notifications.",
    image: "https://i.ibb.co.com/F4mfjBSV/roomie-fi.png",
    tech: ["html", "css", "javascript", "react", "firebase", "nodejs", "express", "mongodb", "axios", "tailwind"],
    liveLink: "https://roomie-fi.web.app/",
    githubLink: "https://github.com/hasan6t7/roomie-fi-client",
  },
];

const techIcons = {
  html: <FaHtml5 className="text-orange-500" />,
  css: <FaCss3Alt className="text-blue-500" />,
  javascript: <FaJs className="text-yellow-400" />,
  react: <FaReact className="text-sky-400" />,
  firebase: <SiFirebase className="text-yellow-300" />,
  nodejs: <FaNodeJs className="text-green-500" />,
  express: <SiExpress className="text-gray-300" />,
  mongodb: <SiMongodb className="text-green-600" />,
  tailwind: <SiTailwindcss className="text-sky-500" />,
  axios: <SiAxios className="text-blue-400" />,
};

const Projects = () => {
  return (
    <div id="projects" className="">
      <SectionTitle title="Projects" />
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-10">
          {projectsData.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="group border border-white/10 rounded-2xl overflow-hidden hover:border-[#06b6d4]/40 transition-all duration-500 flex flex-col shadow-2xl"
            >
              {/* Image with Hover Zoom */}
              <div className="relative overflow-hidden h-56 md:h-64">
                <img
                  src={project?.image}
                  alt={project.title}
                  className="w-full h-full transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#161616] via-transparent to-transparent opacity-60"></div>
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-2xl font-bold text-white group-hover:text-[#06b6d4] transition-colors duration-300 mb-3">
                  {project.title}
                </h3>
                
                <p className="text-gray-400 text-sm md:text-base mb-6 line-clamp-3 leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Icons Stack */}
                <div className="flex flex-wrap gap-3 mb-8">
                  {project.tech.map((tech, i) => (
                    <div
                      key={i}
                      className="p-2 bg-white/5 rounded-lg border border-white/5 hover:bg-white/10 hover:border-[#06b6d4]/50 transition-all text-xl"
                      title={tech}
                    >
                      {techIcons[tech]}
                    </div>
                  ))}
                </div>

                {/* Buttons with Glass effect */}
                <div className="flex items-center gap-4 mt-auto">
                  <NavLink
                    to={project.liveLink}
                    target="_blank"
                    className="flex-1"
                  >
                    <button className="w-full py-2.5 flex items-center justify-center gap-2 bg-[#06b6d4] hover:bg-[#0891b2] text-black font-bold rounded-xl transition-all active:scale-95 text-sm">
                      <FaExternalLinkAlt /> Live Link
                    </button>
                  </NavLink>
                  
                  <NavLink
                    to={project.githubLink}
                    target="_blank"
                    className="flex-1"
                  >
                    <button className="w-full py-2.5 flex items-center justify-center gap-2 bg-white/5 hover:bg-white/10 text-white border border-white/10 rounded-xl transition-all active:scale-95 text-sm">
                      <FaGithub /> Github
                    </button>
                  </NavLink>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Projects;