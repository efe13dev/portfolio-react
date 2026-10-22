import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const ARCH_SIGNALS = [
  {
    code: "SYS-01",
    label: "Frontend & SSR",
    stack: "React · Next.js · Astro · TypeScript",
    note: "Interfaces rápidas, accesibles y tipadas de extremo a extremo",
  },
  {
    code: "SYS-02",
    label: "Backend & Datos",
    stack: "Node.js · Hono · Supabase · PostgreSQL · Drizzle",
    note: "APIs ligeras, autenticación y esquemas relacionales",
  },
  {
    code: "SYS-03",
    label: "Móvil & Producto",
    stack: "React Native · Expo · Tailwind CSS",
    note: "Del prototipo a la aplicación lista para usar en producción",
  },
];

export function Hero() {
  return (
    <section className="relative pt-8 md:pt-16">
      {/* Cabecera de índice editorial */}
      <div className="mb-10 flex flex-wrap items-center justify-between gap-4 border-b border-[#3d352e]/40 pb-4 font-mono text-xs text-[#b8aea2]/65">
        <div className="flex items-center gap-3">
          <span className="text-[#e56b38]">01 // PERFIL</span>
          <span className="text-[#3d352e]">—</span>
          <span>FRANCISCO ANTONIO LORCA MULERO</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#e56b38] opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-[#e56b38]" />
          </span>
          <span className="text-[#f4f0ea]/85">Disponible para nuevos proyectos</span>
        </div>
      </div>

      <div className="grid items-start gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-12">
        {/* Columna principal: Titular editorial + propuesta + CTAs */}
        <motion.div
          className="space-y-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <div className="space-y-4">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-[#e56b38]">
              Desarrollador Web Full Stack
            </p>
            <h1 className="font-heading text-5xl font-bold leading-[1.06] tracking-tight text-[#f4f0ea] md:text-6xl lg:text-7xl">
              efe_13
              <span className="mt-2 block text-2xl font-normal leading-snug text-[#b8aea2] md:text-3xl">
                Software web y móvil pensado para resolver problemas reales, sin artificios.
              </span>
            </h1>
          </div>

          <p className="max-w-2xl text-base leading-relaxed text-[#f4f0ea]/80 md:text-lg">
            Construyo aplicaciones completas desde la base de datos hasta la interfaz: plataformas
            de gestión con autenticación, portales públicos en{" "}
            <span className="font-medium text-[#f4f0ea]">Next.js y TypeScript</span>, y aplicaciones
            móviles con <span className="font-medium text-[#f4f0ea]">React Native y Supabase</span>.
          </p>

          <div className="flex flex-wrap items-center gap-3.5 pt-2">
            <a
              href="#projects"
              className="group inline-flex items-center gap-2.5 rounded-xl bg-[#e56b38] px-6 py-3.5 text-sm font-semibold text-[#0c0b0a] transition-all duration-200 hover:bg-[#f59e0b]"
            >
              <span>Ver proyectos reales</span>
              <ArrowUpRight className="h-4 w-4 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>

            <a
              href="https://github.com/efe13dev"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-[#3d352e]/80 bg-[#161412]/70 px-5 py-3.5 text-sm font-medium text-[#f4f0ea] transition-colors duration-200 hover:border-[#e56b38] hover:bg-[#3d352e]/30"
            >
              <FaGithub className="h-4 w-4 text-[#b8aea2]" />
              <span>GitHub</span>
            </a>

            <a
              href="https://www.linkedin.com/in/efe13-dev/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-[#3d352e]/80 bg-[#161412]/70 px-5 py-3.5 text-sm font-medium text-[#f4f0ea] transition-colors duration-200 hover:border-[#e56b38] hover:bg-[#3d352e]/30"
            >
              <FaLinkedin className="h-4 w-4 text-[#e56b38]" />
              <span>LinkedIn</span>
            </a>
          </div>
        </motion.div>

        {/* Columna derecha: Showreel HyperFrames + Ficha de arquitectura */}
        <motion.aside
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.12, ease: "easeOut" }}
          className="relative overflow-hidden rounded-2xl border border-[#3d352e]/60 bg-gradient-to-b from-[#161412]/90 to-[#0c0b0a]/95 p-5 shadow-2xl shadow-black/50"
        >
          <div className="mb-3.5 flex items-center justify-between border-b border-[#3d352e]/35 pb-3">
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-[#e56b38]" />
              <span className="font-mono text-xs font-medium uppercase tracking-wider text-[#b8aea2]">
                Showreel // Arquitectura & Producción
              </span>
            </div>
            <span className="font-mono text-[11px] text-[#e56b38]">00:08 LOOP</span>
          </div>

          {/* Vídeo renderizado con HyperFrames */}
          <div className="mb-4 overflow-hidden rounded-xl border border-[#3d352e]/60 bg-[#090807]">
            <video
              src="./hero-showreel.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="aspect-video w-full object-cover"
            />
          </div>

          <div className="space-y-2.5">
            {ARCH_SIGNALS.map((item) => (
              <div
                key={item.code}
                className="rounded-xl border border-[#3d352e]/40 bg-[#0c0b0a]/75 p-3 transition-colors duration-200 hover:border-[#e56b38]/50"
              >
                <div className="mb-0.5 flex items-center justify-between gap-2">
                  <span className="text-xs font-semibold text-[#f4f0ea]">{item.label}</span>
                  <span className="font-mono text-[10px] text-[#e56b38]">{item.code}</span>
                </div>
                <p className="font-mono text-xs text-[#b8aea2]">{item.stack}</p>
              </div>
            ))}
          </div>
        </motion.aside>
      </div>
    </section>
  );
}
