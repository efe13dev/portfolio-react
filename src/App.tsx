import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

function AnimatedSection({ children, className }: { children: React.ReactNode, className?: string }) {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true });

  useEffect(() => {
    if (inView) {
      controls.start('animate');
    }
  }, [controls, inView]);

  return (
    <motion.section
      ref={ref}
      initial='initial'
      animate={controls}
      variants={fadeInUp}
      className={className}
    >
      {children}
    </motion.section>
  );
}

function App() {
  return (
    <div className='min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-200 relative transition-colors duration-300'>
      {/* Background grid */}
      <div className='absolute inset-0 z-0 overflow-hidden pointer-events-none'>
        <div
          className='absolute inset-0 opacity-30 dark:opacity-20'
          style={{
            backgroundImage: `
              radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0),
              radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)
            `,
            backgroundSize: '40px 40px',
            backgroundPosition: '0 0, 20px 20px',
            maskImage:
              'radial-gradient(circle at center, black, transparent 80%)',
            WebkitMaskImage:
              'radial-gradient(circle at center, black, transparent 80%)'
          }}
        />
      </div>

      <Header />

      <main className='container mx-auto px-6 py-24 space-y-24 relative z-10'>
        <AnimatedSection>
          <Hero />
        </AnimatedSection>

        <AnimatedSection>
          <Projects />
        </AnimatedSection>

        <AnimatedSection>
          <Skills />
        </AnimatedSection>

        <AnimatedSection>
          <Contact />
        </AnimatedSection>
      </main>

      <Footer />
    </div>
  );
}

export default App;
