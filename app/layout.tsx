import type React from "react";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { ThemeToggle } from "@/components/theme-toggle";
import StructuredData from "@/components/structured-data";
import { ErrorBoundary } from "@/components/error-boundary";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}`
    : "http://localhost:3000");
const profileDescription =
  "AI Engineer from India building systems that scale ops, connect scattered workflows, reduce manual effort, and help teams move faster.";

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
  title: "Karan Paliwal",
  description: profileDescription,
  keywords: [
    "AI Engineer",
    "AI Automation",
    "AI Agents",
    "Agentic Engineering",
    "n8n Automation",
    "Context Engineering",
    "Operations Automation",
    "Lead Generation",
    "Outbound Automation",
    "TypeScript Developer",
    "JavaScript Developer",
    "Software Engineer",
    "Portfolio",
    "India",
    "Karan Paliwal",
    "Call2Code Hackathon",
    "BitBash",
    "MUJ",
    "NIT Kurukshetra",
    "IILM University",
    "Lal Bahadur Shastri Smarak Jaym Sr School",
    "Best Portfolio",
    "Minimalist Portfolio",
    "69ftw",
    "Developer Portfolio",
    "Student Portfolio",
    "Tech Portfolio",
    "Modern Portfolio",
    "Clean Portfolio",
    "Professional Portfolio",
    "Portfolio Website",
    "Personal Website",
    "Developer Website",
  ],
  authors: [{ name: "Karan Paliwal" }],
  creator: "Karan Paliwal",
  publisher: "Karan Paliwal",
  generator: "Next.js",
  applicationName: "Karan Paliwal Portfolio",
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
    siteName: "Karan Paliwal Portfolio",
    title: "Karan Paliwal",
    description: profileDescription,
    images: [
      {
        url: "https://iili.io/KB9qfG1.png",
        width: 1200,
        height: 630,
        alt: "Karan Paliwal Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@karanpaliwalll",
    creator: "@karanpaliwalll",
    title: "Karan Paliwal",
    description: profileDescription,
    images: ["https://iili.io/KB9qfG1.png"],
  },
  icons: {
    icon: "https://media.licdn.com/dms/image/v2/D4E03AQFoa40cJ2WOMA/profile-displayphoto-scale_400_400/B4EZgKXbIXGoAo-/0/1752520570498?e=1759968000&v=beta&t=cckryikVjD2X7Nvhcmw5I8B1w6sQofIPdTWlpbmkDSU",
    shortcut:
      "https://media.licdn.com/dms/image/v2/D4E03AQFoa40cJ2WOMA/profile-displayphoto-scale_400_400/B4EZgKXbIXGoAo-/0/1752520570498?e=1759968000&v=beta&t=cckryikVjD2X7Nvhcmw5I8B1w6sQofIPdTWlpbmkDSU",
    apple:
      "https://media.licdn.com/dms/image/v2/D4E03AQFoa40cJ2WOMA/profile-displayphoto-scale_400_400/B4EZgKXbIXGoAo-/0/1752520570498?e=1759968000&v=beta&t=cckryikVjD2X7Nvhcmw5I8B1w6sQofIPdTWlpbmkDSU",
  },
  category: "technology",
  classification: "Portfolio Website",
  other: {
    "contact:email": "karanpaliwal.work@gmail.com",
    "contact:phone_number": "+91-9416293757",
    "contact:country_name": "India",
    "contact:region": "Delhi",
    "contact:locality": "New Delhi",
    "og:image:width": "1200",
    "og:image:height": "630",
    "og:image:type": "image/png",
    "og:image:alt": "Karan Paliwal Portfolio",
    "og:site_name": "Karan Paliwal Portfolio",
    "og:locale": "en_US",
    "og:type": "website",
    "og:url": siteUrl,
    "og:title": "Karan Paliwal",
    "og:description": profileDescription,
    "og:image": "https://iili.io/KB9qfG1.png",
    "twitter:image:alt": "Karan Paliwal Portfolio",
    "twitter:url": siteUrl,
    "whatsapp:image": "https://iili.io/KB9qfG1.png",
    "whatsapp:title": "Karan Paliwal",
    "whatsapp:description": profileDescription,
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
      <head>
        <StructuredData />
      </head>
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
