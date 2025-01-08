import { motion } from 'framer-motion';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from './ui/button';
import emailjs from '@emailjs/browser';
import { useRef, useState } from 'react';

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
  const form = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await emailjs.sendForm(
        'service_jqebwim',
        'template_8lntcyv',
        form.current!,
        'BkDXLJmCnyLB2z9pa'
      );
      alert('¡Mensaje enviado con éxito!');
      form.current?.reset();
    } catch (error) {
      console.error('Error al enviar el mensaje:', error);
      alert('Error al enviar el mensaje. Por favor, intenta de nuevo.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id='contact'
      className='space-y-4'
    >
      <h2 className='text-4xl font-bold text-[#a2b7d1] font-heading'>
        Contáctame
      </h2>
      <motion.form
        ref={form}
        onSubmit={handleSubmit}
        className='space-y-4 max-w-2xl'
        variants={staggerChildren}
        initial="initial"
        whileInView="whileInView"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.div variants={fadeInUp}>
          <Input
            name="user_name"
            placeholder='Tu nombre'
            required
            className='bg-[#0b0f13] border-2 border-[#324f75] focus:border-[#638ec6] text-[#eceff3] placeholder:text-[#eceff3]/50'
          />
        </motion.div>
        <motion.div variants={fadeInUp}>
          <Input
            name="user_email"
            type='email'
            required
            placeholder='Tu email'
            className='bg-[#0b0f13] border-2 border-[#324f75] focus:border-[#638ec6] text-[#eceff3] placeholder:text-[#eceff3]/50'
          />
        </motion.div>
        <motion.div variants={fadeInUp}>
          <Textarea
            name="message"
            required
            placeholder='Tu mensaje'
            className='bg-[#0b0f13] border-2 border-[#324f75] focus:border-[#638ec6] text-[#eceff3] placeholder:text-[#eceff3]/50 min-h-[150px]'
          />
        </motion.div>
        <motion.div variants={fadeInUp}>
          <Button 
            type="submit" 
            disabled={isSubmitting}
            className="w-full bg-[#324f75] text-[#eceff3] hover:bg-[#324f75]/90 font-medium"
          >
            {isSubmitting ? 'Enviando...' : 'Enviar Mensaje'}
          </Button>
        </motion.div>
      </motion.form>
    </section>
  );
}
