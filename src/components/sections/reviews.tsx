import { cn } from "cn"
import { ExternalLink, Quote } from "lucide-react"

import { Placeholder } from "@/components/placeholder"
import { SectionHeading } from "@/components/section-heading"
import { StarRating } from "@/components/star-rating"
import { buttonVariants } from "@/components/ui/button-variants"
import { clinic, links } from "@/lib/clinic"

// [PLACEHOLDER: real Google reviews] Replace every card with a genuine review copied verbatim
// from the clinic's Google Business Profile — reviewer's display name, the review text and the
// star rating they actually gave. Never invent, edit or "improve" testimonials.
const reviews = Array.from({ length: 6 }, (_, i) => ({ id: `review-${i + 1}`, rating: 5 }))

export function Reviews() {
  return (
    <section id="reviews" aria-labelledby="reviews-heading" className="scroll-mt-20 py-16 sm:py-20 lg:py-24">
      <div className="page-container">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            id="reviews-heading"
            eyebrow="Patient reviews"
            title="Trusted by Whitefield families"
            description={`${clinic.name} is rated ${clinic.rating.value} out of 5 from ${clinic.rating.count} reviews on Google.`}
          />

          <div className="flex shrink-0 items-center gap-4 rounded-2xl border border-border bg-card px-5 py-4">
            <span className="font-heading text-5xl leading-none font-semibold tracking-tight">{clinic.rating.value}</span>
            <span>
              <StarRating value={clinic.rating.value} starClassName="h-5" />
              <span className="mt-1 block text-sm text-muted-foreground">{clinic.rating.count} Google reviews</span>
            </span>
          </div>
        </div>

        {/* Phones: CSS scroll-snap carousel (no JS). sm+: grid. */}
        <ul
          tabIndex={0}
          aria-label="Patient reviews"
          className="-mx-4 mt-10 flex snap-x snap-mandatory scroll-px-4 gap-4 overflow-x-auto px-4 pb-4 [scrollbar-width:thin] sm:mx-0 sm:grid sm:snap-none sm:grid-cols-2 sm:overflow-visible sm:px-0 sm:pb-0 lg:grid-cols-3"
        >
          {reviews.map((review) => (
            <li key={review.id} className="w-[85%] shrink-0 snap-start sm:w-auto">
              <figure className="flex h-full flex-col rounded-2xl border border-border bg-card p-5 sm:p-6">
                <div className="flex items-center justify-between">
                  {/* [PLACEHOLDER: star rating] Must match the rating on the real review. */}
                  <StarRating value={review.rating} />
                  <Quote aria-hidden="true" className="size-6 text-secondary-foreground/20" />
                </div>
                <blockquote className="mt-4 flex-1">
                  <Placeholder block className="min-h-28">
                    [PLACEHOLDER: review quote — paste a real Google review here, word for word]
                  </Placeholder>
                </blockquote>
                <figcaption className="mt-5 flex items-center gap-3 border-t border-border pt-4">
                  <span aria-hidden="true" className="grid size-10 shrink-0 place-items-center rounded-full bg-secondary font-semibold text-secondary-foreground">
                    ?
                  </span>
                  <span className="min-w-0">
                    <Placeholder>[PLACEHOLDER: reviewer name]</Placeholder>
                    <span className="mt-1 block text-sm text-muted-foreground">Google review</span>
                  </span>
                </figcaption>
              </figure>
            </li>
          ))}
        </ul>

        <div className="mt-8 flex justify-center">
          <a
            href={links.googleReviews}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(buttonVariants({ size: "cta" }), "w-full sm:w-auto")}
          >
            Read all {clinic.rating.count} reviews on Google
            <ExternalLink aria-hidden="true" className="size-[1.125rem]" />
            <span className="sr-only">(opens in a new tab)</span>
          </a>
        </div>
      </div>
    </section>
  )
}
