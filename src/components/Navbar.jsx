import { Link } from "react-scroll";
import { useState, useEffect } from "react";
import { animateScroll as scroll } from "react-scroll";

function Navbar() {
  const linkStyle = `
  text-sm text-white/50 hover:text-white transition-colors cursor-pointer relative 
  pb-2 after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 
  after:bg-[#7c6aff] after:transition-all after:duration-300
  [&.active]:text-white [&.active]:after:w-full
`;

  const [started, setStarted] = useState(false);

  useEffect(() => {
    setStarted(true);

    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }
    const timer = setTimeout(() => {
      scroll.scrollToTop({
        duration: 0,
        smooth: false,
      });
    }, 10);
    return () => clearTimeout(timer);
  }, []);
  return (
    <nav className="flex items-center justify-between px-10 py-[18px] bg-[#0f172a] border-b border-white/5 sticky top-0 z-50">
      <span className="font-mono text-sm text-[#7c6aff]">
        &#60;Anthony Luccas &#47;&#62;
      </span>

      <div className="flex gap-7">
        <Link
          to="hero"
          smooth={true}
          duration={650}
          offset={-150}
          spy={true}
          hashSpy={true}
          activeClass="active"
          className={`${linkStyle} ${started ? "active" : ""}`}
        >
          Início
        </Link>
        <Link
          to="about"
          smooth={true}
          duration={650}
          offset={-10}
          spy={true}
          activeClass="active"
          onSetActive={() => setStarted(false)}
          className={linkStyle}
        >
          Sobre
        </Link>
        <Link
          to="projects"
          smooth={true}
          duration={650}
          offset={-10}
          spy={true}
          activeClass="active"
          onSetActive={() => setStarted(false)}
          className={linkStyle}
        >
          Projetos
        </Link>
        <Link
          to="skills"
          smooth={true}
          duration={650}
          offset={-10}
          spy={true}
          activeClass="active"
          onSetActive={() => setStarted(false)}
          className={linkStyle}
        >
          Habilidades
        </Link>
        <Link
          to="contact"
          smooth={true}
          duration={650}
          offset={-10}
          spy={true}
          activeClass="active"
          onSetActive={() => setStarted(false)}
          className={linkStyle}
        >
          Contato
        </Link>
      </div>

      <button className="bg-[#7c6aff] hover:bg-[#5d5cff] text-white text-sm px-5 py-2 rounded-lg transition-colors">
        Curriculo
      </button>
    </nav>
  );
}

export default Navbar;
