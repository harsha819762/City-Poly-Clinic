import { cn } from "cn"
import { Clock, MapPin, Navigation, Phone } from "lucide-react"

import { WhatsAppIcon } from "@/components/icons"
import { Placeholder } from "@/components/placeholder"
import { SectionHeading } from "@/components/section-heading"
import { buttonVariants } from "@/components/ui/button-variants"
import { clinic, hoursByDay, links } from "@/lib/clinic"

export function Location() {
  return (
    <section id="visit" aria-labelledby="visit-heading" className="scroll-mt-20 py-16 sm:py-20 lg:py-24">
      <div className="page-container">
        <SectionHeading
          id="visit-heading"
          eyebrow="Visit us"
          title="Find us on Immadihalli Main Road"
          description="We’re in Immadihalli, Whitefield. Tap “Get Directions” for turn-by-turn navigation on Google Maps."
        />

        <div className="mt-10 grid gap-6 lg:grid-cols-[1.25fr_1fr] lg:gap-8">
          {/* Space is reserved up front so the lazy iframe never shifts layout. */}
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-border bg-secondary sm:aspect-[16/10] lg:aspect-auto lg:min-h-[32rem]">
            <div aria-hidden="true" className="absolute inset-0 grid place-items-center text-secondary-foreground/70">
              <span className="flex flex-col items-center gap-2 text-sm">
                <MapPin className="size-7" />
                Loading map…
              </span>
            </div>
            <iframe
              src={links.mapEmbed}
              title={`Google Map showing ${clinic.name}, ${clinic.address.full}`}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
              className="absolute inset-0 size-full border-0"
            />
          </div>

          <div className="flex flex-col rounded-2xl border border-border bg-card p-5 sm:p-7">
            <div className="flex gap-3">
              <MapPin aria-hidden="true" className="mt-0.5 size-5 shrink-0 text-primary" />
              <div>
                <h3 className="font-semibold">Address</h3>
                <address className="mt-1 leading-relaxed text-muted-foreground not-italic">
                  {clinic.name}
                  <br />
                  {clinic.address.street},
                  <br />
                  {clinic.address.locality}, {clinic.address.city}, {clinic.address.region} {clinic.address.postalCode}
                </address>
              </div>
            </div>

            <div className="mt-6 flex gap-3">
              <Phone aria-hidden="true" className="mt-0.5 size-5 shrink-0 text-primary" />
              <div>
                <h3 className="font-semibold">Phone &amp; WhatsApp</h3>
                <a
                  href={links.call}
                  className="-my-2 inline-flex min-h-11 items-center text-lg font-semibold text-primary underline-offset-4 hover:underline"
                >
                  {clinic.phone.display}
                </a>
              </div>
            </div>

            <div className="mt-6 flex gap-3">
              <Clock aria-hidden="true" className="mt-0.5 size-5 shrink-0 text-primary" />
              <div className="min-w-0 flex-1">
                <h3 className="font-semibold">Opening hours</h3>
                {/* [PLACEHOLDER: confirm exact timings with client] Edit openingHours in src/lib/clinic.ts. */}
                <Placeholder className="mt-2">[PLACEHOLDER: confirm exact timings with client]</Placeholder>
                <dl className="mt-3 divide-y divide-dashed divide-border text-[0.9375rem]">
                  {hoursByDay().map(({ day, hours }) => (
                    <div key={day} className="flex items-baseline justify-between gap-4 py-2">
                      <dt className="text-muted-foreground">{day}</dt>
                      <dd className="font-medium tabular-nums">{hours}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>

            <div className="mt-7 grid gap-3 sm:grid-cols-2 lg:mt-auto lg:pt-7">
              <a
                href={links.directions}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(buttonVariants({ size: "cta" }), "sm:col-span-2")}
              >
                <Navigation aria-hidden="true" />
                Get Directions
                <span className="sr-only">(opens Google Maps)</span>
              </a>
              <a href={links.call} className={buttonVariants({ variant: "outline", size: "touch" })}>
                <Phone aria-hidden="true" className="text-primary" />
                Call Now
              </a>
              <a
                href={links.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className={buttonVariants({ variant: "whatsapp", size: "touch" })}
              >
                <WhatsAppIcon />
                WhatsApp Us
              </a>
            </div>
            <p className="mt-4 text-center text-sm text-muted-foreground">
              Appointment book karna ab aasaan hai — just call or WhatsApp.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
