import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Stripe from "stripe";
import { redirect } from "next/navigation";
import { Section } from "@/components/Section";
import { CTAButton } from "@/components/CTAButton";
import { OneClickUpsellButton } from "@/components/one-click-upsell";

export const metadata: Metadata = {
  title: "Kompas Strasti™ — One Time Offer",
  description:
    "Dodatni vodič koji otkriva je li on zreo ili se samo igra. Dostupno samo nakon Signala Strasti™.",
};

const PRIMARY_LABEL = "Da, želim znati tko je stvarno zreo — za 37 €";
const DECLINE_LABEL =
  "Ne, hvala. Radije riskiram da opet izgubim mjesece na pogrešnog.";

const stepItems = [
  {
    title: "Korak 1: Otvori aplikaciju",
    body:
      "Sve je organizirano po 4 faze odnosa. Odaberi gdje se nalazite — i pusti Kompas da vodi dalje.",
  },
  {
    title: "Korak 2: Primijeni kviz uživo",
    body:
      "U svakoj fazi dobivaš 3 pitanja i 3 ponašanja za promatranje. Samo pusti razgovor da teče.",
  },
  {
    title: "Korak 3: Kompas ti odmah daje signal",
    body:
      "🟢 Zreo | 🟡 Nesiguran | 🔴 Player — sve temeljem njegovih odgovora i ponašanja.",
  },
  {
    title: "Korak 4: Prati faze",
    body:
      "Kako odnos napreduje, otvaraš sljedeću fazu. Sve se događa u stvarnom vremenu, bez nagađanja.",
  },
];

const whatYouLearn = [
  "Kako prepoznati je li vođen egom ili autentičnom željom.",
  "Kako otkriti emocionalnu dubinu kroz komunikaciju.",
  "Kada je \"klik\" samo iluzija kompatibilnosti.",
  "Kako brzo prepoznati dosljednost i zrelost.",
];

const valueItems = [
  {
    name: "Kviz u 4 faze",
    value: "Vrijednost: 49 €",
    desc: "Jasna pitanja i promatranja u svakoj fazi odnosa.",
  },
  {
    name: "Vodič \"Zeleno, Žuto, Crveno\"",
    value: "Vrijednost: 39 €",
    desc: "Interpretacija ponašanja i odgovora bez nagađanja.",
  },
];

const bonusItems = [
  "Crveni Zastavnik™ – 12 ponašanja koja pokazuju da nije ozbiljan (17 €)",
  "7 Rečenica koje ga emocionalno razotkrivaju (21 €)",
  "Player vs. Zreo – screenshot biblioteka (27 €)",
  "5 emocionalnih rupa – razlikuj partnera od emocionalnog tereta (19 €)",
];

const productDetails = [
  "Trajanje: oko 1h 20min — primjenjivo znanje čim otvoriš.",
  "Format: PDF + interaktivni kviz kroz 4 faze.",
  "Autorica: Dunja M.",
  "Dizajniran za: Ženu koja želi znati — a ne nagađati.",
  "Emocionalni ton: Empatično. Jasno. Osnažujuće.",
  "Koristan za: Fazu upoznavanja, dopisivanja, prve dejtove.",
];

const forWho = [
  "Privlačiš pažnju — ali ne znaš koga puštaš unutra.",
  "Dosta ti je nagađanja i emocionalne magle.",
  "Želiš konkretan alat, a ne još jedno \"slušaj intuiciju\".",
  "Spremna si prestati gubiti vrijeme na iste obrasce.",
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
  paymentIntentId: string;
  primaryLabel?: string;
  secondaryLabel?: string;
}) => (
  <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-center">
    <OneClickUpsellButton
      paymentIntentId={paymentIntentId}
      label={primaryLabel}
      className="bg-cherry hover:bg-cherry/90 text-ivory"
    />
    <CTAButton
      href="/oto1-no"
      size="lg"
      className="bg-[#6A1F29] text-[#F8F5F0] hover:bg-[#4C0F1F]"
    >
      {secondaryLabel}
    </CTAButton>
  </div>
);

export default async function Oto1Page({ searchParams }: Props) {
  const priceId = process.env.STRIPE_OTO1_PRICE_ID;
  const secret = process.env.STRIPE_SECRET_KEY;
  const { payment_intent } = await searchParams;

  if (!payment_intent) {
    redirect("/portal");
  }

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
        Ova ponuda je dostupna samo <em>jednom</em> nakon Signala Strasti™
      </div>

      <main className="space-y-16 py-10 sm:space-y-24 sm:py-16">
        <section className="bg-ivory px-4 py-12 text-center sm:px-6 sm:py-16">
          <div className="mx-auto flex max-w-4xl flex-col items-center space-y-6">
            <h1 className="font-heading text-3xl font-bold sm:text-5xl">
              Čekaj, tvoja kupnja još nije gotova…
            </h1>
            <p className="text-base leading-relaxed text-espresso/80 sm:text-xl">
              Naučila si kako ga privući… <br />
              <strong>Sada nauči prepoznati je li vrijedan tvoje pažnje.</strong>
            </p>
            <p className="text-lg text-espresso/90">
              <strong>Kompas Strasti™</strong> ti daje jasan filter da u prvih 7 dana otkriješ
              želi li on zapravo tebe — ili se samo zabavlja.
            </p>
            <CTAGroup paymentIntentId={payment_intent} />
          </div>
        </section>

        <Section bg="white" contentClassName="text-center space-y-6">
          <p className="text-lg text-espresso/80">
            Ako ti ovo zvuči poznato — <strong>NISI SAMA.</strong> <br />I nisi luda što
            si vjerovala.
          </p>
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

        <Section bg="white" contentClassName="space-y-6 text-center">
          <blockquote className="text-2xl font-semibold text-cherry">
            “Zvučao je kao muškarac koji zna što želi... a onda nestao.”
          </blockquote>
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

        <Section bg="ivory" contentClassName="space-y-6 text-center">
          <Image
            src="/grafikon.png"
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
          title="Evo kako prestaješ gubiti vrijeme na pogrešne – u samo 4 faze"
          subtitle="“Kad ti netko pokaže tko je zapravo — vjeruj mu već prvi put.” — Maya Angelou"
          contentClassName="space-y-6"
        >
          <ol className="space-y-4 text-lg text-espresso/85">
            {stepItems.map((step) => (
              <li key={step.title} className="rounded-3xl bg-ivory/70 p-4 shadow-card">
                <p className="font-heading text-xl text-espresso">{step.title}</p>
                <p className="mt-2">{step.body}</p>
              </li>
            ))}
          </ol>
        </Section>

        <Section
          bg="ivory"
          title="Više ne moraš birati između intuicije i razuma."
          subtitle="Kompas Strasti™ je vodič kroz 5 ključnih znakova emocionalne zrelosti — u porukama, nesuglasicama i ranjivosti."
          contentClassName="space-y-4"
        >
          <ul className="space-y-3 text-lg text-espresso/85">
            {whatYouLearn.map((benefit) => (
              <li key={benefit} className="flex items-start gap-3">
                <span className="text-cherry">✔</span>
                <span>{benefit}</span>
              </li>
            ))}
          </ul>
        </Section>

        <Section
          bg="white"
          title="Nikad više nećeš moći pristupiti Kompasu Strasti™"
          contentClassName="space-y-4 text-lg text-espresso/85"
        >
          <p>
            Bio je to jedan od naših najpopularnijih vodiča. Preko 500 žena iz Hrvatske prošlo ga je bez ijedne
            negativne poruke. Sada je dostupan <strong>isključivo kao poklon</strong> uz Signale Strasti™.
          </p>
        </Section>

        <Section bg="ivory" title="Što točno dobivaš u Kompasu Strasti™" contentClassName="space-y-6">
          <div className="space-y-4">
            {valueItems.map((item) => (
              <div key={item.name} className="rounded-3xl bg-white p-4 shadow-card">
                <p className="font-heading text-xl text-espresso">{item.name}</p>
                <p className="text-sm uppercase tracking-[0.3em] text-cherry">{item.value}</p>
                <p className="mt-2 text-lg text-espresso/85">{item.desc}</p>
              </div>
            ))}
          </div>
          <div className="rounded-3xl border border-cherry/30 bg-white/70 p-4">
            <p className="font-heading text-2xl text-espresso">+ Svi bonusi:</p>
            <ul className="mt-3 space-y-2 text-lg text-espresso/85">
              {bonusItems.map((bonus) => (
                <li key={bonus}>{bonus}</li>
              ))}
            </ul>
            <p className="mt-4 font-semibold">Ukupna vrijednost: 172 €</p>
            <p className="text-lg text-espresso/80">
              Danas ga dobivaš kao poklon za polaznice Signala Strasti™ — za samo <strong>{amount} €</strong>.
            </p>
          </div>
        </Section>

        <Section bg="white" contentClassName="space-y-6 text-center">
          <h3 className="font-heading text-3xl text-espresso">Cijena danas: {amount} €</h3>
          <p className="text-lg text-espresso/80">
            Program Kompas Strasti™ bio je u redovnoj prodaji. Sada ga dobivaš odmah — bez dodatnog formulara.
          </p>
          <CTAGroup paymentIntentId={payment_intent} />
        </Section>

        <Section bg="ivory" title="Za koga je ovo?" contentClassName="space-y-4">
          <ul className="space-y-3 text-lg text-espresso/85">
            {forWho.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="text-cherry">✔</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </Section>

        <Section bg="white" title="Detalji programa" contentClassName="space-y-3 text-lg text-espresso/85">
          <ul className="space-y-3">
            {productDetails.map((detail) => (
              <li key={detail}>{detail}</li>
            ))}
          </ul>
        </Section>

        <Section bg="ivory" contentClassName="space-y-6 text-center">
          <p className="text-lg text-espresso/90">
            ✔️ Privukla si njegov pogled. ✔️ Pokrenula si njegovu inicijativu. <strong>❌ Ali ako ne znaš tko je on</strong> — možeš
            opet izgubiti sebe.
          </p>
          <CTAGroup paymentIntentId={payment_intent} />
        </Section>
      </main>
    </div>
  );
}

