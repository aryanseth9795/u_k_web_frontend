import * as React from "react";
import { cn } from "../ui/cn";

export function Section({
  id,
  className,
  children,
}: React.HTMLAttributes<HTMLElement> & { id?: string }) {
  return (
    <section id={id} className={cn("py-12 sm:py-16 md:py-20", className)}>
      <div className="container mx-auto px-4">{children}</div>
    </section>
  );
}
