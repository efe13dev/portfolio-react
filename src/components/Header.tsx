import { useEffect, useState } from "react";
import { FaDownload } from "react-icons/fa";

import { Button } from "./ui/button";

export function Header() {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["about", "projects", "skills"];
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      // Verificar si estamos cerca del final de la página
      if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 100) {
        setActiveSection((prev) => (prev === "skills" ? prev : "skills"));

        return;
      }

      for (const section of sections) {
        const element = document.getElementById(section);

        if (
          element &&
          scrollPosition >= element.offsetTop &&
          scrollPosition < element.offsetTop + element.offsetHeight
        ) {
          setActiveSection((prev) => (prev === section ? prev : section));
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
      const offsetTop = element.offsetTop;

      window.scrollTo({
        top: offsetTop - 80,
        behavior: "smooth",
      });
      setActiveSection(sectionId);
    }
  };

  return (
    <header className="fixed left-0 right-0 top-0 z-50 border-b border-[#324f75]/30 bg-[#0b0f13]/80 shadow-lg shadow-black/10 backdrop-blur-md">
      <nav className="container mx-auto flex items-center justify-between px-6 py-4">
        <ul className="flex space-x-2">
          {["about", "projects", "skills"].map((section) => (
            <li key={section}>
              <Button
                variant={activeSection === section ? "secondary" : "ghost"}
                onClick={() => scrollToSection(section)}
                className={`relative capitalize transition-all duration-300 ${
                  activeSection === section
                    ? "bg-gradient-to-r from-[#324f75] to-[#638ec6] text-[#eceff3] shadow-lg shadow-[#324f75]/20 hover:shadow-xl hover:shadow-[#638ec6]/30"
                    : "text-[#a2b7d1] hover:bg-[#324f75]/20 hover:text-[#90b5ed]"
                }`}
              >
                {section}
                {activeSection === section ? (
                  <span className="absolute bottom-0 left-0 h-0.5 w-full bg-gradient-to-r from-[#638ec6] to-[#90b5ed]" />
                ) : null}
              </Button>
            </li>
          ))}
        </ul>
        <Button
          variant="outline"
          className="group flex items-center gap-2 border-2 border-[#a2b7d1] bg-transparent text-[#a2b7d1] transition-all duration-300 hover:scale-105 hover:border-[#638ec6] hover:bg-[#638ec6]/10 hover:text-[#638ec6] hover:shadow-lg hover:shadow-[#638ec6]/20"
          asChild
        >
          <a href="./CV_FranciscoAntonioLorcaMulero_2025_01.pdf" download>
            <FaDownload className="h-4 w-4 transition-transform duration-300 group-hover:translate-y-0.5" />
            <span className="font-medium">CV</span>
          </a>
        </Button>
      </nav>
    </header>
  );
}
