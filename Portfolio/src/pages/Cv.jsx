import { useRef } from "react";
import { Download, GraduationCap, Briefcase, Code2, Mail, Phone, MapPin, Globe, Heart, Users, Printer } from "lucide-react";
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
  { cat: "Frontend", items: "HTML, CSS, JavaScript, TypeScript, React, Tailwind CSS, DaisyUI" },
  { cat: "Backend", items: "Node.js, Express, PostgreSQL, Prisma" },
  { cat: "Outils", items: "Git, VS Code, Cloudinary, Vercel, Render, Photoshop CC" },
  { cat: "Programmation", items: "Python, Fortran 90" },
];

const languages = [
  { name: "Français", level: "Courant" },
  { name: "Anglais", level: "Intermédiaire" },
  { name: "Éwé", level: "Langue maternelle" },
];

export default function Cv() {
  const cvRef = useRef();

  const downloadPDF = () => {
    const content = cvRef.current.innerHTML;
    const style = document.querySelector("style[data-cv-print]")?.innerHTML || "";
    const printWindow = window.open("", "_blank");
    printWindow.document.write(`
      <html>
      <head>
        <title>CV - Kodjo AMOUZOU</title>
        <style>
          @page { margin: 15mm; size: A4; }
          * { margin: 0; padding: 0; box-sizing: border-box; }
          body {
            font-family: system-ui, -apple-system, sans-serif;
            color: #374151;
            font-size: 11pt;
            line-height: 1.5;
            background: white;
            padding: 0;
            max-width: 800px;
            margin: 0 auto;
          }
          .no-print { display: none !important; }
          .flex { display: flex; }
          .flex-col { flex-direction: column; }
          .items-center { align-items: center; }
          .items-start { align-items: flex-start; }
          .justify-between { justify-content: space-between; }
          .gap-1 { gap: 4px; }
          .gap-2 { gap: 8px; }
          .gap-3 { gap: 12px; }
          .gap-4 { gap: 16px; }
          .gap-6 { gap: 24px; }
          .gap-x-4 { column-gap: 16px; }
          .space-y-1 > * + * { margin-top: 4px; }
          .space-y-2 > * + * { margin-top: 8px; }
          .space-y-3 > * + * { margin-top: 12px; }
          .space-y-4 > * + * { margin-top: 16px; }
          .space-y-8 > * + * { margin-top: 32px; }
          .grid { display: grid; gap: 12px; }
          .sm\\:grid-cols-2 { grid-template-columns: 1fr 1fr; }
          .sm\\:grid-cols-4 { grid-template-columns: 1fr 1fr 1fr 1fr; }
          .text-sm { font-size: 9pt; }
          .text-xs { font-size: 8pt; }
          .text-lg { font-size: 14pt; }
          .text-2xl { font-size: 18pt; }
          .text-4xl { font-size: 24pt; }
          .font-bold { font-weight: 700; }
          .font-semibold { font-weight: 600; }
          .font-medium { font-weight: 500; }
          .text-center { text-align: center; }
          .text-right { text-align: right; }
          .text-primary { color: #059669; }
          .text-base-content\\/50 { color: #9ca3af; }
          .text-base-content\\/60 { color: #6b7280; }
          .text-base-content\\/70 { color: #6b7280; }
          .border-b { border-bottom: 1px solid #e5e7eb; }
          .border-t { border-top: 1px solid #e5e7eb; }
          .border-l-2 { border-left: 2px solid #059669; }
          .border-primary { border-color: #059669; }
          .border-base-300 { border-color: #e5e7eb; }
          .rounded-2xl { border-radius: 12px; }
          .rounded-lg { border-radius: 8px; }
          .rounded-full { border-radius: 999px; }
          .p-8 { padding: 32px; }
          .p-3 { padding: 12px; }
          .p-4 { padding: 16px; }
          .pl-4 { padding-left: 16px; }
          .pt-2 { padding-top: 8px; }
          .pt-4 { padding-top: 16px; }
          .pb-6 { padding-bottom: 24px; }
          .mb-2 { margin-bottom: 8px; }
          .mb-3 { margin-bottom: 12px; }
          .mb-6 { margin-bottom: 24px; }
          .mb-8 { margin-bottom: 32px; }
          .mt-1 { margin-top: 4px; }
          .mt-2 { margin-top: 8px; }
          .mt-3 { margin-top: 12px; }
          .w-full { width: 100%; }
          .w-20 { width: 80px; }
          .w-12 { width: 48px; }
          .w-10 { width: 40px; }
          .h-2\\.5 { height: 10px; }
          .shrink-0 { flex-shrink: 0; }
          .flex-1 { flex: 1; }
          .flex-wrap { flex-wrap: wrap; }
          .whitespace-nowrap { white-space: nowrap; }
          .leading-relaxed { line-height: 1.6; }
          .bg-primary\\/10 { background: #d1fae5; }
          .bg-base-200 { background: #f3f4f6; }
          .bg-base-200\\/60 { background: #f9fafb; }
          .bg-base-300 { background: #e5e7eb; }
          .ring { }
          .ring-primary { box-shadow: 0 0 0 3px #059669; }
          .ring-offset-base-100 { }
          .ring-offset-2 { }
          .shadow-xl { }
          .avatar img { width: 80px; height: 80px; object-fit: cover; border-radius: 999px; }
          .badge {
            display: inline-block; padding: 2px 10px; font-size: 8pt;
            background: #d1fae5; color: #059669; border-radius: 999px;
          }
          h1, h2, h3, h4, h5 { color: #111827; }
          h1 { font-size: 20pt; }
          p { margin: 0; }
          ul { margin: 0; padding: 0; list-style: none; }
          li { margin: 0; padding: 0; }
          img { max-width: 100%; }
        </style>
      </head>
      <body>
        <div class="p-8" style="background: white; border-radius: 12px; border: 1px solid #e5e7eb; margin: 0;">
          ${content}
        </div>
      </body>
      </html>
    `);
    printWindow.document.close();
    printWindow.focus();
    setTimeout(() => printWindow.print(), 500);
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-4xl font-bold">Curriculum Vitae</h1>
          <p className="text-base-content/60 mt-1">Kodjo AMOUZOU</p>
        </div>
        <button onClick={downloadPDF} className="btn btn-primary gap-2">
          <Printer size={18} />
          Télécharger PDF
        </button>
      </div>

      <div ref={cvRef} className="bg-base-100 rounded-2xl border border-base-300 p-8 space-y-8">
        <div className="flex items-center gap-6 pb-6 border-b border-base-300">
          <div className="avatar">
            <div className="w-20 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
              <img src={photo} alt="Kodjo AMOUZOU" />
            </div>
          </div>
          <div className="flex-1">
            <h2 className="text-2xl font-bold">Kodjo AMOUZOU</h2>
            <p className="text-primary font-medium">Développeur Frontend &amp; Enseignant</p>
            <div className="flex flex-wrap gap-x-4 gap-y-1 text-sm text-base-content/60 mt-1">
              <span className="flex items-center gap-1"><Mail size={14} /> phipsipy@gmail.com</span>
              <span className="flex items-center gap-1"><Phone size={14} /> 91 03 87 27</span>
              <span className="flex items-center gap-1"><MapPin size={14} /> Togo</span>
            </div>
          </div>
          <div className="text-xs text-base-content/50 text-right leading-relaxed">
            <p>Né le 13/08/2001</p>
            <p>Célibataire</p>
            <p>Nationalité togolaise</p>
          </div>
        </div>

        <section>
          <h3 className="text-lg font-semibold flex items-center gap-2 mb-3">
            <Briefcase size={18} className="text-primary" /> Expériences professionnelles
          </h3>
          <div className="space-y-4">
            {experience.map((exp) => (
              <div key={exp.title} className="pl-4 border-l-2 border-primary">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h4 className="font-semibold">{exp.title}</h4>
                    <p className="text-sm text-primary">{exp.company}</p>
                    {exp.place && <p className="text-xs text-base-content/50">{exp.place}</p>}
                  </div>
                  <span className="text-xs text-base-content/50 shrink-0 whitespace-nowrap">{exp.period}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h3 className="text-lg font-semibold flex items-center gap-2 mb-3">
            <GraduationCap size={18} className="text-primary" /> Formation et diplômes
          </h3>
          <div className="space-y-2">
            {education.map((edu) => (
              <div key={edu.title} className="flex items-start justify-between gap-4 pl-4 border-l-2 border-primary">
                <div>
                  <p className="font-medium">{edu.title}</p>
                  <p className="text-sm text-base-content/70">{edu.school}{edu.mention ? ` — ${edu.mention}` : ""}</p>
                </div>
                <span className="text-xs text-base-content/50 shrink-0">{edu.year}</span>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h3 className="text-lg font-semibold flex items-center gap-2 mb-3">
            <Code2 size={18} className="text-primary" /> Formations complémentaires
          </h3>
          <ul className="space-y-1">
            {trainings.map((t, i) => (
              <li key={i} className="text-sm flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span>{t}</span>
              </li>
            ))}
          </ul>
        </section>

        <section>
          <h3 className="text-lg font-semibold flex items-center gap-2 mb-3">
            <Code2 size={18} className="text-primary" /> Compétences techniques
          </h3>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {skillsList.map(({ cat, items }) => (
              <div key={cat} className="bg-base-200 rounded-lg p-3">
                <h4 className="font-semibold text-sm text-primary">{cat}</h4>
                <p className="text-xs text-base-content/70 mt-1">{items}</p>
              </div>
            ))}
          </div>
        </section>

        <div className="grid gap-6 sm:grid-cols-3">
          <section>
            <h3 className="text-lg font-semibold flex items-center gap-2 mb-3">
              <Globe size={18} className="text-primary" /> Langues
            </h3>
            <div className="space-y-1">
              {languages.map((lang) => (
                <div key={lang.name} className="flex justify-between text-sm">
                  <span>{lang.name}</span>
                  <span className="text-base-content/50">{lang.level}</span>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h3 className="text-lg font-semibold flex items-center gap-2 mb-3">
              <Heart size={18} className="text-primary" /> Centres d'intérêt
            </h3>
            <div className="flex flex-wrap gap-1.5">
              {["Football", "Athlétisme", "Musique", "Lecture"].map((item) => (
                <span key={item} className="badge badge-sm bg-primary/10 text-primary border-none">{item}</span>
              ))}
            </div>
          </section>

          <section>
            <h3 className="text-lg font-semibold flex items-center gap-2 mb-3">
              <Users size={18} className="text-primary" /> Qualités
            </h3>
            <p className="text-sm text-base-content/70">
              Dynamique, Sociable, Attentionné, Esprit collaboratif, Esprit de partage
            </p>
          </section>
        </div>

        <section className="pt-4 border-t border-base-300">
          <h3 className="text-lg font-semibold mb-3">Projets</h3>
          <div className="space-y-2 text-sm">
            <p><strong>GestDoc</strong> — Plateforme de gestion de documents scolaires (React, Express, PostgreSQL)</p>
            <p><strong>ETDV Église</strong> — Site web officiel avec dashboard admin (React, Express, PostgreSQL, Cloudinary)</p>
            <p><strong>MathFunc Studio</strong> — Étude de fonctions mathématiques (React, math.js, KaTeX, Chart.js)</p>
          </div>
        </section>

        <section className="text-center text-sm text-base-content/50 pt-2">
          <p>github.com/AMOUZOU-Kodjo • linkedin.com/in/kodjo-amouzou-175268375</p>
        </section>
      </div>
    </div>
  );
}
