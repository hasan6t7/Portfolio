import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaEnvelope, FaCode } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", to: "home" },
    { name: "Skills", to: "skills" },
    { name: "Projects", to: "projects" },
    { name: "About", to: "about" },
  ];

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setActiveSection(id);
      setIsOpen(false);
    }
  };

  return (
    <motion.div
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="sticky top-0 w-full z-[100]"
    >
      {/* Background Blur Layer */}
      <div className={`absolute inset-0 transition-all duration-500 ${
        scrolled 
          ? "bg-slate-950/80 backdrop-blur-2xl border-b border-cyan-500/20 shadow-2xl shadow-cyan-500/5" 
          : "bg-transparent"
      }`}>
        {/* Animated Gradient Border */}
        {scrolled && (
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8 }}
            className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500 to-transparent"
          />
        )}
      </div>

      <nav className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo Section */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => scrollToSection("home")}
            className="group cursor-pointer flex items-center gap-3"
          >
            {/* Animated Logo Icon */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl blur opacity-50 group-hover:opacity-100 transition-opacity"></div>
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
                className="relative w-12 h-12 bg-gradient-to-br from-cyan-500 via-blue-500 to-purple-600 rounded-xl flex items-center justify-center font-black text-white text-xl shadow-lg"
              >
                <FaCode />
              </motion.div>
            </div>

            {/* Logo Text */}
            <div className="">
              <h4 className="text-2xl font-black tracking-tight text-white flex items-center">
                <span className="text-cyan-400 font-mono">&lt;</span>
                <span className="mx-1 bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-300">
                  HASAN
                </span>
                <span className="text-cyan-400 font-mono">/&gt;</span>
              </h4>
              <div className="h-0.5 w-0 group-hover:w-full bg-gradient-to-r from-cyan-500 to-blue-500 transition-all duration-500 rounded-full"></div>
            </div>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-2">
            {navLinks.map((link, index) => (
              <motion.button
                key={link.to}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                onClick={() => scrollToSection(link.to)}
                className="relative group px-5 py-2.5"
              >
                {/* Hover Background */}
                <div className={`absolute inset-0 rounded-lg transition-all duration-300 ${
                  activeSection === link.to
                    ? "bg-cyan-500/20 "
                    : "bg-transparent border border-transparent group-hover:border-cyan-500/30 group-hover:bg-cyan-500/10"
                }`}></div>

                {/* Text */}
                <span className={`relative z-10 font-bold text-sm tracking-wider transition-colors ${
                  activeSection === link.to
                    ? "text-cyan-400"
                    : "text-slate-300 group-hover:text-cyan-400"
                }`}>
                  {link.name}
                </span>

                {/* Active Indicator */}
                {activeSection === link.to && (
                  <motion.div
                    layoutId="activeSection"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </motion.button>
            ))}
          </div>

          {/* Right Section */}
          <div className="flex items-center gap-4">
            {/* Contact Button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection("contact")}
              className="hidden md:flex items-center gap-2 relative group overflow-hidden px-6 py-3 rounded-xl font-bold text-sm"
            >
              {/* Gradient Background */}
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 transition-transform group-hover:scale-110"></div>
              
              {/* Shimmer Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>

              {/* Content */}
              <FaEnvelope className="relative z-10 text-white" />
              <span className="relative z-10 text-white tracking-wider">LET'S TALK</span>
            </motion.button>

            {/* Mobile Menu Toggle */}
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden relative w-10 h-10 flex items-center justify-center rounded-lg border border-cyan-500/30 bg-cyan-500/10 hover:bg-cyan-500/20 transition-colors"
            >
              <div className="w-5 h-4 flex flex-col justify-between">
                <motion.span
                  animate={{
                    rotate: isOpen ? 45 : 0,
                    y: isOpen ? 8 : 0,
                  }}
                  className="h-0.5 w-full bg-cyan-400 rounded-full"
                />
                <motion.span
                  animate={{
                    opacity: isOpen ? 0 : 1,
                  }}
                  className="h-0.5 w-full bg-cyan-400 rounded-full"
                />
                <motion.span
                  animate={{
                    rotate: isOpen ? -45 : 0,
                    y: isOpen ? -8 : 0,
                  }}
                  className="h-0.5 w-full bg-cyan-400 rounded-full"
                />
              </div>
            </motion.button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="lg:hidden fixed inset-0 bg-black/60 backdrop-blur-sm"
              style={{ top: "80px" }}
            />

            {/* Menu Panel */}
            <motion.div
              initial={{ opacity: 0, x: "100%" }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="lg:hidden fixed right-0 top-20 bottom-0 w-80 bg-slate-900/95 backdrop-blur-2xl border-l border-cyan-500/20 shadow-2xl"
            >
              {/* Decorative Gradient */}
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500 to-transparent"></div>

              <div className="p-8 space-y-6">
                {/* Mobile Nav Links */}
                {navLinks.map((link, idx) => (
                  <motion.div
                    key={link.to}
                    initial={{ x: 50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: idx * 0.1 }}
                  >
                    <button
                      onClick={() => scrollToSection(link.to)}
                      className="group w-full text-left"
                    >
                      <div className="flex items-center justify-between p-4 rounded-xl border border-slate-800 hover:border-cyan-500/50 bg-slate-800/50 hover:bg-cyan-500/10 transition-all">
                        <span className="text-xl font-bold text-slate-300 group-hover:text-cyan-400 transition-colors">
                          {link.name}
                        </span>
                        <motion.div
                          initial={{ x: -10, opacity: 0 }}
                          whileHover={{ x: 0, opacity: 1 }}
                          className="w-2 h-2 rounded-full bg-cyan-400"
                        />
                      </div>
                    </button>
                  </motion.div>
                ))}

                {/* Mobile Contact Button */}
                <motion.button
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => scrollToSection("contact")}
                  className="w-full mt-8 relative group overflow-hidden p-4 rounded-xl font-bold"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500"></div>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                  
                  <div className="relative z-10 flex items-center justify-center gap-2 text-white">
                    <FaEnvelope />
                    <span className="tracking-wider">LET'S TALK</span>
                  </div>
                </motion.button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default Navbar;