'use client';
import Hero from "@/components/Hero";
import Categories from "@/components/Categories";
import GiftCenter from "@/components/GiftCenter";
import SocialProof from "@/components/SocialProof";
import AppCTA from "@/components/AppCTA";
import MapEmbed from "@/components/MapEmbed";
import FAQ from "@/components/FAQ";
import { BRAND } from "@/lib/brand";

export default function Page() {
  const localBusinessLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "UK Cosmetic",
    image: `${BRAND.siteUrl}/logo-uk.svg`,
    address: {
      "@type": "PostalAddress",
      streetAddress:
        "UK cosmetics and Gift Center, Shakarmandi, Near Mohammad Hasan, Petrol Pump ke samne",
      addressLocality: "Jaunpur",
      postalCode: "222001",
      addressCountry: "IN",
    },
    url: BRAND.siteUrl,
    telephone: BRAND.phone || undefined,
  };

  const webSiteLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "UK Cosmetic",
    url: BRAND.siteUrl,
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webSiteLd) }}
      />
      <Hero />
      <Categories />
      <GiftCenter />
      <SocialProof />
      <AppCTA />
      <MapEmbed />
      <FAQ />
    </main>
  );
}
