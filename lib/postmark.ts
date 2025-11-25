import { ServerClient } from "postmark";

export type ProductType = "MAIN_OFFER" | "BUMP_1" | "BUMP_2" | "OTO_1" | "OTO_2";

const productEmailConfig: Record<ProductType, { subject: string; productUrl: string; htmlTemplate: string }> = {
  MAIN_OFFER: {
    subject: "Tvoj pristup Signalima strasti je spreman 💌",
    productUrl: "https://drive.google.com/drive/folders/140HWHcwco37wJg5-jIrTd8bkE09988p3?usp=sharing",
    htmlTemplate: `
Ćao {{firstName}},<br><br>

tvoji Signali Strasti su službeno aktivirani — i od danas više ne hodaš kroz odnose naslijepo.<br><br>

U vodiču koji dobivaš otkrit ćeš:<br>
• što njegov govor tijela uistinu znači<br>
• kada je zainteresiran, a kada samo pristojan<br>
• kako prepoznati mikro-signale koji otkrivaju njegove stvarne namjere<br>
• kako izbjeći gubljenje vremena na “možda” muškarce<br><br>

Sve je jasno, konkretno i primjenjivo odmah.<br><br>

👇 Klikni ispod kako bi preuzela svoj vodič:<br>

➡️ <a href="{{productUrl}}">Preuzmi Signale Strasti</a><br><br>

Ako zapne bilo što, samo odgovori na ovaj mail — tu sam za tebe.<br><br>

— Tvoj tim Signali Strasti
`,
  },
  BUMP_1: {
    subject: "Tvoj vodič 'Neka on pita za tvoj broj' 📲",
    productUrl: "https://drive.google.com/drive/folders/18t3QkHFFB76l2r7_lUpAfoek-TtLUpjL?usp=sharing",
    htmlTemplate: `
Hej,<br><br>

odabrala si jedan od najbržih modula za vidljive rezultate — i zato mi je drago da ga imaš.<br><br>

U vodiču koji te čeka otkrit ćeš:<br>
• 3 mikro-geste zbog kojih muškarci spontano preuzmu inicijativu<br>
• kako stvoriti magnetsku prisutnost bez forsiranja<br>
• kako voditi razgovor tako da on želi nastaviti<br>
• kako da NJEMU postane prirodno da prvi pita za tvoj broj<br><br>

Ovo je mali modul, ali moćan — i ženama često promijeni dinamiku u roku 24 sata.<br><br>

👇 Klikni ispod da preuzmeš vodič:<br>

➡️ <a href="{{productUrl}}">Preuzmi vodič</a><br><br>

Uživaj,<br>

— SS tim
`,
  },
  BUMP_2: {
    subject: "Tvoj modul 'Lokacijski magnetizam' 📍",
    productUrl: "https://drive.google.com/drive/folders/1KUMtDnsswMyKaG8zYLbVGHahE0PZPfYC?usp=sharing",
    htmlTemplate: `
Hej {{firstName}},<br><br>

odabrala si modul <strong>Lokacijski magnetizam</strong> — jedan od najmoćnijih dodataka koji ženama donosi brze i vidljive pomake u dinamici s muškarcima.<br><br>

U vodiču koji te čeka otkrit ćeš:<br>
• kako se tvoj signal mijenja ovisno o lokaciji — kafić, ured, teretana, shopping centar…<br>
• koje mikro-pokrete koristiti u kojoj situaciji<br>
• što raditi kada želiš da on napravi prvi korak<br>
• kako 2× ubrzati rezultate samo pametnijim odabirom mjesta i konteksta<br><br>

Ovo je mali modul, ali iznimno snažan — jer ti daje <em>instant navigaciju</em> za situacije koje već živiš svakog dana.<br><br>

👇 Klikni ispod da preuzmeš vodič:<br>

➡️ <a href="{{productUrl}}">Preuzmi Lokacijski magnetizam</a><br><br>

Uživaj,<br>

— SS tim
`,
  },
  OTO_1: {
    subject: "Tvoj modul 'Kompas Strasti' je spreman 🧭",
    productUrl: "https://drive.google.com/drive/folders/1jhp3H7KWX0wke2Ed2b1XM6FGe7kFuouD?usp=drive_link",
    htmlTemplate: `
Hej,<br><br>

ovaj modul ženama donese ono što najviše žele — jasnoću.<br><br>

U njemu ćeš otkriti:<br>
• emocionalni profil muškarca u prvoj poruci<br>
• koje ponašanje znači “DA”, a koje “bježi što prije”<br>
• kako izbjeći gubljenje vremena na nesigurne partnere<br>
• kako procijeniti ozbiljnost mnogo ranije nego prije<br><br>

Kompas Strasti je tvoj unutarnji GPS za odnose — i sada ga imaš.<br><br>

👇 Klikni ispod kako bi preuzela svoj vodič:<br>

➡️ <a href="{{productUrl}}">Preuzmi Kompas Strasti</a><br><br>

Ako ti išta zatreba, samo mi se javi,<br>

— SS tim
`,
  },
  OTO_2: {
    subject: "Tvoj pristup 'Rečenice strasti' stiže uskoro ✨",
    productUrl: "",
    htmlTemplate: `
Hej {{firstName}},<br><br>

ovo je jedini modul koji NE dolazi kao PDF, nego kao mala online platforma sa svim rečenicama, primjerima i situacijama koje možeš odmah kopirati i koristiti.<br><br>

Zbog toga te moramo ručno ubaciti u sustav.<br><br>

📌 Tvoj pristupni link stiže kroz nekoliko sati u posebnom mailu.<br><br>

Unutra ćeš dobiti:<br>
• poruke koje otključavaju njegovu emociju<br>
• rečenice koje grade kemiju bez igrica<br>
• načine da smiriš njegovo nesigurno ponašanje<br>
• komunikaciju koja vodi u bliskost, a ne zbrku<br><br>

Hvala ti na malom strpljenju — šaljem link čim te aktiviramo.<br><br>

Vidimo se uskoro,<br>

— Tvoj tim Signali Strasti
`,
  },
};

export async function sendProductEmail(options: {
  toEmail: string;
  firstName?: string | null;
  productType: ProductType;
}): Promise<void> {
  const { toEmail, firstName, productType } = options;
  const config = productEmailConfig[productType];

  if (!toEmail || !toEmail.includes("@")) {
    console.warn("Postmark: invalid email, skipping send:", toEmail);
    return;
  }

  const safeFirstName = (firstName && firstName.trim()) || "ljepotice";

  const client = new ServerClient(process.env.POSTMARK_SERVER_TOKEN!);

  const htmlBody = config.htmlTemplate
    .replace(/{{firstName}}/g, safeFirstName)
    .replace(/{{productUrl}}/g, config.productUrl || "#");

  const textBody = [
    `Hej ${safeFirstName},`,
    config.productUrl ? `Tvoj materijal te čeka ovdje: ${config.productUrl}` : "",
    "Ako ti treba pomoć, samo odgovori na ovaj email.",
    "Uživaj, — SS tim",
  ]
    .filter(Boolean)
    .join("\n\n");

  try {
    await client.sendEmail({
      From: "Dunja <info@signalistrasti.com>",
      To: toEmail,
      Subject: config.subject,
      HtmlBody: htmlBody,
      TextBody: textBody,
      MessageStream: "outbound",
    });

    console.log("Postmark email sent", toEmail, productType);
  } catch (error) {
    console.error("Postmark sendProductEmail error:", error);
  }
}

