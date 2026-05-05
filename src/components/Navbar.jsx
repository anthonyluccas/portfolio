import { Link } from "react-scroll";
import { useState, useEffect } from "react";
import { animateScroll as scroll } from "react-scroll";

function Navbar() {
  const linkStyle = `
  w-fit text-sm text-white/50 hover:text-white transition-colors cursor-pointer relative 
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

  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <nav className="relative flex items-center justify-between px-10 py-[18px] bg-[#0f172a] border-b border-white/5 sticky top-0 z-50">
      <span className="font-mono text-sm text-[#7c6aff]">
        &#60;Anthony Luccas &#47;&#62;
      </span>

      <button
        onClick={() => setMenuOpen(!menuOpen)}
        className="md:hidden text-white text-xl"
      >
        ☰
      </button>

      <div
        className={`${menuOpen ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 -translate-y-2 pointer-events-none"} md:opacity-100 md:translate-y-0 md:pointer-events-auto transition-all duration-300 ease-in-out flex flex-col md:flex-row gap-7 absolute md:relative top-full left-0 w-full md:w-auto bg-[#0f172a] md:bg-transparent px-10 py-6 md:p-0`}
      >
        <Link
          to="hero"
          smooth={true}
          duration={650}
          offset={-150}
          spy={true}
          hashSpy={true}
          activeClass="active"
          onClick={() => setMenuOpen(false)}
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
          onClick={() => setMenuOpen(false)}
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
          onClick={() => setMenuOpen(false)}
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
          onClick={() => setMenuOpen(false)}
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
          onClick={() => setMenuOpen(false)}
          onSetActive={() => setStarted(false)}
          className={linkStyle}
        >
          Contato
        </Link>
      </div>

      <button className="bg-[#7c6aff] hover:bg-[#5d5cff] text-white text-sm px-5 py-2 rounded-lg transition-colors hidden md:block">
        Curriculo
      </button>
    </nav>
  );
}

export default Navbar;
