import { BRAND } from "@/lib/brand";

export default function Footer() {
  return (
    <footer className="mt-16 border-t border-[hsl(var(--border))] py-10 text-sm">
      <div className="container mx-auto flex flex-col gap-4 px-4 md:flex-row md:items-center md:justify-between">
        <div>
          <div className="font-medium">UK Cosmetic</div>
          <div className="text-[hsl(var(--muted-foreground))]">
            {BRAND.address}
          </div>
          <div className="mt-1 text-[hsl(var(--muted-foreground))]">
            Owner (Proprietor): <span className="font-medium">{BRAND.owner}</span>
          </div>
          <div className="mt-1 text-[hsl(var(--muted-foreground))]">
            Developer: <span className="font-medium">{BRAND.developer}</span>
          </div>
        </div>
        <nav className="flex gap-6 text-[hsl(var(--muted-foreground))]">
          <a href="#categories" className="hover:underline">Categories</a>
          <a href="#gifts" className="hover:underline">Gifts</a>
          <a href="#reviews" className="hover:underline">Reviews</a>
          <a href="#faq" className="hover:underline">FAQ</a>
          <a href="#contact" className="hover:underline">Contact</a>
        </nav>
        <div className="opacity-70">
          © {new Date().getFullYear()} UK Cosmetic. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
