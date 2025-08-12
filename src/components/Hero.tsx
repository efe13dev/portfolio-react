import { motion } from "framer-motion";
import { Suspense, lazy } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

import { Button } from "./ui/button";

// Precargar el módulo
const preloadWorld = () => import("./ui/globe");

const World = lazy(() =>
  import("./ui/globe").then((module) => ({
    default: module.World,
  })),
);

// Iniciar la precarga cuando el módulo se importe
preloadWorld();

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.5 },
  transition: { duration: 0.6 },
};

const fadeInRight = {
  initial: { opacity: 0, x: 60 },
  whileInView: { opacity: 1, x: 0 },
  viewport: { once: true, amount: 0.5 },
  transition: { duration: 0.6 },
};

export function Hero() {
  return (
    <section
      id="about"
      className="grid min-h-[calc(100vh-6rem)] touch-pan-y items-center md:grid-cols-2"
      style={{ touchAction: "pan-y" }}
    >
      {/* Columna de texto */}
      <div className="space-y-6">
        <motion.h1
          className="relative font-heading text-5xl font-bold"
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
          className="font-body text-2xl font-normal text-[#a2b7d1]"
        >
          Desarrollador Web Full Stack
        </motion.p>
        <motion.p
          variants={fadeInUp}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true, amount: 0.5 }}
          className="font-body text-xl font-normal text-[#eceff3]/80"
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
          className="flex flex-wrap gap-4"
        >
          <Button
            variant="default"
            className="flex items-center gap-2 bg-[#324f75] text-[#eceff3] hover:bg-[#324f75]/90"
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
            className="flex items-center gap-2 border-[#a2b7d1] text-[#a2b7d1] hover:bg-[#a2b7d1]/10"
            asChild
          >
            <a href="https://github.com/efe13dev" target="_blank" rel="noopener noreferrer">
              <FaGithub className="h-5 w-5" />
              GitHub
            </a>
          </Button>
        </motion.div>
      </div>

      {/* Columna del globo */}
      {
        <div className="relative mx-auto h-[500px] w-[500px] max-lg:h-[300px] max-lg:w-[300px]">
          <Suspense fallback={<div className="h-full w-full bg-[#0b0f13]" />}>
            {/* Overlay transparente solo en mobile para permitir scroll */}
            {/* Overlay solo mobile para permitir scroll táctil */}
            <div
              className="absolute inset-0 z-20 block md:hidden"
              style={{ background: "transparent", touchAction: "pan-y" }}
              onTouchStart={(e) => e.stopPropagation()}
              onTouchMove={(e) => e.stopPropagation()}
            />
            <motion.div
              className="h-full w-full"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                duration: 1,
                ease: "easeInOut",
              }}
              variants={fadeInRight}
            >
              <World
                globeConfig={{
                  pointSize: 4,
                  globeColor: "#0f67c0",
                  showAtmosphere: true,
                  atmosphereColor: "#3a64ff",
                  atmosphereAltitude: 0.15,
                  emissive: "#062d56",
                  emissiveIntensity: 0.1,
                  shininess: 0.9,
                  polygonColor: "rgba(255,255,255,1)",
                  ambientLight: "#38bdf8",
                  directionalLeftLight: "#ffffff",
                  directionalTopLight: "#ffffff",
                  pointLight: "#ffffff",
                  arcTime: 1000,
                  arcLength: 0.9,
                  rings: 1,
                  maxRings: 3,
                  initialPosition: {
                    lat: 40.4168,
                    lng: -3.7038,
                  },
                  autoRotate: window.innerWidth > 900,
                  autoRotateSpeed: 0.5,
                }}
                data={[
                  {
                    order: 1,
                    startLat: 40.4168,
                    startLng: -3.7038,
                    endLat: 48.8566,
                    endLng: 2.3522,
                    arcAlt: 0.2,
                    color: "#60A5FA",
                  },
                  {
                    order: 2,
                    startLat: 51.5074,
                    startLng: -0.1278,
                    endLat: 40.7128,
                    endLng: -74.006,
                    arcAlt: 0.3,
                    color: "#F472B6",
                  },
                  {
                    order: 3,
                    startLat: 35.6762,
                    startLng: 139.6503,
                    endLat: -33.8688,
                    endLng: 151.2093,
                    arcAlt: 0.25,
                    color: "#4ADE80",
                  },
                  {
                    order: 4,
                    startLat: -33.8688,
                    startLng: 151.2093,
                    endLat: -23.5505,
                    endLng: -46.6333,
                    arcAlt: 0.35,
                    color: "#FCD34D",
                  },
                  {
                    order: 5,
                    startLat: 55.7558,
                    startLng: 37.6173,
                    endLat: 35.6762,
                    endLng: 139.6503,
                    arcAlt: 0.28,
                    color: "#C084FC",
                  },
                  {
                    order: 6,
                    startLat: 1.3521,
                    startLng: 103.8198,
                    endLat: 31.2304,
                    endLng: 121.4737,
                    arcAlt: 0.15,
                    color: "#67E8F9",
                  },
                  {
                    order: 7,
                    startLat: -23.5505,
                    startLng: -46.6333,
                    endLat: 40.4168,
                    endLng: -3.7038,
                    arcAlt: 0.4,
                    color: "#FB923C",
                  },
                  {
                    order: 8,
                    startLat: 48.8566,
                    startLng: 2.3522,
                    endLat: 55.7558,
                    endLng: 37.6173,
                    arcAlt: 0.2,
                    color: "#BEF264",
                  },
                ]}
              />
            </motion.div>
          </Suspense>
        </div>
      }
    </section>
  );
}
