import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative z-10 border-t border-[#324f75]/30 bg-gradient-to-b from-[#0b0f13]/80 to-[#0b0f13] py-8 backdrop-blur-md">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center md:text-left"
          >
            <p className="font-body text-sm text-[#eceff3]/70">
              Diseñado y desarrollado con{" "}
              <span className="text-[#638ec6]">❤️</span> por{" "}
              <span className="font-semibold text-[#a2b7d1]">efe_13</span>
              <span className="ml-2 text-[#eceff3]/50">&copy; {new Date().getFullYear()}</span>
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex items-center gap-6"
          >
            <motion.a
              href="https://github.com/efe13dev"
              aria-label="GitHub"
              whileHover={{ scale: 1.15, y: -3 }}
              className="group relative rounded-full bg-[#324f75]/20 p-3 transition-all duration-300 hover:bg-[#324f75]/40 hover:shadow-lg hover:shadow-[#638ec6]/20"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="h-5 w-5 text-[#a2b7d1] transition-colors duration-300 group-hover:text-[#90b5ed]" />
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/efe13-dev/"
              aria-label="LinkedIn"
              whileHover={{ scale: 1.15, y: -3 }}
              className="group relative rounded-full bg-[#324f75]/20 p-3 transition-all duration-300 hover:bg-[#324f75]/40 hover:shadow-lg hover:shadow-[#638ec6]/20"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin className="h-5 w-5 text-[#a2b7d1] transition-colors duration-300 group-hover:text-[#90b5ed]" />
            </motion.a>
            <motion.a
              href="mailto:efe13dev@gmail.com"
              aria-label="Email"
              whileHover={{ scale: 1.15, y: -3 }}
              className="group relative rounded-full bg-[#324f75]/20 p-3 transition-all duration-300 hover:bg-[#324f75]/40 hover:shadow-lg hover:shadow-[#638ec6]/20"
            >
              <Mail className="h-5 w-5 text-[#a2b7d1] transition-colors duration-300 group-hover:text-[#90b5ed]" />
            </motion.a>
          </motion.div>
        </div>
      </div>
    </footer>
  );
}
