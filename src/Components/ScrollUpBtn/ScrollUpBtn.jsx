import { useEffect, useState } from "react";
import { FaRegArrowAltCircleUp } from "react-icons/fa";
const ScrollUpButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 20) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      className={`scroll-up-btn ${
        isVisible ? "visible" : "hidden"
      } fixed bottom-8 right-8 bg-[#828282] text-4xl font-extrabold text-[#F2F2F2] rounded-full px-2 py-2`}
      onClick={scrollToTop}
    >
      <FaRegArrowAltCircleUp />
    </button>
  );
};

export default ScrollUpButton;
