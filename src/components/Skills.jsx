import skills from "../data/skills";

function Skills() {
  return (
    <div>
      <section
        id="skills"
        className="min-h-[520px] flex flex-col justify-center relative text-white text-[12px]"
      >
        <span className="text-[11px] tracking-[3px] text-[#7c6aff] uppercase mb-[14px]">
          // habilidades
        </span>
        <h2 className="text-[36px] font-bold mb-[12px]">Minhas Habilidades</h2>
        <p className="text-[#ffffff73] text-[15px] mb-[48px] max-w-[440px] leading-[1.6]">
          Tecnologias que uso no dia a dia.
        </p>
        <div className="grid grid-cols-4 gap-[12px] mb-[48px]">
          {skills.map((skill) => (
            <div
              key={skill.id}
              className="bg-[#13131e] border border-solid border-[#ffffff12] rounded-[12px] p-[20px] text-center"
            >
              <div className="text-[28px] mb-[10px]">{skill.icon}</div>
              <span className="text-[12px] text-[#ffffff80] font-mono">
                {skill.name}
              </span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Skills;
