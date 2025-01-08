import { motion, AnimatePresence } from 'framer-motion';
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

const modalVariants = {
  hidden: {
    opacity: 0,
    scale: 0.8,
    y: 20
  },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      type: "spring",
      duration: 0.5
    }
  },
  exit: {
    opacity: 0,
    scale: 0.8,
    transition: {
      duration: 0.3
    }
  }
};

export function Contact() {
  const form = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showModal, setShowModal] = useState(false);

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
      form.current?.reset();
      setShowModal(true);
    } catch (error) {
      console.error('Error al enviar el mensaje:', error);
      alert('Error al enviar el mensaje. Por favor, intenta de nuevo.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <section id='contact' className='space-y-4'>
        <h2 className='text-4xl font-bold text-[#a2b7d1] font-heading'>
          Contáctame
        </h2>
        <motion.form
          ref={form}
          onSubmit={handleSubmit}
          className='space-y-4 max-w-2xl'
          variants={staggerChildren}
          initial='initial'
          whileInView='whileInView'
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.div variants={fadeInUp}>
            <div>
              <Input
                type='text'
                name='from_name'
                placeholder='Tu nombre'
                required
                className='bg-[#0b0f13] border-2 border-[#324f75] focus:border-[#638ec6] text-[#eceff3] placeholder:text-[#eceff3]/50'
              />
            </div>
          </motion.div>
          <motion.div variants={fadeInUp}>
            <div>
              <Input
                type='email'
                name='email'
                placeholder='Tu correo electrónico'
                required
                className='bg-[#0b0f13] border-2 border-[#324f75] focus:border-[#638ec6] text-[#eceff3] placeholder:text-[#eceff3]/50'
              />
            </div>
          </motion.div>
          <motion.div variants={fadeInUp}>
            <div>
              <Textarea
                name='message'
                placeholder='Tu mensaje'
                required
                className='bg-[#0b0f13] border-2 border-[#324f75] focus:border-[#638ec6] text-[#eceff3] placeholder:text-[#eceff3]/50 min-h-[150px]'
              />
            </div>
          </motion.div>
          <motion.div variants={fadeInUp}>
            <Button
              type='submit'
              disabled={isSubmitting}
              className='w-full bg-[#324f75] text-[#eceff3] hover:bg-[#324f75]/90 font-medium'
            >
              {isSubmitting ? 'Enviando...' : 'Enviar mensaje'}
            </Button>
          </motion.div>
        </motion.form>
      </section>

      <AnimatePresence>
        {showModal && (
          <div className="fixed inset-0 flex items-center justify-center z-50">
            {/* Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowModal(false)}
              className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            />
            
            {/* Modal */}
            <motion.div
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="relative w-full max-w-md mx-4"
            >
              <div className="bg-[#0b0f13] p-8 rounded-lg border-2 border-[#324f75] shadow-xl">
                <div className="text-center">
                  <h3 className="text-2xl font-semibold text-[#eceff3] mb-3">
                    ¡Mensaje Enviado!
                  </h3>
                  <p className="text-[#eceff3]/80 mb-6">
                    Gracias por contactarme. Te responderé lo antes posible.
                  </p>
                  <Button
                    onClick={() => setShowModal(false)}
                    className="bg-[#324f75] text-[#eceff3] hover:bg-[#324f75]/90 min-w-[120px]"
                  >
                    Cerrar
                  </Button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
