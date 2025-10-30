import type { Metadata } from "next";
import "./globals.css";
import { Inter, Playfair_Display } from "next/font/google";
import { ThemeProvider } from "next-themes";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { BRAND } from "@/lib/brand";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" });

export const metadata: Metadata = {
  title: "UK Cosmetic – Cosmetics & Gift Center, Jaunpur",
  description:
    "UK Cosmetic: authentic cosmetics, curated gifts, and friendly service in Jaunpur. Visit our store or download the app.",
  openGraph: {
    title: "UK Cosmetic – Cosmetics & Gift Center, Jaunpur",
    description:
      "UK Cosmetic: authentic cosmetics, curated gifts, and friendly service in Jaunpur.",
    type: "website",
    url: BRAND.siteUrl,
  },
  twitter: {
    card: "summary_large_image",
    title: "UK Cosmetic – Cosmetics & Gift Center, Jaunpur",
    description:
      "UK Cosmetic: authentic cosmetics, curated gifts, and friendly service in Jaunpur.",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${playfair.variable} font-sans`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Navbar />
          {children}
          <Footer />
          <ToastContainer position="top-center" autoClose={2500} closeOnClick pauseOnHover />
        </ThemeProvider>
      </body>
    </html>
  );
}
