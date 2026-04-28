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
  title: "Rewind X — Undo Mistakes on Crypto Transfers",
  description:
    "Send crypto with a rewind window. Protected ERC-20 transfers on BNB Chain (3 min–24h). Non-custodial. On-chain.",
  keywords: [
    "protected transfers",
    "ERC-20",
    "rewind",
    "non-custodial",
    "on-chain",
    "BNB Chain",
    "DeFi",
    "blockchain",
    "smart contracts",
  ],
  icons: {
    icon: [
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    shortcut: "/icon-192.png",
    apple: "/apple-touch-icon.png",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Rewind X — Undo Mistakes on Crypto Transfers",
    description:
      "Send crypto with a rewind window. Protected ERC-20 transfers on BNB Chain (3 min–24h). Non-custodial. On-chain.",
    type: "website",
    siteName: "Rewind X",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Rewind X — Undo Mistakes on Crypto Transfers",
    description:
      "Send crypto with a rewind window. Protected ERC-20 transfers on BNB Chain (3 min–24h). Non-custodial. On-chain.",
    images: ["/og-image.png"],
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
