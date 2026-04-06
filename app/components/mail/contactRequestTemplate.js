function sanitizeMessage(message = "") {
  return String(message)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;")
    .replaceAll("\n", "<br>");
}

export function contactRequestTemplate({
  firstName,
  lastName,
  email,
  phone,
  service,
  message,
}) {
  const now = new Date();

  const formattedDate = now.toLocaleString("fr-FR", {
    timeZone: "Europe/Paris",
    dateStyle: "full",
    timeStyle: "short",
  });

  const safeMessage = sanitizeMessage(message);

  return `
  <!DOCTYPE html>
  <html lang="fr">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Nouvelle demande de contact</title>
  </head>
  <body style="margin:0; padding:0; font-family: Arial, sans-serif; background-color:rgba(255, 255, 255, 1);">
    
    <table width="100%" cellpadding="0" cellspacing="0" style="padding:40px 0;">
      <tr>
        <td align="center">

          <table width="600" cellpadding="0" cellspacing="0" 
            style="background-color:#ffffff; border-radius:12px; overflow:hidden; box-shadow:0 8px 25px rgba(0,0,0,0.08);">

            <!-- HEADER -->
            <tr>
              <td style="background-color:rgb(180,125,100); padding:25px; text-align:center; color:#ffffff;">
                <h2 style="margin:0; font-size:24px; letter-spacing:0.5px;">
                  Nouvelle demande de contact
                </h2>
              </td>
            </tr>

            <!-- CONTENT -->
            <tr>
              <td style="padding:30px; color:#000000; font-size:15px; line-height:1.6;">

                <p><strong>Prénom :</strong> ${firstName}</p>
                <p><strong>Nom :</strong> ${lastName}</p>

                <p>
                  <strong>Email :</strong> 
                  <a href="mailto:${email}" 
                     style="color:rgb(180,125,100); text-decoration:none; font-weight:bold;">
                     ${email}
                  </a>
                </p>

                <p>
                  <strong>Téléphone :</strong> 
                  <a href="tel:${phone}" 
                     style="color:rgb(180,125,100); text-decoration:none; font-weight:bold;">
                     ${phone}
                  </a>
                </p>

                <p><strong>Service demandé :</strong> ${service}</p>

                <p style="margin-top:20px;">
                  <strong>Message :</strong><br>
                  <span style="display:block; margin-top:8px; padding:15px; background:#f8f8f8; border-radius:8px;">
                    ${safeMessage || "—"}
                  </span>
                </p>

                <!-- CTA BUTTONS -->
                <div style="margin-top:30px; text-align:center;">

                  <a href="mailto:${email}" 
                     style="display:inline-block; margin:5px; padding:12px 20px; 
                            background-color:rgb(180,125,100); 
                            color:#ffffff; 
                            text-decoration:none; 
                            border-radius:6px; 
                            font-weight:bold;">
                    Répondre par email
                  </a>

                  <a href="tel:${phone}" 
                     style="display:inline-block; margin:5px; padding:12px 20px; 
                            background-color:#000000; 
                            color:#ffffff; 
                            text-decoration:none; 
                            border-radius:6px; 
                            font-weight:bold;">
                    Appeler
                  </a>

                </div>

              </td>
            </tr>

            <!-- FOOTER -->
            <tr>
              <td style="background-color:#f4f4f4; padding:20px; text-align:center; font-size:12px; color:#333;">
                <p style="margin:0;">
                  Ce mail a été envoyé depuis le formulaire de contact du site 
                  <strong>Haumana Bien-être</strong>.
                </p>

                <p style="margin-top:10px; font-size:11px; color:#666;">
                  Envoyé le ${formattedDate}
                </p>
              </td>
            </tr>

          </table>

        </td>
      </tr>
    </table>

  </body>
  </html>
  `;
}
