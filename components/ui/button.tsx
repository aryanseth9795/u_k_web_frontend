import * as React from "react";
import { cn } from "./cn";

type Variant = "default" | "secondary" | "ghost" | "outline" | "link";
type Size = "sm" | "md" | "lg";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  size?: Size;
}

const variants: Record<Variant, string> = {
  default:
    "bg-[hsl(var(--accent))] text-[hsl(var(--accent-foreground))] hover:opacity-95",
  secondary:
    "bg-[hsl(var(--primary))] text-[hsl(var(--primary-foreground))] hover:opacity-95",
  ghost:
    "bg-transparent hover:bg-[hsl(var(--muted))] text-[hsl(var(--foreground))]",
  outline:
    "border border-[hsl(var(--border))] hover:bg-[hsl(var(--muted))]",
  link: "underline underline-offset-4 text-[hsl(var(--accent))] hover:opacity-90",
};

const sizes: Record<Size, string> = {
  sm: "h-9 px-3 text-sm rounded-xl",
  md: "h-11 px-4 text-sm rounded-2xl",
  lg: "h-12 px-6 text-base rounded-2xl",
};

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", size = "md", ...props }, ref) => (
    <button
      ref={ref}
      className={cn(
        "inline-flex items-center justify-center font-medium transition-colors focus-visible:outline-none disabled:opacity-50 disabled:pointer-events-none",
        variants[variant],
        sizes[size],
        className
      )}
      {...props}
    />
  )
);
Button.displayName = "Button";
