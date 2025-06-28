// Navbar.js
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";
import logo from "../../assets/Group.png";
import email from "../../assets/email-fast-outline 2.png";

const Navbar = () => {
  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  const navbarLink = (
    <>
      <li className="hover:text-[#70FF00]">
        <ScrollLink to="home" smooth={true} duration={500}>
          Home
        </ScrollLink>
      </li>

      <li className="hover:text-[#70FF00]">
        <ScrollLink to="skills" smooth={true} duration={500}>
          Skills
        </ScrollLink>
      </li>
      <li className="hover:text-[#70FF00]">
        <ScrollLink to="projects" smooth={true} duration={500}>
          Projects
        </ScrollLink>
      </li>
      <li className="hover:text-[#70FF00]">
        <ScrollLink to="about" smooth={true} duration={500}>
          About
        </ScrollLink>
      </li>
    </>
  );
  return (
    <div className="pt-3 sticky top-0 z-50 bg-base-300">
      <div className="navbar mx-auto max-w-7xl  text-[#F2F2F2]">
        <div className="md:navbar-start">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost lg:hidden"
              onClick={scrollToTop}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-7 w-7"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm bg-black dropdown-content mt-3 z-[1] p-2 shadow rounded-box w-52"
            >
              {navbarLink}
            </ul>
          </div>
          <img className="w-[40px] md:w-[60px]" src={logo} alt="logo" />
          <h4 className="ml-5 text-lg md:text-3xl font-bold uppercase">
            <span className="text-[#828282] ">Md.</span> Hasanujjaman
          </h4>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal font-bold text-lg px-1 ">
            {navbarLink}
          </ul>
        </div>
        <div className="md:navbar-end hidden md:flex">
          <ScrollLink to="contact" smooth={true} duration={500}>
            <button className="btn font-bold bg-transparent text-[#F2F2F2] flex items-center md:gap-3 gap-1 border-2 px-1 md:px-3 rounded-md">
              <img className="w-1/5 md:w-1/4" src={email} alt="logo" /> Contact
              Me
            </button>
          </ScrollLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
