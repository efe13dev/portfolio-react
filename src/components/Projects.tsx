import { motion } from 'framer-motion';
import { Button } from './ui/button';
import { projects } from '../data/projectsData';

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
        {projects.map((project) => (
          <motion.div
            key={project.id}
            variants={fadeInUp}
            className='h-[550px] flex flex-col'
          >
            <div className='bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-shadow overflow-hidden flex flex-col h-full'>
              {project.image && (
                <div className='aspect-video w-full overflow-hidden'>
                  <img
                    src={project.image}
                    alt={project.title}
                    className='w-full h-full object-cover'
                  />
                </div>
              )}
              <div className='p-6 flex flex-col flex-grow'>
                <h3 className='text-xl font-bold mb-2'>{project.title}</h3>
                <p className='text-gray-600 dark:text-gray-400 mb-4'>
                  {project.description}
                </p>
                <div className='overflow-y-auto flex-grow mb-4'>
                  <p className='text-gray-600 dark:text-gray-400'>
                    {project.details}
                  </p>
                </div>
                <div className='flex flex-wrap gap-2 mb-4'>
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className='px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded-md text-sm'
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <Button
                  variant='default'
                  onClick={() =>
                    project.link && window.open(project.link, '_blank')
                  }
                >
                  Ver Proyecto
                </Button>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
