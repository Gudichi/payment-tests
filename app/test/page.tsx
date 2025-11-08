import type { Metadata } from "next";
import Image from "next/image";
import { CTAButton } from "@/components/CTAButton";
import { Section } from "@/components/Section";
import { Stat } from "@/components/Stat";
import { StepItem } from "@/components/StepItem";
import { FeatureCard } from "@/components/FeatureCard";
import { ValueStack } from "@/components/ValueStack";
import { FAQItem } from "@/components/FAQItem";
import { StickyBar } from "@/components/StickyBar";
import { productInfo } from "@/lib/brand";

export const metadata: Metadata = {
  title: "Signali Strasti — Tihi signali koji bude njegov prvi korak",
  description:
    "Signali Strasti bude njegov prvi korak bez aplikacija i igrica. Aktiviraj govor tijela koji muškarci instinktivno čitaju i počni dobivati reakcije u stvarnom životu.",
};

const features = [
  "Kako tvoj govor tijela (ne riječi!) poziva muškarce da ti priđu",
  "Koje su najčešće greške koje žene rade kad žele izgledati „otvoreno“",
  "Kako prepoznati idealan trenutak za slanje signala",
  "Što točno u tebi čita muški mozak kao „zeleno svjetlo“",
  "Kako ostati svoja i prisutna — bez igrica i glume",
];

const faq = [
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
    answer:
      "Ne ako znaš kako. Ovo nisu trikovi. Ovo je govor tijela koji čita svaki muškarac, instinktivno.",
  },
];

const bonuses = [
  {
    title: "Bonus #1 – Prvi dojam koji ostaje s njim",
    body: "3 neverbalna detalja + 2 rečenice zbog kojih pomisli: “Ona je… drugačija.” (Ovaj vodič se inače prodaje zasebno za 97€, ovdje ga dobivaš unutar paketa.)",
  },
  {
    title: "Bonus #2 – Neka on napravi prvi korak",
    body: "Kako signalizirati otvorenost, a da on osjeti da sve dolazi od njega. (67€, uključeno bez dodatne naplate.)",
  },
  {
    title: "Bonus #3 – Kako da on zatraži tvoj broj",
    body: "Zvuči jednostavno. I je — kad znaš gdje ostaviti prostor koji ga poziva. (57€, uključen.)",
  },
  {
    title: "Bonus #4 – Poruka koja ga vraća, čak i ako se povukao",
    body: "Kada znaš što reći (i kako), njegova pažnja se vraća spontano. (Vrijednost 77€, sada dio paketa.)",
  },
  {
    title: "Bonus #5 – Prva kava koju pamti danima",
    body: "Bez glume. Bez skripti. Samo ti — u svom najsvježijem, najprivlačnijem izdanju. (87€, uključen.)",
  },
];

const productSchema = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: productInfo.name,
  description:
    "Program Signali Strasti — digitalni mikro-program koji aktivira govor tijela zbog kojeg muškarci prilaze.",
  brand: {
    "@type": "Brand",
    name: "Rečenice Strasti",
  },
  offers: {
    "@type": "Offer",
    priceCurrency: productInfo.currency,
    price: productInfo.price,
    url: "https://payment-tests.vercel.app/test",
    availability: "https://schema.org/InStock",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faq.map((item) => ({
    "@type": "Question",
    name: item.question.replace(/^[„"]|[”"]$/g, ""),
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
};

export default function TestPage() {
  return (
    <div className="bg-ivory text-espresso">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([productSchema, faqSchema]),
        }}
      />
      <StickyBar targetId="cijena" />
      <header className="sticky top-0 z-30 border-b border-blush/50 bg-ivory/90 backdrop-blur">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3">
          <div className="font-heading text-lg text-espresso">Rečenice Strasti 👠</div>
          <nav className="hidden items-center gap-6 text-sm text-espresso/80 md:flex">
            <a href="#kako-radi" className="hover:text-espresso">
              Kako radi
            </a>
            <a href="#sadrzaj" className="hover:text-espresso">
              Sadržaj
            </a>
            <a href="#cijena" className="hover:text-espresso">
              Cijena
            </a>
            <a href="#faq" className="hover:text-espresso">
              FAQ
            </a>
            <CTAButton href="#cijena" size="md">
              Počni sada
            </CTAButton>
          </nav>
          <CTAButton href="#cijena" size="md" className="md:hidden">
            Počni sada
          </CTAButton>
        </div>
      </header>

      <main className="mx-auto max-w-[720px] px-4 pb-16 pt-8">
        <section className="flex flex-col items-center gap-6 text-center">
          <Stat>
            Više od 700 žena isprobalo je Signale u kafiću, teretani ili čak na putu do posla. - 74%
            prijavljuje prvu reakciju muškarca unutar 72 sata.
          </Stat>
          <h1 className="font-heading text-3xl text-espresso sm:text-4xl">
            Kako Žene u Hrvatskoj Privlače Pažnju Kvalitetnih Muškaraca — Bez Filtera, Aplikacija ili
            Igrica — uz Jedan Signal o Kojem Nitko Ne Priča
          </h1>
          <p className="text-base text-espresso/80">
            Ne moraš mijenjati sebe. Samo ponovno aktiviraj ono što muškarci već nesvjesno traže.
            Program za žene koje žele da ih napokon kvalitetni muškarci primjete.
          </p>
          <CTAButton href="#cijena" size="lg">
            Počni sada
          </CTAButton>
          <div className="mt-6 overflow-hidden rounded-3xl border border-blush/60">
            <Image
              src="/images/Herophoto.png"
              alt="Žena koja privlači pogled u stvarnom životu"
              width={960}
              height={640}
              priority
              className="h-full w-full object-cover"
            />
          </div>
        </section>

        <Section>
          <div className="space-y-6 text-base leading-relaxed text-espresso/80">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cherry">
              Piše: Dunja Kramarić
            </p>
            <p>Ćao,</p>
            <p>
              Ako si se ikad dotjerala, izašla iz kuće, a onda vratila s osjećajem da te nitko nije
              ni pogledao...
            </p>
            <p>
              Ili još gore — da su te pogledali,
              <br />
              ali da to nisu bili muškarci koji bi ti se zaista svidjeli.
              <br />
              Onaj s TikTok frizurom.
              <br />
              Onaj koji priđe s “di si mala”.
              <br />
              Onaj koji ti ostavi 🔥 u DM-u i nestane…
            </p>
            <p>Sigurno si barem jednom dobila ovakav koemntar:</p>
            <div className="overflow-hidden rounded-2xl border border-blush/60">
              <Image
                src="/images/Komentari.PNG"
                alt="Komentari publike"
                width={960}
                height={640}
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </div>
            <p>
              Ja znam da ti možeš privući pažnju, i ja znam da ti možeš pronaći muškarca…
              <br />
              Ali ti ne tražiš bilo kakvog muškarca, ti tražiš muškarca koji zna što vidi — i zna što
              želi.
            </p>
            <p>I znaš što je najljepše?</p>
            <p>Znaš ga prepoznati kad ga vidiš.</p>
            <p>Sad je vrijeme da on prepozna tebe.</p>
            <p>Ne riječima. Ne skriptom. Ne glumom.</p>
            <p>Već s tihim signalom zbog kojeg se okrene, zastane... i poželi prići.</p>
          </div>
        </Section>

        <Section>
          <div className="space-y-4 text-base leading-relaxed text-espresso/80">
            <p> Otkud ideja?</p>
            <p>Muškarci i dalje žele prići.</p>
            <p>
              Ali danas — ako nisu 99% sigurni da ih nećeš odbiti, radije ne naprave ništa.
            </p>
            <p>
              Nisu nesigurni. Samo su naučeni da bez jasnog signala — ispadaju čudaci, napadni ili
              “nepozvani”.
            </p>
            <p>
              A ako im suptilno pokažeš “u redu je, možeš” — njihov mozak to registrira kao zeleno
              svjetlo.
            </p>
            <p>
              Zato sam stvorila Signale Strasti — digitalni mikro-program koji ti svaki dan pokaže
              jednu malu stvar koju možeš napraviti...
            </p>
            <p>...i doživjeti promjenu.</p>
          </div>
          <div className="mt-6 overflow-hidden rounded-2xl border border-blush/60">
            <Image
              src="/images/OtkudIdeja.webp"
              alt="Kako je nastala ideja za Signale Strasti"
              width={960}
              height={640}
              className="h-full w-full object-cover"
              loading="lazy"
            />
          </div>
        </Section>

        <Section id="kako-radi">
          <div className="mb-8 text-center">
            <h2 className="font-heading text-3xl text-espresso"> Kako izgleda program (korak po korak)</h2>
          </div>
          <div className="space-y-6">
            <StepItem
              step={1}
              title="Otvori aplikaciju"
              description="Pristup dobivaš odmah. Bez čekanja, bez pretrpavanja sadržajem. Svakog dana dobivaš jedan novi signal spreman za isprobavanje."
            />
            <StepItem
              step={2}
              title="Aktiviraj signal (1 min)"
              description={`<slika podijeljena na 3 dijela 3 razlicite situacije u kojima zena kroisti 3 razlciita signala>
Na poslu, u kafiću, u šetnji — koristiš jednu mikro-gestu koju muški mozak doživljava kao „pozivnicu“.`}
              image={{
                src: "/images/AktivirajSignale.png",
                alt: "Aktiviraj Signale",
              }}
            />
            <StepItem
              step={3}
              title="Osjeti kako te počinju gledati drugačije"
              description="To je tvoj jezik tijela koji govori umjesto tebe. Pogledi, osmijesi i prilasci počinju spontano."
              image={{
                src: "/images/OsjetiPoglede.png",
                alt: "Osjeti poglede",
              }}
            />
            <StepItem
              step={4}
              title="Podijeli što si primijetila (ako želiš)"
              description="Imaš opciju javiti se mentoru, podijeliti svoj rezultat, ili samo zabilježiti promjenu za sebe."
            />
          </div>
          <div className="mt-8 text-center">
            <CTAButton href="#cijena" size="lg">
              Počni sada
            </CTAButton>
          </div>
        </Section>

        <Section id="sadrzaj">
          <div className="mb-6 text-center">
            <h2 className="font-heading text-3xl text-espresso">
              Što ćeš naučiti i primijeniti?
            </h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {features.map((feature) => (
              <FeatureCard key={feature} body={feature} />
            ))}
          </div>
        </Section>

        <Section>
          <div className="space-y-4 text-base leading-relaxed text-espresso/80">
            <h2 className="font-heading text-3xl text-espresso">Tko stoji iza Signala Strasti?</h2>
            <p>
              Ja sam Dunja, godinama promatram kako muškarci uistinu reagiraju kad im se neka žena
              svidi... i što se zapravo događa prije nego priđu.
            </p>
            <p>
              Specijalistica sam za neverbalnu komunikaciju, i već 10 godina pomažem ženama da vrate
              ono što su mislile da su izgubile: svoju prisutnost, magnetizam i sigurnost u vlastito
              tijelo.
            </p>
            <p>
              Autorica sam knjige „Što muškarci zapravo žele“, i gostovala sam na brojnim
              televizijama gdje sam govorila o onome što se ne kaže naglas: što privlači, a što gasi
              mušku inicijativu.
            </p>
            <p>
              "Signali Strasti" nisu proizvod. To je rezultat mog rada sa stvarnim ženama koje nisu
              htjele glumiti, ni igrati igrice, ni biti nečije "rješenje". One su samo htjele da ih
              se opet vidi.
            </p>
            <p>Pogledaj ovde: </p>
            <p>Dojmovi polaznica s prošlog programa</p>
          </div>
        </Section>

        <Section>
          <ValueStack
            title="Alat koji svakog dana tiho uključuje tvoju privlačnost — i pokreće njegov prvi korak"
            description="Program Signali Strasti"
            items={[
              "7 mikro-signala koji nesvjesno pozivaju njegovu pažnju (i daju mu dozvolu da ti priđe)",
              "1-minutni dnevni ritual koji možeš raditi gdje god jesi (diskretno, prirodno)",
              "Lokacijska navigacija — jer nije isti signal za kafić i za ured",
              "Objašnjenja zašto svaki signal djeluje (da se ne pitaš: \"Radim li ovo bezveze?\")",
              "Mentor podrška ako želiš diskretnu provjeru ili samo podijeliti kako je prošlo",
            ]}
            bonuses={bonuses}
            image={{
              src: "/images/Product.png",
              alt: "Program Signali Strasti",
            }}
          />
        </Section>

        <Section id="cijena">
          <div className="rounded-3xl border border-blush bg-white p-8 text-center shadow-card">
            <h2 className="font-heading text-3xl text-espresso">Cijeli paket — dostupan odmah</h2>
            <p className="mt-4 text-base text-espresso/80">
              Ukupna vrijednost svega što dobivaš: 532€
            </p>
            <p className="mt-2 text-2xl font-semibold text-cherry">
              Tvoja cijena danas: samo 17€
            </p>
            <p className="mt-2 text-base text-espresso/80">Bez pretplate. Bez čekanja.</p>
            <p className="mt-1 text-base text-espresso/80"> Samo tvoj prvi signal — već danas.</p>
            <div className="mt-6">
              <CTAButton href="#cijena" size="lg">
                Počni sada
              </CTAButton>
            </div>
            <div className="mt-4 inline-flex items-center gap-2 rounded-full border border-blush px-3 py-1 text-xs text-espresso/80">
              <span role="img" aria-label="lock">
                🔒
              </span>
              Stripe secure
            </div>
          </div>
        </Section>

        <Section>
          <h2 className="font-heading text-3xl text-espresso">Ograničeno na 100 mjesta mjesečno</h2>
          <p className="mt-4 text-base text-espresso/80">
            Zbog mentor podrške i osobnog pristupa, Dunja i tim primaju samo 100 novih korisnica
            mjesečno. Nakon toga se prijave zatvaraju — kako bi se svakoj ženi moglo posvetiti s punom
            pažnjom.
          </p>
          <p className="mt-4 text-base text-espresso/80">
            Ako osjećaš da je ovo tvoj trenutak, ne čekaj.
          </p>
        </Section>

        <Section>
          <h2 className="font-heading text-3xl text-espresso">Za koga je ovo?</h2>
          <div className="mt-4 space-y-3 text-base text-espresso/80">
            <p>✔️ Žene koje se osjećaju nevidljivo u svakodnevnim situacijama</p>
            <p> ✔️ One koje su umorne od ghostinga, aplikacija i "pick me" kulture</p>
            <p> ✔️ One koje ne žele glumiti, nego vratiti svoju prirodnu privlačnost</p>
            <p> ✔️ One koje žele kemiju u stvarnom životu, ne na ekranu</p>
          </div>
        </Section>

        <Section id="faq">
          <h2 className="font-heading text-3xl text-espresso">Najčešća pitanja:</h2>
          <div className="mt-4 divide-y divide-blush/40">
            {faq.map((item) => (
              <FAQItem key={item.question} question={item.question} answer={item.answer} />
            ))}
          </div>
        </Section>

        <Section>
          <div className="space-y-4 text-base text-espresso/90">
            <p>Još nešto...</p>
            <p>Možda nisi izgubila sebe.</p>
            <p>Možda si samo izgubila pogled... koji je čekao pravi signal.</p>
            <p>Pošalji ga danas.</p>
            <CTAButton href="#cijena" size="lg">
              Započni odmah
            </CTAButton>
          </div>
        </Section>
      </main>

      <footer className="border-t border-blush/50 bg-white/80">
        <div className="mx-auto flex max-w-5xl flex-col gap-4 px-4 py-8 text-sm text-espresso/80 md:flex-row md:items-center md:justify-between">
          <div className="font-heading text-lg text-espresso">Rečenice Strasti</div>
          <div className="flex gap-4">
            <a href="/privacy" className="hover:text-espresso">
              Privatnost
            </a>
            <a href="/terms" className="hover:text-espresso">
              Uvjeti
            </a>
            <a href="mailto:recenicestrasti@gmail.com" className="hover:text-espresso">
              Kontakt
            </a>
          </div>
          <button
            type="button"
            className="rounded-full border border-blush px-4 py-2 text-xs font-semibold text-espresso focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cherry"
          >
            HR ▾
          </button>
        </div>
      </footer>
    </div>
  );
}
