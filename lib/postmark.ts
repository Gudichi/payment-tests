import { ServerClient } from "postmark";

export type ProductType = "MAIN_OFFER" | "BUMP_1" | "BUMP_2" | "OTO_1" | "OTO_2";

const client = new ServerClient(process.env.POSTMARK_SERVER_TOKEN!);

const PRODUCT_COPY: Record<ProductType, { subject: string; downloadUrl: string; friendlyName: string }> = {
  MAIN_OFFER: {
    subject: "Tvoj pristup Signalima strasti je spreman 💌",
    downloadUrl: "https://signalistrasti.com/portal",
    friendlyName: "glavni program Signali Strasti",
  },
  BUMP_1: {
    subject: "Tvoj vodič 'Neka on pita za tvoj broj' 📲",
    downloadUrl: "https://signalistrasti.com/downloads/neka-on-pita.pdf",
    friendlyName: "mini vodič 'Neka on pita za tvoj broj'",
  },
  BUMP_2: {
    subject: "Tvoj modul 'Lokacijski magnetizam' 📍",
    downloadUrl: "https://signalistrasti.com/downloads/lokacijski-magnetizam.pdf",
    friendlyName: "modul 'Lokacijski magnetizam'",
  },
  OTO_1: {
    subject: "Tvoj dodatni modul (OTO1) je spreman",
    downloadUrl: "https://signalistrasti.com/downloads/oto1.pdf",
    friendlyName: "dodatni modul (OTO1)",
  },
  OTO_2: {
    subject: "Tvoj dodatni modul (OTO2) je spreman",
    downloadUrl: "https://signalistrasti.com/downloads/oto2.pdf",
    friendlyName: "dodatni modul (OTO2)",
  },
};

export async function sendProductEmail(options: {
  toEmail: string;
  firstName?: string | null;
  productType: ProductType;
}): Promise<void> {
  const { toEmail, firstName, productType } = options;
  const config = PRODUCT_COPY[productType];

  if (!toEmail || !toEmail.includes("@")) {
    console.warn("Postmark: invalid email, skipping send:", toEmail);
    return;
  }

  const safeFirstName = (firstName && firstName.trim()) || "ljepotice";

  try {
    await client.sendEmail({
      From: "Dunja <info@signalistrasti.com>",
      To: toEmail,
      Subject: config.subject,
      HtmlBody: `
        <p>Hej ${safeFirstName},</p>
        <p>
          upravo si odabrala ${config.friendlyName} — i zato mi je drago da ga imaš. 🧡
        </p>
        <p>
          Klikni ovdje da preuzmeš/pristupiš svom materijalu:<br />
          <a href="${config.downloadUrl}" target="_blank" rel="noopener noreferrer">
            OTVORI SVOJ MATERIJAL
          </a>
        </p>
        <p>
          Ako zapneš ili ti treba pomoć, samo odgovori na ovaj email.
        </p>
        <p>
          Uživaj,<br />
          — SS tim
        </p>
      `,
      TextBody:
        `Hej ${safeFirstName},\n\n` +
        `upravo si odabrala ${config.friendlyName}.\n\n` +
        `Tvoj materijal čeka ovdje: ${config.downloadUrl}\n\n` +
        `Ako ti treba pomoć, samo odgovori na ovaj email.\n\n` +
        `Uživaj,\n— SS tim`,
      MessageStream: "outbound",
    });
  } catch (error) {
    console.error("Postmark sendProductEmail error:", error);
  }
}

