import { Section } from "./shared/Section";
import { SectionHeading } from "./shared/SectionHeading";
import { BRAND } from "@/lib/brand";
import { Button } from "./ui/button";

export default function MapEmbed() {
  return (
    <Section id="contact">
      <SectionHeading
        title="Find Us"
        subtitle="We’re in Shakarmandi, opposite Mohammad Hasan Petrol Pump."
      />
      <div className="overflow-hidden rounded-2xl border border-[hsl(var(--border))]">
        <iframe
          title="UK Cosmetic location"
          src={BRAND.googleMapsEmbed}
          width="100%"
          height="360"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          aria-label="Google Maps location of UK Cosmetic"
        />
      </div>
      <div className="mt-4">
        <Button variant="outline" onClick={() => window.open(BRAND.googleMapsLink, "_blank")}>
          Get Directions
        </Button>
      </div>
    </Section>
  );
}
