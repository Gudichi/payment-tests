import type { Metadata } from "next";
import Image from "next/image";
import styles from "./Adv2.module.css";
import { Lora, Poppins } from "next/font/google";
import { CommentsSection } from "./CommentsSection";

const poppins = Poppins({
  weight: ["400", "600", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
});

const lora = Lora({
  weight: ["400", "600"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-lora",
});

export const metadata: Metadata = {
  title: "On ne zna da ti se sviđa. Zato ne prilazi. ALI evo kako ćeš mu reći da priđe bez izgovorene riječi.",
  description:
    "Ako ga pogledaš, a on ne priđe, evo kako mu bez riječi pokazati da smije — i privući stvarnog muškarca koji vidi više od izgleda.",
  openGraph: {
    title: "On ne zna da ti se sviđa. Zato ne prilazi. ALI evo kako ćeš mu reći da priđe bez izgovorene riječi.",
    description:
      "Ako ga pogledaš, a on ne priđe, evo kako mu bez riječi pokazati da smije — i privući stvarnog muškarca koji vidi više od izgleda.",
    type: "article",
    publishedTime: new Date().toISOString(),
  },
};

const latestNews = [
  { category: "Lifestyle", title: "5 znakova da je vrijeme za promjenu", time: "12 min" },
  { category: "Savjeti", title: "Kako prepoznati pravu priliku", time: "25 min" },
  { category: "Odnosi", title: "Što muškarci stvarno žele", time: "1h" },
  { category: "Psihologija", title: "Neverbalna komunikacija u praksi", time: "2h" },
  { category: "Lifestyle", title: "10 načina kako poboljšati samopouzdanje", time: "3h" },
  { category: "Savjeti", title: "Kako se osjećati sigurno u bilo kojoj situaciji", time: "5h" },
  { category: "Odnosi", title: "Tajna uspješnih veza", time: "1 dan" },
];

const AsSeenIn = () => {
  const brands = [
    { name: "24sata.hr", logo: "/adv1/24h.png", width: 132, height: 36, alt: "24sata.hr" },
    { name: "Jutarnji.hr", logo: "/adv1/jutranji.png", width: 160, height: 36, alt: "Jutarnji.hr" },
    { name: "Index Rouge", logo: "/adv1/Index-rogue.png", width: 156, height: 36, alt: "Index Rouge" },
    { name: "Lepa & Srećna", logo: "/adv1/Lepa-srecna.png", width: 164, height: 36, alt: "Lepa & Srećna" },
  ];

  return (
    <section className={styles.asSeenWrap} aria-label="Viđeno u medijima">
      <div className={styles.asSeenHeader}>
        <span className={styles.ruleLeft} aria-hidden="true" />
        <span className={styles.asSeenLabel}>Viđeno u medijima</span>
        <span className={styles.ruleRight} aria-hidden="true" />
      </div>
      <div className={styles.asSeenBox}>
        <ul className={styles.brandList}>
          {brands.map((brand) => (
            <li key={brand.name} className={styles.brandItem}>
              {brand.logo ? (
                <Image
                  src={brand.logo}
                  alt={brand.alt ?? brand.name}
                  width={brand.width}
                  height={brand.height}
                  className={styles.brandLogo}
                />
              ) : (
                <span className={styles.brandText} aria-label={brand.name}>
                  {brand.name}
                </span>
              )}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

const advertorialHtml = `
<article class="adv-article">
  <header class="article-header">
    <h1>On ne zna da ti se sviđa. Zato ne prilazi. ALI evo kako ćeš mu reći da priđe bez izgovorene riječi.</h1>
    <p class="article-meta">13. studenog 2025. • SignaliStrasti tim | Balkanska studija neverbalne privlačnosti</p>
  </header>

  <section class="article-intro">
    <blockquote><strong>“Prilaze mi samo oni koje ne bih ni pogledala. A onaj koji mi se sviđa – ništa.”</strong></blockquote>
    <p class="lead"><strong>Ako si ovo ikad pomislila, nisi sama.</strong></p>
    <p><strong>Ali razlog nije u tebi</strong> — <em>nego u onome što on (ne) vidi.</em></p>
    <figure class="article-image">
      <img src="/images/hero-2.png" alt="Hero vizual za SignaliStrasti advertorial" />
    </figure>
    <p><u>Danas, čak i kad ga pogledaš — on neće prići, osim ako ne zna da smije.</u></p>
    <p><strong>Evo što mu zapravo trebaš “reći”</strong> — bez da izgovoriš ijednu riječ</p>
    <p><strong>Jer nisi ti ta koja ne zna privući pažnju.</strong><br/>Već si je privukla — <em>samo nije bila od onih kojima vrijediš.</em></p>
    <p><strong>Zapravo. ti nikad nisi ni željela samo pažnju.</strong><br/>Ti želiš nešto drugo.<br/><em>Ne još jedan “upad”.</em><br/>Ne još jedan razgovor koji nikamo ne vodi.</p>
    <p><strong>Ti želiš muškarca koji je stvaran.</strong></p>
    <p><strong>Onog koji ne mora glumiti liderstvo.</strong></p>
    <p><em>Koji se ne skriva iza poruka i storija.</em></p>
    <p>Koji zna pogledati ženu i — <strong>vidjeti više od izgleda.</strong></p>
  </section>

  <section class="article-section">
    <h2><u>Gdje su nestali oni PRAVI muškarci?</u></h2>
    <figure class="article-image">
      <img src="/images/prijateljica.png" alt="Prijateljice u razgovoru" />
    </figure>
    <p><strong>Koliko je prethodno bilo loših razgovora, površnih poruka, nestanaka bez objašnjenja</strong> i — onih koji su samo tražili "zabavu"</p>
    <p><strong>Realnost?</strong><br/><u>Kvalitetan muškarac tamo je izuzetak — a ne pravilo.</u></p>
    <p><strong>On nije stalno online.</strong><br/>On ne lajka storye.<br/>On ne šalje 43 poruke dnevno.</p>
    <p><strong>On se pojavljuje u stvarnom svijetu.</strong><br/>Ali prići će ti samo ako zna da neće biti odbijen, posramljen ili pogrešno shvaćen.</p>
  </section>

  <section class="article-section">
    <h2><u>Ali evo zašto on (kvalitetan muškarac) ne prilazi</u></h2>
    <figure class="article-image">
      <img src="/images/ne-peilaze.gif" alt="Zašto muškarci ne prilaze" />
    </figure>
    <p><strong>To nije zato što je slab.</strong></p>
  </section>

  <section class="article-section">
    <h2><u>A što kad on reagira?</u></h2>
    <figure class="article-image">
      <img src="/images/sto-kad-reagira.png" alt="Što kad muškarac reagira" />
    </figure>
    <p><strong>Zato dodatno dobivaš i alate</strong> za ono što dolazi poslije:</p>
    <ul>
      <li><strong>Kako ostaviti prvi dojam</strong> koji mu ostaje u mislima</li>
      <li><strong>Kako mu dati prostora</strong> da se osjeća kao da on vodi — ali znaš da vodiš ti</li>
      <li><strong>Kako mu otvoriti prostor</strong> da on pita za tvoj broj (a vjeruje da je to bila njegova ideja)</li>
      <li><strong>Kako odgovarati na poruke</strong> — a da zadržiš onu istu prisutnost koja ga je privukla</li>
      <li><strong>I kako ući u prvi susret</strong> bez tenzije — ali s toplinom koju će dugo pamtiti</li>
    </ul>
  </section>

  <section class="article-section article-ending">
    <h2><u>Na kraju — nije stvar u aplikaciji. Niti u tebi.</u></h2>
    <figure class="article-image">
      <img src="/images/na-kraju.png" alt="Na kraju nije stvar u aplikaciji" />
    </figure>
    <p><strong>Stvar je u jeziku koji on razumije</strong> — a ti nikad nisi imala priliku naučiti.</p>
    <p>I kada ga jednom koristiš…<br/>…nećeš se više pitati:<br/><em>“Zašto nitko ne prilazi?”</em></p>
    <p><strong>Pitat ćeš se samo:</strong><br/><em>“Zašto sam ikad sumnjala u sebe?”</em></p>
    <div class="ctaFooter">
      <a class="ctaFooterButton" href="#">SAZNAJ VIŠE O SIGNALIMA STRASTI — CTA</a>
    </div>
  </section>
</article>
`;

export default function Adv2Page() {
  const publishDate = new Date();
  const dayNames = ["nedjelja", "ponedjeljak", "utorak", "srijeda", "četvrtak", "petak", "subota"];
  const dayName = dayNames[publishDate.getDay()];
  const timeString = publishDate.toLocaleTimeString("hr-HR", { hour: "2-digit", minute: "2-digit" });

  return (
    <div className={`${poppins.variable} ${lora.variable} ${styles.page}`}>
      <header className={styles.siteHeader}>
        <div className={styles.headerContent}>
          <h1 className={styles.siteLogo}>Ja Sam Žena</h1>
        </div>
      </header>

      <div className={styles.container}>
        <article className={styles.article}>
          <header className={styles.header}>
            <h1 className={styles.headline}>
              On ne zna da ti se sviđa. Zato ne prilazi. ALI evo kako ćeš mu reći da priđe bez izgovorene riječi.
            </h1>
            <div className={styles.categoryTag}>LJUBAVNI ODNOSI</div>
            <div className={styles.byline}>
              Piše SignaliStrasti tim, {dayName} u {timeString}
            </div>
            <div className={styles.readingTime}>Čitanje članka: 2 minute</div>
            <figure className={styles.coverImage}>
              <Image
                src="/images/hero-2.png"
                alt="Cover slika"
                width={1920}
                height={800}
                className={styles.coverImg}
                priority
              />
            </figure>
          </header>

          <AsSeenIn />

          <div className={styles.articleBody}>
            <div className={styles.bodyText} dangerouslySetInnerHTML={{ __html: advertorialHtml }} />
          </div>
          <CommentsSection />
        </article>

        <aside className={styles.sidebar}>
          <h3 className={styles.sidebarTitle}>Najnovije</h3>
          <ul className={styles.latestList}>
            {latestNews.map((item, index) => (
              <li key={index} className={styles.latestItem}>
                <a href="#" className={styles.latestLink}>
                  <span className={styles.latestCategory}>{item.category}</span>
                  <span className={styles.latestTitle}>{item.title}</span>
                  <span className={styles.latestTime}>{item.time}</span>
                </a>
              </li>
            ))}
          </ul>
        </aside>
      </div>
    </div>
  );
}
