import express from "express";
import cors from "cors";
import { Resend } from "resend";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";
const __dirname = path.dirname(fileURLToPath(import.meta.url));
dotenv.config({ path: path.join(__dirname, ".env") });

process.on("unhandledRejection", (err) => {
  console.error("UNHANDLED REJECTION:", err);
});

const app = express();import express from "express";

import cors from "cors";

import { Resend } from "resend";

import dotenv from "dotenv";

import path from "path";

import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

dotenv.config({ path: path.join(__dirname, ".env") });



process.on("unhandledRejection", (err) => {

  console.error("UNHANDLED REJECTION:", err);

});



const app = express();

const PORT = process.env.PORT || 5000;



app.use(cors({ origin: "*" }));

app.use(express.json());



const distPath = path.join(__dirname, "..", "dist");

app.use(express.static(distPath));



let resend = null;

if (process.env.RESEND_API_KEY) {

  resend = new Resend(process.env.RESEND_API_KEY);

  console.log("Email configuré ✅ (Resend)");

} else {

  console.log("Email non configuré ⚠️ (RESEND_API_KEY manquant)");

}



app.post("/api/contact", async (req, res) => {

  const { name, email, subject, message } = req.body;



  if (!name || !email || !message) {

    return res.status(400).json({ error: "Nom, email et message sont requis." });

  }



  if (!resend) {

    return res.status(500).json({

      error: "Service d'envoi non configuré. Contactez l'administrateur.",

    });

  }



  try {

    const { error } = await resend.emails.send({

      from: `Portfolio <onboarding@resend.dev>`,

      replyTo: email,

      to: process.env.EMAIL_USER || email,

      subject: subject

        ? `[Portfolio] ${subject} — de ${name}`

        : `[Portfolio] Nouveau message de ${name}`,

      html: `

        <!DOCTYPE html>

        <html>

        <head><meta charset="utf-8"></head>

        <body style="margin:0;padding:0;background:#f4f5f7;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif">

          <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#f4f5f7;padding:40px 20px">

            <tr>

              <td align="center">

                <table role="presentation" width="540" cellpadding="0" cellspacing="0" style="background:#ffffff;border-radius:12px;overflow:hidden;box-shadow:0 4px 12px rgba(0,0,0,0.06)">

                  <tr>

                    <td style="background:#059669;padding:32px 40px 24px;text-align:center">

                      <h1 style="margin:0;color:#ffffff;font-size:22px;font-weight:700;letter-spacing:-0.5px">📬 Nouveau message</h1>

                      <p style="margin:8px 0 0;color:#a7f3d0;font-size:14px">depuis votre portfolio</p>

                    </td>

                  </tr>

                  <tr>

                    <td style="padding:32px 40px">

                      <table role="presentation" width="100%" cellpadding="0" cellspacing="0">

                        <tr>

                          <td width="100" style="padding:10px 0;font-size:13px;font-weight:600;color:#6b7280;vertical-align:top;border-bottom:1px solid #f3f4f6">Nom</td>

                          <td style="padding:10px 0;font-size:15px;color:#111827;border-bottom:1px solid #f3f4f6">${name}</td>

                        </tr>

                        <tr>

                          <td width="100" style="padding:10px 0;font-size:13px;font-weight:600;color:#6b7280;vertical-align:top;border-bottom:1px solid #f3f4f6">Email</td>

                          <td style="padding:10px 0;font-size:15px;color:#111827;border-bottom:1px solid #f3f4f6"><a href="mailto:${email}" style="color:#059669;text-decoration:none">${email}</a></td>

                        </tr>

                        ${subject ? `<tr>

                          <td width="100" style="padding:10px 0;font-size:13px;font-weight:600;color:#6b7280;vertical-align:top;border-bottom:1px solid #f3f4f6">Sujet</td>

                          <td style="padding:10px 0;font-size:15px;color:#111827;border-bottom:1px solid #f3f4f6">${subject}</td>

                        </tr>` : ""}

                        <tr>

                          <td width="100" style="padding:10px 0;font-size:13px;font-weight:600;color:#6b7280;vertical-align:top">Date</td>

                          <td style="padding:10px 0;font-size:15px;color:#6b7280">${new Date().toLocaleDateString("fr-FR", { weekday: "long", year: "numeric", month: "long", day: "numeric", hour: "2-digit", minute: "2-digit" })}</td>

                        </tr>

                      </table>

                      <div style="margin:24px 0 0;background:#f9fafb;border-left:4px solid #059669;padding:20px;border-radius:8px">

                        <p style="margin:0 0 8px;font-size:13px;font-weight:600;color:#6b7280;text-transform:uppercase;letter-spacing:0.5px">Message</p>

                        <p style="margin:0;font-size:15px;color:#374151;line-height:1.7;white-space:pre-wrap">${message}</p>

                      </div>

                    </td>

                  </tr>

                  <tr>

                    <td style="background:#f9fafb;padding:20px 40px;text-align:center;border-top:1px solid #f3f4f6">

                      <p style="margin:0;font-size:12px;color:#9ca3af">Cet email a été envoyé depuis le formulaire de contact de <a href="https://portfolio-1kq8.onrender.com" style="color:#059669;text-decoration:none">votre portfolio</a>.</p>

                    </td>

                  </tr>

                </table>

              </td>

            </tr>

          </table>

        </body>

        </html>`,

    });



    if (error) {

      console.error("Erreur email:", error);

      return res.status(500).json({ error: "Erreur lors de l'envoi." });

    }



    res.json({ success: true, message: "Message envoyé avec succès !" });

  } catch (err) {

    console.error("Erreur email:", err.message);

    res.status(500).json({ error: "Erreur lors de l'envoi. Vérifiez les identifiants email." });

  }

});



app.get("/api/health", (_req, res) => {

  res.json({

    status: "ok",

    email: resend ? "configuré" : "non configuré",

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


const PORT = process.env.PORT || 5000;

app.use(cors({ origin: "*" }));
app.use(express.json());

const distPath = path.join(__dirname, "..", "dist");
app.use(express.static(distPath));

let resend = null;
if (process.env.RESEND_API_KEY) {
  resend = new Resend(process.env.RESEND_API_KEY);
  console.log("Email configuré ✅ (Resend)");
} else {
  console.log("Email non configuré ⚠️ (RESEND_API_KEY manquant)");
}

app.post("/api/contact", async (req, res) => {
  const { name, email, subject, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: "Nom, email et message sont requis." });
  }

  if (!resend) {
    return res.status(500).json({
      error: "Service d'envoi non configuré. Contactez l'administrateur.",
    });
  }

  try {
    const { error } = await resend.emails.send({
      from: `Portfolio <onboarding@resend.dev>`,
      replyTo: email,
      to: process.env.EMAIL_USER || email,
      subject: subject
        ? `[Portfolio] ${subject} — de ${name}`
        : `[Portfolio] Nouveau message de ${name}`,
      html: `
        <!DOCTYPE html>
        <html>
        <head><meta charset="utf-8"></head>
        <body style="margin:0;padding:0;background:#f4f5f7;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif">
          <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#f4f5f7;padding:40px 20px">
            <tr>
              <td align="center">
                <table role="presentation" width="540" cellpadding="0" cellspacing="0" style="background:#ffffff;border-radius:12px;overflow:hidden;box-shadow:0 4px 12px rgba(0,0,0,0.06)">
                  <tr>
                    <td style="background:#059669;padding:32px 40px 24px;text-align:center">
                      <h1 style="margin:0;color:#ffffff;font-size:22px;font-weight:700;letter-spacing:-0.5px">📬 Nouveau message</h1>
                      <p style="margin:8px 0 0;color:#a7f3d0;font-size:14px">depuis votre portfolio</p>
                    </td>
                  </tr>
                  <tr>
                    <td style="padding:32px 40px">
                      <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                        <tr>
                          <td width="100" style="padding:10px 0;font-size:13px;font-weight:600;color:#6b7280;vertical-align:top;border-bottom:1px solid #f3f4f6">Nom</td>
                          <td style="padding:10px 0;font-size:15px;color:#111827;border-bottom:1px solid #f3f4f6">${name}</td>
                        </tr>
                        <tr>
                          <td width="100" style="padding:10px 0;font-size:13px;font-weight:600;color:#6b7280;vertical-align:top;border-bottom:1px solid #f3f4f6">Email</td>
                          <td style="padding:10px 0;font-size:15px;color:#111827;border-bottom:1px solid #f3f4f6"><a href="mailto:${email}" style="color:#059669;text-decoration:none">${email}</a></td>
                        </tr>
                        ${subject ? `<tr>
                          <td width="100" style="padding:10px 0;font-size:13px;font-weight:600;color:#6b7280;vertical-align:top;border-bottom:1px solid #f3f4f6">Sujet</td>
                          <td style="padding:10px 0;font-size:15px;color:#111827;border-bottom:1px solid #f3f4f6">${subject}</td>
                        </tr>` : ""}
                        <tr>
                          <td width="100" style="padding:10px 0;font-size:13px;font-weight:600;color:#6b7280;vertical-align:top">Date</td>
                          <td style="padding:10px 0;font-size:15px;color:#6b7280">${new Date().toLocaleDateString("fr-FR", { weekday: "long", year: "numeric", month: "long", day: "numeric", hour: "2-digit", minute: "2-digit" })}</td>
                        </tr>
                      </table>
                      <div style="margin:24px 0 0;background:#f9fafb;border-left:4px solid #059669;padding:20px;border-radius:8px">
                        <p style="margin:0 0 8px;font-size:13px;font-weight:600;color:#6b7280;text-transform:uppercase;letter-spacing:0.5px">Message</p>
                        <p style="margin:0;font-size:15px;color:#374151;line-height:1.7;white-space:pre-wrap">${message}</p>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td style="background:#f9fafb;padding:20px 40px;text-align:center;border-top:1px solid #f3f4f6">
                      <p style="margin:0;font-size:12px;color:#9ca3af">Cet email a été envoyé depuis le formulaire de contact de <a href="https://portfolio-1kq8.onrender.com" style="color:#059669;text-decoration:none">votre portfolio</a>.</p>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
          </table>
        </body>
        </html>`,
    });

    if (error) {
      console.error("Erreur email:", error);
      return res.status(500).json({ error: "Erreur lors de l'envoi." });
    }

    res.json({ success: true, message: "Message envoyé avec succès !" });
  } catch (err) {
    console.error("Erreur email:", err.message);
    res.status(500).json({ error: "Erreur lors de l'envoi. Vérifiez les identifiants email." });
  }
});

app.get("/api/health", (_req, res) => {
  res.json({
    status: "ok",
    email: resend ? "configuré" : "non configuré",
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
