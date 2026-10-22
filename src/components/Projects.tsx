import type { Project } from "@/data/projectsData";

import { motion } from "framer-motion";
import { ArrowUpRight, ExternalLink, Github, Play } from "lucide-react";

import { projects } from "@/data/projectsData";
import { cn } from "@/lib/utils";

const featuredProjects = projects.filter((project) => project.featured);
const labProjects = projects.filter((project) => !project.featured);

function FeaturedProjectCard({ project, index }: { project: Project; index: number }) {
  const primaryHref = project.link ?? project.demoUrl;
  const isHeroCase = index === 0;

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.45, delay: index * 0.06 }}
      className={cn(
        "group relative flex flex-col overflow-hidden rounded-2xl border border-[#3d352e]/50 bg-gradient-to-b from-[#161412]/80 to-[#0c0b0a]/95 transition-colors duration-300 hover:border-[#e56b38]/65",
        isHeroCase ? "lg:col-span-2 lg:grid lg:grid-cols-[1.15fr_1fr]" : "",
      )}
    >
      {/* Escenario visual estilo navegador/dispositivo */}
      <div className="relative flex flex-col border-b border-[#3d352e]/35 bg-[#090807] lg:border-b-0">
        <div className="flex items-center justify-between border-b border-[#3d352e]/30 px-4 py-2.5 font-mono text-[11px] text-[#b8aea2]/60">
          <div className="flex items-center gap-1.5">
            <span className="h-2 w-2 rounded-full bg-[#3d352e]" />
            <span className="h-2 w-2 rounded-full bg-[#3d352e]/70" />
            <span className="h-2 w-2 rounded-full bg-[#e56b38]" />
          </div>
          <span className="truncate px-2">{project.category}</span>
          <span className="text-[#e56b38]">0{index + 1}</span>
        </div>

        {project.image ? (
          <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#090807]">
            <img
              src={project.image}
              alt={project.title}
              loading="lazy"
              className="h-full w-full object-cover object-top transition-transform duration-500 ease-out group-hover:scale-[1.03]"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0c0b0a]/80 via-transparent to-transparent" />
          </div>
        ) : null}
      </div>

      {/* Ficha editorial del proyecto */}
      <div className="flex flex-1 flex-col justify-between gap-6 p-6 md:p-7">
        <div className="space-y-3.5">
          <div className="flex items-center justify-between gap-3">
            <span className="font-mono text-xs uppercase tracking-wider text-[#e56b38]">
              Caso 0{index + 1} — {project.category}
            </span>
          </div>

          <h3 className="font-heading text-2xl font-bold text-[#f4f0ea] md:text-3xl">
            {project.title}
          </h3>

          <p className="text-sm font-medium text-[#b8aea2]">{project.description}</p>

          <p className="text-sm leading-relaxed text-[#f4f0ea]/75">{project.details}</p>
        </div>

        <div className="space-y-5 pt-2">
          <div className="flex flex-wrap gap-1.5">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="rounded-md border border-[#3d352e]/60 bg-[#161412] px-2.5 py-1 font-mono text-[11px] text-[#b8aea2]"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="flex flex-wrap items-center gap-3 border-t border-[#3d352e]/35 pt-4">
            {primaryHref ? (
              <a
                href={primaryHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg bg-[#e56b38] px-4 py-2 text-xs font-semibold text-[#0c0b0a] transition-colors duration-200 hover:bg-[#f59e0b]"
              >
                {project.demoUrl ? (
                  <>
                    <Play className="h-3.5 w-3.5 fill-current" />
                    <span>Ver Demo</span>
                  </>
                ) : (
                  <>
                    <span>Visitar proyecto</span>
                    <ExternalLink className="h-3.5 w-3.5" />
                  </>
                )}
              </a>
            ) : null}

            {project.codeUrl ? (
              <a
                href={project.codeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-[#3d352e]/80 bg-[#0c0b0a]/70 px-4 py-2 font-mono text-xs text-[#f4f0ea] transition-colors duration-200 hover:border-[#e56b38] hover:bg-[#3d352e]/30"
              >
                <Github className="h-3.5 w-3.5 text-[#b8aea2]" />
                <span>Código</span>
              </a>
            ) : null}
          </div>
        </div>
      </div>
    </motion.article>
  );
}

export function Projects() {
  return (
    <section className="space-y-12">
      <div className="flex flex-col justify-between gap-4 border-b border-[#3d352e]/35 pb-6 md:flex-row md:items-end">
        <div className="space-y-2">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-[#e56b38]">
            02 // PROYECTOS SELECCIONADOS
          </p>
          <h2 className="font-heading text-4xl font-bold text-[#f4f0ea] md:text-5xl">
            Trabajo en producción
          </h2>
        </div>
        <p className="max-w-md text-sm leading-relaxed text-[#b8aea2]/80">
          Aplicaciones reales desplegadas en web y móvil, con acceso directo a la demo y al
          repositorio sin pasos intermedios.
        </p>
      </div>

      {/* Proyectos principales: el primero ocupa 2 columnas como caso ancla */}
      <div className="grid gap-6 lg:grid-cols-2">
        {featuredProjects.map((project, index) => (
          <FeaturedProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>

      {/* Mini-proyectos / Laboratorio en formato de índice editorial compacto */}
      <div className="rounded-2xl border border-[#3d352e]/45 bg-[#161412]/50 p-6">
        <div className="mb-4 flex items-center justify-between border-b border-[#3d352e]/30 pb-3">
          <span className="font-mono text-xs uppercase tracking-wider text-[#b8aea2]">
            Laboratorio & Experimentos interactivos
          </span>
          <span className="font-mono text-xs text-[#b8aea2]/50">
            {labProjects.length} proyectos
          </span>
        </div>

        <div className="divide-y divide-[#3d352e]/30">
          {labProjects.map((project) => (
            <div
              key={project.id}
              className="flex flex-col justify-between gap-4 py-4 first:pt-1 last:pb-1 md:flex-row md:items-center"
            >
              <div className="space-y-1">
                <div className="flex flex-wrap items-center gap-2.5">
                  <h3 className="font-heading text-lg font-bold text-[#f4f0ea]">{project.title}</h3>
                  <div className="flex flex-wrap gap-1.5">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="rounded border border-[#3d352e]/50 bg-[#0c0b0a]/70 px-2 py-0.5 font-mono text-[10px] text-[#b8aea2]/85"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <p className="text-xs text-[#b8aea2]/75">{project.description}</p>
              </div>

              <div className="flex shrink-0 items-center gap-2.5">
                {project.link ? (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-lg border border-[#3d352e]/70 bg-[#161412] px-3 py-1.5 font-mono text-xs text-[#f4f0ea] transition-colors hover:border-[#e56b38]"
                  >
                    <span>Probar</span>
                    <ArrowUpRight className="h-3.5 w-3.5 text-[#e56b38]" />
                  </a>
                ) : null}
                {project.codeUrl ? (
                  <a
                    href={project.codeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-lg border border-[#3d352e]/50 px-3 py-1.5 font-mono text-xs text-[#b8aea2] transition-colors hover:border-[#e56b38] hover:text-[#f4f0ea]"
                  >
                    <Github className="h-3.5 w-3.5" />
                    <span>Repo</span>
                  </a>
                ) : null}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
