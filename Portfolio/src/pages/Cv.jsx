import { useEffect, useRef, useState } from "react";
import { GraduationCap, Briefcase, Code2, Mail, Phone, MapPin, Globe, Heart, Users, Award, ChevronRight, ExternalLink, Download } from "lucide-react";
import photo from "../assets/IMG-20260402-WA0064.jpg";

const experience = [
  {
    title: "Professeur de Sciences Physiques et Technologie",
    company: "CS Le Rossignol, Louis Pasteur, ZS Présent Elites",
    place: "Agoè-Légbassito, Lomé",
    period: "Sept. 2025 - Présent",
  },
  {
    title: "Professeur de Sciences Physiques et Technologie / Mathématiques",
    company: "CC JBP DE MORETAN",
    period: "Sept. 2024 - Juill. 2025",
  },
  {
    title: "Élève arbitre",
    company: "Centre de Formation des Arbitres de l'Université de Lomé (CFA-UL)",
    period: "Janv. - Avril 2019",
  },
  {
    title: "Délégué du TP PHY 314",
    company: "Département de Physique, Université de Lomé",
    period: "2019",
  },
];

const education = [
  { title: "Licence en Physique", school: "Université de Lomé", mention: "Assez-Bien", year: "2024" },
  { title: "Baccalauréat II Général Série D", school: "Lycée Amoussoukopé", mention: "Bien", year: "2020" },
  { title: "BEPC", school: "Lycée Amoussoukopé", mention: "Bien", year: "2016" },
  { title: "CEPD", school: "EPP Banikopé", year: "2012" },
];

const trainings = [
  "Programme en Python et Fortran 90 — Université de Lomé (Janv. 2022 - Mai 2023)",
  "Développement web Frontend : HTML, CSS, JS, React JS",
  "Formation Adobe Photoshop CC — Mindluster (1 mois)",
  "Initiation aux outils informatiques : Word, Excel, PowerPoint — Lycée Amoussoukopé (Janv. - Avril 2019)",
];

const skillsList = [
  { cat: "Frontend", items: "HTML, CSS, JavaScript, TypeScript, React, Tailwind CSS, DaisyUI", level: 90 },
  { cat: "Backend", items: "Node.js, Express, PostgreSQL, Prisma", level: 75 },
  { cat: "Outils", items: "Git, VS Code, Cloudinary, Vercel, Render, Photoshop CC", level: 80 },
  { cat: "Programmation", items: "Python, Fortran 90", level: 70 },
];

const languages = [
  { name: "Français", level: "Courant", percent: 95 },
  { name: "Anglais", level: "Intermédiaire", percent: 60 },
  { name: "Éwé", level: "Langue maternelle", percent: 100 },
];

const projects = [
  { name: "GestDoc", desc: "Plateforme de gestion de documents scolaires", tech: "React, Express, PostgreSQL", url: "https://github.com/AMOUZOU-Kodjo/gestdoc" },
  { name: "ETDV Église", desc: "Site web officiel avec dashboard admin", tech: "React, Express, PostgreSQL, Cloudinary", url: "https://github.com/AMOUZOU-Kodjo/eglise-etdv" },
  { name: "MathFunc Studio", desc: "Étude de fonctions mathématiques", tech: "React, math.js, KaTeX, Chart.js", url: "https://github.com/AMOUZOU-Kodjo/Etude-de-fonctions" },
  { name: "SiteVideo", desc: "Gestion et vente de contenu multimédia", tech: "React, Express, PostgreSQL, JWT, Cloudinary", url: "https://github.com/AMOUZOU-Kodjo/sitevideo" },
];

function AnimatedSection({ children, className = "", delay = 0 }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); observer.disconnect(); } },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

function SkillBar({ label, percent, color = "bg-primary" }) {
  const [width, setWidth] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setWidth(percent); observer.disconnect(); } },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [percent]);

  return (
    <div ref={ref} className="space-y-1">
      <div className="flex justify-between text-sm">
        <span className="font-medium">{label}</span>
        <span className="text-base-content/50">{percent}%</span>
      </div>
      <div className="h-2 bg-base-300 rounded-full overflow-hidden">
        <div
          className={`h-full rounded-full transition-all duration-1000 ease-out ${color}`}
          style={{ width: `${width}%` }}
        />
      </div>
    </div>
  );
}

export default function Cv() {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-4xl font-bold">Curriculum Vitae</h1>
          <p className="text-base-content/60 mt-1">Kodjo AMOUZOU</p>
        </div>
      </div>

      <div className="bg-base-100 rounded-2xl border border-base-300 shadow-xl overflow-hidden">
        <AnimatedSection className="bg-gradient-to-r from-primary/10 via-primary/5 to-base-100 p-8 border-b border-base-300">
          <div className="flex items-center gap-6">
            <div className="avatar">
              <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2 transition-transform duration-500 hover:scale-105">
                <img src={photo} alt="Kodjo AMOUZOU" />
              </div>
            </div>
            <div className="flex-1">
              <h2 className="text-3xl font-bold">Kodjo AMOUZOU</h2>
              <p className="text-primary font-medium text-lg">Développeur Frontend & Enseignant</p>
              <div className="flex flex-wrap gap-x-5 gap-y-1 text-sm text-base-content/60 mt-2">
                <span className="flex items-center gap-1.5 hover:text-primary transition-colors"><Mail size={14} /> phipsipy@gmail.com</span>
                <span className="flex items-center gap-1.5 hover:text-primary transition-colors"><Phone size={14} /> 91 03 87 27</span>
                <span className="flex items-center gap-1.5 hover:text-primary transition-colors"><MapPin size={14} /> Togo</span>
              </div>
            </div>
            <div className="hidden sm:block text-xs text-base-content/50 text-right leading-relaxed">
              <p>Célibataire</p>
              <p>Nationalité togolaise</p>
            </div>
          </div>
        </AnimatedSection>

        <div className="p-8 space-y-10">
          <AnimatedSection delay={100}>
            <section>
              <h3 className="text-lg font-semibold flex items-center gap-2 mb-5 text-primary">
                <Briefcase size={20} /> Expériences professionnelles
              </h3>
              <div className="relative pl-6 border-l-2 border-primary/30 space-y-6">
                {experience.map((exp, i) => (
                  <div key={exp.title} className="relative">
                    <div className="absolute -left-[25px] top-1 w-3 h-3 rounded-full bg-primary border-2 border-base-100" />
                    <div className="flex items-start justify-between gap-4 group">
                      <div>
                        <h4 className="font-semibold group-hover:text-primary transition-colors">{exp.title}</h4>
                        <p className="text-sm text-primary/80">{exp.company}</p>
                        {exp.place && <p className="text-xs text-base-content/50 mt-0.5">{exp.place}</p>}
                      </div>
                      <span className="text-xs text-base-content/50 shrink-0 whitespace-nowrap bg-base-200/80 px-2 py-0.5 rounded-full">{exp.period}</span>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </AnimatedSection>

          <AnimatedSection delay={200}>
            <section>
              <h3 className="text-lg font-semibold flex items-center gap-2 mb-5 text-primary">
                <GraduationCap size={20} /> Formation et diplômes
              </h3>
              <div className="grid gap-4 sm:grid-cols-2">
                {education.map((edu, i) => (
                  <div
                    key={edu.title}
                    className="flex items-start justify-between gap-4 p-4 rounded-xl bg-base-200/50 border border-base-300 hover:border-primary/30 hover:bg-primary/5 transition-all duration-300 group"
                  >
                    <div>
                      <p className="font-semibold group-hover:text-primary transition-colors">{edu.title}</p>
                      <p className="text-sm text-base-content/70 mt-0.5">{edu.school}{edu.mention ? ` — ${edu.mention}` : ""}</p>
                    </div>
                    <span className="text-xs text-base-content/50 shrink-0 bg-base-300/70 px-2 py-0.5 rounded-full">{edu.year}</span>
                  </div>
                ))}
              </div>
            </section>
          </AnimatedSection>

          <AnimatedSection delay={300}>
            <section>
              <h3 className="text-lg font-semibold flex items-center gap-2 mb-5 text-primary">
                <Award size={20} /> Formations complémentaires
              </h3>
              <div className="grid gap-3 sm:grid-cols-2">
                {trainings.map((t, i) => (
                  <div key={i} className="flex items-start gap-3 p-4 rounded-xl bg-base-200/30 border border-base-300 hover:border-primary/20 hover:bg-primary/5 transition-all duration-300">
                    <span className="w-6 h-6 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0 mt-0.5 text-xs font-bold">{i + 1}</span>
                    <span className="text-sm text-base-content/80">{t}</span>
                  </div>
                ))}
              </div>
            </section>
          </AnimatedSection>

          <AnimatedSection delay={400}>
            <section>
              <h3 className="text-lg font-semibold flex items-center gap-2 mb-5 text-primary">
                <Code2 size={20} /> Compétences techniques
              </h3>
              <div className="grid gap-6 sm:grid-cols-2">
                {skillsList.map(({ cat, items, level }) => (
                  <div key={cat} className="p-5 rounded-xl bg-base-200/40 border border-base-300 hover:shadow-lg hover:border-primary/20 transition-all duration-300">
                    <h4 className="font-semibold text-primary mb-3 flex items-center gap-2">
                      <ChevronRight size={16} className="text-primary" /> {cat}
                    </h4>
                    <p className="text-sm text-base-content/70 mb-3">{items}</p>
                    <SkillBar label="Maîtrise" percent={level} />
                  </div>
                ))}
              </div>
            </section>
          </AnimatedSection>

          <div className="grid gap-8 sm:grid-cols-3">
            <AnimatedSection delay={500}>
              <section className="p-5 rounded-xl bg-base-200/40 border border-base-300 hover:border-primary/20 hover:shadow-lg transition-all duration-300">
                <h3 className="text-lg font-semibold flex items-center gap-2 mb-4 text-primary">
                  <Globe size={18} /> Langues
                </h3>
                <div className="space-y-3">
                  {languages.map((lang) => (
                    <div key={lang.name}>
                      <div className="flex justify-between text-sm mb-1">
                        <span className="font-medium">{lang.name}</span>
                        <span className="text-base-content/50">{lang.level}</span>
                      </div>
                      <div className="h-1.5 bg-base-300 rounded-full overflow-hidden">
                        <div
                          className="h-full rounded-full bg-primary transition-all duration-1000 ease-out"
                          style={{ width: `${lang.percent}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            </AnimatedSection>

            <AnimatedSection delay={600}>
              <section className="p-5 rounded-xl bg-base-200/40 border border-base-300 hover:border-primary/20 hover:shadow-lg transition-all duration-300">
                <h3 className="text-lg font-semibold flex items-center gap-2 mb-4 text-primary">
                  <Heart size={18} /> Centres d'intérêt
                </h3>
                <div className="flex flex-wrap gap-2">
                  {["Football", "Athlétisme", "Musique", "Lecture"].map((item, i) => (
                    <span
                      key={item}
                      className="badge badge-sm bg-primary/10 text-primary border-none hover:bg-primary/20 hover:scale-105 transition-all duration-300"
                      style={{ animationDelay: `${i * 100}ms` }}
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </section>
            </AnimatedSection>

            <AnimatedSection delay={700}>
              <section className="p-5 rounded-xl bg-base-200/40 border border-base-300 hover:border-primary/20 hover:shadow-lg transition-all duration-300">
                <h3 className="text-lg font-semibold flex items-center gap-2 mb-4 text-primary">
                  <Users size={18} /> Qualités
                </h3>
                <div className="flex flex-wrap gap-2">
                  {["Dynamique", "Sociable", "Attentionné", "Collaboratif", "Partage"].map((q, i) => (
                    <span
                      key={q}
                      className="badge badge-sm bg-accent/10 text-accent border-none hover:bg-accent/20 hover:scale-105 transition-all duration-300"
                      style={{ animationDelay: `${i * 100}ms` }}
                    >
                      {q}
                    </span>
                  ))}
                </div>
              </section>
            </AnimatedSection>
          </div>

          <AnimatedSection delay={800}>
            <section className="pt-6 border-t border-base-300">
              <h3 className="text-lg font-semibold mb-5 text-primary flex items-center gap-2">
                <Code2 size={20} /> Projets
              </h3>
              <div className="grid gap-4 sm:grid-cols-2">
                {projects.map((p, i) => (
                  <a
                    key={p.name}
                    href={p.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group p-4 rounded-xl bg-base-200/30 border border-base-300 hover:border-primary/30 hover:bg-primary/5 hover:shadow-lg transition-all duration-300"
                  >
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <h4 className="font-semibold group-hover:text-primary transition-colors">{p.name}</h4>
                        <p className="text-sm text-base-content/70 mt-0.5">{p.desc}</p>
                        <p className="text-xs text-base-content/50 mt-1">{p.tech}</p>
                      </div>
                      <ExternalLink size={16} className="text-base-content/30 group-hover:text-primary shrink-0 mt-1 transition-colors" />
                    </div>
                  </a>
                ))}
              </div>
            </section>
          </AnimatedSection>

          <AnimatedSection delay={900}>
            <section className="text-center text-sm text-base-content/50 pt-4 border-t border-base-300">
              <p className="flex items-center justify-center gap-4">
                <a href="https://github.com/AMOUZOU-Kodjo" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 hover:text-primary transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
                  GitHub
                </a>
                <a href="https://www.linkedin.com/in/kodjo-amouzou-175268375" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 hover:text-primary transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                  LinkedIn
                </a>
              </p>
            </section>
          </AnimatedSection>
        </div>
      </div>
    </div>
  );
}
