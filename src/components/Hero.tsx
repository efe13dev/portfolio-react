import { motion } from 'framer-motion';
import { World } from './ui/globe';

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const fadeInRight = {
  initial: { opacity: 0, x: 60 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.6 }
};

export function Hero() {
  return (
    <section
      id='about'
      className='grid md:grid-cols-2  items-center  min-h-[calc(80vh-6rem)]'
    >
      {/* Columna de texto */}
      <div className='space-y-6'>
        <motion.h1
          className='text-5xl font-bold text-gray-900 dark:text-white'
          variants={fadeInUp}
        >
          Juan Desarrollador
        </motion.h1>
        <motion.p
          className='text-2xl font-semibold text-gray-700 dark:text-gray-300'
          variants={fadeInUp}
        >
          Desarrollador Full Stack
        </motion.p>
        <motion.p
          variants={fadeInUp}
          className='text-lg text-gray-600 dark:text-gray-400'
        >
          Soy un desarrollador apasionado con experiencia en crear aplicaciones
          web modernas y eficientes. Me especializo en React, Next.js y Node.js,
          y siempre estoy buscando aprender nuevas tecnologías.
        </motion.p>
      </div>

      {/* Columna de imagen */}
      <motion.div
        className='flex justify-center items-center w-full h-full'
        variants={fadeInRight}
      >
        <div className='relative w-full h-[400px] md:h-[600px]'>
          <World 
            globeConfig={{
              pointSize: 4,
              globeColor: '#192441',
              showAtmosphere: true,
              atmosphereColor: '#3a64ff',
              atmosphereAltitude: 0.1,
              emissive: '#000000',
              emissiveIntensity: 0.1,
              shininess: 0.9,
              polygonColor: 'rgba(255,255,255,0.7)',
              ambientLight: '#38bdf8',
              directionalLeftLight: '#ffffff',
              directionalTopLight: '#ffffff',
              pointLight: '#ffffff',
              arcTime: 1000,
              arcLength: 0.9,
              rings: 1,
              maxRings: 3,
              initialPosition: { lat: 22.3511148, lng: 78.6677428 }
            }}
            data={[
              {
                order: 1,
                startLat: 22.3511148,
                startLng: 78.6677428,
                endLat: 48.8566,
                endLng: 2.3522,
                arcAlt: 0.3,
                color: '#2196F3'
              },
              {
                order: 2,
                startLat: 22.3511148,
                startLng: 78.6677428,
                endLat: 40.7128,
                endLng: -74.0060,
                arcAlt: 0.5,
                color: '#E91E63'
              }
            ]}
          />
        </div>
      </motion.div>
    </section>
  );
}
