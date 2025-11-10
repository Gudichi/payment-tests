import type { Metadata } from "next";
import Image from "next/image";
import { CTAButton } from "@/components/CTAButton";
import { Section } from "@/components/Section";
import { StepItem } from "@/components/StepItem";
import { FeatureCard } from "@/components/FeatureCard";
import { ValueStack } from "@/components/ValueStack";
import { FAQItem } from "@/components/FAQItem";
import { productInfo } from "@/lib/brand";

export const metadata: Metadata = {
  title: "Signali Strasti — Tihi signali koji bude njegov prvi korak",
  description:
    "Program Signali Strasti tiho aktivira govor tijela koji muškarci instinktivno čitaju. Počni danas i doživi reakcije u stvarnom životu bez aplikacija i igrica.",
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
    "Digitalni mikro-program Signali Strasti koji aktivira govor tijela zbog kojeg muškarci prilaze.",
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify([productSchema, faqSchema]) }}
      />
      <main>
        <section className="bg-[#F8F5F0] px-5 py-14 text-[#1B1A1A] sm:px-8 sm:py-20 lg:px-24 lg:py-28">
          <div className="mx-auto flex w-full max-w-[1200px] flex-col gap-10 sm:gap-12 lg:flex-row lg:items-center lg:gap-16">
            <div className="flex-1 space-y-6">
              <h1 className="font-heading text-4xl leading-tight sm:text-5xl lg:text-6xl">
                Kako Žene u Hrvatskoj Privlače Pažnju Kvalitetnih Muškaraca Bez Filtera, Aplikacija
                ili Igrica
              </h1>
              <p className="text-lg leading-relaxed text-[#1B1A1A]/80">
                Samo jedan signal koji aktivira njegov instinkt da ti priđe. Program za žene koje
                žele da ih kvalitetni muškarci napokon primijete — bez igrica i glume.
              </p>
              <CTAButton href="#cijena" size="lg" className="bg-[#6A1F29] text-[#F8F5F0] hover:bg-[#52161f]">
                Počni sada
              </CTAButton>
            </div>
            <div className="flex-1">
              <div className="relative">
                <div
                  className="absolute inset-0 translate-x-4 translate-y-4 rounded-[32px] bg-[#D7C4B7]/50 blur-[70px]"
                  aria-hidden
                />
                <div className="relative overflow-hidden rounded-[32px] border border-[#B86E6E]/50 bg-[#F8F5F0] shadow-xl">
                  <Image
                    src="/images/Herophoto.png"
                    alt="Žena koja privlači poglede"
                    width={960}
                    height={960}
                    priority
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <Section bg="white">
          <div className="space-y-5 text-lg leading-relaxed">
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-cherry">
              Piše: Dunja Kramarić
            </p>
            <p>Ćao,</p>
            <p>
              Ako si se ikad dotjerala, izašla iz kuće, a onda vratila s osjećajem da te nitko nije
              ni pogledao...
            </p>
            <p>
              Ili još gore — da su te pogledali,
              <br /> ali da to nisu bili muškarci koji bi ti se zaista svidjeli.
              <br /> Onaj s TikTok frizurom.
              <br /> Onaj koji priđe s “di si mala”.
              <br /> Onaj koji ti ostavi 🔥 u DM-u i nestane…
            </p>
            <p>Sigurno si barem jednom dobila ovakav koemntar:</p>
            <div className="my-6 overflow-hidden rounded-3xl border border-blush/50 bg-ivory">
              <Image
                src="/images/Komentari.PNG"
                alt="Komentari publike"
                width={1000}
                height={720}
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </div>
            <p>
              Ja znam da ti možeš privući pažnju, i ja znam da ti možeš pronaći muškarca… Ali ti ne
              tražiš bilo kakvog muškarca, ti tražiš muškarca koji zna što vidi — i zna što želi.
            </p>
            <p>I znaš što je najljepše?</p>
            <p>Znaš ga prepoznati kad ga vidiš.</p>
            <p>Sad je vrijeme da on prepozna tebe.</p>
            <p>Ne riječima. Ne skriptom. Ne glumom.</p>
            <p>Već s tihim signalom zbog kojeg se okrene, zastane... i poželi prići.</p>
          </div>
        </Section>

        <Section bg="ivory">
          <div className="flex flex-col gap-10 lg:flex-row lg:items-center">
            <div className="flex-1 space-y-5 text-lg leading-relaxed">
              <p> Otkud ideja?</p>
              <p>Muškarci i dalje žele prići.</p>
              <p>Ali danas — ako nisu 99% sigurni da ih nećeš odbiti, radije ne naprave ništa.</p>
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
            <div className="flex-1">
              <div className="overflow-hidden rounded-3xl border border-blush/50 bg-white shadow-card">
                <Image
                  src="/images/OtkudIdeja.webp"
                  alt="Kako je nastala ideja"
                  width={960}
                  height={720}
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </Section>

        <Section id="kako-radi" bg="white">
          <div className="mb-10 text-left">
            <h2 className="font-heading text-4xl text-espresso sm:text-5xl">
              Kako izgleda program (korak po korak)
            </h2>
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
Na poslu, u kafiću, u šetnji — koristiš jednu mikro-gestu koju muški mozak doživljava kao „pozivnicu“. `}
              image={{
                src: "/images/AktivirajSignale.png",
                alt: "Aktiviraj Signal",
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
          <div className="mt-10 text-center">
            <CTAButton href="#cijena" size="lg">
              Počni sada
            </CTAButton>
          </div>
        </Section>

        <Section bg="ivory">
          <div className="mb-8 text-left">
            <h2 className="font-heading text-4xl text-espresso sm:text-5xl">
              Što ćeš naučiti i primijeniti?
            </h2>
          </div>
          <div className="grid gap-4">
            {features.map((feature) => (
              <FeatureCard key={feature} body={feature} />
            ))}
          </div>
        </Section>

        <Section bg="white">
          <h2 className="font-heading text-4xl text-espresso sm:text-5xl">
            Tko stoji iza Signala Strasti?
          </h2>
          <div className="mt-6 space-y-5 text-lg leading-relaxed text-espresso/80">
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

        <Section bg="ivory">
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
            image={{ src: "/images/Product.png", alt: "Program Signali Strasti" }}
          />
        </Section>

        <Section id="cijena" bg="white">
          <div className="rounded-3xl border border-blush bg-white/90 p-10 text-center shadow-modal">
            <h2 className="font-heading text-4xl text-espresso sm:text-5xl">
              Cijeli paket — dostupan odmah
            </h2>
            <p className="mt-4 text-lg text-espresso/80">
              Ukupna vrijednost svega što dobivaš: 532€
            </p>
            <p className="mt-3 text-3xl font-bold text-cherry"> Tvoja cijena danas: samo 17€</p>
            <p className="mt-3 text-lg text-espresso/80">Bez pretplate. Bez čekanja.</p>
            <p className="text-lg text-espresso/80"> Samo tvoj prvi signal — već danas.</p>
            <div className="mt-8">
              <CTAButton href="#cijena" size="lg">
                Počni sada
              </CTAButton>
            </div>
            <div className="mt-4 inline-flex items-center gap-2 rounded-full border border-taupe/60 px-4 py-2 text-sm text-espresso/80">
              <span role="img" aria-label="lock">
                🔒
              </span>
              Stripe secure
            </div>
          </div>
        </Section>

        <Section bg="ivory">
          <div className="space-y-5 text-lg leading-relaxed text-espresso/80">
            <h2 className="font-heading text-4xl text-espresso sm:text-5xl">
              Ograničeno na 100 mjesta mjesečno
            </h2>
            <p>
              Zbog mentor podrške i osobnog pristupa, Dunja i tim primaju samo 100 novih korisnica
              mjesečno. Nakon toga se prijave zatvaraju — kako bi se svakoj ženi moglo posvetiti s
              punom pažnjom.
            </p>
            <p>Ako osjećaš da je ovo tvoj trenutak, ne čekaj.</p>
          </div>
        </Section>

        <Section bg="white">
          <h2 className="font-heading text-4xl text-espresso sm:text-5xl">Za koga je ovo?</h2>
          <div className="mt-6 space-y-4 text-lg text-espresso/80">
            <p>✔️ Žene koje se osjećaju nevidljivo u svakodnevnim situacijama</p>
            <p> ✔️ One koje su umorne od ghostinga, aplikacija i "pick me" kulture</p>
            <p> ✔️ One koje ne žele glumiti, nego vratiti svoju prirodnu privlačnost</p>
            <p> ✔️ One koje žele kemiju u stvarnom životu, ne na ekranu</p>
          </div>
        </Section>

        <Section id="faq" bg="ivory">
          <h2 className="font-heading text-4xl text-espresso sm:text-5xl">Najčešća pitanja:</h2>
          <div className="mt-6 divide-y divide-blush/50">
            {faq.map((item) => (
              <FAQItem key={item.question} question={item.question} answer={item.answer} />
            ))}
          </div>
        </Section>

        <Section bg="white">
          <div className="space-y-5 text-center">
            <p className="text-lg text-espresso/80">Još nešto...</p>
            <p className="text-lg text-espresso/80">Možda nisi izgubila sebe.</p>
            <p className="text-lg text-espresso/80">
              Možda si samo izgubila pogled... koji je čekao pravi signal.
            </p>
            <p className="text-lg text-espresso/80">Pošalji ga danas.</p>
            <CTAButton href="#cijena" size="lg">
              Započni odmah
            </CTAButton>
          </div>
        </Section>
      </main>

      <footer className="border-t border-taupe/40 bg-white/80">
        <div className="mx-auto flex max-w-[1120px] flex-col gap-4 px-6 py-10 text-sm text-espresso/80 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-heading text-xl text-espresso">Rečenice Strasti</p>
          <div className="flex gap-6">
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
            className="inline-flex items-center gap-1 rounded-full border border-taupe/60 px-4 py-2 text-xs font-semibold text-espresso focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cherry"
          >
            HR ▾
          </button>
        </div>
      </footer>
    </div>
  );
}
