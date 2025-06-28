import img from "/FLogo.png";

const Footer = () => {
  return (
    <div>
      <footer className="footer p-10 text-[#828282] ">
        <aside className=" flex item-center  ">
          <img className="w-[100px]" src={img} alt="My Logo" />

          <p className="text-[#70FF00] mt-8 w-full text-3xl font-bold">
             Hasanujjaman
          </p>
        </aside>

        <nav>
          <header className="footer-title opacity-100 text-[#70FF00]">
            Address
          </header>
          <a className="link link-hover">Email: hasan.hasanujjaman@gmail.com</a>
          <a className="link link-hover">Chapainawabganj , Rajshahi </a>
        </nav>

        <nav>
          <header className="footer-title  opacity-100 text-[#70FF00]">
            Projects
          </header>
          <a
            href="https://regal-bubblegum-a6baed.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="link link-hover"
          >
            PhuDu
          </a>
          <a
            href="https://calm-bombolone-252c32.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="link link-hover"
          >
            Auction Gellary
          </a>
          <a
            href="https://roomie-fi.web.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="link link-hover"
          >
            Roomie-Fi
          </a>
        </nav>

        <nav>
          <header className="footer-title  opacity-100 text-[#70FF00]">
            Social Media
          </header>
          <a
            href="https://www.linkedin.com/in/hasanujjaman/"
            target="_blank"
            rel="noopener noreferrer"
            className="link link-hover"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/hasan6t7"
            target="_blank"
            rel="noopener noreferrer"
            className="link link-hover"
          >
            GitHub
          </a>
        </nav>

        <nav>
          <header className="footer-title  opacity-100 text-[#70FF00]">
            Legal
          </header>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>
      </footer>
    </div>
  );
};

export default Footer;
