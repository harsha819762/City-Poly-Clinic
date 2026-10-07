import { ExternalLink, MessageSquareText, ShieldCheck, Star } from "lucide-react"

import { StarRating } from "@/components/star-rating"
import { clinic, links } from "@/lib/clinic"

const linkClass =
  "group flex h-full min-h-11 items-center gap-2.5 px-4 py-4 sm:gap-3 transition-colors hover:bg-muted/60 sm:px-6 sm:py-5"

export function TrustStrip() {
  return (
    <section aria-label="Why patients trust City Poly Clinic" className="border-y border-border bg-card">
      <ul className="grid grid-cols-2 sm:page-container sm:grid-cols-3 sm:divide-x sm:divide-border">
        <li className="border-r border-border">
          <a href={links.googleReviews} target="_blank" rel="noopener noreferrer" className={linkClass}>
            <span className="grid size-9 shrink-0 place-items-center rounded-full sm:size-10 bg-amber-50 text-star">
              <Star aria-hidden="true" className="size-5 fill-current" strokeWidth={0} />
            </span>
            <span className="min-w-0">
              <span className="flex items-center gap-1.5 text-lg leading-none font-bold">
                {clinic.rating.value}
                <StarRating value={clinic.rating.value} className="max-[389px]:hidden" starClassName="h-3.5" />
              </span>
              <span className="mt-1 flex items-center gap-1 text-sm text-muted-foreground">
                Google Rating
                <ExternalLink aria-hidden="true" className="size-3.5" />
              </span>
            </span>
            <span className="sr-only">(opens Google reviews in a new tab)</span>
          </a>
        </li>

        <li>
          <a href={links.googleReviews} target="_blank" rel="noopener noreferrer" className={linkClass}>
            <span className="grid size-9 shrink-0 place-items-center rounded-full sm:size-10 bg-secondary text-primary">
              <MessageSquareText aria-hidden="true" className="size-5" />
            </span>
            <span className="min-w-0">
              <span className="block text-lg leading-none font-bold">{clinic.rating.count}+</span>
              <span className="mt-1 flex items-center gap-1 text-sm text-muted-foreground">
                Google Reviews
                <ExternalLink aria-hidden="true" className="size-3.5" />
              </span>
            </span>
            <span className="sr-only">(opens Google reviews in a new tab)</span>
          </a>
        </li>

        <li className="col-span-2 border-t border-border sm:col-span-1 sm:border-t-0">
          <div className="flex h-full items-center gap-3 px-4 py-4 sm:px-6 sm:py-5">
            <span className="grid size-9 shrink-0 place-items-center rounded-full sm:size-10 bg-secondary text-primary">
              <ShieldCheck aria-hidden="true" className="size-5" />
            </span>
            <span>
              <span className="block leading-snug font-semibold">{clinic.trustLine}</span>
              <span className="mt-0.5 block text-sm text-muted-foreground">Immadihalli Main Rd, Bengaluru</span>
            </span>
          </div>
        </li>
      </ul>
    </section>
  )
}
