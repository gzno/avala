import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import ErrorBoundary from "@/components/ErrorBoundary"
import PerformanceOptimizer from "@/components/PerformanceOptimizer"
import { Analytics } from "@vercel/analytics/next"
import { SpeedInsights } from "@vercel/speed-insights/next"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
  preload: true,
  weight: ["400", "500", "600", "700"],
  adjustFontFallback: false,
})

export const metadata: Metadata = {
  title: "Avala",
  description: "Truth at your cursor. AI detection that pops up when you highlight, instantly. Get early access to the fastest way to detect AI-generated content online.",
  keywords: "AI detection, AI content detection, artificial intelligence, text analysis, content verification, AI checker",
  authors: [{ name: "Avala" }],
  creator: "Avala",
  publisher: "Avala",
  robots: "index, follow",
  icons: {
    icon: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/icon128-XjCfMVctJG9W9ZYrkF8E5RnWwfKNmd.png",
    shortcut: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/icon128-XjCfMVctJG9W9ZYrkF8E5RnWwfKNmd.png",
    apple: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/icon128-XjCfMVctJG9W9ZYrkF8E5RnWwfKNmd.png",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://avala.ai",
    title: "Avala",
    description: "Truth at your cursor. AI detection that pops up when you highlight, instantly.",
    siteName: "Avala",
    images: [
      {
        url: "https://avala.ai/og-image.png",
        width: 1200,
        height: 630,
        alt: "Avala - Home",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@avalaai",
    creator: "@avalaai",
    title: "Avala",
    description: "Truth at your cursor. AI detection that pops up when you highlight, instantly.",
    images: ["https://avala.ai/og-image.png"],
  },
  verification: {
    google: "your-google-verification-code",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} antialiased loaded`}>
      <head>
        <link rel="preconnect" href="https://hebbkx1anhila5yf.public.blob.vercel-storage.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://www.youtube.com" />
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
        <meta name="theme-color" content="#000000" />
      </head>
      <body className="font-sans">
        <PerformanceOptimizer />
        <ErrorBoundary>
          <div className="page-transition">{children}</div>
        </ErrorBoundary>
        <Analytics />
        <SpeedInsights />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              document.documentElement.classList.add('loaded');
            `,
          }}
        />
      </body>
    </html>
  )
}
