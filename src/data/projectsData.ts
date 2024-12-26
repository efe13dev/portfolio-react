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
    title: 'Protectora Huellas',
    image: '/src/assets/images/huellas-opt.webp',
    description: 'Web de una protectora de animales',
    details:
      'Ofrece información sobre animales en adopción y contacto con el equipo de la protectora.',
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
    link: 'https://huellas-protectora.vercel.app/',

    codeUrl: 'https://github.com/efe13dev/huellas-nextjs'
  },
  {
    id: 2,
    title: 'App Gestion Huellas',
    image: '/src/assets/images/huellas-form-opt.webp',
    description: 'Gestiona las adopciones',
    details:
      'Esta app permite gestionar las adopciones de los animales que se muestran en la web de la protectora. Se requiere autenticación para acceder.',
    technologies: ['Next.js', 'NextAuth', 'Sharp', 'Shadcn UI'],
    link: 'https://huellas-gestion.vercel.app/',
    codeUrl: 'https://github.com/efe13dev/huellas-form-nextjs'
  },
  {
    id: 3,
    title: 'Meetups',
    image: '/src/assets/images/meetups-opt.webp',
    description: 'Aplicacion para organizar reuniones',
    details:
      'Permite el registro de usuarios y la creacion de meetups e inscripcion a las mismos.',
    technologies: ['React', 'Node.js', 'MySQL', 'Tailwind CSS'],
    demoUrl: 'https://www.youtube.com/watch?v=pXPKdNpGtCQ',
    codeUrl: 'https://github.com/efe13dev/meetups-frontend'
  },
  {
    id: 4,
    title: 'Que Comemos Hoy',
    image: '/src/assets/images/que-comemos-hoy-opt.webp',
    description: 'Aplicación Android de comidas',
    details:
      'Es una Apk para Android que te permite gestionar un menú semanal, además de poder ver una lista de recetas previamente añadidas.',
    technologies: ['React Native', 'Expo', 'Supabase', 'PostgreSQL'],
    codeUrl: 'https://github.com/efe13dev/QueComemosHoy/'
  },
  {
    id: 5,
    title: 'Juego De Memoria',
    image: '/src/assets/images/parejas-opt.webp',
    description: 'Juego de cartas para ejercitar la memoria',
    details:
      'Consiste en voltear las 16 cartas que se muestran en el tablero y encontrar el par de cartas que tienen la misma imagen en el menor numero de intentos posibles.',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    link: 'https://descubre-parejas.vercel.app/',
    codeUrl: 'https://github.com/efe13dev/descubre-parejas'
  },
  {
    id: 6,
    title: 'Tres en Raya',
    image: '/src/assets/images/tic-tac-toe-opt.webp',
    description:
      'Juego clásico de "Tres en Raya" (también conocido como "Tic-Tac-Toe")',
    details:
      'El objetivo es ser el primero en formar una línea de tres símbolos (ya sea en fila, columna o diagonal) en un tablero de 3x3.',
    technologies: ['React', 'CSS', 'JavaScript', 'Vite'],
    link: 'https://tres-en-raya-smoky.vercel.app/',
    codeUrl: 'https://github.com/efe13dev/tres-en-raya'
  }
];
