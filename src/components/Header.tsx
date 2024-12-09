import { useState, useEffect } from 'react';
import { Button } from './ui/button';

export function Header() {
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['about', 'projects', 'skills', 'contact'];
      const scrollPosition = window.scrollY + 100;

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

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial section
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offsetTop = element.offsetTop;
      window.scrollTo({
        top: offsetTop - 80,
        behavior: 'smooth'
      });
      setActiveSection(sectionId);
    }
  };

  return (
    <header className='bg-[#0b0f13]/90 backdrop-blur-sm shadow-md fixed top-0 left-0 right-0 z-50 border-b border-[#a2b7d1]/20'>
      <nav className='container mx-auto p-4 flex justify-between items-center'>
        <ul className='flex space-x-4'>
          {['about', 'projects', 'skills', 'contact'].map((section) => (
            <li key={section}>
              <Button
                variant={activeSection === section ? 'secondary' : 'ghost'}
                onClick={() => scrollToSection(section)}
                className={`capitalize ${
                  activeSection === section 
                    ? 'bg-[#324f75] text-[#eceff3] hover:bg-[#324f75]/90' 
                    : 'text-[#a2b7d1] hover:bg-[#a2b7d1]/10'
                }`}
              >
                {section}
              </Button>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
