import express from "express";
import cors from "cors";
import nodemailer from "nodemailer";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";
const __dirname = path.dirname(fileURLToPath(import.meta.url));
dotenv.config({ path: path.join(__dirname, ".env") });
const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors({ origin: "*" }));
app.use(express.json());

const distPath = path.join(__dirname, "..", "dist");
app.use(express.static(distPath));

let transporter = null;
if (process.env.EMAIL_USER && process.env.EMAIL_PASS) {
  transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });
  console.log("Email configuré ✅");
} else {
  console.log("Email non configuré ⚠️ (EMAIL_USER/EMAIL_PASS manquants)");
}

app.post("/api/contact", async (req, res) => {
  const { name, email, subject, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: "Nom, email et message sont requis." });
  }

  if (!transporter) {
    return res.status(500).json({
      error: "Service d'envoi non configuré. Contactez l'administrateur.",
    });
  }

  try {
    await transporter.sendMail({
      from: `"${name}" <${process.env.EMAIL_USER}>`,
      replyTo: email,
      to: process.env.EMAIL_USER,
      subject: subject
        ? `[Portfolio] ${subject} — de ${name}`
        : `[Portfolio] Nouveau message de ${name}`,
      html: `
        <div style="font-family:system-ui,sans-serif;max-width:600px;margin:0 auto">
          <h2 style="color:#059669">Nouveau message</h2>
          <table style="width:100%;border-collapse:collapse;margin:16px 0">
            <tr><td style="padding:8px;font-weight:600;border-bottom:1px solid #e5e7eb">Nom</td><td style="padding:8px;border-bottom:1px solid #e5e7eb">${name}</td></tr>
            <tr><td style="padding:8px;font-weight:600;border-bottom:1px solid #e5e7eb">Email</td><td style="padding:8px;border-bottom:1px solid #e5e7eb">${email}</td></tr>
            ${subject ? `<tr><td style="padding:8px;font-weight:600;border-bottom:1px solid #e5e7eb">Sujet</td><td style="padding:8px;border-bottom:1px solid #e5e7eb">${subject}</td></tr>` : ""}
          </table>
          <div style="background:#f9fafb;border-left:4px solid #059669;padding:16px;border-radius:4px"><p style="margin:0;white-space:pre-wrap">${message}</p></div>
        </div>`,
    });

    res.json({ success: true, message: "Message envoyé avec succès !" });
  } catch (err) {
    console.error("Erreur email:", err.message);
    res.status(500).json({ error: "Erreur lors de l'envoi. Vérifiez les identifiants email." });
  }
});

app.get("/api/health", (_req, res) => {
  res.json({
    status: "ok",
    email: transporter ? "configuré" : "non configuré",
  });
});

app.get("*", (_req, res) => {
  res.sendFile(path.join(distPath, "index.html"));
});

app.use((err, _req, res, _next) => {
  console.error("Erreur serveur:", err);
  res.status(500).json({ error: "Erreur interne du serveur." });
});

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Portfolio démarré sur http://0.0.0.0:${PORT}`);
});
