import { motion } from 'framer-motion';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

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

export function Contact() {
  return (
    <section
      id='contact'
      className='space-y-4'
    >
      <h2 className='text-3xl font-semibold text-gray-900 dark:text-white'>
        Contáctame
      </h2>
      <motion.form
        className='space-y-4'
        variants={staggerChildren}
      >
        <motion.div variants={fadeInUp}>
          <Input
            placeholder='Tu nombre'
            className='bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-700'
          />
        </motion.div>
        <motion.div variants={fadeInUp}>
          <Input
            type='email'
            placeholder='Tu email'
            className='bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-700'
          />
        </motion.div>
        <motion.div variants={fadeInUp}>
          <Textarea
            placeholder='Tu mensaje'
            className='bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-700'
          />
        </motion.div>
        <motion.div variants={fadeInUp}>
          <motion.button
            type='submit'
            className='bg-blue-500 text-white hover:bg-blue-600 dark:bg-blue-600 dark:hover:bg-blue-700'
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Enviar Mensaje
          </motion.button>
        </motion.div>
      </motion.form>
    </section>
  );
}
