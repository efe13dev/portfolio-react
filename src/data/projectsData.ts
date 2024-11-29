interface Project {
  id: number;
  title: string;
  description: string;
  details: string;
  technologies: string[];
  link?: string;
  image?: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Portfolio Personal",
    image: '/src/assets/project-1.webp',
    description: "Portfolio web desarrollado con React y TypeScript",
    details: "Un sitio web moderno y responsive que muestra mis proyectos y habilidades",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"],
    link: "https://tuportfolio.com"
  },
  {
    id: 2,
    title: "Proyecto 2",
    image: '/src/assets/project-2.webp',
    description: "Descripción breve del proyecto 2",
    details: "Detalles completos del proyecto 2",
    technologies: ["React", "Node.js", "MongoDB"],
    link: "https://proyecto2.com"
  },
  {
    id: 3,
    title: "Proyecto 3",
    image: '/src/assets/projecto-3.png',
    description: "Descripción breve del proyecto 3",
    details: "Detalles completos del proyecto 3",
    technologies: ["Vue.js", "Firebase", "Tailwind CSS"],
    link: "https://proyecto3.com"
  }
];
