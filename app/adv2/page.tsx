import type { Metadata } from "next";
import Image from "next/image";
import { Inter, Merriweather } from "next/font/google";
import styles from "./Adv2.module.css";
import { CommentsAdv2 } from "./CommentsAdv2";

const inter = Inter({ subsets: ["latin"], display: "swap", variable: "--font-body" });
const merriweather = Merriweather({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-heading",
});

export const metadata: Metadata = {
  title:
    "Smijali su se kad sam rekla da mi svakog dana barem jedan dečko priđe na ulici — dok im nisam otkrila TAJNU zbog koje se to događa!",
  description:
    "Tačna priča objavljena kao feature članak: bez izmjena u tekstu, samo premium novinski dizajn.",
};

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

function normalizeAdvertorialHTML(raw: string): string {
  let html = raw;

  html = html.replace(/<u>([\s\S]*?)<\/u>/gi, '<span class="u">$1</span>');
  html = html.replace(/<b>/gi, "<strong>").replace(/<\/b>/gi, "</strong>");
  html = html.replace(/<i>/gi, "<em>").replace(/<\/i>/gi, "</em>");

  html = html.replace(/<(h[1-3])([^>]*)>([\s\S]*?)<\/\1>/gi, (_match, tag, attrs, inner) => {
    const cleaned = inner.replace(/<\/?strong>/gi, "").replace(/<\/?em>/gi, "");
    return `<${tag}${attrs}>${cleaned}</${tag}>`;
  });

  return html.trim();
}

function addCaptions(html: string): string {
  return html.replace(/<figure>([\s\S]*?)<\/figure>/gi, (_match, inner) => {
    if (/figcaption/gi.test(inner)) {
      return `<figure>${inner}</figure>`;
    }
    return `<figure>${inner}<figcaption>Foto: ilustracija / arhiva</figcaption></figure>`;
  });
}

function prepareAdvertorialHtml(raw: string): string {
  return addCaptions(normalizeAdvertorialHTML(raw));
}

const advertorialHtml = prepareAdvertorialHtml(rawAdvertorialContent);
const contentSections = advertorialHtml.split("<hr />");

const quoteOne =
  'Muškarac ne prilazi zato što želi, nego zato što osjeti da smije.';
const quoteTwo =
  "Većina žena ne stigne ni do trećeg dana, a da se nešto ne dogodi.";

function RelatedArticles() {
  return (
    <section className={styles.related} aria-label="Povezani članci">
      <h3>Related Articles</h3>
      <ul>
        <li><a href="#">Kako čitati neverbalne signale u prvim susretima</a></li>
        <li><a href="#">5 načina da tvoja prisutnost djeluje sigurnije</a></li>
        <li><a href="#">Što znači “zeleno svjetlo” u realnim situacijama</a></li>
      </ul>
    </section>
  );
}

function AsSeenStrip() {
  return (
    <div className={styles.asSeen} aria-label="As seen in">
      <div className={styles.asSeenLabel}>As seen in</div>
      <div className={styles.asSeenLogos}>
        {["LOGO", "NEWS", "MEDIA", "PORTAL", "MAG"].map((label) => (
          <div key={label} className={styles.logoPlaceholder}>
            {label}
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Adv2Page() {
  return (
    <div className={`${inter.variable} ${merriweather.variable} ${styles.page}`}>
      <header className={styles.newsHeader}>
        <div className={styles.newsBar}>
          <div className={styles.newsLogo}>NEWS</div>
          <nav className={styles.newsNav}>
            <a href="#">News</a>
            <a href="#">Lifestyle</a>
            <a href="#">Relationships</a>
            <a href="#">Trending</a>
          </nav>
        </div>
      </header>

      <main className={styles.container}>
        <article className={styles.article}>
          <div className={styles.metaStrip}>
            <span>RELATIONSHIPS</span>
            <span className={styles.dot} />
            <span>FEATURE STORY</span>
          </div>
          <h1 className={styles.title}>
            Smijali su se kad sam rekla da mi svakog dana barem jedan dečko priđe na ulici — dok im nisam otkrila TAJNU zbog koje se to događa!
          </h1>
          <div className={styles.readingTime}>3 min read</div>
          <figure className={styles.cover}>
            <Image
              src="/adv1/adv1-im1.png"
              alt="Cover slika"
              width={1920}
              height={800}
              priority
            />
            <figcaption className={styles.caption}>Foto: ilustracija / arhiva</figcaption>
          </figure>
          <div className={styles.pubInfo}>
            Objavljeno 18.11.2025. • Autor: Redakcija • Verified Content
          </div>

          <AsSeenStrip />

          {contentSections.map((section, index) => (
            <div key={index} className={styles.section}>
              <div className={styles.bodyText} dangerouslySetInnerHTML={{ __html: section }} />
              {index < contentSections.length - 1 && <div className={styles.divider} role="presentation" />}
              {index === 1 && <div className={styles.callout}>{quoteOne}</div>}
              {index === 3 && <RelatedArticles />}
              {index === 4 && <div className={styles.callout}>{quoteTwo}</div>}
            </div>
          ))}

          <div className={styles.editorialNotice}>
            <strong>Editorial Notice:</strong> Ovaj sadržaj je verificiran od strane redakcije i objavljen u informativne
            svrhe. Savjeti ne zamjenjuju profesionalno savjetovanje; čitateljice odluke donose samostalno.
          </div>

          <CommentsAdv2 />
        </article>
      </main>
    </div>
  );
}
