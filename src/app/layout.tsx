import type { Metadata, Viewport } from "next";
import { Inter, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
};

export const metadata: Metadata = {
  title: "Rewind X — Ctrl+Z for Crypto",
  description:
    "Reversible ERC-20 transfers with a deterministic 24-hour undo window. Non-custodial, rule-based, no admin keys.",
  keywords: [
    "crypto",
    "ERC-20",
    "reversible transfers",
    "undo",
    "non-custodial",
    "DeFi",
    "blockchain",
    "smart contracts",
    "ethereum",
  ],
  icons: {
    icon: "/logov2.png",
    apple: "/logov2.png",
  },
  openGraph: {
    title: "Rewind X — Ctrl+Z for Crypto",
    description:
      "Reversible ERC-20 transfers with a deterministic 24-hour undo window. Non-custodial, rule-based, no admin keys.",
    type: "website",
    siteName: "Rewind X Protocol",
    images: [
      {
        url: "/og.png",
        width: 1536,
        height: 1024,
        alt: "Rewind X Protocol - Reversible ERC-20 Transfers",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Rewind X — Ctrl+Z for Crypto",
    description:
      "Reversible ERC-20 transfers with a deterministic 24-hour undo window.",
    images: ["/og.png"],
  },
  metadataBase: new URL("https://rewindx.io"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
