import { motion } from 'framer-motion';
import { Code, Server, Database, Palette, Globe } from 'lucide-react';

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      delayChildren: 0.2,
      staggerChildren: 0.1
    }
  }
};

const item = {
  hidden: { opacity: 0 },
  show: { 
    opacity: 1,
    transition: {
      duration: 0.5
    }
  }
};

const colorfulIcons = {
  HTML: <Code className='text-[#638ec6]' />,
  React: <Code className='text-[#a2b7d1]' />,
  'Next.js': <Globe className='text-[#eceff3]' />,
  'Node.js': <Server className='text-[#a2b7d1]' />,
  TypeScript: <Code className='text-[#324f75]' />,
  'Tailwind CSS': <Palette className='text-[#638ec6]' />,
  MySQL: <Database className='text-[#324f75]' />
};

export function Skills() {
  return (
    <section
      id='skills'
      className='space-y-4'
    >
      <motion.h2 
        className='text-4xl font-bold text-[#a2b7d1] font-heading'
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        Habilidades
      </motion.h2>
      <motion.div
        className='flex flex-wrap gap-4'
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
      >
        {Object.entries(colorfulIcons).map(([skill, icon]) => (
          <motion.div
            key={skill}
            className='flex items-center gap-2 px-4 py-2 bg-[#0b0f13] text-[#eceff3] rounded-lg border-2 border-[#324f75] hover:border-[#638ec6] transition-colors duration-300'
            variants={item}
            whileHover={{ scale: 1.05 }}
          >
            {icon}
            <span className='text-[#eceff3]'>{skill}</span>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
