import { useRef } from "react";
import emailjs from "@emailjs/browser";

function Contact() {
  const form = useRef();
  function handleSubmit(e) {
    e.preventDefault();

    emailjs.sendForm(
      "service_4t4fee4",
      "template_btem511",
      form.current,
      "XNr38kSZPfbseP0a0",
    );
  }
  return (
    <div>
      <section
        id="contact"
        className="min-h-[890px] flex flex-col  relative text-white text-[12px]"
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
          ref={form}
          onSubmit={handleSubmit}
          className="bg-[#13131e] border border-solid border-[#ffffff12] rounded-[16px] p-[40px] max-w-[500px]"
        >
          <input
            type="text"
            name="from_name"
            id=""
            placeholder="Nome Completo"
            required
            className="w-[100%] bg-[#0d0d14] border border-solid border-[#ffffff1a] rounded-[10px] py-[12px] px-[16px] text-[#e2e2f0] text-[14px] mb-[14px]"
          />

          <input
            type="email"
            name="from_email"
            id=""
            placeholder="Email"
            required
            className="w-[100%] bg-[#0d0d14] border border-solid border-[#ffffff1a] rounded-[10px] py-[12px] px-[16px] text-[#e2e2f0] text-[14px] mb-[14px]"
          />

          <textarea
            name="message"
            id=""
            placeholder="Mensagem"
            required
            className="w-[100%] bg-[#0d0d14] border border-solid border-[#ffffff1a] rounded-[10px] py-[12px] px-[16px] text-[#e2e2f0] text-[14px] mb-[14px] resize-none h-[100px]"
          ></textarea>

          <button className="w-[100%] bg-[#7c6aff] hover:bg-[#6a58e0] hover:scale-105 py-[12px] px-[28px] rounded-[10px] text-[14px] font-[500] transition-all">
            Enviar Mensagem
          </button>
        </form>
      </section>
      <hr className="border-t-[1px] border-solid border-[#ffffff0f]" />
    </div>
  );
}

export default Contact;
