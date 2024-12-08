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
      <h2 className='text-4xl font-bold text-[#a4ccb4] font-heading'>
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
            <CardBody className='bg-[#0b0f0c] relative group/card border-2 border-[#624072] hover:border-[#a76286] w-full h-[550px] rounded-xl p-6 transition-all duration-300 flex flex-col'>
              <div className='flex-none'>
                <CardItem
                  translateZ='50'
                  className='text-2xl font-bold text-[#eff6f2] font-heading'
                >
                  {project.title}
                </CardItem>

                <CardItem
                  translateZ='60'
                  className='text-base font-normal text-[#eff6f2] mt-2'
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
                  className='text-sm font-normal text-[#eff6f2]/80'
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
                      className='px-3 py-1 bg-[#443d5f] text-sm text-[#eff6f2] rounded-full'
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
                </CardItem>
              </div>
            </CardBody>
          </CardContainer>
        ))}
      </motion.div>
    </section>
  );
}
