import { Link } from "react-scroll";

function Navbar() {
  return (
    <nav className="flex items-center justify-between px-10 py-[18px] bg-[#0f172a] border-b border-white/5 sticky top-0 z-50">
      <span className="font-mono text-sm text-white">
        &#60;Anthony Luccas &#47;&#62;
      </span>

      <div className="flex gap-7">
        <Link
          to="hero"
          smooth={true}
          duration={650}
          offset={-70}
          spy={true}
          className="text-sm text-white/50 hover:text-white transition-colors"
        >
          Início
        </Link>
        <Link
          to="about"
          smooth={true}
          duration={650}
          offset={-70}
          spy={true}
          className="text-sm text-white/50 hover:text-white transition-colors"
        >
          Sobre
        </Link>
        <Link
          to="projects"
          smooth={true}
          duration={650}
          offset={-70}
          spy={true}
          className="text-sm text-white/50 hover:text-white transition-colors"
        >
          Projetos
        </Link>
        <Link
          to="skills"
          smooth={true}
          duration={650}
          offset={-70}
          spy={true}
          className="text-sm text-white/50 hover:text-white transition-colors"
        >
          Habilidades
        </Link>
        <Link
          to="contact"
          smooth={true}
          duration={650}
          offset={-70}
          spy={true}
          className="text-sm text-white/50 hover:text-white transition-colors"
        >
          Contato
        </Link>
      </div>

      <button className="bg-purple-600 hover:bg-[#5d5cff] text-white text-sm px-5 py-2 rounded-lg transition-colors">
        Curriculo
      </button>
    </nav>
  );
}

export default Navbar;
