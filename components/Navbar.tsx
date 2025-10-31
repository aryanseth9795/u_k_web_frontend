

"use client";

import Link from "next/link";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import { Button } from "./ui/button";
import { BRAND } from "@/lib/brand";

export default function Navbar() {
  const { theme, setTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <header className="sticky top-0 z-50 border-b border-[hsl(var(--border))] bg-[hsl(var(--background))]/80 backdrop-blur">
      <div
        className="
          container mx-auto px-4
          
          flex flex-col gap-2 py-2
          sm:flex-row sm:items-center sm:justify-center sm:gap-0 sm:py-0
          md:h-22 md:flex-row md:items-center md:justify-between md:gap-0 md:py-0
        "
      >
        {/* ✅ Desktop brand (unchanged). Hidden on mobile to avoid double headings */}
        <div className=" md:flex items-center ">
          <Link
            href="https://ukcosmetics.aryanseth.in/store"
            className="flex items-center gap-2 justify-center md:justify-start"
          >
            {/* <svg
              width="38"
              height="38"
              viewBox="0 0 48 48"
              // xmlns="http://www.w3.org/2000/svg"
              aria-label="UK Cosmetic logo"
            >
              <rect width="48" height="48" rx="12" fill="hsl(var(--accent))" />
              <text
                x="50%"
                y="54%"
                textAnchor="middle"
                fontSize="22"
                fontFamily="var(--font-playfair)"
                fill="hsl(var(--accent-foreground))"
              >
                U K
              </text>
            </svg> */}
            <svg
              width="55"
              height="55"
              viewBox="0 0 48 48"
              xmlns="http://www.w3.org/2000/svg"
              role="img"
              aria-label="UK Cosmetic logo"
            >
              {/* 48 - 38 = 10 → y=5 centers the rect vertically */}
              <rect
                x="0"
                y="5"
                width="48"
                height="38"
                rx="12"
                fill="hsl(var(--accent))"
              />
              <text
                x="50%"
                y="50%"
                textAnchor="middle"
                dominantBaseline="middle"
                fontSize="20"
                style={{ fontFamily: "var(--font-playfair)" }}
                fill="hsl(var(--accent-foreground))"
              >
                UK
              </text>
            </svg>

            <span className="font-semibold ">UK Cosmetics & Gift Center</span>
          </Link>
        </div>


        {/* ✅ Desktop nav (unchanged) */}
        <nav className="hidden md:flex items-center gap-6 text-sm">
          <Link href="#categories" className="hover:underline">
            Categories
          </Link>
          <Link href="#gifts" className="hover:underline">
            Gifts
          </Link>
          <Link href="#reviews" className="hover:underline">
            Reviews
          </Link>
          <Link href="#faq" className="hover:underline">
            FAQ
          </Link>
          <Link href="#contact" className="hover:underline">
            Contact
          </Link>
        </nav>

      
        <div
          className="
            flex items-center gap-2
            /* Mobile: full row below heading, centered */
            w-full justify-center
            /* Desktop: original right-side action group */
            md:w-auto md:justify-start
          "
        >
          <Button
            aria-label="Visit site"
            size="sm"
            onClick={() => window.open(BRAND.siteUrl, "_blank")}
          >
            Visit Site
          </Button>
          <Button
            aria-label="Download app"
            variant="secondary"
            size="sm"
            onClick={() => window.open(BRAND.appUrl, "_blank")}
          >
            Download App
          </Button>
          <Button
            aria-label="Toggle theme"
            variant="ghost"
            size="sm"
            onClick={() => setTheme(isDark ? "light" : "dark")}
            title="Toggle theme"
          >
            {isDark ? (
              <Sun className="h-4 w-4" />
            ) : (
              <Moon className="h-4 w-4" />
            )}
          </Button>
        </div>
      </div>
    </header>
  );
}
