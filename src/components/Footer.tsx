import { motion } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';

export function Footer() {
  return (
    <footer className='bg-white dark:bg-gray-800 bg-opacity-90 dark:bg-opacity-90 backdrop-blur-sm p-6 shadow-inner relative z-10'>
      <div className='container mx-auto flex justify-between items-center'>
        <p className='text-gray-600 dark:text-gray-400'>
          &copy; 2023 Juan Desarrollador. Todos los derechos reservados.
        </p>
        <div className='flex space-x-4'>
          <motion.a
            href='#'
            aria-label='GitHub'
            whileHover={{ scale: 1.2 }}
          >
            <Github className='w-6 h-6 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white' />
          </motion.a>
          <motion.a
            href='#'
            aria-label='LinkedIn'
            whileHover={{ scale: 1.2 }}
          >
            <Linkedin className='w-6 h-6 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white' />
          </motion.a>
          <motion.a
            href='#'
            aria-label='Email'
            whileHover={{ scale: 1.2 }}
          >
            <Mail className='w-6 h-6 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white' />
          </motion.a>
        </div>
      </div>
    </footer>
  );
}
