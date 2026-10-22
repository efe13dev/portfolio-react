import { Github, Linkedin, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative z-10 border-t border-[#3d352e]/35 bg-[#0c0b0a]/90 py-8 backdrop-blur-md">
      <div className="container mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 sm:flex-row">
        <div className="flex items-center gap-3 font-mono text-xs text-[#b8aea2]/70">
          <span className="font-semibold text-[#f4f0ea]">efe_13</span>
          <span className="text-[#3d352e]">/</span>
          <span>Francisco Antonio Lorca Mulero</span>
          <span className="text-[#3d352e]">—</span>
          <span>&copy; {new Date().getFullYear()}</span>
        </div>

        <div className="flex items-center gap-4">
          <a
            href="https://github.com/efe13dev"
            aria-label="GitHub"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg border border-[#3d352e]/50 bg-[#161412]/70 p-2.5 text-[#b8aea2] transition-colors hover:border-[#e56b38] hover:text-[#f4f0ea]"
          >
            <Github className="h-4 w-4" />
          </a>
          <a
            href="https://www.linkedin.com/in/efe13-dev/"
            aria-label="LinkedIn"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg border border-[#3d352e]/50 bg-[#161412]/70 p-2.5 text-[#b8aea2] transition-colors hover:border-[#e56b38] hover:text-[#f4f0ea]"
          >
            <Linkedin className="h-4 w-4" />
          </a>
          <a
            href="mailto:efe13dev@gmail.com"
            aria-label="Email"
            className="rounded-lg border border-[#3d352e]/50 bg-[#161412]/70 p-2.5 text-[#b8aea2] transition-colors hover:border-[#e56b38] hover:text-[#f4f0ea]"
          >
            <Mail className="h-4 w-4" />
          </a>
        </div>
      </div>
    </footer>
  );
}
