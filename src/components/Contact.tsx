import emailjs from "@emailjs/browser";
import { AnimatePresence, motion } from "framer-motion";
import { useRef, useState } from "react";

import { Button } from "./ui/button";

import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { EMAIL_CONFIG } from "@/data/emailConfig";

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.3 },
  transition: { duration: 0.6 },
};

const staggerChildren = {
  whileInView: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const modalVariants = {
  hidden: {
    opacity: 0,
    scale: 0.8,
    y: 20,
  },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      type: "spring",
      duration: 0.5,
    },
  },
  exit: {
    opacity: 0,
    scale: 0.8,
    transition: {
      duration: 0.3,
    },
  },
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
        EMAIL_CONFIG.SERVICE_ID,
        EMAIL_CONFIG.TEMPLATE_ID,
        form.current!,
        EMAIL_CONFIG.PUBLIC_KEY,
      );
      form.current?.reset();
      setShowModal(true);
    } catch (error) {
      console.error("Error al enviar el mensaje:", error);
      alert("Error al enviar el mensaje. Por favor, intenta de nuevo.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <section id="contact" className="space-y-4">
        <div className="space-y-2">
          <h2 className="font-heading text-4xl font-bold text-[#a2b7d1]">Contáctame</h2>
          <motion.p
            className="max-w-2xl leading-relaxed text-[#eceff3]/80"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            ¿Tienes un proyecto en mente o quieres colaborar? ¡Me encantaría escuchar tus ideas!
            Envíame un mensaje y te responderé lo antes posible.
          </motion.p>
        </div>
        <motion.form
          ref={form}
          onSubmit={handleSubmit}
          className="max-w-2xl space-y-4"
          variants={staggerChildren}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.div variants={fadeInUp}>
            <div>
              <Input
                type="text"
                name="from_name"
                placeholder="Tu nombre"
                required
                className="border-2 border-[#324f75] bg-[#0b0f13] text-[#eceff3] placeholder:text-[#eceff3]/50 focus:border-[#638ec6]"
              />
            </div>
          </motion.div>
          <motion.div variants={fadeInUp}>
            <div>
              <Input
                type="email"
                name="email"
                placeholder="Tu correo electrónico"
                required
                className="border-2 border-[#324f75] bg-[#0b0f13] text-[#eceff3] placeholder:text-[#eceff3]/50 focus:border-[#638ec6]"
              />
            </div>
          </motion.div>
          <motion.div variants={fadeInUp}>
            <div>
              <Textarea
                name="message"
                placeholder="Tu mensaje"
                required
                className="min-h-[150px] border-2 border-[#324f75] bg-[#0b0f13] text-[#eceff3] placeholder:text-[#eceff3]/50 focus:border-[#638ec6]"
              />
            </div>
          </motion.div>
          <motion.div variants={fadeInUp}>
            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-[#324f75] font-medium text-[#eceff3] hover:bg-[#324f75]/90"
            >
              {isSubmitting ? "Enviando..." : "Enviar mensaje"}
            </Button>
          </motion.div>
        </motion.form>
      </section>

      <AnimatePresence>
        {showModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center">
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
              className="relative mx-4 w-full max-w-md"
            >
              <div className="rounded-lg border-2 border-[#324f75] bg-[#0b0f13] p-8 shadow-xl">
                <div className="text-center">
                  <h3 className="mb-3 text-2xl font-semibold text-[#eceff3]">¡Mensaje Enviado!</h3>
                  <p className="mb-6 text-[#eceff3]/80">
                    Gracias por contactarme. Te responderé lo antes posible.
                  </p>
                  <Button
                    onClick={() => setShowModal(false)}
                    className="min-w-[120px] bg-[#324f75] text-[#eceff3] hover:bg-[#324f75]/90"
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
