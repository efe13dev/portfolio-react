'use client';

import { Code, Database, Globe, Palette, Server } from 'lucide-react';
import { InfiniteMovingCards } from './ui/infinite-moving-cards';

const skills = [
  {
    quote: '',
    name: (
      <div className="flex items-center justify-center min-w-[250px] w-[250px] gap-3 text-2xl">
        <Code className="text-[#b87163] w-10 h-10 shrink-0" />
        <span className="text-[#b87163] whitespace-nowrap">HTML</span>
      </div>
    ),
    title: 'Frontend',
  },
  {
    quote: '',
    name: (
      <div className="flex items-center justify-center min-w-[250px] w-[250px] gap-3 text-2xl">
        <Palette className="text-[#2FB4D9] w-10 h-10 shrink-0" />
        <span className="text-[#2FB4D9] whitespace-nowrap">Tailwind CSS</span>
      </div>
    ),
    title: 'Styling',
  },
  {
    quote: '',
    name: (
      <div className="flex items-center justify-center min-w-[250px] w-[250px] gap-3 text-2xl">
        <Code className="text-[#4FB3D9] w-10 h-10 shrink-0" />
        <span className="text-[#4FB3D9] whitespace-nowrap">React</span>
      </div>
    ),
    title: 'Frontend',
  },
  {
    quote: '',
    name: (
      <div className="flex items-center justify-center min-w-[250px] w-[250px] gap-3 text-2xl">
        <Globe className="text-[#d1d1d1] w-10 h-10 shrink-0" />
        <span className="text-[#d1d1d1] whitespace-nowrap">Next.js</span>
      </div>
    ),
    title: 'Frontend',
  },
  {
    quote: '',
    name: (
      <div className="flex items-center justify-center min-w-[250px] w-[250px] gap-3 text-2xl">
        <Code className="text-[#4A7BB7] w-10 h-10 shrink-0" />
        <span className="text-[#4A7BB7] whitespace-nowrap">TypeScript</span>
      </div>
    ),
    title: 'Language',
  },
  {
    quote: '',
    name: (
      <div className="flex items-center justify-center min-w-[250px] w-[250px] gap-3 text-2xl">
        <Server className="text-[#8ba88a] w-10 h-10 shrink-0" />
        <span className="text-[#8ba88a] whitespace-nowrap">Node.js</span>
      </div>
    ),
    title: 'Backend',
  },
  {
    quote: '',
    name: (
      <div className="flex items-center justify-center min-w-[250px] w-[250px] gap-3 text-2xl">
        <Database className="text-[#2B5C8E] w-10 h-10 shrink-0" />
        <span className="text-[#2B5C8E] whitespace-nowrap">MySQL</span>
      </div>
    ),
    title: 'Database',
  },
  {
    quote: '',
    name: (
      <div className="flex items-center justify-center min-w-[250px] w-[250px] gap-3 text-2xl">
        <Globe className="text-[#d1d1d1] w-10 h-10 shrink-0" />
        <span className="text-[#d1d1d1] whitespace-nowrap">Astro</span>
      </div>
    ),
    title: 'Frontend',
  },
];

export function Skills() {
  return (
    <section id="skills" className="space-y-4">
      <h2 className="text-4xl font-bold text-[#a2b7d1] font-heading">
        Habilidades
      </h2>
      <div className="h-32 rounded-md flex flex-col antialiased items-center justify-center relative overflow-hidden">
        <InfiniteMovingCards
          items={skills}
          direction="right"
          speed="normal"
          pauseOnHover={true}
          className="py-4"
        />
      </div>
    </section>
  );
}
