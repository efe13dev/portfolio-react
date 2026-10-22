import { ArrowDownToLine } from "lucide-react";
import { useEffect, useState } from "react";

import { cn } from "@/lib/utils";

const NAV_ITEMS = [
  { id: "about", index: "01", label: "Inicio" },
  { id: "projects", index: "02", label: "Proyectos" },
  { id: "skills", index: "03", label: "Stack" },
  { id: "contact", index: "04", label: "Contacto" },
];

export function Header() {
  const [activeSection, setActiveSection] = useState("about");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 100) {
        setActiveSection((prev) => (prev === "contact" ? prev : "contact"));

        return;
      }

      for (const item of NAV_ITEMS) {
        const element = document.getElementById(item.id);

        if (
          element &&
          scrollPosition >= element.offsetTop &&
          scrollPosition < element.offsetTop + element.offsetHeight
        ) {
          setActiveSection((prev) => (prev === item.id ? prev : item.id));
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);

    if (element) {
      window.scrollTo({
        top: element.offsetTop - 88,
        behavior: "smooth",
      });
      setActiveSection(sectionId);
    }
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-[#3d352e]/40 bg-[#0c0b0a]/85 backdrop-blur-md">
      <nav className="container mx-auto flex max-w-6xl items-center justify-between px-6 py-3.5">
        <button
          type="button"
          onClick={() => scrollToSection("about")}
          className="group flex items-center gap-2.5 text-left"
        >
          <span className="h-2 w-2 rounded-full bg-[#e56b38] shadow-[0_0_10px_#e56b38]" />
          <span className="font-mono text-sm font-medium tracking-tight text-[#f4f0ea]">
            efe_13
          </span>
          <span className="hidden font-mono text-xs text-[#b8aea2]/50 sm:inline">/ full-stack</span>
        </button>

        <ul className="flex items-center gap-1 sm:gap-2">
          {NAV_ITEMS.map((item) => {
            const isActive = activeSection === item.id;

            return (
              <li key={item.id}>
                <button
                  type="button"
                  onClick={() => scrollToSection(item.id)}
                  className={cn(
                    "relative flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-medium transition-colors duration-200 sm:text-sm",
                    isActive
                      ? "bg-[#e56b38]/15 text-[#f4f0ea]"
                      : "text-[#b8aea2]/75 hover:bg-[#3d352e]/25 hover:text-[#f4f0ea]",
                  )}
                >
                  <span className="hidden font-mono text-[11px] text-[#e56b38] md:inline">
                    {item.index}
                  </span>
                  <span>{item.label}</span>
                  {isActive ? (
                    <span className="absolute inset-x-2 -bottom-[15px] h-px bg-[#e56b38]" />
                  ) : null}
                </button>
              </li>
            );
          })}
        </ul>

        <a
          href="./CV_FranciscoAntonioLorcaMulero_2025_01.pdf"
          download
          className="group inline-flex items-center gap-2 rounded-lg border border-[#3d352e]/80 bg-[#161412]/80 px-3.5 py-1.5 font-mono text-xs font-medium text-[#f4f0ea] transition-all duration-200 hover:border-[#e56b38] hover:bg-[#3d352e]/35"
        >
          <span>CV.pdf</span>
          <ArrowDownToLine className="h-3.5 w-3.5 text-[#e56b38] transition-transform duration-200 group-hover:translate-y-0.5" />
        </a>
      </nav>
    </header>
  );
}
