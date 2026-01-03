# Adv2 Sekcije za GoHighLevel Page Builder

Ovo su standalone HTML/JS sekcije iz `/adv2` stranice, spremne za insertovanje u GoHighLevel custom code blok.

## Struktura fajlova:

1. **01-header-section.html** - Header sa naslovom, kategorijom, byline, lead quote, cover image i hero intro
2. **02-as-seen-in-section.html** - "Viđeno u medijima" sekcija sa brand logotipima
3. **03-article-body-section.html** - Glavni advertorial sadržaj (tekst, slike, liste)
4. **04-advertorial-cta-section.html** - CTA sekcija (koristi se 2 puta u originalnoj stranici)
5. **05-comments-section.html** - Komentari korisnica sa formom za dodavanje novih komentara

## Kako koristiti:

1. Otvori GoHighLevel page builder
2. Dodaj "Custom Code" element gdje želiš sekciju
3. Kopiraj i paste cijeli sadržaj odgovarajućeg HTML fajla u custom code blok
4. Podesi putanje slika (`src` atributi) prema tvojoj GoHighLevel strukturi
5. Podesi linkove (npr. CTA button `href` atribut)

## Napomene:

- **Fontovi**: Koriste se Google Fonts (Poppins i Lora) - učitavaju se automatski kroz `<link>` tagove
- **Slike**: Putanje slika su relativne (`/hero-2.png`, `/adv1/24h.png`, itd.) - prilagodi ih prema tvojoj strukturi
- **Linkovi**: CTA button koristi `href="/"` - promijeni na željeni URL
- **CSS**: Svi stilovi su inline u `<style>` tagovima sa `adv2-` prefixom da izbjegne konflikte
- **JavaScript**: Comments sekcija ima funkcionalnost za dodavanje novih komentara (client-side only)

## Redoslijed sekcija u originalnoj stranici:

1. Header sekcija
2. As Seen In sekcija
3. Article Body sekcija
4. Advertorial CTA sekcija
5. Comments sekcija
6. Advertorial CTA sekcija (ponovo)

## Responsive design:

Sve sekcije su responsive i koriste `clamp()` za font veličine i media queries za različite ekrane.



