import emailjs from "@emailjs/browser";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Mail } from "lucide-react";
import { useRef, useState } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { EMAIL_CONFIG } from "@/data/emailConfig";

import { Button } from "./ui/button";

const modalVariants = {
  hidden: {
    opacity: 0,
    scale: 0.95,
    y: 12,
  },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      type: "spring",
      duration: 0.4,
    },
  },
  exit: {
    opacity: 0,
    scale: 0.95,
    transition: {
      duration: 0.2,
    },
  },
};

export function Contact() {
  const form = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [showErrorModal, setShowErrorModal] = useState(false);

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
      setShowErrorModal(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <section className="space-y-10">
        <div className="flex flex-col justify-between gap-4 border-b border-[#3d352e]/35 pb-6 md:flex-row md:items-end">
          <div className="space-y-2">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-[#e56b38]">
              04 // CONTACTO DIRECTO
            </p>
            <h2 className="font-heading text-4xl font-bold text-[#f4f0ea] md:text-5xl">
              Hablemos de tu proyecto
            </h2>
          </div>
          <p className="max-w-md text-sm leading-relaxed text-[#b8aea2]/80">
            ¿Buscas incorporar a alguien a tu equipo o lanzar un producto? Escríbeme por formulario
            o directamente por correo.
          </p>
        </div>

        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-14">
          {/* Columna izquierda: Canales directos */}
          <div className="flex flex-col justify-between gap-8 rounded-2xl border border-[#3d352e]/50 bg-[#161412]/60 p-6 md:p-8">
            <div className="space-y-4">
              <span className="font-mono text-xs uppercase tracking-wider text-[#e56b38]">
                Canales directos
              </span>
              <p className="text-sm leading-relaxed text-[#f4f0ea]/80">
                Respondo habitualmente en menos de 24 horas laborables. Si prefieres no usar el
                formulario, puedes contactarme directamente aquí:
              </p>
            </div>

            <div className="space-y-3">
              <a
                href="mailto:efe13dev@gmail.com"
                className="group flex items-center justify-between rounded-xl border border-[#3d352e]/50 bg-[#0c0b0a]/80 p-4 transition-colors hover:border-[#e56b38]"
              >
                <div className="flex items-center gap-3">
                  <Mail className="h-4 w-4 text-[#e56b38]" />
                  <div>
                    <p className="font-mono text-[11px] uppercase text-[#b8aea2]/60">Email</p>
                    <p className="text-sm font-medium text-[#f4f0ea]">efe13dev@gmail.com</p>
                  </div>
                </div>
                <ArrowUpRight className="h-4 w-4 text-[#b8aea2]/40 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[#e56b38]" />
              </a>

              <a
                href="https://www.linkedin.com/in/efe13-dev/"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between rounded-xl border border-[#3d352e]/50 bg-[#0c0b0a]/80 p-4 transition-colors hover:border-[#e56b38]"
              >
                <div className="flex items-center gap-3">
                  <FaLinkedin className="h-4 w-4 text-[#e56b38]" />
                  <div>
                    <p className="font-mono text-[11px] uppercase text-[#b8aea2]/60">LinkedIn</p>
                    <p className="text-sm font-medium text-[#f4f0ea]">in/efe13-dev</p>
                  </div>
                </div>
                <ArrowUpRight className="h-4 w-4 text-[#b8aea2]/40 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[#e56b38]" />
              </a>

              <a
                href="https://github.com/efe13dev"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between rounded-xl border border-[#3d352e]/50 bg-[#0c0b0a]/80 p-4 transition-colors hover:border-[#e56b38]"
              >
                <div className="flex items-center gap-3">
                  <FaGithub className="h-4 w-4 text-[#b8aea2]" />
                  <div>
                    <p className="font-mono text-[11px] uppercase text-[#b8aea2]/60">GitHub</p>
                    <p className="text-sm font-medium text-[#f4f0ea]">github.com/efe13dev</p>
                  </div>
                </div>
                <ArrowUpRight className="h-4 w-4 text-[#b8aea2]/40 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[#e56b38]" />
              </a>
            </div>
          </div>

          {/* Columna derecha: Formulario */}
          <form
            ref={form}
            onSubmit={handleSubmit}
            className="space-y-5 rounded-2xl border border-[#3d352e]/50 bg-gradient-to-b from-[#161412]/75 to-[#0c0b0a]/95 p-6 md:p-8"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <div className="space-y-2">
                <label htmlFor="from_name" className="font-mono text-xs text-[#b8aea2]">
                  Nombre
                </label>
                <Input
                  id="from_name"
                  type="text"
                  name="from_name"
                  placeholder="Tu nombre"
                  required
                  className="border border-[#3d352e]/70 bg-[#0c0b0a]/80 py-5 text-[#f4f0ea] placeholder:text-[#f4f0ea]/35 focus:border-[#e56b38]"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="font-mono text-xs text-[#b8aea2]">
                  Email
                </label>
                <Input
                  id="email"
                  type="email"
                  name="email"
                  placeholder="tu@email.com"
                  required
                  className="border border-[#3d352e]/70 bg-[#0c0b0a]/80 py-5 text-[#f4f0ea] placeholder:text-[#f4f0ea]/35 focus:border-[#e56b38]"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="message" className="font-mono text-xs text-[#b8aea2]">
                Mensaje
              </label>
              <Textarea
                id="message"
                name="message"
                placeholder="Cuéntame sobre tu proyecto, equipo o idea..."
                required
                className="min-h-[150px] resize-none border border-[#3d352e]/70 bg-[#0c0b0a]/80 text-[#f4f0ea] placeholder:text-[#f4f0ea]/35 focus:border-[#e56b38]"
              />
            </div>

            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full rounded-xl bg-[#e56b38] py-6 text-sm font-semibold text-[#0c0b0a] transition-colors duration-200 hover:bg-[#f59e0b] disabled:opacity-50"
            >
              {isSubmitting ? "Enviando..." : "Enviar mensaje"}
            </Button>
          </form>
        </div>
      </section>

      <AnimatePresence>
        {showModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowModal(false)}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            />
            <motion.div
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="relative mx-4 w-full max-w-md"
            >
              <div className="rounded-2xl border border-[#3d352e] bg-[#0c0b0a] p-8 shadow-2xl">
                <div className="text-center">
                  <h3 className="mb-3 font-heading text-2xl font-bold text-[#f4f0ea]">
                    ¡Mensaje enviado!
                  </h3>
                  <p className="mb-6 text-sm text-[#f4f0ea]/80">
                    Gracias por escribirme. Te responderé lo antes posible.
                  </p>
                  <Button
                    onClick={() => setShowModal(false)}
                    className="min-w-[120px] bg-[#e56b38] text-[#0c0b0a] hover:bg-[#f59e0b]"
                  >
                    Cerrar
                  </Button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {showErrorModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowErrorModal(false)}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            />
            <motion.div
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="relative mx-4 w-full max-w-md"
            >
              <div className="rounded-2xl border border-[#3d352e] bg-[#0c0b0a] p-8 shadow-2xl">
                <div className="text-center">
                  <h3 className="mb-3 font-heading text-2xl font-bold text-[#f4f0ea]">
                    Algo salió mal
                  </h3>
                  <p className="mb-6 text-sm text-[#f4f0ea]/80">
                    Error al enviar el mensaje. Por favor, inténtalo de nuevo o escríbeme a
                    efe13dev@gmail.com.
                  </p>
                  <Button
                    onClick={() => setShowErrorModal(false)}
                    className="min-w-[120px] bg-[#3d352e] text-[#f4f0ea] hover:bg-[#e56b38] hover:text-[#0c0b0a]"
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
