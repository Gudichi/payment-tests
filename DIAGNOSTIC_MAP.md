# 📌 DIAGNOSTIC MAP - Meta Pixel Tracking Implementation

## === ROUTE MAP ===

### Main Routes (page.tsx files):
1. **`/` (root)** → `app/page.tsx` → Re-exports `app/test/page.tsx` (main landing page)
2. **`/test`** → `app/test/page.tsx` → Main landing page with InlineCheckout
3. **`/adv2`** → `app/adv2/page.tsx` → Advertorial page with CTAButton to `/`
4. **`/oto1`** → `app/oto1/page.tsx` → First OTO page (Kompas Strasti™ - 37€)
5. **`/oto1-no`** → `app/oto1-no/page.tsx` → OTO1 decline page
6. **`/oto2`** → `app/oto2/page.tsx` → Second OTO page (Rečenice Strasti™ - 57€)
7. **`/oto2-no`** → `app/oto2-no/page.tsx` → OTO2 decline page
8. **`/hvala`** → `app/hvala/page.tsx` → Thank you / completion page (redirects to /oto1 on success)
9. **`/adv1`** → `app/adv1/page.tsx` → First advertorial page
10. **`/oto`** → `app/oto/page.tsx` → Generic OTO page
11. **`/portal`** → `app/portal/page.tsx` → User portal (protected)
12. **`/prijava`** → `app/prijava/page.tsx` → Login page
13. **`/test2`** → `app/test2/page.tsx` → Alternative test page

### Component Files (NOT routes):
- `app/checkout.tsx` → Checkout component (used by InlineCheckout)
- `app/checkout2.tsx` → Alternative checkout component
- `app/atf.tsx` → Above-the-fold component
- `app/faq.tsx` → FAQ component
- `app/timed-content.tsx` → Timed content component
- `app/versions.ts` → Version config

### Route Identification:
- **`/adv2`** → `app/adv2/page.tsx` ✅
- **`/` (main landing)** → `app/page.tsx` → `app/test/page.tsx` ✅
- **`/oto1`** → `app/oto1/page.tsx` ✅
- **`/oto1-no`** → `app/oto1-no/page.tsx` ✅
- **`/oto2`** → `app/oto2/page.tsx` ✅
- **`/oto2-no`** → `app/oto2-no/page.tsx` ✅
- **`/hvala`** → `app/hvala/page.tsx` ✅

---

## === CTA / CHECKOUT / BUMP MAP ===

### CTA Button Components:
1. **`components/CTAButton.tsx`** ✅
   - Main CTA button component
   - Used across: `/adv2`, `/oto1`, `/oto1-no`, `/oto2`, `/oto2-no`, `/test`
   - Supports `scrollToCheckout` prop for smooth scrolling
   - Links to various routes (/, /oto1, /oto2, /hvala, etc.)

2. **Inline Checkout Component:**
   - **`components/InlineCheckout.tsx`** ✅
     - Wraps `app/checkout.tsx` or `app/checkout2.tsx`
     - Used on main landing page (`/test`)
     - Opens checkout form inline when button clicked

3. **Checkout Components:**
   - **`app/checkout.tsx`** ✅
     - Main checkout with 2 order bumps (9€ and 13€)
     - Uses `PaymentElements` component
   - **`app/checkout2.tsx`** ✅
     - Alternative checkout with 1 order bump (1€)
     - Simpler version

4. **Payment Form:**
   - **`components/payment-form.tsx`** ✅
     - Stripe payment form
     - Handles order bumps via props
   - **`components/payment-elements.tsx`** ✅
     - Wraps payment form
     - Manages order bump state

### Order Bump Checkboxes (9€ and 13€):
**Location:** `app/checkout.tsx` (lines 8-38)

```typescript
const ORDER_BUMPS = [
  {
    id: "nekabroj",
    title: "Neka on pita za tvoj broj",
    price: 9,  // ✅ 9€ bump
    oldPrice: 37,
    image: "/Bonus-3.png",
  },
  {
    id: "lokacijskimagnetizam",
    title: "Lokacijski Magnetizam",
    price: 13,  // ✅ 13€ bump
    oldPrice: 34,
    image: "/Lokaciskimagentizam-min.png",
  },
];
```

**Rendered in:**
- `components/payment-form.tsx` (lines 122-182) - via `orderBumps` prop
- `components/payment-elements.tsx` - passes bumps to payment-form

**Tracking needed:**
- When checkbox is checked/unchecked
- When payment is submitted with bumps selected

---

## === ANALYTICS STATE ===

### Existing Tracking:

1. **Meta Pixel (OLD - in layout.tsx):**
   - ✅ **Location:** `app/layout.tsx` (lines 31-40, 93-99)
   - ✅ **Status:** OLD inline script implementation
   - ✅ **Pixel ID:** `1340314074457994`
   - ✅ **Current:** Inline script in `<head>` with `fbq('init')` and `fbq('track', 'PageView')`
   - ⚠️ **Action needed:** REMOVE this old implementation

2. **Meta Pixel Helpers (NEW - lib/meta.ts):**
   - ✅ **Location:** `lib/meta.ts`
   - ✅ **Status:** NEW helper functions exist but NOT YET USED
   - ✅ **Functions available:**
     - `initMetaPixel()` - Initialize pixel
     - `trackPageView()` - Track page views
     - `trackViewContent()` - Track ViewContent event
     - `trackCustomEvent()` - Track custom events
     - `trackInitiateCheckout()` - Track checkout initiation
     - `trackPurchase()` - Track purchases
   - ⚠️ **Action needed:** Create MetaPixelProvider and integrate

3. **Old Pixel Helper (lib/pixel.ts):**
   - ✅ **Location:** `lib/pixel.ts`
   - ✅ **Status:** Simple wrapper functions (pageView, event)
   - ✅ **Used in:** `components/client-event.tsx`
   - ⚠️ **Action needed:** May need to update or replace

4. **PostHog Analytics:**
   - ✅ **Location:** `app/providers.tsx`
   - ✅ **Status:** ACTIVE - PostHogProvider wraps app
   - ✅ **Used in:** 
     - `app/hvala/page.tsx` (PostHogThankYouTracker)
     - `app/timed-content.tsx` (checkout_intent, checkout_abandon events)
   - ✅ **No action needed** - Keep as is

5. **Google Analytics:**
   - ✅ **Location:** `app/layout.tsx` (lines 101-112)
   - ✅ **Status:** COMMENTED OUT (not active)
   - ✅ **No action needed** - Leave commented

### Tracking Events Currently Fired:
- PostHog: `checkout_intent`, `checkout_abandon`, `purchase`, `payment_failed`
- Old Meta Pixel: `PageView` (on every page via layout.tsx)
- ClientEvent component: Uses old `lib/pixel.ts` (used in `/hvala` for Purchase event)

---

## === NEXT STEPS (FILE BY FILE) ===

### 1. **MetaPixelProvider Setup**

**File:** `components/MetaPixelProvider.tsx` (CREATE NEW)
- Create client component provider
- Initialize Meta Pixel using `lib/meta.ts` functions
- Track PageView on route changes (use Next.js router events)
- Wrap app in `app/layout.tsx`

**File:** `app/layout.tsx` (MODIFY)
- Remove old inline Meta Pixel script (lines 31-40, 93-99)
- Import and add `<MetaPixelProvider>` wrapper
- Keep PostHogProvider (nested inside MetaPixelProvider)

---

### 2. **Remove Old Pixel**

**File:** `app/layout.tsx` (MODIFY)
- Remove `pixelScript` constant (lines 31-40)
- Remove `<Script id="fb-pixel">` (lines 93-99)

**File:** `lib/pixel.ts` (OPTIONAL - REVIEW)
- Decide if we keep for backward compatibility or migrate to `lib/meta.ts`
- Currently used by `components/client-event.tsx`

**File:** `components/client-event.tsx` (OPTIONAL - UPDATE)
- Consider updating to use `lib/meta.ts` instead of `lib/pixel.ts`

---

### 3. **Tracking Events on `/adv2`**

**File:** `app/adv2/page.tsx` (MODIFY)
- Add `useEffect` or client component wrapper
- Track `RS_Adv2_Landed` custom event on mount
- Track `PageView` (handled by MetaPixelProvider, but can add explicit call)

**Events to track:**
- `RS_Adv2_Landed` (custom event) - on page load
- `PageView` - automatic via provider

---

### 4. **Tracking Events on `/` (main landing)**

**File:** `app/test/page.tsx` (MODIFY)
- Track `ViewContent` event on mount
- Track `RS_Landing_Landed` custom event on mount
- Track `InitiateCheckout` when InlineCheckout button is clicked
- Track `RS_Checkout_Opened` custom event when checkout opens

**Events to track:**
- `ViewContent` - on page load
- `RS_Landing_Landed` (custom) - on page load
- `InitiateCheckout` - when checkout button clicked
- `RS_Checkout_Opened` (custom) - when checkout opens

**File:** `components/InlineCheckout.tsx` (MODIFY)
- Add tracking when `handleClick` is called (checkout opens)
- Fire `InitiateCheckout` and `RS_Checkout_Opened` events

---

### 5. **Tracking Events on OTO Pages**

**File:** `app/oto1/page.tsx` (MODIFY)
- Track `RS_OTO1_Landed` custom event on mount
- Track `RS_OTO1_Yes` when "Yes" button clicked (OneClickUpsellButton or CTAButton to /oto2)
- Track `RS_OTO1_No` when "No" button clicked (CTAButton to /oto1-no)

**File:** `app/oto1-no/page.tsx` (MODIFY)
- Track `RS_OTO1No_Landed` custom event on mount
- Track `RS_OTO1No_Yes` when "Yes" button clicked (back to /oto1)
- Track `RS_OTO1No_No` when "No" button clicked (to /oto2)

**File:** `app/oto2/page.tsx` (MODIFY)
- Track `RS_OTO2_Landed` custom event on mount
- Track `RS_OTO2_Yes` when "Yes" button clicked (OneClickUpsellButton to /hvala)
- Track `RS_OTO2_No` when "No" button clicked (CTAButton to /oto2-no)

**File:** `app/oto2-no/page.tsx` (MODIFY)
- Track `RS_OTO2No_Landed` custom event on mount
- Track `RS_OTO2No_Yes` when "Yes" button clicked (back to /oto2)
- Track `RS_OTO2No_No` when "No" button clicked (to /hvala)

**Components to modify:**
- `components/CTAButton.tsx` - Add optional tracking prop for click events
- `components/one-click-upsell.tsx` - Add tracking on success

---

### 6. **Purchase Tracking on `/hvala`**

**File:** `app/hvala/page.tsx` (MODIFY)
- Track `Purchase` event with value and currency
- Track `RS_ThankYou_Landed` custom event on mount
- Extract payment amount from `paymentIntent` object
- Fire events only once (use sessionStorage or similar)

**Current state:**
- Already has `ClientEvent` component firing Purchase (line 149-154)
- Uses old `lib/pixel.ts` - needs to migrate to `lib/meta.ts`
- Already has PostHog tracking (keep as is)

**Events to track:**
- `Purchase` - with value, currency, order_id
- `RS_ThankYou_Landed` (custom) - on page load

---

### 7. **Order Bump Tracking**

**File:** `app/checkout.tsx` (MODIFY)
- Track when bump checkboxes are checked/unchecked
- Track bump selections in checkout metadata (already done)
- Fire events: `RS_Bump_Selected` or similar when bumps are toggled

**File:** `components/payment-form.tsx` (MODIFY)
- Add tracking in `onToggleBump` handler
- Track individual bump selections (9€ and 13€)

**Events to track:**
- `RS_Bump_9EUR_Selected` - when 9€ bump checked
- `RS_Bump_13EUR_Selected` - when 13€ bump checked
- `RS_Bump_9EUR_Removed` - when 9€ bump unchecked
- `RS_Bump_13EUR_Removed` - when 13€ bump unchecked

---

## === SUMMARY OF FILES TO MODIFY ===

### CREATE NEW:
1. `components/MetaPixelProvider.tsx` - Provider component

### MODIFY EXISTING:
1. `app/layout.tsx` - Remove old pixel, add MetaPixelProvider
2. `app/test/page.tsx` - Add ViewContent, RS_Landing_Landed, InitiateCheckout tracking
3. `app/adv2/page.tsx` - Add RS_Adv2_Landed tracking
4. `app/oto1/page.tsx` - Add RS_OTO1_Landed, Yes/No click tracking
5. `app/oto1-no/page.tsx` - Add RS_OTO1No_Landed, Yes/No click tracking
6. `app/oto2/page.tsx` - Add RS_OTO2_Landed, Yes/No click tracking
7. `app/oto2-no/page.tsx` - Add RS_OTO2No_Landed, Yes/No click tracking
8. `app/hvala/page.tsx` - Update Purchase tracking to use lib/meta.ts, add RS_ThankYou_Landed
9. `components/InlineCheckout.tsx` - Add InitiateCheckout tracking
10. `components/CTAButton.tsx` - Add optional tracking prop
11. `components/one-click-upsell.tsx` - Add tracking on success
12. `app/checkout.tsx` - Add bump selection tracking
13. `components/payment-form.tsx` - Add bump toggle tracking
14. `components/client-event.tsx` - Update to use lib/meta.ts (optional)

### REVIEW (OPTIONAL):
- `lib/pixel.ts` - Decide if deprecated or kept for compatibility

---

## === KEY CONSTANTS ===

- **Meta Pixel ID:** `1340314074457994` (from lib/meta.ts and layout.tsx)
- **Base Price:** `17€` (from app/checkout.tsx)
- **Order Bump 1:** `9€` - "Neka on pita za tvoj broj" (id: "nekabroj")
- **Order Bump 2:** `13€` - "Lokacijski Magnetizam" (id: "lokacijskimagnetizam")
- **OTO1 Price:** `37€` (Kompas Strasti™)
- **OTO2 Price:** `57€` (Rečenice Strasti™)

---

## === NOTES ===

1. **lib/meta.ts already exists** with all helper functions - just needs to be integrated
2. **Old pixel script in layout.tsx** must be removed before adding new provider
3. **PostHog tracking** should remain untouched (separate analytics)
4. **All tracking should be client-side** - use "use client" directive where needed
5. **Use sessionStorage/localStorage** to prevent duplicate events on page refresh
6. **Custom events** use `trackCustomEvent()` from lib/meta.ts
7. **Standard events** (PageView, ViewContent, InitiateCheckout, Purchase) use dedicated functions

---

**END OF DIAGNOSTIC MAP**

