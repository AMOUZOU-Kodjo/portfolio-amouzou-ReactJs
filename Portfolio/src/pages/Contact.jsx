import { useState } from "react";
import { Mail, MapPin, Phone, Send, Loader2, CheckCircle } from "lucide-react";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "phipsipy@gmail.com",
    href: "mailto:phipsipy@gmail.com",
  },
  {
    icon: Phone,
    label: "Téléphone",
    value: "91 03 87 27",
    href: "tel:+22891038727",
  },
  {
    icon: MapPin,
    label: "Localisation",
    value: "Togo",
  },
];

const API_URL = import.meta.env.VITE_API_URL || "";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [status, setStatus] = useState({ type: "", text: "" });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: "", text: "" });

    try {
      const res = await fetch(`${API_URL}/api/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (res.ok) {
        setStatus({ type: "success", text: "Message envoyé avec succès !" });
        setForm({ name: "", email: "", subject: "", message: "" });
      } else {
        setStatus({ type: "error", text: data.error || "Une erreur est survenue." });
      }
    } catch {
      setStatus({ type: "error", text: "Impossible de contacter le serveur." });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-5xl mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-2">Contact</h1>
        <p className="text-base-content/60">
          Discutons de votre projet. N&rsquo;h&eacute;sitez pas &agrave; me contacter.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 items-start">
        <div className="space-y-6">
          <h2 className="text-xl font-semibold">Mes coordonn&eacute;es</h2>

          <div className="space-y-4">
            {contactInfo.map(({ icon: Icon, label, value, href }) => (
              <div
                key={label}
                className="flex items-center gap-4 p-4 bg-primary/5 border-l-4 border-primary rounded-xl hover:bg-primary/10 transition-colors"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <Icon size={22} className="text-primary" />
                </div>
                <div>
                  <p className="text-sm text-base-content/50">{label}</p>
                  {href ? (
                    <a href={href} className="font-medium no-underline hover:text-primary transition-colors">
                      {value}
                    </a>
                  ) : (
                    <p className="font-medium">{value}</p>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap gap-3 pt-2">
            <a href="https://github.com/AMOUZOU-Kodjo" target="_blank" rel="noopener noreferrer" className="btn btn-outline btn-sm gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
              GitHub
            </a>
            <a href="https://www.linkedin.com/in/kodjo-amouzou-175268375" target="_blank" rel="noopener noreferrer" className="btn btn-outline btn-sm gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
              LinkedIn
            </a>
          </div>
        </div>

        <div className="bg-base-200/60 border border-base-300 rounded-2xl p-6 relative">
          <h2 className="text-xl font-semibold mb-6">Envoyez-moi un message</h2>
          <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
            <div className="grid sm:grid-cols-2 gap-4">
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Votre nom *"
                required
                className="input input-bordered w-full"
              />
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Votre email *"
                required
                className="input input-bordered w-full"
              />
            </div>
            <input
              type="text"
              name="subject"
              value={form.subject}
              onChange={handleChange}
              placeholder="Sujet"
              className="input input-bordered w-full"
            />
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Votre message *"
              required
              className="textarea textarea-bordered w-full resize-none"
              rows={5}
            />
            <button type="submit" disabled={loading} className="btn btn-primary gap-2 self-start">
              {loading ? <Loader2 size={18} className="animate-spin" /> : <Send size={18} />}
              {loading ? "Envoi..." : "Envoyer le message"}
            </button>
          </form>

          {status.text && (
            <div className={`flex items-center gap-2 mt-4 text-sm ${status.type === "success" ? "text-success" : "text-error"}`}>
              {status.type === "success" ? <CheckCircle size={16} /> : null}
              {status.text}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
