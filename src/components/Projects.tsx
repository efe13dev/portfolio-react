import { motion } from 'framer-motion';
import { projects } from '../data/projectsData';
import { CardBody, CardContainer, CardItem } from './ui/3d-card';
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalTrigger
} from './ui/animated-modal';

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
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.4 }}
      >
        {projects.map((project, index) => (
          <Modal key={project.id}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.4,
                delay: 0.2 * index
              }}
            >
              <ModalTrigger className='w-full h-full'>
                <CardContainer className='w-full h-full cursor-pointer'>
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
                    </div>
                  </CardBody>
                </CardContainer>
              </ModalTrigger>
              <ModalBody>
                <ModalContent className='[background:linear-gradient(45deg,#070a0d,#0f1520_50%,#070a0d)_padding-box,conic-gradient(from_var(--border-angle),#1a2942_0%,#1a2942_80%,#638ec6_86%,#90b5ed_90%,#638ec6_94%,#1a2942_100%)_border-box] border-[3px] border-transparent animate-border p-6 rounded-xl w-full max-w-[90vw] md:max-w-4xl mx-auto aspect-[4/3] overflow-y-auto'>
                  <div className='flex flex-col h-full'>
                    <div className='flex-1 space-y-4'>
                      <h3 className='text-2xl font-bold text-[#eceff3]'>
                        {project.title}
                      </h3>
                      <p className='text-[#eceff3]/80'>{project.description}</p>
                      {project.image && (
                        <img
                          src={project.image}
                          alt={project.title}
                          className='w-full h-64 object-cover rounded-xl'
                        />
                      )}
                      <p className='text-[#eceff3]/80'>{project.details}</p>
                      <div className='flex flex-wrap gap-2'>
                        {project.technologies.map((tech) => (
                          <span
                            key={tech}
                            className='px-3 py-1 bg-[#324f75] text-sm text-[#eceff3] rounded-full'
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className='flex gap-4 mt-6'>
                      <a
                        href={project.demoUrl}
                        target='_blank'
                        rel='noopener noreferrer'
                        className='flex-1 px-6 py-3 bg-[#324f75] hover:bg-[#638ec6] text-[#eceff3] rounded-xl text-center transition-colors duration-300 cursor-pointer'
                      >
                        Ver Proyecto
                      </a>
                      <a
                        href={project.codeUrl}
                        target='_blank'
                        rel='noopener noreferrer'
                        className='flex-1 px-6 py-3 border-2 border-[#324f75] hover:border-[#638ec6] text-[#eceff3] rounded-xl text-center transition-colors duration-300 cursor-pointer'
                      >
                        Ver Código
                      </a>
                    </div>
                  </div>
                </ModalContent>
              </ModalBody>
            </motion.div>
          </Modal>
        ))}
      </motion.div>
    </section>
  );
}
