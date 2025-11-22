/**
 * Meta (Facebook) pixel helpers for the Signali Strasti funnel.
 *
 * Events matrix (per brief):
 * - Global: PageView on every route (handled via MetaPixelProvider + trackPageView).
 * - /        : ViewContent, RS_Landing_Landed + CTA / checkout events.
 * - /adv2    : RS_Adv2_Landed.
 * - /oto1    : RS_OTO1_Landed + Yes/No clicks.
 * - /oto1-no : RS_OTO1No_Landed + Yes/No clicks.
 * - /oto2    : RS_OTO2_Landed + Yes/No clicks.
 * - /oto2-no : RS_OTO2No_Landed + Yes/No clicks.
 * - /hvala   : Purchase + RS_ThankYou_Landed.
 */

const DATASET_ID = "1340314074457994";
const PIXEL_SCRIPT_ID = "meta-pixel-script";
let hasInitiatedCheckout = false;

const isBrowser = () => typeof window !== "undefined";

const loadPixel = () => {
  if (!isBrowser()) return;
  if (document.getElementById(PIXEL_SCRIPT_ID)) return;

  ((f: any, b: Document, e: string, v: string, n?: any, t?: HTMLScriptElement, s?: HTMLScriptElement) => {
    if (f.fbq) return;
    n = f.fbq = function () {
      n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments);
    };
    if (!f._fbq) f._fbq = n;
    n.push = n;
    n.loaded = true;
    n.version = "2.0";
    n.queue = [];
    t = b.createElement(e) as HTMLScriptElement;
    t.async = true;
    t.id = PIXEL_SCRIPT_ID;
    t.src = v;
    s = b.getElementsByTagName(e)[0] as HTMLScriptElement;
    s.parentNode?.insertBefore(t, s);
  })(window, document, "script", "https://connect.facebook.net/en_US/fbevents.js");
};

/** Init pixel and fire a PageView (idempotent). */
export function initMetaPixel(): void {
  if (!isBrowser()) return;
  loadPixel();
  const w = window as any;
  if (!w.fbq) return;
  try {
    w.fbq("init", DATASET_ID);
    w.fbq("track", "PageView");
  } catch (error) {
    console.warn("Meta pixel init skipped", error);
  }
}

export function trackPageView(url?: string, params?: Record<string, any>): void {
  if (!isBrowser()) return;
  const w = window as any;
  if (!w.fbq) return;
  w.fbq("track", "PageView", { path: url ?? window.location.pathname, ...params });
}

export function trackViewContent(params?: Record<string, any>): void {
  if (!isBrowser()) return;
  const w = window as any;
  if (!w.fbq) return;
  w.fbq("track", "ViewContent", { route: "/", ...params });
}

export function trackCustomEvent(name: string, params?: Record<string, any>): void {
  if (!isBrowser()) return;
  const w = window as any;
  if (!w.fbq) return;
  w.fbq("trackCustom", name, params ?? {});
}

export function trackInitiateCheckout(params?: Record<string, any>): void {
  if (!isBrowser() || hasInitiatedCheckout) return;
  const w = window as any;
  if (!w.fbq) return;
  hasInitiatedCheckout = true;
  const payload = { currency: "EUR", ...params };
  w.fbq("track", "InitiateCheckout", payload);
  w.fbq("trackCustom", "RS_Checkout_Opened", { route: "/", ...params });
}

export function trackPurchase(totalValue: number, extra?: Record<string, any>): void {
  if (!isBrowser()) return;
  const w = window as any;
  if (!w.fbq) return;
  w.fbq("track", "Purchase", {
    value: totalValue,
    currency: "EUR",
    ...extra,
  });
}

export const __metaDoc = `Meta tracking helpers live in lib/meta.ts.
- Use MetaPixelProvider in layout for global init + PageView on navigation.
- Use TrackMetaEventOnce or call trackCustomEvent for page-specific pings.
- Wire new funnel experiments by importing trackCustomEvent in client components.`;
