function About() {
  return (
    <div>
      <section
        id="sobre"
        className="min-h-[520px] flex flex-col justify-center relative text-white text-[12px]"
      >
        <span className="text-[11px] tracking-[3px] text-[#7c6aff] uppercase mb-[14px]">
          // sobre mim
        </span>
        <h2 className="text-[36px] font-bold mb-[12px]">Minha Jornada</h2>
        <p className="text-[#ffffff73] text-[15px] mb-[48px] max-w-[440px] leading-[1.6]">
          Uma linha do tempo de código, café e aprendizado constante
        </p>
        <div className="grid grid-cols-2 gap-[32px] items-start">
          <div className="bg-[#13131e] border border-solid border-[#ffffff12] rounded-[14px] p-[28px]">
            <h3 className="text-[17px] mb-[12px] font-[600]">Minha Jornada</h3>
            <p className="text-[#ffffff80] text-[14px] leading-[1.7]">
              Comecei a programar em novembro de 2025 movido pela paixão por
              tecnologia. Em pouco tempo já estava construindo projetos reais
              com React e Node.js. Cada linha de código é uma oportunidade de
              aprender algo novo e resolver problemas de forma criativa.
            </p>
            <div className="flex flex-wrap gap-[8px] mt-[16px]">
              <span className="bg-[#7c6aff1f] text-[#a89fff] border border-solid border-[#7c6aff40] rounded-[6px] py-[4px] px-[12px] text-[12px] font-mono">
                HTML
              </span>

              <span className="bg-[#7c6aff1f] text-[#a89fff] border border-solid border-[#7c6aff40] rounded-[6px] py-[4px] px-[12px] text-[12px] font-mono">
                CSS
              </span>

              <span className="bg-[#7c6aff1f] text-[#a89fff] border border-solid border-[#7c6aff40] rounded-[6px] py-[4px] px-[12px] text-[12px] font-mono">
                JavaScript
              </span>

              <span className="bg-[#7c6aff1f] text-[#a89fff] border border-solid border-[#7c6aff40] rounded-[6px] py-[4px] px-[12px] text-[12px] font-mono">
                React
              </span>

              <span className="bg-[#7c6aff1f] text-[#a89fff] border border-solid border-[#7c6aff40] rounded-[6px] py-[4px] px-[12px] text-[12px] font-mono">
                Node
              </span>

              <span className="bg-[#7c6aff1f] text-[#a89fff] border border-solid border-[#7c6aff40] rounded-[6px] py-[4px] px-[12px] text-[12px] font-mono">
                Git
              </span>
            </div>
          </div>

          <div className="bg-[#13131e] border border-solid border-[#ffffff12] rounded-[14px] p-[28px]">
            <h3 className="text-[17px] mb-[12px] font-[600]">
              Stack Principal
            </h3>
            <p className="text-[#ffffff80] text-[14px] leading-[1.7]">
              Focado no ecossistema JavaScript moderno, do front-end ao back-end
              — construindo projetos completos e funcionais.
            </p>
            <div className="mt-[16px] font-mono text-[12px] leading-[2] text-[#ffffff73]">
              <div>
                <span className="text-[#7c6aff]">→ </span>
                Frontend: React + Tailwind
              </div>

              <div>
                <span className="text-[#7c6aff]">→ </span>
                Backend: Node + Express
              </div>

              <div>
                <span className="text-[#7c6aff]">→ </span>
                Versionamento: Git + GitHub
              </div>
            </div>
          </div>
        </div>
      </section>
      <hr className="border-t-[1px] border-solid border-[#ffffff0f]" />
    </div>
  );
}

export default About;
