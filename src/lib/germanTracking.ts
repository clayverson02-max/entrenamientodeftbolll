export const consentKey = "football-de-consent-v1";
type Pixel = ((...args: unknown[]) => void) & {
  queue?: unknown[][];
  loaded?: boolean;
  version?: string;
  push?: Pixel;
  callMethod?: (...args: unknown[]) => void;
};
type TrackingWindow = Window & { fbq?: Pixel; _fbq?: Pixel; footballPixelReady?: boolean };
export function hasConsent() {
  try {
    return localStorage.getItem(consentKey) === "accepted";
  } catch {
    return false;
  }
}
export function startMarketing() {
  if (!hasConsent()) return;
  const w = window as TrackingWindow;
  if (w.footballPixelReady) {
    w.fbq?.("consent", "grant");
    return;
  }
  const fbq: Pixel = function (...args: unknown[]) {
    if (fbq.callMethod) fbq.callMethod(...args);
    else fbq.queue?.push(args);
  };
  fbq.queue = [];
  fbq.loaded = true;
  fbq.version = "2.0";
  fbq.push = fbq;
  w.fbq = fbq;
  w._fbq = fbq;
  w.footballPixelReady = true;
  const script = document.createElement("script");
  script.src = "https://connect.facebook.net/en_US/fbevents.js";
  script.async = true;
  document.head.appendChild(script);
  fbq("consent", "grant");
  fbq("init", "889185807027175");
  fbq("track", "PageView");
}
export function saveConsent(accepted: boolean) {
  try {
    localStorage.setItem(consentKey, accepted ? "accepted" : "rejected");
  } catch {
    /* Tracking remains off without stored consent. */
  }
  if (accepted) startMarketing();
  else {
    (window as TrackingWindow).fbq?.("consent", "revoke");
    for (const name of ["_fbp", "_fbc"]) {
      document.cookie = `${name}=; Max-Age=0; path=/; SameSite=Lax`;
      const parts = location.hostname.split(".");
      for (let i = 0; i < parts.length - 1; i++)
        document.cookie = `${name}=; Max-Age=0; path=/; domain=.${parts.slice(i).join(".")}; SameSite=Lax`;
    }
  }
}
export function trackGerman(event: string, params: Record<string, unknown> = {}, standard = false) {
  if (!hasConsent()) return;
  try {
    (window as TrackingWindow).fbq?.(standard ? "track" : "trackCustom", event, params);
  } catch {
    /* Analytics never blocks navigation. */
  }
}
export function checkoutUrl(href: string, search: string) {
  const url = new URL(href);
  const existing = new Set(url.searchParams.keys());
  new URLSearchParams(search).forEach((value, key) => {
    if (!existing.has(key)) url.searchParams.append(key, value);
  });
  return url.toString();
}
