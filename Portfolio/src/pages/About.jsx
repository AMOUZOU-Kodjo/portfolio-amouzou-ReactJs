import { useEffect, useRef, useState } from "react";
import { Code2, GraduationCap, Globe, FileCode2, Palette, Braces, FileType, Wind, Sparkles, GitBranch, Terminal, MapPin, Mail, Calendar, Heart, Users, Quote, ChevronRight } from "lucide-react";
import photo from "../assets/IMG-20260402-WA0064.jpg";

const skills = [
  { name: "HTML", level: 90, icon: FileCode2, color: "from-orange-500 to-orange-400" },
  { name: "CSS", level: 85, icon: Palette, color: "from-blue-500 to-blue-400" },
  { name: "JavaScript", level: 80, icon: Braces, color: "from-yellow-500 to-yellow-400" },
  { name: "TypeScript", level: 70, icon: FileType, color: "from-blue-600 to-blue-500" },
  { name: "React", level: 80, icon: Code2, color: "from-cyan-500 to-cyan-400" },
  { name: "Tailwind CSS", level: 85, icon: Wind, color: "from-teal-500 to-teal-400" },
  { name: "DaisyUI", level: 80, icon: Sparkles, color: "from-emerald-500 to-emerald-400" },
  { name: "Git", level: 75, icon: GitBranch, color: "from-red-500 to-red-400" },
  { name: "VS Code", level: 85, icon: Terminal, color: "from-indigo-500 to-indigo-400" },
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

const qualities = ["Dynamique", "Sociable", "Attentionné", "Collaboratif", "Partage"];
const interests = ["Football", "Athlétisme", "Musique", "Lecture"];

function FadeIn({ children, delay = 0, direction = "up", className = "" }) {
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

  const dirs = { up: "translate-y-6", down: "-translate-y-6", left: "translate-x-6", right: "-translate-x-6" };

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${visible ? "opacity-100 translate-x-0 translate-y-0" : `opacity-0 ${dirs[direction] || dirs.up}`} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

function SkillBar({ name, level, icon: Icon, color }) {
  const [width, setWidth] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setWidth(level); observer.disconnect(); } },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [level]);

  return (
    <div ref={ref} className="group p-5 rounded-2xl bg-base-200/40 border border-base-300 hover:border-primary/30 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300">
      <div className="flex items-start gap-4">
        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
          <Icon size={22} className="text-primary" />
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center justify-between mb-2">
            <h3 className="font-semibold text-sm group-hover:text-primary transition-colors">{name}</h3>
            <span className="text-xs font-medium text-base-content/50">{level}%</span>
          </div>
          <div className="h-2 bg-base-300 rounded-full overflow-hidden">
            <div
              className={`h-full rounded-full bg-gradient-to-r ${color} transition-all duration-1000 ease-out`}
              style={{ width: `${width}%` }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default function About() {
  return (
    <div className="max-w-6xl mx-auto">
      <FadeIn>
        <h1 className="text-4xl font-bold mb-2">À propos</h1>
        <p className="text-base-content/60 mb-12">Qui suis-je ?</p>
      </FadeIn>

      <div className="flex flex-col lg:flex-row gap-10 items-center mb-16">
        <FadeIn delay={100} direction="left" className="shrink-0">
          <div className="relative group">
            <div className="absolute -inset-3 bg-primary/10 rounded-[2rem] blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="avatar">
              <div className="w-52 rounded-[2rem] ring ring-primary ring-offset-base-100 ring-offset-4 shadow-2xl transition-transform duration-500 group-hover:scale-[1.02]">
                <img src={photo} alt="Kodjo AMOUZOU" className="object-cover" />
              </div>
            </div>
            <div className="absolute -bottom-3 -right-3 bg-primary text-primary-content text-xs font-bold px-4 py-2 rounded-full shadow-lg hover:scale-105 transition-transform">
              +1 an d'exp
            </div>
          </div>
        </FadeIn>

        <div className="space-y-5 flex-1">
          <FadeIn delay={200}>
            <Quote size={24} className="text-primary/30" />
            <p className="text-lg leading-relaxed text-base-content/80">
              Développeur frontend passionné et enseignant en sciences physiques, je combine
              rigueur scientifique et créativité technique pour concevoir des applications web modernes.
            </p>
          </FadeIn>
          <FadeIn delay={300}>
            <p className="text-lg leading-relaxed text-base-content/70">
              Titulaire d'une <strong className="text-base-content">Licence en Physique</strong> de l'Université de Lomé,
              j'ai une expérience dans le développement avec <strong className="text-base-content">React</strong>,
              <strong className="text-base-content"> Express</strong> et <strong className="text-base-content">PostgreSQL</strong>,
              ainsi que dans l'enseignement des sciences physiques et des mathématiques.
            </p>
          </FadeIn>
          <FadeIn delay={400}>
            <div className="flex flex-wrap gap-6 pt-3">
              {infos.map(({ icon: Icon, label }) => (
                <div key={label} className="flex items-center gap-2 text-sm text-base-content/60 bg-base-200/40 px-4 py-2 rounded-full border border-base-300 hover:border-primary/30 hover:text-primary transition-all duration-300">
                  <Icon size={14} className="text-primary" /> {label}
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </div>

      <FadeIn delay={500}>
        <div className="grid gap-5 md:grid-cols-3 mb-16">
          {highlights.map(({ icon: Icon, label, desc }, i) => (
            <div
              key={label}
              className="group p-6 rounded-2xl bg-base-200/40 border border-base-300 hover:border-primary/30 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
            >
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                  <Icon size={26} className="text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold group-hover:text-primary transition-colors">{label}</h3>
                  <p className="text-sm text-base-content/60">{desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </FadeIn>

      <div className="grid gap-6 md:grid-cols-2 mb-16">
        <FadeIn delay={600}>
          <div className="p-6 rounded-2xl bg-base-200/40 border border-base-300 hover:border-primary/30 hover:shadow-lg transition-all duration-300 h-full">
            <h3 className="font-semibold flex items-center gap-2 mb-4 text-primary">
              <Heart size={18} /> Centres d'intérêt
            </h3>
            <div className="flex flex-wrap gap-2">
              {interests.map((item, i) => (
                <span
                  key={item}
                  className="badge badge-lg bg-primary/10 text-primary border-none hover:bg-primary/20 hover:scale-105 transition-all duration-300"
                  style={{ animationDelay: `${i * 100}ms` }}
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </FadeIn>
        <FadeIn delay={700}>
          <div className="p-6 rounded-2xl bg-base-200/40 border border-base-300 hover:border-primary/30 hover:shadow-lg transition-all duration-300 h-full">
            <h3 className="font-semibold flex items-center gap-2 mb-4 text-primary">
              <Users size={18} /> Qualités
            </h3>
            <div className="flex flex-wrap gap-2">
              {qualities.map((item, i) => (
                <span
                  key={item}
                  className="badge badge-lg bg-accent/10 text-accent border-none hover:bg-accent/20 hover:scale-105 transition-all duration-300"
                  style={{ animationDelay: `${i * 100}ms` }}
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </FadeIn>
      </div>

      <FadeIn delay={800}>
        <div className="mb-6">
          <h2 className="text-2xl font-bold">Compétences</h2>
          <p className="text-base-content/60 mt-1">Technologies et outils que j'utilise</p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((s, i) => (
            <FadeIn key={s.name} delay={900 + i * 80}>
              <SkillBar {...s} />
            </FadeIn>
          ))}
        </div>
      </FadeIn>
    </div>
  );
}
