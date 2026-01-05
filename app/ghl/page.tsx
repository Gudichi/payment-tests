import type { Metadata } from "next";
import Image from "next/image";
import { Check } from "lucide-react";
import { CTAButton } from "@/components/CTAButton";
import { Section } from "@/components/Section";
import { Container } from "@/components/Container";
import { PrimaryCTA } from "@/components/PrimaryCTA";
import { AnnouncementBar } from "@/components/AnnouncementBar";
import { DoubleChevronDown } from "@/components/DoubleChevronDown";
import { InlineCheckout } from "@/components/InlineCheckout";
import { CountdownTimer } from "@/components/countdown-timer";
import { productInfo } from "@/lib/brand";
import { LandingTracking } from "../test/LandingTracking";
import { CTATrackingWrapper } from "../test/CTATrackingWrapper";

const CTA_TEXT = "Da, želim pristupiti SIGNALIMA STRASTI";

export const metadata: Metadata = {
  title: "Signali Strasti — Program koji budi njegov prvi korak",
  description:
    "Aktiviraj tihi govor tela koji mu daje zeleno svetlo. Signali Strasti pokazuje ti kako za par minuta dnevno privući pažnju kvalitetnih muškaraca.",
  other: {
    "facebook-domain-verification": "cu2mqx41ucervi4ucd27awtvabnihw",
  },
};

const steps = [
  {
    title: "Otvori aplikaciju",
    description:
      "Čim uđeš, sve te čeka spremno. Dobijaš kompletan spisak Signala sa jasnim uputstvima — kad, kako i zašto ih koristiti — tako da se nikada ne pitaš 'radim li ovo dobro?'",
    image: "/Gif-1.gif",
    alt: "Pregled aplikacije Signali Strasti",
  },
  {
    title: "Aktiviraj signal (1 min)",
    description:
      "Ne menjaš rutinu — samo izabereš jedan od preporučenih Signala za taj dan i koristiš ga u svom prirodnom okruženju. Sve traje manje od minute, ali pokreće puno više nego što misliš.",
    image: "/aktiviraj-signale.png",
    alt: "Aktiviranje signala",
  },
  {
    title: "Oseti kako te gledaju drugačije",
    description:
      "Svaki signal je mikro gesta ili stav tvog tela. Dovoljno suptilan da se oseća prirodno, a dovoljno moćan da muškarci nesvesno reaguju. Ne moraš govoriti niti glumiti.",
    image: "/gledadrukcije.webp",
    alt: "Muškarac primećuje ženu",
  },
  {
    title: "Podeli što si primetila",
    description:
      "Pogledi. Osmeh. Prilasci. Tvoj govor tela preuzima posao. Ako želiš, javi mentorici u aplikaciji kako je prošlo — ili jednostavno zabeleži promenu za sebe.",
    image: "/Podjeli-nauceno.png",
    alt: "Podeli iskustvo u aplikaciji",
  },
];

const knowledgePoints = [
  "Kako tvoj govor tela (ne reči!) poziva muškarce da ti priđu",
  "Koje su najčešće greške koje žene rade kad žele da izgledaju \"otvoreno\"",
  "Kako prepoznati idealan trenutak za slanje signala",
  "Šta tačno u tebi čita muški mozak kao \"zeleno svetlo\"",
  "Kako ostati svoja i prisutna — bez igrica i glume",
];

const bonuses = [
  {
    title: "Bonus 1 — Prvi utisak koji ostaje s njim",
    image: "/Bonus-1.png",
    description:
      "3 neverbalna detalja + 2 rečenice zbog kojih pomisli: \"Ona je… drugačija.\" (Ovaj vodič se inače prodaje zasebno za 97€, ovde ga dobijaš unutar paketa.)",
  },
  {
    title: "Bonus 2 — Neka on napravi prvi korak",
    image: "/Bonus-2.png",
    description: "Kako signalizirati otvorenost, a da on oseti da sve dolazi od njega. (67€, uključeno bez dodatne naplate.)",
  },
  {
    title: "Bonus 3 — Poruka koja ga vraća, čak i ako se povukao",
    image: "/Bonus-4.png",
    description: "Kada znaš šta reći (i kako), njegova pažnja se vraća spontano. (Vrednost 77€, sada deo paketa.)",
  },
  {
    title: "Bonus 4 — Prva kafa koju pamti danima",
    image: "/Bonus-5.png",
    description: "Bez glume. Bez skripti. Samo ti — u svom najsvežijem, najprivlačnijem izdanju. (87€, uključen.)",
  },
];

const forWho = [
  {
    id: "nevidljive",
    body: (
      <>
        Žene koje se osećaju <strong>nevidljivo</strong> u svakodnevnim situacijama — i žele ponovo osetiti da neko{" "}
        <em>spontano primeti njihovu prisutnost.</em>
      </>
    ),
  },
  {
    id: "ghosting",
    body: (
      <>
        One koje su umorne od ghostinga, aplikacija i "pick me" kulture — i žele <u>stvarne razgovore</u> bez igrica i
        čekanja.
      </>
    ),
  },
  {
    id: "autenticnost",
    body: (
      <>
        One koje ne žele da glume, nego da vrate svoju <strong>prirodnu privlačnost</strong> i toplinu — bez skripti.
      </>
    ),
  },
  {
    id: "kemija",
    body: (
      <>
        One koje žele hemiju u stvarnom životu, ne na ekranu — i žele da <em>on</em> napravi prvi korak čim oseti signal.
      </>
    ),
  },
];

const testimonialImages = ["/ts-1.png", "/ts-2.png", "/ts-3.png", "/ts-4.png", "/ts-5.png"];

const productDetails = [
  { label: "Trajanje", value: "cca 1h 20min čiste primene u svakodnevnim situacijama" },
  { label: "Format", value: "Digitalni vodič + Signal kartice (PDF & interaktivno)" },
  { label: "Autorica", value: "Dunja Kramarić (autorica knjige \"Šta muškarci zapravo žele\")" },
  { label: "Dizajniran za", value: "Žene koje žele više pažnje — bez forsiranja" },
  { label: "Emocionalni ton", value: "Inteligentno, senzualno, samopouzdano" },
  { label: "Jezik", value: "Srpski 🇷🇸" },
  { label: "Posebno pogodno za", value: "Kafiće, kancelarije, dnevne situacije u kojima on oklijeva da priđe" },
  { label: "Vrednost paketa", value: "247€ – uključeno bez dodatne naplate 💎" },
  { label: "Ocena korisnica", value: "4.7 / 5 ⭐" },
];

const mostDownloaded = [
  "Ženama 25–45 koje žele diskretan, ali moćan ljubavni uticaj",
  "Klijenticama koje žele psihološku prednost u igri privlačnosti",
  "Korisnicama koje su umorne od skripti — i žele elegantnu autentičnost",
];

const highlightedPraise = [
  "Jasna primena",
  "Senzualna elegancija",
  "Emocionalna snaga",
  "Autentičnost bez skripti",
  "Vidiš rezultate bez forsiranja",
  "Podstiče muževnu inicijativu",
];

const amazonReviews = [
  {
    name: "Maja Šimunović",
    body:
      "Najbolje u svemu je što ne moraš ništa da glumiš. Samo lagano promeniš energiju i odjednom te ljudi primećuju. Ja sam imala prvi \"prilazak\" nakon 48 sati.",
  },
  {
    name: "Ivana Leko",
    body:
      "Kupila sam čisto iz znatiželje, nisam očekivala ništa… i evo me sad pričam svim curama. Radim u butiku i dobijam više kontakta očima nego ikad pre.",
  },
  {
    name: "Laura Dropulić",
    body:
      "Ono što stalno ponavljam prijateljicama — ne radi ovo samo da te muškarci gledaju, nego da ti sebe drugačije osetiš. Meni je nakon nekoliko dana došla neka nova sigurnost.",
  },
  {
    name: "Ema Kušan",
    body:
      "Odličan vodič! Jednostavno, brzo, i stvarno vidiš rezultate. Meni je najviše pomoglo objašnjenje zašto signali rade. Nekako sve sjedne u glavu.",
  },
  {
    name: "Valentina Rožić",
    body:
      "Meni je ovo promenilo ritam izlazaka. Ne gledam više ko će prići — jer sad stvarno priđu. 😅 Posebno kad ubacim 8. signal, to je ludilo.",
  },
  {
    name: "Martina Birač",
    body:
      "Najbolji deo je lokacijska primena. Inače radim na recepciji i bilo mi je teško znati kad šta koristiti. Sad sve imam jasno i mogu lagano primeniti.",
  },
  {
    name: "Paula Gregurić",
    body:
      "Nisam mislila da će ovako brzo raditi. Prvu malu promenu sam videla drugi dan kad sam koristila signal u kancelariji. Muški su me počeli malo više gledati, onako toplo.",
  },
  {
    name: "Jelena Legac",
    body:
      "Oseća se razlika u energiji, stvarno. Nije ni čudo da rade kad je toliko suptilno da ne može biti neugodno. Meni jako prirodno dođe.",
  },
  {
    name: "Dora Vuković",
    body:
      "Ovo je najbolji digitalni proizvod koji sam kupila ove godine. Čisto jer mi je vratilo neku ženstvenost koju sam godinama potiskivala.",
  },
  {
    name: "Tihana Pavlić",
    body:
      "Odlična stvar! I sve izgleda elegantno, lako i nenametljivo. Ako tražiš nešto što stvarno možeš odmah primeniti — ovo je to.",
  },
];

const faqItems = [
  {
    question: "Za koliko brzo mogu očekivati prve rezultate?",
    answer:
      "Većina korisnica prijavi prvu promenu pogleda, osmeha ili pristupa unutar 48–72 sata. Neke čak i isti dan — sve zavisi koliko često koristiš signale.",
  },
  {
    question: "Trebam li biti ekstrovert da mi ovo radi?",
    answer:
      "Ne. Signali su dizajnirani da funkcionišu i kod najtiših žena. Diskretni su, prirodni i ne traže nikakvu glumu.",
  },
  {
    question: "Hoće li izgledati kao da \"flertam\"?",
    answer:
      "Ne, signali nisu koketiranje. Oni samo otvaraju prostor da muškarac proceni da mu daješ zeleno svetlo — na vrlo prirodan način.",
  },
  {
    question: "Šta ako mi se niko ne javi ni nakon par dana?",
    answer:
      "To je normalno — i zavisi od toga gde se krećeš. Najčešće žene vide promenu čim primene signal u pravom trenutku i pravoj situaciji. Daj si 3–7 dana primene i videćeš razliku.",
  },
  {
    question: "Je li program namenjen ženama koje već imaju partnera?",
    answer:
      "Da — mnoge ga koriste da vrate toplinu i pažnju u odnos. Signali nisu napadni i ne narušavaju vezu, nego bude ženstvenost i mušku inicijativu.",
  },
  {
    question: "Moram li se posebno sređivati da signali deluju?",
    answer:
      "Ne moraš. Signali rade i u trenirci i u haljini — jer se baziraju na govoru tela, ne na izgledu.",
  },
  {
    question: "Hoće li mi ovo pomoći ako sam dugo \"van igre\"?",
    answer:
      "Da — zapravo, takvim ženama najbrže radi. Signali vraćaju prirodnu ženstvenu energiju koja je uvek tu, samo malo uspavana.",
  },
  {
    question: "Je li prikladno koristiti Signale Strasti na poslu?",
    answer:
      "Da, ali u meri. Za kancelariju su predviđeni posebno prilagođeni signali koji su profesionalni i vrlo suptilni.",
  },
  {
    question: "Koliko dnevno treba da sve savladam?",
    answer: "1 minuta. Program je namenjen da se uklopi u tvoj realan dan, bez ikakvog opterećenja.",
  },
  {
    question: "Šta ako sam jako nervozna oko muških prilazaka?",
    answer:
      "Zato signali i postoje — oni rade deo posla za tebe. Ne moraš govoriti, inicirati niti preduzimati ništa neugodno. Samo otvori vrata.",
  },
  {
    question: "Jesu li signali sigurni i nenametljivi?",
    answer:
      "Apsolutno. Sve je zasnovano na prirodnom neverbalnom jeziku koji muškarci instinktivno čitaju, a ne na trikovima.",
  },
  {
    question: "Hoće li mi ovo pomoći da privučem kvalitetnije muškarce?",
    answer: "Da. Muškarci koji imaju samopouzdanje i jasnu nameru najbrže reaguju na ovakve signale.",
  },
  {
    question: "Šta ako živim u manjem gradu?",
    answer:
      "Nema veze. Signali su napravljeni tako da deluju gde god postoje ljudi — kafić, prodavnica, park, posao.",
  },
  {
    question: "Mogu li primeniti signale i preko poruka?",
    answer:
      "Da — zato uključuješ \"Kako pisati da te poželi videti\", koji pomaže da se interes održi i ubrza prvi susret.",
  },
  {
    question: "Je li teško pogoditi pravi trenutak za signal?",
    answer:
      "Ne, aplikacija te vodi. Dobijaš jasne primere i situacije — već nakon 2–3 dana to ti ide potpuno prirodno.",
  },
  {
    question: "Je li ovo manipulacija?",
    answer:
      "Ne. Signali su samo način da razjasniš ono što već osećaš, umesto da deluješ zatvoreno ili nezainteresovano.",
  },
  {
    question: "Šta ako sam introvert i ne volim previše pažnje?",
    answer:
      "Savršeno — introvertirane žene obično imaju najlepšu, najsubtilniju energiju. Signali pojačavaju ono što već imaš, ne guraju te u spotlight.",
  },
  {
    question: "Mogu li pogrešiti s primenom signala?",
    answer: "Ne možeš. I ako ga napraviš \"nespretno\", muškarac će ga i dalje osetiti kao toplu otvorenost.",
  },
  {
    question: "Može li mi ovo pomoći ako sam razvedena / u zrelijoj dobi?",
    answer:
      "Da — mnoge žene 35+ i 40+ prijavljuju izuzetno brze rezultate jer im prirodna elegancija već radi u korist.",
  },
  {
    question: "Hoće li se muškarci ponašati drugačije čim počnem koristiti signale?",
    answer:
      "Da, vrlo verovatno. Najčešće se odmah menja kontakt očima, osmeh, način na koji prilaze i koliko su sigurni u sebe.",
  },
  {
    question: "Šta ako nisam dugo osetila hemiju?",
    answer:
      "Signali Strasti vraćaju tvoj prirodan magnetizam, pa hemija postaje posledica — ne nešto što moraš loviti.",
  },
];

const productSchema = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: productInfo.name,
  description:
    "Digitalni mikro-program Signali Strasti koji aktivira govor tela zbog kojeg muškarci prilaze.",
  brand: {
    "@type": "Brand",
    name: "Rečenice Strasti",
  },
  offers: {
    "@type": "Offer",
    priceCurrency: productInfo.currency,
    price: productInfo.price,
    url: "https://payment-tests.vercel.app/ghl",
    availability: "https://schema.org/InStock",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqItems.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
};

export default function GHLPage() {
  return (
    <>
      <LandingTracking />
      <div className="bg-ivory text-espresso">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify([productSchema, faqSchema]) }}
      />
      <main className="space-y-16 sm:space-y-24">
        {/* ATF Hero Section */}
        <section className="bg-ivory text-espresso">
          {/* Announcement Bar */}
          <AnnouncementBar>
            EKSKLUZIVNI BESPLATNI TRENING
          </AnnouncementBar>

          <Container>
            <div className="flex flex-col items-center py-6 text-center sm:py-8">
              {/* Hero Headline */}
              <h1 className="font-heading text-[clamp(2.75rem,7.5vw,4.8rem)] font-bold leading-[1.2] text-espresso mb-4 max-w-[900px]">
                Nauči Kako Žene na Balkanu Privlače Pažnju Kvalitetnih Muškaraca
              </h1>

              {/* Subheadline */}
              <p className="font-heading text-[clamp(1rem,2.2vw,1.15rem)] italic font-normal text-espresso/85 leading-relaxed max-w-[800px] mb-4">
                — Bez Filtera, Aplikacija ili Igrica — uz Jedan Signal o Kojem Nitko Ne Priča
              </p>

              {/* Double Chevron Down Indicator */}
              <DoubleChevronDown className="mt-3 mb-3" />

              {/* Wistia Video */}
              <div className="relative w-full max-w-[900px] mb-6 aspect-video">
                <div
                  className="wistia_embed wistia_async_v59k639lk4 absolute inset-0 w-full h-full"
                />
              </div>

              {/* Mini Naslov ispod videa */}
              <h3 className="font-heading text-2xl font-bold text-espresso mb-4 max-w-[800px]">
                Nakon ovog treninga, stvari će ti biti jasne:
              </h3>

              {/* Checklista */}
              <ul className="mx-auto max-w-3xl space-y-2.5 text-left text-lg text-espresso/85 leading-relaxed mb-6 w-full">
                {[
                  'Kako da prestaneš da budeš „viđena" i postaneš IZABRANA',
                  "Kako da on napravi prvi korak, a ti ostaneš dama (bez scene)",
                  "Kako da signal funkcioniše u kafiću, na poslu, u teretani, na svadbi (uživo, ne online)",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <Check className="mt-1 h-5 w-5 text-wine flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <div className="mt-4 mb-3 w-full flex justify-center pointer-events-none">
                <PrimaryCTA>
                  ŽELIM DA POGLEDAM TRENING I POŠALJEM PRVE SIGNALE
                </PrimaryCTA>
              </div>

              {/* Social Proof Image */}
              <div className="mt-4 mb-4 w-full flex justify-center">
                <Image
                  src="/SocialProof.png"
                  alt="Social proof"
                  width={600}
                  height={200}
                  className="w-full sm:w-[40%] mx-auto"
                />
              </div>

              {/* Micro-copy ispod buttona */}
              <p className="text-sm text-espresso/70 mt-2 mb-4">
                100% BESPLATNO
              </p>

              {/* Uskoro Na Label + Full-Width Portals Carousel */}
              <div className="w-screen ml-[calc(50%-50vw)] mr-[calc(50%-50vw)] bg-ivory pt-1 pb-2">
                <Container>
                  <h2 className="font-heading text-[clamp(1.5rem,3.5vw,2rem)] font-semibold text-wine text-center uppercase tracking-[0.1em] mb-1">
                    USKORO NA:
                  </h2>
                  <div className="w-full overflow-hidden">
                    <div className="flex gap-2 sm:gap-2.5 animate-scroll-portals">
                      {[1, 2, 3, 4, 5, 6, 1, 2, 3, 4, 5, 6].map((num, idx) => (
                        <div key={idx} className="flex-shrink-0 w-[108px] h-[108px] sm:w-[137px] sm:h-[137px] flex items-center justify-center px-1">
                          <Image
                            src={`/ikon-${num}.png`}
                            alt={`Portal ikona ${num}`}
                            width={137}
                            height={137}
                            className="w-full h-full object-contain opacity-85 group-hover:opacity-100 transition-all portal-icon"
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                </Container>
              </div>
            </div>
          </Container>
        </section>

        {/* Section 1: Testimonials + Author (merged) */}
        <Section bg="ivory">
          <div className="flex flex-col items-center gap-4 text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-wine italic">
              Pogledaj ispod
            </p>
            <h2 className="font-heading text-4xl font-bold text-espresso sm:text-5xl">
              Dojmovi polaznica koje su pogledale trening
            </h2>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 w-full">
              {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
                <Image
                  key={num}
                  src={`/TS-B1-S${num}.png`}
                  alt={`Testimonial ${num}`}
                  width={620}
                  height={420}
                  className="mx-auto w-full rounded-3xl object-contain"
                />
              ))}
            </div>
          </div>
          
          <div className="flex flex-col items-center gap-6 text-center text-lg leading-relaxed text-espresso/85 mt-12">
            <h2 className="font-heading text-4xl font-bold text-espresso sm:text-5xl">Tko stoji iza besplatnog treninga?</h2>
            <Image src="/Tim.png" alt="Dunja i tim" width={680} height={520} className="mx-auto w-full rounded-3xl sm:w-1/2" />
            <p className="max-w-3xl">
              Ja sam Dunja, godinama posmatram kako muškarci uistinu reaguju kad im se neka žena svidi... i šta se zapravo
              dešava pre nego što priđu.
            </p>
            <p className="max-w-3xl">
              Specijalistica sam za neverbalnu komunikaciju i već 10 godina pomažem ženama da vrate ono što su mislile da su
              izgubile: svoju prisutnost, magnetizam i sigurnost u sopstveno telo.
            </p>
            <p className="max-w-3xl">
              Autorica sam knjige „Šta muškarci zapravo žele", i gostovala sam na brojnim televizijama gde sam govorila o
              onome što se ne kaže naglas: šta privlači, a šta gasi mušku inicijativu.
            </p>
            <p className="max-w-3xl">
              "Signali Strasti" nisu proizvod. To je rezultat mog rada sa stvarnim ženama koje nisu htjele da glume, ni da igraju
              igrice, ni da budu nečije "rešenje". One su samo htjele da ih se opet vidi.
            </p>
          </div>
        </Section>

        {/* Testimonial Block 2 */}
        <Section bg="white">
          <div className="flex flex-col items-center gap-4 text-center">
            {/* Eyebrow */}
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-wine italic">
              POGLEDAJ ISPOD
            </p>
            {/* CTA Button na vrhu */}
            <div className="mb-4 w-full flex justify-center pointer-events-none">
              <CTATrackingWrapper
                href="#offer-section"
                size="lg"
                className="bg-wine text-ivory rounded-2xl px-12 py-[1.1rem] font-bold uppercase tracking-[0.05em] shadow-[0_12px_25px_rgba(26,20,18,0.12)] hover:bg-[#7A3B57] active:translate-y-[1px] active:shadow-[0_8px_18px_rgba(26,20,18,0.1)] transition-all"
                scrollToCheckout
                scrollTargetId="offer-section"
                section="testimonials-b2-top"
              >
                {CTA_TEXT}
              </CTATrackingWrapper>
            </div>
            {/* Social Proof Image */}
            <div className="mb-6 w-full flex justify-center">
              <Image
                src="/SocialProof.png"
                alt="Social proof"
                width={600}
                height={200}
                className="w-full sm:w-[40%] mx-auto"
              />
            </div>
            {/* H2 */}
            <h2 className="font-heading text-4xl font-bold text-espresso sm:text-5xl">
              Dojmovi polaznica koje su prošle kroz Signale
            </h2>
            {/* Testimonial Block */}
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 w-full mt-6">
              {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
                <Image
                  key={num}
                  src={`/TS-B2-S${num}.png`}
                  alt={`Testimonial ${num}`}
                  width={620}
                  height={420}
                  className="mx-auto w-full rounded-3xl object-contain"
                />
              ))}
            </div>
          </div>
        </Section>

        <Section bg="white">
          <div className="flex flex-col items-center gap-6 text-center text-lg leading-relaxed text-espresso/90">
            <div className="space-y-4 max-w-3xl">
              <div className="flex items-center justify-center gap-3 text-wine">
                <div className="overflow-hidden rounded-full border border-wine/30 bg-white">
                  <Image src="/PROFILNA.png" alt="Profilna Dunje Kramarić" width={48} height={48} className="h-12 w-12 object-cover" />
                </div>
                <h2 className="text-sm font-semibold uppercase tracking-[0.35em]">Piše: Dunja Kramarić</h2>
              </div>
              <p>
                <em>Ćao,</em> Ako si se ikad dotjerala, izašla iz kuće, a onda se vratila s osećajem da te niko nije ni{" "}
                <u>pogledao...</u>
              </p>
              <p>
                Ili još gore — da su te pogledali, ali da to nisu bili muškarci koji ti baš preferiraš…<br />
                Onaj s TikTok frizurom.<br />
                Onaj koji priđe s "di si mala".<br />
                Onaj koji ti reaguje na story s 🔥 i nestane…
              </p>
              <h3 className="font-heading text-xl uppercase tracking-[0.15em] text-wine font-semibold mt-6 mb-3">
                Sigurno si barem jednom dobila ovakav komentar:
              </h3>
            </div>
            <Image src="/komentari.png" alt="Komentari polaznica" width={720} height={640} className="mx-auto w-3/5 rounded-3xl sm:w-1/2" />
            <div className="space-y-4 max-w-3xl">
              <p>
                <strong>Znam</strong> da ti možeš privući pažnju i znam da možeš pronaći muškarca…
              </p>
              <p>
                Ali ti ne tražiš bilo kakvog, ti tražiš muškarca koji zna šta vidi — i zna šta želi.<br />
                <em>I znaš šta je najlepše?</em><br />
                U 90% slučajeva znaš prepoznati takvog kad ga vidiš…
              </p>
              <p>
                Sad je vreme da on prepozna tebe. Ne rečima. Ne skriptom. Ne glumom. Već s tihim signalom zbog kojeg
                se okrene, zastane... i poželi prići.
              </p>
            </div>
          </div>
        </Section>

        <Section bg="ivory">
          <div className="flex flex-col items-center gap-4 text-center">
            <h2 className="font-heading text-4xl font-bold text-espresso sm:text-5xl max-w-4xl">
              Nije da muškarci više ne prilaze.<br />
              Nego im mozak traži jednu informaciju pre prvog koraka.
            </h2>
            <Image 
              src="/s-section-3.png" 
              alt="Muškarac razmišlja" 
              width={720} 
              height={560} 
              className="mx-auto w-full rounded-3xl sm:w-3/4 mt-4" 
            />
            <p className="font-heading text-[clamp(1rem,2.2vw,1.15rem)] italic font-normal text-espresso/85 leading-relaxed max-w-[800px] mt-4">
              Kvalitetan muškarac NE prilazi impulzivno.
            </p>
            <h3 className="font-heading text-xl uppercase tracking-[0.15em] text-wine font-semibold mt-6 mb-3">
              Prilazi tek kad mu mozak dobije dozvolu da:
            </h3>
            <ul className="mx-auto max-w-3xl space-y-2.5 text-left text-xl text-espresso/85 leading-relaxed">
              <li className="flex items-start gap-3">
                <Check className="mt-1 h-5 w-5 text-wine flex-shrink-0" />
                <span>neće ispasti „slinavac"</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="mt-1 h-5 w-5 text-wine flex-shrink-0" />
                <span>neće biti <strong>posramljen</strong></span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="mt-1 h-5 w-5 text-wine flex-shrink-0" />
                <span>neće biti <strong>odbijen pred ljudima</strong></span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="mt-1 h-5 w-5 text-wine flex-shrink-0" />
                <span>neće biti označen kao „<strong>naporan</strong>"</span>
              </li>
            </ul>
            <div className="max-w-3xl mt-6 text-center">
              <p className="text-base leading-relaxed text-espresso/80 italic">
                I to dozvolu nije rečenica.
                Nije ulet. Nije gluma.
              </p>
              <p className="font-heading text-xl italic font-bold text-wine mt-4 mb-2">
                To je mikro-signal.
              </p>
            </div>
            <Image 
              src="/s-section-4.gif" 
              alt="Mikro-signal animacija" 
              width={720} 
              height={480} 
              className="mx-auto w-full rounded-3xl sm:w-3/4 mt-4" 
            />
            <h3 className="font-heading text-xl uppercase tracking-[0.15em] text-wine font-semibold mt-6 mb-3">
              I kad ga imaš… odjednom se menja film:
            </h3>
            <ul className="mx-auto max-w-3xl space-y-2.5 text-left text-lg text-espresso/85 mt-2">
              {[
                'Pogledi postaju stabilni (ne onaj „pogled pa beg")',
                "Počne tražiti tvoj pogled",
                "Približi se prirodno",
                "I napravi prvi korak, kao da je to njegova ideja (jer i jeste).",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <Check className="mt-1 h-5 w-5 text-wine flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </Section>

        <Section bg="white">
          <div className="flex flex-col items-center gap-4 text-center">
            <h2 className="font-heading text-4xl font-bold text-espresso sm:text-5xl max-w-4xl">
              Pošalji "Sigurno je" signal… i njegov strah od odbijanja se ugasi.
            </h2>
            <p className="font-heading text-[clamp(1rem,2.2vw,1.15rem)] italic font-normal text-espresso/85 leading-relaxed max-w-[800px] mt-4">
              Bez Tindera. Bez igrica. Bez "napadnosti". Samo signal koji muškom mozgu kaže: "Možeš prići."
            </p>
            <h3 className="font-heading text-xl uppercase tracking-[0.15em] text-wine font-semibold mt-6 mb-3">
              Muški mozak radi mikro-provere u sekundi:
            </h3>
            <ul className="mx-auto max-w-3xl space-y-2.5 text-left text-lg text-espresso/85 w-full">
              {[
                "Da li je sigurno prići (neće biti odbijen)",
                "Da li postoji interes (neće biti ignoriran)",
                "Da li je trenutak pravi (neće biti posramljen)",
                "Da li ima dozvolu (neće biti označen kao napadan)",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <Check className="mt-1 h-5 w-5 text-wine flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <Image 
              src="/s-section-5.png" 
              alt="Muški mozak proverava signale" 
              width={720} 
              height={560} 
              className="mx-auto w-full rounded-3xl sm:w-3/4 mt-8" 
            />
            {/* CTA Button na dno ispod slike */}
            <div className="mt-6 w-full flex justify-center pointer-events-none">
              <CTATrackingWrapper
                href="#offer-section"
                size="lg"
                className="bg-wine text-ivory rounded-2xl px-12 py-[1.1rem] font-bold uppercase tracking-[0.05em] shadow-[0_12px_25px_rgba(26,20,18,0.12)] hover:bg-[#7A3B57] active:translate-y-[1px] active:shadow-[0_8px_18px_rgba(26,20,18,0.1)] transition-all"
                scrollToCheckout
                scrollTargetId="offer-section"
                section="signal-section"
              >
                {CTA_TEXT}
              </CTATrackingWrapper>
            </div>
            {/* Social Proof Image */}
            <div className="mt-4 mb-4 w-full flex justify-center">
              <Image
                src="/SocialProof.png"
                alt="Social proof"
                width={600}
                height={200}
                className="w-full sm:w-[40%] mx-auto"
              />
            </div>
          </div>
        </Section>

        {/* New Section: "Kako si ti još sama?" */}
        <Section bg="ivory">
          <div className="flex flex-col items-center gap-4 text-center">
            {/* Eyebrow */}
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-wine italic">
              Ako si ikad čula:
            </p>

            {/* Main Quote */}
            <h2 className="font-heading text-[clamp(2rem,5vw,3.2rem)] font-bold text-espresso max-w-[900px] leading-tight">
              "Kako si ti još sama?"
            </h2>

            {/* Subline */}
            <p className="font-heading text-[clamp(1rem,2.2vw,1.15rem)] italic text-wine mt-2">
              … onda je ovo za tebe.
            </p>

            {/* Image */}
            <Image 
              src="/s-section-6.png" 
              alt="Žena razmišlja" 
              width={720} 
              height={560} 
              className="mx-auto w-full rounded-3xl shadow-card max-w-[900px] mt-6" 
            />

            {/* Paragraph with ZID emphasis */}
            <p className="font-heading text-lg text-espresso/85 leading-relaxed max-w-[800px] mt-6">
              Ne zato što ti "fali nešto" nego zato što većina žena nesvesno šalje signal koji muškom mozgu izgleda kao: <span className="text-wine font-semibold uppercase">ZID</span>.
            </p>

            {/* Callout block with two key sentences */}
            <div className="max-w-[900px] mt-6 rounded-3xl border-l-4 border-wine bg-white/50 p-5 sm:p-6">
              <p className="font-heading text-[clamp(1rem,2.3vw,1.2rem)] font-semibold text-espresso leading-relaxed">
                Najopasnija laž nije "nema dobrih muškaraca."
              </p>
              <p className="font-heading text-[clamp(1rem,2.3vw,1.2rem)] font-bold text-wine leading-relaxed mt-3">
                Najopasnija laž je: "Ako sam dovoljno dobra cura, pravi će sam doći."
              </p>
            </div>
          </div>
        </Section>

        {/* Section 7: "U sljedećih 7 dana..." */}
        <Section bg="white">
            <div className="flex flex-col items-center text-center">
              {/* H2 */}
              <h2 className="font-heading font-bold text-4xl sm:text-5xl text-espresso leading-tight text-center max-w-4xl mx-auto">
                U sljedećih 7 dana prestat ćeš čekati "slučajnost" i početi stvarati situacije u kojima on priđe.
              </h2>

              {/* Subheadline */}
              <p className="font-heading italic font-normal text-[clamp(1rem,2.5vw,1.25rem)] text-espresso/85 leading-relaxed text-center max-w-[800px] mx-auto mt-4">
                Šta ćeš znati i moći nakon programa (i zašto će se stvari napokon početi dešavati uživo)
              </p>

              {/* Image */}
              <Image 
                src="/s-section-7.png" 
                alt="Program Signali Strasti" 
                width={900} 
                height={560} 
                className="mx-auto w-full rounded-3xl shadow-card max-w-[900px] mt-8 mb-8" 
              />

              {/* Checklist */}
              <ul className="max-w-3xl mx-auto space-y-4 text-left">
                <li className="flex items-start gap-3">
                  <Check className="h-5 w-5 flex-shrink-0 mt-1 text-[#8B4566]" />
                  <span className="text-lg text-espresso/85 leading-relaxed">
                    Kako tvoj govor tela trenutno nesvesno šalje <span className="font-semibold text-espresso">"ZID"</span> i kako ga pretvoriti u jasan, ženstven <span className="font-semibold text-espresso">"OTVORENI PROLAZ"</span> bez da išta govoriš.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="h-5 w-5 flex-shrink-0 mt-1 text-[#8B4566]" />
                  <span className="text-lg text-espresso/85 leading-relaxed">
                    Koji su tačno mikro-signali koji muškom mozgu daju dozvolu: "Sigurno je. Smem prići." i kako ih složiti u redosled koji radi.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="h-5 w-5 flex-shrink-0 mt-1 text-[#8B4566]" />
                  <span className="text-lg text-espresso/85 leading-relaxed">
                    Kako prepoznati pravi trenutak (timing) i izbeći onaj osećaj da si "previše" ili da si poslala krivu poruku.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="h-5 w-5 flex-shrink-0 mt-1 text-[#8B4566]" />
                  <span className="text-lg text-espresso/85 leading-relaxed">
                    Kako se isti signal koristi drugačije u kafiću, na poslu, u teretani i u društvu, tako da uvek ostaneš prirodna i sigurna.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="h-5 w-5 flex-shrink-0 mt-1 text-[#8B4566]" />
                  <span className="text-lg text-espresso/85 leading-relaxed">
                    Kako razlikovati "zeleno", "crveno" i "nije taj tip" kroz mini-provere, da prestaneš pogađati i prestaneš overthinkati.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="h-5 w-5 flex-shrink-0 mt-1 text-[#8B4566]" />
                  <span className="text-lg text-espresso/85 leading-relaxed">
                    Kako se regulisati u trenutku (bez freeze-a i povlačenja), da signal stvarno izađe iz tebe mirno, a ne da ga telo ugasi u zadnjoj sekundi.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="h-5 w-5 flex-shrink-0 mt-1 text-[#8B4566]" />
                  <span className="text-lg text-espresso/85 leading-relaxed">
                    Kako koristiti Signale kao filter, da ne pališ muškarce koji traže igru i dramu, nego one koji već imaju inicijativu, ali čekaju dozvolu.
                  </span>
                </li>
              </ul>
              {/* CTA Button na dno ispod checkliste */}
              <div className="mt-8 w-full flex justify-center pointer-events-none">
                <CTATrackingWrapper
                  href="#offer-section"
                  size="lg"
                  className="bg-wine text-ivory rounded-2xl px-12 py-[1.1rem] font-bold uppercase tracking-[0.05em] shadow-[0_12px_25px_rgba(26,20,18,0.12)] hover:bg-[#7A3B57] active:translate-y-[1px] active:shadow-[0_8px_18px_rgba(26,20,18,0.1)] transition-all"
                  scrollToCheckout
                  scrollTargetId="offer-section"
                  section="7-days-section"
                >
                  {CTA_TEXT}
                </CTATrackingWrapper>
              </div>
              {/* Social Proof Image */}
              <div className="mt-4 mb-4 w-full flex justify-center">
                <Image
                  src="/SocialProof.png"
                  alt="Social proof"
                  width={600}
                  height={200}
                  className="w-full sm:w-[40%] mx-auto"
                />
              </div>
            </div>
        </Section>

        {/* Section 8: "Za 7 dana možeš doći..." - 4 Koraka */}
        <Section bg="white">
          <div className="flex flex-col items-center gap-4 text-center">
            {/* H2 */}
            <h2 className="font-heading font-bold text-4xl sm:text-5xl text-espresso leading-tight text-center max-w-4xl mx-auto">
              Za 7 dana možeš doći do onog trenutka: "Evo ga. Stvarno je prišao."
            </h2>

            {/* Subheadline */}
            <p className="font-heading italic font-normal text-[clamp(1rem,2.5vw,1.25rem)] text-espresso/85 leading-relaxed text-center max-w-[800px] mx-auto mt-4">
              Evo kako program funkcionira u 4 koraka:
            </p>

            {/* Illustration */}
            <Image 
              src="/s-section8-1.png" 
              alt="4 koraka programa" 
              width={900} 
              height={560} 
              className="mx-auto w-full rounded-3xl max-w-[900px] mt-8 mb-8" 
            />

            {/* Steps Grid */}
            <div className="flex flex-col gap-6 w-full max-w-3xl mx-auto mt-4">
              {/* KORAK 1 */}
              <div className="space-y-3 rounded-3xl border border-white/70 bg-ivory/70 p-6 shadow-card sm:p-8">
                <div className="text-center">
                  <p className="text-sm font-semibold uppercase tracking-[0.35em] text-wine">
                    <span className="font-heading italic">KORAK 1</span>
                  </p>
                  <h4 className="font-heading text-xl font-bold text-espresso mt-2">Pošalji prvi signal (danas)</h4>
                </div>
                <div className="text-left">
                <Image
                  src="/korak1.gif"
                  alt="Korak 1"
                  width={720}
                  height={420}
                  className="mx-auto w-full rounded-2xl mt-4"
                />
                <p className="text-base text-espresso/85 leading-relaxed mt-4">
                  Ulogiraš se i dobijaš prvi mini video i jedan zadatak koji odradiš za par minuta, u situaciji u kojoj se ionako pojavljuješ (kafić, posao, teretana, ulica).
                  <br />
                  Nema rečenica. Nema uleta. Nema približavanja.
                </p>
                <p className="text-base text-espresso/85 leading-relaxed mt-4">
                  <span className="font-semibold text-wine">Cilj:</span> da prestaneš slati "zid" i počneš slati "sigurno je".
                </p>
                </div>
              </div>

              {/* KORAK 2 */}
              <div className="space-y-3 rounded-3xl border border-white/70 bg-ivory/70 p-6 shadow-card sm:p-8">
                <div className="text-center">
                  <p className="text-sm font-semibold uppercase tracking-[0.35em] text-wine">
                    <span className="font-heading italic">KORAK 2</span>
                  </p>
                  <h4 className="font-heading text-xl font-bold text-espresso mt-2">Prati reakciju (bez overthinkinga)</h4>
                </div>
                <div className="text-left">
                <Image
                  src="/Korak2.gif"
                  alt="Korak 2"
                  width={720}
                  height={420}
                  className="mx-auto w-full rounded-2xl mt-4"
                />
                <p className="text-base text-espresso/85 leading-relaxed mt-4">
                  Uz svaki zadatak dobijaš mini proveru: šta je "zeleno", šta je "crveno" i šta znači "nije još taj tip".
                  <br />
                  Ne pogađaš. Samo posmatraš.
                </p>
                <p className="text-base text-espresso/85 leading-relaxed mt-4">
                  <span className="font-semibold text-wine">Cilj:</span> da znaš da li je signal prošao ili treba mali tweak.
                </p>
                </div>
              </div>

              {/* KORAK 3 */}
              <div className="space-y-3 rounded-3xl border border-white/70 bg-ivory/70 p-6 shadow-card sm:p-8">
                <div className="text-center">
                  <p className="text-sm font-semibold uppercase tracking-[0.35em] text-wine">
                    <span className="font-heading italic">KORAK 3</span>
                  </p>
                  <h4 className="font-heading text-xl font-bold text-espresso mt-2">Primijeni u stvarnom kontekstu (sutra u 18:00)</h4>
                </div>
                <div className="text-left">
                <Image
                  src="/korak3.gif"
                  alt="Korak 3"
                  width={720}
                  height={420}
                  className="mx-auto w-full rounded-2xl mt-4"
                />
                <p className="text-base text-espresso/85 leading-relaxed mt-4">
                  Odabereš gde se stvarno krećeš i dobijaš kratke upute baš za taj prostor.
                  <br />
                  Kafić nije isto što i posao. Teretana nije isto što i ulica.
                </p>
                <p className="text-base text-espresso/85 leading-relaxed mt-4">
                  <span className="font-semibold text-wine">Cilj:</span> da znaš šta raditi tačno tamo gde ti se život dešava.
                </p>
                </div>
              </div>

              {/* KORAK 4 */}
              <div className="space-y-3 rounded-3xl border border-white/70 bg-ivory/70 p-6 shadow-card sm:p-8">
                <div className="text-center">
                  <p className="text-sm font-semibold uppercase tracking-[0.35em] text-wine">
                    <span className="font-heading italic">KORAK 4</span>
                  </p>
                  <h4 className="font-heading text-xl font-bold text-espresso mt-2">Dobiješ korekciju i ideš dalje</h4>
                </div>
                <div className="text-left">
                <Image
                  src="/Tim.png"
                  alt="Dunja i tim"
                  width={680}
                  height={520}
                  className="mx-auto w-full rounded-2xl mt-4"
                />
                <p className="text-base text-espresso/85 leading-relaxed mt-4">
                  Kad zapneš, pošalješ pitanje i dobijaš moj konkretan odgovor za tvoju situaciju.
                  <br />
                  Ne ostaješ sama i ne radiš "napamet".
                </p>
                <p className="text-base text-espresso/85 leading-relaxed mt-4">
                  <span className="font-semibold text-wine">Cilj:</span> da za par dana dođeš do prvog konkretnog prilaska, a ne da ti sve ostane na teoriji.
                </p>
                </div>
              </div>
              {/* CTA Button nakon četvrtog koraka */}
              <div className="mt-8 w-full flex justify-center pointer-events-none">
                <CTATrackingWrapper
                  href="#offer-section"
                  size="lg"
                  className="bg-wine text-ivory rounded-2xl px-12 py-[1.1rem] font-bold uppercase tracking-[0.05em] shadow-[0_12px_25px_rgba(26,20,18,0.12)] hover:bg-[#7A3B57] active:translate-y-[1px] active:shadow-[0_8px_18px_rgba(26,20,18,0.1)] transition-all"
                  scrollToCheckout
                  scrollTargetId="offer-section"
                  section="4-steps-section"
                >
                  {CTA_TEXT}
                </CTATrackingWrapper>
              </div>
              {/* Social Proof Image */}
              <div className="mt-4 mb-4 w-full flex justify-center">
                <Image
                  src="/SocialProof.png"
                  alt="Social proof"
                  width={600}
                  height={200}
                  className="w-full sm:w-[40%] mx-auto"
                />
              </div>
            </div>
          </div>
        </Section>

        {/* New Offer / Value Stack Section */}
        <Section id="program" bg="white">
          <div className="flex flex-col gap-8 text-center text-espresso">
            {/* 1. Uvodni Frame */}
            <div className="flex flex-col items-center gap-4">
              <h2 className="font-heading text-4xl font-bold text-wine sm:text-5xl max-w-4xl">
                Od trenutka kad uđeš, prestaješ se pitati 'je li do mene' i počinješ znati tačno šta radiš.
              </h2>
              <p className="font-heading text-lg text-espresso/85 leading-relaxed max-w-[800px]">
                Ovo nije savet ni inspiracija, nego sistem koji uklanja nagađanje i daje ti jasan smer u stvarnim situacijama.
              </p>
            </div>

            {/* 2. Core Program - 4 Glavna Modula */}
            <div className="flex flex-col gap-6 max-w-3xl mx-auto w-full">
              {/* MODUL 1 */}
              <div className="space-y-3 rounded-3xl border border-white/70 bg-ivory/70 p-6 shadow-card text-left sm:p-8">
                <h4 className="font-heading text-xl font-bold text-espresso text-center">Signali Strasti™</h4>
                <Image
                  src="/Mockup-1.png"
                  alt="Signali Strasti"
                  width={720}
                  height={420}
                  className="mx-auto w-4/5 rounded-2xl mt-4"
                />
                <p className="text-base text-espresso/85 leading-relaxed mt-4">
                  Unutra tačno vidiš koji signal šalješ, kada ga šalješ i gde se zaustavljaš da ne pređeš granicu.
                  <br />
                  Njegov prvi korak prestaje biti slučajan. Postaje logičan.
                  <br />
                  Ne tražiš pažnju. Ne šalješ krive poruke.
                </p>
                <p className="text-base text-espresso/90 font-semibold leading-relaxed mt-4">
                  Muškom mozgu daješ ono što mu nedostaje da se pokrene – jasnu, mirnu sigurnost da priđe bez rizika.
                </p>
              </div>

              {/* MODUL 2 */}
              <div className="space-y-3 rounded-3xl border border-white/70 bg-ivory/70 p-6 shadow-card text-left sm:p-8">
                <h4 className="font-heading text-xl font-bold text-espresso text-center">Situacijski Magnetizam</h4>
                <Image
                  src="/Mockup-2.png"
                  alt="Situacijski Magnetizam"
                  width={720}
                  height={420}
                  className="mx-auto w-4/5 rounded-2xl mt-4"
                />
                <p className="text-base text-espresso/85 leading-relaxed mt-4">
                  Isti signal ne važi svugde.
                  <br />
                  Zato ovde dobijaš kontekst i prilagodbu situaciji u kojoj jesi.
                  <br />
                  Kafić, posao, teretana, ulica, društvena okupljanja.
                </p>
                <p className="text-base text-espresso/90 font-semibold leading-relaxed mt-4">
                  Znaš šta radiš – tačno tamo gde ti se život stvarno dešava.
                </p>
              </div>

              {/* MODUL 3 */}
              <div className="space-y-3 rounded-3xl border border-white/70 bg-ivory/70 p-6 shadow-card text-left sm:p-8">
                <h4 className="font-heading text-xl font-bold text-espresso text-center">Dekodiranje muškog uma</h4>
                <Image
                  src="/Mockup-3.png"
                  alt="Dekodiranje muškog uma"
                  width={720}
                  height={420}
                  className="mx-auto w-4/5 rounded-2xl mt-4"
                />
                <p className="text-base text-espresso/85 leading-relaxed mt-4">
                  Ovde prestaje analiziranje.
                  <br />
                  Počinje čitanje stvarnosti i razumevanje kako on tumači tvoje ponašanje.
                  <br />
                  Znaš u kom trenutku odlučuje: prići ili odustati.
                </p>
                <p className="text-base text-espresso/90 font-semibold leading-relaxed mt-4">
                  Sve nebitno mirno ignorišeš, bez griže savesti.
                </p>
              </div>

              {/* MODUL 4 */}
              <div className="space-y-3 rounded-3xl border border-white/70 bg-ivory/70 p-6 shadow-card text-left sm:p-8">
                <h4 className="font-heading text-xl font-bold text-espresso text-center">Smirivanje živčanog sustava</h4>
                <Image
                  src="/Mockup-4.png"
                  alt="Smirivanje živčanog sustava"
                  width={720}
                  height={420}
                  className="mx-auto w-4/5 rounded-2xl mt-4"
                />
                <p className="text-base text-espresso/85 leading-relaxed mt-4">
                  Ovde se uklanja ono što najčešće sabotira signal – telo koje u zadnjoj sekundi povuče ručnu.
                  <br />
                  Bez freeze-a, bez overthinkinga, bez nestajanja iz trenutka.
                  <br />
                  Učiš kako ostati mirna i prisutna.
                </p>
                <p className="text-base text-espresso/90 font-semibold leading-relaxed mt-4">
                  Tvoje telo sarađuje s tobom, umesto da te sabotira.
                </p>
              </div>
            </div>

            {/* 3. Specijalni Bonusi */}
            <div className="space-y-4 text-left text-base text-espresso/85 mt-8">
              <div className="text-center">
                <h3 className="text-2xl font-heading font-bold text-wine">SPECIJALNI POKLONI KOJE DOBIJAŠ DANAS</h3>
                <p className="text-base text-espresso/85 mt-2">
                  Dobijaš doživotni pristup (dostupni uz kupnju dok ponuda ne istekne)
                </p>
              </div>
              <div className="flex flex-col gap-6 max-w-3xl mx-auto w-full">
                {/* BONUS 1 */}
                <div className="space-y-3 rounded-3xl border border-white/70 bg-ivory/70 p-6 shadow-card text-left sm:p-8">
                  <h4 className="font-heading text-xl font-bold text-espresso text-center">Osobni Signalni Test</h4>
                  <Image
                    src="/Mockup-5.png"
                    alt="Osobni Signalni Test"
                    width={720}
                    height={420}
                    className="mx-auto w-4/5 rounded-2xl mt-4"
                  />
                  <p className="text-base text-espresso/85 leading-relaxed mt-4">
                    Popuniš kratki upitnik koji osobno pregledavam.
                    <br />
                    Na mail dobijaš jasnu analizu tvoje situacije i signala koje je za tebe najpametnije prvo koristiti.
                    <br />
                    Za par minuta znaš gde si jaka i gde gubiš magnetizam.
                  </p>
                </div>

                {/* BONUS 2 */}
                <div className="space-y-3 rounded-3xl border border-white/70 bg-ivory/70 p-6 shadow-card text-left sm:p-8">
                  <h4 className="font-heading text-xl font-bold text-espresso text-center">7-dnevni Brzi Magnetizam Izazov</h4>
                  <Image
                    src="/Mockup-6.png"
                    alt="7-dnevni Brzi Magnetizam Izazov"
                    width={720}
                    height={420}
                    className="mx-auto w-4/5 rounded-2xl mt-4"
                  />
                  <p className="text-base text-espresso/85 leading-relaxed mt-4">
                    Sedam dana, sedam malih zadataka koji te iz teorije prebacuju u akciju.
                    <br />
                    Signale odmah isprobavaš u stvarnim situacijama, bez prekida normalnog života.
                    <br />
                    Cilj je brza povratna reakcija i konkretan pomak.
                  </p>
                </div>

                {/* BONUS 3 */}
                <div className="space-y-3 rounded-3xl border border-white/70 bg-ivory/70 p-6 shadow-card text-left sm:p-8">
                  <h4 className="font-heading text-xl font-bold text-espresso text-center">Voice-Note podrška</h4>
                  <Image
                    src="/Mockup-7.png"
                    alt="Voice-Note podrška"
                    width={720}
                    height={420}
                    className="mx-auto w-4/5 rounded-2xl mt-4"
                  />
                  <p className="text-base text-espresso/85 leading-relaxed mt-4">
                    Kad god zapneš, pošalješ pitanje i dobijaš moj konkretan odgovor.
                    <br />
                    Bez opštih saveta i nagađanja.
                    <br />
                    U svakom trenutku znaš šta dalje i zašto.
                  </p>
                </div>
              </div>
            </div>

            {/* 4. Full Package Visual */}
            <div className="mt-8">
              <Image 
                src="/FullMockUp.png" 
                alt="Cijeli paket" 
                width={900} 
                height={620} 
                className="mx-auto w-full rounded-3xl max-w-[900px]" 
              />
            </div>

            {/* 5. Cijena + CTA (divider - zadržavam postojeći) */}
            <div className="space-y-4 text-center" id="offer-section">
              <DoubleChevronDown />
              <p className="text-lg font-bold text-[#a23d52] line-through">Ukupna vrednost svega što dobijaš: 532€</p>
              <h2 className="font-heading text-3xl font-bold text-espresso">Danas ceo paket dobijaš za samo:</h2>
              <p className="mx-auto w-1/2 text-6xl font-extrabold text-wine sm:w-1/5 sm:text-7xl">97€</p>
              <p className="text-lg text-espresso/85 max-w-2xl mx-auto">
                Jednokratno. Bez pretplate. Bez sitnih slova. Trajni pristup + sve buduće nadogradnje.
              </p>
              <div className="mx-auto max-w-xl pointer-events-none">
                <InlineCheckout
                  buttonLabel="Da. Želim poslati signal i doživeti prvi pravi prilazak – 97 €"
                  buttonClassName="w-full rounded-2xl bg-wine px-12 py-[1.1rem] text-[clamp(1rem,2vw,1.125rem)] font-bold uppercase tracking-[0.05em] text-ivory shadow-[0_12px_25px_rgba(26,20,18,0.12)] hover:bg-[#7A3B57] active:translate-y-[1px] active:shadow-[0_8px_18px_rgba(26,20,18,0.1)] transition-all"
                />
              </div>
              {/* Social Proof Image */}
              <div className="mt-4 mb-4 w-full flex justify-center">
                <Image
                  src="/SocialProof.png"
                  alt="Social proof"
                  width={600}
                  height={200}
                  className="w-full sm:w-[40%] mx-auto"
                />
              </div>
              <div className="mt-6 text-center text-base text-espresso/85 max-w-2xl mx-auto">
                <p className="mb-4">
                  Zbog lične mentor podrške i rada s konkretnim situacijama, broj mesta je ograničen na 50 i ova ponuda ne ostaje stalno otvorena.
                  <br />
                  Kad timer istekne, program se zatvara!
                </p>
                <CountdownTimer />
              </div>
            </div>
          </div>
        </Section>

        {/* GARANCIJA Section */}
        <Section bg="white">
          <div className="flex flex-col items-center gap-6 text-center">
            {/* Eyebrow */}
            <p className="text-sm font-heading italic text-wine">
              Uz to imaš i moju
            </p>

            {/* H2 */}
            <h2 className="font-heading text-4xl font-bold text-espresso sm:text-5xl max-w-4xl">
              GARANCIJU <span className="text-wine">PRVOG PRILASKA</span>
            </h2>

            {/* Slika garancije */}
            <Image 
              src="/garancija.png" 
              alt="Garancija" 
              width={280} 
              height={280} 
              className="mx-auto max-w-[280px] mt-4" 
            />

            {/* Tekst garancije */}
            <div className="max-w-[800px] text-left text-lg text-espresso/85 leading-relaxed mt-6 space-y-4">
              <p>
                U prvih 14 dana,<br />
                ako iskreno isprobaš signale barem u tri situacije<br />
                koje ti pokažem u programu (kafić, posao, šetnja, teretana…)<br />
                i ne osetiš baš nikakvu razliku u pažnji, samopouzdanju<br />
                ili interakcijama s muškarcima –
              </p>
              <p>
                pišeš nam mail,<br />
                napišeš da jednostavno nije za tebe i vraćamo ti novac.
              </p>
              <div className="space-y-2 mt-6">
                <p>Bez dokazivanja.</p>
                <p>Bez slanja screenshotova.</p>
                <p>Bez ružnih osećaja.</p>
              </div>
              <p className="font-semibold text-espresso mt-6">
                Sav rizik je na meni, ne na tebi.
              </p>
              <div className="mt-6 space-y-2">
                <p className="font-semibold text-espresso">Zašto?</p>
                <p>
                  Zato što znam da Signali Strasti™ rade.<br />
                  Videla sam ih na Nini, Ani, Maji, Petri, Sari, Martini<br />
                  i na ženama koje nikad same za sebe ne bi rekle<br />
                  da su "tip koji privlači pažnju".
                </p>
              </div>
            </div>
            {/* CTA Button ispod copya na dno */}
            <div className="mt-8 w-full flex justify-center pointer-events-none">
              <CTATrackingWrapper
                href="#offer-section"
                size="lg"
                className="bg-wine text-ivory rounded-2xl px-12 py-[1.1rem] font-bold uppercase tracking-[0.05em] shadow-[0_12px_25px_rgba(26,20,18,0.12)] hover:bg-[#7A3B57] active:translate-y-[1px] active:shadow-[0_8px_18px_rgba(26,20,18,0.1)] transition-all"
                scrollToCheckout
                scrollTargetId="offer-section"
                section="guarantee-section"
              >
                {CTA_TEXT}
              </CTATrackingWrapper>
            </div>
            {/* Social Proof Image */}
            <div className="mt-4 mb-4 w-full flex justify-center">
              <Image
                src="/SocialProof.png"
                alt="Social proof"
                width={600}
                height={200}
                className="w-full sm:w-[40%] mx-auto"
              />
            </div>
          </div>
        </Section>

        {/* Testimonial Block 3 */}
        <Section bg="ivory">
          <div className="flex flex-col items-center gap-4 text-center">
            <h2 className="font-heading text-4xl font-bold text-espresso sm:text-5xl">
              Evo još nekih od reakcija polaznica
            </h2>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 w-full">
              {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
                <Image
                  key={num}
                  src={`/TS-B3-S${num}.png`}
                  alt={`Testimonial ${num}`}
                  width={620}
                  height={420}
                  className="mx-auto w-full rounded-3xl object-contain"
                />
              ))}
            </div>
            {/* CTA Button na dno ispod slika */}
            <div className="mt-6 w-full flex justify-center pointer-events-none">
              <CTATrackingWrapper
                href="#offer-section"
                size="lg"
                className="bg-wine text-ivory rounded-2xl px-12 py-[1.1rem] font-bold uppercase tracking-[0.05em] shadow-[0_12px_25px_rgba(26,20,18,0.12)] hover:bg-[#7A3B57] active:translate-y-[1px] active:shadow-[0_8px_18px_rgba(26,20,18,0.1)] transition-all"
                scrollToCheckout
                scrollTargetId="offer-section"
                section="testimonials-b3-section"
              >
                {CTA_TEXT}
              </CTATrackingWrapper>
            </div>
            {/* Social Proof Image */}
            <div className="mt-4 mb-4 w-full flex justify-center">
              <Image
                src="/SocialProof.png"
                alt="Social proof"
                width={600}
                height={200}
                className="w-full sm:w-[40%] mx-auto"
              />
            </div>
          </div>
        </Section>

        {/* Tko stoji iza Signala Strasti */}
        <Section bg="white">
          <div className="flex flex-col items-center gap-6 text-center">
            {/* H2 */}
            <h2 className="font-heading text-4xl font-bold text-espresso sm:text-5xl">
              Ko stoji iza Signala Strasti?
            </h2>

            {/* Slika */}
            <Image 
              src="/tim2.png" 
              alt="Dunja i tim" 
              width={700} 
              height={520} 
              className="mx-auto w-full rounded-3xl max-w-[700px] mt-6" 
            />

            {/* Copy */}
            <div className="max-w-[800px] text-left text-lg text-espresso/85 leading-relaxed mt-8 space-y-4">
              <p>
                Ja sam Dunja.
              </p>
              <p>
                Zadnjih sedam godina bavim se jednom vrlo specifičnom stvari:<br />
                prvim trenutkom u kojem muškarac odluči hoće li prići ženi ili neće.
              </p>
              <p>
                Ne "sviđa li mu se".<br />
                Ne "je li zgodna".
              </p>
              <p>
                Nego onim tihim unutrašnjim klikom:<br />
                "Smem prići." ili "Prevelik je rizik."
              </p>
              <p>
                Radila sam 1-na-1 i u grupama s više od 600 žena.<br />
                Analizirala preko 1.000 stvarnih muško-ženskih situacija, uživo i na snimkama.
              </p>
              <p>
                Razgovarala s 137 muškaraca iz Hrvatske, Srbije i BiH isključivo o jednom pitanju:<br />
                šta ih zaustavi da priđu ženi koja im se sviđa.
              </p>
              <p>
                Uz dozvolu vlasnika kafića satima sam gledala snimke nadzornih kamera,<br />
                beležila situacije u kojima nije prišao i kasnije pitala:<br />
                "Zašto baš tada nisi?"
              </p>
              <p>
                I odgovor se godinama ponavljao.
              </p>
              <p>
                Muškarac ima instinkt da priđe.<br />
                Ali strah od odbijanja, srama ili pogrešne procene ga zakoči.
              </p>
              <p>
                Ako ne dobije mali, ženstveni signal da je sigurno, ostaje na mestu.
              </p>
              <p>
                Većina žena taj signal nikad ne pošalje.<br />
                Ne zato što su hladne, nezanimljive ili "krive".
              </p>
              <p>
                Nego zato što ih niko nikad nije naučio<br />
                kako izgleda ženski signal koji muškom mozgu kaže:
              </p>
              <p>
                "Sigurno je. Priđi."
              </p>
            </div>

            {/* Završni naglasak */}
            <div className="max-w-[800px] text-left text-lg text-espresso/85 leading-relaxed mt-8 space-y-4">
              <p>
                Signali Strasti™ nisu teorija, ni saveti s interneta.
              </p>
              <p>
                Oni su destilat stvarnih situacija,<br />
                stvarnih žena i stvarnih reakcija muškaraca<br />
                u našoj, balkanskoj kulturi — gde i dalje važi pravilo:
              </p>
              <p>
                "Nemoj ispasti laka. Nemoj ispasti očajna."
              </p>
              <p>
                Ovo nije program za glumu.<br />
                Ovo je prevod muškog jezika odluke na ženski jezik prisutnosti.
              </p>
            </div>
          </div>
        </Section>

        {/* Testimonial Block 4 */}
        <Section bg="ivory">
          <div className="flex flex-col items-center gap-4 text-center">
            <h2 className="font-heading text-4xl font-bold text-espresso sm:text-5xl">
              Još neke od reakcija polaznica:
            </h2>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 w-full">
              {[1, 2, 3, 4, 5, 6, 7].map((num) => (
                <Image
                  key={num}
                  src={`/TS-B4-S${num}.png`}
                  alt={`Testimonial ${num}`}
                  width={620}
                  height={420}
                  className="mx-auto w-full rounded-3xl object-contain"
                />
              ))}
            </div>
            {/* CTA Button na dno ispod slika */}
            <div className="mt-6 w-full flex justify-center pointer-events-none">
              <CTATrackingWrapper
                href="#offer-section"
                size="lg"
                className="bg-wine text-ivory rounded-2xl px-12 py-[1.1rem] font-bold uppercase tracking-[0.05em] shadow-[0_12px_25px_rgba(26,20,18,0.12)] hover:bg-[#7A3B57] active:translate-y-[1px] active:shadow-[0_8px_18px_rgba(26,20,18,0.1)] transition-all"
                scrollToCheckout
                scrollTargetId="offer-section"
                section="testimonials-b4-section"
              >
                {CTA_TEXT}
              </CTATrackingWrapper>
            </div>
          </div>
        </Section>

        <Section bg="white" id="checkout-section">
          <div className="flex flex-col items-center gap-6 text-center text-lg leading-relaxed text-espresso/80">
            <h2 className="font-heading text-4xl font-bold text-espresso sm:text-5xl">Ograničeno na 100 mesta mesečno</h2>
            <Image src="/tim-2.png" alt="Dunja s timom" width={620} height={480} className="mx-auto w-full rounded-3xl sm:w-1/2" />
            <p className="max-w-3xl">
              Zbog mentor podrške i ličnog pristupa, Dunja i tim primaju samo <strong>100 novih korisnica mesečno</strong>.
              Nakon toga se prijave zatvaraju — kako bi se svakoj ženi moglo posvetiti s punom pažnjom.
            </p>
            <p className="max-w-3xl">
              <em>Ako osećaš da je ovo tvoj trenutak, ne čekaj.</em>
            </p>
            <div className="w-full space-y-4 text-lg text-espresso/85">
              <h3 className="font-heading text-2xl font-bold text-espresso">Za koga je ovo?</h3>
              <ul className="space-y-3 text-left">
                {forWho.map((item) => (
                  <li key={item.id} className="flex items-start gap-3">
                    <span className="text-xl text-wine">✔️</span>
                    <span>{item.body}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="text-center pointer-events-none">
              <CTATrackingWrapper
                href="#offer-section"
                size="lg"
                className="bg-wine text-ivory rounded-2xl px-12 py-[1.1rem] font-bold uppercase tracking-[0.05em] shadow-[0_12px_25px_rgba(26,20,18,0.12)] hover:bg-[#7A3B57] active:translate-y-[1px] active:shadow-[0_8px_18px_rgba(26,20,18,0.1)] transition-all"
                scrollToCheckout
                scrollTargetId="offer-section"
                section="for-who-section"
              >
                {CTA_TEXT}
              </CTATrackingWrapper>
              {/* Social Proof Image */}
              <div className="mt-4 mb-4 w-full flex justify-center">
                <Image
                  src="/SocialProof.png"
                  alt="Social proof"
                  width={600}
                  height={200}
                  className="w-full sm:w-[40%] mx-auto"
                />
              </div>
            </div>
          </div>
        </Section>

        <Section bg="ivory">
          <div className="space-y-6 text-center">
            <h2 className="font-heading text-3xl font-bold text-espresso sm:text-4xl">
              Evo još neki od dojmova polaznica s prošlog programa…
            </h2>
            <div className="grid gap-4 md:grid-cols-2">
              {testimonialImages.map((src, index) => (
                <Image
                  key={src}
                  src={src}
                  alt={`Komentar polaznice ${index + 1}`}
                  width={620}
                  height={420}
                  className="mx-auto w-full rounded-3xl sm:w-4/5"
                />
              ))}
            </div>
            <div className="pointer-events-none">
              <CTATrackingWrapper
                href="#offer-section"
                size="lg"
                className="mt-6 bg-wine text-ivory rounded-2xl px-12 py-[1.1rem] font-bold uppercase tracking-[0.05em] shadow-[0_12px_25px_rgba(26,20,18,0.12)] hover:bg-[#7A3B57] active:translate-y-[1px] active:shadow-[0_8px_18px_rgba(26,20,18,0.1)] transition-all"
                scrollToCheckout
                scrollTargetId="offer-section"
                section="testimonials-section"
              >
                {CTA_TEXT}
              </CTATrackingWrapper>
            </div>
            {/* Social Proof Image */}
            <div className="mt-4 mb-4 w-full flex justify-center">
              <Image
                src="/SocialProof.png"
                alt="Social proof"
                width={600}
                height={200}
                className="w-[80%] sm:w-[40%] mx-auto"
              />
            </div>
          </div>
        </Section>

        <Section bg="white">
          <div className="space-y-8">
            <div className="rounded-3xl border border-[#e5e8ef] bg-[#f8f9fb] p-6 shadow-card">
              <h3 className="font-heading text-2xl font-bold text-espresso">Detalji proizvoda</h3>
              <dl className="mt-4 divide-y divide-[#e1e5f2]">
                {productDetails.map((row) => (
                  <div key={row.label} className="grid gap-3 py-3 sm:grid-cols-[180px,1fr]">
                    <dt className="text-sm font-semibold uppercase tracking-[0.2em] text-[#6a6f83]">{row.label}</dt>
                    <dd className="text-base text-espresso/90">{row.value}</dd>
                  </div>
                ))}
              </dl>
            </div>

            <div className="rounded-3xl border border-[#efe0ce] bg-ivory p-6 shadow-card sm:p-8">
              <h3 className="font-heading text-2xl font-bold text-espresso">Najčešće preuziman među:</h3>
              <ul className="mt-5 space-y-4 text-base text-espresso/85">
                {mostDownloaded.map((item) => (
                  <li key={item} className="flex items-center gap-4 rounded-2xl border border-white/70 bg-white px-4 py-3 shadow-card">
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-wine/10 text-wine">✔</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-3xl border border-[#dfe3f0] bg-white p-6 shadow-glow sm:p-8">
              <h3 className="font-heading text-2xl font-bold text-espresso sm:text-3xl">Šta korisnice kažu</h3>
              <p className="mt-4 max-w-2xl text-base leading-relaxed text-espresso/85">
                Korisnice opisuju ovaj vodič kao elegantan, dubok i neverovatno primenjiv u stvarnim situacijama. Najviše ga
                cene jer ne koristi "igre" – nego pomaže ženi da zadrži moć, dok mu pokazuje da je otvorena.
              </p>
            </div>

            <div className="rounded-3xl border border-[#f0e4d8] bg-ivory p-6 shadow-card sm:p-8">
              <h3 className="font-heading text-2xl font-bold text-espresso">Najviše hvaljeno:</h3>
              <ul className="mt-5 grid gap-4 md:grid-cols-2">
                {highlightedPraise.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-4 rounded-2xl border border-white/60 bg-white px-5 py-4 shadow-card"
                  >
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-wine/10 text-wine">✔</span>
                    <span className="text-espresso/90">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8 text-center pointer-events-none">
                <CTATrackingWrapper
                  href="#offer-section"
                  size="lg"
                  className="w-full max-w-md bg-wine text-ivory rounded-2xl px-12 py-[1.1rem] font-bold uppercase tracking-[0.05em] shadow-[0_12px_25px_rgba(26,20,18,0.12)] hover:bg-[#7A3B57] active:translate-y-[1px] active:shadow-[0_8px_18px_rgba(26,20,18,0.1)] transition-all"
                  scrollToCheckout
                  scrollTargetId="offer-section"
                  section="praise-highlights-section"
                >
                  {CTA_TEXT}
                </CTATrackingWrapper>
                {/* Social Proof Image */}
                <div className="mt-4 mb-4 w-full flex justify-center">
                  <Image
                    src="/SocialProof.png"
                    alt="Social proof"
                    width={600}
                    height={200}
                    className="w-full sm:w-[40%] mx-auto"
                  />
                </div>
              </div>
            </div>

            <div className="rounded-3xl border border-[#e1e5f0] bg-[#f8f9fb] p-6 shadow-card sm:p-8">
              <h3 className="font-heading text-3xl font-bold text-espresso">Najbolje recenzije iz Hrvatske</h3>
              <div className="mt-6 flex flex-col gap-6 rounded-2xl border border-[#dbe0ef] bg-white p-5 sm:flex-row sm:items-center sm:justify-between">
                <div className="text-center sm:text-left">
                  <p className="text-4xl font-bold text-espresso">4,7 od 5</p>
                  <p className="mt-2 text-lg text-espresso/80">na temelju 467 recenzija</p>
                  <div className="mt-3 flex justify-center sm:justify-start">
                    <span className="text-2xl text-[#ff9c25]">★★★★★</span>
                  </div>
                </div>
                <div className="flex-1 space-y-2">
                  {[
                    { label: "5 zvjezdica", percent: 78 },
                    { label: "4 zvjezdice", percent: 14 },
                    { label: "3 zvjezdice", percent: 5 },
                    { label: "2 zvjezdice", percent: 2 },
                    { label: "1 zvjezdica", percent: 1 },
                  ].map((row) => (
                    <div key={row.label} className="flex items-center gap-3 text-sm text-espresso/80">
                      <span className="w-24">{row.label}</span>
                      <div className="relative h-3 flex-1 rounded-full bg-[#e6e9f3]">
                        <div className="absolute left-0 top-0 h-full rounded-full bg-wine" style={{ width: `${row.percent}%` }} />
                      </div>
                      <span className="w-10 text-right">{row.percent}%</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="mt-6 space-y-4">
                {amazonReviews.map((review) => (
                  <article key={review.name} className="rounded-2xl border border-[#dfe3f0] bg-white p-5">
                    <p className="font-semibold text-espresso">
                      {review.name} — <span className="text-[#ff9c25]">★★★★★</span>
                    </p>
                    <p className="mt-2 text-base text-espresso/85">{review.body}</p>
                    <button className="mt-3 rounded-full border border-[#cbcfe0] px-4 py-1 text-sm text-espresso/70 hover:border-wine hover:text-wine">
                      Korisno
                    </button>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </Section>

        <Section bg="ivory">
          <div className="space-y-6">
            <h2 className="text-center font-heading text-4xl font-bold text-espresso sm:text-5xl">Najčešća pitanja</h2>
            <div className="space-y-4">
              {faqItems.map((item) => (
                <details key={item.question} className="group rounded-3xl border border-blush/50 bg-white p-5 shadow-card">
                  <summary className="flex cursor-pointer list-none items-center justify-between text-lg font-semibold text-espresso">
                    <span>{item.question}</span>
                    <span className="text-wine transition-transform duration-200 group-open:rotate-45">+</span>
                  </summary>
                  <div className="mt-3 border-t border-blush/40 pt-3 text-base text-espresso/80">{item.answer}</div>
                </details>
              ))}
            </div>
          </div>
        </Section>

        <Section bg="white">
          <div className="max-w-4xl mx-auto space-y-4 text-center">
            <p className="text-lg text-espresso/80">
              <strong>Još nešto...</strong>
            </p>
            <p className="text-lg text-espresso/80">
              Možda nisi izgubila sebe. Možda si <strong>samo izgubila pogled</strong>... koji je čekao pravi signal.
            </p>
            <p className="text-lg text-espresso/80">
              <u>Pošalji ga danas.</u>
            </p>
            <div className="pointer-events-none">
              <CTATrackingWrapper
                href="#offer-section"
                size="lg"
                className="bg-wine text-ivory rounded-2xl px-12 py-[1.1rem] font-bold uppercase tracking-[0.05em] shadow-[0_12px_25px_rgba(26,20,18,0.12)] hover:bg-[#7A3B57] active:translate-y-[1px] active:shadow-[0_8px_18px_rgba(26,20,18,0.1)] transition-all"
                scrollToCheckout
                scrollTargetId="offer-section"
                section="final-cta-section"
              >
                {CTA_TEXT}
              </CTATrackingWrapper>
            </div>
            {/* Social Proof Image */}
            <div className="mt-4 mb-4 w-full flex justify-center">
              <Image
                src="/SocialProof.png"
                alt="Social proof"
                width={600}
                height={200}
                className="w-[80%] sm:w-[40%] mx-auto"
              />
            </div>
          </div>
        </Section>
      </main>

      <footer className="bg-[#1B1A1A] text-[#F8F5F0]">
        <div className="mx-auto flex max-w-[1100px] flex-col gap-6 px-4 py-12 sm:px-6">
          <div className="space-y-2 text-center sm:text-left">
            <p className="text-xs font-semibold uppercase tracking-[0.4em] text-[#D7C4B7]">Signali Strasti</p>
            <p className="text-lg text-[#F8F5F0]/80">Bez aplikacija. Bez igrica. Samo prvi signal koji ga poziva da priđe.</p>
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
          <p className="text-center text-xs text-[#F8F5F0]/60 sm:text-left">© {new Date().getFullYear()} Signali Strasti. Sva prava pridržana.</p>
        </div>
      </footer>
    </div>
    </>
  );
}


