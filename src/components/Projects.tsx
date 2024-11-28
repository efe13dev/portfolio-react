import { motion } from 'framer-motion';
import { Button } from './ui/button';
const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const staggerChildren = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

export function Projects() {
  return (
    <section
      id='projects'
      className='space-y-4'
    >
      <h2 className='text-3xl font-semibold text-gray-900 dark:text-white'>
        Proyectos Destacados
      </h2>
      <motion.div
        className='grid gap-6 md:grid-cols-2 lg:grid-cols-3'
        variants={staggerChildren}
      >
        {[1, 2, 3].map((project) => (
          <motion.div
            key={project}
            variants={fadeInUp}
          >
            <div className='bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-shadow'>
              <div className='p-6'>
                <h3 className='text-xl font-bold mb-2'>Proyecto {project}</h3>
                <p className='text-gray-600 dark:text-gray-400 mb-4'>
                  Descripción breve del proyecto
                </p>
                <p className='text-gray-600 dark:text-gray-400 mb-4'>
                  Detalles del proyecto y tecnologías utilizadas.
                </p>
                <Button variant='default'>Ver Proyecto</Button>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
