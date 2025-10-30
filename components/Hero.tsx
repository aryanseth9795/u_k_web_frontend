"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { BRAND } from "@/lib/brand";
import { toast } from "react-toastify";

const BLANK =
  "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0nMTIwMCcgaGVpZ2h0PSc2NzUnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zyc+PHJlY3Qgd2lkdGg9JzEyMDAnIGhlaWdodD0nNjc1JyByeD0nMjQnIGZpbGw9JyNmZmYnLz48L3N2Zz4=";

export default function Hero() {
  return (
    <section id="hero" className="pt-6 sm:pt-10">
      <div className="container mx-auto grid items-center gap-8 px-4 md:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.35 }}
        >
          <Badge className="mb-4">New • Beauty & Gifts</Badge>
          <h1 className="font-serif text-4xl leading-tight sm:text-5xl md:text-6xl">
            Elevate your routine with{" "}
            <span className="bg-gradient-to-r from-[hsl(var(--accent))] to-[hsl(var(--primary))] bg-clip-text text-transparent">
              authentic cosmetics
            </span>{" "}
            & curated gifts.
          </h1>
          <p className="mt-4 max-w-prose text-[hsl(var(--muted-foreground))]">
            Discover premium skincare, makeup, and fragrances—handpicked for every
            occasion. Gift hampers, bridal kits, and more—wrapped with care.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <Button
              onClick={() => {
                toast.info("Opening UK Cosmetic website…");
                window.open(BRAND.siteUrl, "_blank");
              }}
            >
              Visit Site
            </Button>
            <Button
              variant="secondary"
              onClick={() => {
                navigator.clipboard?.writeText(BRAND.appUrl).catch(() => {});
                toast.success("Store app link copied! Opening download page…");
                window.open(BRAND.appUrl, "_blank");
              }}
            >
              Download Store App
            </Button>
          </div>

          <div className="mt-6 flex items-center gap-3 text-xs text-[hsl(var(--muted-foreground))]">
            <span className="rounded-full border px-2 py-1">100% Authentic</span>
            <span className="rounded-full border px-2 py-1">Curated Gifts</span>
            <span className="rounded-full border px-2 py-1">Friendly Support</span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45, delay: 0.05 }}
        >
          <div className="relative rounded-2xl border border-[hsl(var(--border))] p-2 shadow-sm">
            <Image
              src={BLANK}
              alt="Premium cosmetics shelf visual"
              width={1200}
              height={675}
              className="aspect-video w-full rounded-xl object-cover"
              priority
            />
            <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-tr from-[hsl(var(--primary))]/30 to-transparent" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
