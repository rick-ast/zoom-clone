import './globals.css'

import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const font = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Yoom',
  description: 'A Zoom clone App, Yet another Zoom',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${font.className} bg-dark-2`}>{children}</body>
    </html>
  )
}
