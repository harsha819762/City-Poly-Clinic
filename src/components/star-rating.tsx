import { cn } from "cn"

/**
 * Five stars with a proportional fill (e.g. 4.7 → 94%), announced as text to screen readers.
 * Drawn with a repeating CSS mask (see `stars-mask` in globals.css) instead of 10 inline SVGs
 * per rating, which keeps the HTML and RSC payload small.
 */
export function StarRating({
  value,
  className,
  starClassName = "h-4",
}: {
  value: number
  className?: string
  /** Height utility for the stars, e.g. "h-5". */
  starClassName?: string
}) {
  return (
    <span
      role="img"
      aria-label={`Rated ${value} out of 5`}
      className={cn("relative inline-block aspect-[130/24] shrink-0", starClassName, className)}
    >
      <span className="stars-mask absolute inset-0 bg-star/25" />
      <span className="stars-mask absolute inset-y-0 left-0 bg-star" style={{ width: `${(value / 5) * 100}%` }} />
    </span>
  )
}
