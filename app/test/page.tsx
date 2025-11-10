import type { Metadata } from "next";
import Image from "next/image";
import { Check } from "lucide-react";
import { CTAButton } from "@/components/CTAButton";
import { Section } from "@/components/Section";
import { InlineCheckout } from "@/components/InlineCheckout";
import { productInfo } from "@/lib/brand";

export const metadata: Metadata = {
  title: "Signali Strasti — Tihi signali koji bude njegov prvi korak",
  description:
    "Program Signali Strasti tiho aktivira govor tijela koji muškarci instinktivno čitaju. Počni danas i doživi reakcije u stvarnom životu bez aplikacija i igrica.",
};

const features = [
  {
    id: "govor-tijela",
    body: (
      <>
        <strong>Kako tvoj govor tijela</strong> <em>(ne riječi!)</em> poziva muškarce da ti priđu
        bez da išta kažeš naglas.
      </>
    ),
  },
  {
    id: "greske",
    body: (
      <>
        <u>Koje su najčešće greške</u> koje žene rade kad žele izgledati „otvoreno“ i kako ih
        pretvoriti u svoje supermoći.
      </>
    ),
  },
  {
    id: "trenutak",
    body: (
      <>
        Kako prepoznati <strong>idealni trenutak</strong> za slanje signala da on osjeti zeleno
        svjetlo.
      </>
    ),
  },
  {
    id: "mozak",
    body: (
      <>
        Što točno u tebi čita muški mozak kao <em>„zeleno svjetlo“</em> i zašto reagira u roku par
        sekundi.
      </>
    ),
  },
  {
    id: "prirodna",
    body: (
      <>
        Kako ostati <strong>svoja</strong> i prisutna — bez igrica, bez maski, samo s tvojim
        prirodnim magnetizmom.
      </>
    ),
  },
];

const steps = [
  {
    title: "Otvori aplikaciju",
    description: (
      <>
        Pristup dobivaš <strong>odmah</strong>. Bez čekanja, bez pretrpavanja sadržajem. Svakog dana
        dobivaš <u>jedan novi signal</u> spreman za isprobavanje.
      </>
    ),
    image: {
      src: "/images/Herophoto.png",
      alt: "Otvaranje Signala",
    },
  },
  {
    title: "Aktiviraj signal (1 min)",
    description: (
      <>
        Na poslu, u kafiću ili u šetnji koristiš <strong>jednu mikro-gestu</strong> koju muški mozak
        doživljava kao „pozivnicu“. Diskretno, prirodno i <em>bez glume</em>.
      </>
    ),
    image: {
      src: "/images/AktivirajSignale.png",
      alt: "Aktiviraj Signal",
    },
  },
  {
    title: "Osjeti kako te počinju gledati drugačije",
    description: (
      <>
        Tvoj <strong>govor tijela</strong> počinje raditi umjesto tebe. Pogledi, osmijesi i prilasci
        kreću spontano jer si im dala <u>zeleno svjetlo</u>.
      </>
    ),
    image: {
      src: "/images/OsjetiPoglede.png",
      alt: "Osjeti poglede",
    },
  },
  {
    title: "Podijeli što si primijetila (ako želiš)",
    description: (
      <>
        Možeš se javiti mentoru, podijeliti svoj rezultat ili samo <em>zabilježiti promjenu za
        sebe</em>. Sve ostaje diskretno i samo tvoje.
      </>
    ),
    image: {
      src: "/images/Product.png",
      alt: "Podijeli iskustvo",
    },
  },
];

const offerItems = [
  "7 mikro-signala koji nesvjesno pozivaju njegovu pažnju (i daju mu dozvolu da ti priđe)",
  "1-minutni dnevni ritual koji možeš raditi gdje god jesi (diskretno, prirodno)",
  "Lokacijska navigacija — jer nije isti signal za kafić i za ured",
  "Objašnjenja zašto svaki signal djeluje (da se ne pitaš: \"Radim li ovo bezveze?\")",
  "Mentor podrška ako želiš diskretnu provjeru ili samo podijeliti kako je prošlo",
];

const audience = [
  {
    title: "Nevidljive u gužvi",
    body: (
      <>
        Osjećaš da prolaziš kroz dan, a nitko ne primjećuje tvoju <strong>prisutnost</strong>. Ovdje
        vraćaš <em>pogled</em> koji tražiš.
      </>
    ),
  },
  {
    title: "Alergične na igrice",
    body: (
      <>
        Iscrpile su te aplikacije i „pick me“ kultura — želiš <u>stvarne susrete</u> bez igranja
        uloga.
      </>
    ),
  },
  {
    title: "Prirodno magnetične",
    body: (
      <>
        Ne želiš glumiti. Želiš se <strong>vratiti sebi</strong> i pustiti da tvoj govor tijela
        govori umjesto scenarija.
      </>
    ),
  },
  {
    title: "Žene koje žele kemiju uživo",
    body: (
      <>
        Više ti je dosta digitalnih dopisivanja — želiš <strong>pogled uživo</strong> i prvi korak
        bez prisile.
      </>
    ),
  },
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

const currentYear = new Date().getFullYear();

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
      <div className="bg-[#6A1F29] py-3 text-center text-xs font-semibold uppercase tracking-[0.3em] text-[#F8F5F0] sm:text-sm">
        🇭🇷700+ žena u Hrvatskoj već koriste Signale Strasti🇭🇷
      </div>
      <main>
        <section className="bg-[#f8f4ee] px-4 py-14 text-[#2f0a17] sm:px-6 sm:py-20">
          <div className="mx-auto flex max-w-5xl flex-col items-center space-y-6 text-center">
            <h1 className="font-heading text-3xl font-bold leading-tight text-center sm:text-5xl">
              Kako Žene u Hrvatskoj Privlače Pažnju Kvalitetnih Muškaraca — Bez Filtera, Aplikacija
              ili Igrica — uz Jedan Signal o Kojem Nitko Ne Priča
            </h1>
            <p className="text-base leading-relaxed text-[#5b2333] sm:text-xl">
              Ne moraš mijenjati sebe. Samo ponovno aktiviraj ono što muškarci već nesvjesno traže.
              Program za žene koje žele da ih napokon kvalitetni muškarci primjete.
            </p>
            <div className="w-full max-w-3xl">
              <Image
                src="/images/Herophoto.png"
                alt="Žena koja privlači poglede"
                width={960}
                height={720}
                priority
                className="w-full rounded-2xl border border-[#f0d7ca] shadow-card"
              />
            </div>
          </div>
        </section>

        <Section bg="white">
          <div className="space-y-5 text-lg leading-relaxed">
            <div className="flex items-center gap-4 text-sm font-semibold uppercase tracking-[0.35em] text-cherry">
              <div className="h-12 w-12 overflow-hidden rounded-full border border-cherry/60 bg-rose-200/40">
                <Image
                  src="/images/Herophoto.png"
                  alt="Autorica programa"
                  width={80}
                  height={80}
                  className="h-full w-full object-cover"
                />
              </div>
              <p className="italic">
                Piše: <span className="font-heading text-base">Dunja Akrapović</span>
              </p>
            </div>
            <p>
              <em>Ćao,</em>
            </p>
            <p>
              Ako si se ikad dotjerala, izašla iz kuće, a onda se vratila s osjećajem da te nitko
              nije ni pogledao... <strong>nisam sama pomislila da si „nevidljiva“.</strong>
            </p>
            <p>
              Ili još gore — da su te pogledali,
              <br /> ali da to nisu bili muškarci koji bi ti se zaista svidjeli.
              <br /> <u>Onaj s TikTok frizurom.</u>
              <br /> Onaj koji priđe s “di si mala”.
              <br /> Onaj koji ti ostavi 🔥 u DM-u i nestane…
            </p>
            <p>
              Sigurno si barem jednom dobila ovakav komentar — <strong>i osjetila ubod u trbuhu.</strong>
            </p>
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
              tražiš bilo kakvog muškarca, ti tražiš muškarca koji <strong>zna što vidi</strong> — i
              zna što želi.
            </p>
            <p>
              <strong>I znaš što je najljepše?</strong>
            </p>
            <p>
              <em>Znaš ga prepoznati kad ga vidiš.</em>
            </p>
            <p>
              Sad je vrijeme da on <u>prepozna tebe</u>.
            </p>
            <p>
              Ne riječima. <strong>Ne skriptom.</strong> Ne glumom.
            </p>
            <p>
              Već s tihim signalom zbog kojeg se okrene, zastane... i poželi prići.
            </p>
          </div>
        </Section>

        <Section bg="ivory">
          <div className="space-y-6 text-lg leading-relaxed">
            <h2 className="font-heading text-4xl font-bold italic text-center text-espresso sm:text-5xl">
              Otkud ideja?
            </h2>
            <p>
              <strong>Muškarci i dalje žele prići.</strong>
            </p>
            <p>
              Ali danas — ako nisu <u>99% sigurni</u> da ih nećeš odbiti, radije ne naprave ništa.
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
              Zato sam stvorila <strong>Signale Strasti</strong> — digitalni mikro-program koji ti
              svaki dan pokaže jednu malu stvar koju možeš napraviti... i doživjeti promjenu.
            </p>
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
        </Section>

        <Section id="kako-radi" bg="white">
          <div className="space-y-10">
            <h2 className="font-heading text-4xl font-bold italic text-center text-espresso sm:text-5xl">
              Kako izgleda program (korak po korak)
            </h2>
            <ol className="space-y-12">
              {steps.map((step, index) => (
                <li key={step.title} className="space-y-4 text-center">
                  <p className="text-sm font-bold italic uppercase tracking-[0.25em] text-cherry">
                    Korak {index + 1}
                  </p>
                  <p className="font-heading text-2xl font-bold text-espresso">{step.title}</p>
                  {step.image ? (
                    <div className="mx-auto w-full max-w-md overflow-hidden rounded-3xl border border-blush/50 bg-ivory shadow-card">
                      <Image
                        src={step.image.src}
                        alt={step.image.alt}
                        width={960}
                        height={720}
                        className="h-full w-full object-cover"
                        loading="lazy"
                      />
                    </div>
                  ) : null}
                  <p className="text-lg leading-relaxed text-espresso/80">{step.description}</p>
                </li>
              ))}
            </ol>
          </div>
        </Section>

        <Section bg="ivory">
          <div className="space-y-8">
            <h2 className="font-heading text-4xl font-bold italic text-center text-espresso sm:text-5xl">
              Što ćeš naučiti i primijeniti?
            </h2>
            <ul className="space-y-4">
              {features.map((feature) => (
                <li key={feature.id} className="flex items-start gap-3 text-lg text-espresso/90">
                  <span className="mt-1 flex h-8 w-8 items-center justify-center rounded-full bg-cherry/10 text-cherry">
                    <Check className="h-4 w-4" />
                  </span>
                  <span className="font-semibold">{feature.body}</span>
                </li>
              ))}
            </ul>
          </div>
        </Section>

        <Section bg="white">
          <h2 className="font-heading text-4xl font-bold italic text-center text-espresso sm:text-5xl">
            Tko stoji iza Signala Strasti?
          </h2>
          <div className="mt-6 space-y-5 text-lg leading-relaxed text-espresso/80">
            <p>
              Ja sam <strong>Dunja</strong>, <strong>godinama promatram</strong> kako muškarci uistinu
              reagiraju kad im se neka žena svidi... i što se zapravo događa{" "}
              <em>prije nego priđu.</em>
            </p>
            <p>
              Specijalistica sam za neverbalnu komunikaciju, i već 10 godina pomažem ženama da vrate
              ono što su mislile da su izgubile:{" "}
              <u>
                svoju prisutnost, <strong>magnetizam</strong> i sigurnost u vlastito tijelo.
              </u>
            </p>
            <p>
              Autorica sam knjige <em>„Što muškarci zapravo žele“</em>, i gostovala sam na brojnim
              televizijama gdje sam govorila o onome što se ne kaže naglas:{" "}
              <strong>što privlači, a što gasi mušku inicijativu.</strong>
            </p>
            <p>
              "Signali Strasti" nisu proizvod. To je rezultat mog rada sa stvarnim ženama koje nisu
              htjele glumiti, ni igrati igrice, ni biti nečije "rješenje". One su samo htjele da ih
              se opet vidi — <u>i da se ponovno osjete kao magnet</u>.
            </p>
            <p>
              <strong>Pogledaj ovdje:</strong>{" "}
              <em>„Dojmovi polaznica s prošlog programa“ — njihove priče su najbolji dokaz.</em>
            </p>
          </div>
          <div className="mt-8 overflow-hidden rounded-3xl border border-blush/60 bg-white shadow-card">
            <Image
              src="/images/Herophoto.png"
              alt="Dunja Akrapović"
              width={960}
              height={720}
              className="h-full w-full object-cover"
              loading="lazy"
            />
          </div>
        </Section>

        <Section bg="ivory">
          <div className="space-y-10">
            <div className="text-center space-y-4">
              <div>
                <p className="text-2xl font-bold uppercase tracking-[0.3em] text-cherry">PROGRAM</p>
                <p className="font-heading text-3xl font-bold italic text-espresso">
                  Rečenice Strasti
                </p>
              </div>
              <p className="text-xl font-semibold italic text-espresso/80">
                21 rečenica koje čine muškarca opsjednutim tobom
              </p>
              <h3 className="font-heading text-3xl font-bold text-center text-espresso">
                Alat koji svakog dana tiho uključuje tvoju privlačnost — i pokreće njegov prvi korak
              </h3>
            </div>
            <div className="mx-auto max-w-md">
              <div className="overflow-hidden rounded-3xl border border-blush/60 bg-white shadow-card">
                <Image
                  src="/images/Product.png"
                  alt="Program Signali Strasti"
                  width={960}
                  height={960}
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>
            <div className="mx-auto max-w-3xl space-y-8">
              <ul className="space-y-5 text-left">
                {offerItems.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-lg text-espresso/90">
                    <span className="mt-1 text-xl text-cherry">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="space-y-6">
                <p className="text-center text-base font-semibold italic text-espresso/80">
                  Uz to dobivaš i poklon pakiranje dodatnih alata:
                </p>
                <ul className="grid gap-4 text-left md:grid-cols-2">
                  {bonuses.map((bonus) => (
                    <li
                      key={bonus.title}
                      className="rounded-2xl border border-blush/60 bg-white/70 p-4 text-sm text-espresso"
                    >
                      <p className="font-semibold">{bonus.title}</p>
                      <p className="mt-1 text-espresso/80">{bonus.body}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div id="cijena" className="space-y-3 text-center">
              <h2 className="font-heading text-4xl font-bold italic text-center text-espresso sm:text-5xl">
                Cijeli paket — dostupan odmah
              </h2>
              <p className="text-lg text-espresso/80">Ukupna vrijednost svega što dobivaš: 532€</p>
              <p className="text-3xl font-bold text-cherry">Tvoja cijena danas: samo 17€</p>
              <p className="text-lg text-espresso/80">Bez pretplate. Bez čekanja.</p>
              <p className="text-lg text-espresso/80">Samo tvoj prvi signal — već danas.</p>
              <p className="text-sm text-espresso/60">
                🔒 Plaćanje je osigurano putem Stripe-a. Podaci kartice ostaju zaštićeni.
              </p>
            </div>
            <InlineCheckout />
          </div>
        </Section>

        <Section bg="ivory">
          <div className="space-y-5 text-lg leading-relaxed text-espresso/80">
            <h2 className="font-heading text-4xl font-bold italic text-center text-espresso sm:text-5xl">
              Ograničeno na 100 mjesta mjesečno
            </h2>
            <p>
              Zbog mentor podrške i osobnog pristupa, Dunja i tim primaju samo <strong>100 novih
              korisnica mjesečno</strong>. Nakon toga se prijave zatvaraju — kako bi se svakoj ženi
              moglo posvetiti s punom pažnjom.
            </p>
            <p>
              <em>Ako osjećaš da je ovo tvoj trenutak, ne čekaj.</em>
            </p>
          </div>
        </Section>

        <Section bg="white">
          <h2 className="font-heading text-4xl font-bold italic text-center text-espresso sm:text-5xl">
            Za koga je ovo?
          </h2>
          <div className="mt-8 grid gap-5 text-espresso/90 md:grid-cols-2">
            {audience.map((item) => (
              <div
                key={item.title}
                className="space-y-2 rounded-3xl border border-blush/60 bg-ivory/60 p-6 shadow-card"
              >
                <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cherry">
                  ✔️ {item.title}
                </p>
                <p className="text-lg">{item.body}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <CTAButton
              href="/prijava"
              size="lg"
              className="bg-[#6A1F29] text-[#F8F5F0] shadow-card hover:bg-[#52161f]"
            >
              Odgovara mi ovo — želim Signale Strasti
            </CTAButton>
          </div>
        </Section>

        <Section id="faq" bg="ivory">
          <div className="space-y-3 text-center">
            <h2 className="font-heading text-4xl font-bold italic text-center text-espresso sm:text-5xl">
              Najčešća pitanja
            </h2>
            <p className="text-base text-espresso/70">
              Sve što trebaš znati prije nego aktiviraš svoje prve Signale Strasti.
            </p>
          </div>
          <div className="mt-8 space-y-4">
            {faq.map((item) => (
              <details
                key={item.question}
                className="group rounded-3xl border border-blush/50 bg-white/80 p-5 text-left shadow-card"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between text-lg font-semibold text-espresso">
                  <span>{item.question}</span>
                  <span className="text-cherry transition-all duration-200 group-open:rotate-45">+</span>
                </summary>
                <div className="mt-4 border-t border-blush/40 pt-4 text-base text-espresso/80">
                  {item.answer}
                </div>
              </details>
            ))}
          </div>
        </Section>

        <Section bg="white">
          <div className="space-y-5 text-center">
            <p className="text-lg text-espresso/80">
              <strong>Još nešto...</strong>
            </p>
            <p className="text-lg text-espresso/80">
              Možda nisi izgubila sebe. <em>Možda si samo utišala svoj signal.</em>
            </p>
            <p className="text-lg text-espresso/80">
              Možda si samo izgubila pogled... koji je čekao pravi signal.
            </p>
            <p className="text-lg text-espresso/80">
              <u>Pošalji ga danas.</u>
            </p>
            <CTAButton href="#cijena" size="lg">
              Započni odmah
            </CTAButton>
          </div>
        </Section>
      </main>

      <footer className="bg-[#1B1A1A] text-[#F8F5F0]">
        <div className="mx-auto flex max-w-5xl flex-col gap-6 px-6 py-12">
          <div className="space-y-2 text-center sm:text-left">
            <p className="text-xs font-semibold uppercase tracking-[0.4em] text-[#D7C4B7]">
              Signali Strasti
            </p>
            <p className="text-lg text-[#F8F5F0]/80">
              Bez aplikacija. Bez igrica. Samo prvi signal koji ga poziva da priđe.
            </p>
          </div>
          <div className="flex flex-col items-center gap-4 text-sm text-[#F8F5F0]/80 sm:flex-row sm:justify-between">
            <a href="/privacy" className="transition hover:text-white">
              Privatnost
            </a>
            <a href="/terms" className="transition hover:text-white">
              Uvjeti korištenja
            </a>
            <a href="mailto:recenicestrasti@gmail.com" className="transition hover:text-white">
              recenicestrasti@gmail.com
            </a>
          </div>
          <p className="text-center text-xs text-[#F8F5F0]/60 sm:text-left">
            © {currentYear} Signali Strasti. Sva prava pridržana.
          </p>
        </div>
      </footer>
    </div>
  );
}
