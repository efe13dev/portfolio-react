import { motion } from 'framer-motion';
import { Code, Server, Database, Palette, Globe } from 'lucide-react';

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

const colorfulIcons = {
  HTML: <Code className='text-orange-500 dark:text-orange-400' />,
  React: <Code className='text-blue-500 dark:text-blue-400' />,
  'Next.js': <Globe className='text-black dark:text-white' />,
  'Node.js': <Server className='text-green-500 dark:text-green-400' />,
  TypeScript: <Code className='text-blue-700 dark:text-blue-300' />,
  'Tailwind CSS': <Palette className='text-teal-500 dark:text-teal-400' />,
  MySQL: <Database className='text-blue-600 dark:text-blue-500' />
};

export function Skills() {
  return (
    <section
      id='skills'
      className='space-y-4'
    >
      <h2 className='text-3xl font-semibold text-gray-900 dark:text-white'>
        Habilidades
      </h2>
      <motion.div
        className='flex flex-wrap gap-4'
        variants={staggerChildren}
      >
        {Object.entries(colorfulIcons).map(([skill, icon]) => (
          <motion.div
            key={skill}
            className='flex items-center gap-2 px-4 py-2 bg-white dark:bg-gray-800 rounded-full text-lg shadow-sm transition-all hover:shadow-md cursor-default'
            variants={fadeInUp}
            whileHover={{ scale: 1.05 }}
          >
            {icon}
            <span className='text-gray-700 dark:text-gray-300'>{skill}</span>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}