function Hero() {
  return (
    <div>
      <section
        id="inicio"
        className="min-h-[520px] flex flex-col justify-center relative text-white text-[12px]"
      >
        <div className="inline-flex gap-[8px] items-center border border-solid border-[#7c6aff4c] rounded-full py-[6px] px-[16px] mb-[28px] bg-[#7c6aff1e] text-[#a89fff] w-fit">
          <span className="w-[6px] h-[6px] rounded-[50%] bg-[#7c6aff] inline-block animate-pulse"></span>
          Disponível para projetos
        </div>
        <h1 className="text-[54px] font-bold leading-[1.1] mb-[20px] max-w-[560px]">
          Transformando
          <br />
          Ideias em <em className="not-italic text-[#7c6aff]">Código</em>
        </h1>
        <p className="text-[#ffffff80] text-[16px] leading-[1.7] max-w-[440px] mb-[36px]">
          Transformo ideias em soluções digitais reais. Seja uma landing page,
          um sistema web ou uma API — estou disponível para tirar o seu projeto
          do papel.
        </p>
        <div className="flex gap-[14px]">
          <button className="bg-[#7c6aff] text-white py-[12px] px-[28px] rounded-[10px] text-[14px] font-medium">
            Ver Projetos
          </button>
          <button className="bg-transparent text-[#ffffffb3] border border-solid border-[#ffffff26] py-[12px] px-[28px] rounded-[10px] text-[14px]">
            Vamos Conversar
          </button>
        </div>
        <div className="absolute right-[40px] top-[50%] translate-y-[-50%] bg-[#13131e] border border-solid border-[#ffffff14] rounded-[12px] p-[24px] font-mono text-[12px] leading-[1.9] min-w-[260px]">
          <div className="flex gap-[6px] mb-[16px]">
            <div className="bg-[#ff5f57] w-[10px] h-[10px] rounded-[50%]"></div>
            <div className="bg-[#febc2e] w-[10px] h-[10px] rounded-[50%]"></div>
            <div className="bg-[#28c840] w-[10px] h-[10px] rounded-[50%]"></div>
          </div>
          <div>
            <span className="text-[#c792ea]">const </span>
            <span className="text-[#82aaff]">dev</span> = &#123;
          </div>
          <div>
            &nbsp;&nbsp;name:
            <span className="text-[#c3e88d]"> "Anthony Luccas",</span>
          </div>
          <div>
            &nbsp;&nbsp;stack: &#91;
            <span className="text-[#c3e88d]">"React"</span>,
            <span className="text-[#c3e88d]"> "Node"</span>&#93;,
          </div>
          <div>
            &nbsp;&nbsp;status:
            <span className="text-[#c3e88d]"> "disponível para freelas"</span>
          </div>
          <div>&#125;</div>
          <div className="text-[#546e7a]">// em constante evolução</div>
        </div>
      </section>
      <hr className="border-t-[1px] border-solid border-[#ffffff0f]" />
    </div>
  );
}

export default Hero;
