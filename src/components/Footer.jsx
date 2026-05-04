function Footer() {
  return (
    <div>
      <footer className="border-t border-solid border-[#ffffff0f] py-[24px] px-[40px] flex justify-between items-center">
        <span className="text-[#ffffff4d] text-[13px]">
          &#60;Anthony Luccas &#47;&#62; &#9472; Feito com muito café e código
        </span>
        <div className="flex flex-row gap-[24px]">
          <div>
            <div>{/*foto*/}</div>
            <a
              href="https://github.com/anthonyluccas"
              className="inline-block text-[#7c6aff] hover:text-[#a89fff] text-[13px] hover:scale-110 transition-all cursor-pointer"
            >
              GitHub
            </a>
          </div>
          <div>
            <div>{/*foto*/}</div>
            <a
              href="https://linkedin.com/in/luccasdev/"
              className="inline-block text-[#7c6aff] hover:text-[#a89fff] text-[13px] hover:scale-110 transition-all cursor-pointer"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
