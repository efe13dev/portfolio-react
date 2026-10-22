export interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  details: string;
  technologies: string[];
  image?: string;
  link?: string;
  demoUrl?: string;
  codeUrl?: string;
  featured?: boolean;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Protectora Huellas",
    category: "Plataforma Web Pública",
    image: "./huellas-opt.v2.webp",
    description: "Portal web para adopción de animales y contacto con la protectora",
    details:
      "Ofrece catálogo actualizado de animales en adopción, fichas detalladas y canal directo con el equipo de la protectora.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    link: "https://huellas-protectora.vercel.app/",
    codeUrl: "https://github.com/efe13dev/huellas-nextjs",
    featured: true,
  },
  {
    id: 2,
    title: "App Gestión Huellas",
    category: "Backoffice & Autenticación",
    image: "./huellas-form-opt.webp",
    description: "Panel interno para administrar adopciones y catálogo",
    details:
      "Permite al equipo autenticado gestionar altas, bajas y estados de adopción de los animales publicados en la web principal, con optimización automática de imágenes.",
    technologies: ["Next.js", "NextAuth", "Sharp", "Shadcn UI"],
    link: "https://huellas-gestion.vercel.app/",
    codeUrl: "https://github.com/efe13dev/huellas-form-nextjs",
    featured: true,
  },
  {
    id: 4,
    title: "Qué Comemos Hoy",
    category: "Aplicación Móvil Android",
    image: "./que-comemos-hoy-opt.webp",
    description: "Planificador de menú semanal y recetario sincronizado en la nube",
    details:
      "Aplicación Android nativa con Expo que permite organizar las comidas de la semana y consultar recetas persistidas en Supabase y PostgreSQL.",
    technologies: ["React Native", "Expo", "Supabase", "PostgreSQL"],
    codeUrl: "https://github.com/efe13dev/QueComemosHoy/",
    featured: true,
  },
  {
    id: 3,
    title: "Meetups",
    category: "Full Stack Web App",
    image: "./meetups-opt.webp",
    description: "Plataforma para organizar eventos e inscripciones de usuarios",
    details:
      "Incluye registro de cuentas, creación de eventos presenciales o remotos y gestión de asistentes respaldada por Node.js y MySQL.",
    technologies: ["React", "Node.js", "MySQL", "Tailwind CSS"],
    demoUrl: "https://www.youtube.com/watch?v=pXPKdNpGtCQ",
    codeUrl: "https://github.com/efe13dev/meetups-frontend",
    featured: true,
  },
  {
    id: 5,
    title: "Juego de Memoria",
    category: "Frontend Interactiva",
    image: "./parejas-opt.v2.webp",
    description: "Tablero de 16 cartas para encontrar parejas en el menor número de intentos",
    details:
      "Implementación en JavaScript puro con control de estado de turnos, animaciones de volteo y contador de movimientos.",
    technologies: ["HTML", "CSS", "JavaScript"],
    link: "https://descubre-parejas.vercel.app/",
    codeUrl: "https://github.com/efe13dev/descubre-parejas",
  },
  {
    id: 6,
    title: "Tres en Raya",
    category: "Frontend Interactiva",
    image: "./tic-tac-toe-opt.v2.webp",
    description: "Clásico Tic-Tac-Toe con detección de jugadas ganadoras y marcador",
    details:
      "Construido con React y Vite para practicar estado inmutable, historial de turnos y reinicio rápido de partidas.",
    technologies: ["React", "CSS", "JavaScript", "Vite"],
    link: "https://tres-en-raya-smoky.vercel.app/",
    codeUrl: "https://github.com/efe13dev/tres-en-raya",
  },
];
