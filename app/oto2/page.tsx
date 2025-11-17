import type { Metadata } from "next";
import Stripe from "stripe";
import { Section } from "@/components/Section";
import { CTAButton } from "@/components/CTAButton";
import { OneClickUpsellButton } from "@/components/one-click-upsell";

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
      "Gotovo za 5 minuta nakon prijave u progrma",
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
      "Gotovo za 1 minuta nakon što poašlješ rečenice",
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
    title: "💌 Čitanje muških signala",
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
}) => (
  <div className="flex flex-col items-center gap-4">
    {paymentIntentId && priceId ? (
      <OneClickUpsellButton
        paymentIntentId={paymentIntentId}
        priceId={priceId}
        label={PRIMARY_LABEL}
        className="bg-[#1C7C7D] hover:bg-[#165a5c] text-ivory"
      />
    ) : (
      <CTAButton href="/portal" size="lg" className="bg-[#1C7C7D] text-ivory">
        {PRIMARY_LABEL}
      </CTAButton>
    )}
    <CTAButton
      href="/portal"
      size="lg"
      className="border border-[#6A1F29] text-[#6A1F29] bg-transparent hover:bg-[#6A1F29]/5"
    >
      {DECLINE_LABEL}
    </CTAButton>
  </div>
);

export default async function Oto2Page({ searchParams }: Props) {
  const priceId = process.env.STRIPE_OTO2_PRICE_ID;
  const secret = process.env.STRIPE_SECRET_KEY;
  const { payment_intent } = searchParams;

  let amount: string | null = null;
  if (priceId && secret) {
    const stripe = new Stripe(secret);
    const price = await stripe.prices.retrieve(priceId);
    amount = price.unit_amount ? (price.unit_amount / 100).toFixed(2) : null;
  }

  return (
    <div className="bg-ivory text-espresso">
      <div className="bg-[#6A1F29] py-3 text-center text-xs font-semibold uppercase tracking-[0.3em] text-[#F8F5F0] sm:text-sm">
        Ova stranica se prikazuje samo jednom. Ako je zatvoriš — više joj nećeš moći pristupiti.
      </div>

      <main className="space-y-16 py-10 sm:space-y-24 sm:py-16">
        <Section bg="ivory" align="center" contentClassName="space-y-8 max-w-4xl">
          <h1 className="font-heading text-3xl font-bold leading-tight text-espresso sm:text-5xl">
            Prije nego što pristupiš programima koje si kupila, moram ti reći možda najvažniju stvar…
          </h1>
          <div className="space-y-4 text-lg leading-relaxed text-espresso/90">
            <p>Jedna stvar koju ti nisam htjela reći odmah na početku,</p>
            <p>ali jednostavno MORAM – jer bi bilo nepošteno da to prešutim.</p>
            <p>
              Znam da želiš odmah ući u Signale i Kompas,
              <br />
              početi ih gledati, isprobati prve poruke i osjetiti prve promjene…
            </p>
            <p>Ali, molim te, obrati pažnju još na OVO.</p>
            <p>Jer je krucijalno.</p>
            <p>I ne, ne govorim to da bih ti “nešto dodatno prodala”.</p>
            <p>Govorim ti to jer bez ovoga…</p>
            <p>čak i ako sve ostalo napraviš savršeno…</p>
            <p>postoji velika šansa da opet ostaneš u istoj priči:</p>
          </div>
          <ul className="grid gap-3 text-left sm:grid-cols-3">
            {HERO_BULLETS.map((item) => (
              <li key={item} className="rounded-2xl bg-white p-4 shadow-card">
                {item}
              </li>
            ))}
          </ul>
          <p className="text-lg font-semibold text-espresso">I zato…</p>
        </Section>

        <Section bg="white" contentClassName="space-y-6 max-w-4xl">
          <h2 className="font-heading text-2xl font-bold text-espresso sm:text-3xl">
            Evo, ispričat ću ti zašto je to važno — kroz jednu kratku priču.
          </h2>
          <div className="space-y-4 text-lg leading-relaxed text-espresso/90">
            <p>U jednoj fazi života… imala sam vezu iz snova.</p>
            <p>Bio je sve ono što sam zamišljala: zreo, emotivno prisutan, zabavan, ambiciozan.</p>
            <p>Na početku — kemija kakvu nisam osjećala godinama.</p>
            <p>Zvao me svakog dana, planirao putovanja, govorio kako osjeća nešto što nikad prije nije.</p>
            <p>I onda, kao da je netko ugasio svjetlo.</p>
            <p>Počeo je odgovarati s "ok". Više nije predlagao susrete.</p>
            <p>Zagrljaji su postali navika, a razgovori tišina.</p>
            <p>Tada sam upisivala u svoj dnevnik:</p>
            <p>
              "Osjećam da mu smetam svojim postojanjem." "Ne znam što se promijenilo." "Zar nije rekao da me
              nikada neće pustiti?"
            </p>
            <p>Mjesec dana kasnije, rekao je da ne zna što osjeća.</p>
            <p>Nekoliko tjedana nakon toga — nije se više javljao.</p>
            <p>I to nije bila jedina takva priča.</p>
            <p>Imala sam i one odnose gdje sve ide sporo, nikada ne dođe do ozbiljnog.</p>
            <p>Imala sam i one gdje se sve rasplamsa… i samo izgori.</p>
            <p>U svakom od tih odnosa bila sam iskrena. Dobra. Prisutan partner.</p>
            <p>Ali sam svaki put osjećala isto:</p>
            <p>Na početku me žele. Kasnije me zaborave.</p>
            <p>Zato sam istraživala. Testirala. Tražila uzrok.</p>
            <p>I ono što sam otkrila promijenilo je sve:</p>
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
            <p>Ne zato što je “fora” ili neka magija…</p>
            <p>nego zato što tvoj mozak — i njegov mozak — ne reagiraju jednako na riječi.</p>
            <p>Ženski mozak procesira jezik kroz centre povezane s emocijama, nijansama, kontekstom.</p>
            <p>Mi čujemo što je netko rekao… i što je zapravo htio reći.</p>
            <p>Muški mozak — posebno u kontekstu privlačnosti — reagira potpuno drugačije.</p>
            <p>On ne analizira. On se pali na određene fraze. Doslovno.</p>
            <p>
              U njegovom mozgu postoje specifični receptori koji se aktiviraju kada čuje određeni emocionalni stimulans —
            </p>
            <p>bilo da je to opasnost, izazov, gubitak, pa čak i… čežnja.</p>
            <p>Te riječi izazivaju izlučivanje DOPAMINA.</p>
            <p>A dopamin je ono što stvara OVISNOST.</p>
            <p>Ne o tebi — nego o osjećaju koji ima kad je s tobom.</p>
            <p>I tu većina žena — potpuno nesvjesno — napravi istu grešku.</p>
            <p>Muškarac ne postaje ovisan o ženi zato što je ona “dobra prema njemu”.</p>
            <p>Niti zato što mu stalno piše, daje sve od sebe i pokušava da sve ide glatko.</p>
            <p>U stvarnosti, takav pristup često učini suprotno.</p>
            <p>Jer mu ne aktivira emociju.</p>
            <p>Nema tenzije, nema osjećaja mogućeg gubitka, nema uzbuđenja.</p>
            <p>Zato muškarci najčešće postanu ovisni o seksu — ali ne i o ženi.</p>
            <p>To znači da ga privlači tvoja energija… tvoje tijelo…</p>
            <p>ali ne ostaje zbog tebe kao osobe.</p>
            <p>I onda se dogodi klasični scenarij:</p>
          </div>
          <ul className="grid gap-3 text-left sm:grid-cols-3">
            {CRAVING_BULLETS.map((item) => (
              <li key={item} className="rounded-2xl bg-white p-4 shadow-card">
                {item}
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
          <ul className="grid gap-3 text-left sm:grid-cols-3">
            {LONGING_BULLETS.map((item) => (
              <li key={item} className="rounded-2xl bg-white p-4 shadow-card">
                {item}
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
            {STEP_ITEMS.map((step) => (
              <article
                key={step.title}
                className="space-y-3 rounded-3xl border border-ivory bg-[#fdfaf7] p-6 shadow-card"
              >
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cherry">
                  {step.label}
                </p>
                <h3 className="font-heading text-xl font-bold text-espresso">{step.title}</h3>
                <ul className="space-y-2 text-base leading-relaxed text-espresso/90">
                  {step.body.map((line) => (
                    <li key={line} className="list-disc list-inside">
                      {line}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </Section>

        <Section
          bg="ivory"
          title="Što sve radimo?"
          subtitle="Da on postane lud za tobom."
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
              <div key={skill.title} className="space-y-2 rounded-2xl bg-white p-5 shadow-card">
                <p className="font-heading text-lg font-bold text-espresso">{skill.title}</p>
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
            <p>Možda zvuči dramatično — ali je istina.</p>
            <p>Rečenice Strasti™ nisu u slobodnoj prodaji. Bile su.</p>
            <p> Od 2019. do danas prošlo ih je više od 1000 žena — više čak i od Signala i Kompasa.</p>
            <p>
              Tada smo kroz istraživanje otkrili da je upravo ovo najčešći razlog zašto se muškarci hlade nakon nekog
              vremena:
            </p>
            <p> 👉 Jer žena nesvjesno koristi riječi koje gase, umjesto da povezuju.</p>
            <p>I zato smo ih maknuli iz otvorene prodaje.</p>
            <p>Zašto?</p>
            <p>Zato što Rečenice Strasti™ jednostavno — nisu za svakoga.</p>
            <p> Ovaj alat djeluje samo kad je žena već prošla prve korake.</p>
            <p> Kad zna što je signal. Kad zna čitati tišinu. Kad zna kako mu prići bez da izgubi sebe.</p>
            <p>Jer ako dođe prerano… može zbuniti.</p>
            <p> Ako se koristi s pogrešnim namjerama… može djelovati kao trik.</p>
            <p> A ova komunikacija nije igra.</p>
            <p>Zato ih vidiš samo sada.</p>
            <p> Jer sada si spremna. I znaš zašto ih koristiš.</p>
            <p> Ne da bi ga natjerala — nego da ga emocionalno pozoveš.</p>
          </div>
          <p className="rounded-2xl bg-ivory p-5 text-lg font-semibold leading-relaxed text-espresso/90 shadow-card">
            Zato: ovo je jedina prilika da ih dodaš.
            <br />
            Ako preskočiš sada — ova ponuda se više neće prikazati.
          </p>
        </Section>

        <Section bg="ivory" contentClassName="space-y-10">
          <div className="mx-auto max-w-4xl space-y-6 rounded-[32px] border border-[#efe0ce] bg-white px-6 py-12 shadow-card sm:px-10">
            <div className="space-y-3 text-center text-espresso">
              <h2 className="font-heading text-3xl font-bold text-espresso">Tvoj alat za emocionalnu ovisnost — bez igre, bez pritiska.</h2>
              <p className="text-sm font-semibold uppercase tracking-[0.35em] text-cherry">
                Što točno dobivaš u Rečenicama Strasti™
              </p>
            </div>
            <div className="space-y-5 text-espresso/90">
              {OFFER_ITEMS.map((item) => (
                <div key={item.title} className="flex gap-4 rounded-2xl border border-ivory/70 bg-[#fdfaf7] p-5">
                  <span className="text-2xl text-cherry">✔</span>
                  <div className="space-y-2">
                    <p className="font-heading text-xl font-bold">{item.title}</p>
                    <p className="text-base leading-relaxed">{item.body}</p>
                  </div>
                </div>
              ))}
              {BONUSES.map((bonus) => (
                <div key={bonus} className="flex gap-4 rounded-2xl border border-ivory/70 bg-white p-5">
                  <span className="text-2xl text-cherry">✔</span>
                  <p className="text-base leading-relaxed">{bonus}</p>
                </div>
              ))}
            </div>
            <div className="space-y-3 text-center text-espresso">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-espresso/70">Ukupna vrijednost: 214 €</p>
              <p className="text-base font-semibold uppercase tracking-[0.35em] text-espresso">
                Rečenice Strasti™ su nekoć bile dostupne kao samostalni program — ali više nisu u slobodnoj prodaji.
              </p>
              <p className="text-lg leading-relaxed text-espresso/85">
                Danas ih možeš aktivirati samo ovdje — u ovom trenutku.
              </p>
              <p className="text-2xl font-semibold text-espresso/70 line-through">214 €</p>
              <p className="text-6xl font-heading font-bold text-cherry">{amount ?? "67"} €</p>
              <p className="text-base leading-relaxed text-espresso/85">
                Danas ih dobivaš uz tvoju narudžbu Kompasa — za samo:
                <br />
                67 €
              </p>
              <p className="text-lg font-semibold text-espresso">
                Puni pristup Rečenicama Strasti™ i svim bonusima za 47 € – odmah.
              </p>
            </div>
            <CTAGroup
              paymentIntentId={priceId ? payment_intent : undefined}
              priceId={priceId ?? undefined}
            />
            <p className="text-center text-base leading-relaxed text-espresso/85">
              Ova stranica se prikazuje samo jednom.
              <br />
              Ako je zatvoriš — više joj nećeš moći pristupiti.
              <br />
              Ni sutra. Ni sljedeći tjedan. Ni kada sve opet krene nizbrdo.
            </p>
            <p className="text-center text-base leading-relaxed text-espresso/85">
              Jer više nikada nećeš naslijepo vjerovati energiji početka.
              <br />
              Sada znaš kako stvoriti ono što ostaje — čak i kad početna iskra prođe.
            </p>
          </div>
        </Section>

        <Section bg="white" title="Za koga je ovo?" contentClassName="space-y-6">
          <div className="grid gap-3 rounded-3xl bg-ivory p-6 shadow-card sm:grid-cols-2">
            {FOR_WHO.map((item) => (
              <div key={item} className="flex gap-3 text-base leading-relaxed text-espresso/90">
                <span className="text-xl text-cherry">–</span>
                <span>{item}</span>
              </div>
            ))}
          </div>
          <div className="rounded-3xl border border-dashed border-cherry/30 bg-white p-6 text-center text-base leading-relaxed text-espresso/90">
            [⟶ mjesto za svjedočanstva i komentare iz communityja ili screenshotove]
          </div>
        </Section>

        <Section bg="ivory" title="Detalji Programa" contentClassName="space-y-6">
          <div className="grid gap-4 md:grid-cols-2">
            {PROGRAM_DETAILS.map((detail) => (
              <div key={detail.label} className="rounded-2xl bg-white p-5 shadow-card">
                <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cherry">{detail.label}</p>
                <p className="mt-2 text-base leading-relaxed text-espresso/90">{detail.value}</p>
              </div>
            ))}
          </div>
        </Section>

        <Section bg="white" contentClassName="space-y-8 max-w-4xl">
          <h2 className="font-heading text-2xl font-bold text-espresso sm:text-3xl">
            Preporučeno za žene koje žele:
          </h2>
          <ul className="space-y-3 text-base leading-relaxed text-espresso/90">
            {PREPORUKE.map((item) => (
              <li key={item} className="flex items-start gap-3 rounded-2xl bg-ivory p-4 shadow-card">
                <span className="text-2xl text-cherry">✔</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <h3 className="font-heading text-xl font-bold text-espresso">Najčešće preuziman među:</h3>
          <ul className="space-y-3 text-base leading-relaxed text-espresso/90">
            {NAJCESE_PREUZIMAN.map((item) => (
              <li key={item} className="flex items-start gap-3 rounded-2xl bg-ivory p-4 shadow-card">
                <span className="text-2xl text-cherry">✔</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </Section>
      </main>
    </div>
  );
}
