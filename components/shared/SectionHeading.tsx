'use client';
import * as React from "react";
import { cn } from "../ui/cn";

export function SectionHeading({
  title,
  subtitle,
  align = "center",
  className,
}: {
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  className?: string;
}) {
  return (
    <div className={cn("mb-8 sm:mb-10", align === "center" ? "text-center" : "text-left", className)}>
      <h2 className="font-serif text-3xl font-bold tracking-tight sm:text-4xl">{title}</h2>
      {subtitle && (
        <p className="mx-auto mt-2 max-w-2xl text-[hsl(var(--muted-foreground))]">{subtitle}</p>
      )}
    </div>
  );
}
