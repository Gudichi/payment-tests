# UI/UX Dijagnostika - GoHighLevel Landing Page (/ghl)

## 📐 1. BOJE (Color Palette)

### Primarne boje (Brand Colors)
```typescript
espresso:  #1A1412  // Tamna primarna (tekst, pozadine)
cherry:    #C24858  // Akcentna crvena (CTA, naglasci)
ivory:     #F6F1EC  // Svetla pozadina
blush:     #E9C9C3  // Sekundarna (blaga roze)
taupe:     #C8B8A6  // Neutralna (sekundarna)
gold:      #D2A95B  // Zlatna (opciono)
```

### Korišćenje boja:

#### **Espresso (#1A1412)**
- Glavni tekst (`text-espresso`)
- CTA dugmad (alternativno)
- Announcement bar pozadina
- Primarna tekst boja za sve sekcije

#### **Cherry (#C24858)**
- Primarni CTA dugmad (`bg-[#C24858]`)
- Hover stanje: `#B03E4D` (tamnija nijansa)
- Checklist ikone (`text-cherry`)
- H3 naslovi (checklist titles) - `text-[#C24858]`
- Mini-quote tekst
- Eyebrow tekst
- "USKORO NA:" naslov

#### **Ivory (#F6F1EC)**
- Glavna pozadina (`bg-ivory`)
- CTA tekst (`text-[#F6F1EC]`)
- Announcement bar tekst

#### **Opacity varijante:**
- `text-espresso/85` - Subheadlines, body text
- `text-espresso/90` - Emphasized text
- `text-espresso/80` - Secondary text
- `text-espresso/70` - Tertiary text
- `text-cherry/90` - Eyebrow text

---

## 🔤 2. TIPOGRAFIJA (Typography)

### Font Families

#### **Heading Font**
```css
font-family: var(--font-heading), Poppins, sans-serif
```
- **Definisano u:** `lib/brand.ts` → `"Playfair Display", serif`
- **Override u kodu:** `Poppins` (Google Font)
- **Korišćenje:** H1, H2, H3, subheadlines, mini-quotes

#### **Body Font**
```css
font-family: var(--font-body), system-ui, sans-serif
```
- **Definisano u:** `lib/brand.ts` → `"Inter", system-ui...`
- **Korišćenje:** Body text, paragrafi

### Tipografska hijerarhija

#### **H1 (Hero Headline)**
```css
font-heading
text-[clamp(1.75rem, 5vw, 3rem)]  // 28px - 48px responsive
font-bold
leading-[1.3]
text-espresso
mb-4
max-w-[900px]
```
- **Primer:** "Počni slati signal zbog kojeg kvalitetan muškarac priđe."

#### **H2 (Section Headlines)**
```css
font-heading
text-3xl sm:text-4xl  // 30px / 36px
font-bold
text-espresso
```
- **Primer:** "Ovo će se promeniti nakon što pogledaš TRENING"
- **Varijante:**
  - `sm:text-5xl` u Section komponenti (eyebrow + title)
  - `max-w-4xl` za duže naslove

#### **H3 (Checklist/Mechanism Titles)**
```css
font-heading
text-lg  // 18px
uppercase
tracking-[0.15em]  // Letter spacing
text-[#C24858]  // Cherry red
font-semibold
mt-2 mb-3  // ili mt-4 mb-3, mt-6 mb-3
```
- **Primer:** "Prilazi tek kad mu mozak dobije dopuštenje da:"
- **Pravilo:** UPPERCASE, crvena boja, povećan letter-spacing

#### **Subheadline (Italic, pod H2)**
```css
font-heading
text-[clamp(1rem, 2.5vw, 1.25rem)]  // 16px - 20px
italic
font-normal
text-espresso/85  // ili text-espresso/90
leading-relaxed
max-w-[800px]
mt-4
```
- **Primer:** "Kvalitetan muškarac NE prilazi impulzivno."
- **Pravilo:** Italic, normal weight, konzistentna širina

#### **Mini-Quote**
```css
font-heading
text-[clamp(0.95rem, 2.3vw, 1.15rem)]  // 15.2px - 18.4px
text-cherry
italic
font-light
mb-6
```
- **Primer:** "„NJU BIRAM.""

#### **Body Text (Checklist Items)**
```css
text-lg  // 18px
text-espresso/85
leading-relaxed
space-y-2.5  // Vertical spacing između items
```
- **Primer:** Checklist bullet points

#### **Announcement Bar Text**
```css
text-xs sm:text-sm  // 12px / 14px
font-medium
uppercase
tracking-[0.1em]
```

#### **Eyebrow Text**
```css
text-xs  // 12px
font-semibold
uppercase
tracking-[0.35em]  // ili tracking-[0.3em]
text-cherry  // ili text-cherry/90
italic  // opciono
```

#### **CTA Button Text**
```css
text-[clamp(1rem, 2vw, 1.125rem)]  // 16px - 18px
font-bold
uppercase
tracking-[0.05em]
```

### Font Weights
- `font-light` - Mini-quote
- `font-normal` - Subheadlines, body text
- `font-medium` - Announcement bar
- `font-semibold` - H3, eyebrow
- `font-bold` - H1, H2, CTA buttons, emphasized text

### Line Heights
- `leading-[1.3]` - H1 (tight)
- `leading-tight` - H2 u Section komponenti
- `leading-relaxed` - Subheadlines, body text, checklists

### Letter Spacing (Tracking)
- `tracking-[0.05em]` - CTA buttons
- `tracking-[0.1em]` - Announcement bar, "USKORO NA:"
- `tracking-[0.15em]` - H3 (checklist titles)
- `tracking-[0.3em]` - Eyebrow (opciono)
- `tracking-[0.35em]` - Eyebrow u Section komponenti

---

## 📏 3. RAZMACI (Spacing)

### Container Widths

#### **Glavni Container (Sve sekcije)**
```css
max-w-[1100px]
mx-auto
w-full
```
- **Pravilo:** SVE sekcije koriste istu širinu (1100px)
- **Horizontal padding:**
  - Mobile: `px-4` (16px)
  - Desktop: `sm:px-6` (24px)

#### **Hero Content Container**
```css
max-w-[1100px]  // Isto kao ostale sekcije
px-4 py-6 sm:px-6 sm:py-8
```

#### **H1 Max Width**
```css
max-w-[900px]  // Uža od glavnog kontejnera
```

#### **Subheadline Max Width**
```css
max-w-[800px]  // Konzistentno kroz sve sekcije
```

#### **Checklist Max Width**
```css
max-w-3xl  // 768px
```

### Vertical Spacing

#### **Sekcije (Section Component)**
```css
px-4 py-16 sm:px-6 sm:py-24
```
- Mobile: `py-16` (64px)
- Desktop: `sm:py-24` (96px)

#### **Main Element**
```css
space-y-16 sm:space-y-24  // Spacing između sekcija
sm:py-12  // Bottom padding samo na desktopu
```

#### **ATF Hero Section**
```css
pt-0  // Flush na vrh
px-4 py-6 sm:px-6 sm:py-8  // Inner padding
```

#### **Element Spacing (između elemenata u sekciji)**
- `mb-4` - H1 bottom margin
- `mb-6` - Mini-quote, CTA button
- `mb-5` - Video bottom margin
- `mt-4` - Subheadline top margin
- `mt-2 mb-3` - H3 (checklist title) spacing
- `mt-6 mb-3` - H3 sa većim top marginom
- `gap-4` - Flex gap u sekcijama
- `gap-6` - Veći flex gap

#### **Checklist Spacing**
```css
space-y-2.5  // 10px između checklist items
gap-3  // Horizontal gap između ikone i teksta
```

#### **CTA Button Spacing**
```css
mb-6  // Bottom margin
marginTop: '16px'  // Inline style za spacing iznad (između video i CTA)
```

### Horizontal Spacing

#### **Logo Carousel (USKORO NA)**
```css
gap-6 sm:gap-10  // Mobile: 24px, Desktop: 40px
px-2 sm:px-3  // Padding oko logotipa
```

#### **Grid Gaps**
```css
gap-4  // Testimonials grid (16px)
```

---

## 🎨 4. KOMPONENTE I STILOVI

### CTA Buttons

#### **Primary CTA (Brand Red)**
```css
bg-[#C24858]
text-[#F6F1EC]
px-10
rounded-2xl
text-[clamp(1rem, 2vw, 1.125rem)]
font-bold
uppercase
tracking-[0.05em]
shadow-card
hover:bg-[#B03E4D]
transition-colors
height: 56px
w-full max-w-[600px]
```

#### **Secondary CTA (Dark)**
```css
bg-[#1A1412]  // espresso
text-[#F6F1EC]  // ivory
px-10 py-5
rounded-2xl
hover:opacity-90
```

### Announcement Bar
```css
w-full
bg-[#1A1412]
text-[#F6F1EC]
height: 40px
text-center
text-xs sm:text-sm
font-medium
uppercase
tracking-[0.1em]
```

### Images
```css
rounded-3xl  // Zaobljeni uglovi
w-full  // Full width u kontejneru
sm:w-3/4  // 75% width na desktopu (opciono)
```

### Video Container
```css
relative
w-full
max-w-[900px]
mb-5
paddingBottom: "56.25%"  // 16:9 aspect ratio
```

### Checklist Items
```css
flex items-start gap-3
text-lg
text-espresso/85
leading-relaxed
```

### Checklist Icons
```css
h-5 w-5  // 20px
text-cherry
flex-shrink-0
mt-1  // Alignment sa tekstom
```

---

## 📱 5. RESPONSIVE BREAKPOINTS

### Tailwind Default Breakpoints
- `sm:` - 640px i više
- `md:` - 768px i više
- `lg:` - 1024px i više
- `xl:` - 1280px i više
- `2xl:` - 1536px i više

### Korišćeni Breakpoints

#### **Mobile First (default)**
- Font sizes: `text-3xl` (30px)
- Padding: `px-4` (16px)
- Spacing: `gap-4`, `space-y-2.5`
- Logo size: `w-[156px] h-[156px]`
- Logo gap: `gap-6`

#### **Desktop (sm: i više)**
- Font sizes: `sm:text-4xl` (36px)
- Padding: `sm:px-6` (24px)
- Spacing: `sm:space-y-24` (96px)
- Logo size: `sm:w-[195px] sm:h-[195px]`
- Logo gap: `sm:gap-10`

### Clamp Functions (Fluid Typography)
- H1: `clamp(1.75rem, 5vw, 3rem)` - 28px do 48px
- Subheadline: `clamp(1rem, 2.5vw, 1.25rem)` - 16px do 20px
- Mini-quote: `clamp(0.95rem, 2.3vw, 1.15rem)` - 15.2px do 18.4px
- CTA text: `clamp(1rem, 2vw, 1.125rem)` - 16px do 18px
- "USKORO NA:": `clamp(1.5rem, 3.5vw, 2rem)` - 24px do 32px

---

## 🎯 6. BORDER RADIUS

```css
rounded-2xl  // 1rem (16px) - CTA buttons
rounded-3xl  // 1.5rem (24px) - Images, cards
```

**Definisano u:** `lib/brand.ts` → `brandRadii.xl = "1.25rem"`

---

## 🌑 7. SHADOWS

```css
shadow-card  // Koristi brandShadows.md
```

**Definisano u:** `lib/brand.ts`
- `sm: "0 10px 25px rgba(26, 20, 18, 0.08)"`
- `md: "0 20px 40px rgba(26, 20, 18, 0.12)"` ← **shadow-card**
- `lg: "0 30px 60px rgba(26, 20, 18, 0.16)"`

---

## 📋 8. TIPOGRAFSKA HIJERARHIJA - PRAVILA

### Pravilo 1: H2 (Main Section Headlines)
- **Font:** `font-heading`
- **Size:** `text-3xl sm:text-4xl`
- **Weight:** `font-bold`
- **Color:** `text-espresso`
- **Korišćenje:** SAMO za glavne naslove sekcija

### Pravilo 2: Subheadline (Ispod H2)
- **Font:** `font-heading`
- **Size:** `text-[clamp(1rem,2.5vw,1.25rem)]`
- **Style:** `italic`
- **Weight:** `font-normal` (NE bold)
- **Color:** `text-espresso/85` ili `text-espresso/90`
- **Width:** `max-w-[800px]` (konzistentno)
- **Alignment:** Centriran ili lijevo (zavisi od sekcije)

### Pravilo 3: H3 (Checklist/Mechanism Titles)
- **Font:** `font-heading`
- **Size:** `text-lg`
- **Style:** `uppercase`
- **Weight:** `font-semibold` (NE bold)
- **Color:** `text-[#C24858]` (cherry red)
- **Letter-spacing:** `tracking-[0.15em]`
- **Spacing:** `mt-2 mb-3` ili `mt-4 mb-3` ili `mt-6 mb-3`
- **Primeri:**
  - "Prilazi tek kad mu mozak dobije dopuštenje da:"
  - "Muški mozak radi mikro-provjere u sekundi:"
  - "I kad ga imaš… odjednom se mijenja film:"

### Pravilo 4: Checklist Text
- **Font:** Default (body)
- **Size:** `text-lg` (18px)
- **Color:** `text-espresso/85`
- **Line-height:** `leading-relaxed`
- **Spacing:** `space-y-2.5` (između items)
- **Alignment:** `text-left`
- **Icons:** `h-5 w-5 text-cherry`

### Pravilo 5: Visual Flow
```
H2 → Subheadline → H3 → Checklist → Image
```
- Jasna hijerarhija bez preklapanja veličina
- Konzistentni razmaci između elemenata

---

## ✅ 9. KONZISTENTNOST - CHECKLIST

### ✅ Širine sekcija
- [x] Sve sekcije koriste `max-w-[1100px]`
- [x] Nema custom/nested wrappers koji sužavaju širinu
- [x] Horizontal padding: `px-4 sm:px-6`

### ✅ Tipografija
- [x] H2: `text-3xl sm:text-4xl`, `font-bold`, `text-espresso`
- [x] Subheadline: `italic`, `font-normal`, `max-w-[800px]`
- [x] H3: `uppercase`, `text-lg`, `text-[#C24858]`, `tracking-[0.15em]`
- [x] Checklist: `text-lg`, `text-espresso/85`, `space-y-2.5`

### ✅ Boje
- [x] Primarna: `#1A1412` (espresso)
- [x] Akcent: `#C24858` (cherry)
- [x] Pozadina: `#F6F1EC` (ivory)
- [x] CTA: `#C24858` sa hover `#B03E4D`

### ✅ Razmaci
- [x] Sekcije: `py-16 sm:py-24`
- [x] Main spacing: `space-y-16 sm:space-y-24`
- [x] Checklist: `space-y-2.5`
- [x] CTA spacing: `mb-6` + `marginTop: 16px`

---

## 🚨 10. NAPOMENE I INCONSISTENCIES

### Hardcoded boje (trebalo bi koristiti Tailwind varijable)
- `bg-[#1A1412]` → trebalo bi biti `bg-espresso`
- `text-[#F6F1EC]` → trebalo bi biti `text-ivory`
- `bg-[#C24858]` → trebalo bi biti `bg-cherry`
- `text-[#C24858]` → trebalo bi biti `text-cherry`

### Inline styles (trebalo bi biti u Tailwind klasama)
- `style={{ height: '40px' }}` → može biti `h-10`
- `style={{ height: '56px' }}` → može biti `h-14`
- `style={{ marginTop: '16px' }}` → može biti `mt-4`
- `style={{ paddingBottom: "56.25%" }}` → može biti custom aspect ratio utility

### Font override
- `style={{ fontFamily: 'var(--font-heading), Poppins, sans-serif' }}` → koristi se umesto Tailwind `font-heading` klase

---

## 📊 11. SAŽETAK - KLJUČNI PRAVILA

1. **Širina:** Sve sekcije `max-w-[1100px]`, horizontal padding `px-4 sm:px-6`
2. **H2:** `text-3xl sm:text-4xl`, `font-bold`, `text-espresso`
3. **Subheadline:** `italic`, `font-normal`, `max-w-[800px]`, `text-espresso/85`
4. **H3:** `text-lg`, `uppercase`, `text-[#C24858]`, `tracking-[0.15em]`, `font-semibold`
5. **Checklist:** `text-lg`, `text-espresso/85`, `space-y-2.5`
6. **CTA:** `bg-[#C24858]`, `text-[#F6F1EC]`, `h-14`, `rounded-2xl`
7. **Spacing:** Sekcije `py-16 sm:py-24`, main `space-y-16 sm:space-y-24`

---

*Dokument kreiran: 2024*
*Stranica: `/ghl` (GoHighLevel Landing Page)*

