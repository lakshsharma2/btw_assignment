import type React from "react"
import type { Metadata } from "next"
import { DM_Sans } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-sans",
})

export const metadata: Metadata = {
  title: "SkillShare | UIUC Student Community",
  description:
    "Meet people. Learn something new. Feel like you belong. Small, peer-led workshops that help UIUC students build community through shared learning experiences.",
  generator: "v0.app",
  icons: {
    icon: [
      {
        url: "/skillshare-logo.png",
      },
    ],
    apple: "/skillshare-logo.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${dmSans.className} font-sans antialiased`}>
        <Navigation />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  )
}
