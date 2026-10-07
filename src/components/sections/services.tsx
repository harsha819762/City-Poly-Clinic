import { cn } from "cn"
import {
  Bandage,
  Baby,
  ClipboardPlus,
  Activity,
  HandHeart,
  Phone,
  Stethoscope,
  TestTubeDiagonal,
  Venus,
  type LucideIcon,
} from "lucide-react"

import { SectionHeading } from "@/components/section-heading"
import { buttonVariants } from "@/components/ui/button-variants"
import { links } from "@/lib/clinic"

// [PLACEHOLDER: confirm the exact service list with the clinic owner before launch]
// This is a typical general-polyclinic draft. Remove anything the clinic doesn't offer and
// add any specialist consultations (e.g. visiting specialists) they do.
const services: { title: string; description: string; icon: LucideIcon }[] = [
  {
    title: "General Physician Consultation",
    description: "Diagnosis and treatment for fever, infections, aches and everyday health concerns.",
    icon: Stethoscope,
  },
  {
    title: "Full Body Health Checkups",
    description: "Preventive checkup packages to help you understand your health and spot issues early.",
    icon: ClipboardPlus,
  },
  {
    title: "Diabetes & Blood Pressure Management",
    description: "Regular monitoring, medication review and lifestyle guidance for long-term conditions.",
    icon: Activity,
  },
  {
    title: "Child Care & Vaccination",
    description: "Check-ups for babies and children, with vaccinations as per the recommended schedule.",
    icon: Baby,
  },
  {
    title: "Minor Procedures & Wound Dressing",
    description: "Cleaning and dressing of cuts, burns and wounds, and other minor procedures.",
    icon: Bandage,
  },
  {
    title: "Lab Sample Collection",
    description: "Blood and urine samples collected at the clinic for tests your doctor prescribes.",
    icon: TestTubeDiagonal,
  },
  {
    title: "Women's Health Consultation",
    description: "Consultations for menstrual, hormonal and general health concerns for women.",
    icon: Venus,
  },
  {
    title: "Senior Citizen Care",
    description: "Unhurried consultations and routine health monitoring for elderly patients.",
    icon: HandHeart,
  },
]

export function Services() {
  return (
    <section id="services" aria-labelledby="services-heading" className="scroll-mt-20 py-16 sm:py-20 lg:py-24">
      <div className="page-container">
        <SectionHeading
          id="services-heading"
          eyebrow="Our services"
          title="Care for everyday health, all under one roof"
          description="From fevers and infections to regular checkups and long-term conditions, our doctors look after patients of every age."
        />

        <ul className="mt-10 grid gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-4">
          {services.map(({ title, description, icon: Icon }) => (
            <li
              key={title}
              className="flex gap-4 rounded-2xl border border-border bg-card p-4 sm:p-5 lg:flex-col lg:gap-5 lg:p-6"
            >
              <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-secondary text-primary lg:size-12">
                <Icon aria-hidden="true" className="size-[1.375rem] lg:size-6" strokeWidth={1.75} />
              </span>
              <div>
                <h3 className="leading-snug font-semibold text-pretty lg:text-[1.0625rem]">{title}</h3>
                <p className="mt-1.5 text-[0.9375rem] leading-relaxed text-muted-foreground">{description}</p>
              </div>
            </li>
          ))}
        </ul>

        <div className="mt-8 flex flex-col gap-4 rounded-2xl bg-secondary p-5 sm:flex-row sm:items-center sm:justify-between sm:p-6">
          <p className="text-[0.9375rem] leading-relaxed text-secondary-foreground sm:text-base">
            <strong className="font-semibold">Not sure which service you need?</strong> Call us and our team will
            guide you to the right consultation.
          </p>
          <a href={links.call} className={cn(buttonVariants({ size: "touch" }), "w-full sm:w-auto")}>
            <Phone aria-hidden="true" />
            Call Now
          </a>
        </div>
      </div>
    </section>
  )
}
