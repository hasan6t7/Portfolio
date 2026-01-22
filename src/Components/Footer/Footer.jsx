import { motion } from "framer-motion";
import {
  FaLinkedin,
  FaGithub,
  FaEnvelope,
  FaMapMarkerAlt,
  FaArrowUp,
  FaHeart,
} from "react-icons/fa";
import { SiGmail } from "react-icons/si";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const projects = [
    { name: "Work-Sync", url: "https://work-syncc.web.app/" },
    { name: "E-Services", url: "https://e-services-02.web.app/" },
    { name: "Roomie-Fi", url: "https://roomie-fi.web.app/" },
  ];

  const socialLinks = [
    {
      icon: <FaLinkedin />,
      label: "LinkedIn",
      url: "https://www.linkedin.com/in/hasanujjaman/",
      color: "hover:text-blue-400",
    },
    {
      icon: <FaGithub />,
      label: "GitHub",
      url: "https://github.com/hasan6t7",
      color: "hover:text-purple-400",
    },
    {
      icon: <SiGmail />,
      label: "Gmail",
      url: "mailto:hasan.hasanujjaman@gmail.com",
      color: "hover:text-red-400",
    },
  ];

  const legal = ["Terms of Use", "Privacy Policy", "Cookie Policy"];

  return (
    <footer className="relative bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-slate-300 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -left-40 w-80 h-80 bg-cyan-500/5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-500/3 rounded-full blur-3xl"></div>
      </div>

      {/* Decorative Top Border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Main Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-1"
          >
            <motion.h2
              className="text-3xl md:text-4xl font-black mb-3 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              Md. Hasanujjaman
            </motion.h2>
            <p className="text-slate-400 mb-6 font-medium">
              Full Stack Web Developer
            </p>

            {/* Contact Info */}
            <div className="space-y-3 text-sm">
              <motion.a
                href="https://maps.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 group cursor-pointer"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                <div className="p-2 bg-cyan-500/10 rounded-lg group-hover:bg-cyan-500/20 transition-colors">
                  <FaMapMarkerAlt className="text-cyan-400" />
                </div>
                <span className="group-hover:text-cyan-400 transition-colors">
                  Chapainawabganj, Rajshahi
                </span>
              </motion.a>

              <motion.a
                href="mailto:hasan.hasanujjaman4368@gmail.com"
                className="flex items-center gap-3 group cursor-pointer"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                <div className="p-2 bg-blue-500/10 rounded-lg group-hover:bg-blue-500/20 transition-colors">
                  <FaEnvelope className="text-blue-400" />
                </div>
                <span className="group-hover:text-blue-400 transition-colors break-all">
                  hasan.hasanujjaman4368@gmail.com
                </span>
              </motion.a>
            </div>
          </motion.div>

          {/* Projects */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h3 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
              <div className="w-1 h-6 bg-gradient-to-b from-cyan-500 to-blue-500 rounded-full"></div>
              Projects
            </h3>
            <ul className="space-y-3">
              {projects.map((project, index) => (
                <motion.li
                  key={index}
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-2 text-slate-400 hover:text-cyan-400 transition-colors"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-slate-600 group-hover:bg-cyan-400 transition-colors"></div>
                    {project.name}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Social Media */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
              <div className="w-1 h-6 bg-gradient-to-b from-cyan-500 to-blue-500 rounded-full"></div>
              Connect
            </h3>
            <ul className="space-y-3">
              {socialLinks.map((social, index) => (
                <motion.li
                  key={index}
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <a
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`group flex items-center gap-3 text-slate-400 ${social.color} transition-colors`}
                  >
                    <div className="text-xl">{social.icon}</div>
                    {social.label}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Legal */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h3 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
              <div className="w-1 h-6 bg-gradient-to-b from-cyan-500 to-blue-500 rounded-full"></div>
              Legal
            </h3>
            <ul className="space-y-3">
              {legal.map((item, index) => (
                <motion.li
                  key={index}
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <button className="group flex items-center gap-2 text-slate-400 hover:text-cyan-400 transition-colors">
                    <div className="w-1.5 h-1.5 rounded-full bg-slate-600 group-hover:bg-cyan-400 transition-colors"></div>
                    {item}
                  </button>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="relative mb-8">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-slate-800"></div>
          </div>
          <div className="relative flex justify-center">
            <div className="bg-slate-900 px-6">
              <div className="flex items-center gap-2 text-slate-500">
                <div className="w-8 h-px bg-gradient-to-r from-transparent to-cyan-500"></div>
                <FaHeart className="text-cyan-500 animate-pulse" />
                <div className="w-8 h-px bg-gradient-to-l from-transparent to-cyan-500"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-sm text-slate-500 text-center md:text-left"
          >
            © {new Date().getFullYear()} Md. Hasanujjaman.
         
          </motion.p>

          {/* Scroll to Top Button */}
          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.1, rotate: 5 }}
            whileTap={{ scale: 0.9 }}
            className="group relative"
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full opacity-50 group-hover:opacity-100 blur transition-opacity"></div>
            <div className="relative bg-slate-900 border border-slate-800 group-hover:border-cyan-500/50 rounded-full p-3 transition-colors">
              <FaArrowUp className="text-cyan-400 text-lg" />
            </div>
          </motion.button>
        </div>

        {/* Decorative Bottom Element */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mt-8 h-1 bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent rounded-full"
        ></motion.div>
      </div>
    </footer>
  );
};

export default Footer;