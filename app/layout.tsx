import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Launchly | Professional & Fast Landing Page',
  description: 'Launchly - A modern, responsive landing page built with Next.js, featuring smooth animations and optimal performance.',
  keywords: 'Launchly, landing page, Next.js, React, modern web design',
  authors: [{ name: 'Your Name' }],
  openGraph: {
    title: 'Launchly - Professional Landing Page',
    description: 'Launchly - A professional landing page built with Next.js',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
  viewport: 'width=device-width, initial-scale=1',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  )
}

