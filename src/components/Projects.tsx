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
      <h2 className='text-4xl font-bold text-[#a4ccb4] font-heading'>Proyectos Destacados</h2>
      <motion.div
        className='grid gap-8 md:grid-cols-2 lg:grid-cols-3'
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
      >
        {projects.map((project) => (
          <motion.div
            key={project.id}
            variants={fadeInUp}
            className='h-[550px] flex flex-col'
          >
            <div className='bg-[#0b0f0c] rounded-lg shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden flex flex-col h-full border-2 border-[#624072] hover:border-[#a76286]'>
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
                <h3 className='text-2xl font-bold mb-2 text-[#eff6f2] font-heading'>
                  {project.title}
                </h3>
                <p className='text-base font-normal text-[#eff6f2] font-body mb-4'>{project.description}</p>
                <div className='overflow-y-auto flex-grow mb-4'>
                  <p className='text-sm font-normal text-[#eff6f2]/80 font-body'>{project.details}</p>
                </div>
                <div className='flex flex-wrap gap-2 mb-4'>
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className='px-2 py-1 bg-[#624072] text-sm text-[#eff6f2] rounded-md'
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className='flex gap-4 mt-auto'>
                  <Button
                    variant='outline'
                    className='flex-1 bg-[#624072] text-[#eff6f2] hover:bg-[#624072]/90 border-none'
                  >
                    Ver Proyecto
                  </Button>
                  <Button
                    variant='outline'
                    className='flex-1 bg-[#a76286] text-[#eff6f2] hover:bg-[#a76286]/90 border-none'
                  >
                    Código
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
