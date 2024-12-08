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
      <h2 className='text-4xl font-bold text-[#a4ccb4] font-heading'>
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
            className='bg-[#040604] border-2 border-[#624072] focus:border-[#a76286] text-[#eff6f2] placeholder:text-[#eff6f2]/50'
          />
        </motion.div>
        <motion.div variants={fadeInUp}>
          <Input
            type='email'
            placeholder='Tu email'
            className='bg-[#040604] border-2 border-[#624072] focus:border-[#a76286] text-[#eff6f2] placeholder:text-[#eff6f2]/50'
          />
        </motion.div>
        <motion.div variants={fadeInUp}>
          <Textarea
            placeholder='Tu mensaje'
            className='bg-[#040604] border-2 border-[#624072] focus:border-[#a76286] text-[#eff6f2] placeholder:text-[#eff6f2]/50 min-h-[150px]'
          />
        </motion.div>
        <motion.div variants={fadeInUp}>
          <Button
            type='submit'
            className='w-full bg-[#a4ccb4] hover:bg-[#a4ccb4]/90 text-[#040604] font-medium'
          >
            Enviar Mensaje
          </Button>
        </motion.div>
      </motion.form>
    </section>
  );
}
