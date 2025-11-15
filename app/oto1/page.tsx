import type { Metadata } from "next";
import Image from "next/image";
import Stripe from "stripe";
import { Section } from "@/components/Section";
import { CTAButton } from "@/components/CTAButton";
import { OneClickUpsellButton } from "@/components/one-click-upsell";

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



const coreBenefits = [
  {
    title: "Kviz kroz 4 faze odnosa",
    body:
      "Dobivaš točno strukturiran kviz koji koristiš dok odnos napreduje — prva poruka, dopisivanje i dogovor izlaska, prvi dejt, prvih mjesec dana. U svakoj fazi znaš što promatrati, što pitati i kako dobiti jasan emocionalni profil muškarca.",
    value: "U zasebnoj prodaji: 49 €",
  },
  {
    title: "Interpretacijski vodič “Zeleno, Žuto, Crveno”",
    body:
      "Praktično objašnjenje kako tumačiti njegove odgovore, ponašanja i nijanse komunikacije — bez da se izgubiš u analiziranju.",
    value: "U zasebnoj prodaji: 39 €",
  },
];

const bonuses = [
  {
    label: "BONUS 1",
    title: "Crveni Zastavnik™",
    body: "12 suptilnih ponašanja koja ti jasno govore da on nije ozbiljan. Checklist za brzo donošenje odluka.",
    value: "Vrijednost: 17 €",
  },
  {
    label: "BONUS 2",
    title: "7 rečenica koje ga emocionalno razotkrivaju",
    body: "Copy-paste fraze koje koristiš u razgovoru. Njegov odgovor otkriva sve.",
    value: "Vrijednost: 21 €",
  },
  {
    label: "BONUS 3",
    title: "Player vs. Zreo muškarac",
    body: "Screenshot biblioteka stvarnih poruka s analizama. Znaš iz prve tko je tko.",
    value: "Vrijednost: 27 €",
  },
  {
    label: "BONUS 4",
    title: "5 emocionalnih rupa",
    body: "Razlikuj emocionalno dostupnog muškarca od onog koji traži terapeuta, a ne partnericu.",
    value: "Vrijednost: 19 €",
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


type Props = {
  searchParams: Promise<{
    payment_intent?: string;
  }>;
};

const CTAGroup = ({
  paymentIntentId,
  primaryLabel = PRIMARY_LABEL,
  secondaryLabel = DECLINE_LABEL,
}: {
  paymentIntentId?: string;
  primaryLabel?: string;
  secondaryLabel?: string;
}) => (
  <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-center">
    {paymentIntentId ? (
      <OneClickUpsellButton
        paymentIntentId={paymentIntentId}
        label={primaryLabel}
        className="bg-[#1C7C7D] hover:bg-[#165a5c] text-ivory"
      />
    ) : (
      <CTAButton href="/portal" size="lg" className="bg-[#1C7C7D] text-ivory">
        {primaryLabel}
      </CTAButton>
    )}
    <CTAButton
      href="/oto1-no"
      size="lg"
      className="border border-[#6A1F29] text-[#6A1F29] bg-transparent hover:bg-[#6A1F29]/5"
    >
      {secondaryLabel}
    </CTAButton>
  </div>
);

export default async function Oto1Page({ searchParams }: Props) {
  const priceId = process.env.STRIPE_OTO1_PRICE_ID;
  const secret = process.env.STRIPE_SECRET_KEY;
  const { payment_intent } = await searchParams;

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

  const stripe = new Stripe(secret);
  const price = await stripe.prices.retrieve(priceId);
  const amount = price.unit_amount ? (price.unit_amount / 100).toFixed(2) : "37.00";

  return (
    <div className="bg-ivory text-espresso">
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
            <CTAGroup paymentIntentId={payment_intent} />
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
          <p className="text-base italic text-espresso/70">
            Vrijeme ti ne ističe – ali ako ga daješ krivima, onda nestaje brže nego što misliš.
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
          <blockquote className="text-lg leading-relaxed text-espresso/80">
            “Znam kako izgleda kad žena uđe u svoje 30-e s idejom da je još uvijek sve ispred nje... a onda joj jedna,
            dvije ili tri veze oduzmu ne samo vrijeme — već i onu finu vjeru u sebe.” <br />
            <span className="font-semibold">— Dunja, autorica Signala Strasti™</span>
          </blockquote>
        </Section>

        <Section
          bg="white"
          title="Nakon 100+ razgovora sa ženama… mogu ti reći samo ovo."
          contentClassName="space-y-4 text-lg text-espresso/85"
        >
          <p>
            “Znam kako izgleda kad žena uđe u svoje 30-e s idejom da je još uvijek sve ispred nje… a onda joj jedna,
            dvije ili tri veze oduzmu ne samo vrijeme — već i onu finu vjeru u sebe. Godine ti same po sebi ništa ne
            oduzimaju. Ali veze s krivim muškarcima? One uzmu najvrijednije: tvoju toplinu, tvoju spontanost, tvoju
            želju da vjeruješ. Ne želim da to bude tvoja priča. Zato sam napravila Kompas Strasti™. Da ne pogodiš opet
            na isti obrazac — u godinama kad si najviše svoja.”
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
          subtitle="“Kad ti netko pokaže tko je zapravo — vjeruj mu već prvi put.” — Maya Angelou"
          contentClassName="space-y-6"
        >
          <ol className="space-y-4 text-lg text-espresso/85">
            {stepItems.map((step) => (
              <li key={step.label} className="rounded-3xl bg-ivory/70 p-5 shadow-card">
                <p className="text-sm font-semibold uppercase tracking-[0.35em] text-cherry">
                  <span className="font-heading italic">{step.label}</span>
                </p>
                <h3 className="mt-2 font-heading text-2xl text-espresso">{step.title}</h3>
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
          <p>
            Tvoja intuicija te nikad nije lagala — ali ako ne znaš što gledaš, lako ti promakne ono najbitnije. Kompas
            Strasti™ je vodič kroz 5 najvažnijih znakova emocionalne zrelosti muškarca — u porukama, u načinu kako sluša,
            kako odgovara na neslaganje, i kako reagira kad osjeti tvoju ranjivost.
          </p>
          <p>
            Jer nije stvar u tome je li zgodan, uspješan i šarmantan... <br />...nego je li emocionalno prisutan kad to
            najviše trebaš.
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
          <p>Možda zvuči dramatično — ali je istina.</p>
          <p>
            Kompas Strasti™ nije u slobodnoj prodaji. Bio je. Zapravo, bio je jedan od naših najtraženijih i
            najviralnijih programa. Preko 500 žena iz Hrvatske je prošlo kroz njega — i nismo primili niti jednu
            negativnu poruku.
          </p>
          <p>
            Ali smo ga maknuli. Jer smo shvatili nešto važno: Ako žena još nije naučila kako aktivirati pravu pažnju
            muškarca — onda ovaj vodič ne pomaže u pravom trenutku. Zato ga sada dajemo isključivo kao poklon ženama koje
            su već prošle Signale Strasti™. Poput tebe.
          </p>
          <ul className="space-y-2">
            <li>Ovo je tvoj drugi korak.</li>
            <li>— Naučila si kako privući.</li>
            <li>— Sada učiš koga vrijedi pustiti unutra.</li>
          </ul>
          <p>
            Ako sada zatvoriš ovu stranicu — Kompas nećeš više moći kupiti. Ni sutra. Ni kasnije.
          </p>
        </Section>

        <Section
          bg="ivory"
          align="center"
          title="Tvoj alat za emocionalnu jasnoću prije nego ti uđe pod kožu."
          contentClassName="space-y-10"
        >
          <p className="text-lg text-espresso/85">
            Program <span className="font-semibold">Kompas <em className="text-cherry">Strasti™</em></span> ti daje potpuno
            isti dizajn, tempo i osjećaj kao na glavnoj stranici — samo s novim fokusom: <strong>da znaš koga puštaš
            unutra.</strong>
          </p>
          <div className="mx-auto max-w-3xl space-y-6 text-left text-espresso/90">
            {coreBenefits.map((item, index) => (
              <div key={item.title} className="flex gap-4">
                <span className="text-2xl text-cherry">✔</span>
                <div className="space-y-2">
                  <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cherry">
                    <span className="font-heading italic">Korak {index + 1}</span>
                  </p>
                  <p className="font-heading text-2xl font-bold">{item.title}</p>
                  <p>{item.body}</p>
                  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cherry">{item.value}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mx-auto max-w-3xl space-y-6 text-left text-espresso/90">
            <p className="text-center text-base font-semibold uppercase tracking-[0.3em] text-cherry">
              Također dobivaš i ove bonuse:
            </p>
            {bonuses.map((bonus) => (
              <div key={bonus.label} className="space-y-2 rounded-none">
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cherry">
                  <span className="font-heading italic">{bonus.label}</span>
                </p>
                <p className="font-heading text-xl font-bold">{bonus.title}</p>
                <p>{bonus.body}</p>
                <p className="text-sm font-semibold text-cherry">{bonus.value}</p>
              </div>
            ))}
          </div>
          <div className="mx-auto max-w-3xl space-y-4 text-center text-lg text-espresso/85">
            <p className="font-semibold">Ukupna vrijednost: 172 €</p>
            <p>
              Program <em className="text-cherry">Kompas Strasti™</em> bio je samostalno u prodaji po punoj cijeni. Ali danas ga ne možeš
              kupiti nigdje — osim ovdje. Dobivaš ga kao poklon uz tvoju narudžbu Signala Strasti™ — za samo{" "}
              <strong>{amount} €</strong>.
            </p>
            <div className="space-y-3">
              {payment_intent ? (
                <OneClickUpsellButton
                  paymentIntentId={payment_intent}
                  label={PRIMARY_LABEL}
                  className="w-full rounded-3xl bg-[#1C7C7D] px-8 py-5 text-base font-semibold uppercase tracking-wide text-ivory shadow-card transition hover:bg-[#165a5c]"
                />
              ) : (
                <CTAButton
                  href="/portal"
                  size="lg"
                  className="w-full rounded-3xl bg-[#1C7C7D] px-8 py-5 text-base font-semibold uppercase tracking-wide text-ivory shadow-card transition hover:bg-[#165a5c]"
                >
                  {PRIMARY_LABEL}
                </CTAButton>
              )}
              <CTAButton
                href="/oto1-no"
                size="lg"
                className="w-full rounded-3xl border border-[#6A1F29] bg-transparent px-8 py-5 text-base font-semibold uppercase tracking-wide text-[#6A1F29] transition hover:bg-[#6A1F29]/5"
              >
                {DECLINE_LABEL}
              </CTAButton>
            </div>
            <p className="text-sm italic text-espresso/70">
              Ova stranica se prikazuje samo jednom. Ako je zatvoriš, više nećeš moći pristupiti programu. Ni kasnije. Ni
              sutra. Ni sljedeći tjedan.
            </p>
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
          </div>
        </Section>

        <Section bg="ivory" contentClassName="space-y-6 text-center">
          <p className="text-lg text-espresso/90">
            ✔️ Privukla si njegov pogled. ✔️ Pokrenula si njegovu inicijativu.{" "}
            <strong>❌ Ali ako ne znaš tko je on</strong> — možeš opet izgubiti sebe.
          </p>
          <CTAGroup paymentIntentId={payment_intent} />
        </Section>
      </main>
    </div>
  );
}
