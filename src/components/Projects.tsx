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

                    <div className='flex-none space-y-8'>
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
                            className='px-2.5 py-1 text-sm text-[#a2b7d1] bg-[#324f75]/10 rounded-md hover:bg-[#324f75]/20 transition-colors'
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
                  <div className='flex flex-col items-center text-center h-full'>
                    <div className='flex-1 space-y-6 w-full max-w-2xl'>
                      <h3 className='text-3xl font-bold text-[#eceff3]'>
                        {project.title}
                      </h3>
                      <p className='text-[#eceff3]/80'>{project.description}</p>
                      {project.image && (
                        <div className='flex items-center justify-center h-64'>
                          <img
                            src={project.image}
                            alt={project.title}
                            className='h-full w-auto object-contain rounded-xl'
                          />
                        </div>
                      )}
                      <p className='text-[#eceff3]/80 text-balance'>
                        {project.details}
                      </p>
                      <div className='flex flex-wrap gap-2 justify-center'>
                        {project.technologies.map((tech) => (
                          <span
                            key={tech}
                            className='px-2.5 py-1 text-sm text-[#a2b7d1] bg-[#324f75]/10 rounded-md hover:bg-[#324f75]/20 transition-colors'
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className='flex gap-8 mt-6 justify-center'>
                      <a
                        href={project.demoUrl || project.link}
                        target='_blank'
                        rel='noopener noreferrer'
                        className='inline-flex items-center gap-2 px-4 py-2 bg-[#324f75] hover:bg-[#638ec6] text-[#eceff3] rounded-lg transition-colors'
                      >
                        {project.demoUrl ? 'Ver Demo' : 'Visitar Web'}
                        <svg
                          className='w-4 h-4'
                          fill='none'
                          stroke='currentColor'
                          viewBox='0 0 24 24'
                        >
                          <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            strokeWidth={2}
                            d='M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14'
                          />
                        </svg>
                      </a>
                      <a
                        href={project.codeUrl}
                        target='_blank'
                        rel='noopener noreferrer'
                        className='inline-flex items-center gap-2 px-4 py-2 transition-colors bg-transparent border border-[#324f75]  hover:bg-[#a2b7d1]/10 hover:text-[#eceff3] rounded-lg text-[#eceff3]'
                      >
                        GitHub
                        <svg
                          className='w-4 h-4'
                          fill='currentColor'
                          viewBox='0 0 24 24'
                        >
                          <path d='M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z' />
                        </svg>
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
