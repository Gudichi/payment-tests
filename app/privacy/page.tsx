import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Politika Privatnosti | Signali Strasti",
  description: "Politika privatnosti Signali Strasti - kako prikupljamo, koristimo i štitimo vaše osobne podatke.",
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-ivory py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-lg shadow-lg p-8 md:p-12">
          <h1 className="text-3xl md:text-4xl font-bold text-accent mb-8">
            Politika Privatnosti
          </h1>
          
          <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
            <p className="text-sm text-gray-500 mb-8">
              Posljednje ažurirano: {new Date().toLocaleDateString("hr-HR", { year: "numeric", month: "long", day: "numeric" })}
            </p>

            <section>
              <h2 className="text-2xl font-semibold text-accent mt-8 mb-4">
                1. Uvod
              </h2>
              <p>
                Signali Strasti ("mi", "nas", "naš") poštuje vašu privatnost i obvezuje se štititi vaše osobne podatke. 
                Ova Politika privatnosti objašnjava kako prikupljamo, koristimo, dijelimo i štitimo vaše osobne podatke 
                kada koristite našu web stranicu i usluge.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-accent mt-8 mb-4">
                2. Podaci koje prikupljamo
              </h2>
              <p className="mb-4">Prikupljamo sljedeće vrste osobnih podataka:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Podaci za identifikaciju:</strong> ime, email adresa, telefonski broj</li>
                <li><strong>Podaci o plaćanju:</strong> informacije o kreditnoj kartici obrađuju se putem Stripe-a (ne pohranjujemo podatke o karticama na našim serverima)</li>
                <li><strong>Tehnički podaci:</strong> IP adresa, tip preglednika, operativni sustav, podaci o korištenju web stranice</li>
                <li><strong>Komunikacijski podaci:</strong> poruke koje nam šaljete putem emaila ili kontakt formulara</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-accent mt-8 mb-4">
                3. Kako koristimo vaše podatke
              </h2>
              <p className="mb-4">Vaše osobne podatke koristimo za sljedeće svrhe:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Pružanje i upravljanje našim uslugama</li>
                <li>Obradu plaćanja i upravljanje narudžbama</li>
                <li>Komunikaciju s vama u vezi s vašim narudžbama i upitima</li>
                <li>Slanje email obavijesti o vašim narudžbama i pristupnim podacima</li>
                <li>Poboljšanje naših usluga i korisničkog iskustva</li>
                <li>Pridržavanje zakonskih obveza</li>
                <li>Marketing i analitiku (uz vaš pristanak gdje je to potrebno)</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-accent mt-8 mb-4">
                4. Dijeljenje podataka s trećim stranama
              </h2>
              <p className="mb-4">
                Dijelimo vaše osobne podatke s sljedećim trećim stranama samo kada je to potrebno za pružanje naših usluga:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Stripe:</strong> za obradu plaćanja (pogledajte Stripe Privacy Policy)</li>
                <li><strong>Postmark:</strong> za slanje email obavijesti o narudžbama</li>
                <li><strong>Klaviyo:</strong> za email marketing (uz vaš pristanak)</li>
                <li><strong>PostHog:</strong> za analitiku i praćenje korištenja web stranice</li>
                <li><strong>Meta (Facebook Pixel):</strong> za marketing i analitiku (uz vaš pristanak)</li>
                <li><strong>Pružatelji hosting usluga:</strong> za hosting i održavanje naše web stranice</li>
              </ul>
              <p className="mt-4">
                Ne prodajemo vaše osobne podatke trećim stranama. Svi naši partneri su obvezni štititi vaše podatke 
                u skladu s primjenjivim zakonima o zaštiti podataka.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-accent mt-8 mb-4">
                5. Sigurnost podataka
              </h2>
              <p>
                Primjenjujemo odgovarajuće tehničke i organizacijske mjere za zaštitu vaših osobnih podataka od 
                neovlaštenog pristupa, gubitka, uništenja ili promjene. Međutim, nijedan način prijenosa podataka 
                preko interneta ili elektroničkog pohranjivanja nije 100% siguran, stoga ne možemo jamčiti apsolutnu sigurnost.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-accent mt-8 mb-4">
                6. Vaša prava
              </h2>
              <p className="mb-4">U skladu s GDPR-om i drugim primjenjivim zakonima, imate sljedeća prava:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Pravo na pristup:</strong> možete zatražiti kopiju osobnih podataka koje imamo o vama</li>
                <li><strong>Pravo na ispravak:</strong> možete zatražiti ispravak netočnih ili nepotpunih podataka</li>
                <li><strong>Pravo na brisanje:</strong> možete zatražiti brisanje vaših osobnih podataka u određenim okolnostima</li>
                <li><strong>Pravo na ograničenje obrade:</strong> možete zatražiti ograničenje obrade vaših podataka</li>
                <li><strong>Pravo na prigovor:</strong> možete prigovoriti obradi vaših osobnih podataka za marketing svrhe</li>
                <li><strong>Pravo na prenosivost podataka:</strong> možete zatražiti prijenos vaših podataka drugom pružatelju usluga</li>
                <li><strong>Pravo na povlačenje pristanka:</strong> možete povući svoj pristanak za obradu podataka u bilo kojem trenutku</li>
              </ul>
              <p className="mt-4">
                Za ostvarivanje ovih prava, kontaktirajte nas na: <a href="mailto:info@signalistrasti.com" className="text-cherry hover:underline">info@signalistrasti.com</a>
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-accent mt-8 mb-4">
                7. Kolačići (Cookies)
              </h2>
              <p>
                Naša web stranica koristi kolačiće za poboljšanje korisničkog iskustva, analitiku i marketing. 
                Kolačići su male tekstualne datoteke koje se pohranjuju na vašem uređaju. Možete upravljati 
                kolačićima kroz postavke svog preglednika, ali to može utjecati na funkcionalnost web stranice.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-accent mt-8 mb-4">
                8. Zadržavanje podataka
              </h2>
              <p>
                Zadržavamo vaše osobne podatke samo onoliko dugo koliko je potrebno za svrhe navedene u ovoj 
                Politici privatnosti, osim ako zakon ne zahtijeva ili ne dopušta duže zadržavanje. Podaci o 
                plaćanjima zadržavaju se u skladu s zakonskim obvezama za računovodstvene svrhe.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-accent mt-8 mb-4">
                9. Promjene Politike privatnosti
              </h2>
              <p>
                Možemo povremeno ažurirati ovu Politiku privatnosti. O svim značajnim promjenama obavijestit 
                ćemo vas putem emaila ili obavijesti na našoj web stranici. Preporučujemo da redovito pregledavate 
                ovu stranicu kako biste bili informirani o tome kako štitimo vaše podatke.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-accent mt-8 mb-4">
                10. Kontakt
              </h2>
              <p className="mb-4">
                Ako imate pitanja ili zabrinutosti u vezi s ovom Politikom privatnosti ili našim rukovanjem 
                vašim osobnim podacima, kontaktirajte nas:
              </p>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="mb-2"><strong>Email:</strong> <a href="mailto:info@signalistrasti.com" className="text-cherry hover:underline">info@signalistrasti.com</a></p>
                <p><strong>Web stranica:</strong> <a href="https://signalistrasti.com" className="text-cherry hover:underline">signalistrasti.com</a></p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-accent mt-8 mb-4">
                11. Pravni temelj obrade
              </h2>
              <p className="mb-4">Obrađujemo vaše osobne podatke na temelju sljedećih pravnih osnova:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Izvršavanje ugovora:</strong> za pružanje usluga koje ste naručili</li>
                <li><strong>Zakonska obveza:</strong> za ispunjavanje naših zakonskih obveza (npr. računovodstvo)</li>
                <li><strong>Legitimni interes:</strong> za poboljšanje naših usluga i zaštitu naših prava</li>
                <li><strong>Pristanak:</strong> za marketing i analitiku (gdje je potreban vaš pristanak)</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-accent mt-8 mb-4">
                12. Međunarodni prijenos podataka
              </h2>
              <p>
                Vaši osobni podaci mogu biti preneseni i obrađeni u zemljama izvan Europske ekonomske zone (EEZ). 
                U takvim slučajevima, osiguravamo da su primjenjene odgovarajuće zaštitne mjere u skladu s 
                primjenjivim zakonima o zaštiti podataka.
              </p>
            </section>

            <div className="mt-12 pt-8 border-t border-gray-200">
              <p className="text-sm text-gray-500">
                Ova Politika privatnosti je usklađena s Općom uredbom o zaštiti podataka (GDPR) i drugim 
                primjenjivim zakonima o zaštiti podataka.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

