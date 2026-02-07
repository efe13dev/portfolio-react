import { motion } from "framer-motion";

import { projects } from "../data/projectsData";

import { CardBody, CardContainer, CardItem } from "./ui/3d-card";
import { Modal, ModalBody, ModalContent, ModalTrigger } from "./ui/animated-modal";

export function Projects() {
  return (
    <section id="projects" className="space-y-8">
      <div className="space-y-3">
        <h2 className="font-heading text-4xl font-bold text-[#a2b7d1] md:text-5xl">Proyectos Destacados</h2>
        <p className="text-lg text-[#eceff3]/70">Algunos de mis trabajos más recientes</p>
      </div>
      <motion.div
        className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.4 }}
      >
        {projects.map((project, index) => (
          <Modal key={project.id}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.4,
                delay: 0.2 * index,
              }}
            >
              <ModalTrigger className="h-full w-full">
                <CardContainer className="h-full w-full cursor-pointer">
                  <CardBody className="group/card relative flex h-[550px] w-full flex-col overflow-hidden rounded-2xl border-2 border-[#324f75]/50 bg-gradient-to-br from-[#0b0f13] to-[#1a2942]/20 p-6 shadow-xl shadow-black/20 backdrop-blur-sm transition-all duration-500 hover:border-[#638ec6] hover:shadow-2xl hover:shadow-[#638ec6]/20">
                    <div className="flex-none space-y-3">
                      <CardItem
                        translateZ="50"
                        className="font-heading text-2xl font-bold text-[#eceff3] transition-colors duration-300 group-hover/card:text-[#a2b7d1]"
                      >
                        {project.title}
                      </CardItem>

                      <CardItem
                        translateZ="60"
                        className="text-base font-normal leading-relaxed text-[#eceff3]/80"
                      >
                        {project.description}
                      </CardItem>
                    </div>

                    <div className="my-4 flex flex-1 items-center justify-center overflow-hidden rounded-xl">
                      {project.image && (
                        <CardItem translateZ="100" className="w-full">
                          <div className="relative overflow-hidden rounded-xl">
                            <img
                              src={project.image}
                              alt={project.title}
                              className="h-52 w-full object-cover transition-transform duration-500 group-hover/card:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#0b0f13] via-transparent to-transparent opacity-60" />
                          </div>
                        </CardItem>
                      )}
                    </div>

                    <div className="flex-none space-y-6">
                      <CardItem translateZ="60" className="text-sm font-normal leading-relaxed text-[#eceff3]/70">
                        {project.details}
                      </CardItem>

                      <CardItem translateZ="40" className="flex flex-wrap gap-2">
                        {project.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="rounded-lg border border-[#324f75]/30 bg-[#324f75]/10 px-3 py-1.5 text-xs font-medium text-[#a2b7d1] backdrop-blur-sm transition-all duration-300 hover:border-[#638ec6]/50 hover:bg-[#638ec6]/20 hover:text-[#90b5ed]"
                          >
                            {tech}
                          </span>
                        ))}
                      </CardItem>
                    </div>
                  </CardBody>
                </CardContainer>
              </ModalTrigger>
              <ModalBody>
                <ModalContent className="animate-border mx-auto max-h-[90vh] min-h-[50vh] w-full max-w-[90vw] rounded-xl border-[3px] border-transparent p-4 [background:linear-gradient(45deg,#070a0d,#0f1520_50%,#070a0d)_padding-box,conic-gradient(from_var(--border-angle),#1a2942_0%,#1a2942_80%,#638ec6_86%,#90b5ed_90%,#638ec6_94%,#1a2942_100%)_border-box] md:max-w-4xl md:p-6">
                  <div className="flex h-full flex-col items-center text-center">
                    <div className="w-full max-w-2xl space-y-3 md:space-y-6">
                      <h3 className="text-3xl font-bold text-[#eceff3]">{project.title}</h3>
                      <p className="text-[#eceff3]/80">{project.description}</p>
                      {project.image && (
                        <div className="flex h-64 items-center justify-center">
                          <img
                            src={project.image}
                            alt={project.title}
                            className="h-full w-auto rounded-xl object-contain"
                          />
                        </div>
                      )}
                      <p className="text-balance text-[#eceff3]/80">{project.details}</p>
                      <div className="flex flex-wrap justify-center gap-2">
                        {project.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="rounded-md bg-[#324f75]/10 px-2.5 py-1 text-sm text-[#a2b7d1] transition-colors hover:bg-[#324f75]/20"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="mt-6 flex justify-center gap-8">
                      {(project.demoUrl || project.link) && (
                        <a
                          href={project.demoUrl || project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 rounded-lg bg-[#324f75] px-4 py-2 text-[#eceff3] transition-colors hover:bg-[#638ec6]"
                        >
                          {project.demoUrl ? "Ver Demo" : "Visitar Web"}
                          <svg
                            className="h-4 w-4"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                            />
                          </svg>
                        </a>
                      )}
                      <a
                        href={project.codeUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-lg border border-[#324f75] bg-transparent px-4 py-2 text-[#eceff3] transition-colors hover:bg-[#a2b7d1]/10 hover:text-[#eceff3]"
                      >
                        GitHub
                        <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </ModalContent>
              </ModalBody>
            </motion.div>
          </Modal>
        ))}
      </motion.div>
    </section>
  );
}
