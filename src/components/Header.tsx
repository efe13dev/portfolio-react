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
        setActiveSection("skills");

        return;
      }

      for (const section of sections) {
        const element = document.getElementById(section);

        if (
          element &&
          scrollPosition >= element.offsetTop &&
          scrollPosition < element.offsetTop + element.offsetHeight
        ) {
          setActiveSection(section);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Check initial section

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
    <header className="fixed left-0 right-0 top-0 z-50 border-b border-[#a2b7d1]/20 bg-[#0b0f13]/90 shadow-md backdrop-blur-sm">
      <nav className="container mx-auto flex items-center justify-between p-4">
        <ul className="flex space-x-4">
          {["about", "projects", "skills"].map((section) => (
            <li key={section}>
              <Button
                variant={activeSection === section ? "secondary" : "ghost"}
                onClick={() => scrollToSection(section)}
                className={`capitalize ${
                  activeSection === section
                    ? "bg-[#324f75] text-[#eceff3] hover:bg-[#324f75]/90"
                    : "text-[#a2b7d1] hover:bg-[#a2b7d1]/10"
                }`}
              >
                {section}
              </Button>
            </li>
          ))}
        </ul>
        <Button
          variant="outline"
          className="flex items-center gap-2 border-[#a2b7d1] text-[#a2b7d1] hover:bg-[#a2b7d1]/10"
          asChild
        >
          <a href="./CV_FranciscoAntonioLorcaMulero_2025_01.pdf" download>
            <FaDownload className="h-4 w-4" />
            CV
          </a>
        </Button>
      </nav>
    </header>
  );
}
