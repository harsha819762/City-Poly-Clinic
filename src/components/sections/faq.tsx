import { cn } from "cn"
import type { ReactNode } from "react"

import { WhatsAppIcon } from "@/components/icons"
import { Placeholder } from "@/components/placeholder"
import { SectionHeading } from "@/components/section-heading"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { buttonVariants } from "@/components/ui/button-variants"
import { clinic, formatTime, links, openingHours } from "@/lib/clinic"

const [weekdayHours, sundayHours] = openingHours

const faqs: { question: string; answer: ReactNode }[] = [
  {
    question: "Do I need an appointment, or can I walk in?",
    answer: (
      <>
        <p>
          You’re welcome to walk in during clinic hours. To reduce your waiting time, call or WhatsApp us on{" "}
          <a href={links.call}>{clinic.phone.display}</a> and we’ll book a time for you.
        </p>
        <Placeholder>[PLACEHOLDER: confirm walk-in policy and how the queue works with client]</Placeholder>
      </>
    ),
  },
  {
    question: "What are your clinic timings?",
    answer: (
      <>
        <p>
          We’re open Monday to Saturday, {formatTime(weekdayHours.opens)} – {formatTime(weekdayHours.closes)}, and on
          Sunday, {formatTime(sundayHours.opens)} – {formatTime(sundayHours.closes)}. Timings may change on public
          holidays, so please call ahead.
        </p>
        <Placeholder>[PLACEHOLDER: confirm exact timings with client]</Placeholder>
      </>
    ),
  },
  {
    question: "Do you accept health insurance or cashless treatment?",
    answer: (
      <>
        <p>
          Please call us before your visit with your insurance details and we’ll tell you what applies to your policy.
        </p>
        <Placeholder>[PLACEHOLDER: confirm with client — cashless/insurance accepted? which insurers or TPAs?]</Placeholder>
      </>
    ),
  },
  {
    question: "Which languages do your doctors speak?",
    answer: (
      <>
        <p>
          Our team can help you in <Placeholder>[PLACEHOLDER: languages, e.g. English, Kannada, Hindi]</Placeholder>. If
          you’d like a consultation in a particular language, just mention it when you book.
        </p>
      </>
    ),
  },
  {
    question: "Is parking available at the clinic?",
    answer: (
      <>
        <p>
          We’re on Immadihalli Main Road in Whitefield. Use the “Get Directions” button below to navigate straight to
          us on Google Maps.
        </p>
        <Placeholder>[PLACEHOLDER: confirm parking availability (two-wheeler / car) with client]</Placeholder>
      </>
    ),
  },
  {
    question: "What should I do in a medical emergency?",
    answer: (
      <>
        <p>
          If someone has chest pain, difficulty breathing, heavy bleeding, signs of a stroke or has lost
          consciousness, call <a href="tel:112">112</a> or <a href="tel:108">108</a> for an ambulance right away, or
          go to the nearest hospital emergency department. Don’t wait to contact the clinic first.
        </p>
        <p>
          For urgent but non-life-threatening problems during clinic hours, call us on{" "}
          <a href={links.call}>{clinic.phone.display}</a> and we’ll guide you.
        </p>
        <Placeholder>[PLACEHOLDER: confirm with client how urgent walk-ins and emergencies are handled]</Placeholder>
      </>
    ),
  },
  {
    question: "How much does a consultation cost?",
    answer: (
      <>
        <p>
          Call or WhatsApp us and we’ll share current fees for consultations, checkups and tests before your visit,
          so there are no surprises.
        </p>
        <Placeholder>[PLACEHOLDER: confirm consultation fee with client]</Placeholder>
      </>
    ),
  },
  {
    question: "Do you offer home visits or online consultations?",
    answer: (
      <>
        <p>Call or WhatsApp us to ask whether a home visit or teleconsultation is suitable for your situation.</p>
        <Placeholder>[PLACEHOLDER: confirm with client whether home visits / teleconsultations are offered]</Placeholder>
      </>
    ),
  },
]

export function Faq() {
  return (
    <section id="faq" aria-labelledby="faq-heading" className="scroll-mt-20 bg-muted py-16 sm:py-20 lg:py-24">
      <div className="page-container grid gap-10 lg:grid-cols-[1fr_1.6fr] lg:gap-16">
        <div>
          <SectionHeading
            id="faq-heading"
            eyebrow="FAQ"
            title="Questions patients often ask"
            description="Can’t find what you’re looking for? Message us on WhatsApp and our team will reply."
          />
          <a
            href={links.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(buttonVariants({ variant: "whatsapp", size: "touch" }), "mt-6 w-full sm:w-auto")}
          >
            <WhatsAppIcon />
            Ask us on WhatsApp
          </a>
        </div>

        {/* hiddenUntilFound keeps closed answers in the HTML (for search engines and in-page find). */}
        <Accordion hiddenUntilFound defaultValue={["faq-0"]} className="rounded-2xl border border-border bg-card px-4 sm:px-6">
          {faqs.map((faq, i) => (
            <AccordionItem key={faq.question} value={`faq-${i}`}>
              <AccordionTrigger className="min-h-14 items-center gap-4 py-4 text-base font-semibold hover:no-underline **:data-[slot=accordion-trigger-icon]:size-5">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="pb-5 text-[0.9375rem] [&_p:not(:last-child)]:mb-3 leading-relaxed text-muted-foreground [&_a]:font-medium [&_a]:text-primary">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
