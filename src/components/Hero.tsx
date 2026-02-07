import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";

import { Button } from "./ui/button";

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.5 },
  transition: { duration: 0.6 },
};

export function Hero() {
  return (
    <section id="about" className="flex min-h-[calc(100vh-6rem)] items-center justify-center py-32">
      <div className="w-full space-y-12 text-left">
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
