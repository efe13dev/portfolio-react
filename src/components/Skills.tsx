"use client";

import { AnimatePresence, LayoutGroup, motion, useReducedMotion } from "framer-motion";
import {
  Database,
  FileCode,
  Palette,
  Server,
  Smartphone,
  Sparkles,
  Workflow,
  Wrench,
} from "lucide-react";
import { forwardRef, useMemo, useState } from "react";
import {
  SiAstro,
  SiCss3,
  SiGit,
  SiJavascript,
  SiMysql,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiReact,
  SiShadcnui,
  SiSqlite,
  SiSupabase,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";

import { cn } from "@/lib/utils";

interface Skill {
  name: string;
  icon: React.ReactNode;
  color: string;
  description: string;
  docsUrl: string;
  featured?: boolean;
  /** Columnas que ocupa en el grid de escritorio (5 columnas por fila). */
  span: number;
}

interface SkillCategory {
  id: string;
  name: string;
  icon: React.ReactNode;
  skills: Skill[];
}

const categories: SkillCategory[] = [
  {
    id: "lenguajes",
    name: "Lenguajes",
    icon: <FileCode className="h-4 w-4" />,
    skills: [
      {
        name: "TypeScript",
        icon: <SiTypescript className="h-7 w-7" />,
        color: "#3178C6",
        description: "Tipado estático y genéricos",
        docsUrl: "https://www.typescriptlang.org/docs/",
        featured: true,
        span: 3,
      },
      {
        name: "JavaScript",
        icon: <SiJavascript className="h-7 w-7" />,
        color: "#F7DF1E",
        description: "ES2023+, Async/Await",
        docsUrl: "https://developer.mozilla.org/es/docs/Web/JavaScript",
        span: 2,
      },
    ],
  },
  {
    id: "frameworks",
    name: "Frameworks",
    icon: <Sparkles className="h-4 w-4" />,
    skills: [
      {
        name: "React",
        icon: <SiReact className="h-7 w-7" />,
        color: "#61DAFB",
        description: "Hooks, Context y RSC",
        docsUrl: "https://react.dev/",
        featured: true,
        span: 3,
      },
      {
        name: "Next.js",
        icon: <SiNextdotjs className="h-7 w-7" />,
        color: "#ECEFF3",
        description: "App Router, SSR, ISR",
        docsUrl: "https://nextjs.org/docs",
        span: 1,
      },
      {
        name: "Astro",
        icon: <SiAstro className="h-7 w-7" />,
        color: "#FF5D01",
        description: "Islas y Content Collections",
        docsUrl: "https://docs.astro.build",
        span: 1,
      },
    ],
  },
  {
    id: "estilos",
    name: "Estilos",
    icon: <Palette className="h-4 w-4" />,
    skills: [
      {
        name: "Tailwind CSS",
        icon: <SiTailwindcss className="h-7 w-7" />,
        color: "#38BDF8",
        description: "Utility-first y design tokens",
        docsUrl: "https://tailwindcss.com/docs",
        featured: true,
        span: 2,
      },
      {
        name: "CSS",
        icon: <SiCss3 className="h-7 w-7" />,
        color: "#1572B6",
        description: "Grid, Flexbox y variables",
        docsUrl: "https://developer.mozilla.org/es/docs/Web/CSS",
        span: 2,
      },
      {
        name: "shadcn/ui",
        icon: <SiShadcnui className="h-7 w-7" />,
        color: "#E4E4E7",
        description: "Componentes accesibles",
        docsUrl: "https://ui.shadcn.com/",
        span: 1,
      },
    ],
  },
  {
    id: "backend",
    name: "Backend",
    icon: <Server className="h-4 w-4" />,
    skills: [
      {
        name: "Node.js",
        icon: <SiNodedotjs className="h-7 w-7" />,
        color: "#5FA04E",
        description: "Event Loop y Streams",
        docsUrl: "https://nodejs.org/en/docs",
        span: 2,
      },
      {
        name: "Supabase",
        icon: <SiSupabase className="h-7 w-7" />,
        color: "#3ECF8E",
        description: "Auth, Realtime y Storage",
        docsUrl: "https://supabase.com/docs",
        featured: true,
        span: 3,
      },
    ],
  },
  {
    id: "bases-de-datos",
    name: "Bases de datos",
    icon: <Database className="h-4 w-4" />,
    skills: [
      {
        name: "PostgreSQL",
        icon: <SiPostgresql className="h-7 w-7" />,
        color: "#4DA8DA",
        description: "JSONB, CTEs y triggers",
        docsUrl: "https://www.postgresql.org/docs/",
        featured: true,
        span: 2,
      },
      {
        name: "MySQL",
        icon: <SiMysql className="h-7 w-7" />,
        color: "#4479A1",
        description: "Relacional e índices",
        docsUrl: "https://dev.mysql.com/doc/",
        span: 1,
      },
      {
        name: "SQLite",
        icon: <SiSqlite className="h-7 w-7" />,
        color: "#00A8E1",
        description: "Embebida, sin servidor",
        docsUrl: "https://www.sqlite.org/docs.html",
        span: 2,
      },
    ],
  },
  {
    id: "devops",
    name: "DevOps & Tooling",
    icon: <Workflow className="h-4 w-4" />,
    skills: [
      {
        name: "Git",
        icon: <SiGit className="h-7 w-7" />,
        color: "#F05032",
        description: "Branching, Rebase y CI/CD",
        docsUrl: "https://git-scm.com/doc",
        featured: true,
        span: 4,
      },
      {
        name: "React Native",
        icon: <Smartphone className="h-7 w-7" />,
        color: "#61DAFB",
        description: "Móvil multiplataforma",
        docsUrl: "https://reactnative.dev/docs/getting-started",
        span: 1,
      },
    ],
  },
];

interface FlatSkill extends Skill {
  categoryId: string;
  categoryName: string;
}

const allSkills: FlatSkill[] = categories.flatMap((category) =>
  category.skills.map((skill) => ({
    ...skill,
    categoryId: category.id,
    categoryName: category.name,
  })),
);

function FilterPill({
  active,
  icon,
  label,
  count,
  onClick,
}: {
  active: boolean;
  icon: React.ReactNode;
  label: string;
  count: number;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className={cn(
        "group relative flex shrink-0 items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium transition-colors duration-300",
        active
          ? "border-transparent text-white"
          : "border-[#324f75]/40 text-[#a2b7d1]/80 hover:border-[#638ec6]/60 hover:text-[#eceff3]",
      )}
    >
      {active && (
        <motion.span
          layoutId="skill-pill-active"
          transition={{ type: "spring", stiffness: 380, damping: 32 }}
          className="absolute inset-0 -z-10 rounded-full bg-gradient-to-br from-[#324f75] to-[#638ec6] shadow-lg shadow-[#324f75]/30"
        />
      )}
      <span className={cn("transition-colors", active ? "text-white" : "text-[#638ec6]")}>
        {icon}
      </span>
      {label}
      <span
        className={cn(
          "rounded-full px-1.5 py-0.5 text-[10px] font-semibold tabular-nums transition-colors",
          active ? "bg-white/20 text-white" : "bg-[#324f75]/20 text-[#a2b7d1]/70",
        )}
      >
        {count}
      </span>
    </button>
  );
}

// El grid de escritorio tiene 5 columnas y cada categoría reparte sus cards
// con anchos propios (skill.span) para que cada una tenga una composición única.
const LG_SPAN: Record<number, string> = {
  1: "lg:col-span-1",
  2: "lg:col-span-2",
  3: "lg:col-span-3",
  4: "lg:col-span-4",
  5: "lg:col-span-5",
};

function spanClass(skill: Skill) {
  // En móvil el card destacado ocupa el ancho completo; el resto media columna.
  const base = skill.featured ? "col-span-2" : "col-span-1";

  // En desktop se fija todo a la primera fila: así, si una card sale conserva su
  // ancho ~180ms, no provoca un salto a una segunda fila (el grid recorta).
  return cn(base, "lg:row-start-1", LG_SPAN[skill.span] ?? "lg:col-span-1");
}

const SkillTile = forwardRef<HTMLAnchorElement, { skill: FlatSkill; reduceMotion: boolean }>(
  function SkillTile({ skill, reduceMotion }, ref) {
    return (
      <motion.a
        ref={ref}
        layout={!reduceMotion}
        initial={reduceMotion ? false : { opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0 }}
        transition={{
          layout: { type: "spring", stiffness: 300, damping: 32 },
          opacity: { duration: 0.18, ease: "easeOut" },
          scale: { duration: 0.28, ease: [0.4, 0, 0.2, 1] },
        }}
        href={skill.docsUrl}
        target="_blank"
        rel="noreferrer"
        className={cn(
          "group relative flex min-h-[7.5rem] flex-col justify-between overflow-hidden rounded-2xl border border-[#324f75]/30 bg-gradient-to-br from-[#0b1628]/50 to-[#0b0f13]/80 p-4 transition-colors duration-300 hover:border-[#638ec6]/50",
          spanClass(skill),
        )}
      >
        <motion.div
          layout="position"
          className="pointer-events-none absolute inset-0 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-20"
          style={{ backgroundColor: skill.color }}
        />
        <motion.div
          layout="position"
          className="pointer-events-none absolute inset-x-0 top-0 h-px opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          style={{
            background: `linear-gradient(to right, transparent, ${skill.color}, transparent)`,
          }}
        />

        <AnimatePresence mode="popLayout" initial={false}>
          <motion.div
            key={skill.name}
            initial={reduceMotion ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.22, ease: "easeInOut" }}
            className="relative flex h-full flex-col justify-between gap-4"
          >
            <div className="flex items-start justify-between gap-3">
              <div
                className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-white/5 bg-white/[0.03] transition-transform duration-300 group-hover:scale-110"
                style={{ color: skill.color }}
              >
                {skill.icon}
              </div>
              <span className="rounded-full border border-[#324f75]/30 bg-[#0b0f13]/40 px-2 py-0.5 text-[10px] font-medium text-[#a2b7d1]/50">
                {skill.categoryName}
              </span>
            </div>

            <div className="min-w-0">
              <p className="truncate text-sm font-semibold text-[#eceff3]">{skill.name}</p>
              <p className="truncate text-xs text-[#a2b7d1]/60">{skill.description}</p>
            </div>
          </motion.div>
        </AnimatePresence>
      </motion.a>
    );
  },
);

export function Skills() {
  const reduceMotion = useReducedMotion() ?? false;
  const [activeFilter, setActiveFilter] = useState<string>(categories[0].id);

  const visibleSkills = useMemo(
    () => allSkills.filter((skill) => skill.categoryId === activeFilter),
    [activeFilter],
  );

  return (
    <section id="skills" className="relative space-y-10">
      <div className="space-y-4">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-[#324f75] to-[#638ec6]">
            <Wrench className="h-5 w-5 text-white" />
          </div>
          <h2 className="font-heading text-4xl font-bold text-[#eceff3] md:text-5xl">
            Habilidades
          </h2>
        </div>
        <p className="max-w-2xl text-lg text-[#a2b7d1]/70">
          Filtra por disciplina y el bento se reorganiza para mostrar las tecnologías con las que
          construyo.
        </p>
      </div>

      <div className="flex flex-wrap gap-2.5">
        {categories.map((category) => (
          <FilterPill
            key={category.id}
            active={activeFilter === category.id}
            icon={category.icon}
            label={category.name}
            count={category.skills.length}
            onClick={() => setActiveFilter(category.id)}
          />
        ))}
      </div>

      <LayoutGroup>
        <div className="relative grid grid-cols-2 items-stretch gap-3 lg:grid-cols-5 lg:overflow-hidden">
          <AnimatePresence mode="popLayout" initial={false}>
            {visibleSkills.map((skill, index) => (
              <SkillTile key={`slot-${index}`} skill={skill} reduceMotion={reduceMotion} />
            ))}
          </AnimatePresence>
        </div>
      </LayoutGroup>

      <div className="relative overflow-hidden rounded-2xl border border-[#324f75]/30 bg-gradient-to-r from-[#0b1628] via-[#0b0f13] to-[#0b1628] p-8">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMSIgZmlsbD0iIzMyNGY3NSIgLz48L3N2Zz4=')] opacity-20" />
        <div className="relative z-10 flex flex-col items-center gap-4 text-center">
          <div>
            <motion.svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-8 w-8 text-[#638ec6]"
            >
              <polyline points="4 17 10 11 4 5" />
              <motion.line
                x1="12"
                y1="19"
                x2="20"
                y2="19"
                animate={reduceMotion ? undefined : { opacity: [1, 0.15, 1] }}
                transition={{ duration: 1.1, repeat: Infinity, ease: "easeInOut" }}
              />
            </motion.svg>
          </div>
          <p className="text-[#eceff3]/80">
            Abierto a incorporar nuevas tecnologías cuando aporten valor real al proyecto.
          </p>
        </div>
      </div>
    </section>
  );
}
