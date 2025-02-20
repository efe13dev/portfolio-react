import { motion } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';

export function Footer() {
  return (
    <footer className='bg-[#0b0f13]/90 backdrop-blur-sm border-t border-[#a2b7d1]/20 py-4 relative z-10'>
      <div className='container mx-auto px-4'>
        <div className='flex flex-col md:flex-row justify-between items-center gap-2'>
          <motion.div
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className='text-center md:text-left'
          >
            <p className='text-[#a2b7d1] font-body text-sm'>
              Diseñado y desarrollado por{' '}
              <span className='text-[#eceff3]'>efe_13</span>
              <span className='text-[#a2b7d1]/60 ml-2'>
                &copy; {new Date().getFullYear()}
              </span>
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className='flex items-center gap-4'
          >
            <motion.a
              href='https://github.com/efe13dev'
              aria-label='GitHub'
              whileHover={{ scale: 1.1, y: -2 }}
              className='transition-colors duration-300'
              target='_blank'
              rel='noopener noreferrer'
            >
              <Github className='w-6 h-6 text-[#a2b7d1] hover:text-[#eceff3]' />
            </motion.a>
            <motion.a
              href='https://www.linkedin.com/in/efe13-dev/'
              aria-label='LinkedIn'
              whileHover={{ scale: 1.1, y: -2 }}
              className='transition-colors duration-300'
              target='_blank'
              rel='noopener noreferrer'
            >
              <Linkedin className='w-6 h-6 text-[#a2b7d1] hover:text-[#eceff3]' />
            </motion.a>
            <motion.a
              href='mailto:efe13dev@gmail.com'
              aria-label='Email'
              whileHover={{ scale: 1.1, y: -2 }}
              className='transition-colors duration-300'
            >
              <Mail className='w-6 h-6 text-[#a2b7d1] hover:text-[#eceff3]' />
            </motion.a>
          </motion.div>
        </div>
      </div>
    </footer>
  );
}
