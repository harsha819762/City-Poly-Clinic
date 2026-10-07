import { cn } from "cn"

/**
 * Visible marker for content the client hasn't supplied yet. Pass the literal
 * "[PLACEHOLDER: ...]" text as children so a project-wide search for "PLACEHOLDER"
 * finds every instance. None of these may ship to production.
 */
export function Placeholder({
  children,
  block = false,
  className,
}: {
  children: string
  block?: boolean
  className?: string
}) {
  return (
    <span
      data-placeholder=""
      className={cn(
        "rounded-md border border-dashed border-amber-700/50 bg-amber-50 font-mono text-[0.8125rem] leading-snug text-amber-900",
        block ? "block px-3 py-2.5" : "inline-block px-1.5 py-0.5",
        className
      )}
    >
      {children}
    </span>
  )
}
