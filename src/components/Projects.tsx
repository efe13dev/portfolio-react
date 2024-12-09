import { motion } from 'framer-motion';
import { Button } from './ui/button';
import { projects } from '../data/projectsData';
import { CardBody, CardContainer, CardItem } from './ui/3d-card';

export function Projects() {
  return (
    <section
      id='projects'
      className='space-y-4'
    >
      <h2 className='text-4xl font-bold text-[#a2b7d1] font-heading'>
        Proyectos Destacados
      </h2>
      <motion.div
        className='grid gap-8 md:grid-cols-2 lg:grid-cols-3'
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
      >
        {projects.map((project) => (
          <CardContainer
            key={project.id}
            className='w-full'
          >
            <CardBody className='bg-[#0b0f13] relative group/card border-2 border-[#324f75] hover:border-[#638ec6] w-full h-[550px] rounded-xl p-6 transition-all duration-300 flex flex-col'>
              <div className='flex-none'>
                <CardItem
                  translateZ='50'
                  className='text-2xl font-bold text-[#eceff3] font-heading'
                >
                  {project.title}
                </CardItem>

                <CardItem
                  translateZ='60'
                  className='text-base font-normal text-[#eceff3] mt-2'
                >
                  {project.description}
                </CardItem>
              </div>

              <div className='flex-1 flex items-center justify-center my-4'>
                {project.image && (
                  <CardItem
                    translateZ='100'
                    className='w-full'
                  >
                    <img
                      src={project.image}
                      alt={project.title}
                      className='h-52 w-full object-cover rounded-xl group-hover/card:shadow-xl'
                    />
                  </CardItem>
                )}
              </div>

              <div className='flex-none space-y-4'>
                <CardItem
                  translateZ='60'
                  className='text-sm font-normal text-[#eceff3]/80'
                >
                  {project.details}
                </CardItem>

                <CardItem
                  translateZ='40'
                  className='flex flex-wrap gap-2'
                >
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className='px-3 py-1 bg-[#324f75] text-sm text-[#eceff3] rounded-full'
                    >
                      {tech}
                    </span>
                  ))}
                </CardItem>

                <CardItem
                  translateZ='30'
                  className='flex gap-4'
                >
                  <Button
                    variant='outline'
                    className='flex-1 bg-[#324f75] text-[#eceff3] hover:bg-[#324f75]/90 border-none'
                  >
                    Ver Proyecto
                  </Button>
                  <Button
                    variant='outline'
                    className='flex-1 bg-[#638ec6] text-[#eceff3] hover:bg-[#638ec6]/90 border-none'
                  >
                    Código
                  </Button>
                </CardItem>
              </div>
            </CardBody>
          </CardContainer>
        ))}
      </motion.div>
    </section>
  );
}
