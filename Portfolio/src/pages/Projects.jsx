import { ExternalLink, Folder } from "lucide-react";

const projects = [
  {
    title: "GestDoc",
    subtitle: "Plateforme de gestion de documents scolaires",
    desc: "Application fullstack de partage de documents scolaires avec React, Express, PostgreSQL, authentification JWT, upload Cloudinary et dashboard admin.",
    techs: ["React", "Express", "PostgreSQL", "Tailwind CSS", "Prisma", "Cloudinary", "JWT", "TanStack Query"],
    github: "https://github.com/AMOUZOU-Kodjo/gestdoc",
    demo: "https://gestdoc-lac.vercel.app/",
  },
  {
    title: "ETDV Église",
    subtitle: "Site web officiel",
    desc: "Application web complète pour l'église ETDV : programmes, événements, galerie média, contact et dashboard admin. Stack full-stack avec backend Express et PostgreSQL.",
    techs: ["React", "Express", "PostgreSQL", "Tailwind CSS", "Cloudinary"],
    github: "https://github.com/AMOUZOU-Kodjo/eglise-etdv",
    demo: "https://eglise-etdv.vercel.app/",
  },
  {
    title: "MathFunc Studio",
    subtitle: "Étude de fonctions mathématiques",
    desc: "Application web d'étude de fonctions mathématiques : dérivée symbolique, asymptotes, tableau de variations, graphe interactif, exports PDF/LaTeX/CSV. 100% client-side.",
    techs: ["React", "math.js", "KaTeX", "Chart.js", "Tailwind CSS", "DaisyUI"],
    github: "https://github.com/AMOUZOU-Kodjo/Etude-de-fonctions",
    demo: "https://etude-de-fonctions.onrender.com",
  },
  {
    title: "SiteVideo",
    subtitle: "Plateforme de gestion de contenu multimédia",
    desc: "Plateforme fullstack de gestion et vente de contenu numérique (vidéos, PDF, audio) avec authentification JWT, catalogue filtré, bibliothèque personnelle, intégration YouTube, dashboard admin et système de rôles.",
    techs: ["React", "Express", "PostgreSQL", "Tailwind CSS", "DaisyUI", "JWT", "Cloudinary", "YouTube API", "Recharts"],
    github: "https://github.com/AMOUZOU-Kodjo/sitevideo",
    demo: null,
  },
];

export default function Projects() {
  return (
    <div className="max-w-6xl mx-auto">
      <h1 className="text-4xl font-bold mb-2">Mes projets</h1>
      <p className="text-base-content/60 mb-10">Quelques r&eacute;alisations</p>

      {projects.length === 0 ? (
        <div className="text-center py-20 text-base-content/40">
          <Folder size={48} className="mx-auto mb-4 opacity-50" />
          <p>Aucun projet pour le moment.</p>
        </div>
      ) : (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <div
              key={project.title}
              className="card bg-base-200/60 border border-base-300 hover:border-primary/30 hover:-translate-y-1 transition-all duration-300 group"
            >
              <div className="card-body p-6">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-2">
                  <Folder size={20} className="text-primary" />
                </div>

                <h2 className="card-title text-lg">{project.title}</h2>
                {project.subtitle && (
                  <p className="text-sm text-base-content/50 -mt-1">{project.subtitle}</p>
                )}
                <p className="text-sm text-base-content/70 mt-1">{project.desc}</p>

                <div className="flex flex-wrap gap-1.5 mt-3">
                  {project.techs.map((tech) => (
                    <span key={tech} className="badge badge-sm bg-primary/10 text-primary border-none">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="card-actions justify-end mt-4 pt-3 border-t border-base-300">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-ghost btn-sm gap-1.5"
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
                      className="btn btn-primary btn-sm gap-1.5"
                    >
                      <ExternalLink size={16} />
                      Demo
                    </a>
                  ) : (
                    <button className="btn btn-primary btn-sm gap-1.5" disabled>
                      <ExternalLink size={16} />
                      Demo
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
