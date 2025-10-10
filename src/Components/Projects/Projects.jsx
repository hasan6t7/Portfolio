
import Container from "../../Hooks/Container";
import SectionTitle from "../../Hooks/SectionTitle/SectionTitle";
import { NavLink } from "react-router-dom";
import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaNodeJs,
  FaJs,
  FaGitAlt,
} from "react-icons/fa";
import {
  SiFirebase,
  SiExpress,
  SiMongodb,
  SiTailwindcss,
  SiAxios,
} from "react-icons/si";
import { motion } from "framer-motion";



const projectsData = [
  {
    title: "Work Sync",
    description:
      "Work Sync helps businesses manage employees efficiently — from payroll and attendance to performance tracking, all in one intuitive dashboard.",
    image: "https://i.ibb.co.com/spnpV7YK/work-sync.png",
    tech: [
      "html",
      "css",
      "javascript",
      "react",
      "firebase",
      "nodejs",
      "express",
      "mongodb",
      "tailwind",
    ],
    liveLink: "https://work-syncc.web.app/",
    githubLink: "https://github.com/hasan6t7/work-sync-client",
  },
  {
    title: "E-Services",
    description:
      "E-Services is a digital service platform where users can explore and manage various online services. Create an account to add, edit, or manage products with real-time alerts and a smooth mobile-friendly experience.",
    image: "https://i.ibb.co.com/Zp8jtsjS/e-services.png",

    tech: [
      "html",
      "css",
      "javascript",
      "react",
      "firebase",
      "nodejs",
      "express",
      "mongodb",
      "axios",
      "tailwind",
    ],
    liveLink: "https://e-services-02.web.app/",
    githubLink: "https://github.com/hasan6t7/e-services",
  },
  {
    title: "Roomie-Fi",
    description:
      "Roomie-Fi helps you manage roommate finding and bookings effortlessly. Create an account, explore available services, track your schedules, and enjoy instant notifications for successful actions.",
    image: "https://i.ibb.co.com/F4mfjBSV/roomie-fi.png",
    tech: [
      "html",
      "css",
      "javascript",
      "react",
      "firebase",
      "nodejs",
      "express",
      "mongodb",
      "axios",
      "tailwind",
    ],
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
    <div id="projects" className="py-16 ">
      <SectionTitle title="Projects" />
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              className="bg-[#1e1e1e] rounded-xl shadow-lg hover:shadow-[#06b6d4]/50 transition-shadow duration-300 flex flex-col"
            >
              <img
                src={project?.image}
                alt={project.title}
                className="rounded-t-xl  w-full h-52 md:h-60"
              />
              <div className="p-5 flex flex-col flex-1">
                <h3 className="text-xl md:text-2xl font-bold text-[#06b6d4] mb-2">
                  {project.title}
                </h3>
                <p className="text-[#b3b3b3] text-sm md:text-base mb-4 flex-1">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-3 mb-4 text-xl">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="hover:scale-110 transition-transform duration-200"
                    >
                      {techIcons[tech]}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3 mt-auto">
                  <NavLink
                    to={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button className="btn btn-sm btn-outline text-[#06b6d4] border-white">
                      Live Link
                    </button>
                  </NavLink>
                  <NavLink
                    to={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button className="btn btn-sm btn-outline text-[#06b6d4] border-white">
                      Client Code
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
