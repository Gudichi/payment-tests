import type { Metadata } from "next";
import Image from "next/image";
import Stripe from "stripe";
import { Section } from "@/components/Section";
import { CTAButton } from "@/components/CTAButton";
import { OneClickUpsellButton } from "@/components/one-click-upsell";
import { EnsurePaymentIntentParam } from "@/components/payment-intent-sync";

export const metadata: Metadata = {
  title: "Rečenice Strasti™ — One Time Offer 2",
  description: "Dodaj jedinstveni vodič s rečenicama koje aktiviraju emocionalnu ovisnost – dostupno samo sada.",
};

const HERO_BULLETS = [
  "On je zainteresiran… pa se povuče.",
  "Početak je magičan… ali kasnije sve splasne.",
  "Ili jednostavno više ne osjećaš da si mu prioritet.",
];

const DISCOVERY_BULLETS = [
  "Postoji način da muškarcu ostaneš u glavi… ne danima, nego mjesecima.",
  "Postoje rečenice koje ga pogode točno tamo gdje nastaje želja.",
  "Postoji način da on osjeća ono što želiš — bez da ga moliš, guraš ili mijenjaš.",
];

const CRAVING_BULLETS = [
  "Vidiš da te traži samo u određenim trenucima.",
  "Početak je pun strasti, ali brzo sve nestane.",
  "Ne gradi bliskost. Ne planira. Ne ide dublje.",
];

const LONGING_BULLETS = [
  "Kad nije uz tebe, osjeća da mu nešto fali.",
  "Kad mu napišeš poruku, mozak mu se aktivira.",
  "Kad te pogleda, osjeti da si drugačija od svih.",
];

const STEP_ITEMS = [
  {
    label: "KORAK 1:",
    title: "Uđi u aplikaciju, otvori 7 situacijskih putanja i odaberi onu koja opisuje tvoju vezu",
    body: [
      "Gotovo za manje od minutu nakon prijave",
      "Program je podijeljen u 7 putanja jer... tvoja situacija NIJE ista kao kod svake druge cure.",
      "Ako te bivši ignorira već 3 mjeseca... NE trebaš iste rečenice kao cura kojoj je momak tek prije tjedan dana postao hladan.",
      "Ako si u braku gdje nema kemije... NE trebaš iste rečenice kao cura kojoj se simpatija ne javlja.",
      "Zato smo sve razbili u 7 jasnih putanja. Za svaku situaciju koja te može dočekati u budućnosti u aplikaciji imaš rješenje.",
    ],
  },
  {
    label: "KORAK 2:",
    title: "Testiraj “Rečenice Strasti”",
    body: [
      "Gotovo za 5 minuta nakon prijave u program",
      "Zamisli da imaš male čarobne rečenice koje kad ih kažeš muškarcu, njegov mozak se upali kao lampice na božićnom drvcu — i odjednom mu postaneš najdraže biće na svijetu.",
      "To su “Rečenice Strast”",
      "One mu ne “prave pritisak” i ne mole ga za ljubav — nego mu pokreću osjećaj: “Ona je posebna. Ja je želim. Moram biti blizu nje.”",
      "Nisu trikovi, ni manipulacija — to je kao kad mu daš mali slatkiš za dušu.",
      "I onda on počne trčati za tobom… jer mu je s tobom lijepo, zanimljivo i ne može te izbaciti iz glave.",
    ],
  },
  {
    label: "KORAK 3:",
    title: "Javi mentorima rezultate ili pitaj što te muči",
    body: [
      "Gotovo za 1 minutu nakon što pošalješ rečenice",
      "Kod svake rečenice imaš polje gdje možeš pisati: “Evo što sam mu poslala”, “ovo mi je odgovorio”, “što da sad?”, ili jednostavno: “Pomoć, ne želim zeznuti ovo!”",
      "Ti napišeš — mentori odgovore u roku 24 sata.",
      "Mi smo tu da te držimo za ruku dok tvoj odnos cvjeta. 🌸✨",
    ],
  },
  {
    label: "KORAK 4:",
    title: "Uživaj u BONUSIMA koje smo ti pripremili",
    body: [
      "Uz glavni program, dobit ćeš i nekoliko poklona koji ti olakšavaju cijeli proces — od prve poruke do povratka povezanosti.",
      "🎁 “Znakovi strasti” trening — kako prepoznati da te voli i koliko mu je zapravo stalo i kada i kako reagirati.",
      "🎁 Program “Kako muškarca učiniti seksualno opsjednutim” — što ga emocionalno i fizički veže za tebe.",
      "🎁 SOS Paket — 3 poruke za hitne situacije — kad osjetiš da ga gubiš i želiš reagirati odmah.",
      "🎁 7-dnevni podsjetnik — male poruke koje te vode kroz tvoj plan, dan po dan.",
      "Sve to čeka u tvojoj aplikaciji odmah nakon prijave.",
      "Otvaraš, gledaš, i znaš točno što ti je činiti.",
    ],
  },
];

const SKILL_ITEMS = [
  {
    title: "Čitanje muških signala",
    body:
      "Naučit ćeš prepoznati što zapravo stoji iza njegovih poruka, šutnje i ponašanja — i reagirati pametno, bez pritiska.",
  },
  {
    title: "Psihologija privlačnosti",
    body:
      "Shvatit ćeš kako funkcionira muški mozak i što u njemu pokreće želju, strast i potrebu da ti se približi.",
  },
  {
    title: "Tajming i rečenice",
    body:
      "Vidjet ćeš točno što reći i kada — jer ista poruka ili rečenica u krivom trenutku može sve pokvariti, a u pravom trenutku ga zalijepiti za tebe.",
  },
  {
    title: "Komunikacija koja veže",
    body:
      "Koristit ćeš “Rečenice Strasti” koje aktiviraju dopamin i stvaraju osjećaj da si mu najposebnija osoba u životu.",
  },
  {
    title: "Održavanje kemije",
    body:
      "Naučit ćeš kako zadržati pažnju i privrženost čak i nakon što se on “vrati” — bez drame, bez borbe, s lakoćom.",
  },
  {
    title: "Samopouzdanje i mir",
    body:
      "Kroz cijeli proces jačaš svoju unutarnju sigurnost — jer kad ti znaš što radiš, on to osjeti i reagira.",
  },
];

const OFFER_ITEMS = [
  {
    title: "✓ 21 Rečenica Strasti™ s kontekstom i primjerima (Vrijednost: 67 €)",
    body:
      "Dobivaš 21 posebno formuliranu rečenicu dizajniranu da u njegovom mozgu aktivira dopamin i emocionalnu vezanost. Uz svaku rečenicu dobivaš detaljno objašnjenje — kada je koristiti, što pokreće i kako prepoznati njegovu reakciju.",
  },
  {
    title: "✓Situacijski vodič — 7 putanja odnosa (Vrijednost: 47 €)",
    body:
      "Svaka rečenica dolazi unutar jasno strukturiranih scenarija: od bivšeg koji se ne javlja, do veze koja hladi ili braka bez bliskosti. Ti biraš svoj scenarij — i sve ostalo je već spremno.",
  },
];

const BONUSES = [
  "🎁BONUS 1 – Znakovi strasti (Vrijednost: 27 €)",
  "🎁BONUS 2 – Kako muškarca učiniti seksualno opsjednutim (Vrijednost: 33 €)",
  "🎁BONUS 3 – SOS Paket (Vrijednost: 21 €)",
  "🎁BONUS 4 – 7-dnevni podsjetnik (Vrijednost: 19 €)",
];

const FOR_WHO = [
  "Osjećaš da svaki odnos krene vatreno… i onda nestane bez razloga",
  "Imaš sve kvalitete — ali se s vremenom prestane truditi",
  "Umorna si od nagađanja “što misli” i “gdje smo sada”",
  "Želiš znati kako ga ponovno privući — bez da moliš za pažnju",
  "Dosta ti je poruka koje ništa ne znače i planova koji se ne dogode",
  "Želiš zavoditi riječima koje mu se urežu u glavu",
  "Znaš da ne želiš biti žena koja čeka — nego ona koja zna što radi",
];

const PROGRAM_DETAILS = [
  { label: "Trajanje:", value: "Oko 2 sata — podijeljeno u 4 modula koje možeš gledati svojim tempom." },
  {
    label: "Format:",
    value: "Digitalna platforma + PDF vodiči + situacijski scenariji + komentari mentora.",
  },
  { label: "Autorica:", value: "Dunja M., stručnjakinja za neverbalnu komunikaciju i autorica “Što muškarci zapravo žele”." },
  {
    label: "Dizajniran za:",
    value: "Ženu koja želi više od površne privlačnosti — želi utjecaj koji se osjeti.",
  },
  { label: "Emocionalni ton:", value: "Topao. Direktan. Povezujući." },
  { label: "Jezik:", value: "Hrvatski 🇭🇷" },
  {
    label: "Posebno koristan u:",
    value: "Trenucima kada osjećaš da sve “hladi” — ili kad želiš pokrenuti novu vrstu bliskosti.",
  },
  { label: "Vrijednost paketa:", value: "214 € – uključeno bez dodatne naplate 💎" },
  { label: "Ocjena korisnica:", value: "4.9 / 5 ⭐" },
];

const PREPORUKE = [
  "✔ Utjecati na njegove emocije — bez da ga “navlače”",
  "✔ Govoriti riječi koje pokreću njegovu pažnju i privrženost",
  "✔ Osjećaj kontrole u odnosu — bez manipulacije, bez maski",
  "✔ Biti žena čije riječi pamti i kada nije pored nje",
];

const NAJCESE_PREUZIMAN = [
  "✔ Ženama 25–45 koje žele riješiti ono “što nije u redu” — bez da izgube sebe",
  "✔ Korisnicama koje žele da ih se pamti, ne da ih se ganja",
  "✔ Klijenticama koje su prošle Signale i Kompas — i sada žele dublji emocionalni utjecaj",
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
      "To je najčešći osjećaj — i najgori savjetник. Kompas ti daje do znanja kad puštaš nešto što ti nikako ne bi donijelo sreću.",
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

const HERO_IMAGE_SET = ["/vsl-testem-1-min.png", "/vsl-testem-2-min.png", "/vsl-testem-3-min.png"];
const STORY_IMAGE_SET = [
  "/testem-1-min.png",
  "/testem-2-min.png",
  "/testem-3-min.png",
  "/testem-4-min.png",
  "/testem-5-min.png",
  "/testem-6-min.png",
];

const REVIEW_CARDS = [
  {
    name: "Mia Vidas",
    stars: "★★★★★",
    body:
      "Nisam mogla vjerovati koliko je točno opisano njegovo ponašanje. Koristila sam dvije rečenice iz situacijske putanje “hladi se” i doslovno isti dan se opet otvorio. Nije magija, ali iskreno – tako je djelovalo.",
  },
  {
    name: "Laura Marković",
    stars: "★★★★★",
    body:
      "Kad sam shvatila da muški mozak reagira na određene riječi, sve mi je sjelo. Poslala sam mu jednu od preporučenih rečenica i rekao je da mu “fali moja energija”. To se nikad prije nije dogodilo.",
  },
  {
    name: "Ana Vukelić",
    stars: "★★★★★",
    body:
      "Moj muž i ja smo prošli tešku fazu šutnje i hladnoće. Primijenila sam dvije rečenice iz modula za brak i prvi put u godini dana me zagrlio bez da sam ga ja poticala. Osjetila sam da se nešto vratilo.",
  },
  {
    name: "Jelena Sertić",
    stars: "★★★★★",
    body:
      "Nisam vjerovala da će djelovati jer sam bila previše povrijeđena. Ali onda sam testirala jednu rečenicu nakon što se moj “simpa” opet povukao… i drugi dan je poslao najdužu poruku ikad. Kao da ga je nešto dotaklo.",
  },
  {
    name: "Nina Bilobrk",
    stars: "★★★★★",
    body:
      "Ono što mi je najviše pomoglo je što sve ima kontekst. Ne moraš nagađati. Ja sam bila u onoj fazi “na početku sve divno, kasnije se gasi” i baš u tom segmentu su rečenice otvorile nešto u njemu.",
  },
  {
    name: "Katarina Tišljar",
    stars: "★★★★★",
    body:
      "Nevjerojatno koliko su precizni ti muški emocionalni receptori opisani u programu. Jedna rečenica – i odjednom mi šalje poruke sa smješkom i planira susret. A prije je jedva odgovarao.",
  },
  {
    name: "Tihana Majstorović",
    stars: "★★★★★",
    body:
      "Bila sam skeptična jer zvuči prejednostavno. Ali stvarno djeluje. Rečenica koju sam mu poslala ga je pogodila na način da se sam otvorio i rekao nešto jako iskreno. To se nikad nije dogodilo.",
  },
  {
    name: "Martina Krmpotić",
    stars: "★★★★★",
    body:
      "Moj bivši se vratio nakon 3 mjeseca pauze. I ovaj put nisam htjela napraviti istu grešku. Rečenice Strasti su mi dale točan tajming, i prvi put nisam izgledala kao da trčim za njim. On je trčao za mnom.",
  },
  {
    name: "Ela Tomić",
    stars: "★★★★★",
    body:
      "Napokon znam što reći kad osjetim da ga gubim. SOS rečenice iz bonusa su me spasile dvije situacije kad bi se prije sve raspalo.",
  },
  {
    name: "Ivana Drobac",
    stars: "★★★★★",
    body:
      "Nije fora u manipulaciji – nego u tome da mu vratiš osjećaj koji ga je prvi put privukao. Ovaj program točno to radi. Kod mene je upalilo u roku od 48 sati.",
  },
  {
    name: "Sandra Herceg",
    stars: "★★★★★",
    body:
      "Kad sam pročitala dio o dopaminu i emocionalnom tragu, sve mi je bilo jasno. Primijenila sam rečenice iz putanje “polu-hladan odnos” i sve se promijenilo doslovno preko noći.",
  },
  {
    name: "Dina Majić",
    stars: "★★★★★",
    body:
      "Ja sam bila u braku gdje je sve postalo rutinski. Jedna rečenica, u pravom trenutku – i moj muž me pogledao kao da me prvi put vidi. I to nakon godina.",
  },
  {
    name: "Lucija Burić",
    stars: "★★★★★",
    body:
      "Najbolje što sam naučila je tajming. Prije bih sve rekla u krivom trenutku. Sada znam točno kada nešto pokrene njegov mozak, a kada ga gasi.",
  },
  {
    name: "Sara Jakovljević",
    stars: "★★★★★",
    body:
      "Imala sam osjećaj da me već gubi… i onda sam probala jednu “nježniju” rečenicu iz modula. Njegov odgovor me rasplakao jer je bio tako iskren. To je to – vratila se povezanost.",
  },
  {
    name: "Leona Radić",
    stars: "★★★★★",
    body:
      "Najbolje potrošeno vrijeme ikad. Nije mi trebalo više od 10 minuta da skužim gdje sam griješila. A onda sam rekla pravu rečenicu u pravom trenutku – i sve se preokrenulo.",
  },
  {
    name: "Renata Legin",
    stars: "★★★★★",
    body:
      "Program mi je dao hrabrost da stanem iza svojih emocija bez da zvučim “previše”. Muškarci stvarno drugačije reagiraju na određene riječi – nisam znala da je to tako snažno.",
  },
  {
    name: "Nika Jurčić",
    stars: "★★★★★",
    body:
      "Najluđa stvar – poruka od 7 riječi koju sam poslala ga je pogodila više nego sve romantične stvari koje sam prije radila mjesecima.",
  },
  {
    name: "Vesna Popović",
    stars: "★★★★★",
    body:
      "Dugo sam mislila da ne znam komunicirati svoje potrebe. Rečenice Strasti su mi pokazale kako to reći nježno, ali moćno. I on to stvarno osjeti.",
  },
  {
    name: "Ivona Lipovac",
    stars: "★★★★★",
    body:
      "Koristila sam putanju “hladna faza” jer nisam znala kako prići без да ispadnem naporna. Rečenica koju sam poslala ga je doslovno vratila u odnos.",
  },
  {
    name: "Karla Zenko",
    stars: "★★★★★",
    body:
      "Nakon godina pokušaja i krivih riječi, osjećam kao da sam napokon naučila svoj jezik muško-ženskog odnosa. Ne могу vjerovati da je jedna rečenica toliko utjecala na njega.",
  },
];

const PRIMARY_LABEL =
  "Da, želim njegove emocije zauvijek vezati za mene — kroz riječi koje pamti.";
const DECLINE_LABEL = "Ne, hvala. Radije riskiram da opet sve nestane… i da ne znam zašto.";

type Props = {
  searchParams: {
    payment_intent?: string;
  };
};

const CTAGroup = ({
  paymentIntentId,
  priceId,
}: {
  paymentIntentId?: string;
  priceId?: string;
}) => {
  const thankYouUrl = paymentIntentId ? `/hvala?payment_intent=${paymentIntentId}` : "/hvala";
  const declineUrl = paymentIntentId ? `/oto2-no?payment_intent=${paymentIntentId}` : "/oto2-no";

  return (
    <div className="flex flex-col items-center gap-4">
      {paymentIntentId ? (
        <OneClickUpsellButton
          paymentIntentId={paymentIntentId}
          priceId={priceId}
          label={PRIMARY_LABEL}
          className="bg-[#1C7C7D] hover:bg-[#165a5c] text-ivory"
          onSuccessHref={thankYouUrl}
        />
      ) : (
        <CTAButton href={thankYouUrl} size="lg" className="bg-[#1C7C7D] text-ivory">
          {PRIMARY_LABEL}
        </CTAButton>
      )}
      <CTAButton
        href={declineUrl}
        size="lg"
        className="border border-[#6A1F29] text-[#6A1F29] bg-transparent hover:bg-[#6A1F29]/5"
      >
        {DECLINE_LABEL}
      </CTAButton>
    </div>
  );
};

export default async function Oto2Page({ searchParams }: Props) {
  const priceId = process.env.STRIPE_OTO2_PRICE_ID;
  const secret = process.env.STRIPE_SECRET_KEY;
  const { payment_intent } = searchParams;

  let amount: string | null = null;
  if (priceId && secret) {
    try {
      const stripe = new Stripe(secret);
      const price = await stripe.prices.retrieve(priceId);
      const rawAmount = price.unit_amount ? price.unit_amount / 100 : null;
      amount = rawAmount !== null ? rawAmount.toString().replace(/\.0+$/, "") : null;
    } catch (error) {
      console.error("Failed to load OTO2 price:", error);
    }
  }

  return (
    <div className="bg-ivory text-espresso">
      <EnsurePaymentIntentParam paymentIntentId={payment_intent} />
      <div className="bg-[#6A1F29] py-3 text-center text-xs font-semibold uppercase tracking-[0.3em] text-[#F8F5F0] sm:text-sm">
        Ova stranica se prikazuje samo jednom. Ako je zatvoriš — više joj nećeš moći pristupiti.
      </div>

      <main className="space-y-16 py-10 sm:space-y-24 sm:py-16">
        <Section bg="ivory" align="center" contentClassName="space-y-8 max-w-4xl">
          <h1 className="font-heading text-3xl font-bold leading-tight text-espresso sm:text-5xl">
            Prije nego što pristupiš programima koje si kupila, moram ti reći možda najvažniju stvar…
          </h1>
          <div className="space-y-4 text-lg leading-relaxed text-espresso/90">
            <p><strong>Jedna stvar koju ti nisam htjela reći odmah na početku,</strong></p>
            <p>
              ali jednostavno <span className="underline decoration-cherry/60 decoration-2">MORAM</span> – jer bi bilo
              nepošteno da to prešutim.
            </p>
            <p>
              Znam da želiš odmah ući u <strong>Signale i Kompas</strong>,
              <br />
              početi ih gledati, isprobati prve poruke i osjetiti prve promjene…
            </p>
            <p className="text-xl font-heading font-semibold">
              Ali, molim te, obrati pažnju još na OVO, jer je <u>JAKO VAŽNO...</u>
            </p>
            <p className="underline decoration-cherry/50 decoration-2">Jer je krucijalno.</p>
            <p>I ne, ne govorim to da bih ti “nešto dodatno prodala”.</p>
            <p>
              Govorim ti to jer bez ovoga…
              <br />
              čak i ako sve ostalo napraviš savršeno…
            </p>
            <p className="font-semibold text-espresso">postoji velika šansa da opet ostaneš u istoj priči:</p>
          </div>
          <ul className="space-y-3 text-left text-lg text-espresso/90">
            {HERO_BULLETS.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="mt-1 text-xl text-cherry">✔</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <p className="text-lg font-semibold text-espresso">I zato…</p>
        </Section>

        <Section bg="white" contentClassName="space-y-6 max-w-4xl">
          <h2 className="font-heading text-2xl font-bold text-espresso sm:text-3xl">
            Evo, ispričat ću ti zašto je to važno — kroz jednu kratku, jednominutnu priču koju stvarno trebaš pročitati.
          </h2>
          <div className="space-y-4 text-lg leading-relaxed text-espresso/90">
            <p>U jednoj fazi života… imala sam <strong>vezu iz snova.</strong></p>
            <p>
              Bio je sve ono što sam zamišljala: <em className="font-semibold">zreo, emotivno prisutan, zabavan, ambiciozan.</em>
            </p>
            <p>Na početku — <u className="decoration-cherry/70 decoration-2">kemija kakvu nisam osjećala godinama.</u></p>
            <p>Zvao me svakog dana, planirao putovanja, govorio kako osjeća nešto što nikad prije nije.</p>
            <p className="font-semibold text-espresso">I onda, kao da je netko ugasio svjetlo.</p>
            <p>Počeo je odgovarati s "ok". Više nije predlagao susrete.</p>
            <p>Zagrljaji su postali navika, a razgovori tišina.</p>
            <p className="italic text-espresso/85">Tada sam upisivala u svoj dnevnik:</p>
            <p className="rounded-2xl bg-ivory p-4 shadow-card">
              <strong>“Osjećam da mu smetam svojim postojanjem.”</strong> <br />
              <em>“Ne znam što se promijenilo.”</em> <br />
              <u>“Zar nije rekao da me nikada neće pustiti?”</u>
            </p>
            <p><strong>Mjesec dana kasnije</strong>, rekao je da ne zna što osjeća.</p>
            <p>Nekoliko tjedana nakon toga — nije se više javljao.</p>
            <p>I to nije bila jedina takva priča.</p>
            <p>Imala sam i one odnose gdje sve ide sporo, nikada ne dođe do ozbiljnog.</p>
            <p>Imala sam i one gdje se sve rasplamsa… i samo izgori.</p>
            <p>U svakom od tih odnosa bila sam iskrena. Dobra. Prisutan partner.</p>
            <p className="font-semibold text-espresso">Ali sam svaki put osjećala isto:</p>
            <p className="italic text-espresso/85">Na početku me žele. Kasnije me zaborave.</p>
            <p>Zato sam istraživala. Testirala. Tražila uzrok.</p>
            <p className="text-espresso font-semibold">I ono što sam otkrila promijenilo je sve:</p>
          </div>
          <ul className="space-y-3 rounded-3xl bg-ivory p-6 text-lg leading-relaxed shadow-card">
            {DISCOVERY_BULLETS.map((item) => (
              <li key={item} className="flex gap-2">
                <span className="text-2xl">👉</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <div className="space-y-4 text-lg leading-relaxed text-espresso/90">
            <p>I to sam tada nazvala: Rečenice Strasti.</p>
            <p>To nisu rečenice koje ga "uvjeravaju".</p>
            <p>To su rečenice koje ga pokreću.</p>
            <p>Ne zna zašto. Ne zna kako.</p>
            <p>Ali kad ih čuje — osjeti nešto što ne želi izgubiti.</p>
            <p>I zato ti ih danas pokazujem. Jer ako si došla dovde — zaslužuješ završiti priču drugačije.</p>
          </div>
        </Section>

        <Section bg="ivory" contentClassName="space-y-6 max-w-5xl">
          <h2 className="font-heading text-2xl font-bold text-espresso sm:text-3xl">
            Sad ću ti objasniti zašto ovo djeluje.
          </h2>
          <div className="space-y-4 text-lg leading-relaxed text-espresso/90">
            <p><strong>Ne zato što je “fora” ili neka magija…</strong></p>
            <p>
              nego zato što <u>tvoj mozak</u> — i <u>njegov mozak</u> — ne reagiraju jednako na riječi.
            </p>
            <p>Ženski mozak procesira jezik kroz centre povezane s emocijama, nijansama, kontekstom.</p>
            <p className="italic text-espresso/85">Mi čujemo što je netko rekao… i što je zapravo htio reći.</p>
            <p>Muški mozak — posebno u kontekstu privlačnosti — reagira potpuno drugačije.</p>
            <p className="font-semibold text-espresso">On ne analizira. On se pali na određene fraze. Doslovno.</p>
            <p>
              U njegovom mozgu postoje specifični receptori koji se aktiviraju kada čuje <strong>određeni emocionalni stimulans</strong> —
            </p>
            <p>bilo da je to opasnost, izazov, gubitak, pa čak i… čežnja.</p>
            <p className="text-espresso font-semibold">Te riječi izazivaju izlučivanje DOPAMINA.</p>
            <p className="underline decoration-cherry/50 decoration-2">A dopamin je ono što stvara OVISNOST.</p>
            <p>Ne o tebi — nego o osjećaju koji ima kad je s tobom.</p>
            <p className="font-semibold">I tu većina žena — potpuno nesvjesno — napravi istu grešku.</p>
            <p>Muškarac ne postaje ovisan o ženi zato što je ona “dobra prema njemu”.</p>
            <p>Niti zato što mu stalno piše, daje sve od sebe i pokušava da sve ide glatko.</p>
            <p className="italic text-espresso/85">U stvarnosti, takav pristup često učini suprotno.</p>
            <p>Jer mu ne aktivira emociju.</p>
            <p><u>Nema tenzije, nema osjećaja mogućeg gubitka, nema uzbuđenja.</u></p>
            <p>Zato muškarci najčešće postanu ovisni o seksu — ali ne i o ženi.</p>
            <p>To znači da ga privlači tvoja energija… tvoje tijelo…</p>
            <p className="font-semibold">ali ne ostaje zbog tebe kao osobe.</p>
            <p>Onda se dogodi klasični scenarij:</p>
          </div>
          <ul className="space-y-3 text-left text-lg text-espresso/90">
            {CRAVING_BULLETS.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="mt-1 text-xl text-cherry">✔</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <div className="space-y-4 text-lg leading-relaxed text-espresso/90">
            <p>
              Zato je ključno da ne ovisnost o tijelu — nego o osjećaju koji dobiva kad je u tvojoj blizini.
            </p>
            <p>To je ono što radimo kroz Rečenice Strasti.</p>
            <p>
              To nije program u kojem “uvježbavaš” kako da mu pišeš. To je program u kojem se ti — kroz samo 21
              rečenicu — naučiš kako u njegovom mozgu stvoriti emocionalni trag.
            </p>
            <p>Trag koji on ne može ignorirati. Trag zbog kojeg želi biti blizu, sam od sebe.</p>
            <p>Zato što ne zna kako to objasniti.</p>
            <p>Ali zna jedno:</p>
          </div>
          <ul className="space-y-3 text-left text-lg text-espresso/90">
            {LONGING_BULLETS.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="mt-1 text-xl text-cherry">✔</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <p className="text-lg leading-relaxed text-espresso/90">
            To nije zato što si “posebna”.
            <br />
            To je zato što znaš TOČNE RIJEČI koje njegov mozak pamti kao nagradu.
          </p>
        </Section>

        <Section bg="white" contentClassName="space-y-10">
          <h2 className="font-heading text-2xl font-bold text-espresso sm:text-3xl">
            Evo kako će izgledati transformacija tvog ljubavnog života:
          </h2>
          <div className="grid gap-6 lg:grid-cols-2">
            {STEP_ITEMS.map((step, index) => (
              <article
                key={step.title}
                className="space-y-3 rounded-3xl border border-ivory bg-[#fdfaf7] p-6 shadow-card"
              >
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cherry">
                  {step.label}
                </p>
                <h3 className="font-heading text-xl font-bold text-espresso">{step.title}</h3>
                {index === 3 ? (
                  <ul className="space-y-2 text-base leading-relaxed text-espresso/90">
                    {step.body.map((line) => (
                      <li key={line} className="list-disc list-inside">
                        {line}
                      </li>
                    ))}
                  </ul>
                ) : (
                  <div className="space-y-2 text-base leading-relaxed text-espresso/90">
                    {step.body.map((line, lineIndex) => (
                      lineIndex === 0 ? (
                        <p
                          key={line}
                          className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-1 text-sm font-semibold text-[#6A1F29] shadow-sm"
                        >
                          {line}
                        </p>
                      ) : (
                        <p key={line}>{line}</p>
                      )
                    ))}
                  </div>
                )}
              </article>
            ))}
          </div>
        </Section>

        <Section
          bg="ivory"
          title={(
            <>
              Što sve radimo? <br /> <span className="text-cherry">Da on postane lud za tobom.</span>
            </>
          )}
          contentClassName="space-y-6"
        >
          <div className="space-y-4 text-lg leading-relaxed text-espresso/90">
            <p>Ne moraš danima učiti o muškom umu ni proučavati teoriju odnosa.</p>
            <p>
              Sve što trebaš je otvoriti aplikaciju, pratiti plan koji je već prilagođen tvojoj situaciji — i kroz
              jednostavne zadatke i poruke koje ti pokažemo, sve se počne mijenjati.
            </p>
            <p>Kroz 21 dan naučit ćeš kako:</p>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {SKILL_ITEMS.map((skill) => (
              <div
                key={skill.title}
                className="space-y-2 rounded-3xl border border-[#ffe1ec] bg-gradient-to-br from-white via-rose-50 to-[#fff4f8] p-5 shadow-card"
              >
                <p className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-1 text-sm font-semibold text-cherry shadow-sm">
                  ❤️
                  <span className="font-heading text-lg font-bold text-espresso">{skill.title}</span>
                </p>
                <p className="text-base leading-relaxed text-espresso/85">{skill.body}</p>
              </div>
            ))}
          </div>
        </Section>

        <Section bg="white" contentClassName="space-y-6 max-w-4xl">
          <h2 className="font-heading text-2xl font-bold text-espresso sm:text-3xl">
            Nikad više nećeš moći pristupiti Rečenicama Strasti™ (nakon ovog trenutka)
          </h2>
          <div className="space-y-4 text-lg leading-relaxed text-espresso/90">
            <p><strong>Možda zvuči dramatično — ali je istina.</strong></p>
            <p><em>Rečenice Strasti™ nisu u slobodnoj prodaji.</em> Bile su.</p>
            <p className="font-semibold text-espresso">Od 2019. do danas prošlo ih je više od 1000 žena — više čak i od Signala i Kompasa.</p>
            <p>
              Tada smo kroz istraživanje otkrili da je upravo ovo najčešći razlog zašto se muškarci hlade nakon nekog
              vremena:
            </p>
            <p className="rounded-2xl bg-ivory p-4 shadow-card"><strong>👉 Jer žena nesvjesno koristi riječi koje gase, umjesto da povezuju.</strong></p>
            <p>I zato smo ih maknuli iz otvorene prodaje.</p>
            <p className="italic text-espresso/85">Zašto?</p>
            <p className="font-semibold">Zato što Rečenice Strasti™ jednostavno — <u>nisu za svakoga.</u></p>
            <p>Ovaj alat djeluje samo kad je žena već prošla prve korake.</p>
            <p>Kad zna što je signal. Kad zna čitati tišinu. Kad zna kako mu prići bez da izgubi sebe.</p>
            <p className="italic">Jer ako dođe prerano… može zbuniti.</p>
            <p> Ako se koristi s pogrešnim namjerama… može djelovati kao trik.</p>
            <p className="font-semibold">A ova komunikacija nije igra.</p>
            <p>Zato ih vidiš samo sada.</p>
            <p>Jer sada si spremna. I znaš zašto ih koristiš.</p>
            <p><strong>Ne da bi ga natjerala — nego da ga emocionalno pozoveš.</strong></p>
          </div>
          <p className="rounded-2xl bg-ivory p-5 text-lg font-semibold leading-relaxed text-espresso/90 shadow-card">
            Zato: ovo je jedina prilika da ih dodaš.
            <br />
            Ako preskočiš sada — ova ponuda se više neće prikazati.
          </p>
        </Section>

        <Section
          bg="ivory"
          align="center"
          title="Dojmovi polaznica s prošlog programa"
          contentClassName="space-y-6"
        >
          <div className="flex flex-col items-center gap-4">
            {HERO_IMAGE_SET.map((src) => (
              <Image
                key={src}
                src={src}
                alt="Dojmovi polaznica"
                width={1200}
                height={1200}
                className="w-full max-w-full sm:max-w-[80%] object-contain"
              />
            ))}
          </div>
        </Section>
        <Section bg="ivory" contentClassName="space-y-10">
          <div className="mx-auto max-w-5xl space-y-10 rounded-[32px] border border-[#efe0ce] bg-white p-6 shadow-card sm:p-10">
            <div className="text-center space-y-2">
              <p className="text-sm font-semibold uppercase tracking-[0.35em] text-cherry">PROGRAM <span className="italic text-espresso">Rečenice Strasti</span></p>
              <h2 className="font-heading text-3xl font-bold leading-tight text-espresso sm:text-4xl">21 rečenica koje čine muškarca opsjednutim tobom</h2>
              <p className="text-xl font-heading text-espresso">Evo što dobivaš ako danas odlučiš transformirati svoj ljubavni život</p>
            </div>

            <div className="flex flex-col items-center gap-8">
              <div className="w-full space-y-4 text-base leading-relaxed text-espresso/90">
                <ul className="space-y-3">
                  {[
                    'Program "Rečenice Strasti" – kompletna formula od 21 "Sjeme dopamina" rečenice koje će učiniti da muškarac postane potpuno opsjednut tobom (bez manipulacije - samo čista psihologija)',
                    'Timing master guide – kako da znaš TOČNO kada izgovoriti koju rečenicu za maksimalni učinak (ovo je ključ uspjeha)',
                    'WhatsApp script kolekcija – gotove poruke koje možeš kopirati i poslati da ga natjeraš da trči za tobom',
                    'Psihologija povratka – kako da bivši partner poželi vratiti vezu, čak i kad je rekao da je "gotovo zauvijek"',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3 rounded-2xl bg-ivory/70 p-4 shadow-sm">
                      <span className="mt-1 text-emerald-600">✓</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="space-y-3 rounded-2xl bg-[#fff5f8] p-4 shadow-card">
                  <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cherry">BONUSI</p>
                  <ul className="space-y-3">
                    {[
                      'BONUS 1: "Znakovi strasti" trening (Vrijednost 53€) → BESPLATNO DANAS — Kako prepoznati je li STVARNO zaljubljen ili se samo igra s tobom? Naučit ćeš čitati 7 nesvjesnih znakova koji otkrivaju njegovu pravu namjeru (prestani pogađati - ZNAT ĆEŠ sa sigurnošću)',
                      'BONUS 2: "Seksualna opsjednutost" Program (Vrijednost 107€) → BESPLATNO DANAS — Kako da postaneš JEDINA žena o kojoj fantazira - čak i ako je prije gledao druge žene. Naučit ćeš tehnike koje ga čine seksualno opsjednutim SAMO tobom (bez manipulacije - samo čista psihologija privlačnosti).',
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-3 rounded-2xl border border-[#ffddea] bg-white p-3">
                        <span className="mt-1 text-lg">🎁</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="space-y-2 rounded-2xl bg-white p-4 shadow-sm">
                  <p className="text-sm font-semibold uppercase tracking-[0.3em] text-espresso/70">UKUPNA VRIJEDNOST PAKETA (Sve Što Dobivaš):</p>
                  <ul className="space-y-1 text-espresso/90">
                    {[
                      'Program Rečenice Strasti = Vrijednost 147€',
                      'BONUS 1: Znakovi Strasti = Vrijednost 53€',
                      'BONUS 2: Knjiga Muški Um = Vrijednost 73€',
                      'BONUS 3: Seksualna Opsj. = Vrijednost 107€',
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <span className="text-emerald-600">✔</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="text-base font-semibold text-[#a23d52] line-through">UKUPNA VRIJEDNOST: 380€</p>
                </div>
              </div>

              <div className="flex w-full flex-col items-center gap-6">
                <Image
                  src="/product-min.png"
                  alt="Program Rečenice Strasti"
                  width={620}
                  height={720}
                  className="w-full max-w-xs sm:max-w-sm"
                />
                <div className="space-y-2 text-center">
                  <Image src="/arrow-down.svg" alt="Strelica prema cijeni" width={48} height={48} className="mx-auto h-10 w-10 animate-bounce" />
                  <p className="text-6xl font-heading font-bold text-cherry">{amount ?? "57"}€</p>
                  <p className="text-sm font-semibold uppercase tracking-[0.35em] text-espresso">Tvoja cijena danas</p>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <CTAGroup
                paymentIntentId={priceId ? payment_intent : undefined}
                priceId={priceId ?? undefined}
              />
              <p className="text-center text-sm leading-relaxed text-espresso/75">
                Ova stranica se prikazuje samo jednom. Ako je zatvoriš — više joj nećeš moći pristupiti.
              </p>
              <p className="text-center text-sm leading-relaxed text-espresso/75">
                Jer više nikada nećeš naslijepo vjerovati energiji početka. Sada znaš kako stvoriti ono što ostaje — čak
                i kad početna iskra prođe.
              </p>
            </div>
          </div>
        </Section>

        <Section bg="ivory">
          <div className="mx-auto max-w-4xl space-y-8">
            <div className="rounded-3xl border border-[#e5e8ef] bg-[#f8f9fb] p-6 shadow-card sm:p-8">
              <h3 className="font-heading text-2xl font-bold text-espresso">Detalji Programa</h3>
              <dl className="mt-4 divide-y divide-[#e1e5f2]">
                {PROGRAM_DETAILS.map((row) => (
                  <div key={row.label} className="grid gap-3 py-3 sm:grid-cols-[180px,1fr]">
                    <dt className="text-sm font-semibold uppercase tracking-[0.2em] text-[#6a6f83]">
                      {row.label}
                    </dt>
                    <dd className="text-base text-espresso/90">{row.value}</dd>
                  </div>
                ))}
              </dl>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              <div className="rounded-3xl border border-[#efe0ce] bg-ivory p-6 shadow-card sm:p-8">
                <h3 className="font-heading text-2xl font-bold text-espresso">Preporučeno za žene koje žele:</h3>
                <ul className="mt-5 space-y-3 text-base text-espresso/85">
                  {PREPORUKE.map((item) => (
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
                <h3 className="font-heading text-2xl font-bold text-espresso">Najčešće preuziman među:</h3>
                <ul className="mt-5 space-y-4 text-base text-espresso/85">
                  {NAJCESE_PREUZIMAN.map((item) => (
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
          </div>
        </Section>

        <Section
          bg="white"
          align="center"
          title="Recenzije polaznica"
          contentClassName="space-y-6"
        >
          <div className="grid gap-4 md:grid-cols-2">
            {REVIEW_CARDS.map((review) => (
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

        <div className="text-center pb-16">
          <CTAGroup paymentIntentId={priceId ? payment_intent : undefined} priceId={priceId ?? undefined} />
        </div>
      </main>
    </div>
  );
}
