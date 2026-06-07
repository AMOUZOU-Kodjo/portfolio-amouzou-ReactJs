import { Code2, GraduationCap, Globe, FileCode2, Palette, Braces, FileType, Wind, Sparkles, GitBranch, Terminal, MapPin, Mail, Calendar, Heart, Users } from "lucide-react";
import photo from "../assets/IMG-20260402-WA0064.jpg";

const skills = [
  { name: "HTML", level: 90, icon: FileCode2 },
  { name: "CSS", level: 85, icon: Palette },
  { name: "JavaScript", level: 80, icon: Braces },
  { name: "TypeScript", level: 70, icon: FileType },
  { name: "React", level: 80, icon: Code2 },
  { name: "Tailwind CSS", level: 85, icon: Wind },
  { name: "DaisyUI", level: 80, icon: Sparkles },
  { name: "Git", level: 75, icon: GitBranch },
  { name: "VS Code", level: 85, icon: Terminal },
];

const highlights = [
  { icon: Code2, label: "Développeur Frontend", desc: "React, Tailwind CSS, DaisyUI" },
  { icon: GraduationCap, label: "Enseignant", desc: "Sciences physiques et mathématiques" },
  { icon: Globe, label: "Licence en Physique", desc: "Université de Lomé, 2024" },
];

const infos = [
  { icon: MapPin, label: "Togo" },
  { icon: Mail, label: "phipsipy@gmail.com" },
  { icon: Calendar, label: "Né le 13/08/2001" },
];

const qualities = ["Dynamique", "Sociable", "Attentionné", "Esprit collaboratif", "Esprit de partage"];
const interests = ["Football", "Athlétisme", "Musique", "Lecture"];

export default function About() {
  return (
    <div className="max-w-6xl mx-auto">
      <h1 className="text-4xl font-bold mb-2">À propos</h1>
      <p className="text-base-content/60 mb-10">Qui suis-je ?</p>

      <div className="flex flex-col lg:flex-row gap-10 items-center mb-14">
        <div className="relative shrink-0">
          <div className="avatar">
            <div className="w-48 rounded-2xl ring ring-primary ring-offset-base-100 ring-offset-4 shadow-xl">
              <img src={photo} alt="Kodjo AMOUZOU" className="object-cover" />
            </div>
          </div>
          <div className="absolute -bottom-3 -right-3 bg-primary text-primary-content text-xs font-bold px-3 py-1.5 rounded-full shadow-md">
            +1 an d'exp
          </div>
        </div>

        <div className="space-y-4">
          <p className="text-lg leading-relaxed">
            Développeur frontend passionné et enseignant en sciences physiques, je combine
            rigueur scientifique et créativité technique pour concevoir des applications web modernes.
          </p>
          <p className="text-lg leading-relaxed">
            Titulaire d'une <strong>Licence en Physique</strong> de l'Université de Lomé, j'ai une expérience
            dans le développement avec <strong>React</strong>, <strong>Express</strong> et <strong>PostgreSQL</strong>, ainsi que dans
            l'enseignement des sciences physiques et des mathématiques.
          </p>

          <div className="flex flex-wrap gap-6 pt-3 text-sm">
            {infos.map(({ icon: Icon, label }) => (
              <div key={label} className="flex items-center gap-2 text-base-content/60">
                <Icon size={16} className="text-primary" /> {label}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="grid gap-5 md:grid-cols-3 mb-14">
        {highlights.map(({ icon: Icon, label, desc }) => (
          <div key={label} className="card bg-base-200/60 border border-base-300 hover:border-primary/30 transition-all">
            <div className="card-body items-center text-center">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-2">
                <Icon size={24} className="text-primary" />
              </div>
              <h3 className="font-semibold">{label}</h3>
              <p className="text-sm text-base-content/60">{desc}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="grid gap-6 md:grid-cols-2 mb-14">
        <div className="card bg-base-200/60 border border-base-300">
          <div className="card-body">
            <h3 className="font-semibold flex items-center gap-2">
              <Heart size={18} className="text-primary" /> Centres d'intérêt
            </h3>
            <div className="flex flex-wrap gap-2 mt-2">
              {interests.map((item) => (
                <span key={item} className="badge badge-sm bg-primary/10 text-primary border-none">{item}</span>
              ))}
            </div>
          </div>
        </div>
        <div className="card bg-base-200/60 border border-base-300">
          <div className="card-body">
            <h3 className="font-semibold flex items-center gap-2">
              <Users size={18} className="text-primary" /> Qualités
            </h3>
            <div className="flex flex-wrap gap-2 mt-2">
              {qualities.map((item) => (
                <span key={item} className="badge badge-sm bg-primary/10 text-primary border-none">{item}</span>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-bold mb-2">Compétences</h2>
        <p className="text-base-content/60 mb-6">Technologies et outils que j'utilise</p>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map(({ name, level, icon: Icon }) => (
            <div key={name} className="card bg-base-200/60 border border-base-300 hover:border-primary/30 transition-all group">
              <div className="card-body items-center text-center p-5">
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-3 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300 group-hover:ring-2 group-hover:ring-primary/30">
                  <Icon size={28} className="text-primary" />
                </div>
                <h3 className="font-semibold">{name}</h3>
                <div className="w-full bg-base-300 rounded-full h-2.5 mt-3 overflow-hidden">
                  <div
                    className="bg-primary h-full rounded-full"
                    style={{
                      width: `${level}%`,
                      animation: "fillBar 1.2s ease-out forwards",
                    }}
                  />
                </div>
                <span className="text-xs text-base-content/50 mt-1">{level}%</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
