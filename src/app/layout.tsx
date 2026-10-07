import type { Metadata, Viewport } from "next"
import { Figtree, Fraunces } from "next/font/google"

import { clinic, siteUrl } from "@/lib/clinic"
import { clinicJsonLd, serializeJsonLd } from "@/lib/json-ld"
import { ogImage } from "@/lib/og-image"

import "./globals.css"

const figtree = Figtree({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-figtree",
})

const fraunces = Fraunces({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-fraunces",
})

const title = "City Poly Clinic — Trusted Medical Clinic in Whitefield, Bengaluru"
const description = `Multi-specialty clinic on Immadihalli Main Rd, Whitefield, rated ${clinic.rating.value}★ from ${clinic.rating.count} Google reviews. Call or WhatsApp ${clinic.phone.display} to book your visit.`

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  applicationName: clinic.name,
  // Absolute, trailing-slash URL: the address GitHub Pages actually serves (no redirect).
  alternates: { canonical: `${siteUrl}/` },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: `${siteUrl}/`,
    siteName: clinic.name,
    title,
    description,
    images: [ogImage],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [ogImage],
  },
  formatDetection: { telephone: true, address: true },
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#fbf8f3",
}

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en-IN" data-scroll-behavior="smooth" className={`${figtree.variable} ${fraunces.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: serializeJsonLd(clinicJsonLd()) }}
        />
      </head>
      <body className="min-h-dvh">{children}</body>
    </html>
  )
}
