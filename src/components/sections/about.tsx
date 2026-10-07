import { HeartHandshake, MessagesSquare, Users } from "lucide-react"
import Image from "next/image"

import { Placeholder } from "@/components/placeholder"
import { SectionHeading } from "@/components/section-heading"
import { StarRating } from "@/components/star-rating"
import { clinic } from "@/lib/clinic"

// [PLACEHOLDER: review this approach-to-care copy with the clinic owner so it matches how they practise]
const values = [
  {
    title: "Time to listen",
    description: "Consultations where you can explain your concern fully, without feeling rushed.",
    icon: MessagesSquare,
  },
  {
    title: "Clear explanations",
    description: "Your diagnosis, medicines and next steps explained in simple, everyday language.",
    icon: HeartHandshake,
  },
  {
    title: "Care for every age",
    description: "From children's vaccinations to senior citizen check-ups, for the whole family.",
    icon: Users,
  },
]

// [PLACEHOLDER: doctor name, qualification, photo] One entry per doctor. Collect: full name,
// qualifications (e.g. MBBS, MD), specialty/role, a professional headshot, and optionally the
// medical council registration number. Add or remove cards to match the real team.
const doctors = [{ id: "doctor-1" }, { id: "doctor-2" }]

export function About() {
  return (
    <section id="about" aria-labelledby="about-heading" className="scroll-mt-20 bg-muted py-16 sm:py-20 lg:py-24">
      <div className="page-container grid gap-12 lg:grid-cols-[1.1fr_1fr] lg:gap-16">
        <div>
          <SectionHeading id="about-heading" eyebrow="About us" title="Care that starts with listening" />
          <div className="mt-4 max-w-xl space-y-4 text-base leading-relaxed text-pretty text-muted-foreground sm:text-lg">
            <p>
              {clinic.name} is a multi-specialty clinic on Immadihalli Main Road, caring for families across
              Whitefield. Our experienced team of doctors focuses on understanding your concern, explaining things
              clearly, and planning treatment that fits your everyday life.
            </p>
          </div>

          <ul className="mt-8 space-y-5">
            {values.map(({ title, description, icon: Icon }) => (
              <li key={title} className="flex gap-4">
                <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-card text-primary ring-1 ring-border">
                  <Icon aria-hidden="true" className="size-5" strokeWidth={1.75} />
                </span>
                <div>
                  <h3 className="font-semibold">{title}</h3>
                  <p className="mt-1 text-[0.9375rem] leading-relaxed text-muted-foreground">{description}</p>
                </div>
              </li>
            ))}
          </ul>

          <div className="mt-8 inline-flex flex-wrap items-center gap-x-3 gap-y-1 rounded-xl bg-card px-4 py-3 ring-1 ring-border">
            <StarRating value={clinic.rating.value} />
            <p className="text-[0.9375rem]">
              <strong className="font-semibold">Rated {clinic.rating.value} out of 5</strong>{" "}
              <span className="text-muted-foreground">from {clinic.rating.count} Google reviews</span>
            </p>
          </div>
        </div>

        <div>
          <h3 className="font-heading text-2xl font-semibold tracking-tight">Meet our doctors</h3>
          <ul className="mt-5 grid gap-4 sm:grid-cols-2">
            {doctors.map((doctor) => (
              <li
                key={doctor.id}
                className="flex gap-4 overflow-hidden rounded-2xl border border-border bg-card p-3 sm:flex-col sm:p-0"
              >
                <div className="relative aspect-[4/5] w-24 shrink-0 overflow-hidden rounded-xl bg-secondary sm:w-full sm:rounded-none">
                  {/* [PLACEHOLDER: doctor photo] Add a real 4:5 headshot to public/images/; update src and alt. */}
                  <Image
                    src="/images/doctor-placeholder.png"
                    alt="Placeholder silhouette where the doctor's photo will appear"
                    fill
                    sizes="(min-width: 1024px) 260px, (min-width: 640px) 45vw, 96px"
                    className="object-cover"
                  />
                </div>
                <div className="flex min-w-0 flex-col items-start gap-2 py-1 sm:p-5 sm:pt-4">
                  <Placeholder className="text-[0.875rem] font-semibold">[PLACEHOLDER: doctor name]</Placeholder>
                  <Placeholder>[PLACEHOLDER: qualification, e.g. MBBS, MD]</Placeholder>
                  <Placeholder>[PLACEHOLDER: specialty / role]</Placeholder>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
