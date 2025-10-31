"use client";

import { Section } from "./shared/Section";
import { Button } from "./ui/button";
import { BRAND } from "@/lib/brand";
import { toast } from "react-toastify";

export default function AppCTA() {
  return (
    <Section>
      <div className="rounded-2xl bg-gradient-to-r from-[hsl(var(--accent))] to-[hsl(var(--primary))] p-6 text-[hsl(var(--accent-foreground))] sm:p-10">
        <div className="grid items-center gap-4 sm:grid-cols-2">
          <div>
            <h3 className="text-2xl font-semibold sm:text-3xl">Get the UK Cosmetic App</h3>
            <p className="mt-1 opacity-90">
              Order faster, track offers, and browse gift hampers on the go.
            </p>
          </div>
          <div className="flex flex-wrap justify-start gap-3 sm:justify-end">
            <Button
              size="lg"
              className="bg-white text-[hsl(var(--foreground))] hover:opacity-95"
              onClick={() => {
                navigator.clipboard?.writeText(BRAND.appUrl).catch(() => {});
                toast.success("Store app link copied! Opening download page…");
                window.open(BRAND.appUrl, "_blank");
              }}
            >
              Download Store App
            </Button>
            <Button
              size="lg"
              variant="secondary"
              onClick={() => {
                toast.info("Opening UK Cosmetic website…");
                window.open(BRAND.siteUrl, "_blank");
              }}
            >
              Visit Site
            </Button>
          </div>
        </div>
      </div>
    </Section>
  );
}