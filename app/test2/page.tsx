import Image from "next/image";
import type { Metadata } from "next";
import styles from "./test2.module.css";

export const metadata: Metadata = {
  title: "Signali Strasti — Aktiviraj mikro-gestu zbog koje on prilazi prvi",
  description:
    "7 mikro-gesti koje ti uže vrijeme od minute — i pokreću njegov instinkt da ti priđe. Bez aplikacija, bez glume, bez ijedne izgovorene riječi.",
};

const contexts = [
  {
    title: "Kafić ili wine bar",
    body: "Pokazuješ otvorenost pogledom i ramenima. Dovoljno da pošalješ signal “priđi” bez riječi.",
  },
  {
    title: "Na poslu",
    body: "Diskretna mikro-geste koja ne prelazi granice profesionalnosti, ali ga poziva na nastavak razgovora.",
  },
  {
    title: "Teretana",
    body: "Kratak kontakt očima + položaj tijela koji otključava njegov instinkt da provjeri trebaš li pomoć.",
  },
  {
    title: "Na putu do posla",
    body: "Dok čekaš tramvaj ili kavu, koristiš zrcaljenje kako bi on osjetio da ste u istom ritmu.",
  },
];

const benefits = [
  "7 mikro-signala koji nesvjesno pozivaju njegovu pažnju — čak i ako ste potpuni stranci.",
  "1-minutni dnevni ritual koji radi bez obzira gdje živiš ili koliko si zauzeta.",
  "Lokacijska navigacija za kafić, ured, teretanu i put — svaki korak ima svoj signal.",
  "Objašnjenja zašto svaka gesta radi, da znaš točno što se događa u njegovoj glavi.",
  "Mentorska podrška kad želiš validaciju ili želiš podijeliti rezultat.",
];

const faq = [
  {
    question: "Što ako sam introvert i ne volim skakati iz svoje zone udobnosti?",
    answer:
      "Signali su dizajnirani da rade i kada šutiš. Radi se o mikro-gesti koju muškarci instinktivno čitaju kao zeleno svjetlo. Ne traži se gluma ni teatralnost.",
  },
  {
    question: "Koliko brzo mogu očekivati reakciju?",
    answer:
      "Prosjek iz programa je 72 sata. Prve promjene često vidiš već nakon prvog dana jer jezik tijela šalje poruku prije nego što ti progovoriš.",
  },
  {
    question: "Što ako nemam vremena?",
    answer:
      "Ritual traje manje od minute. Dovoljno je zapamtiti jednu mikro-geste dnevno i koristiti je “usput” — dok stojiš u redu, čekaš taxi ili pričaš s kolegama.",
  },
  {
    question: "Što ako ne želim prilazak od svakoga?",
    answer:
      "Svaka mikro-gesta ima ugrađenu filter logiku. Šalješ signal koji privlači one koji cijene samouvjerene, sofisticirane žene — ne one koji traže brzu zabavu.",
  },
  {
    question: "Što se događa nakon prijave?",
    answer:
      "Odmah dobivaš pristup aplikaciji, prvi signal i bonus module. Možeš krenuti isti dan, a podrška ti je dostupna čim poželiš podijeliti rezultat.",
  },
  {
    question: "Što ako mi ne uspije?",
    answer:
      "Imaš 30 dana da isprobaš Signale. Ako ne vidiš pomak u pažnji koju dobivaš, pošalji poruku i vraćamo cijeli iznos — bez pitanja.",
  },
];

export default function Test2Page() {
  return (
    <>
      <div className={styles.page}>
        <header className={styles.siteH}>
          <div className={styles.wrap}>
            <div className={styles.logo} aria-label="Rečenice Strasti">
              Rečenice Strasti
            </div>
          </div>
        </header>

        <main>
          <section className={styles.hero}>
            <div className={`${styles.wrap} ${styles.heroGrid}`}>
              <article>
                <h1 className={styles.heroCopyTitle}>
                  <span className={styles.highlight}>Kako žene u Hrvatskoj</span> bez
                  filtera, aplikacija ili igrica{" "}
                  <u>privlače pažnju kvalitetnih muškaraca</u> — uz jedan signal
                  o kojem nitko ne priča.
                </h1>
                <p className={styles.heroCopyLead}>
                  <strong>7 mikro-gesti</strong> koje pokreću njegov instinkt da
                  priđe <em>prvi</em>. Bez glume. Bez scenarija. Bez ijedne
                  izgovorene riječi.
                </p>
                <div className={styles.cta}>
                  <a className={styles.btn} aria-label="Kreni odmah" href="#kupnja">
                    Kreni odmah
                  </a>
                  <a
                    className={`${styles.btn} ${styles.btnGhost}`}
                    aria-label="Pogledaj kako radi"
                    href="#kako-radi"
                  >
                    Pogledaj kako radi
                  </a>
                </div>
                <ul className={styles.ticks} role="list">
                  <li>Brz dnevni ritual – manje od minute.</li>
                  <li>Mjesta: kafić, posao, teretana, na putu.</li>
                  <li>Diskretno i potpuno prirodno.</li>
                </ul>
              </article>
              <figure className={styles.heroMedia}>
                <Image
                  src="/images/Herophoto.png"
                  alt="Žena koja privlači poglede s mirnim samopouzdanjem"
                  width={960}
                  height={720}
                  priority
                />
              </figure>
            </div>
          </section>

          <section className={styles.section}>
            <div className={styles.wrap}>
              <header className={styles.sectionHead}>
                <h2>Zašto standardni pristup više ne radi</h2>
                <p>
                  Ako on nije <strong>99% siguran da ga nećeš odbiti</strong>,
                  radije ništa ne pokreće. Zato ti treba signal koji ne zvuči
                  kao flert, ali <mark>njegov mozak registrira kao “u redu je,
                  možeš.”</mark>
                </p>
              </header>
              <div>
                <p>
                  Klasične poruke, aplikacije i beskrajni chatovi troše energiju.
                  Signali Strasti koriste{" "}
                  <strong>jezik tijela koji radi umjesto tebe</strong> — i
                  ostavlja prostor da on bude taj koji prilazi.
                </p>
                <ul className={styles.listDash} role="list">
                  <li>
                    <mark>Bez scenarija.</mark> Ne moraš učiti replike niti
                    čekati savršeni trenutak.
                  </li>
                  <li>
                    <mark>Bez pritiska.</mark> Mikro-gesta je diskretna, ali
                    dovoljno jasna da ga pozove na prvi korak.
                  </li>
                  <li>
                    <mark>Bez nasumičnih prilazaka.</mark> Signali filtriraju one
                    koji traže površnu igru.
                  </li>
                </ul>
              </div>
            </div>
          </section>

          <section id="kako-radi" className={styles.section}>
            <div className={`${styles.wrap} ${styles.gridTwo}`}>
              <article>
                <h2>
                  Aktiviraj Signale — <em>7 mikro-gesti</em> koje pokreću njegov
                  prvi korak
                </h2>
                <p>
                  Svakog dana otključavaš jednu gestu. Pogledaš video, vježbaš 60
                  sekundi i koristiš je gdje god jesi. Jednostavno, mekanim
                  tempom — bez osjećaja da radiš nešto “očito”.
                </p>
                <ol className={styles.signalsList}>
                  <li>Reset ramena i pogleda: šalje energiju “slobodna sam”.</li>
                  <li>
                    Mikro-nasmiješak s pauzom: poziva ga da odgovori istom
                    energijom.
                  </li>
                  <li>
                    Namještaj šake: otključava njegov instinkt zaštitnika bez
                    riječi.
                  </li>
                  <li>
                    Položaj kukova dok stojiš: pokazuje samopouzdanje bez
                    agresije.
                  </li>
                  <li>
                    Mikro-naginjanje u razgovoru: daje mu zeleno svjetlo da
                    nastavi.
                  </li>
                  <li>
                    Pauza + kontakt očima: stvara trenutak koji ga tjera da
                    priđe.
                  </li>
                  <li>
                    “Odjava” pogledom: ostavlja mu želju da te ponovno vidi.
                  </li>
                </ol>
              </article>
              <figure className={styles.mediaCard}>
                <Image
                  src="/images/AktivirajSignale.png"
                  alt="Primjeri aktivacije Signala Strasti u tri situacije"
                  width={960}
                  height={720}
                  loading="lazy"
                />
              </figure>
            </div>
          </section>

          <section className={styles.section}>
            <div className={styles.wrap}>
              <h2>Gdje i kada ih koristiti</h2>
              <p>
                Signali rade u svakodnevnim situacijama. Ne treba ti događaj niti
                posebna scenografija — samo <strong>mjesto gdje se ljudi susreću
                prirodno</strong>.
              </p>
              <div className={styles.contextGrid}>
                {contexts.map((item) => (
                  <article key={item.title} className={styles.card}>
                    <h3>{item.title}</h3>
                    <p>{item.body}</p>
                  </article>
                ))}
              </div>
            </div>
          </section>

          <section className={styles.section}>
            <div className={styles.wrap}>
              <figure className={styles.mediaWide}>
                <Image
                  src="/images/OsjetiPoglede.png"
                  alt="Žena koja osjeća poglede oko sebe nakon aktivacije Signala"
                  width={960}
                  height={720}
                  loading="lazy"
                />
              </figure>
              <blockquote className={styles.pull}>
                “…mirno samopouzdanje — bez ijedne izgovorene riječi.”
              </blockquote>
            </div>
          </section>

          <section className={styles.section} aria-labelledby="social-proof-title">
            <div className={styles.wrap}>
              <h2 id="social-proof-title">Dojmovi polaznica</h2>
              <p>
                Više od <strong>700 žena</strong> testiralo je Signale u kafiću,
                teretani ili na putu do posla. <mark>74% prijavljuje prvu reakciju
                unutar 72 sata.</mark>
              </p>
              <figure className={styles.mediaCard}>
                <Image
                  src="/images/Komentari.PNG"
                  alt="Komentari žena koje su testirale Signale Strasti"
                  width={1000}
                  height={720}
                  loading="lazy"
                />
              </figure>
              <div className={styles.testimonialGrid}>
                <article>
                  <strong>Marta, 32 — Zagreb</strong>
                  <p>
                    “Prvi put sam ga pogledala s tim mikro-nasmiješkom i
                    doslovno je došetao do mene u 20 sekundi.”
                  </p>
                </article>
                <article>
                  <strong>Ivana, 41 — Split</strong>
                  <p>
                    “Na poslu sam postala magnet za razgovore. Ne moram više
                    gurati priču, oni pokreću.”
                  </p>
                </article>
                <article>
                  <strong>Nika, 27 — Rijeka</strong>
                  <p>
                    “Teretana je prestala biti neugodna. Sad znam kako izgledati
                    otvoreno, a ne očajno.”
                  </p>
                </article>
              </div>
            </div>
          </section>

          <section id="kupnja" className={styles.section}>
            <div className={`${styles.wrap} ${styles.gridTwo}`}>
              <figure className={styles.mediaCard}>
                <Image
                  src="/images/Product.png"
                  alt="Mockup programa Signali Strasti"
                  width={960}
                  height={960}
                  loading="lazy"
                />
              </figure>
              <article>
                <h2>Što dobivaš odmah nakon prijave</h2>
                <ul className={styles.listCheck} role="list">
                  {benefits.map((benefit) => (
                    <li key={benefit}>
                      <span className={styles.icon} aria-hidden="true">
                        ✅
                      </span>
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
                <div className={styles.guarantee}>
                  <span className={styles.icon} aria-hidden="true">
                    🛡️
                  </span>
                  <p>
                    30-dnevna garancija rezultata: ako ne vidiš pomak, pošalji
                    mail i vraćamo svaki euro. <strong>Bez pitanja.</strong>
                  </p>
                </div>
                <div className={styles.price}>
                  <p className={styles.value}>
                    Ukupna vrijednost paketa: <strong>532 €</strong>
                  </p>
                  <p className={styles.offer}>
                    Tvoja cijena danas: <strong>samo 17 €</strong>
                  </p>
                </div>
                <div className={styles.cta}>
                  <a className={styles.btn} aria-label="Pokreni Signale Strasti" href="/checkout">
                    Pokreni Signale Strasti
                  </a>
                  <a
                    className={`${styles.btn} ${styles.btnGhost}`}
                    aria-label="Naruči kasnije"
                    href="/faq"
                  >
                    Trebaš još informacija?
                  </a>
                </div>
              </article>
            </div>
          </section>

          <section className={styles.section} aria-labelledby="faq-title">
            <div className={styles.wrap}>
              <h2 id="faq-title">Najčešća pitanja</h2>
              <div className={styles.faqList}>
                {faq.map((item) => (
                  <details key={item.question} className={styles.faqItem}>
                    <summary className={styles.faqSummary}>{item.question}</summary>
                    <p className={styles.faqItemText}>{item.answer}</p>
                  </details>
                ))}
              </div>
            </div>
          </section>

          <section className={styles.section}>
            <div className={styles.wrap}>
              <h2 className={styles.finalTitle}>
                Spreman je da te primijeti. <u>Pošalji signal danas.</u>
              </h2>
              <p>
                Jedna mikro-geste dnevno i ti postaješ žena čiji pogled pamti.{" "}
                <strong>Bez aplikacija, bez glume, bez ijedne izgovorene riječi.</strong>
              </p>
              <div className={styles.cta}>
                <a className={styles.btn} aria-label="Kreni s programom odmah" href="/checkout">
                  Kreni s programom odmah
                </a>
                <a
                  className={`${styles.btn} ${styles.btnGhost}`}
                  aria-label="Pogledaj primjere signala"
                  href="#kako-radi"
                >
                  Pogledaj primjere signala
                </a>
              </div>
            </div>
          </section>
        </main>

        <footer className={styles.siteF}>
          <div className={styles.wrap}>
            <small>
              © {new Date().getFullYear()} Rečenice Strasti. Sva prava pridržana.
              {" • "}
              <a href="/privacy" title="Politika privatnosti">
                Privatnost
              </a>
              {" • "}
              <a href="/terms" title="Uvjeti korištenja">
                Uvjeti
              </a>
              {" • "}
              <a href="mailto:recenicestrasti@gmail.com" title="Kontaktiraj nas">
                Kontakt
              </a>
            </small>
          </div>
        </footer>
      </div>
    </>
  );
}
