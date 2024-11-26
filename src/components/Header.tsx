import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import { Button } from '@/components/ui/button';
import { Moon, Sun } from 'lucide-react';

export function Header() {
  const [activeSection, setActiveSection] = useState('');
  const { theme, setTheme } = useTheme();

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
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  };

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <header className='bg-white dark:bg-gray-800 bg-opacity-90 dark:bg-opacity-90 backdrop-blur-sm shadow-sm fixed top-0 left-0 right-0 z-10'>
      <nav className='container mx-auto p-4 flex justify-between items-center'>
        <ul className='flex space-x-4'>
          {['about', 'projects', 'skills', 'contact'].map((section) => (
            <li key={section}>
              <Button
                variant='ghost'
                className={`capitalize text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white ${
                  activeSection === section
                    ? 'bg-gray-100 dark:bg-gray-700'
                    : ''
                }`}
                onClick={() => scrollToSection(section)}
              >
                {section}
              </Button>
            </li>
          ))}
        </ul>
        <Button
          variant='ghost'
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
