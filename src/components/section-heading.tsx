import { cn } from "cn"
import type { ReactNode } from "react"

export function SectionHeading({
  id,
  eyebrow,
  title,
  description,
  className,
}: {
  id: string
  eyebrow: string
  title: string
  description?: ReactNode
  className?: string
}) {
  return (
    <div className={cn("max-w-2xl", className)}>
      <p className="text-sm font-semibold tracking-wide text-primary uppercase">{eyebrow}</p>
      <h2 id={id} className="mt-2 font-heading text-[1.875rem] leading-tight font-semibold tracking-[-0.015em] text-balance sm:text-4xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-3 text-base leading-relaxed text-pretty text-muted-foreground sm:text-lg">{description}</p>
      ) : null}
    </div>
  )
}
