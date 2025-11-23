import type { Metadata } from "next";
import Image from "next/image";
import Stripe from "stripe";
import { Section } from "@/components/Section";
import { CTAButton } from "@/components/CTAButton";
import { OneClickUpsellButton } from "@/components/one-click-upsell";
import { EnsurePaymentIntentParam } from "@/components/payment-intent-sync";
import { Oto1Tracking } from "./Oto1Tracking";
import { Oto1CTAGroup } from "./Oto1CTAGroup";

export const metadata: Metadata = {
  title: "Kompas Strasti™ — One Time Offer",
  description:
    "Dodatni vodič koji otkriva je li on zreo ili se samo igra. Dostupno samo nakon Signala Strasti™.",
};

const PRIMARY_LABEL =
  "Da, želim znati tko je stvarno zreo — prije nego uopće uđe pod moju kožu. Puni pristup Kompasu Strasti™ i svim bonusima za 37 € – odmah.";
const DECLINE_LABEL =
  "Ne, hvala. Radije riskiram da opet mjesecima nagađam tko je on — i možda ponovno izgubim najvrijednije godine na pogrešnog.";

const stepItems = [
  {
    label: "Korak 1",
    title: "Otvori aplikaciju",
    body:
      "Sve je organizirano po 4 faze odnosa. Odaberi gdje se nalazite — i pusti Kompas da vodi dalje.",
  },
  {
    label: "Korak 2",
    title: "Primijeni kviz uživo",
    body:
      "U svakoj fazi dobivaš 3 pitanja i 3 ponašanja za promatranje. Samo pusti razgovor da teče.",
  },
  {
    label: "Korak 3",
    title: "Kompas ti odmah daje signal",
    body:
      "🟢 Zreo | 🟡 Nesiguran | 🔴 Player — sve temeljem njegovih odgovora i ponašanja.",
  },
  {
    label: "Korak 4",
    title: "Prati faze",
    body:
      "Kako odnos napreduje, otvaraš sljedeću fazu. Sve se događa u stvarnom vremenu, bez nagađanja.",
  },
];



const offerItems = [
  {
    title: "Kviz kroz 4 faze odnosa",
    body:
      "Dobivaš točno strukturiran kviz koji koristiš dok odnos napreduje — prva poruka, dopisivanje i dogovor izlaska, prvi dejt, prvih mjesec dana. U svakoj fazi znaš što promatrati, što pitati i kako dobiti jasan emocionalni profil muškarca.",
  },
  {
    title: "Interpretacijski vodič “Zeleno, Žuto, Crveno”",
    body: "Praktično objašnjenje kako tumačiti njegove odgovore, ponašanja i nijanse komunikacije — bez da se izgubiš u analiziranju.",
  },
];

const bonuses = [
  {
    title: "Bonus 1 - Crveni Zastavnik™",
    body: "12 suptilnih ponašanja koja ti jasno govore da on nije ozbiljan. Checklist za brzo donošenje odluka.",
  },
  {
    title: "Bonus 2 - 7 rečenica koje ga emocionalno razotkrivaju",
    body: "Copy-paste fraze koje koristiš u razgovoru. Njegov odgovor otkriva sve.",
  },
  {
    title: "Bonus 3 - Player vs. Zreo muškarac",
    body: "Screenshot biblioteka stvarnih poruka s analizama. Znaš iz prve tko je tko.",
  },
  {
    title: "Bonus 4 - 5 emocionalnih rupa",
    body: "Razlikuj emocionalno dostupnog muškarca od onog koji traži terapeuta, a ne partnericu.",
  },
];

const forWhoList = [
  "Umorna si od frajera koji zvuče ozbiljno… dok ne postane stvarno.",
  "Privučeš pažnju — ali ne znaš tko je stvarno spreman za vezu.",
  "Znaš da imaš intuiciju, ali ti stalno nešto “promakne”.",
  "Ne želiš više nagađati njegove namjere na temelju poruka.",
  "Dosta ti je emocionalne magle, mrvica pažnje i miješanih signala.",
  "Ne želiš ponovno izgubiti mjesece na nekoga tko se samo igra.",
  "Znaš da ti treba alat, a ne još jedan savjet tipa “pusti neka se potrudi”.",
];

const detailRows = [
  {
    label: "Trajanje",
    value: "Oko 1h 20min — bez suhe teorije. Samo primjenjivo znanje koje koristiš odmah.",
  },
  {
    label: "Format",
    value: "Digitalni vodič + emocionalni kviz kroz 4 faze odnosa (PDF + interaktivni moduli).",
  },
  {
    label: "Autorica",
    value: "Dunja M., stručnjakinja za muško-ženske odnose i autorica “Signala Strasti™”.",
  },
  {
    label: "Dizajniran za",
    value: "Ženu koja ne želi više nagađati — nego znati s kim ima posla.",
  },
  {
    label: "Emocionalni ton",
    value: "Empatično. Jasno. Osnažujuće.",
  },
  {
    label: "Jezik",
    value: "Hrvatski 🇭🇷",
  },
  {
    label: "Posebno koristan u",
    value: "Fazi upoznavanja, dopisivanja i prvih dejtova — kad još nije prekasno da izađeš.",
  },
  {
    label: "Vrijednost paketa",
    value: "172 € – uključeno bez dodatne naplate 💎",
  },
  {
    label: "Ocjena korisnica",
    value: "4.8 / 5 ⭐",
  },
];

const mostDownloaded = [
  "Ženama 25–45 koje žele diskretan, ali moćan ljubavni utjecaj",
  "Klijenticama koje žele psihološku prednost u igri privlačnosti",
  "Korisnicama koje su umorne od skripti — i žele elegantnu autentičnost",
];

const praiseHighlights = [
  "Jasna struktura (znaš točno što promatrati u svakoj fazi)",
  "Primjenjivo odmah — u porukama, na dejtu, uživo",
  "Emocionalno oslobađajuće — jer više ne preispituješ sebe",
  "Samopouzdanje koje dolazi iz znanja, a ne maski",
];

const ratingBreakdown = [
  { label: "5 zvjezdica", percent: 78 },
  { label: "4 zvjezdice", percent: 14 },
  { label: "3 zvjezdice", percent: 5 },
  { label: "2 zvjezdice", percent: 2 },
  { label: "1 zvjezdica", percent: 1 },
];

const reviewList = [
  { name: "Tihana Krmpotić", stars: "★★★★★", body: "Prvi put u životu nisam ignorirala intuiciju. Kompas mi je samo dao hrabrost da je poslušam." },
  { name: "Sara Ugrinić", stars: "★★★★★", body: "Lik mi je na dejtu stalno gledao u mobitel. Kompas mi je već ranije dao kriterij za to — i nisam ga više vidila. Nema više toleriranja nepoštovanja." },
  { name: "Bruna Blažević", stars: "★★★★★", body: "Napokon znam razliku između tihe nesigurnosti i tihe PRISUTNOSTI. To mi je Kompas dao." },
  { name: "Dijana Sertić", stars: "★★★★★", body: "Nakon dva dana sam skužila da je lik emocionalno nedostupan. Prije bi mi trebalo dva mjeseca da to prihvatim." },
  { name: "Martina Gazivoda", stars: "★★★★★", body: "Zbilja sam mislila da je on “onaj pravi”. A Kompas mi je dao checklistu… i ispalo je da sam gledala potencijal, ne realnost." },
  { name: "Danijela Ljubić", stars: "★★★★★", body: "Kolega s posla — tihi, normalan, stabilan. Kompas mi ga je odmah prepoznao kao zelenog. Sad se više družimo i sve ide lagano." },
  { name: "Antonija Kalađurđević", stars: "★★★★★", body: "Najveći benefit? Nema više vraćanja bivšima. Nema više “ali možda se promijenio”. Kompas me naučio da vjerujem ponašanju, ne pričama." },
  { name: "Sara Lovrić", stars: "★★★★★", body: "Kad sam stavila njegovo ponašanje pod Kompas kategorije, shvatila sam da sam zapravo bila druga opcija. I otišla sam." },
  { name: "Irena Petrović", stars: "★★★★★", body: "Prepoznala sam “neozbiljnog” u roku od 10 minuta. Ako bježi od jednostavnih pitanja — stvarno nije to." },
  { name: "Lucija Mršić", stars: "★★★★★", body: "Dečko kojeg sam upoznala preko frendice ispao je totalno drugačiji nego što sam mislila. Kompas me spasio od još jedne razočaravajuće “investicije”." },
  { name: "Andrea Novak", stars: "★★★★☆", body: "Super alat, malo sam se pogubila prvi dan, ali drugi dan mi je sve sjelo. Najbolje mi je što ti pokaže gdje gubiš vrijeme." },
  { name: "Matea Vručina", stars: "★★★★☆", body: "Čisto koristan vodič. Možda sam očekivala još više primjera poruka, ali svejedno mi je pomoglo da filtriram jednog lika koji me mlatio hladno-toplo." },
  { name: "Nika Vulić", stars: "★★★★☆", body: "Nisam mislila da će djelovat ovako brzo. Jedino bih voljela da ima dio o online dejtanju, ali filter za realne situacije je vrh." },
  { name: "Ivana Ružičić", stars: "★★★☆☆", body: "Nije mi sve savršeno sjelo odmah, ali nakon par dana primjene skužila sam neke stvari o sebi i o tome zašto biram krive. Iskreno, pomoglo mi je više nego što sam mislila." },
  { name: "Lea Soldo", stars: "★★★★★", body: "Kompas me naučio da muškarac koji želi — pokaže da želi. Bez nagađanja." },
  { name: "Josipa Pleić", stars: "★★★★★", body: "Vidila sam razliku već prvi tjedan. Jedan lik se trudio, drugi nije. I to je to." },
  { name: "Ena Vuk", stars: "★★★★★", body: "Nakon godina lutanja, osjećam se kao da sam se vratila sebi. Nisam više dostupna svakome." },
  { name: "Mirna Jakšić", stars: "★★★★★", body: "Upoznala sam normalnog dečka na busnoj. Kompas mi je dao sigurnost da ga ne odbacim iz impulsa." },
  { name: "Monika Barišić", stars: "★★★★★", body: "Toliko godina sam davala šansu “zabavnim”, a ignorirala stabilne. Kompas me osvijestio." },
  { name: "Tea Jakić", stars: "★★★★★", body: "Najbolja stvar mi je što nema igrica. Samo realnost. I zbog toga sam danas s muškarcem koji zna što želi." },
];

const heroTestimonials = [
  { name: "Kristina Šarunić", stars: "★★★★★", body: "Kompas mi je doslovno spasija tri mjeseca života. Bila sam uvjerena da je jedan lik “ozbiljan” jer se fin ponaša… a Kompas mi ga označi kao žuti. Tjedan dana kasnije pokazalo se sve — neodgovorene poruke, toplo-hladno. Da nisam imala Kompas, opet bi izgubila vrijeme i samu sebe." },
  { name: "Marina Horvat", stars: "★★★★★", body: "Nakon dvije godine izlazaka i razočaranja, mislila sam da je problem u meni. Kompas mi je dao ono što sam izgubila — mir. Upoznala sam dečka u teretani, i u prva 3 dana sam vidjela po njegovim “signalima” da je zapravo stabilan i siguran. Sad smo tri mjeseca zajedno… prvi put osjećam da sam izabrala dobro." },
  { name: "Jelena Živković", stars: "★★★★★", body: "Kompas mi je otvorio oči u vezi jednog momka koji je bio “previše dobar da bi bio istinit”. Sve je djelovalo super, ali nešto nije štimalo. Odgovara sporadično, nestaje pa se vraća… Kompas ga je odmah stavio u kategoriju koju nikad više ne želim. I iskreno — osjećam olakšanje, kao da imam štit." },
  { name: "Ivona Tolić", stars: "★★★★★", body: "Prepoznala sam jednog kvalitetnog muškarca doslovno prvi tjedan. Nije bio najglasniji, ni najpametniji u društvu — ali sve što je radio poklapalo se s “zelenim” kriterijima. Da nisam imala Kompas, vjerovatno bih ga skroz preskočila. Sad mi je prvi put u životu lijepo biti birana… bez igrica." },
  { name: "Ana-Marija Prlić", stars: "★★★★★", body: "Onaj osjećaj kad shvatiš da si godinama normalizirala mrvice… Kompas mi je doslovno pokazao koliko sam dugo pristajala na polu-emocionalne muškarce. I prvi put kad sam ga koristila, točno sam znala s kim trebam prekinuti kontakt. Nema više lutanja. Prvi put osjećam samopoštovanje u odlukama." },
];

const midTestimonials = [
  { name: "Maja Vukelić", stars: "★★★★★", body: "Izlazila sam s likom koji je bio “zabavan”… ali nije bio tu kad treba. Kompas mi je dao jasnoću u tri dana — kad sam vidila kako se ponaša u realnim situacijama, bilo mi je jasno da je nezreo. Nisam plakala ovaj put. Samo sam pustila — i nastavila dalje sa smješkom." },
  { name: "Tea Pavlinić", stars: "★★★★★", body: "Frajer s kojim sam se dopisivala tjednima nikad nije konkretizirao susret. Kompas mi je dao kriterije i kroz to sam skužila da je samo ubijao vrijeme. Odma sam ga makla. Tjedan poslije upoznala jednog totalno normalnog, prisutnog i toplog lika u kafiću… i sve ide prirodno." },
  { name: "Ivana Herceg", stars: "★★★★★", body: "Nakon razvoda sam imala osjećaj kao da ne znam više procijeniti muškarca. Kompas mi je dao mir. Konkretne situacije, konkretni kriteriji. Jednom liku sam već na prvom dejtu znala da nije to — ne zna slušat, priča samo o sebi, izbjegava pitanja. Nisam se opet zavarala." },
  { name: "Paula Mihaljević", stars: "★★★★★", body: "Najbolji dejting alat koji sam ikad koristila. Bez glume. Bez “pravila igara”. Samo stvarne crvene zastavice koje prije nisam tila vidit. Kompas me naučio da ne moram čekati tri mjeseca da shvatim kakav je — nego mogu znat u par dana." },
  { name: "Katarina Mišetić", stars: "★★★★★", body: "Mislila sam da pretjerujem kad mi se javljao svakih par dana… ali Kompas je to odmah označio kao nezainteresiranog. I pogodilo je. Nakon toga sam dala šansu tipu koji je radio sve “zelene” korake — inicijativa, poštovanje, jasnoća. Sad smo stvarno zajedno." },
];

const faqs = [
  {
    question: "Za koliko dana mogu očekivati jasnu sliku o njemu?",
    answer:
      "Većina žena dobije vrlo jasnu procjenu u 3–7 dana, jer Kompas pokazuje konkretna ponašanja na koja treba paziti — bez nagađanja.",
  },
  {
    question: "Pomaže li Kompas ako sam već “zagrijana” za njega?",
    answer:
      "Da, možda čak i više. Kad smo emotivne, lako previdimo signale. Kompas daje hladnu, objektivnu jasnoću u trenucima kad si ti subjektivna.",
  },
  {
    question: "Mogu li pogriješiti u procjeni?",
    answer:
      "Ne možeš “pokvariti” procjenu. Čak i ako se dvoumiš, Kompas traži ponašanja, a ne “feelinge”. Ako muškarac ima zdrave namjere — to se vidi.",
  },
  {
    question: "Što ako me on već neko vrijeme zbunjuje?",
    answer:
      "To je idealna situacija za Kompas. U samo par dana shvatit ćeš je li njegovo ponašanje dosljedno ili samo “povremeno toplo”.",
  },
  {
    question: "Je li Kompas dobar ako sam ponovno “u igri” nakon razvoda?",
    answer:
      "Da — mnoge žene koriste Kompas upravo nakon dužih pauza jer žele izbjeći istu grešku. Vodi te kroz jasne, jednostavne muške obrasce.",
  },
  {
    question: "Je li ovo predetaljno? Nemam vremena za komplikacije.",
    answer:
      "Kompas je napravljen da radi i ako imaš 10 sekundi dnevno. Samo prati male okidače — sve ostalo aplikacija odradi za tebe.",
  },
  {
    question: "Mogu li koristiti Kompas i ako upoznajem muškarce uživo, a ne preko aplikacija?",
    answer:
      "Naravno. Kompas je dizajniran za stvarne situacije — kafić, posao, teretana, šetnja… upravo tu najlakše vidiš njegove namjere.",
  },
  {
    question: "Što ako on isprva djeluje savršeno, ali osjećam čudnu prazninu?",
    answer:
      "Kompas ti pomaže razlikovati prave kvalitete od “scenskog nastupa”. Muškarac koji je ozbiljan to pokaže kroz mala, konzistentna ponašanja.",
  },
  {
    question: "Je li ovo manipulacija?",
    answer:
      "Ne. Kompas te uči prepoznati njegove namjere, ne utjecati na njih. Ti samo donosiš odluke iz mjesta jasnoće, umjesto iz straha ili nade.",
  },
  {
    question: "Može li mi pomoći ako sam kronično birala pogrešne muškarce?",
    answer:
      "Da — to je zapravo najčešći razlog zašto žene uzimaju Kompas. Prestaneš birati po emociji, počneš birati po stvarnim ponašanjima.",
  },
  {
    question: "Mogu li koristiti Kompas s muškarcem za kojeg još nisam sigurna da mi se sviđa?",
    answer:
      "Apsolutno. Kompas te štiti baš u tim situacijama “vidit ćemo”. Brzo pokaže je li vrijedno ulaganja tvog vremena, energije i emocija.",
  },
  {
    question: "Kako da znam da nisam prekritična?",
    answer:
      "Kompas nije lista nerealnih kriterija. To su minimalni standardi koje ostvaruju svi emocionalno zreli muškarci.",
  },
  {
    question: "Pomaže li i ako je on malo zatvoren ili sramežljiv?",
    answer:
      "Da — Kompas razlikuje tihe, stabilne muškarce od emocionalno nedostupnih. To je ogromna razlika koju mnoge žene prije nisu vidjele.",
  },
  {
    question: "Što ako on ima puno obaveza i ne može biti stalno dostupan?",
    answer:
      "Zato postoji Kompas — ne gleda količinu vremena, nego kvalitetu ponašanja. Zauzet muškarac može biti vrlo jasan i vrlo ozbiljan.",
  },
  {
    question: "Hoće li Kompas “odbaciti” muškarce prerano?",
    answer:
      "Ne, upravo suprotno. Kompas ti pomaže da ne odbaciš prave, nego da prestaneš držati vrata otvorena za neozbiljne.",
  },
  {
    question: "Je li prikladan i za cure u ranim 20-ima?",
    answer:
      "Da, jer postavlja temelje zdravog odabira prije nego upadneš u godine lutanja. Što prije — to bolje.",
  },
  {
    question: "Mogu li ga koristiti i ako sam već u nekoj “situaciji shipu”?",
    answer:
      "Da. Kompas vrlo brzo pokazuje ide li to prema vezi ili prema još jednom emocionalnom zamoru.",
  },
  {
    question: "Što ako me je strah da ću ostati sama ako “otpustim” pogrešnog?",
    answer:
      "To je najčešći osjećaj — i najgori savjetnik. Kompas ti daje do znanja kad puštaš nešto što ti nikako ne bi donijelo sreću.",
  },
  {
    question: "Pomaže li Kompas ako sam već previše emocionalno uključena?",
    answer:
      "Da — zato što procjenjuješ njegovo ponašanje, a ne svoj osjećaj. To umiri glavu i zaustavi idealiziranje.",
  },
  {
    question: "Mogu li stvarno dobiti rezultate u samo tjedan dana?",
    answer:
      "Da — jer ne mijenjaš ti sebe, nego samo gledaš ono što je oduvijek tu: njegove navike, ritam, interes, inicijativu i konzistentnost.",
  },
];

type Props = {
  searchParams: {
    payment_intent?: string;
  };
};


export default async function Oto1Page({ searchParams }: Props) {
  const priceId = process.env.STRIPE_OTO1_PRICE_ID;
  const secret = process.env.STRIPE_SECRET_KEY;
  const { payment_intent } = searchParams;

  if (!priceId || !secret) {
    return (
      <div className="min-h-screen bg-ivory">
        <section className="px-6 py-20 text-center">
          <h1 className="font-heading text-3xl text-espresso">
            Upsell trenutno nije dostupan
          </h1>
          <p className="mt-4 text-espresso/80">
            STRIPE_OTO1_PRICE_ID ili STRIPE_SECRET_KEY nije postavljen. Dodaj
            vrijednosti i redeployaj kako bi ponuda bila aktivna.
          </p>
        </section>
      </div>
    );
  }

  let amount = "37";
  try {
    const stripe = new Stripe(secret);
    const price = await stripe.prices.retrieve(priceId);
    const formatted = price.unit_amount ? (price.unit_amount / 100).toString() : "37";
    amount = formatted.replace(/\.0+$/, "");
  } catch (error) {
    console.error("Failed to load OTO1 price:", error);
  }

  return (
    <>
      <Oto1Tracking />
      <div className="bg-ivory text-espresso">
        <EnsurePaymentIntentParam paymentIntentId={payment_intent} />
      <div className="bg-[#6A1F29] py-3 text-center text-xs font-semibold uppercase tracking-[0.3em] text-[#F8F5F0] sm:text-sm">
        Ova Ponuda je dostupna samo jednom nakon što kupiš Signale Strasti i nikad više
      </div>

      <main className="space-y-16 py-10 sm:space-y-24 sm:py-16">
        <section className="bg-ivory px-4 py-12 text-center sm:px-6 sm:py-16">
          <div className="mx-auto flex max-w-4xl flex-col items-center space-y-6">
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-cherry">
              Čekaj, tvoja kupnja još nije gotova…
            </p>
            <h1 className="font-heading text-3xl font-bold sm:text-5xl">
              Naučila si kako ga privući…<br />Sada nauči prepoznati je li vrijedan tvoje pažnje.
            </h1>
            <p className="text-lg text-espresso/90">
              <strong>Kompas Strasti™</strong> ti daje jasan filter da u prvih 7 dana otkriješ želi li on zapravo tebe —
              ili se samo zabavlja.
            </p>
          </div>
        </section>

        <Section
          bg="white"
          title="Ako ti ovo zvuči poznato — NISI SAMA."
          subtitle="I nisi luda što si vjerovala."
          contentClassName="text-center space-y-6"
        >
          <div className="flex justify-center">
            <Image
              src="/redit.png"
              alt="Reddit komentari"
              width={680}
              height={420}
              className="w-full max-w-xl rounded-3xl"
            />
          </div>
        </Section>

        <Section
          bg="white"
          title="Još jedna kapljica u moru komentara, koje smo dobili kada smo provodili istraživanje na ovu temu:"
          contentClassName="space-y-6 text-center"
        >
          <p className="text-2xl font-semibold text-cherry">
            “Zvučao je kao muškarac koji zna što želi... a onda nestao.”
          </p>
          <ul className="space-y-3 text-lg text-espresso/85">
            {[
              "Umorna sam od ‘zrelih’ frajera koji nestanu kad postane stvarno.",
              "Znam da imam dobru intuiciju – ali očito mi fali znanje.",
              "Ne želim više nagađati tko je on. Želim znati.",
            ].map((line) => (
              <li key={line} className="rounded-2xl bg-ivory p-4">
                ❝ {line} ❞
              </li>
            ))}
          </ul>
          <p className="text-lg text-espresso/90">
            <strong>👉 Ovaj vodič je za tebe ako si makar jednom pomislila:</strong> “Zvučao je kao ozbiljan muškarac –
            ali sve je bila šminka.”
          </p>
        </Section>

        <Section
          bg="ivory"
          title="Vrijeme ti ne ističe – ali ako ga daješ krivima, onda nestaje brže nego što misliš."
          contentClassName="space-y-6 text-center"
        >
          <Image
            src="/Grafikon.png"
            alt="Grafikon o godinama i emocijama"
            width={900}
            height={620}
            className="mx-auto w-full max-w-3xl rounded-3xl"
          />
        </Section>

        <Section
          bg="white"
          title="Nakon 100+ razgovora sa ženama… mogu ti reći samo ovo."
          contentClassName="space-y-4 text-lg text-espresso/85"
        >
          <p className="whitespace-pre-line">
            “Znam kako izgleda kad žena uđe u svoje 30-e s idejom da je još uvijek sve ispred nje… a onda joj jedna, dvije
            ili tri veze oduzmu ne samo vrijeme — već i onu finu vjeru u sebe.
          </p>
          <p className="whitespace-pre-line">
            Godine ti samo po sebi ništa ne oduzimaju.
            Ali veze s krivim muškarcima? One uzmu najvrijednije: tvoju toplinu, tvoju spontanost, tvoju želju da vjeruješ.
          </p>
          <p className="whitespace-pre-line">
            Ne želim da to bude tvoja priča. Zato sam napravila Kompas Strasti™.
            Da ne pogodiš opet na isti obrazac — u godinama kad si najviše svoja.”
          </p>
          <p className="font-semibold">— Dunja, autorica Signala Strasti™</p>
        </Section>

        <Section
          bg="ivory"
          title="Sad me primjećuju… ali kako da znam tko je stvarno zreo?”"
          contentClassName="space-y-4 text-lg text-espresso/85"
        >
          <p>
            To je pitanje koje nam je postavilo preko 700 žena nakon što su prošle Signale Strasti™. Zato je nastao ovaj
            vodič. Ti već znaš kako privući pažnju. Sada ćeš znati koga vrijedi pustiti unutra.
          </p>
        </Section>

        <Section
          bg="white"
          title="Evo kako prestaješ gubiti vrijeme na pogrešne – u samo 4 faze"
          subtitle={<span className="text-lg italic">“Kad ti netko pokaže tko je zapravo — vjeruj mu već prvi put.” — <strong>Maya Angelou</strong></span>}
          contentClassName="space-y-6"
        >
          <ol className="space-y-4 text-lg text-espresso/85">
            {stepItems.map((step) => (
              <li key={step.label} className="rounded-3xl bg-ivory/70 p-5 shadow-card">
                <p className="text-sm font-semibold uppercase tracking-[0.35em] text-cherry">
                  <span className="font-heading italic">{step.label}</span>
                </p>
                <h3 className="mt-2 font-heading text-2xl font-bold text-espresso">{step.title}</h3>
                <p className="mt-2 text-base leading-relaxed">{step.body}</p>
              </li>
            ))}
          </ol>
        </Section>

        <Section
          bg="ivory"
          title="Više ne moraš birati između intuicije i razuma."
          contentClassName="space-y-4 text-lg text-espresso/85"
        >
          <p className="whitespace-pre-line">
            Tvoja intuicija te nikad nije lagala — ali ako ne znaš što gledaš, lako ti promakne ono najbitnije.
          </p>
          <p className="whitespace-pre-line">
            Kompas Strasti™ je vodič kroz 5 najvažnijih znakova emocionalne zrelosti muškarca — u porukama, u načinu kako sluša,
            kako odgovara na neslaganje, i kako reagira kad osjeti tvoju ranjivost.
          </p>
          <p className="whitespace-pre-line">
            Jer nije stvar u tome je li zgodan, uspješan i šarmantan...
            ...nego je li emocionalno prisutan kad to najviše trebaš.
          </p>
        </Section>

        <Section
          bg="white"
          title={
            <>
              Nikad više nećeš moći pristupiti <em className="text-cherry">Kompasu Strasti™</em> (nakon ovog trenutka)
            </>
          }
          contentClassName="space-y-4 text-lg text-espresso/85"
        >
          <p className="whitespace-pre-line">Možda zvuči dramatično — ali je istina.</p>
          <p className="whitespace-pre-line">
            Kompas Strasti™ nije u slobodnoj prodaji. Bio je. Zapravo, bio je jedan od naših najtraženijih i najviralnijih programa.
            Preko 500 žena iz Hrvatske je prošlo kroz njega — i nismo primili niti jednu negativnu poruku.
          </p>
          <p className="whitespace-pre-line">
            Ali smo ga maknuli. Jer smo shvatili nešto važno: Ako žena još nije naučila kako aktivirati pravu pažnju muškarca — onda ovaj vodič ne pomaže u pravom trenutku.
            Zato ga sada dajemo isključivo kao poklon ženama koje su već prošle Signale Strasti™. Poput tebe.
          </p>
          <ul className="space-y-2">
            <li>Ovo je tvoj drugi korak.</li>
            <li>— Naučila si kako privući.</li>
            <li>— Sada učiš koga vrijedi pustiti unutra.</li>
          </ul>
          <p className="whitespace-pre-line">
            Ako sada zatvoriš ovu stranicu — Kompas nećeš više moći kupiti. Ni sutra. Ni kasnije.
          </p>
        </Section>

        <Section
          bg="ivory"
          align="center"
          title="Dojmovi polaznica s prošlog programa možeš vidjeti ispod"
          contentClassName="space-y-6"
        >
          <div className="grid gap-4 md:grid-cols-2">
            {heroTestimonials.map((review) => (
              <article
                key={review.name}
                className="rounded-3xl border border-[#e6eaf5] bg-white p-6 text-left shadow-card"
              >
                <p className="font-heading text-lg font-bold text-espresso">
                  {review.name} — <span className="text-[#ff9c25]">{review.stars}</span>
                </p>
                <p className="mt-3 text-base leading-relaxed text-espresso/85">{review.body}</p>
                <div className="mt-4">
                  <button
                    type="button"
                    className="rounded-full border border-[#e1e5f2] px-4 py-2 text-sm font-semibold text-espresso/80 transition hover:border-cherry hover:text-cherry"
                  >
                    Korisno
                  </button>
                </div>
              </article>
            ))}
          </div>
        </Section>

        <Section bg="ivory" contentClassName="space-y-10">
          <div className="mx-auto max-w-4xl space-y-8 rounded-[32px] border border-[#efe0ce] bg-white px-6 py-12 text-left shadow-card sm:px-10">
            <div className="text-center">
              <h3 className="font-heading text-3xl font-bold text-espresso">Tvoj alat za emocionalnu jasnoću prije nego ti uđe pod kožu.</h3>
              <p className="mt-3 text-sm font-semibold uppercase tracking-[0.35em] text-cherry">Program Kompas Strasti</p>
            </div>
            <div className="space-y-5 text-espresso/90">
              {offerItems.map((item) => (
                <div key={item.title} className="flex gap-4 rounded-2xl border border-ivory/70 bg-[#fdfaf7] p-5">
                  <span className="text-2xl text-cherry">✔</span>
                  <div className="space-y-2">
                    <p className="font-heading text-xl font-bold">{item.title}</p>
                    <p className="text-base leading-relaxed">{item.body}</p>
                  </div>
                </div>
              ))}
              {bonuses.map((item) => (
                <div key={item.title} className="flex gap-4 rounded-2xl border border-ivory/70 bg-white p-5">
                  <span className="text-2xl text-cherry">✔</span>
                  <div className="space-y-2">
                    <p className="font-heading text-xl font-bold">{item.title}</p>
                    <p className="text-base leading-relaxed">{item.body}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="space-y-3 text-center text-espresso">
              <p className="text-lg font-bold text-[#a23d52] line-through">Ukupna vrijednost svega što dobivaš: 172 €</p>
              <p className="text-base font-semibold text-espresso">Kompas Strasti je samo danas tvoj za:</p>
              <Image src="/arrow-down.svg" alt="Strelica prema ponudi" width={48} height={48} className="mx-auto w-14 animate-bounce" />
              <p className="text-6xl font-heading font-bold text-cherry">{amount}€</p>
              <p className="text-base leading-relaxed text-espresso/85">
                Dobivaš ga kao poklon uz tvoju narudžbu Signala Strasti™ — po cijeni od <strong>37 €</strong>.
              </p>
              <div className="space-y-3">
                {payment_intent ? (
                  <OneClickUpsellButton
                    paymentIntentId={payment_intent}
                    label={PRIMARY_LABEL}
                    className="w-full sm:w-auto rounded-3xl bg-[#1C7C7D] px-8 py-5 text-base font-semibold tracking-wide text-ivory shadow-card transition hover:bg-[#165a5c]"
                  />
                ) : (
                  <CTAButton
                    href="/portal"
                    size="lg"
                    className="w-full sm:w-auto rounded-3xl bg-[#1C7C7D] px-8 py-5 text-base font-semibold tracking-wide text-ivory shadow-card transition hover:bg-[#165a5c]"
                  >
                    {PRIMARY_LABEL}
                  </CTAButton>
                )}
                <CTAButton
                  href="/oto1-no"
                  size="lg"
                  className="w-full sm:w-auto rounded-3xl border border-[#6A1F29] bg-transparent px-8 py-5 text-base font-semibold tracking-wide text-[#6A1F29] transition hover:bg-[#6A1F29]/5"
                >
                  {DECLINE_LABEL}
                </CTAButton>
              </div>
              <p className="text-sm italic text-espresso/70">
                Ova stranica se prikazuje samo jednom. Ako je zatvoriš, više nećeš moći pristupiti programu. Ni kasnije. Ni
                sutra. Ni sljedeći tjedan.
              </p>
            </div>
          </div>
        </Section>
        <Section
          bg="white"
          align="center"
          title="Jer više nikada nećeš naslijepo vjerovati riječima."
          contentClassName="max-w-3xl text-center"
        >
          <p className="text-lg text-espresso/85">Sada vjeruješ svom znanju.</p>
        </Section>

        <Section
          bg="ivory"
          align="center"
          title="Za koga je ovo?"
          subtitle="Kompas je za tebe ako:"
          contentClassName="mx-auto max-w-4xl space-y-6"
        >
          <ul className="space-y-3 text-left text-lg text-espresso/90">
            {forWhoList.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="text-xl text-cherry">✔</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </Section>
        <div className="text-center">
          <Oto1CTAGroup paymentIntentId={payment_intent} primaryLabel={PRIMARY_LABEL} secondaryLabel={DECLINE_LABEL} priceId={priceId} />
        </div>

        <Section
          bg="white"
          align="center"
          title="Evo još neki od dojmova polaznica s prošlog programa…"
          contentClassName="space-y-6"
        >
          <div className="grid gap-4 md:grid-cols-2">
            {midTestimonials.map((review) => (
              <article
                key={review.name}
                className="rounded-3xl border border-[#e6eaf5] bg-ivory/60 p-6 text-left shadow-card"
              >
                <p className="font-heading text-lg font-bold text-espresso">
                  {review.name} — <span className="text-[#ff9c25]">{review.stars}</span>
                </p>
                <p className="mt-3 text-base leading-relaxed text-espresso/85">{review.body}</p>
                <div className="mt-4">
                  <button
                    type="button"
                    className="rounded-full border border-[#e1e5f2] px-4 py-2 text-sm font-semibold text-espresso/80 transition hover:border-cherry hover:text-cherry"
                  >
                    Korisno
                  </button>
                </div>
              </article>
            ))}
          </div>
        </Section>
        <div className="text-center">
          <Oto1CTAGroup paymentIntentId={payment_intent} primaryLabel={PRIMARY_LABEL} secondaryLabel={DECLINE_LABEL} priceId={priceId} />
        </div>

        <Section bg="white">
          <div className="mx-auto max-w-4xl space-y-8">
            <div className="rounded-3xl border border-[#e5e8ef] bg-[#f8f9fb] p-6 shadow-card sm:p-8">
              <h3 className="font-heading text-2xl font-bold text-espresso">Detalji Programa</h3>
              <dl className="mt-4 divide-y divide-[#e1e5f2]">
                {detailRows.map((row) => (
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
                  <li
                    key={item}
                    className="flex items-center gap-4 rounded-2xl border border-white/70 bg-white px-4 py-3 shadow-card"
                  >
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-cherry/10 text-cherry">✔</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-3xl border border-[#dfe3f0] bg-white p-6 shadow-card sm:p-8">
              <h3 className="font-heading text-2xl font-bold text-espresso sm:text-3xl">Što kažu korisnice?</h3>
              <p className="mt-4 max-w-2xl text-base leading-relaxed text-espresso/85">
                Korisnice kažu da je <em className="text-cherry">Kompas Strasti™</em> “tiha snaga” — alat koji koristiš u
                pozadini, dok izgledaš opušteno i samouvjereno. <strong>Ne glumiš. Ne ispituješ.</strong> Samo znaš gdje
                gledati — i što njegovi odgovori zapravo znače.
              </p>
              <div className="mt-8 space-y-4">
                <p className="font-heading text-xl font-bold text-espresso">Najviše hvaljeno:</p>
                <ul className="grid gap-4 md:grid-cols-2">
                  {praiseHighlights.map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-4 rounded-2xl border border-[#f0e4d8] bg-ivory px-5 py-4 shadow-card"
                    >
                      <span className="flex h-8 w-8 items-center justify-center rounded-full bg-cherry/10 text-cherry">
                        ✔
                      </span>
                      <span className="text-espresso/90">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="rounded-3xl border border-[#e1e5f0] bg-[#f8f9fb] p-6 shadow-card sm:p-8">
              <div className="mt-6 flex flex-col gap-6 rounded-2xl border border-[#dbe0ef] bg-white p-5 sm:flex-row sm:items-center sm:justify-between">
                <div className="text-center sm:text-left">
                  <p className="text-4xl font-bold text-espresso">4,8 od 5</p>
                  <p className="mt-2 text-lg text-espresso/80">na temelju 467 recenzija</p>
                  <div className="mt-3 flex justify-center text-[#ff9c25] sm:justify-start">
                    <span className="text-2xl">★★★★★</span>
                  </div>
                </div>
                <div className="flex-1 space-y-2">
                  {ratingBreakdown.map((row) => (
                    <div key={row.label} className="flex items-center gap-3 text-sm text-espresso/80">
                      <button
                        type="button"
                        className="text-left text-cherry underline underline-offset-2 transition hover:text-cherry/70"
                      >
                        {row.label}
                      </button>
                      <div className="h-2 flex-1 rounded-full bg-[#ebeef7]">
                        <div className="h-2 rounded-full bg-[#f4c15b]" style={{ width: `${row.percent}%` }} />
                      </div>
                      <span className="w-10 text-right">{row.percent}%</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="mt-8 grid gap-4">
                {reviewList.map((review) => (
                  <article
                    key={review.name}
                    className="rounded-2xl border border-[#e6eaf5] bg-white/90 p-5 text-left shadow-card"
                  >
                    <p className="font-heading text-lg font-bold text-espresso">
                      {review.name} — <span className="text-[#ff9c25]">{review.stars}</span>
                    </p>
                    <p className="mt-3 text-base leading-relaxed text-espresso/85">{review.body}</p>
                    <div className="mt-4">
                      <button
                        type="button"
                        className="rounded-full border border-[#e1e5f2] px-4 py-2 text-sm font-semibold text-espresso/80 transition hover:border-cherry hover:text-cherry"
                      >
                        Korisno
                      </button>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </Section>
        <div className="text-center">
          <Oto1CTAGroup paymentIntentId={payment_intent} primaryLabel={PRIMARY_LABEL} secondaryLabel={DECLINE_LABEL} priceId={priceId} />
        </div>

        <Section bg="white">
          <div className="mx-auto max-w-4xl space-y-6">
            <h2 className="text-center font-heading text-4xl font-bold text-espresso">Najčešća pitanja</h2>
            <div className="space-y-4">
              {faqs.map((faq) => (
                <details key={faq.question} className="group rounded-3xl border border-blush/50 bg-white p-5 shadow-card">
                  <summary className="flex cursor-pointer list-none items-center justify-between text-lg font-semibold text-espresso">
                    <span>{faq.question}</span>
                    <span className="text-cherry transition-transform duration-200 group-open:rotate-45">+</span>
                  </summary>
                  <div className="mt-3 border-t border-blush/40 pt-3 text-base text-espresso/80">{faq.answer}</div>
                </details>
              ))}
            </div>
          </div>
        </Section>
        <div className="text-center">
          <Oto1CTAGroup paymentIntentId={payment_intent} primaryLabel={PRIMARY_LABEL} secondaryLabel={DECLINE_LABEL} priceId={priceId} />
        </div>

        <Section bg="ivory" contentClassName="space-y-6 text-center">
          <ul className="mx-auto flex max-w-3xl flex-col gap-3 text-left text-lg text-espresso/90 sm:flex-row sm:text-center">
            <li>✔️ Privukla si njegov pogled.</li>
            <li>✔️ Pokrenula si njegovu inicijativu.</li>
            <li className="text-cherry">❌ Ali ako ne znaš tko je on — možeš opet izgubiti sebe.</li>
          </ul>
          <Oto1CTAGroup paymentIntentId={payment_intent} primaryLabel={PRIMARY_LABEL} secondaryLabel={DECLINE_LABEL} priceId={priceId} />
        </Section>
      </main>
    </div>
    </>
  );
}
