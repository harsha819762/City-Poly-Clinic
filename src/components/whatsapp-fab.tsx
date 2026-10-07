import { WhatsAppIcon } from "@/components/icons"
import { links } from "@/lib/clinic"

/** Persistent WhatsApp button — rendered once for the whole page, above all content. */
export function WhatsAppFab() {
  return (
    <a
      href={links.whatsapp}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Book an appointment on WhatsApp (opens WhatsApp)"
      className="fixed right-[calc(1rem_+_env(safe-area-inset-right))] bottom-[calc(1rem_+_env(safe-area-inset-bottom))] z-50 grid size-14 place-items-center rounded-full bg-whatsapp text-white shadow-[0_12px_28px_-10px_rgb(0_0_0/0.45)] ring-4 ring-white/90 transition-transform active:scale-95 motion-reduce:transition-none sm:right-[calc(1.5rem_+_env(safe-area-inset-right))] sm:bottom-[calc(1.5rem_+_env(safe-area-inset-bottom))] sm:size-16"
    >
      <WhatsAppIcon className="size-7 sm:size-8" />
    </a>
  )
}
