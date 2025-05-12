import type React from 'react'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/header'
import { ThemeProvider } from '@/components/theme-provider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Campus Code 2025 | SDE Tips & Tricks Webinar',
  description:
    'Join industry experts as they share tips for excelling as a Software Development Engineer in this exclusive webinar.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`min-h-screen ${inter.className} antialiased`}>
        <ThemeProvider>
          <div className="relative flex min-h-screen flex-col">
            <Header />
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
