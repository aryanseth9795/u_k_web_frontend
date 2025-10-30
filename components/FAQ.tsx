import { Section } from "./shared/Section";
import { SectionHeading } from "./shared/SectionHeading";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "./ui/accordion";

export default function FAQ() {
  const items = [
    {
      q: "Are the products genuine?",
      a: "Yes. We source directly from authorized distributors and trusted brands.",
    },
    {
      q: "Do you offer gift wrapping?",
      a: "Absolutely—complimentary gift wrap is available for most items and hampers.",
    },
    {
      q: "What is your return/exchange policy?",
      a: "Unopened, unused products can be exchanged within 7 days with a valid bill.",
    },
    {
      q: "Do you have bridal consultations?",
      a: "Yes—book a slot in-store or call us to plan your bridal kit.",
    },
    {
      q: "Store timings?",
      a: "We’re open 10 AM – 9 PM, seven days a week (holiday timings may vary).",
    },
  ];

  return (
    <Section id="faq">
      <SectionHeading title="FAQs" subtitle="Quick answers to common questions." />
      <Accordion type="single" collapsible className="w-full">
        {items.map((it, idx) => (
          <AccordionItem key={idx} value={`item-${idx}`}>
            <AccordionTrigger>{it.q}</AccordionTrigger>
            <AccordionContent>{it.a}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </Section>
  );
}
