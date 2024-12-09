import { motion } from 'framer-motion';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from './ui/button';

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.3 },
  transition: { duration: 0.6 }
};

const staggerChildren = {
  whileInView: {
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
      <h2 className='text-4xl font-bold text-[#a2b7d1] font-heading'>
        Contáctame
      </h2>
      <motion.form
        className='space-y-4 max-w-2xl'
        variants={staggerChildren}
        initial="initial"
        whileInView="whileInView"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.div variants={fadeInUp}>
          <Input
            placeholder='Tu nombre'
            className='bg-[#0b0f13] border-2 border-[#324f75] focus:border-[#638ec6] text-[#eceff3] placeholder:text-[#eceff3]/50'
          />
        </motion.div>
        <motion.div variants={fadeInUp}>
          <Input
            type='email'
            placeholder='Tu email'
            className='bg-[#0b0f13] border-2 border-[#324f75] focus:border-[#638ec6] text-[#eceff3] placeholder:text-[#eceff3]/50'
          />
        </motion.div>
        <motion.div variants={fadeInUp}>
          <Textarea
            placeholder='Tu mensaje'
            className='bg-[#0b0f13] border-2 border-[#324f75] focus:border-[#638ec6] text-[#eceff3] placeholder:text-[#eceff3]/50 min-h-[150px]'
          />
        </motion.div>
        <motion.div variants={fadeInUp}>
          <Button
            type='submit'
            className='w-full bg-[#324f75] text-[#eceff3] hover:bg-[#324f75]/90 font-medium'
          >
            Enviar Mensaje
          </Button>
        </motion.div>
      </motion.form>
    </section>
  );
}
