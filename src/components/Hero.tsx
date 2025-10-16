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
      <div className="w-full space-y-20 text-left">
        <motion.h1
          className="relative p-4 font-heading text-6xl font-bold leading-[5.2] md:text-7xl lg:text-8xl"
          style={{
            background: "linear-gradient(to right, #a2b7d1, #324f75, #638ec6)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            colorScheme: "dark",
            isolation: "isolate",
          }}
          variants={fadeInUp}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true, amount: 0.5 }}
        >
          efe_13
        </motion.h1>
        <motion.p
          variants={fadeInUp}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true, amount: 0.5 }}
          className="font-body text-3xl font-normal leading-[1.4] text-[#a2b7d1] md:text-4xl"
        >
          Desarrollador Web Full Stack
        </motion.p>
        <motion.p
          variants={fadeInUp}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true, amount: 0.5 }}
          className="text-left font-body text-xl font-normal leading-relaxed text-[#eceff3]/80 md:text-2xl"
        >
          Creo soluciones web eficientes y funcionales, combinando técnicas avanzadas con diseño
          práctico para entregar productos digitales efectivos. Mi enfoque: · Aplicaciones web
          optimizadas que
          <span className="shine-text"> destacan</span> ·
        </motion.p>
        <motion.div
          variants={fadeInUp}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true, amount: 0.5 }}
          className="flex flex-wrap gap-6 pt-8"
        >
          <Button
            variant="default"
            className="flex items-center gap-2 bg-[#324f75] px-8 py-4 text-lg text-[#eceff3] hover:bg-[#324f75]/90"
            asChild
          >
            <a
              href="https://www.linkedin.com/in/efe13-dev/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="h-5 w-5" />
              LinkedIn
            </a>
          </Button>
          <Button
            variant="outline"
            className="flex items-center gap-2 border-[#a2b7d1] px-8 py-4 text-lg text-[#a2b7d1] hover:bg-[#a2b7d1]/10"
            asChild
          >
            <a href="https://github.com/efe13dev" target="_blank" rel="noopener noreferrer">
              <FaGithub className="h-6 w-6" />
              GitHub
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
