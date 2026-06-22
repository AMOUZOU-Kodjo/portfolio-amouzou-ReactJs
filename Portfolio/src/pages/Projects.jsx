import { useEffect, useRef, useState } from "react";
import { ExternalLink, Folder, Globe } from "lucide-react";

const projects = [
  {
    title: "GestDoc",
    subtitle: "Plateforme de gestion de documents scolaires",
    desc: "Application fullstack de partage de documents scolaires avec React, Express, PostgreSQL, authentification JWT, upload Cloudinary et dashboard admin.",
    techs: ["React", "Express", "PostgreSQL", "Tailwind CSS", "Prisma", "Cloudinary", "JWT", "TanStack Query"],
    github: "https://github.com/AMOUZOU-Kodjo/gestdoc",
    demo: "https://gestdoc-lac.vercel.app/",
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    title: "ETDV Église",
    subtitle: "Site web officiel",
    desc: "Application web complète pour l'église ETDV : programmes, événements, galerie média, contact et dashboard admin. Stack full-stack avec backend Express et PostgreSQL.",
    techs: ["React", "Express", "PostgreSQL", "Tailwind CSS", "Cloudinary"],
    github: "https://github.com/AMOUZOU-Kodjo/eglise-etdv",
    demo: "https://eglise-etdv.vercel.app/",
    gradient: "from-emerald-500 to-teal-500",
  },
  {
    title: "MathFunc Studio",
    subtitle: "Étude de fonctions mathématiques",
    desc: "Application web d'étude de fonctions mathématiques : dérivée symbolique, asymptotes, tableau de variations, graphe interactif, exports PDF/LaTeX/CSV. 100% client-side.",
    techs: ["React", "math.js", "KaTeX", "Chart.js", "Tailwind CSS", "DaisyUI"],
    github: "https://github.com/AMOUZOU-Kodjo/Etude-de-fonctions",
    demo: "https://etude-de-fonctions.onrender.com",
    gradient: "from-violet-500 to-purple-500",
  },
  {
    title: "SiteVideo",
    subtitle: "Plateforme de gestion de contenu multimédia",
    desc: "Plateforme fullstack de gestion et vente de contenu numérique (vidéos, PDF, audio) avec authentification JWT, catalogue filtré, bibliothèque personnelle, intégration YouTube, dashboard admin et système de rôles.",
    techs: ["React", "Express", "PostgreSQL", "Tailwind CSS", "DaisyUI", "JWT", "Cloudinary", "YouTube API", "Recharts"],
    github: "https://github.com/AMOUZOU-Kodjo/sitevideo",
    demo: "https://savoirbox.vercel.app/",
    gradient: "from-amber-500 to-orange-500",
  },
  {
    title: "Formation Python Web",
    subtitle: "Plateforme interactive d'apprentissage de Python",
    desc: "Application web interactive pour apprendre le langage Python avec éditeur de code intégré (CodeMirror), exécution en temps réel, cours interactifs et base de données Supabase pour le suivi des apprenants.",
    techs: ["React", "Supabase", "CodeMirror", "Tailwind CSS", "DaisyUI", "react-markdown"],
    github: "https://github.com/AMOUZOU-Kodjo/formation-python-web",
    demo: "https://formation-python-web.vercel.app",
    gradient: "from-rose-500 to-pink-500",
  },
  {
    title: "Formation Python Complète",
    subtitle: "Formation Python du débutant à l'expert",
    desc: "Formation complète et progressive en programmation Python découpée en 4 parties et 36 modules couvrant les fondamentaux, la POO, les concepts avancés et la spécialisation (API REST, Data Science, Web Scraping).",
    techs: ["Python", "Jupyter Notebook", "FastAPI", "SQLAlchemy", "Pandas", "Async/Await"],
    github: "https://github.com/AMOUZOU-Kodjo/FormationCompleteProgrammationPython",
    demo: null,
    gradient: "from-yellow-500 to-green-500",
  },
  {
    title: "Gestion Garage",
    subtitle: "Application de gestion de garage automobile",
    desc: "Application fullstack de gestion de garage : gestion des clients, véhicules, rendez-vous, factures et suivi des réparations. Interface moderne avec animations Framer Motion.",
    techs: ["React", "Express", "Tailwind CSS", "DaisyUI", "Framer Motion", "Axios"],
    github: "https://github.com/AMOUZOU-Kodjo/garage",
    demo: "https://garage-auto-lemon.vercel.app",
    gradient: "from-indigo-500 to-blue-500",
  },
  {
    title: "Mon Archive",
    subtitle: "Plateforme d'archivage de documents",
    desc: "Application fullstack d'archivage et de gestion de documents avec upload par glisser-déposer (React Dropzone), catégorisation, recherche et stockage sécurisé.",
    techs: ["React", "Express", "Tailwind CSS", "DaisyUI", "Framer Motion", "React Dropzone"],
    github: "https://github.com/AMOUZOU-Kodjo/Mon-archive",
    demo: "https://mon-archive.vercel.app",
    gradient: "from-cyan-500 to-blue-500",
  },
];

function FadeIn({ children, delay = 0, className = "" }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); observer.disconnect(); } },
      { threshold: 0.05 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

export default function Projects() {
  return (
    <div className="max-w-6xl mx-auto">
      <FadeIn>
        <h1 className="text-4xl font-bold mb-2">Mes projets</h1>
        <p className="text-base-content/60 mb-10">Quelques réalisations</p>
      </FadeIn>

      {projects.length === 0 ? (
        <div className="text-center py-20 text-base-content/40">
          <Folder size={48} className="mx-auto mb-4 opacity-50" />
          <p>Aucun projet pour le moment.</p>
        </div>
      ) : (
        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project, i) => (
            <FadeIn key={project.title} delay={200 + i * 120}>
              <div className="group relative bg-base-200/40 border border-base-300 hover:border-primary/30 rounded-2xl overflow-hidden transition-all duration-500 hover:shadow-xl hover:-translate-y-1">
                <div className={`h-2 bg-gradient-to-r ${project.gradient}`} />

                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${project.gradient} flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                        <Folder size={22} className="text-white" />
                      </div>
                      <div>
                        <h2 className="text-xl font-bold group-hover:text-primary transition-colors">{project.title}</h2>
                        {project.subtitle && (
                          <p className="text-sm text-base-content/50">{project.subtitle}</p>
                        )}
                      </div>
                    </div>
                  </div>

                  <p className="text-sm text-base-content/70 leading-relaxed">{project.desc}</p>

                  <div className="flex flex-wrap gap-1.5 mt-4">
                    {project.techs.map((tech) => (
                      <span
                        key={tech}
                        className="badge badge-sm bg-primary/10 text-primary border-none hover:bg-primary/20 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-3 mt-6 pt-4 border-t border-base-300">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-ghost btn-sm gap-2 flex-1 hover:bg-primary/10 hover:text-primary transition-all"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
                        Code
                      </a>
                    )}
                    {project.demo ? (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`btn btn-sm gap-2 flex-1 bg-gradient-to-r ${project.gradient} text-white border-none hover:opacity-90 transition-opacity shadow-lg`}
                      >
                        <Globe size={16} />
                        Demo
                      </a>
                    ) : (
                      <button className="btn btn-sm gap-2 flex-1 btn-ghost text-base-content/30 cursor-not-allowed" disabled>
                        <Globe size={16} />
                        Demo
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      )}
    </div>
  );
}
