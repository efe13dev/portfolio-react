import { motion } from "framer-motion";
import { FaDatabase, FaGithub, FaLinkedin, FaNodeJs, FaReact } from "react-icons/fa";
import { SiNextdotjs, SiSupabase, SiTailwindcss, SiTypescript, SiVite } from "react-icons/si";

import { Button } from "./ui/button";

const floatingIcons = [
  { Icon: FaReact, delay: 0, x: "5%", y: "15%", size: 32, duration: 4 },
  { Icon: SiTypescript, delay: 0.5, x: "85%", y: "20%", size: 28, duration: 5 },
  { Icon: SiTailwindcss, delay: 1, x: "10%", y: "70%", size: 30, duration: 4.5 },
  { Icon: SiNextdotjs, delay: 1.5, x: "90%", y: "65%", size: 34, duration: 3.5 },
  { Icon: FaNodeJs, delay: 2, x: "15%", y: "45%", size: 26, duration: 5.5 },
  { Icon: SiVite, delay: 2.5, x: "80%", y: "40%", size: 24, duration: 4.2 },
  { Icon: FaDatabase, delay: 3, x: "5%", y: "85%", size: 22, duration: 4.8 },
  { Icon: SiSupabase, delay: 3.5, x: "92%", y: "85%", size: 26, duration: 3.8 },
];

export function Hero() {
  return (
    <section
      id="about"
      className="relative flex min-h-[calc(100vh-6rem)] items-center justify-center overflow-hidden px-6 py-32"
    >
      {/* Grid de fondo decorativo */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.03]">
        <div
          className="h-full w-full"
          style={{
            backgroundImage: `
              linear-gradient(to right, #638ec6 1px, transparent 1px),
              linear-gradient(to bottom, #638ec6 1px, transparent 1px)
            `,
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      {/* Gradiente radial de fondo */}
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 h-[800px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl"
        style={{
          background: "radial-gradient(circle, rgba(50, 79, 117, 0.25) 0%, transparent 70%)",
        }}
      />

      {/* Iconos flotantes de tecnologías */}
      {floatingIcons.map(({ Icon, delay, x, y, size, duration }, index) => (
        <motion.div
          key={index}
          className="pointer-events-none absolute text-[#638ec6]/35"
          style={{ left: x, top: y }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{
            opacity: [0.15, 0.3, 0.15],
            scale: 1,
            y: [0, -15, 0],
          }}
          transition={{
            opacity: { duration: duration, repeat: Infinity, ease: "easeInOut" },
            scale: { duration: 0.5, delay: delay },
            y: { duration: duration, repeat: Infinity, ease: "easeInOut", delay: delay },
          }}
        >
          <Icon size={size} />
        </motion.div>
      ))}

      {/* Líneas decorativas diagonales */}
      <motion.div
        className="pointer-events-none absolute -left-20 top-20 h-[1px] w-80 rotate-45 bg-gradient-to-r from-transparent via-[#638ec6]/30 to-transparent"
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.5, delay: 0.5 }}
      />
      <motion.div
        className="pointer-events-none absolute -right-20 bottom-32 h-[1px] w-96 -rotate-45 bg-gradient-to-r from-transparent via-[#638ec6]/30 to-transparent"
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.5, delay: 0.8 }}
      />

      <div className="relative z-10 w-full space-y-12 text-left">
        <motion.div
          className="space-y-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.div
            className="inline-block rounded-full bg-gradient-to-r from-[#324f75]/20 to-[#638ec6]/20 px-4 py-2 backdrop-blur-sm"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <span className="text-sm font-medium text-[#a2b7d1]">👋 Bienvenido a mi portfolio</span>
          </motion.div>

          <h1
            className="relative pb-4 font-heading text-6xl font-bold leading-[1.1] tracking-tight md:text-7xl lg:text-8xl"
            style={{
              background: "linear-gradient(135deg, #a2b7d1 0%, #638ec6 50%, #90b5ed 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              backgroundSize: "200% 200%",
              animation: "gradient 8s ease infinite",
            }}
          >
            efe_13
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="font-body text-3xl font-normal leading-tight text-[#a2b7d1] md:text-4xl"
        >
          Desarrollador Web Full Stack
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="max-w-3xl text-left font-body text-xl font-normal leading-relaxed text-[#eceff3]/90 md:text-2xl"
        >
          Creo soluciones web{" "}
          <span className="font-semibold text-[#a2b7d1]">eficientes y funcionales</span>, combinando
          técnicas avanzadas con diseño práctico para entregar productos digitales que{" "}
          <span className="shine-text font-semibold">destacan</span>.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="flex flex-wrap gap-4 pt-4"
        >
          <Button
            variant="default"
            className="group relative flex items-center gap-2 overflow-hidden bg-gradient-to-r from-[#324f75] to-[#638ec6] px-8 py-6 text-lg font-medium text-[#eceff3] shadow-lg shadow-[#324f75]/20 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-[#638ec6]/30"
            asChild
          >
            <a
              href="https://www.linkedin.com/in/efe13-dev/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-[#638ec6] to-[#90b5ed] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <FaLinkedin className="relative z-10 h-5 w-5" />
              <span className="relative z-10">LinkedIn</span>
            </a>
          </Button>
          <Button
            variant="outline"
            className="group flex items-center gap-2 border-2 border-[#a2b7d1] bg-transparent px-8 py-6 text-lg font-medium text-[#a2b7d1] transition-all duration-300 hover:scale-105 hover:border-[#638ec6] hover:bg-[#638ec6]/10 hover:text-[#638ec6]"
            asChild
          >
            <a href="https://github.com/efe13dev" target="_blank" rel="noopener noreferrer">
              <FaGithub className="h-5 w-5 transition-transform duration-300 group-hover:rotate-12" />
              <span>GitHub</span>
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
