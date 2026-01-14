import type React from "react"
import type { Metadata, Viewport } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import FloatingButtons from "@/components/floating-buttons"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "DeenSphere - Global Islamic Knowledge & Community Platform | Learn Islam",
  description:
    "Join DeenSphere, the all-in-one Islamic app for learning Quran, connecting with scholars, Islamic history, debates, lectures, and building a global Muslim community. Coming soon on Android & iOS.",
  keywords: "Islamic knowledge, Muslim community, Quran learning, Islamic scholars, Islamic history, halal, Islamic education, Muslim app, Islamic lectures, comparative religion, Islamic debates, Muslim scientists, Islamic inventions, fiqh, hadith, tafsir, Deen Sphere",
  authors: [{ name: "DeenSphere" }],
  creator: "DeenSphere",
  publisher: "DeenSphere",
  robots: "index, follow",
  openGraph: {
    title: "DeenSphere - The All-In-One Islamic App",
    description: "Learn, connect, and grow with millions of Muslims worldwide. Explore Islamic knowledge, connect with scholars, and join a global community.",
    type: "website",
    locale: "en_US",
    siteName: "DeenSphere",
  },
  twitter: {
    card: "summary_large_image",
    title: "DeenSphere - Global Islamic Knowledge Platform",
    description: "The all-in-one Islamic app for learning, community, and spiritual growth.",
  },
  generator: 'v0.app'
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  themeColor: "#0B0B0B",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className={`font-sans antialiased bg-gradient-to-b from-[#0B0B0B] to-[#141414] text-white`}>
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <FloatingButtons />
        <Analytics />
      </body>
    </html>
  )
}
