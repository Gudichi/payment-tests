import type { Metadata } from "next";
import Image from "next/image";
import { Check } from "lucide-react";
import { CTAButton } from "@/components/CTAButton";
import { Section } from "@/components/Section";
import { InlineCheckout } from "@/components/InlineCheckout";
import { productInfo } from "@/lib/brand";

const CTA_TEXT = "Da, želim pristupiti SIGNALIMA STRASTI";

export const metadata: Metadata = {
  title: "Signali Strasti — Program koji budi njegov prvi korak",
  description:
    "Aktiviraj tihi govor tijela koji mu daje zeleno svjetlo. Signali Strasti pokazuje ti kako u par minuta dnevno privući pažnju kvalitetnih muškaraca.",
};

const steps = [
  {
    title: "Otvori aplikaciju",
    description:
      "Čim uđeš, sve te čeka spremno. Dobivaš kompletan popis Signala i odmah vidiš koji signal se koristi gdje — u kafiću, na poslu, u teretani, u trgovini, u šetnji…",
    image: "/Gif-1.gif",
    alt: "Pregled aplikacije Signali Strasti",
  },
  {
    title: "Aktiviraj signal (1 min)",
    description:
      "Ne mijenjaš rutinu — izabereš 3 mjesta na kojima se već krećeš i aplikacija ti kaže koji je signal za to mjesto. Kafić, put do posla ili park — sve je obuhvaćeno.",
    image: "/aktiviraj-signale.png",
    alt: "Aktiviranje signala",
  },
  {
    title: "Osjeti kako te gledaju drugačije",
    description:
      "Svaki signal je mikro gesta ili stav tvog tijela. Dovoljno suptilan da se osjeća prirodno, a dovoljno moćan da muškarci nesvjesno reagiraju. Ne moraš govoriti niti glumiti.",
    image: "/gledadrukcije.webp",
    alt: "Muškarac primjećuje ženu",
  },
  {
    title: "Podijeli što si primijetila",
    description:
      "Pogledi. Osmijesi. Prilasci. Tvoj govor tijela preuzima posao. Ako želiš, javi mentorici u aplikaciji kako je prošlo — ili jednostavno zabilježi promjenu za sebe.",
    image: "/Podjeli-nauceno.png",
    alt: "Podijeli iskustvo u aplikaciji",
  },
];

const knowledgePoints = [
  "Kako tvoj govor tijela (ne riječi!) poziva muškarce da ti priđu",
  "Koje su najčešće greške koje žene rade kad žele izgledati „otvoreno“",
  "Kako prepoznati idealan trenutak za slanje signala",
  "Što točno u tebi čita muški mozak kao „zeleno svjetlo“",
  "Kako ostati svoja i prisutna — bez igrica i glume",
];

const bonuses = [
  {
    title: "Bonus 1 — Prvi dojam koji ostaje s njim",
    image: "/Bonus-1.png",
    description:
      "3 neverbalna detalja + 2 rečenice zbog kojih pomisli: “Ona je… drugačija.” (Ovaj vodič se inače prodaje zasebno za 97€, ovdje ga dobivaš unutar paketa.)",
  },
  {
    title: "Bonus 2 — Neka on napravi prvi korak",
    image: "/Bonus-2.png",
    description: "Kako signalizirati otvorenost, a da on osjeti da sve dolazi od njega. (67€, uključeno bez dodatne naplate.)",
  },
  {
    title: "Bonus 4 — Poruka koja ga vraća, čak i ako se povukao",
    image: "/Bonus-4.png",
    description: "Kada znaš što reći (i kako), njegova pažnja se vraća spontano. (Vrijednost 77€, sada dio paketa.)",
  },
  {
    title: "Bonus 5 — Prva kava koju pamti danima",
    image: "/Bonus-5.png",
    description: "Bez glume. Bez skripti. Samo ti — u svom najsvježijem, najprivlačnijem izdanju. (87€, uključen.)",
  },
];

const forWho = [
  {
    id: "nevidljive",
    body: (
      <>
        Žene koje se osjećaju <strong>nevidljivo</strong> u svakodnevnim situacijama — i žele ponovno osjetiti da netko{" "}
        <em>spontano primijeti njihovu prisutnost.</em>
      </>
    ),
  },
  {
    id: "ghosting",
    body: (
      <>
        One koje su umorne od ghostinga, aplikacija i \"pick me\" kulture — i žele <u>stvarne razgovore</u> bez igrica i
        čekanja.
      </>
    ),
  },
  {
    id: "autenticnost",
    body: (
      <>
        One koje ne žele glumiti, nego vratiti svoju <strong>prirodnu privlačnost</strong> i toplinu — bez skripti.
      </>
    ),
  },
  {
    id: "kemija",
    body: (
      <>
        One koje žele kemiju u stvarnom životu, ne na ekranu — i žele da <em>on</em> napravi prvi korak čim osjeti signal.
      </>
    ),
  },
];

const testimonialImages = ["/ts-1.png", "/ts-2.png", "/ts-3.png", "/ts-4.png", "/ts-5.png"];

const productDetails = [
  { label: "Trajanje", value: "cca 1h 20min čiste primjene u svakodnevnim situacijama" },
  { label: "Format", value: "Digitalni vodič + Signal kartice (PDF & interaktivno)" },
  { label: "Autorica", value: "Dunja Kramarić (autorica knjige “Što muškarci zapravo žele”)" },
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

const amazonReviews = [
  {
    name: "Maja Šimunović",
    body:
      "Najbolje u svemu je što ne moraš ništa glumit. Samo lagano promijeniš energiju i odjednom te ljudi primijete. Ja sam imala prvi “prilazak” nakon 48 sati.",
  },
  {
    name: "Ivana Leko",
    body:
      "Kupila sam čisto iz znatiželje, nisam očekivala ništa… i evo me sad pričam svim curama. Radim u butiku i dobijam više kontakta očima nego ikad prije.",
  },
  {
    name: "Laura Dropulić",
    body:
      "Ono što stalno ponavljam frendicama — ne radi ovo samo da te muškarci gledaju, nego da ti sebe drugačije osjetiš. Meni je nakon nekoliko dana došla neka nova sigurnost.",
  },
  {
    name: "Ema Kušan",
    body:
      "Odličan vodič! Jednostavno, brzo, i stvarno vidiš rezultate. Meni je najviše pomoglo objašnjenje zašto signali rade. Nekako sve sjedne u glavu.",
  },
  {
    name: "Valentina Rožić",
    body:
      "Meni je ovo promijenilo ritam izlazaka. Ne gledam više tko će prići — jer sad stvarno priđu. 😅 Posebno kad ubacim 8. signal, to je ludilo.",
  },
  {
    name: "Martina Birač",
    body:
      "Najbolji dio je lokacijska primjena. Inače radim na recepciji i bilo mi je teško znat kad šta koristiti. Sad sve imam jasno i mogu lagano primijenit.",
  },
  {
    name: "Paula Gregurić",
    body:
      "Nisam mislila da će ovako brzo raditi. Prvu malu promjenu sam vidjela drugi dan kad sam koristila signal u uredu. Muški me počeli malo više gledat, onako toplo.",
  },
  {
    name: "Jelena Legac",
    body:
      "Osjeti se razlika u energiji, stvarno. Nije ni čudo da rade kad je toliko suptilno da ne može bit neugodno. Meni jako prirodno dođe.",
  },
  {
    name: "Dora Vuković",
    body:
      "Ovo je najbolji digitalni proizvod koji sam kupila ove godine. Čisto jer mi je vratilo neku ženstvenost koju sam godinama potiskivala.",
  },
  {
    name: "Tihana Pavlić",
    body:
      "Odlična stvar! I sve izgleda elegantno, lako i nenametljivo. Ako tražiš nešto što stvarno možeš odmah primijenit — ovo je to.",
  },
];

const faqItems = [
  {
    question: "Za koliko brzo mogu očekivati prve rezultate?",
    answer:
      "Većina korisnica prijavi prvu promjenu pogleda, osmijeha ili pristupa unutar 48–72 sata. Neke čak i isti dan — sve ovisi koliko često koristiš signale.",
  },
  {
    question: "Trebam li biti ekstrovert da mi ovo radi?",
    answer:
      "Ne. Signali su dizajnirani da funkcioniraju i kod najtiših žena. Diskretni su, prirodni i ne traže nikakvu glumu.",
  },
  {
    question: "Hoće li izgledati kao da “flertam”?",
    answer:
      "Ne, signali nisu koketiranje. Oni samo otvaraju prostor da muškarac procijeni da mu daješ zeleno svjetlo — na vrlo prirodan način.",
  },
  {
    question: "Što ako mi se nitko ne javi ni nakon par dana?",
    answer:
      "To je normalno — i ovisi o tome gdje se krećeš. Najčešće žene vide promjenu čim primijene signal u pravom trenutku i pravoj situaciji. Daj si 3–7 dana primjene i vidjet ćeš razliku.",
  },
  {
    question: "Je li program namijenjen ženama koje već imaju partnera?",
    answer:
      "Da — mnoge ga koriste da vrate toplinu i pažnju u odnos. Signali nisu napadni i ne narušavaju vezu, nego bude ženstvenost i mušku inicijativu.",
  },
  {
    question: "Moram li se posebno sređivati da signali djeluju?",
    answer:
      "Ne moraš. Signali rade i u trenirci i u haljini — jer se baziraju na govoru tijela, ne na izgledu.",
  },
  {
    question: "Hoće li mi ovo pomoći ako sam dugo “van igre”?",
    answer:
      "Da — zapravo, takvim ženama najbrže radi. Signali vraćaju prirodnu ženstvenu energiju koja je uvijek tu, samo malo uspavana.",
  },
  {
    question: "Je li prikladno koristiti Signale Strasti na poslu?",
    answer:
      "Da, ali u mjeri. Za ured su predviđeni posebno prilagođeni signali koji su profesionalni i vrlo suptilni.",
  },
  {
    question: "Koliko dnevno treba da sve savladam?",
    answer: "1 minuta. Program je namijenjen da se uklopi u tvoj realni dan, bez ikakvog opterećenja.",
  },
  {
    question: "Što ako sam jako nervozna oko muških prilazaka?",
    answer:
      "Zato signali i postoje — oni rade dio posla za tebe. Ne moraš govoriti, inicirati ni poduzimati ništa neugodno. Samo otvori vrata.",
  },
  {
    question: "Jesu li signali sigurni i nenametljivi?",
    answer:
      "Apsolutno. Sve je zasnovano na prirodnom neverbalnom jeziku koji muškarci instinktivno čitaju, a ne na trikovima.",
  },
  {
    question: "Hoće li mi ovo pomoći da privučem kvalitetnije muškarce?",
    answer: "Da. Muškarci koji imaju samopouzdanje i jasnu namjeru najbrže reagiraju na ovakve signale.",
  },
  {
    question: "Što ako živim u manjem gradu?",
    answer:
      "Nema veze. Signali su napravljeni tako da djeluju gdje god postoje ljudi — kafić, trgovina, park, posao.",
  },
  {
    question: "Mogu li primijeniti signale i preko poruka?",
    answer:
      "Da — zato uključuješ “Kako pisati da te poželi vidjeti”, koji pomaže da se interes održi i ubrza prvi susret.",
  },
  {
    question: "Je li teško pogoditi pravi trenutak za signal?",
    answer:
      "Ne, aplikacija te vodi. Dobiješ jasne primjere i situacije — već nakon 2–3 dana to ti ide potpuno prirodno.",
  },
  {
    question: "Je li ovo manipulacija?",
    answer:
      "Ne. Signali su samo način da razjasniš ono što već osjećaš, umjesto da djeluješ zatvoreno ili nezainteresirano.",
  },
  {
    question: "Što ako sam introvert i ne volim previše pažnje?",
    answer:
      "Savršeno — introvertirane žene obično imaju najljepšu, najsubtilniju energiju. Signali pojačavaju ono što već imaš, ne guraju te u spotlight.",
  },
  {
    question: "Mogu li pogriješiti s primjenom signala?",
    answer: "Ne možeš. I ako ga napraviš “nespretno”, muškarac će ga i dalje osjetiti kao toplu otvorenost.",
  },
  {
    question: "Može li mi ovo pomoći ako sam razvedena / u zrelijoj dobi?",
    answer:
      "Da — mnoge žene 35+ i 40+ prijavljuju izuzetno brze rezultate jer im prirodna elegancija već radi u korist.",
  },
  {
    question: "Hoće li se muškarci ponašati drugačije čim počnem koristiti signale?",
    answer:
      "Da, vrlo vjerojatno. Najčešće se odmah mijenja kontakt očima, smijeh, način na koji prilaze i koliko su sigurni u sebe.",
  },
  {
    question: "Što ako nisam dugo osjetila kemiju?",
    answer:
      "Signali Strasti vraćaju tvoj prirodan magnetizam, pa kemija postaje posljedica — ne nešto što moraš loviti.",
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
  mainEntity: faqItems.map((item) => ({
    "@type": "Question",
    name: item.question,
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
        🇭🇷 700+ žena u Hrvatskoj već koriste Signale Strasti 🇭🇷
      </div>
      <main className="space-y-16 py-6 sm:space-y-24 sm:py-12">
        <section className="bg-ivory px-4 py-10 text-espresso sm:px-6 sm:py-14">
          <div className="mx-auto flex w-full max-w-4xl flex-col items-center text-center">
            <h1 className="font-heading text-3xl font-bold leading-tight sm:text-[44px] sm:leading-tight">
              Kako Žene u Hrvatskoj Privlače Pažnju Kvalitetnih Muškaraca — Bez Filtera, Aplikacija ili Igrica —
              uz Jedan Signal o Kojem Nitko Ne Priča
            </h1>
            <p className="mt-6 max-w-3xl text-base leading-relaxed text-espresso/80 sm:text-xl">
              <strong>Ne moraš mijenjati sebe.</strong> Samo ponovno aktiviraj ono što muškarci već nesvjesno traže. Ovo je
              program za žene koje žele da ih napokon u masi primijete <em>kvalitetni muškarci.</em>
            </p>
            <div className="mt-8 w-full sm:w-1/2">
              <Image
                src="/Hero1.png"
                alt="Žena koja privlači pažnju"
                width={960}
                height={620}
                priority
                className="w-full rounded-3xl mx-auto"
              />
            </div>
            <div className="mt-6 w-full sm:w-2/5 sm:self-end">
              <Image
                src="/SocialProof.png"
                alt="Social proof Signali Strasti"
                width={1100}
                height={220}
                className="w-full rounded-2xl mx-auto"
              />
            </div>
          </div>
        </section>

        <Section bg="white">
          <div className="mx-auto flex max-w-5xl flex-col items-center gap-6 text-center text-lg leading-relaxed text-espresso/90">
            <div className="space-y-4 max-w-3xl">
              <h2 className="text-sm font-semibold uppercase tracking-[0.35em] text-cherry">Piše: Dunja Kramarić</h2>
              <p>
                <em>Ćao,</em> Ako si se ikad dotjerala, izašla iz kuće, a onda se vratila s osjećajem da te nitko nije ni{" "}
                <u>pogledao...</u>
              </p>
              <p>
                Ili još gore — da su te pogledali, ali da to nisu bili muškarci koji ti baš preferiraš… Onaj s TikTok
                frizurom. Onaj koji priđe s “di si mala”. Onaj koji ti reagira na story s 🔥 i nestane…
              </p>
              <p className="font-heading text-2xl font-bold text-espresso">Sigurno si barem jednom dobila ovakav komentar:</p>
            </div>
            <Image src="/komentari.png" alt="Komentari polaznica" width={720} height={640} className="mx-auto w-3/5 rounded-3xl sm:w-1/2" />
            <div className="space-y-4 max-w-3xl">
              <p>
                <strong>Znam</strong> da ti možeš privući pažnju i znam da možeš pronaći muškarca…
              </p>
              <p>
                Ali ti ne tražiš bilo kakvog, ti tražiš muškarca koji zna što vidi — i zna što želi. <em>I znaš što je
                najljepše?</em> U 90% slučajeva znaš prepoznati takvog kad ga vidiš…
              </p>
              <p>
                Sad je vrijeme da on prepozna tebe. Ne riječima. Ne skriptom. Ne glumom. Već s tihim signalom zbog kojeg
                se okrene, zastane... i poželi prići.
              </p>
            </div>
          </div>
        </Section>

        <Section bg="ivory">
          <div className="mx-auto flex max-w-5xl flex-col items-center gap-6 text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-cherry">PAZI:</p>
            <h2 className="font-heading text-3xl font-bold text-espresso sm:text-4xl">Muškarci i dalje žele prići, ali…</h2>
            <Image src="/muskarci-zele-prici.png" alt="Muškarci žele prići" width={720} height={560} className="mx-auto w-full rounded-3xl sm:w-1/2" />
            <div className="space-y-4 text-lg leading-relaxed text-espresso/80 max-w-3xl">
              <p>
                Danas — ako on nije 99% siguran da ga nećeš odbiti, radije ne napravi ništa. Nisu nesigurni. Samo su naučeni
                da bez jasnog signala — ispadaju čudaci, napadni ili “nepozvani”.
              </p>
              <p>
                A ako im suptilno pokažeš “u redu je, možeš” — njihov mozak to registrira kao zeleno svjetlo. Zato sam
                stvorila Signale Strasti — digitalni mikro-program koji ti svaki dan pokaže jednu malu stvar koju možeš
                napraviti... i doživjeti promjenu.
              </p>
            </div>
          </div>
        </Section>

        <Section bg="white">
          <div className="mx-auto flex max-w-5xl flex-col items-center gap-8 text-center">
            <h2 className="font-heading text-3xl font-bold text-espresso sm:text-4xl">
              Evo kako ćeš privući kvalitetnog muškarca u samo 7 dana — kroz 4 koraka koji dolaze gotovo neprimjetno
            </h2>
            <div className="flex w-full flex-col gap-6">
              {steps.map((step, index) => (
                <div key={step.title} className="space-y-4 rounded-3xl bg-ivory/70 p-6 text-center">
                  <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cherry/90">
                    <span className="font-heading italic">Korak 0{index + 1}</span>
                  </p>
                  <h3 className="font-heading text-2xl font-bold">{step.title}</h3>
                  <Image src={step.image} alt={step.alt} width={560} height={360} className="mx-auto w-full rounded-3xl sm:w-1/2" />
                  <p className="text-base leading-relaxed text-espresso/80">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </Section>

        <Section bg="ivory">
          <div className="mx-auto flex max-w-5xl flex-col items-center gap-6 text-center">
            <h2 className="font-heading text-3xl font-bold text-espresso sm:text-4xl">
              Što ćeš znati o sebi… što većina žena nikada ne otkrije
            </h2>
            <Image src="/hero-2.png" alt="Samopouzdana žena" width={720} height={640} className="mx-auto w-full rounded-3xl sm:w-1/2" />
            <ul className="space-y-3 text-left text-lg text-espresso/85">
              {knowledgePoints.map((point) => (
                <li key={point} className="flex items-start gap-3">
                  <Check className="mt-1 h-5 w-5 text-cherry" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </Section>

        <Section bg="white">
          <div className="mx-auto flex max-w-5xl flex-col items-center gap-6 text-center text-lg leading-relaxed text-espresso/85">
            <h2 className="font-heading text-3xl font-bold text-espresso sm:text-4xl">Tko stoji iza Signala Strasti?</h2>
            <Image src="/Tim.png" alt="Dunja i tim" width={680} height={520} className="mx-auto w-full rounded-3xl sm:w-1/2" />
            <p className="max-w-3xl">
              Ja sam Dunja, godinama promatram kako muškarci uistinu reagiraju kad im se neka žena svidi... i što se zapravo
              događa prije nego priđu.
            </p>
            <p className="max-w-3xl">
              Specijalistica sam za neverbalnu komunikaciju i već 10 godina pomažem ženama da vrate ono što su mislile da su
              izgubile: svoju prisutnost, magnetizam i sigurnost u vlastito tijelo.
            </p>
            <p className="max-w-3xl">
              Autorica sam knjige „Što muškarci zapravo žele“, i gostovala sam na brojnim televizijama gdje sam govorila o
              onome što se ne kaže naglas: što privlači, a što gasi mušku inicijativu.
            </p>
            <p className="max-w-3xl">
              “Signali Strasti” nisu proizvod. To je rezultat mog rada sa stvarnim ženama koje nisu htjele glumiti, ni igrati
              igrice, ni biti nečije “rješenje”. One su samo htjele da ih se opet vidi.
            </p>
          </div>
        </Section>

        <Section bg="ivory">
          <div className="mx-auto flex max-w-5xl flex-col gap-6 text-center">
            <h3 className="font-heading text-3xl font-bold text-espresso">Dojmovi polaznica s prošlog programa</h3>
            <div className="grid gap-4 sm:grid-cols-2">
              {["/Taf-1.png", "/Taf-2.png", "/Taf-3.png", "/Taf-4.png"].map((src) => (
                <Image key={src} src={src} alt="Komentar polaznice" width={620} height={420} className="mx-auto w-full rounded-3xl sm:w-4/5" />
              ))}
            </div>
          </div>
        </Section>

        <Section id="program" bg="white">
          <div className="mx-auto flex max-w-5xl flex-col gap-8 text-center text-espresso">
            <h2 className="font-heading text-3xl font-bold sm:text-4xl">
              Alat koji svakog dana tiho uključuje tvoju privlačnost — <em className="text-cherry">i pokreće njegov prvi korak</em>
            </h2>
            <p className="font-heading text-xl uppercase tracking-[0.35em]">
              PROGRAM <span className="italic text-cherry">Signali Strasti</span>
            </p>
            <Image src="/FullProduct.png" alt="Program Signali Strasti" width={900} height={620} className="mx-auto w-full sm:w-1/2" />
            <ul className="mx-auto max-w-3xl space-y-3 text-left text-base text-espresso/90">
              {[
                "17 mikro-signala koji nesvjesno pozivaju njegovu pažnju (i daju mu dozvolu da ti priđe)",
                "1-minutni dnevni ritual koji možeš raditi gdje god jesi (diskretno, prirodno)",
                "Objašnjenja zašto svaki signal djeluje (da se ne pitaš: \"Radim li ovo bezveze?\")",
                "Mentor podrška ako želiš diskretnu provjeru ili samo podijeliti kako je prošlo",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <Check className="mt-1 h-5 w-5 text-cherry" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <div className="space-y-4 text-left text-base text-espresso/85">
              <h3 className="text-center text-2xl font-heading font-bold">Bonusi uključeni odmah</h3>
              <div className="space-y-6">
                {bonuses.map((bonus) => {
                  const [labelText, bonusHeading] = bonus.title.split(" — ");
                  return (
                    <div key={bonus.title} className="space-y-3 text-center">
                      <p className="text-sm font-semibold uppercase tracking-[0.35em] text-cherry">
                        <span className="font-heading italic">{labelText}</span>
                      </p>
                      <h4 className="font-heading text-xl font-bold">{bonusHeading ?? bonus.title}</h4>
                      <Image
                        src={bonus.image}
                        alt={bonus.title}
                        width={720}
                        height={420}
                        className="mx-auto w-3/5 rounded-3xl sm:w-1/2"
                      />
                      <p>{bonus.description}</p>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="space-y-4 text-center">
              <h3 className="font-heading text-3xl font-bold text-espresso">Cijeli paket — dostupan odmah</h3>
              <p className="text-lg text-espresso/80">Ukupna vrijednost svega što dobivaš: 532€</p>
              <p className="text-6xl font-bold text-cherry">17€</p>
              <div className="mx-auto max-w-xl">
                <InlineCheckout
                  buttonLabel={CTA_TEXT}
                  buttonClassName="w-full rounded-3xl bg-[#1C7C7D] px-8 py-5 text-base font-semibold uppercase tracking-wide text-ivory shadow-card transition hover:bg-[#165a5c]"
                />
              </div>
            </div>
          </div>
        </Section>

        <Section bg="white" id="checkout-section">
          <div className="mx-auto flex max-w-5xl flex-col items-center gap-6 text-center text-lg leading-relaxed text-espresso/80">
            <h2 className="font-heading text-3xl font-bold text-espresso sm:text-4xl">Ograničeno na 100 mjesta mjesečno</h2>
            <Image src="/tim-2.png" alt="Dunja s timom" width={620} height={480} className="mx-auto w-full rounded-3xl sm:w-1/2" />
            <p className="max-w-3xl">
              Zbog mentor podrške i osobnog pristupa, Dunja i tim primaju samo <strong>100 novih korisnica mjesečno</strong>.
              Nakon toga se prijave zatvaraju — kako bi se svakoj ženi moglo posvetiti s punom pažnjom.
            </p>
            <p className="max-w-3xl">
              <em>Ako osjećaš da je ovo tvoj trenutak, ne čekaj.</em>
            </p>
            <div className="w-full space-y-4 text-lg text-espresso/85">
              <h3 className="font-heading text-2xl font-bold text-espresso">Za koga je ovo?</h3>
              <ul className="space-y-3 text-left">
                {forWho.map((item) => (
                  <li key={item.id} className="flex items-start gap-3">
                    <span className="text-xl text-cherry">✔️</span>
                    <span>{item.body}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="text-center">
              <CTAButton
                href="#checkout-section"
                size="lg"
                className="bg-[#1C7C7D] text-ivory hover:bg-[#165a5c]"
                scrollToCheckout
              >
                {CTA_TEXT}
              </CTAButton>
            </div>
          </div>
        </Section>

        <Section bg="ivory">
          <div className="mx-auto max-w-5xl space-y-6 text-center">
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
            <CTAButton
              href="#checkout-section"
              size="lg"
              className="mt-6 bg-[#1C7C7D] text-ivory hover:bg-[#165a5c]"
              scrollToCheckout
            >
              {CTA_TEXT}
            </CTAButton>
          </div>
        </Section>

        <Section bg="white">
          <div className="mx-auto max-w-5xl space-y-8">
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
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-cherry/10 text-cherry">✔</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-3xl border border-[#dfe3f0] bg-white p-6 shadow-glow sm:p-8">
              <h3 className="font-heading text-2xl font-bold text-espresso sm:text-3xl">Što korisnice kažu</h3>
              <p className="mt-4 max-w-2xl text-base leading-relaxed text-espresso/85">
                Korisnice opisuju ovaj vodič kao elegantan, dubok i nevjerojatno primjenjiv u stvarnim situacijama. Najviše ga
                cijene jer ne koristi “igre” – nego pomaže ženi da zadrži moć, dok mu pokazuje da je otvorena.
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
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-cherry/10 text-cherry">✔</span>
                    <span className="text-espresso/90">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8 text-center">
                <CTAButton
                  href="#checkout-section"
                  size="lg"
                  className="w-full max-w-md bg-[#1C7C7D] text-ivory hover:bg-[#165a5c]"
                  scrollToCheckout
                >
                  {CTA_TEXT}
                </CTAButton>
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
                        <div className="absolute left-0 top-0 h-full rounded-full bg-cherry" style={{ width: `${row.percent}%` }} />
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
                    <button className="mt-3 rounded-full border border-[#cbcfe0] px-4 py-1 text-sm text-espresso/70 hover:border-cherry hover:text-cherry">
                      Korisno
                    </button>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </Section>

        <Section bg="ivory">
          <div className="mx-auto max-w-5xl space-y-6">
            <h2 className="text-center font-heading text-4xl font-bold text-espresso">Najčešća pitanja</h2>
            <div className="space-y-4">
              {faqItems.map((item) => (
                <details key={item.question} className="group rounded-3xl border border-blush/50 bg-white p-5 shadow-card">
                  <summary className="flex cursor-pointer list-none items-center justify-between text-lg font-semibold text-espresso">
                    <span>{item.question}</span>
                    <span className="text-cherry transition-transform duration-200 group-open:rotate-45">+</span>
                  </summary>
                  <div className="mt-3 border-t border-blush/40 pt-3 text-base text-espresso/80">{item.answer}</div>
                </details>
              ))}
            </div>
          </div>
        </Section>

        <Section bg="white">
          <div className="mx-auto max-w-4xl space-y-4 text-center">
            <p className="text-lg text-espresso/80">
              <strong>Još nešto...</strong>
            </p>
            <p className="text-lg text-espresso/80">
              Možda nisi izgubila sebe. Možda si <strong>samo izgubila pogled</strong>... koji je čekao pravi signal.
            </p>
            <p className="text-lg text-espresso/80">
              <u>Pošalji ga danas.</u>
            </p>
            <CTAButton
              href="/prijava"
              size="lg"
              className="bg-cherry text-ivory hover:bg-cherry/90"
              scrollToCheckout
            >
              {CTA_TEXT}
            </CTAButton>
          </div>
        </Section>
      </main>

      <footer className="bg-[#1B1A1A] text-[#F8F5F0]">
        <div className="mx-auto flex max-w-5xl flex-col gap-6 px-6 py-12">
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
  );
}
