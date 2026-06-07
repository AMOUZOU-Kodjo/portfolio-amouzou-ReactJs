import { useState, useEffect } from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import photo from "../assets/IMG-20260402-WA0064.jpg";

const words = [
  "React", "TypeScript", "Tailwind CSS", "JavaScript",
  "HTML", "CSS", "Python", "Fortran 90", "Git",
];

export default function Home() {
  const [index, setIndex] = useState(0);
  const [char, setChar] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const word = words[index];
    const timeout = setTimeout(() => {
      if (!deleting) {
        if (char < word.length) {
          setChar((c) => c + 1);
        } else {
          setTimeout(() => setDeleting(true), 1500);
        }
      } else {
        if (char > 0) {
          setChar((c) => c - 1);
        } else {
          setDeleting(false);
          setIndex((i) => (i + 1) % words.length);
        }
      }
    }, deleting ? 40 : 80);

    return () => clearTimeout(timeout);
  }, [char, deleting, index]);

  return (
    <div className="max-w-6xl flex items-center justify-center">
      <div className="flex flex-col lg:flex-row items-center gap-12">
        <div className="relative">
          <div className="avatar">
            <div className="w-56 rounded-full ring ring-primary ring-offset-base-100 ring-offset-4 shadow-xl">
              <img src={photo} alt="Kodjo AMOUZOU" />
            </div>
          </div>
          <div className="absolute -bottom-2 -right-2 w-14 h-14 bg-primary rounded-full flex items-center justify-center text-primary-content text-2xl font-bold shadow-lg">
            KA
          </div>
        </div>

        <div className="max-w-xl text-center lg:text-left">
          <p className="text-primary font-medium tracking-widest uppercase text-sm mb-2">
            Développeur Frontend
          </p>
          <h1 className="text-5xl md:text-6xl font-bold leading-tight">
            Kodjo <span className="text-primary">AMOUZOU</span>
          </h1>
          <div className="flex items-center justify-center lg:justify-start gap-2 mt-6">
            <span className="text-sm font-medium text-base-content/50">Je maîtrise</span>
            <div className="h-10 flex items-center bg-primary/10 rounded-full px-4 border border-primary/20">
              <span className="text-lg font-semibold text-primary whitespace-nowrap">
                {words[index].substring(0, char)}
                <span className="animate-pulse text-primary ml-0.5">|</span>
              </span>
            </div>
          </div>
          <p className="text-base text-base-content/60 mt-4 leading-relaxed">
            Je conçois des applications web modernes avec <strong>React</strong> et j'enseigne
            les sciences physiques avec passion. Rigoureux et cr&eacute;atif, je donne vie &agrave; vos id&eacute;es.
          </p>

          <div className="flex flex-wrap gap-3 mt-8 justify-center lg:justify-start">
            <Link to="/projects" className="btn btn-primary gap-2">
              Voir mes projets <ArrowRight size={18} />
            </Link>
            <Link to="/contact" className="btn btn-outline gap-2">
              Me contacter
            </Link>
          </div>

          <div className="flex gap-6 mt-10 justify-center lg:justify-start text-sm text-base-content/50">
            <span className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-success" />
              Disponible
            </span>
            <span>React &middot; TypeScript &middot; Tailwind</span>
          </div>
        </div>
      </div>
    </div>
  );
}
