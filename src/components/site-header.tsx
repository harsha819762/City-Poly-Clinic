import { cn } from "cn"
import { Phone } from "lucide-react"

import { LogoMark, WhatsAppIcon } from "@/components/icons"
import { buttonVariants } from "@/components/ui/button-variants"
import { clinic, links } from "@/lib/clinic"

export const navLinks = [
  { href: "#services", label: "Services" },
  { href: "#about", label: "About" },
  { href: "#reviews", label: "Reviews" },
  { href: "#faq", label: "FAQ" },
  { href: "#visit", label: "Visit us" },
] as const

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/80 bg-background/95 pt-[env(safe-area-inset-top)]">
      <div className="page-container flex h-16 items-center gap-3">
        <a href="#top" className="flex min-h-11 min-w-0 items-center gap-2 rounded-lg sm:gap-2.5">
          <LogoMark className="size-8 shrink-0 max-[359px]:hidden sm:size-9" />
          <span className="flex min-w-0 flex-col">
            <span className="truncate font-heading text-[0.9375rem] leading-tight font-semibold tracking-tight sm:text-[1.0625rem]">
              {clinic.name}
            </span>
            <span className="truncate text-xs leading-tight text-muted-foreground max-[359px]:hidden">
              Whitefield, Bengaluru
            </span>
          </span>
        </a>

        <nav aria-label="Main" className="ml-auto hidden lg:block">
          <ul className="flex items-center gap-1">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="inline-flex min-h-11 items-center rounded-lg px-3 text-[0.9375rem] font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="ml-auto flex shrink-0 items-center gap-1.5 sm:gap-2 lg:ml-4">
          <a
            href={links.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat on WhatsApp (opens WhatsApp)"
            className="grid size-11 place-items-center rounded-full bg-secondary text-whatsapp-deep transition-colors hover:bg-[color-mix(in_oklch,var(--secondary),var(--foreground)_6%)]"
          >
            <WhatsAppIcon className="size-[1.375rem]" />
          </a>
          <a
            href={links.call}
            className={cn(buttonVariants({ size: "touch" }), "gap-1.5 px-3 text-sm sm:gap-2 sm:px-4 sm:text-[0.9375rem]")}
          >
            <Phone aria-hidden="true" className="size-4 sm:size-[1.125rem]" />
            Call Now
            <span className="hidden font-medium opacity-90 xl:inline">· {clinic.phone.display}</span>
          </a>
        </div>
      </div>
    </header>
  )
}
