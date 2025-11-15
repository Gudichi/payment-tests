import type { Metadata } from "next";
import { Section } from "@/components/Section";
import { CTAButton } from "@/components/CTAButton";

export const metadata: Metadata = {
  title: "Kompas Strasti™ — Odustanak potvrđen",
  description: "Ako ipak poželiš dodatni alat za emocionalnu jasnoću, ponuda je još kratko otvorena.",
};

const testimonials = [
  { name: "Kristina Šarunić", stars: "★★★★★", body: "Kompas mi je doslovno spasija tri mjeseca života. Bila sam uvjerena da je jedan lik “ozbiljan” jer se fin ponaša… a Kompas mi ga označi kao žuti. Tjedan dana kasnije pokazalo se sve — neodgovorene poruke, toplo-hladno. Da nisam imala Kompas, opet bi izgubila vrijeme i samu sebe." },
  { name: "Marina Horvat", stars: "★★★★★", body: "Nakon dvije godine izlazaka i razočaranja, mislila sam da je problem u meni. Kompas mi je dao ono što sam izgubila — mir. Upoznala sam dečka u teretani, i u prva 3 dana sam vidjela po njegovim “signalima” da je zapravo stabilan i siguran. Sad smo tri mjeseca zajedno… prvi put osjećam da sam izabrala dobro." },
  { name: "Jelena Živković", stars: "★★★★★", body: "Kompas mi je otvorio oči u vezi jednog momka koji je bio “previše dobar da bi bio istinit”. Sve je djelovalo super, ali nešto nije štimalo. Odgovara sporadično, nestaje pa se vraća… Kompas ga je odmah stavio u kategoriju koju nikad više ne želim. I iskreno — osjećam olakšanje, kao da imam štit." },
  { name: "Ivona Tolić", stars: "★★★★★", body: "Prepoznala sam jednog kvalitetnog muškarca doslovno prvi tjedan. Nije bio najglasniji, ni najpametniji u društvu — ali sve što je radio poklapalo se s “zelenim” kriterijima. Da nisam imala Kompas, vjerovatno bih ga skroz preskočila. Sad mi je prvi put u životu lijepo biti birana… bez igrica." },
  { name: "Ana-Marija Prlić", stars: "★★★★★", body: "Onaj osjećaj kad shvatiš da si godinama normalizirala mrvice… Kompas mi je doslovno pokazao koliko sam dugo pristajala na polu-emocionalne muškarce. I prvi put kad sam ga koristila, točno sam znala s kim trebam prekinuti kontakt. Nema više lutanja. Prvi put osjećam samopoštovanje u odlukama." },
  { name: "Maja Vukelić", stars: "★★★★★", body: "Izlazila sam s likom koji je bio “zabavan”… ali nije bio tu kad treba. Kompas mi je dao jasnoću u tri dana — kad sam vidila kako se ponaša u realnim situacijama, bilo mi je jasno da je nezreo. Nisam plakala ovaj put. Samo sam pustila — i nastavila dalje sa smješkom." },
  { name: "Tea Pavlinić", stars: "★★★★★", body: "Frajer s kojim sam se dopisivala tjednima nikad nije konkretizirao susret. Kompas mi je dao kriterije i kroz to sam skužila da je samo ubijao vrijeme. Odma sam ga makla. Tjedan poslije upoznala jednog totalno normalnog, prisutnog i toplog lika u kafiću… i sve ide prirodno." },
  { name: "Ivana Herceg", stars: "★★★★★", body: "Nakon razvoda sam imala osjećaj kao da ne znam više procijeniti muškarca. Kompas mi je dao mir. Konkretne situacije, konkretni kriteriji. Jednom liku sam već na prvom dejtu znala da nije to — ne zna slušat, priča samo o sebi, izbjegava pitanja. Nisam se opet zavarala." },
  { name: "Paula Mihaljević", stars: "★★★★★", body: "Najbolji dejting alat koji sam ikad koristila. Bez glume. Bez “pravila igara”. Samo stvarne crvene zastavice koje prije nisam tila vidit. Kompas me naučio da ne moram čekati tri mjeseca da shvatim kakav je — nego mogu znat u par dana." },
  { name: "Katarina Mišetić", stars: "★★★★★", body: "Mislila sam da pretjerujem kad mi se javljao svakih par dana… ali Kompas je to odmah označio kao nezainteresiranog. I pogodilo je. Nakon toga sam dala šansu tipu koji je radio sve “zelene” korake — inicijativa, poštovanje, jasnoća. Sad smo stvarno zajedno." },
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

export default function Oto1NoPage() {
  return (
    <div className="bg-ivory text-espresso">
      <main className="space-y-16 py-12 sm:space-y-24 sm:py-20">
        <Section align="center" contentClassName="max-w-3xl space-y-6">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-cherry">
            Upravo si kliknula “Ne, hvala”…
          </p>
          <div className="space-y-4 text-lg text-espresso/85">
            <p className="font-heading text-2xl font-bold text-espresso">…što znači da si rekla “ne” Kompasu Strasti™</p>
            <p>…što znači da si odlučila nastaviti bez jasnog emocionalnog filtra</p>
            <p>…što znači da ćeš sljedeći put — opet sama morati procijeniti:</p>
            <ul className="space-y-2 text-left text-base">
              <li>– Što znači kad ti napiše “javim ti se”?</li>
              <li>– Što znači kad nestane nakon što si mu se otvorila?</li>
              <li>– Što znači kad je prisutan… ali ne znaš želi li nešto stvarno?</li>
            </ul>
            <p>I sve ćeš to pokušati analizirati bez alata.</p>
            <p>Sama.<br />Opet.</p>
            <p>I ti i ja znamo kako to najčešće završi.</p>
          </div>
        </Section>

        <Section align="center" contentClassName="max-w-3xl space-y-6">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-cherry">
            A možda nisi htjela reći “ne”…
          </p>
          <div className="space-y-4 text-lg text-espresso/85">
            <p className="font-heading text-2xl font-bold text-espresso">…možda si pomislila “Još ću razmisliti”.</p>
            <p>…možda ti je cijena u ovom trenutku zasmetala.</p>
            <p>…možda si pomislila “Nije hitno.”</p>
            <p>
              Ali ja znam nešto što ti možda ne osjećaš sada — ali hoćeš kasnije: Kad se javi onaj novi. Kad počneš
              osjećati leptiriće. Kad se opet pitaš: “Je li on stvarno taj?” Tada nećeš imati ovaj alat. I možda nećeš
              imati priliku ponovno ga uzeti.
            </p>
          </div>
        </Section>

        <Section align="center" contentClassName="max-w-3xl space-y-6">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-cherry">
            Zato ti želim olakšati odluku.
          </p>
          <div className="space-y-4 text-lg text-espresso/85">
            <p className="font-heading text-2xl font-bold text-espresso">
              Danas možeš dobiti cijeli Kompas Strasti™ i sve bonuse
            </p>
            <p>— ne za punu cijenu od 172 €, već za samo jednokratnu donaciju od 37 €</p>
            <p>kao ekskluzivni poklon jer si prošla Signale Strasti™.</p>
            <p>To nije trošak. To je osiguranje protiv još jedne izgubljene godine.</p>
          </div>
        </Section>

        <Section align="center" contentClassName="max-w-3xl space-y-6">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-cherry">
            Želiš da ti još jednom otvorim ponudu prije nego nestane?
          </p>
          <div className="space-y-4 text-lg text-espresso/85">
            <CTAButton href="/oto1" size="lg" className="w-full bg-[#1C7C7D] text-ivory hover:bg-[#165a5c]">
              Da, želim znati tko je stvarno zreo — prije nego uopće uđe pod moju kožu. Puni pristup Kompasu Strasti™ i
              svim bonusima za 37 € – odmah.
            </CTAButton>
            <CTAButton
              href="/oto2"
              size="lg"
              className="w-full border border-[#6A1F29] bg-transparent text-[#6A1F29] hover:bg-[#6A1F29]/5"
            >
              Ne, hvala. Radije riskiram da opet mjesecima nagađam tko je on — i možda ponovno izgubim najvrijednije
              godine na pogrešnog.
            </CTAButton>
          </div>
        </Section>

        <Section
          bg="white"
          title="Dojmovi polaznica"
          contentClassName="mx-auto max-w-5xl space-y-6"
        >
          <div className="grid gap-4 md:grid-cols-2">
            {testimonials.map((review) => (
              <article
                key={review.name + review.stars}
                className="rounded-3xl border border-[#e6eaf5] bg-ivory/60 p-6 text-left shadow-card"
              >
                <p className="font-heading text-lg font-bold text-espresso">
                  {review.name} — <span className="text-[#ff9c25]">{review.stars}</span>
                </p>
                <p className="mt-3 text-base leading-relaxed text-espresso/85">{review.body}</p>
              </article>
            ))}
          </div>
        </Section>
      </main>
    </div>
  );
}
