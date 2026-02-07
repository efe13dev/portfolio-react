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
      <section id="contact" className="space-y-8">
        <div className="space-y-3">
          <h2 className="font-heading text-4xl font-bold text-[#a2b7d1] md:text-5xl">Contáctame</h2>
          <motion.p
            className="max-w-2xl text-lg leading-relaxed text-[#eceff3]/70"
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
          className="max-w-2xl space-y-6 rounded-2xl border border-[#324f75]/30 bg-gradient-to-br from-[#0b0f13] to-[#1a2942]/20 p-8 shadow-xl shadow-black/20 backdrop-blur-sm"
          variants={staggerChildren}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.div variants={fadeInUp}>
            <div className="space-y-2">
              <label className="text-sm font-medium text-[#a2b7d1]">Nombre</label>
              <Input
                type="text"
                name="from_name"
                placeholder="Tu nombre"
                required
                className="border-2 border-[#324f75]/50 bg-[#0b0f13]/50 py-6 text-[#eceff3] backdrop-blur-sm transition-all duration-300 placeholder:text-[#eceff3]/40 focus:border-[#638ec6] focus:bg-[#0b0f13] focus:shadow-lg focus:shadow-[#638ec6]/10"
              />
            </div>
          </motion.div>
          <motion.div variants={fadeInUp}>
            <div className="space-y-2">
              <label className="text-sm font-medium text-[#a2b7d1]">Email</label>
              <Input
                type="email"
                name="email"
                placeholder="tu@email.com"
                required
                className="border-2 border-[#324f75]/50 bg-[#0b0f13]/50 py-6 text-[#eceff3] backdrop-blur-sm transition-all duration-300 placeholder:text-[#eceff3]/40 focus:border-[#638ec6] focus:bg-[#0b0f13] focus:shadow-lg focus:shadow-[#638ec6]/10"
              />
            </div>
          </motion.div>
          <motion.div variants={fadeInUp}>
            <div className="space-y-2">
              <label className="text-sm font-medium text-[#a2b7d1]">Mensaje</label>
              <Textarea
                name="message"
                placeholder="Cuéntame sobre tu proyecto..."
                required
                className="min-h-[150px] resize-none border-2 border-[#324f75]/50 bg-[#0b0f13]/50 text-[#eceff3] backdrop-blur-sm transition-all duration-300 placeholder:text-[#eceff3]/40 focus:border-[#638ec6] focus:bg-[#0b0f13] focus:shadow-lg focus:shadow-[#638ec6]/10"
              />
            </div>
          </motion.div>
          <motion.div variants={fadeInUp}>
            <Button
              type="submit"
              disabled={isSubmitting}
              className="group relative w-full overflow-hidden bg-gradient-to-r from-[#324f75] to-[#638ec6] py-6 font-medium text-[#eceff3] shadow-lg shadow-[#324f75]/20 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:shadow-[#638ec6]/30 disabled:opacity-50 disabled:hover:scale-100"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-[#638ec6] to-[#90b5ed] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <span className="relative z-10">
                {isSubmitting ? "Enviando..." : "Enviar mensaje"}
              </span>
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
