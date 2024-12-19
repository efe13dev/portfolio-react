import { motion } from 'framer-motion';
import { Suspense, lazy } from 'react';
import { Button } from './ui/button';
// import type { WorldProps } from './ui/globe';

// Precargar el módulo
const preloadWorld = () => import('./ui/globe');

const World = lazy(() =>
  import('./ui/globe').then((module) => ({
    default: module.World
  }))
);

// Iniciar la precarga cuando el módulo se importe
preloadWorld();

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.5 },
  transition: { duration: 0.6 }
};

const fadeInRight = {
  initial: { opacity: 0, x: 60 },
  whileInView: { opacity: 1, x: 0 },
  viewport: { once: true, amount: 0.5 },
  transition: { duration: 0.6 }
};

export function Hero() {
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  /*  useEffect(() => {
    // Retrasar la renderización del World hasta que la página esté cargada
    const timer = setTimeout(() => {
      setShowWorld(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []); */

  return (
    <section
      id='about'
      className='grid md:grid-cols-2 items-center min-h-[calc(100vh-6rem)]'
    >
      {/* Columna de texto */}
      <div className='space-y-6'>
        <motion.h1
          className='text-5xl font-bold font-heading bg-clip-text text-transparent bg-gradient-to-r from-[#a2b7d1] via-[#324f75] to-[#638ec6]'
          variants={fadeInUp}
          initial='initial'
          whileInView='whileInView'
          viewport={{ once: true, amount: 0.5 }}
        >
          Juan Desarrollador
        </motion.h1>
        <motion.p
          variants={fadeInUp}
          initial='initial'
          whileInView='whileInView'
          viewport={{ once: true, amount: 0.5 }}
          className='text-2xl font-normal text-[#a2b7d1] font-body'
        >
          Desarrollador Web Full Stack
        </motion.p>
        <motion.p
          variants={fadeInUp}
          initial='initial'
          whileInView='whileInView'
          viewport={{ once: true, amount: 0.5 }}
          className='text-xl font-normal text-[#eceff3]/80 font-body'
        >
          Soy un desarrollador apasionado con experiencia en crear aplicaciones
          web modernas y eficientes. Me especializo en React, Next.js y Node.js,
          y siempre estoy buscando aprender nuevas tecnologías.
        </motion.p>
        <motion.div
          variants={fadeInUp}
          initial='initial'
          whileInView='whileInView'
          viewport={{ once: true, amount: 0.5 }}
          className='flex flex-wrap gap-4'
        >
          <Button
            variant='default'
            className='bg-[#324f75] text-[#eceff3] hover:bg-[#324f75]/90'
            onClick={() => scrollToSection('projects')}
          >
            Ver Proyectos
          </Button>
          <Button
            variant='outline'
            className='border-[#a2b7d1] text-[#a2b7d1] hover:bg-[#a2b7d1]/10'
            onClick={() => scrollToSection('contact')}
          >
            Contactar
          </Button>
        </motion.div>
      </div>

      {/* Columna del globo */}
      {
        <div className='relative w-[500px] h-[500px] mx-auto'>
          <Suspense fallback={<div className='w-full h-full bg-transparent' />}>
            <motion.div
              className='w-full h-full'
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                duration: 1,
                ease: 'easeInOut'
              }}
              variants={fadeInRight}
            >
              <World
                globeConfig={{
                  pointSize: 4,
                  globeColor: '#0f67c0',
                  showAtmosphere: true,
                  atmosphereColor: '#3a64ff',
                  atmosphereAltitude: 0.15,
                  emissive: '#062d56',
                  emissiveIntensity: 0.1,
                  shininess: 0.9,
                  polygonColor: 'rgba(255,255,255,1)',
                  ambientLight: '#38bdf8',
                  directionalLeftLight: '#ffffff',
                  directionalTopLight: '#ffffff',
                  pointLight: '#ffffff',
                  arcTime: 1000,
                  arcLength: 0.9,
                  rings: 1,
                  maxRings: 3,
                  initialPosition: {
                    lat: 40.4168,
                    lng: -3.7038
                  },
                  autoRotate: true,
                  autoRotateSpeed: 0.5
                }}
                data={[
                  {
                    order: 1,
                    startLat: 40.4168,
                    startLng: -3.7038,
                    endLat: 48.8566,
                    endLng: 2.3522,
                    arcAlt: 0.2,
                    color: '#60A5FA'
                  },
                  {
                    order: 2,
                    startLat: 51.5074,
                    startLng: -0.1278,
                    endLat: 40.7128,
                    endLng: -74.006,
                    arcAlt: 0.3,
                    color: '#F472B6'
                  },
                  {
                    order: 3,
                    startLat: 35.6762,
                    startLng: 139.6503,
                    endLat: -33.8688,
                    endLng: 151.2093,
                    arcAlt: 0.25,
                    color: '#4ADE80'
                  },
                  {
                    order: 4,
                    startLat: -33.8688,
                    startLng: 151.2093,
                    endLat: -23.5505,
                    endLng: -46.6333,
                    arcAlt: 0.35,
                    color: '#FCD34D'
                  },
                  {
                    order: 5,
                    startLat: 55.7558,
                    startLng: 37.6173,
                    endLat: 35.6762,
                    endLng: 139.6503,
                    arcAlt: 0.28,
                    color: '#C084FC'
                  },
                  {
                    order: 6,
                    startLat: 1.3521,
                    startLng: 103.8198,
                    endLat: 31.2304,
                    endLng: 121.4737,
                    arcAlt: 0.15,
                    color: '#67E8F9'
                  },
                  {
                    order: 7,
                    startLat: -23.5505,
                    startLng: -46.6333,
                    endLat: 40.4168,
                    endLng: -3.7038,
                    arcAlt: 0.4,
                    color: '#FB923C'
                  },
                  {
                    order: 8,
                    startLat: 48.8566,
                    startLng: 2.3522,
                    endLat: 55.7558,
                    endLng: 37.6173,
                    arcAlt: 0.2,
                    color: '#BEF264'
                  }
                ]}
              />
            </motion.div>
          </Suspense>
        </div>
      }
    </section>
  );
}
