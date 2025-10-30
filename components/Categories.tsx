import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Section } from "./shared/Section";
import { SectionHeading } from "./shared/SectionHeading";
import { BRAND } from "@/lib/brand";
import { Droplet, Palette, Sparkles, Scissors, Heart, Gift } from "lucide-react";

const ICONS = [Droplet, Palette, Sparkles, Scissors, Heart, Gift];

export default function Categories() {
  return (
    <Section id="categories">
      <SectionHeading
        title="Major Cosmetic Categories"
        subtitle="From skincare staples to statement fragrances—discover your new favorites."
      />
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {BRAND.categories.map((c, i) => {
          const Icon = ICONS[i % ICONS.length];
          return (
            <Card key={c.slug} className="transition-transform hover:-translate-y-0.5">
              <CardHeader>
                <div className="mb-2 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-[hsl(var(--accent))]/10 text-[hsl(var(--accent))]">
                  <Icon className="h-5 w-5" />
                </div>
                <CardTitle>{c.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-[hsl(var(--muted-foreground))]">
                  Shop curated {c.name.toLowerCase()} collections, chosen for quality and results.
                </p>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </Section>
  );
}
