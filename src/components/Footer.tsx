import { motion } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';

export function Footer() {
  return (
    <footer className='bg-gray-800 bg-opacity-90 backdrop-blur-sm p-6 shadow-inner relative z-10'>
      <div className='container mx-auto flex justify-between items-center'>
        <p className='text-gray-400'>
          &copy; {new Date().getFullYear()} efe_13
        </p>
        <div className='flex space-x-4'>
          <motion.a
            href='https://github.com/efe13dev'
            aria-label='GitHub'
            whileHover={{ scale: 1.2 }}
            target='_blank'
          >
            <Github className='w-6 h-6 text-gray-400 hover:text-white' />
          </motion.a>
          <motion.a
            href='https://www.linkedin.com/in/efe13-dev/'
            aria-label='LinkedIn'
            whileHover={{ scale: 1.2 }}
            target='_blank'
          >
            <Linkedin className='w-6 h-6 text-gray-400 hover:text-white' />
          </motion.a>
          <motion.a
            href='#'
            aria-label='Email'
            whileHover={{ scale: 1.2 }}
          >
            <Mail className='w-6 h-6 text-gray-400 hover:text-white' />
          </motion.a>
        </div>
      </div>
    </footer>
  );
}
