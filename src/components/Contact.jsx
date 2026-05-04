function Contact() {
  return (
    <div>
      <section
        id="contact"
        className="min-h-[520px] flex flex-col  relative text-white text-[12px] pt-0"
      >
        <span className="text-[11px] tracking-[3px] text-[#7c6aff] uppercase mb-[14px]">
          // contato
        </span>
        <h2 className="text-[36px] font-bold mb-[12px]">
          Pronto para o próximo desafio?
        </h2>
        <p className="text-[#ffffff73] text-[15px] mb-[48px] max-w-[440px] leading-[1.6]">
          Tem um projeto em mente? Manda uma mensagem, respondo sempre.
        </p>

        <form
          action=""
          className="bg-[#13131e] border border-solid border-[#ffffff12] rounded-[16px] p-[40px] max-w-[500px]"
        >
          <input
            type="text"
            name=""
            id=""
            placeholder="Nome Completo"
            required
            className="w-[100%] bg-[#0d0d14] border border-solid border-[#ffffff1a] rounded-[10px] py-[12px] px-[16px] text-[#e2e2f0] text-[14px] mb-[14px]"
          />

          <input
            type="email"
            name=""
            id=""
            placeholder="Email"
            required
            className="w-[100%] bg-[#0d0d14] border border-solid border-[#ffffff1a] rounded-[10px] py-[12px] px-[16px] text-[#e2e2f0] text-[14px] mb-[14px]"
          />

          <textarea
            name=""
            id=""
            placeholder="Mensagem"
            required
            className="w-[100%] bg-[#0d0d14] border border-solid border-[#ffffff1a] rounded-[10px] py-[12px] px-[16px] text-[#e2e2f0] text-[14px] mb-[14px] resize-none h-[100px]"
          ></textarea>

          <button className="w-[100%] bg-[#7c6aff] py-[12px] px-[28px] rounded-[10px] text-[14px] font-[500]">
            Enviar Mensagem
          </button>
        </form>
      </section>
      <hr className="border-t-[1px] border-solid border-[#ffffff0f]" />
    </div>
  );
}

export default Contact;
