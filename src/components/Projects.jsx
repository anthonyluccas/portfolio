import projects from "../data/projects";

function Projects() {
  return (
    <div>
      <section
        id="projects"
        className="min-h-[520px] flex flex-col justify-center relative text-white text-[12px]"
      >
        <span className="text-[11px] tracking-[3px] text-[#7c6aff] uppercase mb-[14px]">
          // projetos
        </span>
        <h2 className="text-[36px] font-bold mb-[12px]">
          Projetos em Destaque
        </h2>
        <p className="text-[#ffffff73] text-[15px] mb-[48px] max-w-[440px] leading-[1.6]">
          Uma seleção dos trabalhos técnicos recentes.
        </p>

        <div className="grid grid-cols-2 gap-[20px]">
          {projects.map((project) => (
            <a
              key={project.id}
              className="bg-[#13131e] border border-solid border-[#ffffff12] rounded-[14px] transition-colors duration-200 ease-in-out hover:border-[#7c6aff66]"
            >
              <div className="text-[32px] text-[#7c6aff99] h-[160px] flex items-center justify-center relative bg-[#16213e]">
                ◈ ◈ ◈
              </div>

              <div className="p-[20px]">
                <h3 className="text-[15px] font-[600] mb-[8px]">
                  {project.title}
                </h3>
                <p className="text-[#ffffff73] text-[13px] leading-[1.6] mb-[14px]">
                  {project.description}
                </p>
                <div className="flex gap-[6px] flex-wrap">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="bg-[#ffffff0f] text-[#ffffff80] rounded-[4px] py-[3px] px-[10px] text-[11px] font-mono"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </a>
          ))}
        </div>
      </section>
      <hr className="border-t-[1px] border-solid border-[#ffffff0f]" />
    </div>
  );
}

export default Projects;
