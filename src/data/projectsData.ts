interface Project {
  id: number;
  title: string;
  description: string;
  details: string;
  technologies: string[];
  image?: string;
  link?: string;
  demoUrl?: string;
  codeUrl?: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Portfolio Personal",
    image: '/src/assets/project-1.webp',
    description: "Portfolio web desarrollado con React y TypeScript",
    details: "Un sitio web moderno y responsive que muestra mis proyectos y habilidades",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"],
    link: "https://tuportfolio.com",
    demoUrl: "https://tuportfolio.com",
    codeUrl: "https://github.com/tuusuario/portfolio"
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
  },
  {
    id: 4,
    title: "AI Chat App",
    image: '/src/assets/project-4.webp',
    description: "Aplicación de chat con inteligencia artificial",
    details: "Una aplicación web que utiliza GPT-4 para mantener conversaciones inteligentes con los usuarios. Incluye características como historial de chat, diferentes personalidades de AI y exportación de conversaciones.",
    technologies: ["Next.js", "OpenAI API", "Prisma", "PostgreSQL", "WebSocket"],
    link: "https://aichat.com"
  },
  {
    id: 5,
    title: "E-commerce Dashboard",
    image: '/src/assets/project-5.webp',
    description: "Panel de control para tienda online",
    details: "Dashboard completo para gestionar una tienda online, con análisis en tiempo real, gestión de inventario, pedidos y clientes. Incluye gráficos interactivos y reportes personalizables.",
    technologies: ["React", "Redux", "Material-UI", "Chart.js", "Node.js", "Express"],
    link: "https://dashboard-demo.com"
  },
  {
    id: 6,
    title: "Task Flow",
    image: '/src/assets/project-6.webp',
    description: "Aplicación de gestión de proyectos y tareas",
    details: "Herramienta colaborativa para la gestión de proyectos con características como Kanban boards, seguimiento de tiempo, asignación de tareas y generación de informes. Integración con GitHub y Slack.",
    technologies: ["Vue 3", "Pinia", "TailwindCSS", "Supabase", "TypeScript"],
    link: "https://taskflow-app.com"
  }
];
