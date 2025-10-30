import { Card, CardContent } from "./ui/card";
import { Section } from "./shared/Section";
import { SectionHeading } from "./shared/SectionHeading";
import { BRAND } from "@/lib/brand";

function Stars({ count }: { count: number }) {
  return (
    <div role="img" aria-label={`${count} out of 5 stars`} className="flex gap-1">
      {Array.from({ length: 5 }).map((_, i) => (
        <span key={i} className={i < count ? "text-yellow-500" : "text-gray-300"}>
          ★
        </span>
      ))}
    </div>
  );
}

export default function SocialProof() {
  return (
    <Section id="reviews">
      <SectionHeading
        title="Loved by our customers"
        subtitle="Real experiences from Jaunpur’s favorite beauty boutique."
      />
      <div className="grid gap-5 md:grid-cols-3">
        {BRAND.testimonials.map((t) => (
          <Card key={t.name}>
            <CardContent className="pt-6">
              <Stars count={t.stars} />
              <p className="mt-3 text-base">“{t.quote}”</p>
              <div className="mt-4 flex items-center gap-3">
                <div
                  aria-hidden
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-[hsl(var(--muted))] text-sm font-semibold"
                >
                  {t.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")
                    .slice(0, 2)
                    .toUpperCase()}
                </div>
                <div>
                  <div className="text-sm font-medium">{t.name}</div>
                  <div className="text-xs text-[hsl(var(--muted-foreground))]">{t.role}</div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </Section>
  );
}
