import express from "express";
import cors from "cors";
import nodemailer from "nodemailer";
import path from "path";
import { fileURLToPath } from "url";
import "dotenv/config";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors({
  origin: process.env.ALLOWED_ORIGINS?.split(",") || "*",
}));
app.use(express.json());

const distPath = path.join(__dirname, "..", "dist");
app.use(express.static(distPath));

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

app.post("/api/contact", async (req, res) => {
  const { name, email, subject, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: "Nom, email et message sont requis." });
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
        <div style="font-family: system-ui, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #059669;">Nouveau message depuis le portfolio</h2>
          <table style="width: 100%; border-collapse: collapse; margin: 16px 0;">
            <tr><td style="padding: 8px; font-weight: 600; color: #374151; border-bottom: 1px solid #e5e7eb;">Nom</td>
                <td style="padding: 8px; color: #374151; border-bottom: 1px solid #e5e7eb;">${name}</td></tr>
            <tr><td style="padding: 8px; font-weight: 600; color: #374151; border-bottom: 1px solid #e5e7eb;">Email</td>
                <td style="padding: 8px; color: #374151; border-bottom: 1px solid #e5e7eb;">${email}</td></tr>
            ${subject ? `<tr><td style="padding: 8px; font-weight: 600; color: #374151; border-bottom: 1px solid #e5e7eb;">Sujet</td>
                <td style="padding: 8px; color: #374151; border-bottom: 1px solid #e5e7eb;">${subject}</td></tr>` : ""}
          </table>
          <div style="background: #f9fafb; border-left: 4px solid #059669; padding: 16px; border-radius: 4px;">
            <p style="margin: 0; color: #374151; white-space: pre-wrap;">${message}</p>
          </div>
        </div>
      `,
    });

    res.json({ success: true, message: "Message envoyé avec succès !" });
  } catch (err) {
    console.error("Erreur envoi email:", err);
    res.status(500).json({ error: "Erreur lors de l'envoi du message." });
  }
});

app.get("/api/health", (_req, res) => {
  res.json({ status: "ok" });
});

app.get("*", (_req, res) => {
  res.sendFile(path.join(distPath, "index.html"));
});

app.listen(PORT, () => {
  console.log(`Portfolio démarré sur http://localhost:${PORT}`);
});
