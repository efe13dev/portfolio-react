import { useState, useEffect } from 'react';
import { useTheme } from '../hooks/useTheme';
import { Moon, Sun } from 'lucide-react';
import { Button } from './ui/button';

export function Header() {
  const [activeSection, setActiveSection] = useState('');
  const { theme, toggleTheme } = useTheme();

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
    <header className='bg-white dark:bg-gray-800 bg-opacity-90 dark:bg-opacity-90 backdrop-blur-sm shadow-sm fixed top-0 left-0 right-0 z-50'>
      <nav className='container mx-auto p-4 flex justify-between items-center'>
        <ul className='flex space-x-4'>
          {['about', 'projects', 'skills', 'contact'].map((section) => (
            <li key={section}>
              <Button
                variant={activeSection === section ? 'secondary' : 'ghost'}
                onClick={() => scrollToSection(section)}
                className='capitalize'
              >
                {section}
              </Button>
            </li>
          ))}
        </ul>
        <Button
          variant="ghost"
          size="icon"
          onClick={toggleTheme}
          aria-label='Toggle theme'
        >
          {theme === 'light' ? (
            <Moon className='h-5 w-5' />
          ) : (
            <Sun className='h-5 w-5' />
          )}
        </Button>
      </nav>
    </header>
  );
}
