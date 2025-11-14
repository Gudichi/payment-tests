import type { Metadata } from "next";
import Image from "next/image";
import styles from "./Adv1.module.css";
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
  title:
    "Smijali su se kad sam rekla da mi svakog dana barem jedan dečko priđe na ulici",
  description:
    "ALI onda sam im otkrila TAJNU. Prijateljice. Kolegice. Čak i sestra. Iskreno? Vjerojatno bih i ja isto rekla da nisam prošla kroz... ono što sam prošla.",
  openGraph: {
    title:
      "Smijali su se kad sam rekla da mi svakog dana barem jedan dečko priđe na ulici",
    description:
      "ALI onda sam im otkrila TAJNU. Prijateljice. Kolegice. Čak i sestra.",
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

const faqItems = [
  {
    question: "„Što ako mi nitko ne priđe?”",
    answer: "Nije poanta samo u njima. Poanta je da se TI osjećaš primijećeno.",
  },
  {
    question: "„Zvuči super, ali što ako sam introvert?”",
    answer: "Ne moraš ništa glumiti, ni preuzimati inicijativu. Signali rade ispod površine.",
  },
  {
    question: "„Zar ne izgleda očajno kad žena signalizira?”",
    answer: "Ne ako znaš kako. Ovo nisu trikovi. Ovo je govor tijela koji čita svaki muškarac, instinktivno.",
  },
];

const productDetails = [
  { label: "Trajanje", value: "cca 1h 20min čiste primjene u svakodnevnim situacijama" },
  { label: "Format", value: "Digitalni vodič + Signal kartice (PDF & interaktivno)" },
  { label: "Autorica", value: "Tihana M. (kreatorica “Psihološkog Zavođenja”)" },
  { label: "Dizajniran za", value: "Žene koje žele više pažnje — bez forsiranja" },
  { label: "Emocionalni ton", value: "Inteligentno, senzualno, samopouzdano" },
  { label: "Jezik", value: "Hrvatski 🇭🇷" },
  { label: "Posebno pogodno za", value: "Kafiće, urede, dnevne situacije u kojima on oklijeva prići" },
  { label: "Vrijednost paketa", value: "247€ – uključeno bez dodatne naplate 💎" },
  { label: "Ocjena korisnica", value: "4.7 / 5 ⭐" },
];

const mostDownloaded = [
  "Ženama 25–45 koje žele diskretan, ali moćan ljubavni utjecaj",
  "Klijenticama koje žele psihološku prednost u igri privlačnosti",
  "Korisnicama koje su umorne od skripti — i žele elegantnu autentičnost",
];

const highlightedPraise = [
  "Jasna primjena",
  "Senzualna elegancija",
  "Emocionalna snaga",
  "Autentičnost bez skripti",
  "Vidiš rezultate bez forsiranja",
  "Potiče muževnu inicijativu",
];

const topReviews = [
  {
    name: "Maja Šimunović",
    rating: "★★★★★",
    body:
      "Najbolje u svemu je što ne moraš ništa glumit. Samo lagano promijeniš energiju i odjednom te ljudi primijete. Ja sam imala prvi “prilazak” nakon 48 sati.",
  },
  {
    name: "Ivana Leko",
    rating: "★★★★★",
    body:
      "Kupila sam čisto iz znatiželje, nisam očekivala ništa… i evo me sad pričam svim curama. Radim u butiku i dobijam više kontakta očima nego ikad prije.",
  },
  {
    name: "Laura Dropulić",
    rating: "★★★★★",
    body:
      "Ono što stalno ponavljam frendicama — ne radi ovo samo da te muškarci gledaju, nego da ti sebe drugačije osjetiš. Meni je nakon nekoliko dana došla neka nova sigurnost.",
  },
  {
    name: "Ema Kušan",
    rating: "★★★★★",
    body:
      "Odličan vodič! Jednostavno, brzo, i stvarno vidiš rezultate. Meni je najviše pomoglo objašnjenje zašto signali rade. Nekako sve sjedne u glavu.",
  },
  {
    name: "Valentina Rožić",
    rating: "★★★★★",
    body:
      "Meni je ovo promijenilo ritam izlazaka. Ne gledam više tko će prići — jer sad stvarno priđu. 😅 Posebno kad ubacim 8. signal, to je ludilo.",
  },
  {
    name: "Martina Birač",
    rating: "★★★★★",
    body:
      "Najbolji dio je lokacijska primjena. Inače radim na recepciji i bilo mi je teško znat kad šta koristiti. Sad sve imam jasno i mogu lagano primijenit.",
  },
  {
    name: "Paula Gregurić",
    rating: "★★★★★",
    body:
      "Nisam mislila da će ovako brzo raditi. Prvu malu promjenu sam vidjela drugi dan kad sam koristila signal u uredu. Muški me počeli malo više gledat, onako toplo.",
  },
  {
    name: "Jelena Legac",
    rating: "★★★★★",
    body:
      "Osjeti se razlika u energiji, stvarno. Nije ni čudo da rade kad je toliko suptilno da ne može bit neugodno. Meni jako prirodno dođe.",
  },
  {
    name: "Dora Vuković",
    rating: "★★★★★",
    body:
      "Ovo je najbolji digitalni proizvod koji sam kupila ove godine. Čisto jer mi je vratilo neku ženstvenost koju sam godinama potiskivala.",
  },
  {
    name: "Tihana Pavlić",
    rating: "★★★★★",
    body:
      "Odlična stvar! I sve izgleda elegantno, lako i nenametljivo. Ako tražiš nešto što stvarno možeš odmah primijenit — ovo je to.",
  },
];

function normalizeAdvertorialHTML(raw: string): string {
  let html = raw;

  html = html.replace(/<u>([\s\S]*?)<\/u>/gi, '<span class="u">$1</span>');
  html = html.replace(/<b>/gi, "<strong>").replace(/<\/b>/gi, "</strong>");
  html = html.replace(/<i>/gi, "<em>").replace(/<\/i>/gi, "</em>");

  html = html.replace(/<(h[1-3])([^>]*)>([\s\S]*?)<\/\1>/gi, (match, tag, attrs, inner) => {
    const cleaned = inner.replace(/<\/?strong>/gi, "").replace(/<\/?em>/gi, "");
    return `<${tag}${attrs}>${cleaned}</${tag}>`;
  });

  html = html
    .replace(/<strong>\s*(<em>[\s\S]*?<\/em>)\s*<\/strong>/gi, "$1")
    .replace(/<em>\s*(<strong>[\s\S]*?<\/strong>)\s*<\/em>/gi, "$1");

  html = applyBlockquoteHeuristics(html);
  html = wrapBareTextLines(html);

  return html.trim();
}

function applyBlockquoteHeuristics(html: string): string {
  return html.replace(/<p\b([^>]*)>([\s\S]*?)<\/p>/gi, (match, attrs, inner) => {
    const textOnly = inner.replace(/<[^>]+>/g, "").trim();
    const startsWithQuote = /^("|“|„|')/.test(textOnly);
    const endsWithQuote = /("|”|'|")$/.test(textOnly);
    if (textOnly && startsWithQuote && endsWithQuote) {
      return `<blockquote>${inner}</blockquote>`;
    }
    return match;
  });
}

function wrapBareTextLines(html: string): string {
  return html.replace(/(?:^|\n)([^<\n][^\n]+)(?=\n|$)/g, (match, line) => {
    if (/^\s*(#+|[-*]>?|<\/?\w)/.test(line)) {
      return match;
    }
    const trimmedLine = line.trim();
    if (!trimmedLine) {
      return match;
    }
    return `\n<p>${trimmedLine}</p>`;
  });
}

function enforceEmphasisLimits(html: string): string {
  const limitTag = (content: string, tag: "strong" | "em") => {
    let count = 0;
    const tagRegExp = new RegExp(`<${tag}>([\\s\\S]*?)<\/${tag}>`, "gi");
    return content.replace(tagRegExp, (_fullMatch, inner) => {
      count += 1;
      if (count <= 2) {
        return `<${tag}>${inner}</${tag}>`;
      }
      return inner;
    });
  };

  return html.replace(/<p\b([^>]*)>([\s\S]*?)<\/p>/gi, (match, attrs, inner) => {
    const limitedStrong = limitTag(inner, "strong");
    const limitedEm = limitTag(limitedStrong, "em");
    return `<p${attrs}>${limitedEm}</p>`;
  });
}

function addLeadClasses(html: string, maxLead = 3): string {
  let seen = 0;
  return html.replace(/<p\b([^>]*)>/gi, (match, attrs) => {
    if (seen >= maxLead) {
      return match;
    }
    const attrString = attrs || "";
    seen += 1;
    if (/class=/i.test(attrString)) {
      return `<p${attrString.replace(/class="([^"]*)"/i, (_m, classNames) => ` class="${classNames} lead"`)}>`;
    }
    return `<p${attrString} class="lead">`;
  });
}

function prepareAdvertorialHtml(raw: string): string {
  const normalized = normalizeAdvertorialHTML(raw);
  const limited = enforceEmphasisLimits(normalized);
  return addLeadClasses(limited);
}

const rawAdvertorialContent = `
<p><strong>ALI onda sam im otkrila TAJNU.</strong></p>
<p>"Ma daj... ne živiš u filmu."<br/>"To ti je sigurno neki čudak."<br/>"U Zagrebu? Da ti priđe normalan muškarac – svaki dan? Daj, budi realna."</p>
<p>To su mi rekli. Prijateljice. Kolegice. Čak i sestra. Iskreno? Vjerojatno bih i ja isto rekla da nisam prošla kroz... ono što sam prošla.</p>
<figure><img src="/adv1/adv1-im2.a.png" alt="Žena koja razmišlja" loading="lazy"/></figure>
<p>Jer prije tri mjeseca, osjećala sam se totalno suprotno. Kao da sam postala — <em>prozirna.</em></p>
<hr />
<h2>Znaš ono kad se središ... i ništa se ne dogodi?</h2>
<figure><img src="/adv1/adv1-im3.png" alt="Spremna za izlazak" loading="lazy"/></figure>
<p>Obuješ one čizme koje ti dobro stoje. Osmijeh na licu, držiš se lijepo. Čak se uhvatiš da ga pogledaš...</p>
<p>...i opet ništa. Nitko ne reagira. Nitko ne prilazi. Osjećaš se kao ukras u pozadini scene.</p>
<p>Mislila sam: "Možda je do mene." Ali kad sam počela pričati s drugim ženama, shvatila sam — <em>nismo mi problem.</em> Problem je što su muškarci — pogubljeni.</p>
<hr />
<h2>Što se dogodilo muškarcima?</h2>
<figure><img src="/adv1/muskarci.png" alt="Zbunjen muškarac" loading="lazy"/></figure>
<p>Mobiteli. Strah od odbijanja. "Šta ako mi kaže da odem?" #MeToo paranoja. "U redu je biti džentlmen" pretvorilo se u "najbolje da šutim".</p>
<p>Ali ono što većina žena ne zna... Muškarac ne prilazi zato što <strong>želi</strong>, nego zato što <strong>osjeti da smije</strong>.</p>
<p>I devedeset devet posto žena tog signala više — <strong>ne šalje.</strong> Ne zato što je glupa ili nezanimljiva. Nego zato što ju je <em>život naučio da se zatvori.</em></p>
<hr />
<h2>A ja? Ja sam otkrila kako ponovno "upaliti svjetlo"</h2>
<figure><img src="/adv1/svjetlo.png" alt="Simbolične žarulje" loading="lazy"/></figure>
<p>Nisam otišla na makeover. Nisam učila nikakve rečenice niti glumila samopouzdanje. Nisam čak ni gledala one cringe videe na TikToku o "feminine energy".</p>
<p>Umjesto toga, netko mi je pokazao <strong>sedam neverbalnih signala</strong> koje muški mozak prepoznaje kao jasno dopuštenje.</p>
<p>"Otvorena je. Sigurno je. Smiješ joj prići."</p>
<p>Bilo je... smiješno jednostavno. I da — prvi put kad sam to pokušala, prišao mi je netko normalan.</p>
<h2>Drugi dan, opet ista stvar.</h2>
<figure><img src="/adv1/pekara.png" alt="Susret u pekari" loading="lazy"/></figure>
<p>Bila sam u pekari. Samo sam stajala, držala tijelo kako mi je pokazano — i pogledala na točno određeni način.</p>
<p>"Iskreno... mislim da sam vas već negdje vidio. Ili mi se samo čini?"</p>
<p><em>Nisam znala što odgovoriti.</em> Ali nisam ni morala. Jer nije bila poanta u tome da budem brza ili zabavna. Poanta je bila — <em>da se opet osjećam primijećeno.</em></p>
<hr />
<h2>I tako sam počela koristiti aplikaciju koja ti svaki dan kaže što da napraviš — i gdje.</h2>
<figure><img src="/adv1/Gif-1.gif" alt="Demonstracija Signala strasti" loading="lazy"/></figure>
<p>Zove se <strong>Signali strasti.</strong></p>
<p>Nije aplikacija za dejtanje. Nije trening za flert. I ne uči te kako "uhvatiti frajera".</p>
<p>Uči te kako ponovno aktivirati svoju stvarnu prisutnost. Ne online, ne kroz izgled, nego kroz mikro-signale koje tvoje tijelo već zna — samo su ti ih izgasili.</p>
<hr />
<h2>Kako funkcionira?</h2>
<figure><img src="/adv1/Gif-2.gif" alt="Kako radi aplikacija" loading="lazy"/></figure>
<p><em>U aplikaciji svaki dan dobiješ:</em></p>
<p>✅ jedan signal (trajanje: 60 sekundi ili manje)<br/>✅ psihološko objašnjenje zašto djeluje na muški mozak<br/>✅ savjet koji signal odabrati ovisno o lokaciji (kafić, posao, teretana...)<br/>✅ mentorsku podršku ako želiš provjeru ili samo podijeliti što ti se dogodilo</p>
<p><em>I iskreno?</em> Većina žena ne stigne ni do trećeg dana, a da se nešto ne dogodi. Pogled više. Osmijeh. Prilazak. Ili samo osjećaj da nisi duh u prostoru.</p>
<hr />
<div data-sponsor>
  <h3>Najbolji osjećaj? Kad te prvi put pita: "Hej, oprosti... poznajemo li se?"</h3>
  <p>Ne moraš promijeniti izgled. Ne moraš mijenjati svoj stil komunikacije. I ne moraš glumiti otvorenost — jer ona već postoji u tebi.</p>
  <p>Samo je zatrpana pravilima, stresom, sramom i godinama u kojima te nitko nije gledao onako.</p>
  <a href="/lp1" role="button">Otvori vodič</a>
</div>
<hr />
<h2>I što sam otkrila?</h2>
<figure><img src="/adv1/signli.png" alt="Rezultati Signala strasti" loading="lazy"/></figure>
<p><strong>Otkrila sam da se vidljivost ne događa slučajno.</strong> Događa se kad pošalješ signal. A sada znam — <strong>koji.</strong></p>
<p>Zato kad mi kažu:</p>
<p>"Ma daj, nije moguće da ti svaki dan netko priđe..."</p>
<hr />
<p>➡️ Ako i ti želiš osjetiti kako je to — kad netko <em>primijeti baš tebe</em>, probaj prvi signal već danas.</p>
<p>Bez obveze. Bez glume. Samo ti — kako te muškarci još nisu vidjeli.</p>
<p class="ctaFooter"><a href="/lp1" class="ctaFooterButton">Otvori Signale Strasti ovdje</a></p>
<p class="ctaFooterHint">(i vidi što se dogodi sljedeći put kad uđeš u kafić.)</p>
`;

const advertorialHtml = prepareAdvertorialHtml(rawAdvertorialContent);

function AsSeenIn() {
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
}

function FAQSection() {
  return (
    <section className={styles.faqSection} aria-labelledby="adv1-faq-title">
      <div className={styles.faqIntro}>
        <h2 id="adv1-faq-title">Najčešća pitanja</h2>
        <p>Brzi odgovori prije nego aktiviraš svoje prve Signale Strasti.</p>
      </div>
      <div className={styles.faqList}>
        {faqItems.map((item) => (
          <details key={item.question} className={styles.faqItem}>
            <summary>
              <span>{item.question}</span>
              <span aria-hidden="true" className={styles.faqIcon}>
                +
              </span>
            </summary>
            <p>{item.answer}</p>
          </details>
        ))}
      </div>
    </section>
  );
}

function PostFaqInsights() {
  return (
    <div className={styles.postFaqSections}>
      <section className={styles.productDetailsSection}>
        <h3>Detalji proizvoda</h3>
        <dl className={styles.detailsTable}>
          {productDetails.map((row) => (
            <div key={row.label} className={styles.detailsRow}>
              <dt>{row.label}</dt>
              <dd>{row.value}</dd>
            </div>
          ))}
        </dl>
      </section>

      <section className={styles.checklistSection}>
        <h3>Najčešće preuziman među:</h3>
        <ul>
          {mostDownloaded.map((item) => (
            <li key={item}>✔️ {item}</li>
          ))}
        </ul>
      </section>

      <section className={styles.summaryCard}>
        <h3>Što korisnice kažu</h3>
        <p>
          Korisnice opisuju ovaj vodič kao elegantan, dubok i nevjerojatno primjenjiv u stvarnim
          situacijama. Najviše ga cijene jer ne koristi “igre” – nego pomaže ženi da zadrži moć, dok
          mu pokazuje da je otvorena.
        </p>
      </section>

      <section className={styles.highlightSection}>
        <h3>Najviše hvaljeno:</h3>
        <ul>
          {highlightedPraise.map((item) => (
            <li key={item}>✔ {item}</li>
          ))}
        </ul>
        <a href="/test" className={styles.primaryCta}>
          Da, želim pristupiti Signalima Strasti…
        </a>
      </section>

      <section className={styles.reviewSection}>
        <div className={styles.reviewHeader}>
          <h3>Top recenzije u Hrvatskoj</h3>
          <p>Realne povratne informacije potvrđenih korisnica</p>
        </div>
        <div className={styles.reviewList}>
          {topReviews.map((review, index) => (
            <article key={`${review.name}-${index}`} className={styles.reviewCard}>
              <div className={styles.reviewMeta}>
                <p className={styles.reviewName}>{review.name}</p>
                <span className={styles.reviewBadge}>Potvrđena kupnja</span>
              </div>
              <div className={styles.reviewRating} aria-label="5 od 5">
                {review.rating}
              </div>
              <p className={styles.reviewBody}>{review.body}</p>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}

export default function Adv1Page() {
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
              Smijali su se kad sam rekla da mi svakog dana barem jedan dečko priđe na ulici — dok im nisam otkrila TAJNU zbog koje se to događa!
            </h1>
            <div className={styles.categoryTag}>LJUBAVNI ODNOSI</div>
            <div className={styles.byline}>
              Piše Martina Akrapović, {dayName} u {timeString}
            </div>
            <div className={styles.readingTime}>Čitanje članka: 2 minute</div>
            <figure className={styles.coverImage}>
              <Image
                src="/adv1/adv1-im1.png"
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
          <FAQSection />
          <PostFaqInsights />
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
