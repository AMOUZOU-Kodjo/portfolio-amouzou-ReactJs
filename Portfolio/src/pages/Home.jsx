import { useState, useEffect, useRef } from "react";
import { ArrowRight, Code2, Sparkles, ArrowDown } from "lucide-react";
import { Link } from "react-router-dom";
import photo from "../assets/IMG-20260402-WA0064.jpg";

const words = [
  "React", "TypeScript", "Tailwind CSS", "JavaScript",
  "HTML", "CSS", "Python", "Fortran 90", "Git",
];

function useTypewriter(words) {
  const [index, setIndex] = useState(0);
  const [char, setChar] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const word = words[index];
    const timeout = setTimeout(() => {
      if (!deleting) {
        if (char < word.length) setChar((c) => c + 1);
        else setTimeout(() => setDeleting(true), 1500);
      } else {
        if (char > 0) setChar((c) => c - 1);
        else { setDeleting(false); setIndex((i) => (i + 1) % words.length); }
      }
    }, deleting ? 40 : 80);
    return () => clearTimeout(timeout);
  }, [char, deleting, index, words]);

  return { word: words[index], typed: words[index].substring(0, char) };
}

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

  const dirs = {
    up: "translate-y-6",
    down: "-translate-y-6",
    left: "translate-x-6",
    right: "-translate-x-6",
  };

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

export default function Home() {
  const { typed } = useTypewriter(words);

  return (
    <div className="min-h-[calc(100vh-5rem)] flex items-center relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 -right-32 w-80 h-80 bg-primary/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
      </div>

      <div className="max-w-6xl w-full mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          <FadeIn delay={100} direction="left" className="shrink-0">
            <div className="relative group">
              <div className="absolute -inset-4 bg-primary/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="avatar">
                <div className="w-56 rounded-full ring ring-primary ring-offset-base-100 ring-offset-4 shadow-2xl transition-transform duration-500 group-hover:scale-[1.02]">
                  <img src={photo} alt="Kodjo AMOUZOU" className="transition-all duration-500 group-hover:brightness-105" />
                </div>
              </div>
              <div className="absolute -bottom-2 -right-2 w-14 h-14 bg-primary rounded-full flex items-center justify-center text-primary-content text-2xl font-bold shadow-lg animate-bounce">
                KA
              </div>
            </div>
          </FadeIn>

          <div className="max-w-xl text-center lg:text-left">
            <FadeIn delay={200}>
              <div className="flex items-center gap-2 justify-center lg:justify-start mb-3">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-success opacity-75" />
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-success" />
                </span>
                <span className="text-sm font-medium text-success">Disponible pour missions</span>
              </div>
            </FadeIn>

            <FadeIn delay={300}>
              <p className="text-primary font-semibold tracking-[0.2em] uppercase text-sm mb-2">
                Développeur Frontend
              </p>
            </FadeIn>

            <FadeIn delay={400}>
              <h1 className="text-5xl md:text-5xl font-bold leading-[1.1]">
                Kodjo{" "}
                <span className="bg-gradient-to-r from-primary via-primary/80 to-emerald-400 bg-clip-text text-transparent">
                  AMOUZOU
                </span>
              </h1>
            </FadeIn>

            <FadeIn delay={500}>
              <div className="flex items-center justify-center lg:justify-start gap-3 mt-8">
                <span className="text-sm font-medium text-base-content/50">Je maîtrise</span>
                <div className="relative">
                  <div className="h-11 flex items-center bg-primary/10 rounded-full px-5 border border-primary/20 backdrop-blur-sm transition-all duration-300 hover:bg-primary/20 hover:border-primary/40">
                    <span className="text-lg font-semibold text-primary whitespace-nowrap min-w-[8ch]">
                      {typed}
                      <span className="animate-pulse text-primary ml-0.5 font-light">|</span>
                    </span>
                  </div>
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={600}>
              <p className="text-base md:text-lg text-base-content/60 mt-6 leading-relaxed max-w-lg mx-auto lg:mx-0">
                Je conçois des applications web modernes avec <strong className="text-base-content">React</strong> et j'enseigne
                les sciences physiques avec passion. <span className="text-primary">Rigoureux</span> et <span className="text-primary">créatif</span>,
                je donne vie à vos idées.
              </p>
            </FadeIn>

            <FadeIn delay={700}>
              <div className="flex flex-wrap gap-4 mt-10 justify-center lg:justify-start">
                <Link to="/projects" className="btn btn-primary gap-2 btn-lg group relative overflow-hidden">
                  <span className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                  <span className="relative flex items-center gap-2">
                    Voir mes projets <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                  </span>
                </Link>
                <Link to="/contact" className="btn btn-outline gap-2 btn-lg group">
                  <span className="flex items-center gap-2">
                    Me contacter <Sparkles size={16} className="group-hover:rotate-12 transition-transform" />
                  </span>
                </Link>
              </div>
            </FadeIn>

            <FadeIn delay={800}>
              <div className="flex items-center gap-4 mt-10 justify-center lg:justify-start">
                <div className="flex -space-x-2">
                  {["React", "TS", "TW"].map((tech, i) => (
                    <div
                      key={tech}
                      className="w-9 h-9 rounded-full bg-base-200 border-2 border-base-100 flex items-center justify-center text-[10px] font-bold text-primary select-none hover:z-10 hover:scale-110 transition-all duration-200"
                      style={{ zIndex: 3 - i }}
                    >
                      {tech}
                    </div>
                  ))}
                </div>
                <span className="text-xs text-base-content/40">Stack moderne</span>
              </div>
            </FadeIn>
          </div>
        </div>

        <FadeIn delay={1000} className="mt-16">
          <div className="flex justify-center animate-bounce">
            <ArrowDown size={20} className="text-base-content/30" />
          </div>
        </FadeIn>
      </div>
    </div>
  );
}
