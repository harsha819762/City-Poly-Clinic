import { cn } from "cn"
import { HeartHandshake, Phone } from "lucide-react"
import Image from "next/image"

import { WhatsAppIcon } from "@/components/icons"
import { Placeholder } from "@/components/placeholder"
import { StarRating } from "@/components/star-rating"
import { buttonVariants } from "@/components/ui/button-variants"
import { clinic, links } from "@/lib/clinic"

export function Hero() {
  return (
    <section aria-labelledby="hero-heading" className="relative isolate overflow-hidden">
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-[radial-gradient(48rem_28rem_at_100%_0%,var(--secondary),transparent_70%),radial-gradient(36rem_24rem_at_0%_100%,var(--muted),transparent_70%)]"
      />

      <div className="page-container grid gap-10 pt-8 pb-12 sm:pt-12 sm:pb-16 lg:grid-cols-[1.15fr_1fr] lg:items-center lg:gap-14 lg:pt-16 lg:pb-20">
        <div>
          <p className="inline-flex items-center gap-2 rounded-full bg-secondary px-3.5 py-1.5 text-sm font-medium text-secondary-foreground">
            <HeartHandshake aria-hidden="true" className="size-4" />
            Aapka Whitefield ka trusted clinic
          </p>

          <h1
            id="hero-heading"
            className="mt-5 font-heading text-[2.25rem] leading-[1.08] font-semibold tracking-[-0.02em] text-balance sm:text-5xl xl:text-[3.25rem]"
          >
            Trusted family healthcare in Whitefield, Bengaluru
          </h1>

          <p className="mt-4 max-w-xl text-lg leading-relaxed text-pretty text-muted-foreground">
            Consult our experienced doctors at {clinic.name} on Immadihalli Main Road — for everyday illness, health
            checkups and ongoing care. Call or WhatsApp us to book your visit.
          </p>

          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <a href={links.call} className={cn(buttonVariants({ size: "cta" }), "w-full sm:w-auto")}>
              <Phone aria-hidden="true" />
              Call Now
              <span className="hidden font-medium opacity-90 sm:inline">· {clinic.phone.display}</span>
            </a>
            <a
              href={links.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(buttonVariants({ variant: "whatsapp", size: "cta" }), "w-full sm:w-auto")}
            >
              <WhatsAppIcon />
              Book on WhatsApp
            </a>
          </div>

          <a
            href={links.googleReviews}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-flex min-h-11 items-center gap-2.5 rounded-lg text-[0.9375rem] text-muted-foreground transition-colors hover:text-foreground"
          >
            <StarRating value={clinic.rating.value} />
            <span>
              <strong className="font-semibold text-foreground">{clinic.rating.value}</strong> on Google ·{" "}
              {clinic.rating.count} reviews
            </span>
            <span className="sr-only">(opens Google reviews in a new tab)</span>
          </a>
        </div>

        <div className="relative">
          <div className="relative overflow-hidden rounded-[1.75rem] bg-secondary shadow-[0_30px_60px_-35px_rgb(14_94_87/0.55)] ring-1 ring-black/5">
            {/* [PLACEHOLDER: clinic exterior or doctor photo] Replace the illustration with a real,
                well-lit photo in public/images/ (4:3, min. 1600×1200), update src/width/height and the alt text. */}
            <Image
              src="/images/clinic-exterior-placeholder.png"
              width={1200}
              height={900}
              alt="Illustration of the City Poly Clinic building (placeholder until the clinic photo is added)"
              loading="eager"
              fetchPriority="high"
              sizes="(min-width: 1152px) 528px, (min-width: 1024px) 46vw, (min-width: 640px) calc(100vw - 3rem), calc(100vw - 2rem)"
              className="aspect-[16/11] h-auto w-full object-cover lg:aspect-[4/3]"
            />
            <span className="absolute top-3 left-3 max-w-[calc(100%-1.5rem)]">
              <Placeholder>[PLACEHOLDER: clinic exterior or doctor photo]</Placeholder>
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
