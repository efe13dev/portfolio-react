import { motion } from 'framer-motion';

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
        className='flex justify-center items-center'
        variants={fadeInRight}
      >
        <div className='relative w-64 h-64 md:w-96 md:h-96'>
          <img
            src='/hero-image.jpg'
            alt='Desarrollador programando'
            className='object-cover rounded-2xl w-full h-full '
          />
        </div>
      </motion.div>
    </section>
  );
}
