import { clinic, links, openingHours, siteUrl } from "@/lib/clinic"
import { ogImage } from "@/lib/og-image"

/**
 * schema.org structured data. MedicalClinic is a LocalBusiness subtype
 * (LocalBusiness → MedicalBusiness → MedicalClinic), so parsers that only
 * understand LocalBusiness still read every property below.
 */
export function clinicJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "MedicalClinic",
    "@id": `${siteUrl}/#clinic`,
    name: clinic.name,
    description: `${clinic.trustLine}, Bengaluru. General physician consultations, health checkups and family care.`,
    url: `${siteUrl}/`,
    telephone: clinic.phone.display,
    image: `${siteUrl}${ogImage.url}`,
    address: {
      "@type": "PostalAddress",
      streetAddress: clinic.address.street,
      addressLocality: `${clinic.address.locality}, ${clinic.address.city}`,
      addressRegion: clinic.address.region,
      postalCode: clinic.address.postalCode,
      addressCountry: clinic.address.country,
    },
    // [PLACEHOLDER: geo coordinates] Add "geo": { "@type": "GeoCoordinates", latitude, longitude }
    // using the exact pin from the Google Business Profile.
    hasMap: links.mapsListing,
    areaServed: "Whitefield, Bengaluru",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: clinic.rating.value,
      reviewCount: clinic.rating.count,
      bestRating: 5,
      worstRating: 1,
    },
    // [PLACEHOLDER: confirm exact timings with client] Generated from openingHours in clinic.ts.
    openingHoursSpecification: openingHours.map((slot) => ({
      "@type": "OpeningHoursSpecification",
      dayOfWeek: slot.days.map((day) => `https://schema.org/${day}`),
      opens: slot.opens,
      closes: slot.closes,
    })),
    // [PLACEHOLDER: priceRange, e.g. "₹₹"] — add once consultation fees are confirmed.
  }
}

/** Serialises JSON-LD safely for an inline <script> (escapes `<` to block tag injection). */
export function serializeJsonLd(data: unknown) {
  return JSON.stringify(data).replace(/</g, "\\u003c")
}
