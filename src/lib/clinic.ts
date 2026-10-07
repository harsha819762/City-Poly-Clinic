/**
 * Single source of truth for clinic facts used by the page, metadata and JSON-LD.
 *
 * Supplied by the client: name, address, phone/WhatsApp number, Google rating + review count.
 * Everything tagged [PLACEHOLDER: ...] is NOT confirmed — collect it before launch
 * (run `grep -rn "PLACEHOLDER" src` for the full checklist).
 */

const addressLine = "48C, Immadihalli Main Rd, Immadihalli, Whitefield, Bengaluru, Karnataka 560066, India";

export const clinic = {
  name: "City Poly Clinic",
  trustLine: "Trusted Multi-Specialty Clinic in Whitefield",
  phone: {
    display: "+91 63611 08079",
    e164: "+916361108079",
  },
  address: {
    full: addressLine,
    street: "48C, Immadihalli Main Rd, Immadihalli",
    locality: "Whitefield",
    city: "Bengaluru",
    region: "Karnataka",
    postalCode: "560066",
    country: "IN",
  },
  // Google Business Profile figures as supplied. Update both together when the count changes.
  rating: {
    value: 4.7,
    count: 142,
  },
} as const;

const mapsQuery = encodeURIComponent(`${clinic.name}, ${addressLine}`);

const mapsListing = `https://www.google.com/maps/search/?api=1&query=${mapsQuery}`

export const links = {
  call: "tel:+916361108079",
  whatsapp:
    "https://wa.me/916361108079?text=Hi%2C%20I%27d%20like%20to%20book%20an%20appointment%20at%20City%20Poly%20Clinic",
  mapsListing,
  // [PLACEHOLDER: replace with the direct reviews link from the clinic's Google Business Profile,
  // e.g. https://search.google.com/local/reviews?placeid=<PLACE_ID>. Until then this opens the
  // same Maps listing, where the Reviews tab is one tap away.]
  googleReviews: mapsListing,
  directions: `https://www.google.com/maps/dir/?api=1&destination=${mapsQuery}`,
  mapEmbed: `https://www.google.com/maps?q=${mapsQuery}&output=embed`,
} as const;

// Canonical origin (+ base path) for canonical URLs, Open Graph, sitemap and JSON-LD. The GitHub
// Pages workflow sets SITE_URL automatically (it follows a custom domain once one is added); set
// it yourself when building for any other host. No trailing slash.
export const siteUrl =
  process.env.SITE_URL ??
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : "http://localhost:3000");

export const WEEKDAYS = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
] as const;

type Weekday = (typeof WEEKDAYS)[number];

// [PLACEHOLDER: confirm exact timings with client] Draft hours only. These feed the
// on-page hours list, the FAQ answer and the JSON-LD openingHoursSpecification.
export const openingHours: { days: readonly Weekday[]; opens: string; closes: string }[] = [
  { days: WEEKDAYS.slice(0, 6), opens: "09:00", closes: "21:00" },
  { days: ["Sunday"], opens: "09:00", closes: "14:00" },
];

/** "09:00" → "9:00 AM" */
export function formatTime(time: string) {
  const [h, m] = time.split(":").map(Number);
  const suffix = h >= 12 ? "PM" : "AM";
  const hour12 = h % 12 === 0 ? 12 : h % 12;
  return `${hour12}:${String(m).padStart(2, "0")} ${suffix}`;
}

/** One row per weekday, in Monday → Sunday order, for the hours list. */
export function hoursByDay() {
  return WEEKDAYS.map((day) => {
    const slot = openingHours.find((s) => s.days.includes(day));
    return {
      day,
      hours: slot ? `${formatTime(slot.opens)} – ${formatTime(slot.closes)}` : "Closed",
    };
  });
}
