import { MapPin, Phone } from "lucide-react"

import { LogoMark, WhatsAppIcon } from "@/components/icons"
import { navLinks } from "@/components/site-header"
import { clinic, formatTime, links, openingHours } from "@/lib/clinic"

const footerLink =
  "inline-flex min-h-11 min-w-11 items-center gap-2 text-ink-panel-muted transition-colors hover:text-ink-panel-foreground"

export function SiteFooter() {
  return (
    <footer className="bg-ink-panel text-ink-panel-foreground">
      <div className="page-container grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr] lg:py-16">
        <div>
          <div className="flex items-center gap-2.5">
            <LogoMark className="size-9 [&_rect:first-child]:fill-white/10" />
            <span className="font-heading text-xl font-semibold">{clinic.name}</span>
          </div>
          <p className="mt-4 max-w-xs leading-relaxed text-ink-panel-muted">
            {clinic.trustLine}. Rated {clinic.rating.value}★ from {clinic.rating.count} Google reviews.
          </p>
        </div>

        <div>
          <h2 className="text-sm font-semibold tracking-wide uppercase">Contact</h2>
          <ul className="mt-3 space-y-1">
            <li>
              <a href={links.call} className={footerLink}>
                <Phone aria-hidden="true" className="size-4" />
                {clinic.phone.display}
              </a>
            </li>
            <li>
              <a href={links.whatsapp} target="_blank" rel="noopener noreferrer" className={footerLink}>
                <WhatsAppIcon className="size-4" />
                WhatsApp us
              </a>
            </li>
            <li>
              <a href={links.directions} target="_blank" rel="noopener noreferrer" className={`${footerLink} items-start py-2.5`}>
                <MapPin aria-hidden="true" className="mt-0.5 size-4 shrink-0" />
                <span className="leading-relaxed">{clinic.address.full}</span>
              </a>
            </li>
          </ul>
        </div>

        <nav aria-label="Footer">
          <h2 className="text-sm font-semibold tracking-wide uppercase">Quick links</h2>
          <ul className="mt-3 grid grid-cols-2 gap-x-4 sm:grid-cols-1">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} className={footerLink}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="text-sm font-semibold tracking-wide uppercase">Hours</h2>
          {/* [PLACEHOLDER: confirm exact timings with client] Mirrors openingHours in src/lib/clinic.ts. */}
          <dl className="mt-4 space-y-3 text-ink-panel-muted">
            {openingHours.map((slot) => {
              const days = slot.days.length > 1 ? `${slot.days[0]} – ${slot.days[slot.days.length - 1]}` : slot.days[0]
              return (
                <div key={days}>
                  <dt className="text-ink-panel-foreground">{days}</dt>
                  <dd>
                    {formatTime(slot.opens)} – {formatTime(slot.closes)}
                  </dd>
                </div>
              )
            })}
          </dl>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="page-container flex flex-col gap-3 pt-6 pb-28 text-sm text-ink-panel-muted sm:pb-8 lg:flex-row lg:justify-between">
          <p>
            {/* Static export: the year is fixed at build time and refreshes on every deploy. */}
            © {new Date().getFullYear()} {clinic.name}. All rights reserved.
          </p>
          <p className="max-w-xl sm:mr-24">
            Information on this website is general guidance, not a substitute for a consultation. In an emergency, call{" "}
            <a href="tel:112" className="font-semibold text-ink-panel-foreground underline underline-offset-2">
              112
            </a>
            .
          </p>
        </div>
      </div>
    </footer>
  )
}
