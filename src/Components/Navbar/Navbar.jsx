import { useState, useEffect } from "react";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";
import { motion, AnimatePresence } from "framer-motion";
import emailIcon from "../../assets/email-fast-outline 2.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

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

  return (
    
    
    <div className="sticky top-0 w-full z-[100] transition-all duration-300">
      <nav 
        className={`mx-auto max-w-7xl transition-all duration-500 ${
          scrolled 
            ? "bg-[#111111]/80 backdrop-blur-xl border-b border-cyan-500/30 shadow-[0_4px_30px_rgba(0,0,0,0.1)]" 
            : "bg-transparent border-b border-transparent"
        }`}
      >
        <div className="navbar px-4 md:px-8 py-3 text-[#F2F2F2]">
          {/* Logo Section */}
          <div className="navbar-start">
            <div 
              onClick={() => scroll.scrollToTop()}
              className="group cursor-pointer flex items-center gap-2"
            >
              <div className="w-10 h-10 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center font-black text-white shadow-lg group-hover:rotate-6 transition-transform">
                H
              </div>
              <h4 className="text-xl md:text-2xl font-bold tracking-tight">
                HASAN<span className="text-cyan-500">.</span>
              </h4>
            </div>
          </div>

          {/* Desktop Links */}
          <div className="navbar-center hidden lg:flex">
            <ul className="flex items-center gap-10">
              {navLinks.map((link) => (
                <li key={link.to}>
                  <ScrollLink
                    to={link.to}
                    smooth={true}
                    duration={500}
                    spy={true}
                    activeClass="text-cyan-400"
                    className=" font-semibold  tracking-widest hover:text-cyan-400 transition-all cursor-pointer relative group"
                  >
                    {link.name}
                    <span className="absolute -bottom-2 left-0 w-0 h-[2px] bg-cyan-500 transition-all duration-300 group-hover:w-full"></span>
                  </ScrollLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Button */}
          <div className="navbar-end gap-4">
            <ScrollLink to="contact" smooth={true} duration={500}>
              <button className="hidden md:flex items-center gap-2 border-2 border-cyan-500/50 hover:border-cyan-500 text-white font-bold py-2 px-6 rounded-lg transition-all hover:bg-cyan-500/10 active:scale-95">
                <img src={emailIcon} className="w-4" alt="" />
                LET'S TALK
              </button>
            </ScrollLink>

            {/* Mobile Toggle Animation */}
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 text-cyan-500"
            >
              <div className="w-6 h-5 flex flex-col justify-between">
                <span className={`h-0.5 w-full bg-current transform transition-all duration-300 ${isOpen ? "rotate-45 translate-y-2" : ""}`} />
                <span className={`h-0.5 w-full bg-current transition-all duration-300 ${isOpen ? "opacity-0" : ""}`} />
                <span className={`h-0.5 w-full bg-current transform transition-all duration-300 ${isOpen ? "-rotate-45 -translate-y-2.5" : ""}`} />
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Animated Dropdown */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-[#111111] border-t border-white/5"
            >
              <div className="flex flex-col p-6 gap-6">
                {navLinks.map((link, idx) => (
                  <motion.div
                    key={link.to}
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: idx * 0.1 }}
                  >
                    <ScrollLink
                      to={link.to}
                      smooth={true}
                      onClick={() => setIsOpen(false)}
                      className="text-xl font-bold hover:text-cyan-400 transition-colors block"
                    >
                      {link.name}
                    </ScrollLink>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </div>
  );
};

export default Navbar;