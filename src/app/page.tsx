import { About } from "@/components/sections/about"
import { Faq } from "@/components/sections/faq"
import { Hero } from "@/components/sections/hero"
import { Location } from "@/components/sections/location"
import { Reviews } from "@/components/sections/reviews"
import { Services } from "@/components/sections/services"
import { TrustStrip } from "@/components/sections/trust-strip"
import { SiteFooter } from "@/components/site-footer"
import { SiteHeader } from "@/components/site-header"
import { WhatsAppFab } from "@/components/whatsapp-fab"

export default function HomePage() {
  return (
    <>
      <a
        href="#main"
        className="sr-only z-[60] rounded-lg bg-primary px-4 py-3 font-semibold text-primary-foreground focus:not-sr-only focus:fixed focus:top-3 focus:left-3"
      >
        Skip to main content
      </a>
      <SiteHeader />
      <main id="main">
        <Hero />
        <TrustStrip />
        <Services />
        <About />
        <Reviews />
        <Faq />
        <Location />
      </main>
      <SiteFooter />
      <WhatsAppFab />
    </>
  )
}
