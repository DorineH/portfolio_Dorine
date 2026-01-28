import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ThemeRegistry from "@/theme/ThemeRegistry";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Dorine Henry – Développeuse Web Full‑Stack JS/TS",
    template: "%s | Dorine Henry",
  },
  description:
    "Développeuse web full‑stack JavaScript/TypeScript (Next.js, React, NestJS, Node.js). 2 ans d'expérience en alternance. Disponible pour un CDI.",
  openGraph: {
    title: "Dorine Henry – Développeuse Web Full‑Stack JS/TS",
    description:
      "Front-end (Next.js, React, MUI) & Back-end (NestJS, Node, PostgreSQL). Tests (Cypress, Jest), CI/CD.",
    url: "https://dorine-henry.dev",
    siteName: "Portfolio Dorine Henry",
    images: [
      {
        url: "/lettre_D.jpg",
        width: 1200,
        height: 630,
        alt: "Dorine Henry – Portfolio",
      },
    ],
    locale: "fr_FR",
    type: "website",
  },
  alternates: { canonical: "/" },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body className={inter.className}>
        <ThemeRegistry>{children}</ThemeRegistry>
      </body>
    </html>
  );
}
