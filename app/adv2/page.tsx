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
  <section class="article-section">
    <figure class="article-image">
      <img src="/muskarci-zele-prici.png" alt="Muškarci žele prići - vizual s terase">
      <!-- <muskarci-zele-prici.png> -->
    </figure>

    <p>
      Znaš kako izgleda kad ti netko priđe, ali ti je odmah jasno da... <em>nije to to?</em>
    </p>

    <p>
      Ne znaš što točno fali — ali znaš da to nije ono što tražiš.
    </p>

    <p>Možda je previše napadan.</p>
    <p>Možda je nesiguran, pa glumi samopouzdanje.</p>
    <p>Možda samo ponavlja “forice” koje je već isprobao na pet drugih.</p>

    <p><strong>A ti?</strong></p>

    <p>
      Ti osjećaš da možeš privući pažnju — ali ne pažnju koju želiš.
    </p>

    <p><strong>Ali evo stvarnosti:</strong></p>

    <p><strong>Takvi muškarci postoju sve rijeđe.</strong></p>

    <p>
      I još važnije — <u>oni ne traže svuda.</u>
    </p>

    <h2>Gdje su oni zapravo? Tinder? Instagram?</h2>
  </section>

  <section class="article-section">
    <figure class="article-image">
      <img src="/tinder-insta.png" alt="Žena leži s mobitelom - Tinder/Instagram">
      <!-- <tinder-insta.png> -->
    </figure>

    <p>
      Sigurno znaš barem jednu prijateljicu koja kaže:
    </p>

    <p>
      <em><u>“Ma slušaj, ja sam upoznala svog dečka na Tinderu, i baš je super.”</u></em>
    </p>

    <p>
      I to ti nekako potajno da nadu…<br>
      …da možda samo trebaš <strong>“probati još jednom”.</strong><br>
      Da se taj pravi nalazi iza nekoliko swipova ljevo ili desno…
    </p>

    <p>
      <h2>Ali znaš što ti ta ista prijateljica neće reći?</h2>
    </p>
  </section>

  <section class="article-section">
    <figure class="article-image">
      <img src="/prijateljica.png" alt="Prijateljica gleda u mobitel noću">
      <!-- <prijateljica.png> -->
    </figure>

    <p>
      Koliko je prethodno bilo loših razgovora, površnih poruka, nestanaka bez objašnjenja i
      — <strong>onih koji su samo tražili "zabavu"...</strong>
    </p>

    <p><em>Realnost?</em><br>
      <strong>Kvalitetan muškarac tamo je izuzetak — a ne pravilo.</strong>
    </p>

    <p>On nije stalno online.<br>
      On ne lajka storye.<br>
      On ne šalje 43 poruke dnevno.
    </p>

    <p>
      On se pojavljuje u stvarnom svijetu.<br>
      Ali prići će ti samo ako zna da neće biti odbijen, posramljen ili pogrešno shvaćen.
    </p>

    <p>
      <h2>Ali evo zašto on (kvalitetan muškarac) ne prilazi</h2>
    </p>
  </section>

  <section class="article-section">
    <figure class="article-image">
      <img src="/ne-peilaze.gif" alt="Gif - muškarac razmišlja hoće li prići">
      <!-- <ne-peilaze.gif> -->
    </figure>

    <p>
      To nije zato što je slab. Ili neodlučan.
    </p>

    <p>
      To je zato što je danas <em>preoprezan.</em>
    </p>

    <p>
      Ne želi biti “onaj lik” koji ti smeta.<br>
      Ne želi pogrešno tumačiti tvoju energiju.<br>
      Ne želi riskirati neugodu — jer te ne poznaje još.
    </p>

    <h2>Evo što kvalitetni muškarci zapravo čekaju prije nego ti priđu?</h2>

    <p>
      <u>Da mu pokažeš jedan jasan, ali diskretan signal:</u><br>
      “U redu je. Možeš.”
    </p>

    <p>
      To ne mora biti pogled. Niti osmijeh.<br>
      To ne mora biti ništa teatralno.
    </p>

    <p>
      Dovoljno je nešto što će njegov <em>muški mozak</em> nesvjesno prepoznati kao:<br>
      “Otvorena je. Neće me odbiti. Ovo ima smisla.”
    </p>

    <h2>I tu dolazimo do onoga o čemu se ne priča — ali odlučuje sve.</h2>
  </section>

  <section class="article-section">
    <figure class="article-image">
      <img src="/pekara.png" alt="Žena i muškarac u pekari">
      <!-- <pekara.png> -->
    </figure>

    <p>
      Kada se muškarac pita “prilazim li ili ne?”, njegov mozak analizira prostor, tvoje
      držanje, mikro pokrete, energiju.
    </p>

    <p>
      To nije logično. To je instinktivno.
    </p>

    <p>
      Zato tvoja namjera često ne dolazi do izražaja — jer on je ne čita riječima.<br>
      Nego <em>signalima.</em>
    </p>

    <p>
      I kada nemaš te signale — on to ne doživljava kao nedostatak interesa.<br>
      On to doživljava kao zatvorena vrata.
    </p>

    <p>
      Kao rizik.<br>
      Kao: “Ona ne želi da joj priđem.”
    </p>

    <p>
      I tu sve staje. Prije nego je i počelo.
    </p>

    <h2>Zato sam stvorila Signale Strasti</h2>
  </section>

  <section class="article-section">
    <figure class="article-image">
      <img src="/signli.png" alt="Usporedba - bez signala / sa Signalima Strasti">
      <!-- <signli.png> -->
    </figure>

    <p>
      Ne da te “pretvore” u nekog drugog.<br>
      Ne da glumiš femme fatale iz filma.<br>
      I ne da se igra igara.
    </p>

    <p>
      Nego da ti, u svom stvarnom svakodnevnom prostoru — u kafiću, na poslu, u teretani
      —
      imaš jednu malu stvar koju napraviš taj dan…<br>
      …i koja nesvjesno daje muškom mozgu zeleno svjetlo.
    </p>

    <p>
      Bez riječi.<br>
      Bez glume.<br>
      Bez da se osjećaš izloženo.
    </p>

    <h2>Evo kako ćeš privući kvalitetnog muškarca u samo 7 dana:</h2>
  </section>

  <section class="article-section">
    <figure class="article-image">
      <img src="/Gif-1.gif" alt="Gif - mikro-signal i muškarčeva reakcija">
      <!-- <Gif-1.gif> -->
    </figure>

    <p>
      Otvoriš aplikaciju.<br>
      Dobiješ jedan mikro-signal — jednostavan pokret, stav ili pogled.<br>
      Točno znaš gdje ga koristiti (ovisno o mjestu gdje jesi).<br>
      Sve traje manje od minute.
    </p>

    <p>
      I već tog dana možeš primijetiti promjenu.<br>
      Ljudi te gledaju drugačije.<br>
      Muškarci traže kontakt očima.<br>
      Netko ti priđe. Pitaju nešto. Osmjehnu se. Pokrenu razgovor.
    </p>

    <p class="signal-callout">
      <strong>Jer si poslala signal koji kaže:<br>
      “Otvorena sam. Svoja. I spremna da me vidiš.”</strong>
    </p>

    <h2>A što kad on reagira?</h2>
  </section>

  <section class="article-section">
    <figure class="article-image">
      <img src="/sto-kad-reagira.png" alt="Muškarac prati ženu pogledom">
      <!-- <sto-kad-reagira.png> -->
    </figure>

    <h3 class="subSubHeadline">Zato dodatni dobivaš i alate za ono što dolazi poslije:</h3>

    <ul class="checklist">
      <li><span class="checkIcon" aria-hidden="true">✓</span>Kako ostaviti prvi dojam koji mu ostaje u mislima</li>
      <li><span class="checkIcon" aria-hidden="true">✓</span>Kako mu dati prostora da se osjeća kao da on vodi — ali znaš da vodiš ti</li>
      <li><span class="checkIcon" aria-hidden="true">✓</span>Kako mu otvoriti prostor da on pita za tvoj broj (a vjeruje da je to bila njegova ideja)</li>
      <li><span class="checkIcon" aria-hidden="true">✓</span>Kako odgovarati na poruke — a da zadržiš onu istu prisutnost koja ga je privukla</li>
      <li><span class="checkIcon" aria-hidden="true">✓</span>I kako ući u prvi susret bez tenzije — ali s toplinom koju će dugo pamtiti</li>
    </ul>

    <p>
      <strong><em>Na kraju — nije stvar u aplikaciji. Niti u tebi.</em></strong>
    </p>
  </section>

  <section class="article-section article-ending">
    <figure class="article-image">
      <img src="/na-kraju.png" alt="Prije/poslije - bez signala i sa Signalima Strasti">
      <!-- <na-kraju.png> -->
    </figure>

    <p>
      Stvar je u jeziku koji on razumije — a ti nikad nisi imala priliku naučiti.
    </p>

    <p>
      I kada ga jednom koristiš…<br>
      …nećeš se više pitati: “Zašto nitko ne prilazi?”
    </p>

    <p>
      Pitat ćeš se samo:<br>
      “Zašto sam ikad sumnjala u sebe?”
    </p>

    <div class="ctaFooter">
      <a class="ctaFooterButton" href="/">SAZNAJ VIŠE O SIGNALIMA STRASTI</a>
    </div>
  </section>

</article>
`;

export default function Adv2Page() {
  return (
    <div className={`${poppins.variable} ${lora.variable} ${styles.page}`}>
      <div className={styles.container}>
        <article className={styles.article}>
          <header className={styles.header}>
            <h1 className={styles.headline}>
              <em>On ne zna da ti se sviđa.</em> Zato ne
              prilazi. <strong className={styles.u}>ALI evo kako ćeš mu reći da priđe bez izgovorene riječi.</strong>
            </h1>
            <div className={styles.categoryTag}>LJUBAVNI ODNOSI</div>
            <div className={styles.byline}>
              13. studenog 2025. • <strong>SignaliStrasti tim</strong> | <em>Balkanska studija neverbalne privlačnosti</em>
            </div>
            <blockquote className={styles.leadQuote}>
              “Prilaze mi samo oni koje ne bih ni pogledala. A onaj koji mi se sviđa – ništa.”
            </blockquote>
            <figure className={styles.coverImage}>
              <Image
                src="/hero-2.png"
                alt="Cover slika"
                width={1920}
                height={800}
                className={styles.coverImg}
                priority
              />
            </figure>
            <div className={styles.heroIntro}>
              <h2 className={styles.heroTitle}>
                <strong>Danas, čak i kad ga pogledaš — on neće prići, osim ako ne zna da smije.</strong>
              </h2>
              <p className={`${styles.lead} ${styles.subLead}`}>
                <u>Evo što mu zapravo trebaš “reći” — bez da izgovoriš ijednu riječ.</u>
              </p>
            </div>
          </header>

          <AsSeenIn />

          <div className={styles.articleBody}>
            <div className={styles.bodyText} dangerouslySetInnerHTML={{ __html: advertorialHtml }} />
          </div>
          <CommentsSection />
          <div className={styles.pageCta}>
            <a className={styles.ctaFooterButton} href="/">SAZNAJ VIŠE O SIGNALIMA STRASTI</a>
          </div>
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
