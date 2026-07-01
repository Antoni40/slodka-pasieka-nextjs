import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter"
})

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair"
})

export const metadata: Metadata = {
  title: "Słodka Pasieka | Strona autorska",
  description: "Nowoczesne słodkości, praliny i torty",
  openGraph: {
    title: 'Słodka Pasieka | Strona autorska',
    description: 'Zamów pyszne, naturalne ciasta i bezy.',
    url: 'https://slodka-pasieka-nextjs-production.vercel.app/',
    siteName: 'Słodka Pasieka',
    locale: 'pl_PL',
    type: 'website',
    images: [
      {
        url: 'https://slodka-pasieka-nextjs-production.vercel.app/logo.svg',
        width: 50,
        height: 50,
        alt: 'Słodka Pasieka - Logotyp i wypieki',
        type: 'image/svg'
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pl"
      className={`${inter.variable} ${playfair.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-stone-50 mx-auto">{children}</body>
    </html>
  );
}
