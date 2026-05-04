function Navbar() {
  return (
    <nav className="flex items-center justify-between px-10 py-[18px] bg-[#0f172a] border-b border-white/5 sticky top-0 z-50">
      <span className="font-mono text-sm text-white">Anthony Luccas</span>

      <div className="flex gap-7">
        <a
          href="#hero"
          className="text-sm text-white/50 hover:text-white transition-colors"
        >
          Início
        </a>
        <a
          href="#about"
          className="text-sm text-white/50 hover:text-white transition-colors"
        >
          Sobre
        </a>
        <a
          href="#projects"
          className="text-sm text-white/50 hover:text-white transition-colors"
        >
          Projetos
        </a>
        <a
          href="#"
          className="text-sm text-white/50 hover:text-white transition-colors"
        >
          Habilidades
        </a>
        <a
          href="#"
          className="text-sm text-white/50 hover:text-white transition-colors"
        >
          Contato
        </a>
      </div>

      <button className="bg-purple-600 hover:bg-[#5d5cff] text-white text-sm px-5 py-2 rounded-lg transition-colors">
        Curriculo
      </button>
    </nav>
  );
}

export default Navbar;
