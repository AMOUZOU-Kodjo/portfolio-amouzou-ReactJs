import { Link, Outlet, useLocation } from "react-router-dom";
import { Home, User, Briefcase, Mail, Moon, Sun, ArrowUp, FileText } from "lucide-react";
import { useState, useEffect } from "react";

const navItems = [
  { to: "/", label: "Accueil", icon: Home },
  { to: "/about", label: "À propos", icon: User },
  { to: "/projects", label: "Projets", icon: Briefcase },
  { to: "/cv", label: "CV", icon: FileText },
  { to: "/contact", label: "Contact", icon: Mail },
];

export default function MainLayout() {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("theme") || "emerald";
  });
  const [showTop, setShowTop] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 300);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "emerald" ? "dark" : "emerald"));
  };

  return (
    <div className="min-h-screen flex flex-col">
      <nav className="navbar bg-base-100/80 backdrop-blur-md shadow-sm px-4 sticky top-0 z-50 transition-colors">
        <div className="flex-1">
          <Link to="/" className="btn btn-ghost text-xl font-bold tracking-tight">
            Kodjo<span className="text-primary">.</span>
          </Link>
        </div>
        <div className="flex-none flex items-center gap-1">
          <ul className="menu menu-horizontal px-1 gap-1 hidden sm:flex">
            {navItems.map(({ to, label, icon: Icon }) => (
              <li key={to}>
                <Link
                  to={to}
                  className={`font-medium ${pathname === to ? "text-primary bg-primary/10" : ""}`}
                >
                  <Icon size={18} />
                  {label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="dropdown dropdown-end sm:hidden">
            <button className="btn btn-ghost btn-circle">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 6h16M4 12h16M4 18h16"/></svg>
            </button>
            <ul className="dropdown-content menu bg-base-200 rounded-box z-50 p-2 shadow-lg w-40 mt-2">
              {navItems.map(({ to, label, icon: Icon }) => (
                <li key={to}>
                  <Link to={to} className={pathname === to ? "text-primary" : ""}>
                    <Icon size={18} />
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <button
            onClick={toggleTheme}
            className="btn btn-ghost btn-circle"
            aria-label="Changer le thème"
          >
            {theme === "emerald" ? <Moon size={20} /> : <Sun size={20} />}
          </button>
        </div>
      </nav>

      <main className="flex-1 container mx-auto px-4 md:px-6 py-10">
        <Outlet />
      </main>

      <footer className="footer footer-center bg-base-200 text-base-content p-6 border-t border-base-300">
        <div className="flex gap-4 mb-2">
          <a href="https://github.com/AMOUZOU-Kodjo" target="_blank" rel="noopener noreferrer" className="btn btn-ghost btn-circle btn-sm">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
          </a>
          <a href="https://www.linkedin.com/in/kodjo-amouzou-175268375" target="_blank" rel="noopener noreferrer" className="btn btn-ghost btn-circle btn-sm">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
          </a>
          <a href="mailto:phipsipy@gmail.com" className="btn btn-ghost btn-circle btn-sm">
            <Mail size={18} />
          </a>
        </div>
        <p className="text-sm opacity-60">
          &copy; {new Date().getFullYear()} Kodjo AMOUZOU. Tous droits r&eacute;serv&eacute;s.
        </p>
      </footer>

      {showTop && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="btn btn-primary btn-circle fixed bottom-6 right-6 shadow-lg z-50"
          aria-label="Retour en haut"
        >
          <ArrowUp size={20} />
        </button>
      )}
    </div>
  );
}
