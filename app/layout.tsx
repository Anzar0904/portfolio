import type React from "react";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { ErrorBoundary } from "@/components/error-boundary";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}`
    : "http://localhost:3000");
const profileDescription =
  "AI/ML Engineer & Full-Stack Developer from Lucknow, India building end-to-end systems from model training to deployed UI.";

const geistSans = Geist({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-geist-sans",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-geist-mono",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Mohammad Anzar Akhtar",
  description: profileDescription,
  keywords: [
    "AI Engineer",
    "ML Engineer",
    "Full-Stack Developer",
    "PyTorch",
    "Next.js 15",
    "TypeScript",
    "Supabase",
    "PostgreSQL",
    "Flask",
    "Attention U-Net",
    "Deep Learning",
    "Infosys",
    "IILM University",
    "Mohammad Anzar Akhtar",
    "Anzar Akhtar",
    "Portfolio",
    "Minimalist Portfolio",
    "Developer Portfolio",
  ],
  authors: [{ name: "Mohammad Anzar Akhtar" }],
  creator: "Mohammad Anzar Akhtar",
  publisher: "Mohammad Anzar Akhtar",
  generator: "Next.js",
  applicationName: "Mohammad Anzar Akhtar Portfolio",
  referrer: "origin-when-cross-origin",
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Mohammad Anzar Akhtar Portfolio",
    title: "Mohammad Anzar Akhtar",
    description: profileDescription,
    images: [
      {
        url: "/facedemo.jpeg",
        width: 1200,
        height: 630,
        alt: "Mohammad Anzar Akhtar Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mohammad Anzar Akhtar",
    description: profileDescription,
    images: ["/facedemo.jpeg"],
  },
  icons: {
    icon: "/facedemo.jpeg",
    shortcut: "/facedemo.jpeg",
    apple: "/facedemo.jpeg",
  },
  category: "technology",
  classification: "Portfolio Website",
  other: {
    "contact:email": "anzar0904@gmail.com",
    "contact:phone_number": "+91-6393268624",
    "contact:country_name": "India",
    "contact:locality": "Lucknow",
    "og:site_name": "Mohammad Anzar Akhtar Portfolio",
    "og:locale": "en_US",
    "og:type": "website",
    "og:url": siteUrl,
    "og:title": "Mohammad Anzar Akhtar",
    "og:description": profileDescription,
    "og:image": "/facedemo.jpeg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      suppressHydrationWarning
    >
      <body className="font-sans min-h-dvh bg-grid text-foreground">
        <ErrorBoundary>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <div className="min-h-dvh">{children}</div>
          </ThemeProvider>
        </ErrorBoundary>
      </body>
    </html>
  );
}
