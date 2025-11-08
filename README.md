# Rečenice Strasti Frontend

Next.js 15 aplikacija (App Router) za prodajne stranice programa **Rečenice Strasti**, uključujući novi CRO landing `/test` izgrađen prema specu.

## Pokretanje lokalno

```bash
pnpm install
pnpm dev
```

Zatim otvori [http://localhost:3000](http://localhost:3000).

## Struktura & dizajn tokeni

- Globalne stilove pronaći ćeš u `app/globals.css`.
- Brand tokene (boje, sjene, radijusi, tipografija) exportamo iz `lib/brand.ts`. Ako trebaš mijenjati boje/fontove, update-aj vrijednosti tamo i u `tailwind.config.ts`.
- Tailwind već zna za brand boje (`espresso`, `cherry`, `blush`, `ivory`, `taupe`, `gold`) + custom sjenčanja (`shadow-glow`, `shadow-card`, `shadow-modal`).
- Komponente za landing su u `components/` (`CTAButton`, `Section`, `StepItem`, `ValueStack`, `StickyBar`, itd.).

## Nova landing stranica `/test`

- Hero s jednim primarnim CTA + sticky nav (desktop) i sticky CTA dock (mobile).
- Sekcije su točno po zahtjevu, a slike se nalaze u `public/images/`.
- Schema.org Product + FAQPage JSON-LD ugrađen je direktno na stranici.
- Sticky CTA dock se skriva kad je pricing dio (`#cijena`) vidljiv (IntersectionObserver).

## Build & deploy

Standardni Next build:

```bash
pnpm build
pnpm start
```

Ako dodaš nova pitanja/odgovore ili mijenjaš cijenu, ne zaboravi i na JSON-LD u `app/test/page.tsx`.
