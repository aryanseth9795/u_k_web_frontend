import * as React from "react";
import { cn } from "./cn";

export function Separator({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      role="separator"
      className={cn("h-px w-full bg-[hsl(var(--border))]", className)}
      {...props}
    />
  );
}
